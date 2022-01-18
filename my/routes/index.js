const express = require('express')
const router = express.Router();
const controllerIndex = require('../controllers/indexController')

/* GET home page. */
router.get('/', controllerIndex.index)
router.get('/cadastro', controllerIndex.cadastro)
router.post('/cadastro', controllerIndex.cadastrar)
router.get('/login', controllerIndex.login)
router.post('/login', controllerIndex.logar)

module.exports = router;
