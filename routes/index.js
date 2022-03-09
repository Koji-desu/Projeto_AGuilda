const express = require('express')
const router = express.Router();
const controllerIndex = require('../controllers/indexController')
const controllerUsers = require('../controllers/usersController')


const validationForm = require('../middlewares/validadorDeForm')

/* GET home page. */
router.get('/', controllerIndex.logged )
router.get('/cadastro', controllerIndex.cadastro)
router.post('/cadastro', validationForm, controllerUsers.cadastrarUser)
router.get('/login', controllerIndex.login)
router.post('/login', controllerUsers.logar)
router.get('/logout', controllerIndex.logout)
router.get('/anuncios', controllerIndex.anuncios)
router.get('/hub', controllerIndex.hub)
router.get('/perfil', controllerIndex.perfil)

module.exports = router;
