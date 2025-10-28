module.exports = {
    adicionarProduto: (id, des, qnt, valor, nome) => {
        return {
            'Produto': nome,
            id: id,
            descricao: des,
            quantidade: qnt,
            valor: valor
        };  
    }
};
        