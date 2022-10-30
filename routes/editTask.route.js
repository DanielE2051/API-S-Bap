const express = require('express');

const editTaskController = require('../controllers/editTask.controller');

const router = express.Router();

const EditTaskController = new editTaskController();

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

router.put('', jsonParser, (req,res)=>{
	let title=req.body.title;
    let titlemod=req.body.titlemod
    let usuario = req.body.usuario;
    let contraseña = req.body.contraseña;  
    
    
    if(title !=undefined && titlemod !=undefined && usuario != undefined && contraseña != undefined){
        EditTaskController.query(title,titlemod,res,usuario,contraseña);
    }else{
        res.send("Te falto alguno de los siguientes parametros usuario, contraseña , title o titlemod");
        res.end();
    }
});

module.exports =router;