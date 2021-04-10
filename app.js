const express = require('express');
const app = express();
const routerProduto = require('./routes/produtos');
const routerPedidos = require('./routes/pedidos');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use((req,res,next)=>{

    res.hearder('Access-Control-Allow-Origin','*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
        

})


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