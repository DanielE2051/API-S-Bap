const express = require('express');
const allTaskController = require('../controllers/allTask.controller');
const router = express.Router();
const AllTaskController = new allTaskController();

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

const createDB = require('../mysql/db');
const CreateDB = new createDB();

router.get('',jsonParser, (req,res)=>{
    let usuario = req.body.usuario;
    let contraseña = req.body.contraseña;

    if(usuario != undefined && contraseña != undefined){
        AllTaskController.query(usuario,contraseña,res);
    }else{
        res.send("Te falto alguno de los siguientes parametros usuario o contraseña");
        res.end();
    }    
});

module.exports =router;