const createDB = require('../mysql/db');
const CreateDB = new createDB();

class editTask{

    constructor(){}

    query(title,titlemod,res,usuario,contraseña){
        CreateDB.editTask(title,titlemod,res,usuario,contraseña);
    }
}

module.exports = editTask;