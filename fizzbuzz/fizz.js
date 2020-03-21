var numeros = 100;
var divisible =false;


/**for (var i = 1; i <=100; i++ ){

    divisible = false;
    if (i %3 == 0){
        document.write("fizz"+ " ");
        divisible = true;
    } 
    
    if (i %5 ==0){
        document.write("buzz");
        divisible = true;
    }
    
    if (!divisible){
    document.write(i);
  }

 document.write ("<br/>");
}*/

function esDivisible(numero, divisor ){

    if (numero % divisor == 0){
        return true;
    } else {
        return false;
    }
}

for (var i = 1; i <=100; i++ ){
   
    if (esDivisible(i,3)){
        document.write("fizz"+ " ");
    } 
    
    if (esDivisible (i,5)){
        document.write("buzz");
        divisible = true;
    }
    
    if (!esDivisible (i,3) && !esDivisible(i,5)){
    document.write(i);
  }

 document.write ("<br/>");
}