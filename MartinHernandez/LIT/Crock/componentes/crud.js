import { LitElement, css, html } from "lit";
import "./Agregar.js";


export default class Crud extends LitElement{
    static  get properties() {
        return{
            tabla:{type: Array},
            hidden:{type: Boolean}
        }
    }
    constructor() {
        super();
        this.tabla =[];
        this.hidden = false;
    }
    static styles=css`
        :host{
            display: block;
        }
        
        .navegador{
            background-color:green;
            text-align:center;
            font-family: "Roboto Flex", sans-serif;
            height:80px;
        }
        h1{
            color:white;
            padding-top:1rem;
        }
        .agregar{
            background-color:blue;
            height:80px;
        }
        .btnA{
            margin-top:1rem;
            margin:2rem;
            height:35px;
            width:100px;
        }
        .tbl{
            background-color:grey;
            margin-top:1rem;
            display:flex;
        }

        div[close]{

            display:none;
        }
        agregar-app[open]{
            display:block;
        }
    
    `;
   
    render(){
      
        return html`
            <div id="padre" class="padre" ?close= ${this.hidden}>
                <div class="navegador">
                    <h1>CRUD</h1>
                </div>
                <div class="agregar">
                    <button class="btnA" @click=${this.Agregar}>Agregar</button>
                </div>
                <table class="tbl" id="tabla">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    
                       
                    </tr>
                </table>
            </div>
            <agregar-app ?open=${this.hidden}></agregar-app>
            
        `;
        
    }
    
    Agregar(){
            this.hidden = true;   
    }

    updated(){
        const tab = this.shadowRoot.getElementById("tabla");
        const array = JSON.parse(localStorage.getItem('arreglo'));
        array.forEach(item => {
        const recorre = tab.insertRow();
        recorre.innerHTML =`
            <td>${item.id}</td>
            <td>${item.name}</td> 
            <td>${item.apellido}</td>
            <td>${item.edad}</td><button  @click="Eliminar">Eliminar</button><button>Editar</button>
    `;
}) 
      
        this.shadowRoot.querySelector('agregar-app').addEventListener('change-hidden', 
            (event) => {
                //hidden = true
                console.log(event);
                this.hidden = event.detail.val;
                //hidden = false
            }
        )
    }

}
