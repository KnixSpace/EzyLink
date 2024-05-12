require("dotenv").config();
const mongoose = require("mongoose");
const { UrlData } = require("../models/paidUrl");
const updateData = async (shortUrl, ip) => {
  const response = await fetch(
    `https://ipapi.co/${ip}/json/?key=cHyPtxjkU8YjP9qLOiSpLVGYyEWdyCgWycVKuoAaQGRuxQVH9O"`
  );
  const data = await response.json();
  const country = data.country_name;
  // fetch user ip for country
  // const ipData = await fetch(process.env.IP_DATA);
  // const res = await ipData.json();
  // let country = res.country_name;
  // console.log(country, res);

  // if (!country) {
  //   const ipData = await fetch(process.env.IP_DATA_BACKUP);
  //   const res = await ipData.json();
  //   country = res.country;
  // }
  // console.log(country, res);

  // previous monday
  const today = new Date();
  const daysToSubtract = (today.getDay() + 6) % 7;
  const previousMonday = new Date();
  previousMonday.setDate(today.getDate() - daysToSubtract);
  const date = previousMonday.toLocaleDateString("en-US");
  //click logic

  const findDate = await UrlData.findOne({
    shortUrl,
    weeklyClick: { $elemMatch: { date } },
  });

  if (findDate) {
    const findLocation = await UrlData.findOne({
      shortUrl,
      clickPerCountry: { $elemMatch: { country } },
    });
    if (findLocation) {
      const updateOld = await UrlData.updateOne(
        { shortUrl },
        {
          $inc: {
            totalClicked: 1,
            "clickPerCountry.$[elemCountry].click": 1,
            "weeklyClick.$[elemDate].click": 1,
          },
        },
        {
          arrayFilters: [
            { "elemCountry.country": country },
            { "elemDate.date": date },
          ],
        }
      );
    } else {
      const updateLocation = await UrlData.updateOne(
        { shortUrl },
        {
          $inc: { totalClicked: 1, "weeklyClick.$[elemDate].click": 1 },
          $addToSet: { clickPerCountry: { country, click: 1 } },
        },
        { arrayFilters: [{ "elemDate.date": date }] }
      );
    }
  } else {
    const findLocation = await UrlData.findOne({
      shortUrl,
      clickPerCountry: { $elemMatch: { country } },
    });
    if (findLocation) {
      const updateDate = await UrlData.updateOne(
        { shortUrl },
        {
          $inc: { totalClicked: 1, "clickPerCountry.$[elemCountry].click": 1 },
          $addToSet: { weeklyClick: { date, click: 1 } },
        },
        { arrayFilters: [{ "elemCountry.country": country }] }
      );
    } else {
      const updateNew = await UrlData.updateOne(
        { shortUrl },
        {
          $inc: { totalClicked: 1 },
          $addToSet: {
            clickPerCountry: { country, click: 1 },
            weeklyClick: { date, click: 1 },
          },
        }
      );
    }
  }
};

module.exports.updateData = updateData;
