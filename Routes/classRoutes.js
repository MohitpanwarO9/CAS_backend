const express = require('express');
const router = express.Router();

const {createClass}  = require('../Controllers/classController')

router.route('/create').post(createClass);

module.exports = router;
