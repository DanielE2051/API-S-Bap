const createDB = require('../mysql/db');
const CreateDB = new createDB();

class Task{

    constructor(){}

    query(title,res,usuario,contraseña){ 
        CreateDB.task(title,res,usuario,contraseña);
    }
}

module.exports = Task;