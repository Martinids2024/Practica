
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

function cuadrado ()

{   
    let lado = 10;
    let area = lado * 2;
    let perimetro = lado *4;
    
    console.log(`El area del cuadrado es de: ${area}`);
    console.log (`El perimetro del cuadrado es de: ${perimetro}`)
}
cuadrado();

// ///////////////////////////////////////////////////////////



 function datos (nombre, apellidoP, apellidoM){

     nombre="Martin",
     apellidoP= "Hernandez",
     apellidoM= "Fuentes"

     console.log(`Hola" ${nombre} ${apellidoP} ${apellidoM} Buenos dias Bienvenido a IDS`);

 }
datos();
 
//////////////////////////////////////////////////////////////////


function valormedio (valor1,valor2,valor3){

    valor1=4;
    valor2=4;
    valor3=7;
    let resultado = (valor1 + valor2 + valor3) / 3

    console.log(`El valor medio es de ${resultado}`);
}

valormedio();


// //////////////////////////////////////////////////////////


function consumo (Krecorridos, Lconsumidos){

    Krecorridos = 50;
    Lconsumidos =30;

    let resul=Krecorridos /Lconsumidos;
    

    console.log(`El consumo de tu carro es de ${resul.toFixed(2)} por litro`);
}
consumo();



//     ///////////////////////////////////////////////////////////



        function convertir (hora, minutos, segundos){

                hora = 2;
                minutos = hora *60;
                segundos = hora*3600;

            console.log(` En horas son: ${hora} en minutos son  ${minutos} y en segundos son: ${segundos}`);
 

        }

        convertir();
//     ////////////////////////////////////////////////////////////////



 function calcular (comensales ,patatas, huevo, cebolla){

    comensales = 4;
    patatas = 200;
    huevo = 5;
    cebolla = 300;
  const totalPatatas = comensales * patatas;
  const patataskilo= totalPatatas / 1000;
  const totalhuevo =  huevo * patataskilo;
  const totalcebollas = cebolla * patataskilo;

  console.log(` Son ${comensales} comensales `);
  console.log (` se neceitan ${totalPatatas}gr depatatas ${totalhuevo} huevo y ${totalcebollas} gr de cebolla`);

 }

calcular();

////////////////////////////////////////////////////////


 function unidades (valor){


        valor= 56;
        
        let unidad = valor% 10
        let decena =Math.floor(valor / 10);
        console.log(` decena es ${decena} la unidad del numero es ${unidad} `)

 }

unidades();

// //////////////////////////////////////////////////
  function intercambiar(){
      const dato1 =3;
      const dato2 = 7;
     const inter1= dato1
     console.log(`Valores de entrada1: ${dato1}  valor2 de entrada: ${dato2}`)
     console.log(`El dato: ${dato2} el dato2: ${inter1}`);

  }
  intercambiar();
// ////////////////////////////////////////////////////////////////


function par(dato, dato2, convertir){

 dato = 9;
 dato2= 2;
convertir = dato % 2=== 0;
convertir2 = dato2  % 2===0;


 console.log(convertir);
 console.log(convertir2);
}

par();

