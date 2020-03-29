const express = require('express');
const cors = require('cors');
const routes = require('./routes');      /** Importar rotas de routes.js */
const app = express();

app.use(cors());
app.use(express.json());     /** Informa para o app express que está utilizando JSON para o corpo da requisições. */
app.use(routes);

/** A partir daqui cria-se as rotas, utilizando-se métodos. */

/**
 *      MÉTODOS http
 * 
 *  GET   : Buscar ou listar uma informação do back-end.
 *  POST  : Criar uma informação no back-end. (Ex: Rota para criar um novo usuário)
 *  PUT   : Alterar uma informação no back-end.
 *  DELETE: Deletar uma informação no back-end.
 */

/**
 *      TIPOS DE PARÂMETROS
 *  Query Params: Parâmetros nomeados enviados na rota após o "?" usados em filtros e paginações, por exemplo.
 *  -> Acessa através de: const params = request.query;
 *      app.get('/users?name=Bruno', ...);
 * 
 *  Route Params: Parâmetros utilizados para identificar recursos.
 *  -> Acessa através de: const params = request.params;
 *      app.get('/users/:id');
 *      app.get('/users/1');
 * 
 *  Request Body: Corpo da requisição utilizado para criar ou alterar recursos.
 *  -> Acessa através de: const body = request.body;
 *      app.get('/users');
 */

/**
 *      BANCOS DE DADOS
 *  SQL: MySQL, (SQLite), PostgreSQL, Oracle, Microsoft SQL Server.
 *  NoSQL: MongoDB, CouchDB, etc.
 */

/**
 *  Driver: SELECT * FROM users;
 *  Query Builder: table('users').select('*').where()   <-- (KNEX.JS)
 */

//app.get('/users', (request, response) => {
    ////return response.send("Hello World!");   /** "send" é para enviar um texto, mas o ideal é
    ////                                            trabalhar com respostas em JSON */

    ////const params = request.query;
    ////console.log(params);

    ////const params = request.params;
    ////console.log(params);

    //const body = request.body;
    //console.log(body);

    //return response.json({                    /** OBJETO é representado através de chaves */
        //evt: 'Semana Omnistack 11',
        //aluno: 'Bruno Diedrich'
    //});
//});

//app.post('/users', (request, response) => {
    //const body = request.body;
    //console.log(body);

    //return response.json({
        //evt: 'Semana Omnistack 11',
        //aluno: 'Bruno Diedrich'
    //});
//});

app.listen(3333);