// /////String.prototype[@@iterator]()///////////////////


// // El método [@@iterator]() de valores de cadena implementa el protocolo iterable y permite que las cadenas sean consumidas por la mayoría de las sintaxis que esperan iterables, como la sintaxis spread y for... de bucles. Devuelve un objeto iterador de cadena que produce los puntos de código Unicode del valor de cadena como cadenas individuales.

// const strr = "The quick red fox jumped over the lazy dog's back.";

// const iterator = strr[Symbol.iterator]();
// let theChar = iterator.next();

// while (!theChar.done && theChar.value !== ' ') {
//   console.log(theChar.value);
//   theChar = iterator.next();
// }


// ////////////////////String.prototype.at()///////////////



// // El método at() de valores String toma un valor entero y devuelve un nuevo String que consiste en la única unidad de código UTF-16 ubicada en el desplazamiento especificado. Este método permite números enteros positivos y negativos. Los enteros negativos cuentan hacia atrás desde el último carácter de cadena.

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// let index = 5;

// console.log(An index of ${index} returns the character ${sentence.at(index)});

// index = -4;

// console.log(An index of ${index} returns the character ${sentence.at(index)});


// ///////////////String.prototype.charAt()/////////////////


// // El método charAt() de los valores de cadena devuelve una nueva cadena que consiste en la única unidad de código UTF-16 en el índice dado.

// // charAt() siempre indexa la cadena como una secuencia de unidades de código UTF-16, por lo que puede devolver suplentes solitarios. Para obtener el punto de código Unicode completo en el índice dado, use String.prototype.codePointAt() y String.fromCodePoint().


// const index1 = 4;

// console.log(The character at index ${index1} is ${sentence.charAt(index1)});


// ///////////// String.prototype.charCodeAt()/////////////


// // El método charCodeAt() de los valores de cadena devuelve un número entero entre y representa la unidad de código UTF-16 en el índice dado.065535

// // charCodeAt() siempre indexa la cadena como una secuencia de unidades de código UTF-16, por lo que puede devolver suplentes solitarios. Para obtener el punto de código Unicode completo en el índice dado, use String.prototype.codePointAt().


// const sentencess = 'The quick brown fox jumps over the lazy dog.';

// const index2 = 4;

// console.log(
//   `Character code ${sentencess.charCodeAt(index)} is equal to ${sentencess.charAt(
//     index,
//   )}`,
// );


// /////////////String.prototype.codePointAt()///////////

// // El método codePointAt() de los valores de cadena devuelve un entero no negativo que es el valor de punto de código Unicode del carácter que comienza en el índice especificado. Tenga en cuenta que el índice todavía se basa en unidades de código UTF-16, no en puntos de código Unicode.

// const icons = '☃★♲';

// console.log(icons.codePointAt(1));

// /////////////String.prototype.concat()///////////////

// // El método concat() de los valores de cadena concatena los argumentos de cadena de esta cadena y devuelve una nueva cadena.

// const str3 = 'Hello';
// const str4 = 'World';

// console.log(str3.concat(' ', str4));


// console.log(str3.concat(', ', str3));

// /////////////String.prototype.endsWith()///////////////


// // El método endsWith() de los valores de cadena determina si una cadena termina con los caracteres de esta cadena, devolviendo o según corresponda.truefalse


// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best!'));


// console.log(str1.endsWith('best', 17));


// const str2 = 'Is this a question?';

// console.log(str2.endsWith('question'));


// //////////////String.prototype.includes()///////////


// // El método includes() de los valores de cadena realiza una búsqueda que distingue entre mayúsculas y minúsculas para determinar si una cadena determinada se puede encontrar dentro de esta cadena, devolviéndola o según corresponda.truefalse.


// const sentences = 'The quick brown fox jumps over the lazy dog.';

// const word = 'fox';

// console.log(
//   `The word "${word}" ${
//     sentences.includes(word) ? 'is' : 'is not'
//   } in the sentences`,
// );

// /////////////////String.prototype.indexOf()//////////////


// // El método indexOf() de los valores de cadena busca esta cadena y devuelve el índice de la primera aparición de la subcadena especificada. Toma una posición inicial opcional y devuelve la primera aparición de la subcadena especificada en un índice mayor o igual que el número especificado.

// const paragrap = "I think Ruth's dog is cuter than your dog!";

// const searchTerm = 'dog';
// const indexOfFirst = paragrap.indexOf(searchTerm);

