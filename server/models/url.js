const mongoose = require("mongoose");
const UrlShema = new mongoose.Schema({
  email: { type: String, default: "" },
  longUrl: { type: String, require },
  shortUrl: String,
  createdOn: { type: Date, default: Date.now() },
});

UrlShema.index({ createdOn: 1 }, { expireAfterSeconds: 5 });

const Url = mongoose.model("Url", UrlShema);

exports.Url = Url;
