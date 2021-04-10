const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{

    res.status(200).send({
        mensagem:'OK, USANDO GET na ROTA DE PRODUTOS'
    });

});

router.post('/',(req,res,next) =>{

    res.status(201).send({
        mensagem:'POST Executado com Sucesso'
    })

})

module.exports = router;