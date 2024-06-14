

    //  creamos una vabiable donde vamos a mostrar los datos y le ponemos el get y le vamos a decir que busque el id en la etiqueta donde 
    //quieromos guardar el contendio mas adenlante 
    const crearElement = document.getElementById('contenedor', 'num');
    //guardamos la URL en una varibale
    let api = 'https://api.chucknorris.io/jokes/random';
    //Cremos un ciclo for paque consulte esta URL N veces 
     for (let i = 0; i < 10; i++){
    //Mandamos llamar a la varibale con el nombre con la que la guardamos 
      fetch(api)
      //con el .then mandamos pedir la peticion y la tranformamos en json
     .then(result => result.json())
     //le pedimos a la peticion que queremos los datos especificos  
     .then( dato =>{
        //declaramos una varible para extraer los datos de la consulta
        const obtener =  dato.value ;
        //Le decimos que nos cree un nuevo elemento de etiqueta <div> <main> etc.
        const crearElemento = document.createElement( 'p')
        //extraemos los datos de la cadena con el textContent 
        crearElemento.textContent = obtener;
        //hacemos referencia hacia un nodo existente del documento
        crearElement.appendChild(crearElemento);
        
     })
     //Si Existe un error que nos muestre ese error en la consola
      .catch( error => 
          console.log(`No pudimos establecer una conexion con la peticion intentalo de nuevo${error}`)
      );
    }






































//     let api2 = 'https://api.chucknorris.io/jokes/random/';
//      fetch(api)
//     .then(result => result.json())
//     .then(datos => {

//     const consumir= document.getElementById('persona2');
//     consumir.textContent = datos.value;
//     })
//     .catch( error => console.log(error))
   

// let api3 = 'https://api.chucknorris.io/jokes/random/';
// fetch(api)
// .then(result => result.json())
// .then(datos => {

// const consumir= document.getElementById('persona3');
// consumir.textContent = datos.value;
// })
// .catch( error => console.log(error))


// let api4 = 'https://api.chucknorris.io/jokes/random/';
// fetch(api)
// .then(result => result.json())
// .then(datos => {

// const consumir= document.getElementById('persona4');
// consumir.textContent = datos.value;
// })
// .catch( error => console.log(error))


// let api5 = 'https://api.chucknorris.io/jokes/random/';
//      fetch(api)
//     .then(result => result.json())
//     .then(datos => {

//     const consumir= document.getElementById('persona5');
//     consumir.textContent = datos.value;
//     })
//     .catch( error => console.log(error))
   

//     let api6 = 'https://api.chucknorris.io/jokes/random/';
//      fetch(api)
//     .then(result => result.json())
//     .then(datos => {

//     const consumir= document.getElementById('persona6');
//     consumir.textContent = datos.value;
//     })
//     .catch( error => console.log(error))
   
// let api7 = 'https://api.chucknorris.io/jokes/random/';
// fetch(api)
// .then(result => result.json())
// .then(datos => {

// const consumir= document.getElementById('persona7');
// consumir.textContent = datos.value;
// })
// .catch( error => console.log(error))


// let api8 = 'https://api.chucknorris.io/jokes/random/';
// fetch(api)
// .then(result => result.json())
// .then(datos => {

// const consumir= document.getElementById('persona8');
// consumir.textContent = datos.value;
// })
// .catch( error => console.log(error))

// let api9 = 'https://api.chucknorris.io/jokes/random/';
//      fetch(api)
//     .then(result => result.json())
//     .then(datos => {

//     const consumir= document.getElementById('persona9');
//     consumir.textContent = datos.value;
//     })
//     .catch( error => console.log(error))
   

//     let api10 = 'https://api.chucknorris.io/jokes/random/';
//      fetch(api)
//     .then(result => result.json())
//     .then(datos => {

//     const consumir= document.getElementById('persona10');
//     consumir.textContent = datos.value;
//     })
//     .catch( error => console.log(error))
   