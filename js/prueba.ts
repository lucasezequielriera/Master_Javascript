// Compilar de a vez desde terminal con comando tsc prueba.ts //
// Compilar automáticamente desde terminal con comando tsc -w *.ts //

alert("hola");
alert("Como estan todos?");
alert("Me funciona perfecto!");

//////// TIPOS DE DATOS ////////

// String //
let cadena: string = "Lucas Riera";

console.log(cadena);

// Number //
let numero: number = 12;

console.log(cadena, numero);

// Boolean //
const verdaderoFalso: boolean = true;

console.log(cadena, numero, verdaderoFalso)

// Any //
let cualquiera: any = "hola";
cualquiera = 77;

let cualquierOtro: string | number = "Lucas Riera";
cualquierOtro = 25;

console.log(cualquiera);

// Arrays //
let lenguajes: Array<any> = ["PHP", "JS", "CSS", "HTML", 12, cualquiera, numero, cadena, verdaderoFalso];

let years: number[] = [numero, 13, 15, 51, 43];

console.log(lenguajes, years);

// Crear tipo de dato //

type letrasONumeros = string | number;

let algo: letrasONumeros = "Hola";
algo = 29;

console.log(algo);

// LET VS VAR // ( LET trabaja a nivel bloque, VAR trabaja a nivel global, los scopes son diferentes)