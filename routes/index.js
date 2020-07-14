const express = require('express');
const userRoutes = require('./users');
const homeRoutes = require('./home');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/home', homeRoutes);

module.exports = router;
