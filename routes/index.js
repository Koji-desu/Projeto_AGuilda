const express = require('express')
const router = express.Router();
const controllerIndex = require('../controllers/indexController')
const controllerUsers = require('../controllers/usersController')


const validationForm = require('../middlewares/validadorDeForm')

/* ROTAS. */
router.get('/', controllerIndex.logged )
router.get('/cadastro', controllerIndex.cadastro)
// router.post('/cadastro', validationForm, controllerUsers.cadastrarUser) desativando temporiarentemente 
router.get('/login', controllerIndex.login)
// router.post('/login', controllerUsers.logar) desativando temporiarentemente 
router.get('/logout', controllerIndex.logout)
router.get('/anuncios', controllerIndex.anuncios)
router.get('/hub', controllerIndex.hub)
router.get('/perfil', controllerIndex.perfil)
router.get('/faq', controllerIndex.faq)
router.get('/creditos', controllerIndex.creditos)
router.get('/interface', controllerIndex.interface)

module.exports = router;
