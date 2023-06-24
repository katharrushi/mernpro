const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    if (!token) {
      throw new Error("Authentication failed: No token provided");
    }

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    if (!rootUser) {
      throw new Error("Authentication failed: User not found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send(err.message || "Authentication failed");
    console.log(err);
  }
};

module.exports = authenticate;
