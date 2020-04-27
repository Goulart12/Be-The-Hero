const express = require('express');
const cors = require('cors')
const { errors } = require('celebrate')
const routes = require('./routes');

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/Listar uma informação do back-end
  * POST: Criar uma informaçao no back-end
  * PUT: Alterar uma informaçao no back-end
  * DELETE: Deletar uma informaçao no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos "/:id"
   * Request Body: Corpo da requisiçao, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */

