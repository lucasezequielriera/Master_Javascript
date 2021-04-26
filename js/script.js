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

while(year != 1991) {
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

// Arrays //

let nombres = ["Lucas Riera", "Lucas Martin", "Lucas Thompson", "Lucas Roberts"];

console.log(nombres); // Muestra todo el array "nombres"
// ó //
console.log(nombres[3]); // Muestra el elemento de la posición indicada en el array

let lenguajes = new Array("JS", "PHP", "CSS", "Java", "Pascal", "C++");

// (Pedir por consola que elemento se quiere ver) //

let elemento = Number(prompt("Que elememento querrías ver?"), 0);
if (elemento >= nombres.length) {
    alert(`Introduce un número menor que ${nombres.length}`);
} else {
    alert(`El usuario seleccionado fue: ${nombres[elemento]}`);
}

// (Recorrer el Array y mostrarlo en pantalla mediante formato "lista") //

document.write("<h1>Lenguajes de Programación dados en el 2017");
document.write("<ul>");

for(let i = 0; i < lenguajes.length; i++) {
    document.write(`<li> ${lenguajes[i]} </li>`);
}

document.write("</ul>");

// Recorrer Array con forEach (Callback) MEJOR OPCION//

lenguajes.forEach((elemento) => {
    document.write(`<li> elemento </li>`);
});

document.write("</li>");


// Array Multidimensional (arrays dentro de otros arrays) //

let categorias = ["Accion", "Terror", "Comedia"];
let peliculas = ["La Cruda Verdad", "Titanic", "La vida es Bella"];

let cine = [categorias, peliculas];

console.log(cine); // Mostrar los dos arrays //

console.log(cine[0][1]); // Primero entra en "categorías" con el elemento [0] y luego a "Terror" con el elemento [1];

// Añadir elemento al array (elemento "Push") //

peliculas.push("Batman");

// Operaciones con Arrays (Agregar películas hasta escribir "Terminar") //

let elemento = "";

do {
    elemento = prompt("Introduce tu película");
    pelicula.push(elemento);
} while (elemento != "Terminar");

peliculas.pop(); // Elimina el último elemento agregado en el array //

console.log(peliculas);

// Eliminar un elemento en concreto del array // # Si no lo encuentra dá "-1"

let indice = peliculas.indexOf("La Cruda Verdad");

if(indice > -1) {
    peliculas.splice(indice, 1);
}

console.log(peliculas);

// Convertir Array a String // # Es necesario guardarlo dentro de una variable

let peliculas_string = peliculas.join();

console.log(peliculas_string);

// Convertir un String en un Array //

let cadena = "texto 1, texto 2, texto 3";
let cadena_array = cadena.split(", "); // Identifica el separador entre esos elementos en el String

console.log(cadena_array);

// Ordenar Array en orden alfabético //

peliculas.sort();

// Dar vuelta al array (orden inverso) //

peliculas.reverse();

// Recorrer Array con "for in" //

for(lenguaje in lenguajes) {
    document.write(`<li>${lenguajes[lenguaje]}</li>`);
}

// Buscar en un Array (por String) //

let busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});

console.log(busqueda);

// ó con Array Function

let busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

console.log(busqueda); // Me devuelve "PHP" en la consola por haberlo encontrado, sino devuelve "undefined"

// Buscar en un Array (por índice) //

let busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

console.log(busqueda); // Me devuelve el índice ("0 ó 1 ó 2 ó el que sea que esté en la posición del elemento buscado")

// Buscar números en Array que sea igual, menor o mayor //

let precios = [10, 20, 30, 40, 50];

let busqueda = precios.some(precio => precio <= 30);

console.log(busqueda); // Me devuelve "true" or "false"


////// Ejercicio ///////

1_ Que pida 6 numeros por pantalla y los meta en un array
2_ Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3_ Ordenarlo y mostrarlo
4_ Invertir su orden y mostrarlo
5_ Mostrar cuantos elementos tiene el array
6_ Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice (se valora el uso de funciones)

// Ejercicio Resuelto //

// 1_


// Ordenar números ingresados
function mostrarArray(elementos, textoCustom = "") {
    document.write(`<h1>Los numeros son: ${textoCustom}</h1>`);
    elementos.forEach((elemento, index) => {
        document.write(`<strong>${elemento}</strong> <br>`);
    });
}

let numeros = [];

for(let i = 0; i <= 5; i++) {
    numeros.push(Number(prompt("Escriba 1 numero;", 0)));
}
numeros = numeros.sort();

// Mostrar en el cuerpo de la pagina
document.write(`<h1>Los numeros son:</h1>`);
numeros.forEach((numero, index) => {
    document.write(`<strong>${numero}</strong> <br>`);
});

// Mostrar en consola
console.log(numeros);

// DOM (Document Object Model) //

// Selecionar elemento (Básico) //
let caja = document.getElementById("miCaja");
caja.innerHTML = "Hola a todos!";
caja.style.backgroundColor = "red";
caja.style.width = "100%";
caja.className = "text-left";

console.log(caja);

// Seleccionar elemento con JQuery //
let caja = document.querySelector("#miCaja");
let cajaChica = document.querySelector("".cajaChica");


// Seleccionar elementos por su etiqueta //
let todosLosDivs = document.getElementsByTagName("div");
let contenidoTexto = todosLosDivs[4].textContent; // (Agarro el contenido del div con textContent)
todosLosDivs[4].innerHTML = "Soy yo!"; 
console.log(todosLosDivs);
console.log(contenidoTexto);

// Crear elementos //
let hr = document.createElement("hr");

// BOM (Browser Object Model) //

(Altura de página actual)
console.log(window.innerHeight);

(Anchura de pagina actual)
console.log(window.innerWidth);

(Sacar los dos juntos)
getBom();
(Altura de página total)

console.log(screen.height);
(Anchura de página total)

console.log(screen.width);

(Ver Datos de página actual)
console.log(window.location);

(Función redireccionar a página)
function (url) {
    window.location.href = url;
}

(Función Abrir pestaña nueva en navegador)
function (url) {
    window.open(url);
}

(Función hacer Popup)
function (url) {
    window.open(url, "", "width=400, height=400");
}
*/

// Eventos //
