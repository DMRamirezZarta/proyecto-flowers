const express = require('express');
const router = express.Router();

const {login, doLogin, register, doRegister, logout} = require('../controllers/auth.controller');

router.get('/login', login);
router.post('/Login', doLogin);
router.get('/register',register );
router.post('/Register', doRegister);
router.get('/logout', logout);




module.exports = router;
