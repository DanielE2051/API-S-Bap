const createDB = require('../mysql/db');
const CreateDB = new createDB();

class deleteTask{

    constructor(){}

    query(title,res,usuario,contraseña){
        CreateDB.deleteTask(title,res,usuario,contraseña);
    }
}

module.exports = deleteTask;