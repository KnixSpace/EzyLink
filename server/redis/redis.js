const { Redis } = require("ioredis");
// const { Redis } = require("@upstash/redis");
// const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });

const redis = new Redis();
const initialSet = async () => {
  const count = await redis.get("counter");
  console.log(count);
  if (!count) {
    console.log("initial counter set");
    await redis.set("counter", 1);
  }
};

module.exports.redis = redis;
module.exports.initialSet = initialSet;
