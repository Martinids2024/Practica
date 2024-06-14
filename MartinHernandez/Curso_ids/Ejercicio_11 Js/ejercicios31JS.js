//////////////////////////////////////////

function contraseñaValida (contraseña){


 if ( contraseña ==="2Fj(jjbFsuj" || contraseña ==="eoZiugBf&g9"){
        return true;

 }else {
        return false ;

 }
}
console.log(contraseñaValida("2Fj(jjbFsuj"));

////////////////////////////////////////////

 function calcularInpuestos (edad, ingresos){

    this.edad = edad;
    this.ingresos = ingresos;
    this.iva = function (){
         if (edad < 18 && ingresos < 1000 ){
            console.log("edad:",this.edad , "Ingresos:", this.ingresos ,"/", 0);
        }else if (edad >= 18 && ingresos >= 1000){
         console.log("edad:",this.edad, "ingresos",this.ingresos, "/",this.ingresos * 0.4);
        }  
       
    }
    
 }
let cliente1 = new calcularInpuestos (18,1000);
cliente1.iva();
 console.log(cliente1);
 let cliente2 = new calcularInpuestos (14,800);
cliente2.iva();
 console.log(cliente2);

 /////////////////////////////////////////////////


   function bmi (peso, altura){

      this.peso = peso ;
      this. altura = altura;
      let resul = peso/(altura **2);
      this.calculo= function(){

        if (resul < 18.5 ){
            console.log ("peso:",this.peso,"Altura:",this.altura ,"Bajo de peso");

        } else if (resul > 18.5 && resul <= 24.9){

            console.log("peso:",this.peso, "Altura:",this.altura,"Normal");

        }else if (resul >= 25 && resul <= 29.9){
            console.log("peso:",this.peso, "Altura:",this.altura,"Sobrepeso");
        }else if (resul > 30){

            console.log("peso:",this.peso, "Altura:",this.altura,"Obeso");

        }
      }

   }

   let pesos1 = new bmi (65, 1.8);
   pesos1.calculo();
   console.log(pesos1);

   let pesos2 = new bmi (72, 1.6);
   pesos2.calculo();
   console.log(pesos2);

   let pesos3 = new bmi (52, 1.75);
   pesos3.calculo();
   console.log(pesos3);

   let pesos4 = new bmi (135, 1.6);
   pesos4.calculo();
   console.log(pesos4);

   //////////////////////////////////////////////////////////
   const arreglo = (1, "hola",2,"Mundo");
   function imprimirArreglo (){
let arreglo4= arreglo4[Symbol.iterator]();
for( let value of final){
    return value;

}
console.log(imprimirArreglo(value));
}
//////////////////////////////////////////////////////////////////

function imprimirArreglo(...element) {
    const array = [... element]; 
    array.forEach((e) => {
      console.log(`${e}`);
    });
  }
  
  console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))

//////////////////////////////////////////////////////////////

function like(numero){
    
        this.numero= numero;
        this.follo = function(){

if (numero <= 999){

    console.log(this.numero.toFixed());

}else if (numero >= 1000 && numero <= 9999){
    return this.numero.toFixed(1)
    console.log(this.numero,"K");


}else if (numero >= 10000 && numero <= 99999){
   
    console.log(this.numero,"K")

}else if (numero >= 100000){
    return this.numero.toFixed(3)
    console.log(this.numero,"M");
}


        }

    }

let espectadores = new like (1000);
espectadores.follo();
console.log(espectadores)

///////////////////////////////////////////////////////////

function fizzBuzz (numero){
    let m3 = numero % 3 ===0;
    let m5 = numero % 5 ===0;
    if (m3 && m5) {
      console.log("fizzBuzz");
    }
    else if(m3){
        console.log("fizz")
    }
    else if (m5) {
      console.log("buzz");
    }else {
        console.log(numero)
    }
}
console.log(fizzBuzz(6)); 
console.log(fizzBuzz(20)); 
console.log(fizzBuzz(30)); 
console.log(fizzBuzz(8));


///////////////////////-7-///////////////////////

