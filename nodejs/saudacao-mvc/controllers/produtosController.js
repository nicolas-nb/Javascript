const produtosModel = require('../models/produtosModel');
module.exports = {
    produtos: (req, res) => {
        res.sendfile('produtos.html', {root : './views'});
    },
    camisetas: (req, res) => {
        res.sendFile('camisetas.html', {root: './views'});
    },
    formCadastrar (req, res) {
        res.sendFile('formCadastro.html', { root: './views' });
    },
    cadastrar: (req, res)  => {
        const {id, desc, qnt, valor, nome} = req.body;
        const mensagemCadastro = produtosModel.cadastrar = {id, desc, qnt, valor, nome};
        res.send(`<h1>${mensagemCadastro}</h1>`);
    }
};
