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
  let i = 0,
    shortUrl;
  do {
    const count = await redis.get("counter");
    shortUrl = base62.encode(count);
    const findUrl = await Url.findOne({ shortUrl });
    if (!findUrl) {
      i = -1;
    }
    await redis.incr("counter");
  } while (i >= 0);

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

router.post("/api/url/dashboard/data", ensurAuthenticated, async (req, res) => {
  const geoData = [["country", "click"]];
  const lineData = [];
  let total = 0;
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
      const ndata = [country, click];
      if (geoData.some(([icountry, _]) => icountry === country)) {
        const index = geoData.findIndex(
          ([icountry, _]) => icountry === country
        );
        if (index != -1) {
          geoData[index][1] += click;
        }
      } else {
        geoData.push(ndata);
      }
    });

    weeklyClick.map((data) => {
      const { date, click } = data;
      const ndata = { date, click };
      if (lineData.some((item) => item.date === date)) {
        const index = lineData.findIndex((item) => item.date === date);
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

router.post("/api/url/link/all", ensurAuthenticated, async (req, res) => {
  const { email } = req.body;
  const findData = await UrlData.find({ email }).select({
    createdOn: 1,
    shortUrl: 1,
    totalClicked: 1,
  });

  const allData = await Promise.all(
    findData.map(async (rawData) => {
      const { createdOn, shortUrl, totalClicked } = rawData;
      let isActive = false;
      const findUrl = await Url.findOne({ shortUrl });

      if (findUrl) {
        isActive = true;
      }

      return {
        isActive,
        createdOn,
        shortUrl,
        totalClicked,
      };
    })
  );
  res.send(JSON.stringify(allData));
});

router.post("/api/url/link/analytics", ensurAuthenticated, async (req, res) => {
  let isActive = false;
  const lineData = [];
  const geoData = [["country", "click"]];
  const { email, shortUrl } = req.body;
  const findData = await UrlData.findOne({ email, shortUrl }).select({
    createdOn: 1,
    shortUrl: 1,
    totalClicked: 1,
    longUrl: 1,
    weeklyClick: 1,
    clickPerCountry: 1,
  });

  if (!findData) {
    const noUrl = { error: "no url fount" };
    return res.send(JSON.stringify(noUrl));
  }

  const { createdOn, longUrl, totalClicked, weeklyClick, clickPerCountry } =
    findData;

  clickPerCountry.map((data) => {
    const { country, click } = data;
    const ndata = [country, click];
    if (geoData.some(([icountry, _]) => icountry === country)) {
      const index = geoData.findIndex(([icountry, _]) => icountry === country);
      if (index != -1) {
        geoData[index][1] += click;
      }
    } else {
      geoData.push(ndata);
    }
  });

  weeklyClick.map((data) => {
    const { date, click } = data;
    const ndata = { date, click };
    if (lineData.some((item) => item.date === date)) {
      const index = lineData.findIndex((item) => item.date === date);
      if (index != -1) {
        lineData[index].click += click;
      }
    } else {
      lineData.push(ndata);
    }
  });

  const findUrl = await Url.findOne({ shortUrl });

  if (findUrl) {
    isActive = true;
  }

  const linkAnalytics = {
    isActive,
    createdOn,
    longUrl,
    totalClicked,
    lineData,
    geoData,
  };

  res.send(JSON.stringify(linkAnalytics));
});

router.delete("api/url/delete", ensurAuthenticated, async (req, res) => {
  const { email, shortUrl } = req.body;
  await Url.findOneAndDelete({ shortUrl });
  await UrlData.findByIdAndDelete({ email, shortUrl });
  res.send(JSON.stringify({ message: "deleted" }));
});

module.exports = router;
