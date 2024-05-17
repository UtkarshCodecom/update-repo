// middleware/auth.js

const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Assuming you have a User model

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    try {
      const user = await User.findById(decoded.userId);

      if (!user) {
        return res.status(401).json({ message: 'Unauthorized: User not found' });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });
};

module.exports = verifyToken;
