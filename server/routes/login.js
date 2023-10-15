require("dotenv").config();
const passport = require("passport");
const router = require("express").Router();

router.get(
  "/api/login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/api/login/success", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Log in successfully",
    user: req.user,
  });
});

router.get("/api/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "Login failed",
  });
});

router.get("/api/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect(process.env.HOME);
  });
});

router.get(
  "/callback",
  passport.authenticate("google", {
    successRedirect: process.env.HOST_DASHBOARD,
    failureRedirect: "/api/login",
  })
);

module.exports = router;
