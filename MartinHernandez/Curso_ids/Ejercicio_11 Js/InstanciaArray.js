////////////////////////////// [@@iterator]()//////////////////////

// de las instancias de Array implementa el protocolo iterable y permite que las matrices sean consumidas por la mayoría de las sintaxis que esperan iterables, como la sintaxis spread y for... de bucles. Devuelve un objeto iterador de matriz que produce el valor de cada índice de la matriz.

// array[Symbol.iterator]()

const array = [1, 2, 3 ];
const iterador1 = array[Symbol.iterator]();

for (const value of iterador1) {
  console.log(value);
}

//////////////////Instancia 2  Array.prototype.at()////////////////////////

// El método at(index) de las instancias de Array toma un valor entero y devuelve el elemento en ese índice, lo que permite enteros positivos y negativos. Los enteros negativos cuentan hacia atrás desde el último elemento de la matriz.


const array1 = ["1", "2", "3", "4"];
let index = 2;
console.log(`An index of ${index} returns ${array1.at(index)}`);
index = -4;
console.log(`An index of ${index} returns ${array1.at(index)}`);


//////////////////Instancia 3 Array.prototype.concat() /////////////////////


// concat()
// concat(value1)
// concat(value1, value2)
// concat(value1, value2, /* …, */ valueN)

// El método concat() de las instancias de Array se utiliza para fusionar dos o más matrices. Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.

const array0 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array0.concat(array2);

console.log(array3);



////////////////Instancia 4  Array.prototype.copyWithin()/////////////////

// El método copyWithin() de las instancias de matriz copia parte de esta matriz en otra ubicación de la misma matriz y devuelve esta matriz sin modificar su longitud.

const array12 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array12.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array12.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]



//////////////Instanciacia 5 Array.prototype.entries()//////////////////

// El método entries() de las instancias de Array devuelve un nuevo objeto iterador de matriz que contiene los pares clave/valor para cada índice de la matriz.


const array13 = ['a', 'b', 'c'];

const iterator1 = array13.entries();

console.log(iterator13.next().value);
// Expected output: Array [0, "a"]

console.log(iterator13.next().value);
// Expected output: Array [1, "b"]


//////////////Instancia 6 Array.prototype.every()/////////////////////////



// El método every() de las instancias de Array comprueba si Todos los elementos de la matriz pasan la prueba implementada por la función proporcionada. Eso devuelve un valor booleano.

// every(callbackFn)
// every(callbackFn, thisArg)

const comprueba = (currentValue) => currentValue < 40;

const array14 = [1, 30, 39, 29, 10, 13, 50];

console.log(array14.every(comprueba));


/////////////////// Instancia 7 Array.prototype.fill()////////////////////

// El método fill() de las instancias de Array cambia todos los elementos dentro de un rango de índices en una matriz a un valor estático. Devuelve la matriz modificada.

const array15 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array15.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array15.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array15.fill(64, 9));
// Expected output: Array [6, 6, 6, 6]


/////////////////////Instancia 8 Array.prototype.filter()////////////////


// El método filter() de las instancias de Array crea una copia superficial de una parte de una matriz dada, filtrada solo a los elementos de la matriz dada que pasan la prueba implementada por la función proporcionada.

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

let resultad = words.filter((word) => word.length >= 1);

console.log(resultad);
// Expected output: Array ["exuberant", "destruction", "present"]

//////////////////Instancia 9  Array.prototype.find() ////////////////////

// El método find() de las instancias de Array devuelve el primer elemento de la matriz proporcionada que satisface la función de prueba proporcionada. Si ningún valor satisface la función de prueba, se devuelve undefined.


const array16 = [5, 12, 8, 130, 44];

let founda = array16.find((element) => element > 10);

console.log(founda);

/////////////////////Instancia 10  Array.prototype.findIndex()/////////////


// El método findIndex() de las instancias de Array devuelve el índice del primer elemento de una matriz que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.


const array17 = [5, 12, 8, 130, 44];

let isLargeNumbe = (element) => element > 13;

console.log(array17.findIndex(isLargeNumbe));
// Expected output: 3



//////////// Instancia 11 Array.prototype.findLast()///////////////////////


// El método findLast() de las instancias de Array itera la matriz en orden inverso y devuelve el valor del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve undefined



const array18 = [5, 12, 50, 130, 44];

const found = array18.findLast((element) => element > 45);

console.log(found);
// Expected output: 130


/////////////////Instancia 12  Array.prototype.findLast()//////////////////


// El método findLastIndex() de las instancias de Array itera la matriz en orden inverso y devuelve el índice del primer elemento que satisface la función de prueba proporcionada. Si ningún elemento satisface la función de prueba, se devuelve -1.


