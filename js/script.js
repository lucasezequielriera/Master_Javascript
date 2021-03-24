'use strict'

/*
// Alerta en pantalla //
alert("Hola a todos!");

// Texto que aparece en archivo HTML //
document.write("Texto que debería aparecer en el archivo index");

// Imprimir algo en la consola del navegador //
console.log("Alerta Spoiler");

// Asignar Variable e Imprimirla en la Consola del Navegador //
let nombre = "Lucas"; 
let apellido = "Riera";

console.log(nombre, apellido);

// Concatenar Strings //
let nombre = "Lucas";
let apellido = "Riera";
let concatenacion = `${nombre} ${apellido}`;

console.log(concatenacion); 

// Modo Estricto //
En principio del archivo escribir: 'use strict'

// Detectar dato con "typeof" //
let variable = 22;

console.log(typeof variable);

El resultado es "Number"

// Condicional If //
let numero = prompt("Escribe un numero:");

if (numero <= 10) {
    alert("Tu número es menor o igual que 10");
} else {
    alert("Tu número es mayor que 10");
}

// Operadores Lógicos //
AND (Y): &&
OR (O): ||
NEGACION: !

let year = 2018;

if (year >= 2000 && year <= 2020 && year != 2018) {
    alert("Estamos en la era actual");
} else {
    alert("Estamos en la era post moderna");
}

// Condicional Switch (para  muchos If y Else) //

let edad = 18;
let imprime = "";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los cuarenta";
    break;
    case 75:
        imprime = "Eres un anciano";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}

console.log(imprime);

// Bucle For //
let numero = 100;

for(let i=0; i<numero; i++) {
    console.log(`Paso número ${i}`);
}

// Bucle While //
let year = 2018;

white(year != 1991) {
    console.log(`Estamos en el año: ${year}`);
    year--;
}

// Bucle Do While //
let years = 30;

do{
    alert("Mientras years sea diferente a 20")
    years--;
} while(years > 25);

// Ejercicio //

let numero_1 = Number(prompt("Escribe el primer numero: "));
let numero_2 = Number(prompt("Escribe el segundo numero: "));

if(numero_1 < numero_2) {
    alert("El primer numero es menor que el segundo");
}
else if (numero_1 > numero_2) {
    alert("El primer numero es mayor que el segundo numero");
}
else if (isNaN(numero_1) || isNaN(numero_2)) {
    alert("Esto no es un número");
}
else {
    alert("Los dos numeros son iguales");
}

// Funciones //
function calculadora(){
    return "Hola, soy la calculadora";
}
alert(calculadora());


// Parámetros "rest" y "spread" //
// (Ejemplo REST) --> (Captura todos los datos que se pongan despues como array) //

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    console.log(`Fruta 1: ${fruta1}`);
    console.log(`Fruta 1: ${fruta2}`);
    console.log(resto_de_frutas);
}

listadoFrutas("naranja", "manzana", "sandia", "pera", "melon");

// (Ejemplo SPREAD) --> (Los elementos que están dentro de la variable los toma como elemento 1 y elemento 2) //

let frutas = ["naranja", "manzana"];
listadoFrutas(...frutas, "manzana", "sandia", "pera", "melon");


// Funciones Anónimas //

let unaFuncion = function() {
    console.log("Soy una funcion anónima");
}

// Método de Búsqueda en Strings //
(Contar la cantidad de caractéres que tiene un String) => console.log(palabra.length);
(Convertir todo a minúscula) => console.log(palabra.toLowerCase());
(Convertir todo a mayúscula) => console.log(palabra.toUpperCase());
(Buscar palabra dentro de String) => console.log(texto.indexOf("curso"));
(Buscar palabra dentro de String) => console.log(texto.search("curso"));
(Buscar palabra dentro de String como "Array") => console.log(texto.match("curso"));
(Buscar dentro de String desde un punto hacia otro) => console.log(texto.substr(14,5));
(Buscar palabra dentro de String y devuelve "true" o "false") => console.log(texto.startsWith("curso"));
(Buscar palabra dentro de String y devuelve "true" o "false") => console.log(texto.includes("curso"));
(Buscar la última aparición de String) => console.log(texto.lastIndexOf("curso"));
(Reemplaza una palabra dentro de String por otra) => console.log(texto.replace("curso", "materia"));
(Muestra el String desde un punto que quiera hasta otro) => console.log(texto.slice(14, 22));
(Mete todo el String dentro de un Array (especial para buscadores)) => console.log(texto.split("" ""));
(Quitar espacios por delante y por detrás) => console.log(texto.trim());

// Plantilla de Texto //

let texto = `<h1>Esto es una plantilla de texto</h1>
             <h2>Muestro el título y subtitulo de una mejor manera</h2>`;
*/