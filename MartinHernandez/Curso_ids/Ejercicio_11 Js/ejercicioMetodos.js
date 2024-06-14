
Array.prototype.filtro = function (filter){

let  resultado = [];

for (let i = 0; i < this.length; i++){
 if (filter (this[i], i, this)){
     resultado.push(this[i]);

 }
}

return resultado;

};

const numero =[1,2,3,4,5,6];
const par = numero.filtro(numero => numero % 2 === 0 );
console.log(par);


Array.prototype.reductor = function(reduce){

    let resultado = []

    for(let i =0; i< this.length ; i++){
        if (reduce (this[i], i ,this)){



        }



    }

}

////////////////////////////////////////////////////

const numerosCuadrados = a1.map(fun); // for while do while 
console.log(numerosCuadrados);


Array.prototype.miPropioMap = function(callback) {
    let nuevoArreglo = [];
    for(let i = 0; i <= this.length - 1; i++) {
        nuevoArreglo.push(callback(this[i]));
    }
    return nuevoArreglo;
}

// event loop
const numerosCuadrados2 = a1.miPropioMap(fun); // for while do while 
console.log(numerosCuadrados2);

const objeto = a1.reduce((acumulador, elemento) => {
    // const a1 = [1,2,3,4];

    acumulador = {...acumulador, [`elemento${elemento}`]: elemento};
    return acumulador;
}, {});

console.log(objeto);


