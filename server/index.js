const login = require("./routes/login");
const urls = require("./routes/urls");
const { initialSet } = require("./functions/redis");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

require("dotenv").config();
require("./startup/passport");
app.set("trust proxy", 1);
app.use(express.json());

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
  maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000,
};

app.use(
  session({
    secret: "infinix",
    resave: false,
    saveUninitialized: true,
    cookie: { ...cookieOptions, domain: ".onrender.com" },
    store: MongoStore.create({ mongoUrl: process.env.MONGO_CONNECTION_STRING }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: /^/,
    credentials: true,
  })
);

app.get("/hello", (req, res) => {
  res.send("server is working");
});

require("./startup/db")();
initialSet();
app.use("/auth", login);
app.use("/", urls);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server connected on ${PORT}...`);
});
