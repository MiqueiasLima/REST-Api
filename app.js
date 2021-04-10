const express = require('express');
const app = express();
const routerProduto = require('./routes/produtos');


app.use('/produtos',routerProduto);

module.exports = app;