const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');
const authentication = require('../middleware/authentication');
const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/', isAuthenticated, shopController.getIndex);
router.get('/products',  isAuthenticated,shopController.getProducts);
router.get('/products/:productid', isAuthenticated, shopController.getProduct);
router.get('/categories/:categoryid', isAuthenticated, shopController.getProductsByCategoryId);
router.get('/cart', isAuthenticated,authentication, shopController.getCart);
router.post('/cart', isAuthenticated,authentication, shopController.postCart);
router.post('/delete-cartitem', isAuthenticated,authentication, shopController.postCartItemDelete);
router.get('/orders', isAuthenticated,authentication, shopController.getOrders);
router.post('/create-order', isAuthenticated,authentication, shopController.postOrder);

module.exports = router;