const express = require('express');

const router = express.Router();
const salesController = require('../controllers/salesController');
const { salesValidation } = require('../middlewares/newSalesValidation');

router.post('/', salesValidation, salesController.insertNewSales);

module.exports = router;
