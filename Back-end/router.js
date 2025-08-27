const express = require('express');
const controllerProduto = require('./controllers/produtoController');

const routes = express.Router();

routes.get('/List', controllerProduto.List);
routes.post('/Create', controllerProduto.Create);
routes.get('/GetOne', controllerProduto.GetOne);
routes.post('/Update', controllerProduto.Update);
routes.post('/Delete', controllerProduto.Delete);

module.exports = routes;