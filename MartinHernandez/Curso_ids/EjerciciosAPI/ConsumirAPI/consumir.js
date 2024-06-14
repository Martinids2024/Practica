




const archivo  = 'https://randomuser.me/api/?results=5 ';
fetch(archivo)
.then(resultado => {
     return resultado.json()
    })

.then(({dato}) => { 
const consumir = dato.map((usuario) => 
    `<article  class="resultados">
<p class="titulo">${usuario.gender}</p>
<p class="primero">${usuario.name.title}</p>
<p class="ultimo">${usuario.name.first}</p>
<p class="telefono">${usuario.name.last}</p>
</article> `);

const resultado = consumir.join('');
document.body.innerHTML = resultado;

})