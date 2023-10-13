const { updateData } = require("../functions/urldata");
const { ensurAuthenticated } = require("../middleware/auth");
const { limiter } = require("../middleware/rateLimit");
const { UrlData } = require("../models/paidUrl");
const { Url } = require("../models/url");
const { redis } = require("../functions/redis");
const base62 = require("base-62.js");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/:shortUrl", async (req, res) => {
  const shortUrl = req.params.shortUrl;
  const url = await Url.findOne({ shortUrl });
  if (!url) {
    const message = {
      error: "Link Expired",
    };
    return res.send(message);
  }
  res.redirect(url.longUrl);
  updateData(shortUrl);

  //Access data storing
});

router.post("/api/url/free", limiter, async (req, res) => {
  const { longUrl } = req.body;
  const count = await redis.get("counter");
  const shortUrl = base62.encode(count);
  const cliUrl = process.env.PRODUCTION_HOST + shortUrl;
  const newUrl = new Url({
    longUrl,
    shortUrl,
  });
  await newUrl.save();
  await redis.incr("counter");
  const shortUrlRes = {
    shortUrl: cliUrl,
  };

  res.send(JSON.stringify(shortUrlRes));
});

router.post("/api/url/paid", ensurAuthenticated, async (req, res) => {
  let shortUrl = "";

  const { longUrl, custom, email } = req.body;

  if (custom) {
    const findCustom = await Url.findOne({ shortUrl: custom });
    if (findCustom) {
      const already = {
        error: "not available",
      };
      return res.send(JSON.stringify(already));
    }
    shortUrl = custom;
  } else {
    const count = await redis.get("counter");
    shortUrl = base62.encode(count);
    await redis.incr("counter");
  }

  const cliUrl = process.env.PRODUCTION_HOST + shortUrl;

  const newUrl = new Url({
    longUrl,
    shortUrl,
  });
  await newUrl.save();

  const shortUrlRes = {
    shortUrl: cliUrl,
  };

  res.send(JSON.stringify(shortUrlRes));

  //UrlData Storing
  const newUrlData = new UrlData({
    email,
    longUrl,
    shortUrl,
  });

  await newUrlData.save();
});

router.get("/api/url/dashboard/data", async (req, res) => {
  const geoData = [];
  const lineData = [];
  const total = 0;
  const { email } = req.body;
  const findData = await UrlData.find({ email }).select({
    totalClicked: 1,
    clickPerCountry: 1,
    weeklyClick: 1,
  });
  findData.map((rawData) => {
    const { totalClicked, weeklyClick, clickPerCountry } = rawData;
    total += totalClicked;
    clickPerCountry.map((data) => {
      const { country, click } = data;
      const ndata = {
        country,
        click,
      };
      if (geoData.some((item) => item.country === country)) {
        const index = geoData.findIndex((item) => item.country === country);
        if (index != -1) {
          geoData[index].click += click;
        }
      } else {
        geoData.push(ndata);
      }
    });

    weeklyClick.map((data) => {
      const { date, click } = data;
      const ndata = {
        date,
        click,
      };
      if (lineData.some((item) => item.date === date)) {
        const index = lineData.findIndex((item) => item.data === date);
        if (index != -1) {
          lineData[index].click += click;
        }
      } else {
        lineData.push(ndata);
      }
    });
  });

  const clickData = {
    total,
    geoData,
    lineData,
  };

  res.send(JSON.stringify(clickData));
});

router.get("/api/url/link/all", async (req, res) => {
  const allData = [];
  const { email } = req.body;
  const findData = await UrlData.find({ email }).select({
    createdOn: 1,
    shortUrl: 1,
    totalClicked: 1,
  });

  findData.map(async (rawData) => {
    const { createdOn, shortUrl, totalClicked } = rawData;
    let isActive = false;
    const findUrl = await Url.findOne({ shortUrl });
    if (findUrl) {
      isActive = true;
    }
    const nData = {
      isActive,
      createdOn,
      shortUrl,
      totalClicked,
    };
    allData.push(nData);
  });

  const linkData = {
    allData,
  };

  res.send(JSON.stringify(linkData));
});

router.get("/api/url/link/analytics", async (req, res) => {
  let isActive = false;
  const { email, shortUrl } = req.body;
  const findData = await UrlData.findOne({ email, shortUrl }).select({
    createdOn: 1,
    shortUrl: 1,
    totalClicked: 1,
    longUrl: 1,
    weeklyClick: 1,
    clickPerCountry: 1,
  });

  const { createdOn, longUrl, totalClicked, weeklyClick, clickPerCountry } =
    findData;

  const findUrl = await Url.findOne({ shortUrl });

  if (findUrl) {
    isActive = true;
  }

  const linkAnalytics = {
    isActive,
    createdOn,
    shortUrl,
    longUrl,
    totalClicked,
    weeklyClick,
    clickPerCountry,
  };

  res.send(JSON.stringify(linkAnalytics));
});

module.exports = router;
