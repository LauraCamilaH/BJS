
var express = require ("express"); // llama a la libreria express
var aplicacion = express(); 

aplicacion.get ("/", inicio);
aplicacion.get ("/cursos", cursos);


function inicio (peticion, resultado)
{
    // resultado es lo que le quiero mostrar que pude ser html
    resultado.send("Este es el <strong>home</strong>");
}
function cursos (peticion, resultado){
    resultado.send ("estos son los cursos")

    
}

// ponemos a correr el servidor en un puerto especifico
//  puerto 8989
aplicacion.listen (8989)


