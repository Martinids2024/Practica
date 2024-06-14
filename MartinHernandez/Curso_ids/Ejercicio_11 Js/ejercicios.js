

const Ejercicio1 =
[
    {marca: "Porche", modelo: "gt3 RS", precio: 20000},
    {marca: "Mercedes", modelo: "A45 AMG", precio: 15000},
    {marca: "Audi", modelo: "R8", precio: 18000},
    {marca: "Nissan", modelo: "R35", precio: 17000},

];

function precioConIva (Ejercicio1){
    const precioIva =  0.21;

    Ejercicio1.forEach(element => {
        const  Iva = element.precio;
        const  precioFinal =  Iva + Iva * precioIva;
        element.precioFinal = precioFinal;
    });

    return Ejercicio1;
}

console.log ("El precio de tu carro final es de:",precioConIva(Ejercicio1));

///////////////////////////////////////////////////////////////////////////////////////

const cuadrado= 10;
const area = cuadrado *2;
const perimetro = cuadrado *4;

console.log("El area del cuadro es:", area,"cm");
console.log("El perimetro del cuadrado:" ,perimetro, "cm");


///////////////////////////////////////////////////////////

const datos= {

    nombre:"Martin",
    apellidoP: "Hernandez",
    apellidoM: "Fuentes"

};

console.log("Hola",datos.nombre, " Buenos dias Bienvenido a IDS");


//////////////////////////////////////////////////////////////////


    const valor1= parseFloat (prompt("Dame el valor 1"));
    const valor2 = parseFloat (prompt ("Dame el valor 2"));
    const valor3=  parseFloat (prompt ("Dame el valor 3"));
    const  total= (valor1 + valor2 + valor3) / 3;
    
    console.log("Los valores medios son:" +' '+ total);



//////////////////////////////////////////////////////////



    const  kilometros = parseFloat (prompt("Dame los Kilometros recorridos"));
    const litros = parseFloat (prompt ("Dame los litros de combustible que tines "));
     
    if (kilometros || litros || kilometros >= litros) {

    
}
  const distanciarecorrida = kilometros / litros;

    console.log("Tu carro gasta ", distanciarecorrida.toFixed(2) ," por km/1");


    ///////////////////////////////////////////////////////////

    const hora = parseFloat(prompt("Ingresa para convertir "));
    const minutos = hora * 60;
    const segundos  = hora * 3600;
    console.log(` En horas son: ${hora} en minutos son  ${minutos} y en segundos son: ${segundos}`);
 
    ////////////////////////////////////////////////////////////////


function calcular (comensales){

const patatas = 200;
const huevo = 5;
 const cebolla = 300;

 const totalPatatas = comensales * patatas;
 const patataskilo= totalPatatas / 1000;
 const totalhuevo =  huevo * patataskilo;
 const totalcebollas = cebolla * patataskilo;


 return {
    patata: totalPatatas,
    huevos: totalhuevo,
    cebollas: totalcebollas,
 
 }
}

const comensales= parseFloat(prompt("Numero de Comensales"));

const ingredientes = calcular (comensales)

console.log (`El numero de comensales son: ${comensales} `);
console.log (`se nececitan  de ${ingredientes.patata} patatas` );
console.log(`Se necesita de ${ingredientes.huevos}  huevos `);
console.log(` se necesita de ${ingredientes.cebollas} cebollas`);

//////////////////////////////////////////////////
function intercambiar(){
    const dato1 =3;
    const dato2 = 2;
     const inter1= dato1;
return{

    valor1: dato1,
    valor2: dato2,
    valor3: inter1
}

}
const voltear = intercambiar ( )
console.log(`El valor1: ${voltear.valor2} el valor2: ${voltear.valor3}`);

////////////////////////////////////////////////////////////////


// function par(numero){

// return numero % 2=== 0;

// }

// function verificar(){


//     const numero = 3;
//     const resultado = par(numero);

// }
// return{

// valor= numero,
// resul=resultado,
// }
// const finaliti= par()
// console.log(`El numero de ${finaliti.valor}Es par ${finaliti.resultado}`);