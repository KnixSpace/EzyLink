const login = require("./routes/login");
const urls = require("./routes/urls");
const { initialSet } = require("./functions/redis");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
require("./startup/passport");
app.set("trust proxy", 1);
app.get("/api/hello", (req, res) => {
  res.send("Infinix is Alive!");
});
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "infinix",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV !== "development",
      sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
      domain: process.env.NODE_ENV === "development" ? "localhost" : "ezylink",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_CONNECTION_STRING,
      ttl: 7 * 24 * 60 * 60,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.use(
//   cors({
//     origin: /^/,
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );

app.use(cors());

// require("./startup/db")();
initialSet();
app.use("/auth", login);
app.use("/", urls);

const PORT = 3000 || process.env.PORT;
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to Database...");
    app.listen(PORT, () => {
      console.log(`Server connected on ${PORT}...`);
    });
  })
  .catch((err) => console.log(err));
