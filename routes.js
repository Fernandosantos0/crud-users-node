const express = require('express');

const routes = express.Router();

/* Importando o controller */
const UserController = require('./src/controllers/UserController');

/* Rotas */
routes.get('/', UserController.home);

module.exports = routes;