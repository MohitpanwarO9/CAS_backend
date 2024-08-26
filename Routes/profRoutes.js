const express = require('express');
const router = express.Router();

const  {createProf} = require('../Controllers/profController');

router.route('/create').post(createProf);

module.exports = router;