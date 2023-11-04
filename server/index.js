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
require("dotenv").config();
require("./startup/passport");
app.set("trust proxy", 1);
app.get("/api/hello", (req, res) => {
  res.send("Infinix is Alive!");
});
app.use(express.json());
app.use(
  session({
    secret: "infinix",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true, sameSite: "none", domain: ".onrender.com" },
    // cookie: { secure: false },
    store: MongoStore.create({ mongoUrl: process.env.MONGO_CONNECTION_STRING }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: process.env.CLIENT_HOME,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

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
