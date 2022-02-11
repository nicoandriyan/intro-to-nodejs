const express = require('express');
const router = express.Router();

const pesertaController = require('../controllers/peserta.controller');
router.get('/', pesertaController.getPeserta);
router.post('/add', pesertaController.postPeserta);

module.exports = router;