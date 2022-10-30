# API-S-Bap

# En el siguiente objeto muestro cuales son las rutas de mi servicio de API´S que realice localmente.
# NOTA: Para utilizar este servicio se tiene primero que construir la base de datos. a partir de unas clases que realice que estan en el archivo que se encuentra en la carpeta mysql.

[
 {
    path: 'cder.zapto.org/api/examenBap/newTask',
    methods: [ 'POST' ],
    middlewares: [ 'jsonParser', 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap",
      "title":"tarea1",
      "descripcion":"primera tarea",
      "estatus":"activa",
      "fecha":"25/07/2023"
    }
  },
  {
    path: 'cder.zapto.org/api/examenBap/allTask',
    methods: [ 'GET' ],
    middlewares: [ 'jsonParser', 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap"
    }
  },
  {
    path: 'cder.zapto.org/api/examenBap/task/tarea1',
    methods: [ 'GET' ],
    middlewares: [ 'jsonParser', 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap"
    }
  },
  {
    path: 'cder.zapto.org/api/examenBap/editTask',
    methods: [ 'PUT' ],
    middlewares: [ 'jsonParser', 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap",
      "title":"tarea1",
      "titlemod":"Este es el cambio"
    }
  },
  {
    path: 'cder.zapto.org/api/examenBap/deleteTask/Este es el cambio',
    methods: [ 'DELETE' ],
    middlewares: [ 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap"
    }
  }
]
# En el siguiente objeto muestro cuales son las rutas de mi servicio de API´S que realice desde un servidor que tengo montado en mi casa.
[
 {
    path: 'cder.zapto.org/api/examenBap/newTask',
    methods: [ 'POST' ],
    middlewares: [ 'jsonParser', 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap",
      "title":"tarea1",
      "descripcion":"primera tarea",
      "estatus":"activa",
      "fecha":"25/07/2023"
    }
  },
  {
    path: 'cder.zapto.org/api/examenBap/allTask',
    methods: [ 'GET' ],
    middlewares: [ 'jsonParser', 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap"
    }
  },
  {
    path: 'cder.zapto.org/api/examenBap/task/tarea1',
    methods: [ 'GET' ],
    middlewares: [ 'jsonParser', 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap"
    }
  },
  {
    path: 'cder.zapto.org/api/examenBap/editTask',
    methods: [ 'PUT' ],
    middlewares: [ 'jsonParser', 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap",
      "title":"tarea1",
      "titlemod":"Este es el cambio"
    }
  },
  {
    path: 'cder.zapto.org/api/examenBap/deleteTask/Este es el cambio',
    methods: [ 'DELETE' ],
    middlewares: [ 'anonymous' ],
    body:
    {
      "usuario":"Daniel",
      "contraseña":"examenBap"
    }
  }
]
