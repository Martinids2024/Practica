

//////////////////////////////////////////////


const Ejercicio1 = [
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
const lado = 10;
const area = lado =>  lado * 2;

const perimetro = lado => lado * 4;

const calculararea= area(lado);

const calularperimertro=perimetro(lado);

console.log(`Èl area de cuadarado es de: ${calculararea} y el perimetro es de: ${calularperimertro}`);


// ///////////////////////////////////////////////////////////

const nombre= "Martin";
const apellidoP= "Hernadez";
const apellidoM ="Fuentes";


const nombreCompleto = (nombre, apellidoP, apellidoM) => nombre + ' ' + apellidoP + ' ' + apellidoM ;

let completo = nombreCompleto (nombre, apellidoP, apellidoM);
console.log(`Hola  ${completo} Bienvenido a IDS`);



////////////////////////////////////////////////////////////////////


let valor1= 4;
let valor2 = 4;
let valor3 =7;

   const valormedio = (valor1, valor2, valor3) => (valor1 + valor2 + valor3) / 3 ;


   let resultado = valormedio (valor1, valor2, valor3);
    console.log(`El valor medio es de ${resultado}`);


// // //////////////////////////////////////////////////////////


 const Krecorridos = 50;
 const Lconsumidos =30;
 const consumo =(Krecorridos, Lconsumidos) => Krecorridos /Lconsumidos;

    let resul= consumo(Krecorridos, Lconsumidos);
    console.log(`El consumo de tu carro es de ${resul.toFixed(2)} por litro`);



// //     ///////////////////////////////////////////////////////////


 let hora = 2;
 let minutos = 60;
 let segundos =  3600;

const  convertirhora  = (hora) => hora * 1;

const  convertirMinutos=(hora, minutos) => hora * minutos;
const convertirSegundos=(hora, segundos) => hora *segundos;

const hors = convertirhora (hora);
const minut = convertirMinutos (hora, minutos);
const secon = convertirSegundos (hora, segundos);

    console.log(` En horas son: ${hors} en minutos son  ${minut} y en segundos son: ${secon}`);

    
// //     ////////////////////////////////////////////////////////////////


const restaurante=(comensales)=> {

 
 let patatass = 200;
 let huevo = 5;
 let cebolla = 300;

const totalPatatas = comensales * patatass;
 const patataskilo= totalPatatas / 1000;
 const totalhuevo =  huevo * patataskilo;
 const totalcebollas = cebolla * patataskilo;
   


return  {

    torta:patataskilo,
    huevos:totalhuevo,
    cebollas:totalcebollas
};
};

let  comensales = 1;
const total = restaurante (comensales)
   console.log(` Son ${comensales} comensales `);
   console.log (` se neceitan ${total.torta}Kg depatatas ${total.huevos} huevo y ${total.cebollas} gr de cebolla`);

 

// ////////////////////////////////////////////////////////


 let valor= 56;     
 const  decena = valor =>  valor % 10; 
 const unidad  = valor => Math.floor(valor / 10);
 const uni =unidad(valor);
 const da = decena (valor);
 console.log ("Es te es el valor de estrada:", valor);
 console.log(`${da} es la Decena  y  ${uni} es la Unidad` );
//const unidades = valor => console.log (Math.floor(valor / 10));

// // //////////////////////////////////////////////////



const intern=(a, b)=> {

let cambiar = a;
    a= b;
    b = cambiar;

    return[a, b];

}

let primera  = 5;
let segunda = 10;

console.log(" valor de Entrada ", primera, "el segundo valor de Entrada: ",segunda);

[primera, segunda] = intern(primera, segunda);

console.log("primer valor", primera, "el segundo valor: ",segunda);

// // ////////////////////////////////////////////////////////////////

  const dato = 9;
  const dato2= 2;
const  par =  dato => dato % 2=== 0;
const  par2 = dato2 => dato2 % 2=== 0;
const par3 = par (dato);
const par4 = par2 (dato2);

 console.log(par3);
 console.log(par4);




