const express = require('express');
const router = express.Router();

const { landing, about, index } = require('../controllers/landing.controller');

router.get('/', landing);
router.get('/about', about);
router.get('/index', index);

module.exports = router;