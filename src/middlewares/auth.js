const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config/config');

const auth = async (req, res, next) => {
  try {
    let token = req.headers?.authorization;
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    if (!token.startsWith('Bearer ')) {
      return res.status(400).json({ message: 'Invalid token format' });
    }

    token = token.split(" ")[1];
    const { _id } = jwt.verify(token, config.jwt.secret);

    if (!_id) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const user = await User.findById(_id).lean();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    req.userId = _id;
    req.roles = user.roles;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    next(error);
  }
};

module.exports = auth;