const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => {
      console.log("Connected to Database...");
    })
    .catch((err) => console.log(err));
};
