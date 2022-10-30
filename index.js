const express = require('express');
const app = express();
const port = 3000;
const routerApi = require('./routes');
const listEndpoints = require('express-list-endpoints');
var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended:true}));

routerApi(app);

app.listen(port, () => {
  console.log(`El servicio de API Bap esta arriba usando en el ${port}`);
});

console.log(listEndpoints(app));