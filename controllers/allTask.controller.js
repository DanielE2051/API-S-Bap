const createDB = require('../mysql/db');
const CreateDB = new createDB();

class allTask{

    constructor(){}

    query(usuario,contraseña,res){
        CreateDB.allTask(usuario,contraseña,res);
    }
}

module.exports = allTask;