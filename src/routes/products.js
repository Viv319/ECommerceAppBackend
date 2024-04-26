const express = require('express')

const { 
  getProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../controllers/products.js')

const router = express.Router()

router.get('/products', getProducts)

router.post('/products', createProduct)

router.patch('/products/:id', updateProduct)

router.delete('/products/:id', deleteProduct)

module.exports = router