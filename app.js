const express = require('express');
const app = express();
const routerProduto = require('./routes/produtos');
const routerPedidos = require('./routes/pedidos');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use('/produtos',routerProduto);
app.use('/pedidos',routerPedidos);


app.use((req,res,next)=>{

    const erro = new Error('Não Encontrado');
    erro.status = 404;
    next(erro);

});

app.use((error, req, res)=>{

    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem:error.message
        }
    });

});

module.exports = app;