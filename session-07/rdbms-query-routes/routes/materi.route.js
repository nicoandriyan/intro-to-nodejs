const express = require('express');
const router = express.Router();

const materiController = require('../controllers/materi.controller');
router.get('/', materiController.getMateri);

module.exports = router;