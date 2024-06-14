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
        this.shadowRoot.innerHTML=`
    

        <style>
   
    .body{
        background-color: aqua;
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
       
    height: 20px;
    width: 21px;
    padding-right: 1rem;
       
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
       
    display: flex;
    justify-content: flex-end;
       
       
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
    <a href="#"class="links"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-flask" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 3l6 0" />
        <path d="M10 9l4 0" />
        <path d="M10 3v6l-4 11a.7 .7 0 0 0 .5 1h11a.7 .7 0 0 0 .5 -1l-4 -11v-6" />
      </svg>
       
    </a>
    <a href="#"class="links"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grid-dots" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg></a>
       
      <a href="#lclass="links"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-square-rounded" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
        <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
      </svg></a>
       
       
    </nav>
       
    </div>
    <div class="contendor_2">
    <a href="https://www.google.com/" class="logo">
    <h1 class="titulo">
    Google
    </h1>
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
    <img src="imagenes/icono3.png" class="icons1">
          
    </section>
    </div>
    </div>
       
        </div> 
        `;
        const array  = ['hola','lapiz', 'pluma', 'computadora', 'telefono', 'tablet' ];
        const busqueda = document.getElementById('#buscador');

        busqueda.addEventListener('input', function (){
            const bus = busqueda.value.toLowerCase();
            const encontrar = false;
            
        for(let i = 0; i < array.length; i++){

            if(array[i].includes(bus)){
                encontrar= true;
            

            }
            if(encontrar){
                console.log('busqueda exitosa');
            }else {
            console.log("no encontramos tu busqueda");
            }
        }



        });
   

}
 

    }
