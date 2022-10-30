var mysql=require('mysql2');

let config={
    host:'localhost',
    user:'root',
    password:'Atlasm51#Cd$Er',
    database:'dbExamen',
    tableData: 'Data',
    tableUser: 'Users'
};


class createDataBase{

    constructor(){}

    conextiondb(){
        let connection=null;
        connection=mysql.createConnection(
            {
                host:config.host,
                user:config.user,
                password:config.password,
                database:config.database
            }
        );
        return connection;
    }
    
    conextioncreatedb(){
        let connection=null;
        connection=mysql.createConnection(
            {
                host:config.host,
                user:config.user,
                password:config.password
            }
        );
        return connection;
    }


	createDB(){
		
        let connection = this.conextioncreatedb();
        connection.connect(function(err) {
            if (err) throw err;
                connection.query("create database if not exists " +config.database, function (err, result) {
                    if (err) throw err;
                });
        });
	}


    createTable(){
		
        let connection = this.conextiondb();
        connection.connect(function(err) {
            if (err) throw err;
            let sql = "CREATE TABLE if not exists "+config.tableData+" (title VARCHAR(255), descripcion VARCHAR(255),estatus VARCHAR(255),fecha VARCHAR(255),comentarios VARCHAR(255), responsable VARCHAR(255),tags VARCHAR(255))";
            connection.query(sql, function (err, result) {
              if (err) throw err;
            });
          });
          connection.connect(function(err) {
            if (err) throw err;
            let sql = "CREATE TABLE if not exists "+config.tableUser+" (usuario VARCHAR(255), contrasena VARCHAR(255))";
            connection.query(sql, function (err, result) {
              if (err) throw err;
            });
          });
	  }

    newTask(title,descripcion,estatus,fecha,comentarios,responsable,tags,res,usuario,contraseña){

        let connection = this.conextiondb();

        connection.connect(function(err) {
          if (err) throw err;
          connection.query("SELECT * FROM "+config.tableUser+ " WHERE usuario = '"+ usuario +"' and contrasena = '"+ contraseña +"'", function (err, result, fields) {
            if (err){
              res.send("Error en la base de datos: "+err );
              res.end();
            }else{
              if(result.length > 0){
                connection.connect(function(err) {
                  if (err) throw err;
                  let sql = "INSERT INTO "+ config.tableData +" (title, descripcion, estatus,fecha,comentarios,responsable,tags) VALUES ('"+title+"','"+ descripcion +"','"+estatus+"','"+fecha+"','"+comentarios+"','"+ responsable +"','"+tags+"')";
                  connection.query(sql, function (err, result) {
                    if (err){
                      res.send("Error en la base de datos: "+err);
                      res.end();
                    }else{
                      res.send("Insertado Correctamente");
                      res.end();
                    }
                  });
                });
              }else{
                res.send("Usuario o contraseña incorrectos");
                res.end();
              }
            }
          });
        });
    }

    editTask(title,titlemod,res,usuario,contraseña){

        let connection = this.conextiondb();

        connection.connect(function(err) {
          if (err) throw err;
          connection.query("SELECT * FROM "+config.tableUser+ " WHERE usuario = '"+ usuario +"' and contrasena = '"+ contraseña +"'", function (err, result, fields) {
            if (err){
              res.send("Error en la base de datos: "+err );
              res.end();
            }else{
              if(result.length > 0){
                  connection.connect(function(err) {
                      if (err) throw err;
                      let sql = "UPDATE "+ config.tableData + " SET title = '"+ titlemod +"' WHERE title = '"+ title +"'";
                      connection.query(sql, function (err, result) {
                        if (err){
                          res.send("Error en la base de datos: "+err);
                          res.end();
                        }else{
                          res.send("Se actualizo correctamente");
                          res.end();
                        }
                      });
                    });
                  }else{
                    res.send("Usuario o contraseña incorrectos");
                    res.end();
                  }
                }
              });
            });      
    }

    deleteTask(title,res,usuario,contraseña){

        let connection = this.conextiondb();

        connection.connect(function(err) {
          if (err) throw err;
          connection.query("SELECT * FROM "+config.tableUser+ " WHERE usuario = '"+ usuario +"' and contrasena = '"+ contraseña +"'", function (err, result, fields) {
            if (err){
              res.send("Error en la base de datos: "+err );
              res.end();
            }else{
              if(result.length > 0){
                  connection.connect(function(err) {
                      if (err) throw err;
                      let sql = "DELETE FROM "+config.tableData+" WHERE title = '"+ title +"'";
                      connection.query(sql, function (err, result) {
                        if (err){
                          res.send("Error en la base de datos: "+err);
                          res.end();
                        }else{
                          res.send("Se Eliminaron "+ result.affectedRows +" columnas con el siguiente titulo "+title);
                          res.end();
                        }
                      });
                    });
                  }else{
                    res.send("Usuario o contraseña incorrectos");
                    res.end();
                  }
                }
              });
            });        
    }

    allTask(usuario,contraseña,res){

        let connection = this.conextiondb();
        
        connection.connect(function(err) {
          if (err) throw err;
          connection.query("SELECT * FROM "+config.tableUser+ " WHERE usuario = '"+ usuario +"' and contrasena = '"+ contraseña +"'", function (err, result, fields) {
            if (err){
              res.send("Error en la base de datos: "+err );
              res.end();
            }else{
              if(result.length > 0){
                  connection.connect(function(err) {
                      if (err) throw err;
                      connection.query("SELECT * FROM "+config.tableData, function (err, result, fields) {
                        if (err){
                          res.send("Error en la base de datos: "+err);
                          res.end();
                        }else{
                          res.send(result);
                          res.end();
                        }
                        console.log(result);
                      });
                  });
                }else{
                  res.send("Usuario o contraseña incorrectos");
                  res.end();
                }
              }
            });
          });    
    }


    task(title,res,usuario,contraseña){
        let connection = this.conextiondb();
        
        connection.connect(function(err) {
          if (err) throw err;
          connection.query("SELECT * FROM "+config.tableUser+ " WHERE usuario = '"+ usuario +"' and contrasena = '"+ contraseña +"'", function (err, result, fields) {
            if (err){
              res.send("Error en la base de datos: "+err );
              res.end();
            }else{
              if(result.length > 0){
                connection.connect(function(err) {
                    if (err) throw err;
                    connection.query("SELECT * FROM "+config.tableData+ " WHERE title = '"+ title +"'", function (err, result, fields) {
                      if (err){
                        res.send("Error en la base de datos: "+err);
                        res.end();
                      }else{
                        res.send(result);
                        res.end();
                      }
                    });
                });
              }else{
                res.send("Usuario o contraseña incorrectos");
                res.end();
              }
            }
          });
        });     
    }




}

module.exports = createDataBase;