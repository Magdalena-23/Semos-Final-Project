const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.status(403).send("Token is not valid!");
    req.user = user;
    console.log(req.user);
    next();
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).send("You are not authorized!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyAdmin,
};
