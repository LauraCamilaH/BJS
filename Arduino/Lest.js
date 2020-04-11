var jf = require ("johnny-five"); //llamamos a "Johnny_five"
var circuito = new jf.Board({port: 'COM7'});
//encendemos el circuito 
circuito.on("ready", prender);
// creamos la funcion prender
function prender(){
// le indicamos en que puerto
    var led = new jf.Led(13);
    led.blink(1000);
    console.log("hola entro a consola");
}