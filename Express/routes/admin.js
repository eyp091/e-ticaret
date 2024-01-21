const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const isAdmin = require('../middleware/isAdmin');
const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/products', isAuthenticated,isAdmin, adminController.getProducts);

router.get('/add-product', isAuthenticated,isAdmin, adminController.getAddProduct);

router.post('/add-product',  isAuthenticated,isAdmin, adminController.postAddProduct);

router.get('/products/:productid',  isAuthenticated,isAdmin, adminController.getEditProduct);

router.post('/products', isAuthenticated,isAdmin, adminController.postEditProduct);

router.post('/delete-product',  isAuthenticated,isAdmin, adminController.postDeleteProduct);

router.get('/add-category', isAuthenticated,isAdmin, adminController.getAddCategory);

router.post('/add-category',  isAuthenticated,isAdmin, adminController.postAddCategory);

router.get('/categories', isAuthenticated,isAdmin, adminController.getCategories);

router.get('/categories/:categoryid', isAuthenticated,isAdmin, adminController.getEditCategory);

router.post('/categories', isAuthenticated,isAdmin, adminController.postEditCategory);

router.post('/delete-category',  isAuthenticated,isAdmin, adminController.postDeleteCategory);

module.exports = router;