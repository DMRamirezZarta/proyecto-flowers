const express = require('express');
const router = express.Router();

const {landing, about} = require('../controllers/landing.controller');

router.get('/', landing  );
router.get('/about', about );




module.exports = router;
