const express = require('express');
const userRoutes = require('./users');
const homeRoutes = require('./home');
const contactUsRoutes = require('./contactUs');

const router = express.Router();
router.get('/', (req, res, next) => {
	res.render('index', { title: 'API  base path' });
});

router.use('/users', userRoutes);
router.use('/home', homeRoutes);
router.use('/contact', contactUsRoutes);

module.exports = router;
