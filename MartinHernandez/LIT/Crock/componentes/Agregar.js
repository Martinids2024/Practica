import { LitElement, html, css} from "lit";
export default class Agregar extends LitElement{

    static get properties() {
        return {
            hidden:{type:Boolean}
        }
    }
    constructor(){
        super();
    }
    static styles=css`
        :host{
            display:none;
        }
        .padre{
            display: flex;
          width:400px;
            height: 500px; 
            background-color:grey;
            margin: 0 auto 0;
            
        }
        h1{
            color: white;
            font-family:"Roboto Flex", sans-serif;
            text-align:center;

        }
        .hijo{
            margin: 0 auto 0;
            align-items:center;
            display: flex;
            justify-content:center;
            flex-direction:column;
        }
        label{
            display:block;
            padding:1rem;
            color: white;
            font-family:"Roboto Flex", sans-serif;
            font-size: 1.5rem;
           
        }
        #btnAgregar{
            margin-top: 2rem;
            width:150px;
            height: 40px;
        }
        #nombre, #apellido, #años{
            width: 300px;
            height: 40px;
            font-family:"Roboto Flex", sans-serif;
            font-size: 1.5rem;
        }
        div[close]{
                display:none;
            }
    `;
    render(){
        return html`
            <div class="padre">
                <div class="hijo">
                    <h1>Agregar</h1>
                    <label>
                        Nombre:
                    </label>
                    <input type="text" name="nombre" id="nombre">
                    <label>
                        Apellido:   
                    </label>
                    <input type="text" name="apellido" id="apellido">
                    <label>
                        Edad:
                    </label>
                    <input type="number" name="edad" id="años">
                    <button id="btnAgregar" @click=${this.updateHidden}>Agregar</button>
                </div>
            </div>
           
        `;
    }

    updateHidden(){
                                          // nombre custom event     detail: valores   
        this.dispatchEvent(new CustomEvent('change-hidden', {detail: {val: false}}));
    }

}

customElements.define('agregar-app', Agregar);