const clientesModel = require('../models/saudacaoModel');

module.exports = {
    formLogin: (req, res) => {
    res.sendFile('formLogin.html', { root: './views' });
  },

    listarClientes: (req, res) => {
        const { login, senha } = req.body;
        const mensagemAcesso = clientesModel.verificarLogin(login, senha);
        res.send(`<h1>${mensagemAcesso}</h1>`);
    }
};
