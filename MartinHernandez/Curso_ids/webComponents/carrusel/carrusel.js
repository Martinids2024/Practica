export default class MiCarrusel  extends HTMLElement(){

    constructor(){
        super();
        this.imagenes = ['https://placeholder.co/500x100', 'https://placeholder.co/500x200', 'https://placeholder.co/500x300','https://placeholder.co/500x400',];
        this.index = 0;
        this.attachShadow({mode: 'open'})


    }

conetedCallback(){
    this.render();
}

render(){
this.sadowRoot.innerHTML =`
<buton id="prev"> siguinte<button>
<img src=" ${this.imagen[this.index]}" width="300px"   height="150px">  
<buton id="next"> siguinte<button>`;

const buttonPre = this.shadowRoot.querySelector('#prev');
const butonNext = this.shadowRoot.querySelector('#next');
buttonPre.addEventListener('click', () => {

if (this,index - 1 < 0 ){

    this.index= this.imagenes.length -1;
    
}else {
    this.index = this.index -1;
}
this.render();

});
butonNext.addEventListener('click', () =>{
if (this.index + 1 > this.conetedCallback.imagenes.length - 1 ){
this.index = 0;

}else {

    this.index = this.index +1 ;
}
this.render();
});

}

}