var d = document.getElementById ("dibujo");
var lienzo =d.getContext("2d");
console.log (lienzo);


//funcion

function dibujarLinea(color, xinicial, yinical, xfinal, yfinal){
    lienzo.beginPath(); //arrancar un trazo
    lienzo.strokeStyle = color; //atributo propiedad se le asigna un color.
    lienzo.moveTo (xinicial, yinical); // metodo para mover la linea.
    lienzo.lineTo(xfinal,yfinal); //metodo para trazar la liena.
    lienzo.stroke ()// dibujar la linea con el estilo que escogimos
    lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz
}


dibujarLinea ("pink", 10,300,220,10)
    // codigo sin funciones

lienzo.beginPath(); //arrancar un trazo
lienzo.strokeStyle = "red"; //atributo propiedad se le asigna un color.
lienzo.moveTo (5, 5); // metodo para mover la linea.
lienzo.lineTo(5,250); //metodo para trazar la liena.
lienzo.stroke ()// dibujar la linea con el estilo que escogimos
lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz
lienzo.beginPath(); //arrancar un trazo
lienzo.strokeStyle = "red"; //atributo propiedad se le asigna un color.
lienzo.moveTo (5, 250); // metodo para mover la linea.
lienzo.lineTo(  90,250); //metodo para trazar la liena.
lienzo.stroke ()// dibujar la linea con el estilo que escogimos
lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz

lienzo.beginPath(); //arrancar un trazo
lienzo.strokeStyle = "blue"; //atributo propiedad se le asigna un color.
lienzo.moveTo (150, 5); // metodo para mover la linea.
lienzo.lineTo(100,250); //metodo para trazar la liena.
lienzo.stroke ()// dibujar la linea con el estilo que escogimos
lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz
lienzo.beginPath(); //arrancar un trazo
lienzo.strokeStyle = "blue"; //atributo propiedad se le asigna un color.
lienzo.moveTo (150, 5); // metodo para mover la linea.
lienzo.lineTo(  200,250); //metodo para trazar la liena.
lienzo.stroke ()// dibujar la linea con el estilo que escogimos
lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz
lienzo.beginPath(); //arrancar un trazo
lienzo.strokeStyle = "blue"; //atributo propiedad se le asigna un color.
lienzo.moveTo (100,150 ); // metodo para mover la linea.
lienzo.lineTo( 200,150); //metodo para trazar la liena.
lienzo.stroke ()// dibujar la linea con el estilo que escogimos
lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz

lienzo.beginPath(); //arrancar un trazo
lienzo.strokeStyle = "red"; //atributo propiedad se le asigna un color.
lienzo.moveTo (260, 5); // metodo para mover la linea.
lienzo.lineTo(260,250); //metodo para trazar la liena.
lienzo.stroke ()// dibujar la linea con el estilo que escogimos
lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz
lienzo.beginPath(); //arrancar un trazo
lienzo.strokeStyle = "red"; //atributo propiedad se le asigna un color.
lienzo.moveTo (260, 250); // metodo para mover la linea.
lienzo.lineTo( 350,250); //metodo para trazar la liena.
lienzo.stroke ()// dibujar la linea con el estilo que escogimos
lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz
lienzo.beginPath(); //arrancar un trazo
lienzo.strokeStyle = "red"; //atributo propiedad se le asigna un color.
lienzo.moveTo (350, 250); // metodo para mover la linea.
lienzo.lineTo( 350,5); //metodo para trazar la liena.
lienzo.stroke ()// dibujar la linea con el estilo que escogimos
lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz


