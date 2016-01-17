var express = require('express'),
app = express();



 
  app.get('/posts',function(request,response){
     response.json(
         [ 
          {
              "id":"1",
              "nombre":"jorge william",
              "edad":"24",
              "fechaNacimiento":"1991-07-27",
              "curso":"Git"  
           },

           {
              "id":"2",
              "nombre":"jose luis",
              "edad":"19",
              "fechaNacimiento":"1990-09-27"  
           },
           {
              "id":"3",
              "nombre":"zulmy evelin",
              "edad":"19",
              "fechaNacimiento":"1994-07-29"  
           },

           {
              "id":"4",
              "nombre":"julio pancho",
              "edad":"28",
              "fechaNacimiento":"1991-07-27"  
           },


           {
              "id":"5",
              "nombre":"jorge luis",
              "edad":"29",
              "fechaNacimiento":"1991-04-20"  
           }
        ]
      )
  });


  app.get('/users',function(request,response){
       response.json(
            [
             {
                "usuario":"phpjava91",
                "clave" : "123456"

             },

             {
                "usuario":"phpjava99",
                "clave" : "coco"

             },

             {
                "usuario":"phpjava15",
                "clave" : "cocobalo"

             },

             {
                "usuario":"darnerk",
                "clave" : "123456"

             },

             {
                "usuario":"fernando",
                "clave" : "22222"

             },


            ]


    )   

  });


 app.listen(3000, function () {
  console.log('Servidor iniciado. Escuchando en el puerto 3000')
})