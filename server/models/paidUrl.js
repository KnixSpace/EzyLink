const mongoose = require("mongoose");

const paidUrlSchema = new mongoose.Schema({
  email: { type: String, required: true },
  createdOn: { type: String, default: new Date().toLocaleDateString() },
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  totalClicked: { type: Number, default: 0 },
  clickPerCountry: [{ country: String, click: Number }],
  weeklyClick: [{ date: String, click: Number }],
  timestamp: { type: Date, default: Date.now() },
});

const UrlData = mongoose.model("urlData", paidUrlSchema);

exports.UrlData = UrlData;
