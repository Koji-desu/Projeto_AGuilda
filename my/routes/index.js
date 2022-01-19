const express = require('express')
const router = express.Router();
const controllerIndex = require('../controllers/indexController')
const controllerUsers = require('../controllers/usersController')

const validationForm = require('../middlewares/validadorDeForm')

/* GET home page. */
router.get('/', controllerIndex.index)
router.get('/cadastro', controllerIndex.cadastro)
router.post('/cadastro', validationForm, controllerUsers.user)
router.get('/login', controllerIndex.login)
router.post('/login', controllerIndex.logar)
router.get('/anuncios', controllerIndex.anuncios)
router.get('/hub', controllerIndex.hub)

module.exports = router;
