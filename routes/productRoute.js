const express = require('express');
const router = express.Router();
const {getProducts, getProduct, updateProduct, deleteProduct, createProduct} = require('../Controller/productController')


router.post('/', createProduct)

router.get('/', getProducts)

router.get('/:id', getProduct)

router.put('/:id', updateProduct)

router.delete('/', deleteProduct)


module.exports = router;