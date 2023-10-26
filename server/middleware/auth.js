require("dotenv").config();
function ensurAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(process.env.CLIENT_HOME);
}
module.exports.ensurAuthenticated = ensurAuthenticated;
