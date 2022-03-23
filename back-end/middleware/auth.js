var jwt = require("jsonwebtoken");

var verifyToken = function(req, res, next) {
  var token =
  req.body.token || req.token || req.headers["x-access-token"];

  if (!token) {
   res.send("A token is required for authentication");
  }
  try {
    var decoded = jwt.verify(token, 'WoolyHamFingers');
    req.user = decoded;
  } catch (err) {
    res.send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;