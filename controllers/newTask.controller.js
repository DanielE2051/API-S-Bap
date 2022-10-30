const createDB = require('../mysql/db');
const CreateDB = new createDB();

class newTask{ 

    constructor(){}

    query(title,descripcion,estatus,fecha,comentarios,responsable,tags,res,usuario,contraseña){
        CreateDB.newTask(title,descripcion,estatus,fecha,comentarios,responsable,tags,res,usuario,contraseña);
    }
}

module.exports = newTask;