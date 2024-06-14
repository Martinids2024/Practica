//  const girar = document.querySelector('lanzarModal');
 
//  girar.addEventListener('click', (numeroAleatorio) => {

//     function generarNumero(){
//         return numeroAleatorio = Math.floor(Math.random() * 6) + 1;
//     }
//     const modal = document.getElementById('numeroAle');
    
//     try {

//         if(numeroAleatorio > 5 ){
//            const numeroRandon = generarNumero();
//            modal.value = numeroRandon;
//         }
       
//         }catch (error){
           

        
//         }

//  })

// const girar = document.querySelector('#lanzarModal')
// girar.addEventListener('click', (numeroRandon) => {
//     function generarnumero(){
//         return  numeroRandon = Math.floor(Math.random( )* 6) + 1;
//     }
//     inputext = document.getElementById('numeroAle')
//     try{
        
//         const numeroRandon = generarnumero();
//         inputext.value= numeroRandon;
        
//     }catch (error){
    
//     console.log("error");
//     }

// });

// const girar = document.querySelector('#lanzarModal')
// girar.addEventListener('click', (numeroRandon) => {
//     function generarnumero(){
//         return  numeroRandon = Math.floor(Math.random( ) * 6) + 1;
//     }

// inputext = document.getElementById('numeroAle');
// inputext2 = document.getElementById('resul');
//     try{
//         const Randon = generarnumero();
//     if (numeroRandon >= 5){
        
//         inputext.value = Randon;
//     }else if(numeroRandon < 5){
//         inputext2.value = Randon;
//     }
        
//     }catch (error){
//     console.log("error");
//     }

// });
const cerrar = document.querySelector('#ocultar')
const conteModal= document.querySelector('#contenedorModal')
const girar = document.querySelector('#lanzarModal')
girar.addEventListener('click', () => {


     function generarnumero(){
    return  numeroRandon = Math.floor(Math.random( ) * 6) + 1;
     }
 inputext = document.getElementById('numeroAle');
 inputext2 = document.getElementById('resul');

     try{
         const Randon = generarnumero();
     if (numeroRandon >= 5){
         inputext.value = Randon;

     }else if(numeroRandon < 5){
         inputext2.value = Randon;
        conteModal.showModal();
        cerrar.addEventListener('click', () => {
        conteModal.close();
                
            });
        } 
     }catch (error){
        console.log ("hubo un error en la operacion")
     }

 });
