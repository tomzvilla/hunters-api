const jwt = require('jsonwebtoken');
const config = require('../config/config')
const requireRefreshToken = (req, res, next) => {
  try {
    const refreshTokenCookie = req.cookies.refreshToken;

    if (!refreshTokenCookie) {
        throw new Error("Not found");
    }

    const { _id } = jwt.verify(refreshTokenCookie, config.jwt.refresh);
    req._id = _id;

    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = requireRefreshToken;