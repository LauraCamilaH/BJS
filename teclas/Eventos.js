var teclas = {
 UP:38,
 BOWN: 40,
 LEFT : 37,
 RIGHT: 39
};

console.log (teclas)
document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x =  150;
var y = 150;

dibujarLinea ("red", 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinical, xfinal, yfinal, lienzo){
    lienzo.beginPath(); //arrancar un trazo
    lienzo.strokeStyle = color; //atributo propiedad se le asigna un color.
    lienzo.lineWidth = 3;
    lienzo.moveTo (xinicial, yinical); // metodo para mover la linea.
    lienzo.lineTo(xfinal,yfinal); //metodo para trazar la liena.
    lienzo.stroke ()// dibujar la linea con el estilo que escogimos
    lienzo.closePath ();// nos falta cerrar el camino levantar el lapiz
}

function dibujarTeclado(evento){
    var colorcito = "red"
    var movimiento = 10;

    switch (evento.keyCode)

    {
        case teclas.UP:
            dibujarLinea (colorcito, x, y, x, y  - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.BOWN: 
        dibujarLinea (colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        
        case teclas.LEFT: //izq
            dibujarLinea (colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;

        case teclas.RIGHT: // derecha
        dibujarLinea (colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        break;

        default:
        console.log ("otra tecla")
    }
        
    }

    