function contarRango (n1, n2){
    let contador = 0;
    for (let i = 0 ; n1 < n2;i++){
        n1++
        contador = i
        
    }
    console.log(contador);
}
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
////////////////////////////////////////////
function sumarRango(ni, nf) {
  acumulador = ni;
  if (acumulador != 0) {
    for (let i = 0; ni < nf; i++) {
      ni++;
      acumulador += ni;
    }
    console.log(acumulador);
  }else{
    return 0
  }
}
console.log(sumarRango(0, 10)) 
console.log(sumarRango(12, 14)) 
console.log(sumarRango(5, 5)) 
////////////////////////////////////////////////
function numeroDeCaracteres(string, caracter) {
    let nVeces = 0;
    string1 = string.split("");
    string1.forEach((letra) => {
      if (letra === caracter) {
        nVeces++;
      }
    });
    console.log(nVeces);
  }
  console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
  console.log(numeroDeCaracteres("MMMMM", "m")) // 0
  console.log(numeroDeCaracteres("eeee", e)) // 4
  

  /////////////////////////////////////////////////////

function sumarArreglo(array) {
    let acumulador = 0;
    array.forEach((item) => {
      acumulador += item;
    });
    console.log(acumulador);
  }

  console.log(sumarArreglo([3, 1, 2])) // 6
  console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
  console.log(sumarArreglo([])) // 0

  
//////////////////////////



function sumarArreglo(array) {
    let acumulador = 0;
    array.forEach((item) => {
      acumulador += item;
    });
    console.log(acumulador);
  }
  console.log(sumarArreglo([3, 1, 2])) // 6
  console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
  console.log(sumarArreglo([])) // 0


/////////////////////////////////

function sumarArreglo(array) {
    let acumulador = 0;
    array.forEach((item) => {
      acumulador += item;
    });
    console.log(acumulador);
  }

  console.log(sumarArreglo([3, 1, 2])) 
  console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
  console.log(sumarArreglo([])) 


/////////////////////////////////////

function sumarArreglo(array, pI, pF) {
    let acumulador = 0;
    let rta = pI >= pF ? 0 : array.slice(pI, pF + 1);
    for (let item = 0; item < rta.length; item++) {
      acumulador += rta[item];
    }
    console.log(acumulador);
  }
 
  console.log(sumarArreglo([1, 2, 3], 1, 2)) 
  console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) 
  console.log(sumarArreglo([7, 8, 9], 0, 0)) 

  ////////////////////////////////////////////////
 
function transcribir(string) {
    const arrString = string.split("");
    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i] === "G") {
        arrString[i] = "C";
      } else if (arrString[i] === "C") {
        arrString[i] = "G";
      } else if (arrString[i] === "T") {
        arrString[i] = "A";
      } else if (arrString[i] === "A") {
        arrString[i] = "U";
      }
    }
    let rta = String(arrString);
    console.log(rta);
  }

  console.log(transcribir("ACGT")) 
  console.log(transcribir("ACGTGGTCTTAA"))

  //////////////////////////////////////////////////



function capitalizar(string) {
    if (string.length != 0) {
      let rta = string[0].toUpperCase() + string.substring(1);
      console.log(rta);
    }
  }

  console.log(capitalizar("Martin")) 
  console.log(capitalizar("hola ")) 
  console.log(capitalizar(""))

  ////////////////////////////////////////////////

  
function capitalizar(string) {
    if (string.length != 0) {
      let arrString = [];
  
      for (caracter of string.split(" ")) {
        caracter != ""
          ? arrString.push(caracter[0].toUpperCase() + caracter.substring(1))
          : "e";
      }
      let rta = arrString.join(" ");
      console.log(rta);
    }
  }
  console.log(capitalizar("hola mundo")) /
  console.log(capitalizar("martin hernandez")) /
  console.log(capitalizar("")) 

  /////////////////////////////////////////

 
 function max(array) {
    let nMax = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > nMax) {
        nMax = array[i];
      }
    }
    console.log(nMax);
  }
 
 
 console.log(max([3, 9, 6])) 
 console.log(max([67, 35, 54, 26])) 
 console.log(max([5, 9, 2, 4, 5, 7])) 

 ////////////////////////////////////////


function min(array){
    let nMin = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < nMin) {
            nMin = array[i];
        }
    }
    console.log(nMin)
}

console.log(min([3, 9, 6]))
console.log(min([67, 35, 54, 26])) 
console.log(min([5, 9, 2, 4, 5, 7]))

//////////////////////////////////



