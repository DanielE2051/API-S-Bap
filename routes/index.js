const express = require('express')
const allTask = require('./allTask.route');
const task = require('./task.route');
const newTask = require('./newTask.route');
const editTask = require('./editTask.route');
const deleteTask = require('./deleteTask.route');


function routerApi(app){
  const router = express.Router();
  app.use('/api/examenBap/',router);
  router.use('/allTask', allTask);
  router.use('/task',task);
  router.use('/newTask',newTask);
  router.use('/editTask',editTask);
  router.use('/deleteTask',deleteTask);
 
}

module.exports = routerApi;