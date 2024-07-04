export default class MiGoogle extends HTMLElement{


    constructor (){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
    this.render();
    this.buscardor();
}
    render(){
        const array  = ['hola','lapiz', 'pluma', 'computadora', 'telefono', 'tablet' ];
        this.shadowRoot.innerHTML=`
    

        <style>
            .body{
                background-color: ;
            }
            .titulo{
                font-size: 5rem;
                color: rgb(216, 23, 23);
                text-align: center;   
            }
            .logo{
                text-decoration: none;
            }
            .motor{
                background-color: #fafafa;
                border-radius: 3rem;
                text-align: center;
                position: relative;
                left: calc(100% - 70%);
                width: 640px;
                height: 40px;
                border: 1px solid black;
            }
            .nav{
                display: grid;
                grid-template-columns: 1fr 262fr 30fr 5fr;
                justify-content: space-around;
                align-items: center;
            }
            .buscador{
                width: 489px;
                height: 32px;
                margin-top: 4px;
                border: none;
                padding-left: 2rem;
                border-radius: 1rem;
            }
            .icon-tabler-search{
                height: 2rem;
                width: 22px;
                padding-left: 1rem;
            }
            .icons1{
                width: 21px;
                padding-right: 1rem;
                height: 20px;
            }
            .busqueda{
                display: grid;
                grid-template-columns: 1fr 13fr 1fr 1fr;
            } 
            .colors{
                background-color: aliceblue;
            }
            .boton{
                border-radius: .2rem;
                background-color: white;
            }    
            .navegador{
                justify-content: flex-end;
                display: flex;
            }
            .links{
                color: white;
                text-decoration: none;
                text-align: center;
                padding: 0px;
            }

            </style>

            <div class="padre">
                <div class="navegador">  
                    <nav class="menu">
                        <a href="#"class="links">Gmail</a>
                        <a href="#"class="links">Imagenes</a>
                    </nav>
                    </div>
                    <div class="contendor_2">
                        <a href="https://www.google.com/" class="logo"><h1 class="titulo">Google</h1>
                        </a> 
                    <div class="motor">
                    <section class="nav">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                        </svg>
                        <input type="text" class="buscador" id="buscador" placeholder="Search Google or a URL">
                        <img src="imagenes/icono2.png" class="icons1">
                        img src="imagenes/icono3.png" class="icons1">
                     </section>
            </div>
            </div>
            </div> `;


        
//         const busqueda = document.getElementById('#buscador');
//             busqueda.addEventListener('input', function (){
//             const bus = busqueda.value.toLowerCase();
//             const encontrar = false;
       
//         for(let i = 0; i < array.length; i++){

//             if(array[i].includes(bus)){
//                 encontrar= true;
            

//             }
//             if(encontrar){
//                 console.log('busqueda exitosa');
//             }else {
//             console.log("no encontramos tu busqueda");
//             }
//         }



//         });
   

// }
    }
    busqueda (){


    }
}
