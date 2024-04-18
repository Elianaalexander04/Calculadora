//Muestra un mensaje de bienvenida
alert("Hola bienvenido y bienvenida a la calculadora");

//Solicita al usuario que ingrese el primer numero y lo convierte punto flotante
var numero1 = parseFloat(prompt("Por favor ingresa un numero del 0 al infinito"));

//Muestra el numero ingresado por el usuario
alert("Elegiste el numero  " + numero1);

//Solicita al usuario que ingrese el segundo numero y lo convierte en un numero punto flotante
var numero2 = parseFloat(prompt("Por favor ingresa un segundo numero del 0 al infinito"));

//Muestra el segundo numero ingresado por el usuario
alert("Tu segundo numero es  " + numero2);

//Solicita al usuario que elija una operacion
alert("Elige la operacion que desea hacer con los numeros "  + numero1 + " y " + numero2);

//Solicita al usuario que elija una operacion y la convierte en un numero entero
var operacion = parseInt(prompt("Elige una opcion.\n1 es suma.\n2 es resta.\n3 es multiplicacion.\n4 es division."));

//Variable para almacenar el resultado de la operacion
var resultado;

//Variable para almacenar el nombre de la operacion realizada
var nombre="";

//Verifica la operacion que ha eligido el usuario y realiza el resultado correspondiente
if(operacion== 1){
    resultado = numero1 + numero2;
    nombre =" la suma es " + resultado;
}else if(operacion == 2){
    console.log("llega aca")
    resultado = numero1 - numero2;
    nombre =" la resta es " + resultado;
}else if(operacion== 3){
    resultado = numero1 * numero2;
    nombre = "La multiplicación es " + resultado;   
}else if(operacion == 4){
    if(numero2 !== 0){
        resultado = numero1 / numero2;
        nombre = "la división es " + resultado;
    }else{
        nombre ="no se puede dividir por 0";
    }
    }else{
        nombre = "operacion no valida";
}
//Muestra el resultado de la operacion
alert(nombre);
document.write("Los numeros que ingresaste fueron "  + numero1  +  " y "  + numero2  + " y el resultado de la operacion de " + nombre);

//Muestra los numeros ingresados por el usuario y el resultado de la operacion

