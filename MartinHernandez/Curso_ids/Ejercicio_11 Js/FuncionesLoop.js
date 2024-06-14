

   // Funcciones y scope

//Conjunto de sentencias que podemos utilizar para generer 
//ciertasacciones con los valores que  ya almacenamos dentro de varibales

// validar, construir, devolrver cosas

///////////////////////////////

           //name  parametros
function addnumber (a, b) {

    //body
    return a+ b;
}

/////////////////////////////

//funcion call      argumento
const resul = addnumber(5, 7);

//retorna valor (result)


////////////////////////////////

// las funciones de flecha, o arrouw functions son unas nuevas formas 
//de definir funciones y hay distintas variables en la sintaxis.


let mifuncion= (a , b) => {
    return a+ b;
}

        //parametro (a)
function sumarnumeros(a , b) {

//valor de retorno
    return a + b;
}


 // valores por defecto () =>
let sumarnumeros =(a , b ) => {
//valor de retorno
    return a + b;
}
////////////////////////////////


        //while 

//Ejecuta una isntruccion especifica siempre que la condicion de prubea se 
//evalue como verdadera la condicon se valua antes de ejecutar la  istruccion




let n = 0;

while ( n < 3) {
    n++;
}
console.log(n);


////////////////////////////////


        //for


// Un bucle for se repite hasta que una condicion espeficica se evalua como 
//falsa el bucle for de javascript es similar a un bucle for de java y C.


for(let i = 0 ; 1 < 10; i ++) {

console.log(`esta es una iteracion de  numeros ${i}`);

}


////////////////////////////////


        //for in


// Itera a tarvez de todas las propiedades enumarables de un objeto

for(const i in objeto ) {

    result += `${objeto}. ${i} = ${objeto[i]}`

}

////////////////////////////////

      //for of

// Crea un ciclo que itera sobre objetos iterables (incuidos Array, map, set)arguments 
//objet, etc. que ejecutan acciones con los valores obtenidos en cada iteacion.

for (let e of arreglo) {

    console.log(e);

}


////////////////////////////////

    //continue


//cuando se usa continue sin una etiqueta finaliza la iteracionde la isntruccion 
//while, dow-while o for y continua la ejecucion del ciclo con las siguientes iteraciones


let a = 0;
let b = 0;

while( a < 5) {
    a++

if (a === 3) {

    continue;
}

b += a;
console.log (b);

}


////////////////////////////////


    ///Break

//se usa breackpara terminir un bucle un switch.

for( let i = 0; i < a.length; i ++) {
if (a[i] === theValue){

}

}

////////////////////////////////


//Prototipos y metodologias String


// devuelve una cadena que representa al objeto especificado. cadena.toString() El objeto String sobreescribe…
// el método toString del objeto Object object; no hereda Object.toString().…

//////////////////////////////

//El método find() devuelve el valor del primer elemento del array que 
//cumple la función de prueba proporcionada.


const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);

//////////////////////////////////////


        //Filter

 // El método filter() crea un nuevo array con todos los elementos que cumplan 
 //la condición implementada por la función dada.


 const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);

//////////////////////////////////////

        //Map

//  El método map() crea un nuevo array con los resultados de la llamada a la función 
//indicada aplicados a cada uno de sus elementos.

// sintaxis


// var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
// }[, thisArg])



var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
  return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function (num) {
  return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

//////////////////////////////////////

// El método reduce() ejecuta una función reductora sobre 
// cada elemento de un array, devolviendo como resultado un único valor.

const array2 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

/////////////////////////////////////

    // Date


// Los objetos Date representan en JavaScript un momento 
// fijo en el tiempo en un formato independiente. El objeto Date 
// contiene un Number que representa los milisegundos transcurridos 


// let today = new Date();
// let birthday = new Date("December 17, 1995 03:24:00");
// let birthday = new Date("1995-12-17T03:24:00");
// let birthday = new Date(1995, 11, 17); // el mes es indexado como 0
// let birthday = new Date(1995, 11, 17, 3, 24, 0);
// let birthday = new Date(628021800000); // pasando la marca temporal de la época


Date.prototype.getDate()
//retorna el dia y el mes
Date.prototype.getDay()
//retorna el dia de la semana
Date.prototype.getFullYear
//retorna el año
Date.prototype.getHours()
//retorna las horas
Date.prototype.getMilliseconds()
//retorna los milisegundos 
Date.prototype.getMinutes()
//Retorna los minutos
Date.prototype.getUTCMonth()
//Retorna el mes
Date.prototype.getSeconds()
//Retorna los segundos
Date.prototype.getTime()
//Retorna el valor numerico de una fecha especifica 


/////////////////////////////////////////////////////////////////

        //Math

//Math es un objeto incorporado que tiene propiedades y métodos 
//para constantes y funciones matemáticas. No es un objeto de función.
//Math funciona con el tipo Number. No funciona con bigInt

// Math no se puede editar. Todas las propiedades y métodos de Math son estáticos


let resultado;

//para sacar diametro de un circulo PI
resultado = Math.PI;
//round sirve para redondear
resultado = Math.round(2.7);
//ceil siempre va a redondear hacia arriba 
resultado  = Math.ceil (2.1);
//floor siempre va a redondear hacia abajo 
resultado = Math.floor(2.9);
//raiz cuadrada 
resultado = Math.sqrt(144)
//abs convierte numeros negativos en positivo
resultado = Math.abs(-200);
//min toma el numero de una cadena y te dice cual es el mas pequeño
resultado = Math.min(5, 2, 7, 8);
//max toma el numero de una cadena y te dice cual es la mayor 
resultado = Math.max(5, 10, 20, 4);
//genera numeros aleatorios 
resultado = Math.random();
//para poder generar numeros aleatorios podemos ocupar el siguiente comando 
resultado =Math.floor(Math.random() * 30);

console.log(resultado);

//////////////////////