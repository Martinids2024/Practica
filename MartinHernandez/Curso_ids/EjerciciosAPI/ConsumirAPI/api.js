
const app = document.querySelector('#app');
const url = 'https:randomuser.me/api/?results=5';
fetch(url)
.then(response =>  response.json())
.then (resultado => { 
    const resul=  resultado.results;
    for(const user of resul){

        const resul = `
    <artitle id ='app'>
      <p class ='title'> Nombre: ${user.name.first} ${user.name.last}</p>
      
      <p> Ciudad: ${user.location.city} Pais: ${user.location.country}</p>
      <p> Telefono: ${user.phone}</p>
      <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
     </artitle>
    `; 
    app.insertAdjacentHTML('beforeend',resul)
    }
    })
