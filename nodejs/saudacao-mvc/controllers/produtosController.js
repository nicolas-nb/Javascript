const produtosModel = require('../models/produtosModel');
const { produtos } = require('./siteController');

module.exports = {
    formCadastrar (req, res) {
        res.sendFile('formCadastro.html', { root: './views' });
    },
    cadastrar: (req, res)  => {
        const {id, desc, qnt, valor, nome} = req.body;
        const mensagemCadastro = produtosModel.cadastrar = {id, desc, qnt, valor, nome};
        res.send(`<h1>${mensagemCadastro}</h1>`);
    }

};