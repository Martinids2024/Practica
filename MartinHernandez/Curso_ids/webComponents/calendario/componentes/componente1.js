export default class Calendario extends HTMLElement{
    
        constructor(){
            super();
            this.attachShadow({mode: 'open'});
            this.shadowRoot.innerHTML = `

            <style>
            .barra-navegacion{
            
             border-bottom: .5px solid #8f938f;
            background-color:white;
            display:grid;
            grid-template-columns: 1fr 2fr 44fr 38fr 3fr 12fr 145fr 11fr 9fr 6fr 1fr 22fr;
            
            border-style: 3rem solid#8f938f;
            }
            .imagen{
            
              
                height: 60px;
                width: 60px;
                padding-left: 1rem;
            
            
            
                
            }
            
            .text1{
                margin-top: .5rem;
                gap: 3rem;
                font-family:"Google Sans", Roboto, Arial, sans-serif;
                color: #7f877f;
                font-weight: 100;
            
            }
            
            .icon{
            
            height: 30px;
            width: 30px;
            padding-left: .5rem;
            
            
            
            }
            
            .buton{
            
             
                height: 37px;
                width: 88px;
                margin-top: .5rem;
            
            }
            
            .btn{
            
            
                height: 83px;
                width: 15rem;
                background-color: #d4d4d4;
                display: flex;
                border-radius: 4rem;
                margin-top: 1.5rem;
                padding-left: 1rem;
                box-shadow: 0px 4px teal;
            }
            
            .contenedorPadre{
            
            
                display: flex;
            }
            
            .hijo1{
                background-color:white;
                height: 68.7rem;
                width: 20rem;
                border: .5px solid #8f938f;
                display: flex;
                
            
            }
            .hijo2{
            
                height: 40rem;
                width: 66rem;
                display: flex;
                flex-wrap: wrap;
            }
            
            .uno{
            
                height: 11.4rem;
                width: 13rem;
                background-color: white;
                border: .5px solid #8f938f;
                text-align: center;
                font-family:"Google Sans", Roboto, Arial, sans-serif;
                color: #7f877f;
                font-size: 12px;
                font-weight: 100;
                font-weight:lighter;
                
            }
            .icon-tabler-triangle-inverted-filled{
            
                height: 10px;
                width: 10px;
                margin-top: 2rem;
                padding-left: 2rem;
            }
            
            .mini{
                display: flex;
                flex-wrap: wrap;
            }
            
            .mini-calendario{
              
                width: 217px;
                position: relative;
                left: calc(100% - 98%);
                margin-top: -59rem;
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                font-family: "Google Sans", Roboto, Arial, sans-serif;
                font-size: 12px;
                font-weight: 100;
                font-weight: lighter;
            }
            
            .task {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }
            .task input[type="text"] {
                flex: 1;
                margin-right: 10px;
            }
            .task input[type="checkbox"] {
                margin-left: 10px;
            }
            button {
                margin-top: 10px;
            }
            </style>
            
            
            
            <header class="barra-navegacion">
            <p class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="68" height="68" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                  </svg>
            </p>
                    <img src="./imagenes/image.png"  class="imagen" alt="">
            
            <h1 class="text1">Calendario</h1>
            
            
            <input type="button" class="buton" value="Today">
            
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="2.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 6l-6 6l6 6" />
                      </svg>
                </p>
            
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="2.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 6l6 6l-6 6" />
                      </svg>
                </p>
            
            
            <h1 class="text1">June 2024</h1>
            
            
            
                <div class="iconer">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="44" height="44" viewBox="0 0 24 24" stroke-width="2.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                          </svg>
                    </p>
            
                    
                </div>
                
                    <p>
            
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help-circle" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M12 16v.01" />
                            <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
                          </svg>
                    </p>
                
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                          </svg>
                    </p>
            
                    <p>
            
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                          </svg>
                    </p>
            
            </header>
            <div class="contenedorPadre">
            
                <div class="hijo1">
                        <div class="btn">
            
                            <div class="pri">
                            <p>
                                <svg width="36" height="36" viewBox="0 0 36 36"><path fill="#34A853" d="M16 16v14h4V20z"></path>
                                <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path><path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
                                <path fill="#EA4335" d="M20 16V6h-4v14z"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
                            </p>
                        </div>
            
                        <div class="pro">
                            <h2>
                                Create
                            </h2>
                        </div>
                        <div class="pre">
            
                            
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-triangle-inverted-filled" width="12" height="12" viewBox="0 0 24 24" stroke-width="3" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M20.118 3h-16.225a2.914 2.914 0 0 0 -2.503 4.371l8.116 13.549a2.917 2.917 0 0 0 4.987 .005l8.11 -13.539a2.914 2.914 0 0 0 -2.486 -4.386z" stroke-width="0" fill="currentColor" />
                            
                        </div>
                    </div>
                </div>   
                <div class="hijo2">
            
                        <div class="uno">
                            <h3>1</h3>
                            <div class="tasks"></div>
                <button id="addTaskButton">Agregar Tarea</button>
                        </div>
                         <div class="uno">
                            <h3>2</h3>
                            <div class="tasks2"></div>
                            <button id="addTaskButton2">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>3</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                         </div>
                        <div class="uno">
                            <h3>4</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>5</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                         <div class="uno">
                            <h3>6</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>7</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                         </div>
                        <div class="uno">
                            <h3>8</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
            
                        <div class="uno">
                            <h3>9</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                         <div class="uno">
                            <h3>10</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>11</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                         </div>
                        <div class="uno animation">
                            <h3>12</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                          
                        </div>
                        <div class="uno">
                            <h3>13</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                         <div class="uno">
                            <h3>14</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>15</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                         </div>
                        <div class="uno">
                            <h3>16</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
            
                        <div class="uno">
                            <h3>17</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                         <div class="uno">
                            <h3>18</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>19</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                         </div>
                        <div class="uno">
                            <h3>20</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>21</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                         <div class="uno">
                            <h3>22</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>23</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                         </div>
                        <div class="uno">
                            <h3>24</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
            
                        <div class="uno">
                            <h3>25</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                         <div class="uno">
                            <h3>26</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>27</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                         </div>
                        <div class="uno">
                            <h3>28</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                        <div class="uno">
                            <h3>29</h3>
                            <div class="tasks"></div>
                            <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
                         <div class="uno">
                            <h3>30</h3>
                              <div class="tasks"></div>
                <button id="addTaskButton">Agregar Tarea</button>
                            
                        </div>
            
                        
                </div>
            
                <div class="hijo3">
                    
                        <img src="./imagenes/icono2.png" alt="">
                        <p>
            
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-check" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 12l2 2l4 -4" />
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                              </svg>
                        </p>
            
            
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                              </svg>
                        </p>
                        <img src="./imagenes/icono3.png" alt="">
            
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 5l0 14" />
                                <path d="M5 12l14 0" />
                              </svg>
                        </p>
                </div>
            </div>  
            
            <div class="mini-calendario">   
                <div class="dos">
                    <span>D</span>
                    <h3>26</h3>
            
                </div>
            
                 <div class="dos">
                    <span>L</span>
                    <h3>27</h3>
                </div>
            
                <div class="dos">
                    <span>M</span>
                    <h3>28</h3>
                 </div>
            
                <div class="dos">
                    <span>M</span>
                    <h3>29</h3>
                </div>
            
                <div class="dos">
                    <span>J</span>
                    <h3>30</h3>
                </div>
            
                 <div class="dos">
                    <span>V</span>
                    <h3>31</h3>
                </div>
            
                <div class="dos">
                    <span>S</span>
                    <h3>1 </h3>
                 </div>
            
                <div class="dos">
                <h3>2 </h3>
                </div>
            
                <div class="dos">
                    <h3> 3 </h3>
                </div>
            
                 <div class="dos">
                   
                    <h3>4 </h3>
                </div>
                <div class="dos">
                    <h3>5 </h3>
                 </div>
                <div class="dos">
                    <h3>6 </h3>
                </div>
                <div class="dos">
                    <h3>7 </h3>
                </div>
                 <div class="dos">
                    <h3>8 </h3>
                </div>
                <div class="dos">
                    <h3>9</h3>
                 </div>
                <div class="dos">
                    <h3>10</h3>
                </div>
            
                <div class="dos">
                    <h3>11</h3>
                </div>
                 <div class="dos">
                    <h3>12</h3>
                </div>
                <div class="dos">
                    <h3>13</h3>
                 </div>
                <div class="dos">
                    <h3>14</h3>
                </div>
                <div class="dos">
                    <h3>15</h3>
                </div>
                 <div class="dos">
                    <h3>16</h3>
                </div>
                <div class="dos">
                    <h3>17</h3>
                 </div>
                <div class="dos">
                    <h3>18</h3>
                </div>
            
                <div class="dos">
                    <h3>19</h3>
                </div>
                 <div class="dos">
                    <h3>20</h3>
                </div>
                <div class="dos">
                    <h3>21</h3>
                 </div>
                <div class="dos">
                    <h3>22</h3>
                </div>
                <div class="dos">
                    <h3>23</h3>
                </div>
                 <div class="dos">
                    <h3>24</h3>
                </div>
            
                <div class="dos">
                    <h3>17</h3>
                 </div>
            
                <div class="dos">
                    <h3>18</h3>
                </div>
            
                <div class="dos">
                    <h3>19</h3>
                </div>
            
                 <div class="dos">
                    <h3>20</h3>
                </div>
            
                <div class="dos">
                    <h3>21</h3>
                 </div>
            
                <div class="dos">
                    <h3>22</h3>
                </div>
            
                <div class="dos">
                    <h3>23</h3>
                </div>
            
                 <div class="dos">
                    <h3>24</h3>
                </div>
            
                <div class="dos">
                    <h3>25</h3>
                </div>
            
                <div class="dos">
                    <h3>26</h3>
                </div>
            
                <div class="dos">
                    <h3>27</h3>
                </div>
                <div class="dos">
                     <h3>28</h3>
                </div>
            
                <div class="dos">
                    <h3>29</h3>
                </div>
            
                <div class="dos">
                    <h3>30</h3>
                </div>
                    
                
                </div>
                     
        `
    

       this.Button = this.shadowRoot.querySelector('#addTaskButton');
       this.Contenedor = this.shadowRoot.querySelector('.tasks');
       this.Button.addEventListener('click', () => this.render());
      
       
        }

render(){
        const task = document.createElement('div');
        task.classList.add('task')
        task.innerHTML = `
            <input type="text" placeholder="Nueva tarea">
            <input type="checkbox">
        `;
        const checkbox = task.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                this.Contenedor.removeChild(task);
            }
            
        });
        this.Contenedor.appendChild(task);
        const checkbox2 = task.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                this.Contenedor.removeChild(task);
            }
            
        });
        this.Contenedor.appendChild(task);

    } 

}



