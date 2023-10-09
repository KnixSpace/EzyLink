function ensurAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("https://localhost:3000/");
}
module.exports.ensurAuthenticated = ensurAuthenticated;