// console.log(The index of the first "${searchTerm}" is ${indexOfFirst});
// // Expected output: "The index of the first "dog" is 15"

// console.log(
//   `The index of the second "${searchTerm}" is ${paragrap.indexOf(
//     searchTerm,
//     indexOfFirst + 1,
//   )}`,
// );

// ////////////String.prototype.isWellFormed()//////////////

// // El método isWellFormed() de los valores de cadena devuelve un valor booleano que indica si esta cadena contiene. Devuelve si esta cadena no contiene ningún suplente solitario, de lo contrario.truefalse

// const stringss = [
   
//     "ab\uD800",
//     "ab\uD800c",
   
//     "\uDFFFab",
//     "c\uDFFFab",
   
//     "abc",
//     "ab\uD83D\uDE04c",
//   ];
  
//   for (const str of stringss) {
//     console.log(str.isWellFormed());
//   }


//   ////////////String.prototype.lastIndexOf()//////////


// //   El método lastIndexOf() de valores de cadena busca esta cadena y devuelve el índice de la última aparición de la subcadena especificada. Toma una posición inicial opcional y devuelve la última aparición de la subcadena especificada en un índice menor o igual que el número especificado.


// const paragraphh = "I think Ruth's dog is cuter than your dog!";

// const searchTermm = 'dog';

// console.log(
//   Index of the last ${searchTermm} is ${paragraph.lastIndexOf(searchTermm)},
// );

// ///////////////String.prototype.localeCompare()////////

// // El método localeCompare() de los valores de cadena devuelve un número que indica si esta cadena viene antes o después, o si es la misma que la cadena dada en el orden de ordenación. En implementaciones con compatibilidad con la API Intl.Collator, este método simplemente llama a .Intl.Collator

// const a = 'réservé'; // With accents, lowercase
// const b = 'RESERVE'; // No accents, uppercase

// console.log(a.localeCompare(b));

// console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));

// //////////////////String.prototype.match()/////////////

// // El método match() de String values recupera el resultado de hacer coincidir esta cadena con una expresión regular.


// const paragrapha = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex1 = /[A-Z]/g;
// const foun = paragrapha.match(regex1);

// console.log(foun);



// ////////////////////////String.prototype.match()////////////////////////////////////

// // El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.


// const paragraph2 = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex2 = /[A-Z]/g;
// const found = paragraph.match(regex2);

// console.log(found);


// //////////////////String.prototype.matchAll()///////////////////////////////////

// // El método matchAll() retorna un iterador de todos los resultados de ocurrencia en una cadena de texto contra una expresión regular, incluyendo grupos de captura.

// const regexp = /t(e)(st(\d?))/g;
// const str = 'test1test2';

// const array = [...str.matchAll(regexp)];

// console.log(array[0]);

// console.log(array[1]);

// /////////////////String.prototype.normalize()//////////////////////////////////////////

// // El método normalize() retorna la Forma de Normalización Unicode de la cadena dada (si el valor no es una cadena, primero será convertido a ese tipo).



// // Cadena inicial

// // U+1E9B: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA
// // U+0323: COMBINACIÓN CON PUNTO ABAJO
// var str33 = "\u1E9B\u0323";

// // Forma compuesta canónicamente (NFC)

// // U+1E9B: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA
// // U+0323: COMBINACIÓN CON PUNTO ABAJO
// str33.normalize("NFC"); // '\u1E9B\u0323'
// str33.normalize(); // lo mismo que arriba

// // Forma canónicamente descompuesta (NFD)

// // U+017F: LETRA S LATINA MINÚSCULA
// // U+0323: COMBINACIÓN CON PUNTO ABAJO
// // U+0307: COMBINACIÓN CON PUNTO ARRIBA
// str33.normalize("NFD"); // '\u017F\u0323\u0307'

// // Compuesta con compatibilidad (NFKC)

// // U+1E69: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA Y ABAJO
// str33.normalize("NFKC"); // '\u1E69'

// // Descompuesta con compatibilidad (NFKD)

// // U+0073: LETRA S LATINA MINÚSCULA
// // U+0323: COMBINACIÓN CON PUNTO ABAJO
// // U+0307: COMBINACIÓN CON PUNTO ARRIBA
// str33.normalize("NFKD"); // '\u0073\u0323\u0307'


// /////////////////String.prototype.padEnd()////////////////////////////////

// // El método padEnd() de String rellena esta cadena con un valor dado string (repetida, si es necesario) para que la cadena resultante alcance una longitud determinada. El El relleno se aplica desde el final de esta cadena.


// const str12 = 'Breaded Mushrooms';

// console.log(str12.padEnd(25, '.'));
// // Expected output: "Breaded Mushrooms........"

// const str22 = '200';

// console.log(str22.padEnd(5));

// ////////////////////////////String.prototype.padStart()////////////////////////////



// // El método padStart() de String rellena esta cadena con otra cadena (varias veces, si es necesario) hasta que el resultado string alcanza la longitud dada. El relleno se aplica desde el principio de esta cadena.

// const str14 = '5';

// console.log(str14.padStart(2, '0'));
// // Expected output: "05"

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);



// //////////////////////////String.prototype.repeat()///////////////////////////////////////



// // El método repeat() de los valores de cadena construye y devuelve una nueva cadena que contiene el número especificado de copias de esta cadena, concatenadas entre sí.

// const mood = 'Happy! ';

// console.log(I feel ${mood.repeat(3)});

// ////////////////////////////String.prototype.replace()///////////////////////////////


// // El método replace() de Valores de cadena devuelve una nueva cadena con una, algunas o todas las coincidencias de un reemplazado por un archivo . Puede ser una cadena o una RegExp, y puede ser una cadena o una función llamada para cada coincidencia. Si es una cadena, solo se reemplazará la primera aparición. La cadena original se deja sin cambios.patternreplacementpatternreplacementpattern


// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", 'my'));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /Dog/i;
// console.log(paragraph.replace(regex, 'ferret'));

// //////////////String.prototype.replaceAll()///////////////////////

// // El método replaceAll() de Valores de cadena devuelve una nueva cadena con todas las coincidencias de un reemplazado por un archivo . Puede ser una cadena o una RegExp, y puede ser una cadena o una función a la que se llamará para cada coincidencia. La cadena original se deja sin cambios.patternreplacementpatternreplacement

// const paragraph1 = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph1.replaceAll('dog', 'monkey'));
// // Expected output: "I think Ruth's monkey is cuter than your monkey!"

// // Global flag required when calling replaceAll with regex
// const regex4 = /Dog/gi;
// console.log(paragraph1.replaceAll(regex4, 'ferret'));

// ///////////////////////String.prototype.slice()//////////////////


// // El método slice() de String values extrae una sección de esta cadena y Lo devuelve como una nueva cadena, sin modificar la cadena original.

// const str7 = 'The quick brown fox jumps over the lazy dog.';

// console.log(str7.slice(31));
// // Expected output: "the lazy dog."

// console.log(str7.slice(4, 19));
// // Expected output: "quick brown fox"

// console.log(str7.slice(-4));
// // Expected output: "dog."

// console.log(str7.slice(-9, -5));


// /////////////////String.prototype.startsWith()////////////////////////

// // El método startsWith() de los valores de cadena determina si esta cadena comienza con los caracteres de una cadena especificada, de retorno o según corresponda.truefalse


// const str15 = 'Saturday night plans';

// console.log(str15.startsWith('Sat'));
// // Expected output: true

// console.log(str15.startsWith('Sat', 3));


// ////////////////////String.prototype.toLocaleLowerCase()/////////////////////////////////

// // El método toLocaleLowerCase() de valores de cadena devuelve esta cadena convertida a minúsculas, de acuerdo con las asignaciones de mayúsculas y minúsculas específicas de la configuración regional.


// const dotted = 'İstanbul';

// console.log(EN-US: ${dotted.toLocaleLowerCase('en-US')});
// // Expected output: "i̇stanbul"

// console.log(TR: ${dotted.toLocaleLowerCase('tr')});

// //////////////String.prototype.toLocaleUpperCase()///////////

// // El método toLowerCase() de los valores de cadena devuelve esta cadena convertida a minúsculas.

// const sentenc = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentenc.toLowerCase());

// ////////////////String.prototype.toString()//////////////

// //El método toString() de los valores de cadena devuelve este valor de cadena.

// const stringObj = new String('foo');

// console.log(stringObj);
// // Expected output: String { "foo" }

// console.log(stringObj.toString());

// /////////////////////String.prototype.toUpperCase()///////////////////////////

// // El método toUpperCase() de valores String devuelve esta cadena convertida a mayúsculas.

// const sentence1 = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence1.toUpperCase());




// ////////////////////////String.prototype.toWellFormed()////////////////////////////////

