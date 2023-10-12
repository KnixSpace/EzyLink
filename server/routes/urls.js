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

router.get("/:surl", async (req, res) => {
  const surl = req.params.surl;
  const url = await Url.findOne({ shortUrl: surl });
  if (!url) {
    const message = {
      error: "Link Expired",
    };
    return res.send(message);
  }
  res.redirect(url.longUrl);
  updateData(surl);

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

module.exports = router;
