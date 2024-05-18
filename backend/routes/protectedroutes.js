// routes/protectedRoute.js

const express = require('express');
const router = express.Router();
const verifyToken = require('../Middleware/auth');

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected Route', user: req.user });
});

module.exports = router;
