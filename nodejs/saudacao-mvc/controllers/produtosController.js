const produtosModel = require('../models/produtosModel');

module.exports = {
    formCadastro: (req, res) => {
        res.sendFile('formCadastro.html', { root: './views' });
    },

    cadastrarProduto: (req, res) => {
        const novoProduto = req.body;
        produtosModel.adicionarProduto(novoProduto);
        res.redirect('/produtos');
    }
};