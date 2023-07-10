const express = require('express');
const productControllers = require('../controllers/products.controllers')
const router = express.Router();

router.post('/store-products', productControllers.storeProducts);

router.get('/list-products', productControllers.listProducts);

module.exports = router;