// // El método toWellFormed() de los valores de cadena devuelve una cadena en la que todos los sustitutos solitarios de esta cadena se reemplazan con el carácter de reemplazo Unicode U+FFFD.


// const strings = [
//   // Lone leading surrogate
//   "ab\uD800",
//   "ab\uD800c",
//   // Lone trailing surrogate
//   "\uDFFFab",
//   "c\uDFFFab",
//   // Well-formed
//   "abc",
//   "ab\uD83D\uDE04c",
// ];

// for (const str of strings) {
//   console.log(str.toWellFormed());

// ////////////////////////String.prototype.trim()/////////////////////////////////////

// // El método trim() de Valores de cadena elimina los espacios en blanco de ambos extremos de esta cadena y devuelve una nueva cadena, sin modificar la cadena original.

// // Para devolver una nueva cadena con espacios en blanco recortados desde un solo extremo, use trimStart() o trimEnd().

// const greeting = '   Hello world!   ';

// console.log(greeting);
// // Expected output: "   Hello world!   ";

// console.log(greeting.trim());


// ///////////////////////////String.prototype.trimEnd()///////////////////////////


// //El método trimEnd() de los valores de cadena elimina los espacios en blanco del final de esta cadena y devuelve una nueva cadena, sin modificar la cadena original. es un alias de este método.trimRight()


// const greetings = '   Hello world!   ';

// console.log(greetings);
// // Expected output: "   Hello world!   ";

// console.log(greetings.trimEnd());

// ////////////////String.prototype.trimStart()///////////////////////////////////////////

// // El método trimStart() de String values elimina los espacios en blanco del principio de esta cadena y devuelve una nueva cadena, sin modificar la cadena original. es un alias de este método.trimLeft()



// const greetinga = '   Hello world!   ';

// console.log(greetinga);
// // Expected output: "   Hello world!   ";

// console.log(greetinga.trimStart());

// //////////////////////String.prototype.valueOf()////////////////////

// // El método valueOf() de Valores de cadena devuelve este valor de cadena.



// const stringObj = new String('foo');

// console.log(stringObj);
// // Expected output: String { "foo" }

// console.log(stringObj.valueOf());






// //////////////////////////////////////////////////////////////
// // Todo objeto descendiente de Object hereda el método hasOwnProperty. Este método puede ser usando para determinar si un objeto tiene la propiedad especificada como una propiedad directa de ese objeto; a diferencia del operador in, este método no verifica la cadena prototipo del objeto.

// o = new Object();
// o.prop = "exists";

// function changeO() {
//   o.newprop = o.prop;
//   delete o.prop;
// }

// o.hasOwnProperty("prop"); // returns true
// changeO();
// o.hasOwnProperty("prop"); // returns false


// /////////////////////////////////////////////////////////////////////////

// // El método isPrototypeOf permite comprobar si un objetyo existe o no en la cadena de prototipado de otro.

// function Fee() {
//   // ...
// }

// function Fi() {
//   // ...
// }
// Fi.prototype = new Fee();

// function Fo() {
//   // ...
// }
// Fo.prototype = new Fi();

// function Fum() {
//   // ...
// }
// Fum.prototype = new Fo();

// ///////////////////////////Object.prototype.propertyIsEnumerable()////////////////////////////////////////
// // El método propertyIsEnumerable() regresa un Boleano indicando si la propiedad especificada es enumerable.


// var o = {};
// var z = [];
// o.prop = "es enumerable";
// z[0] = "es enumerable";

// o.propertyIsEnumerable("prop"); // regresa true
// a.propertyIsEnumerable(0); // regresa true

// ///////////////////////////////Object.prototype.toLocaleString()/////////////////////////////

// // El método toLocaleString() devuelve un string que representa a un objeto. Este método está pensado para ser redefinido en los objetos derivados, para los propósitos específicos de cada configuración regional.

// const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// console.log(date1.toLocaleString('ar-EG'));


// const number1 = 123456.789;

// console.log(number1.toLocaleString('de-DE'));

// /////////////////////////////////////Object.prototype.toString()//////////////////////////////////////
// // Todos los objetos tienen un método toString que se llama automáticamente cuando el objeto se representa como un valor de texto o cuando un objeto se referencia de tal manera que se espera una cadena. Por defecto, el método toString es heredado por todos los objetos que descienden de Object. Si este método no se sobreescribe en el objeto personalizado, toString devuelve [objecttype], donde type es el tipo de objeto. El siguiente código ilustra esto:
// const  objetos = new Object();
// objetos.toString(); /////