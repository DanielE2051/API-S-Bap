const express = require('express');

const newTaskController = require('../controllers/newTask.controller');

const router = express.Router();

const NewTaskController = new newTaskController();

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();


router.post('', jsonParser,(req,res)=>{ 
    
		let title=req.body.title;
        let descripcion = req.body.descripcion;
        let estatus = req.body.estatus;
        let fecha = req.body.fecha;
        let comentarios = req.body.comentarios;
        let responsable = req.body.responsable;
        let tags = req.body.tags;
        let usuario = req.body.usuario;
        let contraseña = req.body.contraseña;
        
		if(title !=undefined && descripcion !=undefined && estatus != undefined && fecha != undefined && usuario != undefined && contraseña != undefined){
            NewTaskController.query(title,descripcion,estatus,fecha,comentarios,responsable,tags,res,usuario,contraseña);
        }else{
            res.send("Te falto alguno de los siguientes parametros title, descripcion, estatus o fecha");
            res.end();
        }    
});

module.exports =router;