const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');
const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/login', isAuthenticated, accountController.getLogin);
router.post('/login', isAuthenticated,accountController.postLogin);

router.get('/register', isAuthenticated,accountController.getRegister);
router.post('/register', isAuthenticated,accountController.postRegister);

router.get('/logout',isAuthenticated,accountController.getLogout);

router.get('/reset-password', isAuthenticated,accountController.getReset);
router.post('/reset-password', isAuthenticated,accountController.postReset);

module.exports = router;