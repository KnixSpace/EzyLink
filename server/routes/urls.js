const { limiter } = require("../middleware/rateLimit");
const { Url } = require("../models/url");
const { redis } = require("../redis/redis");
const base62 = require("base-62.js");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

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
  res.send(cliUrl);
  await redis.incr("counter");
});

router.post("/api/url/paid", async (req, res) => {
  let shortUrl = "";
  const { longUrl, custom } = req.body;
  if (custom) {
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
  res.send(cliUrl);
});

router.get("/:surl", async (req, res) => {
  const surl = req.params.surl;
  const url = await Url.findOne({ shortUrl: surl });
  if (!url) {
    return res.send("link expired");
  }
  res.redirect(url.longUrl);
});
module.exports = router;
