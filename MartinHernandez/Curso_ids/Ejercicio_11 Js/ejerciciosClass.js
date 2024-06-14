 class Cliente{


     constructor (nombre, email, telefono)
     {

         this.nombre =nombre,
         this.email = email,
         this.telefono= telefono
     }


    }
 class factura {

     constructor (idCliente, total, estado="pendiente")
     {

         this.idCliente = idCliente,
         this.total = total,
         this.estado = estado
         this.estatus= function(){

             if (total > 0){

                 console.log (this.idCliente, this.total,"pagado");
                

             }
         }

         this.imprimir= function(){
           }
         }


 }
 
 const FacturaSeptiembre = new factura(1234,5);
 FacturaSeptiembre.estatus();
 console.log(FacturaSeptiembre);

 const cliente1 = new Cliente ("Martin", "martin123@gmail.com", 5576568965);
 const cliente2 = new Cliente ("andres", "anddres123@gmail.com", 557652345);
 const cliente3 = new Cliente ("Santi", "Dominic123@gmail.com", 55765234235);






///////////////////////////////////////////////////

class alumnos{
constructor(nombreAl, matricula,calificacion ){

this.nombreAl = nombreAl;
  this.matricula= matricula;
  this.calificacion= calificacion;

}
}

 const alumno1 = new alumnos ("Jose", 1731789, 10);
  const alumno2 = new alumnos ("Martin",  17423451, 9);
  const alumno3 = new alumnos ("Santiago", 1736876789, 10);
  const alumno4 = new alumnos ("Angel",  173678651, 9);
  console.log(alumno1 , alumno2, alumno3, alumno4);

// ///////////////////////////////////////////////////

  class Proveedor{
  conductor(nombreP, email, telefono){

 this.nombreP =nombreP;
 this.email= email;
 this.telefono= telefono;

 }
  }
 const articulos = new Proveedor ("Jose", "jose123@marin", 5534322111 );

 class Articulo{
    
    constructor(proveedor, nombre, precio){

     this.proveedor= proveedor;
     this.nombre =nombre;
     this.precio= precio;

 }
}

 const venta = new Articulo ("Navisco", "Oreo", 20);
 console.log(venta)
 console.log(this.nombreP, this.email, this.precio, this.proveedor, this.nombre, this.precio);

// /////////////////////////////////////////////////////////////

 class Bus{
    
    constructor( capacidad,pasajeros){

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
}

 class conductor { 
 
 constructor(nombre, licencia){

     this.nombre = nombre;
     this.licencia= licencia;

 }
}
 const prueba = new Bus (40);
 prueba.capacidad();
 
 const nombreconductor = new conductor("David", 2343);
 console.log(prueba, nombreconductor)

 const prueba2 = new Bus (20);
 prueba2.capacidad();
 
 const nombreconductor2 = new conductor("jose", 234);
 console.log(prueba2, nombreconductor2)


// ////////////////////////////////////////////


 class Ficha{
 constructor (nombreS, sesiones, numSesiones){

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
}
 const clase =  new Ficha ("Oscar", 20, 4 );
 clase.sesiones();
 console.log(clase);


// ///////////////////////////////////////////////////



