const express = require('express');
const app = express();
const routerProduto = require('./routes/produtos');
const routerPedidos = require('./routes/pedidos');

app.use('/produtos',routerProduto);
app.use('/pedidos',routerPedidos);

module.exports = app;