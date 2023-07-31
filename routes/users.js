const express = require('express');

const router = express.Router();
const userControler = require('../controller/userController');


router.get('/profile',userControler.profile);
router.get('/signup',userControler.signup);
router.get('/signin',userControler.signin)


module.exports = router;