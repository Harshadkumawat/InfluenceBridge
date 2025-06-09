const jwt = require("jsonwebtoken");
const Auth = require("../model/authmodels");
const expressAsyncHandler = require("express-async-handler");

const adminprotect = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await Auth.findById(decode.id);
      if (req.user && req.user.isadmin) {
        next();
      } else {
        res.status(401);
        throw new Error("You are not admin");
      }
    } catch (error) {
      res.status(401);
      throw new Error("Invalid token: access denied");
    }
  } else {
    res.status(401);
    throw new Error("No token: access denied");
  }
});

module.exports = adminprotect;
