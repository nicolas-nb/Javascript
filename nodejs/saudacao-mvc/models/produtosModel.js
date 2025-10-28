module.exports = {
  cadastrar: ({id, desc, qnt, valor, nome})  => {
    return `o produto ${nome}, com ID ${id}, quantidade ${qnt}, valor ${valor} foi cadastrado com sucesso!`;
    }
}
        