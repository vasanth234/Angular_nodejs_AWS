const express = require('express');
const router = express.Router();

const { bookcontroller } = require('../controllers/bookcontroller');

router.post('/', bookcontroller);

module.exports = router;