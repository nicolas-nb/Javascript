//const fs = require('fs');
import fs from 'fs';

// Lendo o conteúdo de um arquivo
fs.readFile('example.txt', 'utf8', (erro, conteudo_do_arquivo) => {
    if (erro) {
        console.error('Erro ao ler o arquivo:', erro);
        return;
    }
    console.log('Conteúdo do arquivo:', conteudo_do_arquivo);
});

console.log('Esta mensagem aparece primerio');
// A leitura do arquivo é assíncrona, então esta mensagem aparece antes do conteúdo do arquivo