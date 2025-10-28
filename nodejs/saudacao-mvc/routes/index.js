const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.index);
router.get('/formulario', siteController.formulario);
router.post('/saudacao', siteController.saudacao);
router.get('/login', siteController.login);
router.get('/cadastrar', siteController.formularioCadastro);
router.post('/cadastrar', siteController.cadastrarUsuario);

module.exports = router;
