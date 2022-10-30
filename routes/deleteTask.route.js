const express = require('express');

const deleteTaskController = require('../controllers/deleteTask.controller');

const router = express.Router();

const DeleteTaskController = new deleteTaskController();

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

router.delete('/:title', (req,res)=>{
		let usuario = req.body.usuario;
		let contraseña = req.body.contraseña;
		let title=req.params.title;
		if(title != '' && usuario != undefined && contraseña != undefined){
			DeleteTaskController.query(title,res,usuario,contraseña);
		}else{
			res.send("Te falto alguno de los siguientes parametros titulo, usuario o contraseña");
			res.end();
		}
    
});

module.exports =router;