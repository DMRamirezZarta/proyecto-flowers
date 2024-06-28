const express = require('express');
const router = express.Router();

const { login, doLogin, register, doRegister, logout } = require('../controllers/auth.controller');

router.get('/login', login);
router.post('/login', doLogin);
router.get('/register', register);
router.post('/register', doRegister);
router.get('/logout', logout);

module.exports = router;

