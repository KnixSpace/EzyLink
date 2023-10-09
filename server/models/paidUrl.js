const mongoose = require("mongoose");

const paidUrlSchema = new mongoose.Schema({
  email: { type: String, required: true },
  createdOn: { type: Date, default: Date.now() },
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  location: [{ country: String, click: Number }],
  totalClicked: { type: Number, default: 0 },
});

const UrlData = mongoose.model("urlData", paidUrlSchema);

exports.UrlData = UrlData;
