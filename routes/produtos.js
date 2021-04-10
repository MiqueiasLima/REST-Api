const express = require('express');
const router = express.Router();

//Retorna Todos os Produtos
router.get('/',(req,res,next)=>{

    res.status(200).send({
        mensagem:'OK, USANDO GET na ROTA DE PRODUTOS'
    });

});

//Insere um produto
router.post('/',(req,res,next) =>{

    res.status(201).send({
        mensagem:'POST Executado com Sucesso'
    })

})

//Retorna os Dados de um produto
router.get('/:id_produto',(req,res,next)=>{

    const id = req.params.id_produto;
    if(id === 'especial'){
        res.status(200).send({
            mensagem:'Você encontrou o ID especial',
            id:id
        });

    }else{
        res.status(200).send({
            mensagem:'Você passou um ID'
        })
    }

})

//Atualizando um Produto no BD
router.patch('/',(req,res,next)=>{
    res.status(201).send({
        mensagem:'Atualizando um produto no BD'
    });
});

//Deletando um Produto no BD
router.delete('/',(req,res,next) =>{
    res.status(201).send({
        mensagem:'DELETANDO um produto no BD'
    });
});

module.exports = router;