// Compilar de a vez desde terminal con comando tsc prueba.ts //
// Compilar automáticamente desde terminal con comando tsc -w *.ts //
alert("hola");
alert("Como estan todos?");
alert("Me funciona perfecto!");
//////// TIPOS DE DATOS ////////
// String //
var cadena = "Lucas Riera";
console.log(cadena);
// Number //
var numero = 12;
console.log(cadena, numero);
// Boolean //
var verdaderoFalso = true;
console.log(cadena, numero, verdaderoFalso);
// Any //
var cualquiera = "hola";
cualquiera = 77;
var cualquierOtro = "Lucas Riera";
cualquierOtro = 25;
console.log(cualquiera);
// Arrays //
var lenguajes = ["PHP", "JS", "CSS", "HTML", 12, cualquiera, numero, cadena, verdaderoFalso];
var years = [numero, 13, 15, 51, 43];
console.log(lenguajes, years);
var algo = "Hola";
algo = 29;
console.log(algo);
// LET VS VAR // ( LET trabaja a nivel bloque, VAR trabaja a nivel global, los scopes son diferentes)
