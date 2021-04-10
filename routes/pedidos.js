const express = require('express');
const router = express.Router();

//Retorna Todos os Pedidos
router.get('/',(req,res,next)=>{

    res.status(200).send({
        mensagem:'Retorna todos os pedidos'
    });

});

//Insere um Pedido no BD
router.post('/',(req,res,next) =>{

    res.status(201).send({
        mensagem:'Pedido Inserido com Sucesso'
    });

});

//Retorna os Dados de um Pedido
router.get('/:id_pedido',(req,res,next)=>{

    const id = req.params.id_pedido;
        res.status(200).send({
            mensagem:'Retorna os detalhes de um pedido',
            id:id
        });
})


//Deletando um Pedido no BD
router.delete('/',(req,res,next) =>{
    res.status(201).send({
        mensagem:'DELETANDO um produto no BD'
    });
});

module.exports = router;