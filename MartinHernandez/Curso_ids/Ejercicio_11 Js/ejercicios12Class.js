
/////////-1-///////////////

const arreglo= [1,3,5,7];
const arreglo1 = [2,4,6,8];
const fucion =arreglo.concat(arreglo1);

 console.log("Ejercicio 1",fucion);



////////////////-2-////////////////
let palabras = "Hola mi nombre es Martin Hernandez";
let i = 0;
let contar = 1;

while (i < palabras.length){
    if (palabras[i] == " "){
        contar = contar + 1;
    }

    i = i + 1;
}
 console.log(`Ejercicio 3: el texto tiene ${contar}`);

//////////////////-4-/////////////////////

const  ordenar = [3,4,6,1,2,5];
ordenar.sort(function (a, b){

    return a - b ;
});
console.log("Ejercicio 4:",ordenar);

///////////////-4-//////////////////////////


///////////////-5-//////////////////////////

let  mayor = ["b", "bb", "c", "a"];
//sort ordena de la (A a la Z )por defecto.
mayor.sort();
console.log("Ejercicio 5: ", mayor);

//////////////////////-10-///////////////

const bloque =["1","2","3", "4"];
let newarray = [...bloque, "5"];
 console.log ( "Ejercicio 10:",bloque);
 console.log ("Ejercicio 10:",newarray);


/////////////////////-10-/////////////////
const lista =[4,5,3,2,1];
function metodo(lista, valor) {
    let arregloResultado = [];
    for(let i = 0; i < lista.length; i++) {
        arregloResultado[i] = lista[i];
    }
    arregloResultado[lista.length] = valor;
    return arregloResultado;
}

const resultadoArr = [...lista, 6];
 console.log( "Ejercico 10: ",metodo(lista, 10));
 console.log("Ejercicio 10:", lista);

//////////////////-11-/////////////////////////