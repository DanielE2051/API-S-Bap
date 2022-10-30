const express = require('express');

const taskController = require('../controllers/task.controller');

const router = express.Router();

const TaskController = new taskController();

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

router.get('/:title', jsonParser,(req,res)=>{

		let usuario = req.body.usuario;
		let contraseña = req.body.contraseña;

		console.log("usuarrio "+usuario);
		console.log("contrasseña "+ contraseña)

        let title = '';
		title=req.params.title;
		if(title != '' && usuario != undefined && contraseña != undefined){
           TaskController.query(title,res,usuario,contraseña);
        }else{
			res.status("Te falto alguno de los siguientes parametros titulo, usuario o contraseña");
			res.end();
		}
});

module.exports =router;