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

// invocamos a la funcion

dibujarLinea ("red", 5,5,5,250);
dibujarLinea ("red", 5,250,90,250);

// codigo sin funciones lo que no debe hacer
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

var d2 = document.getElementById ("dibujo2");
var lienzo =d2.getContext("2d");
var lineas = 30;
var contarlineas= 0; //l
var yi, xf,xi, yf;

while(contarlineas < lineas)

{
    yi = 10* contarlineas;
    xf = 10*(contarlineas+1);
    dibujarLinea ("#FAA", 0,yi,xf,300);
    console.log ("linea " + contarlineas);
    contarlineas ++
    
    
}
dibujarLinea("RED",1,1,1,300)
dibujarLinea("RED",1,300,300,300)


for (contarlineas =0 ;contarlineas <lineas; contarlineas++)
{
    xi = 10* contarlineas;
    yf = 10*(contarlineas+1);
    dibujarLinea ("#FAA", xi,0,300,yf);
    console.log ("linea " + contarlineas);
   

}
dibujarLinea("RED",300,300,300,1)
dibujarLinea("RED",300,1,1,1)


