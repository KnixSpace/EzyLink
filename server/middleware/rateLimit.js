const { rateLimit } = require("express-rate-limit");

const limiter = rateLimit({
  max: 5,
  message: "free url over",
  windowMs: 60 * 60 * 24 * 1000,
});

module.exports.limiter = limiter;
