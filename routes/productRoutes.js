const express = require('express')
const { createProduct, getAllProducts, deleteProduct } = require('../controllers/productController')
const { uploadProductImage } = require('../controllers/uploadsController')
const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)
router.route('/uploads').post(uploadProductImage)
router.route('/:id').delete(deleteProduct)


module.exports = router