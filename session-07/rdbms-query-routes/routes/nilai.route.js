const express = require('express');
const router = express.Router();

const nilaiController = require('../controllers/nilai.controller');
router.get('/', nilaiController.getNilai);

module.exports = router;