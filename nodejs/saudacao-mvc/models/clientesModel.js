
module.exports = {
    verificarLogin: (login, senha) => {
        let acesso;
        if (login === "usuario" && senha === "senha") {
            acesso = "Logado";
        } else {
            acesso = "Negado";
        }
        return `Olá, ${login}! Seu acesso foi: ${acesso}!`;
    }
};