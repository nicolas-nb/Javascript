const express = require("express");
const router = express.Router();
const produtosController = require('../controllers/siteController')

router.get('/', produtosController.produtos);
router.get('/camisetas', produtosController.camisetas);
router.get('/cadastrar', produtosController.formCadastrar);
router.post('/cadastrar', produtosController.cadastrarProduto);

module.exports = router;