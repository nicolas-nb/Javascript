import http from "http";

const Port = 3000;

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    
    if (url === '/') {
        response.statusCode = 200;
        response.end('<h1>Pagina inicial</h1>');
    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200;
        response.end(
            '<h1>Sobre nos</h1><p>Esta e uma aplicacao de exemplo com node.js puro</p>'
        );
    } else if (url === "/contato") {
        response.statusCode = 200;
        response.end('<h1>Entre em contato conosco</h1>');
    } else if (url=== "/fotos") {
        response.statusCode = 200;
        response.end('<h1>Galeria de fotos</h1>');
    }
    else if (url === "/imagens") {
        response.statusCode = 200;
        response.end('<h1>Galeria de imagens</h1>');
    } else {
        response.statusCode = 404;
        response.end('<h1>Pagina nao encontrada</h1>');
    }
});
server.listen(Port, () => {
    console.log(`Servidor rodando na https://locsalhost:${Port}`);
});