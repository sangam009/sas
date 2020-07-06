const express = require('express');

const router = express.Router();
const getHomeData = require('../service/UI/home');

/* GET home page. */
router.get('/', (req, res, next) => {
	res.render('index', { title: 'Express' });
});

router.get('/home', getHomeData.getHomeData);

module.exports = router;
