const jsonServer = require('json-server');//importando servidor json server
const server = jsonServer.create(); // criando servidor.

const router = jsonServer.router('db.json'); //criando rotas
const middlewares = jsonServer.defaults(); //configurando os middlewares

const port = process.env.PORT ||8080 // configurando porta, se o servidor conseguir pegar uma porta externa acessando o arquivo env ok, caso contrário pega a porta local 8080

server.use(middlewares);
server.use(router);
server.listen(port, () => {//onde o servidor irá ouvir
  console.log(`Json server is running in ${port}`);
});
