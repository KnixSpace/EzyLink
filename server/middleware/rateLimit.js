const { rateLimit } = require("express-rate-limit");

const message = {
  error: "Free url Over",
};

const limiter = rateLimit({
  max: 5,
  message: JSON.stringify(message),
  windowMs: 60 * 60 * 24 * 1000,
});

module.exports.limiter = limiter;
