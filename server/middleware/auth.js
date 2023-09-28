function ensurAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/api/login");
}
module.exports.ensurAuthenticated = ensurAuthenticated;