const array19 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array19.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130
 

/////////////////Instancia 13  Array.prototype.flat()/////////////////

// El método flat() de las instancias de Array crea una nueva matriz con todas las sub-matrices elementos concatenados en él de forma recursiva hasta la profundidad especificada.


const arr20 = [0, 1, 2, [3, 4]];

console.log(arr20.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
 


/////////////////////Instancia 14  Array.prototype.flatMap() ////////////////


// El método flatMap() de las instancias de Array devuelve una nueva matriz formada mediante la aplicación de una función de devolución de llamada determinada a cada elemento de la matriz y, a continuación, aplanando el resultado en un nivel. Es idéntico a un map() seguido de un flat() de profundidad 1 (), pero un poco más eficiente que llamar a esos dos métodos por separado.arr.map(...args).flat()


const arr1 = [1, 2, 1];

let resultdd = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

console.log(resultdd);
// Expected output: Array [1, 2, 2, 1]



////////// instancia 15 Array.prototype.forEach() ///////////////////////

// El método forEach() de las instancias de Array ejecuta una función proporcionada una vez para cada elemento de la matriz.


const array21 = ['a', 'b', 'c'];

array21.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


/////////////////// Instancia 16 Array.prototype.includes() //////////////


// El método includes() de las instancias de Array determina si una matriz incluye un determinado valor entre sus entradas, devolventes o según corresponda. true false


const array22 = [1, 2, 3];

console.log(array22.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false



/////////////// Instancia 17 Array.prototype.indexOf()//////////////////



// El método indexOf() de las instancias de Array devuelve el primer índice en el que un dado se puede encontrar en la matriz, o -1 si no está presente.


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1



///////////// Instancia 18   Array.prototype.join()////////////////////////

// El método join() de las instancias de Array crea y devuelve una nueva cadena concatenando todos los elementos de esta matriz, separados por comas o una cadena de separación especificada. Si la matriz tiene solo un elemento, ese elemento se devolverá sin usar el separador.


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"



//////////////Instancia 19  Array.prototype.keys()/////////////////////////


// El método keys() de las instancias de matriz devuelve un nuevo objeto iterador de matriz que contiene las claves de cada índice de la matriz.


const array24 = ['a', 'b', 'c'];
const iterador = array1.keys();

for (const key of iteratodor) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2



//////////////instancia 20  Array.prototype.lastIndexOf()/////////////////


// El método lastIndexOf() de las instancias de Array devuelve el último índice en el que Un elemento dado se puede encontrar en la matriz, o -1 si no está presente. La matriz es buscó hacia atrás, comenzando en . fromIndex

const animal = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animal.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animal.lastIndexOf('Tiger'));
// Expected output: 1




/////////////////Instancia 21  Array.prototype.map()/////////////////////


// El método map() de las instancias de Array crea una nueva matriz rellenada con los resultados de llamar a una función proporcionada en todos los elementos de la matriz de llamada.

const array25 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array25.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]



//////////////////// Instancia 22 Array.prototype.pop()/////////////////////

// El método pop() de las instancias de Array elimina el último elemento de una matriz y devuelve ese elemento. Este método cambia la longitud de la arreglo.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]



///////////Instancia 23  Array.prototype.push()////////////////////


const animales = ['pigs', 'goats', 'sheep'];

const count = animales.push('cows');
console.log(count);
// Expected output: 4
console.log(animales);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animales);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]


////////////Instancia 24Array.prototype.reduce()//////////////////


// El método reduce() de las instancias de Array ejecuta una función de devolución de llamada "reductora" proporcionada por el usuario en cada elemento de la matriz, en orden, pasando el valor devuelto del cálculo en el elemento anterior. El resultado final de ejecutar el reductor en todos los elementos de la matriz es un solo valor.



const array27 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array27.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10




////////////////Instancia 25  Array.prototype.reduceRight()/////////////

// El método reduceRight() de las instancias de Array aplica una función contra un acumulador y cada valor de la matriz (de derecha a izquierda) para reducirlo a un solo valor.

// Véase también Array.prototype.reduce() para ver de izquierda a derecha.



const array28 = [
    [0, 1],
    [2, 3],
    [4, 5],
  ];
  
  const result = array28.reduceRight((accumulator, currentValue) =>
    accumulator.concat(currentValue),
  );
  
  console.log(result);
  // Expected output: Array [4, 5, 2, 3, 0, 1]

  
////////////////Instancia 26 Array.prototype.reverse()/////////////////

// El método reverse() de las instancias de Array invierte una matriz en su lugar y devuelve la referencia a la misma matriz, el primer elemento de la matriz ahora se convierte en el último y el último elemento de la matriz se convierte en el primero. En otras palabras, el orden de los elementos en la matriz se girará hacia la dirección opuesta a la indicada anteriormente.

