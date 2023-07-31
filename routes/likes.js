const express = require('express');

const router = express.Router();
const likesController = require('../controller/likesController');


router.get('/likes',likesController.likes)


module.exports = router;