const arreglo =
[{nombre: 'Martin hernandez'},
{vive:'Cuautitlan Izcalli'},
{ pasatiempos: 'Jugar futbol jugar videojuegos ' }

];

console.log(arreglo[0]);
console.log( 'El contenido de arreglo es de:' ,arreglo); 

//El map sirve para  un nuevo arreglo  y hacer un filto o busqueda dentro de un arreglo
const arreglo2 = arreglo.map ((dato) =>  `${dato.nombre}` );
console.log(arreglo2 [0]);


