const express = require('express')
const router = express.Router();
const controllerIndex = require('../controllers/indexController')

/* GET home page. */
router.get('/', controllerIndex.index)
router.get('/cadastro', controllerIndex.cadastro)

module.exports = router;
