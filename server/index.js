const urls = require("./routes/urls");
const { initialSet } = require("./redis/redis");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());
require("dotenv").config();
require("./startup/db")();
initialSet();
app.use("/", urls);


const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server connected on ${PORT}...`);
});
