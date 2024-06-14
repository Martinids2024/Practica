const sumas =[10,9,7,10,8];

const res =sumas.reduce((sum, item) => sum + item, 0);
//reduce se ocupo para sumar el arreglo
console.log(' El resultado de la suma de todo el arreglo es:',res);