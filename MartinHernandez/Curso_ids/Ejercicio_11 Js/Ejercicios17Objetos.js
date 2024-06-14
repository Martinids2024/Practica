///////////////////////////////
//ejercicio 1

function Cliente(nombre, email, telefono) {
    this.nombre = nombre;
    this.email = email;
    this.telefono= telefono;
}

const cliente = new Cliente('Martin hernandez', 'martin.hr@gmail', 553334411);

function Factura(objetoTipoCliente, total, estado) {
    this.cliente = objetoTipoCliente;
    this.total = total;
    this.estado = estado;
    this.cobrar = function() {
       
    };
    this.imprimir = function() {
        console.log(this.Cliente.email, this.telefono, this.idCliente, this.total, this.fecha);
    };
}

const facturaMayo = new Factura(1234, 2000, 'pagada');
facturaMayo.cobrar();
facturaMayo.imprimir(); 

const facturaJunio = new Factura(12345, 1000, 'pendiente');
facturaJunio.cobrar();
facturaJunio.imprimir();

console.log(facturaMayo, facturaJunio);

///////////////////////////////////////////////////

function alumnos(nombreAl, matricula,calificacion ){

this.nombreAl = nombreAl;
this.matricula= matricula;
this.calificacion= calificacion;

}

const alumno1 = new alumnos ("Jose", 1731789, 10);
const alumno2 = new alumnos ("Martin",  17423451, 9);
const alumno3 = new alumnos ("Santiago", 1736876789, 10);
const alumno4 = new alumnos ("Angel",  173678651, 9);
console.log(alumno1 , alumno2, alumno3, alumno4);

///////////////////////////////////////////////////

function Proveedor(nombreP, email, telefono){

this.nombreP =nombreP;
this.email= email;
this.telefono= telefono;

}

const articulos = new Proveedor ("Jose", "jose123@marin", 5534322111 );

function Articulo(proveedor, nombre, precio){

    this.proveedor= proveedor;
    this.nombre =nombre;
    this.precio=precio;

}

const venta = new Articulo ("Navisco", "Oreo", 20);

console.log(this.nombreP, this.email, this.precio, this.proveedor, this.nombre, this.precio);

/////////////////////////////////////////////////////////////

function Bus( capacidad,pasajeros){

this.capacidad = function (){
  
    if (capacidad >= 30){
        console.log ("El camion ya esta lleno");
    }
 if(capacidad < 30){
    console.log("Todavia cabe en el camion");

}
if (capacidad <= 0){
    console.log("No se puede bajar");
 }
}
 this.pasajeros = capacidad;

 }

function conductor (nombre, licencia){

    this.nombre = nombre;
    this.licencia= licencia;

}
const prueba = new Bus (40);
prueba.capacidad();
 
const nombreconductor = new conductor("David", 2343);
console.log(prueba, nombreconductor)

const prueba2 = new Bus (20);
prueba2.capacidad();
 
const nombreconductor2 = new conductor("jose", 234);
console.log(prueba2, nombreconductor2)


////////////////////////////////////////////


function Ficha(nombreS, sesiones, numSesiones){

    this.nombreS= nombreS;
    this.sesiones= function()
   {
        if (sesiones > 20){

            console.log("Ya vas bajado de peso sigue asì");

        }

        if (sesiones <= 20){

            console.log("Te falta correr mas ");
        }
   } 


    this.numSesiones= numSesiones;

}
const clase =  new Ficha ("Oscar", 20, 4 );
clase.sesiones();
console.log(clase);


///////////////////////////////////////////////////