function password(string) {
    let arr = string.toLowerCase().split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "a") {
        arr[i] = "4";
      } else if (arr[i] === "e") {
        arr[i] = "3";
      } else if (arr[i] === "i") {
        arr[i] = "1";
      } else if (arr[i] === "o") {
        arr[i] = "0";
      }
    }
    let newString = arr.join("").replace(/ /g, "");
    console.log(newString);
  }

  console.log(password("uno dos tres")) 
  console.log(password("cuatro cinco")) 
  console.log(password(""))

  //////////////////////////////////////////////////


function pares(array) {
    let rta = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        rta.push(array[i]);
      }
    }
    console.log(rta);
  }

  console.log(pares([1, 2, 3, 4, 5, 6]))
  console.log(pares([])) 
  //////////////////////////////////////////////////


function duplicar (array){
    let rta = [];
    for (let i = 0; i < array.length; i++) {
        rta.push(array[i]*2);
    }
    console.log(rta);
}

console.log(duplicar([1, 2, 3])) 
console.log(duplicar([])) 

////////////////////////////////////////////////


function empiezanConA(array) {
    let rta = [];
    const r = array.filter((item) => {
      if (item[0] == "a" || item[0] == "A") {
        rta.push(item);
      }
    });
    console.log(rta);
  }
 
  console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) 

  console.log(empiezanConA(["beta", "delta", "gama"])) 
  console.log(empiezanConA([]))

  ////////////////////////////////////////////////////

  
function terminanConS(array) {
    let rta = [];
    const r = array.filter((item) => {
      if (item.endsWith("s") || item.endsWith("S")) {
        rta.push(item);
      }
    });
    console.log(rta);
  }

  console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) 
  console.log(terminanConS(["beta", "delta", "gama"])) 
  console.log(terminanConS([])) 

  /////////////////////////////////////////

  // escribe tu función acá
function imprimirMatriz(matriz) {
    let unir = matriz.join(",").split(",");
    unir.forEach((item) => console.log(item));
  }
  // código de prueba
  console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))
/////////////////////////////////////////////////

// escribe tu función acá
function numerosAPalabras(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) {
        array[i] = "cero";
      }
      if (array[i] === 1) {
        array[i] = "uno";
      }
      if (array[i] === 2) {
        array[i] = "dos";
      }
      if (array[i] === 3) {
        array[i] = "tres";
      }
      if (array[i] === 4) {
        array[i] = "cuatro";
      }
      if (array[i] === 5) {
        array[i] = "cinco";
      }
      if (array[i] === 6) {
        array[i] = "seis";
      }
      if (array[i] === 7) {
        array[i] = "siete";
      }
      if (array[i] === 8) {
        array[i] = "ocho";
      }
      if (array[i] === 9) {
        array[i] = "nueve";
      }
    }
    console.log(array);
  }
 
  console.log(numerosAPalabras([0, 1, 2, 3, 4])) 
  console.log(numerosAPalabras([5, 6, 7, 8, 9])) 

  /////////////////////////////////////////////

  // escribe tu función acá

function palabrasANumeros(array) {
    let newArr = [];
    const datos = {
      cero: 0,uno: 1,dos: 2,tres: 3,cuatro: 4,cinco: 5,seis: 6,siete: 7,ocho: 8,nueve: 9,
    };
    for (let i = 0; i < array.length; i++) {
      if (datos.hasOwnProperty(array[i])) {
       
        newArr.push(datos[array[i]]);
      } else {
        array[i] = -1;
        newArr.push(array[i]);
      }
    }
    console.log(newArr);
  }
 
  console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) 
  console.log(["cinco", "seis", "siete", "ocho", "nueve"]) 

  ////////////////////////////////////////////////////////

 
function numAsteriscos(array){
    let contador= 0;
    array.filter(item=> {
        item == "*" ? contador++ : contador
    })
    console.log(contador);
}

console.log(numAsteriscos(['', '*', '', '*'])) 
console.log(numAsteriscos(['*', '*', '*'])) 
console.log(numAsteriscos([]))

////////////////////////////////////////////////////////


function numAsteriscos(matriz) {
    let array = matriz.join(",").split(",");
    let contador = 0;
    array.filter((item) => {
      item == "*" ? contador++ : contador;
    });
    console.log(contador);
  }

  console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
 
  ////////////////////////////////////////////////////


function distancia(str1, str2) {
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    let contador = arr2.length - arr1.length;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        contador++;
      }
    }
  
    console.log(contador);
  }
 
  console.log(distancia("hola", "hola")) 
  console.log(distancia("sol", "tol")) 
  console.log(distancia("carro", "correr")) 