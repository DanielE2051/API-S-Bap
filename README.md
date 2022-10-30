# API-S-Bap

# En el siguiente objeto muestro como esta contrido las API´S que realice.

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
# En el anterior ruteo podemos utilizarlo para consultar toda las api's instalando los scripts localmente.
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

# En el anterior ruteo podemos utilizarlo para consultar toda las api's desde donde sea el servicio lo tengo en un servidor que tengo desde mi casa.