const array29 = ['one', 'two', 'three'];
console.log('array1:', array29);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array29.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array29);
// Expected output: "array1:" Array ["three", "two", "one"]



/////////////////Instancia 27 Array.prototype.shift()////////////////


// El método shift() de las instancias de Array elimina el primer elemento de una matriz y devuelve ese elemento eliminado. Este método cambia la longitud de la matriz

const array01 = [1, 2, 3];

const firstElement = array01.shift();

console.log(array01);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1


//////////Instancia 28  Array.prototype.slice() //////////////////////


// El método slice() de las instancias de Array devuelve una copia superficial de una parte de una matriz en un nuevo objeto de matriz seleccionado de a (no incluido) donde y representan Índice de los elementos de esa matriz. La matriz original no se modificará. startendendstartend



const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



/////////////Instancia 29 Array.prototype.some()//////////////////


// El método some() de las instancias de Array comprueba si Al menos un elemento de la matriz pasa la prueba implementada por el elemento proporcionado función. Devuelve true si, en la matriz, encuentra un elemento para el que la función proporcionada devuelve true; de lo contrario, devuelve false. No modifica la matriz.



const array02 = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array02.some(even));
// Expected output: true



////////////////Intancia  30 Array.prototype.sort() ///////////////////

// El método sort() de las instancias de Array ordena los elementos de una matriz en su lugar y devuelve la referencia a la misma matriz, ahora ordenada. El criterio de ordenación predeterminado es ascendente, que se basa en la conversión de los elementos en cadenas y, a continuación, en la comparación de sus secuencias de valores de unidades de código UTF-16.
// No se puede garantizar la complejidad temporal y espacial de la ordenación, ya que depende de la implementación.



const month = ['March', 'Jan', 'Feb', 'Dec'];
month.sort();
console.log(month);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array03 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]


//////////////Instancia 31 Array.prototype.splice()//////////////////////

// El método splice() de las instancias de Array cambia el contenido de una matriz de la siguiente manera: Eliminar o reemplazar elementos existentes y/o agregar nuevos elementos en su lugar.Para crear una nueva matriz con un segmento eliminado y/o reemplazado sin mutar la matriz original, use toSpliced(). Para acceder a parte de una matriz sin modificarla, consulte slice().


const monthss = ['Jan', 'March', 'April', 'June'];
monthss.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(monthss);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

monthss.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(monthss);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


/////////////Instancia 32  Array.prototype.toLocaleString()/////////////////

// El método toLocaleString() de las instancias de Array devuelve una cadena que representa los elementos de la matriz. Los elementos se convierten en cadenas utilizando sus métodos y estas cadenas están separadas por un elemento específico de la configuración regional cadena (como una coma ","). toLocaleString


const array04 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array04.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary



//////////Instancia 33  Array.prototype.toReversed()//////////////////////

// El método toReversed() de las instancias de Array es la contraparte de copia del método reverse(). Devuelve una nueva matriz con los elementos en orden inverso.


const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

 
///////////////Instancia 34  Array.prototype.toSorted()//////////////////


// El método toSorted() de las instancias de Array es la versión de copia del método sort(). Devuelve una nueva matriz con los elementos ordenados en orden ascendente.


const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']


////////////////Instancia 35 Array.prototype.toSpliced()////////////////


// El método toSpliced() de las instancias de Array es la versión de copia del método splice(). Devuelve una nueva matriz con algunos elementos eliminados y/o reemplazados en un índice determinado.

const mont = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = mont.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]


///////Instancia 36  Array.prototype.toString()//////////////////////

// El método toString() de las instancias de Array devuelve una cadena que representa el especificada y sus elementos.


const array05 = [1, 2, 'a', '1a'];

console.log(array05.toString());
// Expected output: "1,2,a,1a"




///////////////////////Instancia 37 Array.prototype.unshift()/////////////


// El método unshift() de las instancias de Array agrega los elementos especificados a la propiedad comienzo de una matriz y devuelve la nueva longitud de la matriz.

const array06 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]


//////////////Instacia 38 Array.prototype.values()////////////////////


// El método values() de las instancias de Array devuelve un nuevo objeto iterador de matriz que itera el valor de cada elemento de la matriz.

const array07 = ['a', 'b', 'c'];
const iterator = array07.values();

for (const value of iterator) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


////////////Instancia 39 Array.prototype.with()///////////////////////


// El método with() de las instancias de Array es la versión de copia del uso de la notación de corchetes para cambiar el valor de un índice determinado. Devuelve una nueva matriz con el elemento en el índice dado reemplazado por el valor dado.

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]