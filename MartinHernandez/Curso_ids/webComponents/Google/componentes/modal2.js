class Modal extends HTMLElement{

    constructor(){

        super();
        this.attachShadow({moda: 'open'})


    }
    
    connectedCallback() {
        this.render();



    }
    render(){
this.shadowRoot.innerHTML=`
    
<style>

legend{

    text-align: center;
}
img{

    align-items: center;
}

.imagen2{


    height: 300px;
    width: 300px;
    text-align: center;
}
.boton2{

    position: relative;
    left: calc(100% - 70%);
}
.button2{

align-items: center;
}

.estilo{

background-color: brown;

}
 </style>


         <dialog open   id="contenedorModal" class="estilo">
 
    <div class="modal">
    
        <legend> !!Oops no encontro resultados para busqueda!! </legend>

        <img src="./imagenes/icono.9.gif" class="imagen2">
       
        <div class="button2">
        <input type="button"  id= "ocultar" class="boton2" value="       Salir        ">
        </div>
    
    </div>
     </dialog>`;

}

}