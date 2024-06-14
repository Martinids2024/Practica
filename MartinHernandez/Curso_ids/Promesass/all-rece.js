// Supongamos que tenemos un conjunto de funciones que devuelven promesas
const promiseFunctions = [
  () => fetch('https://api.example.com/data1'),
  () => fetch('https://api.example.com/data2'),
  () => fetch('https://api.example.com/data3')
];

// Función para ejecutar promesas en paralelo sin usar Promise.all
function parallelPromises(promiseFunctions) {
  let results = [];
  let pendingPromises = promiseFunctions.length;

  // Función para manejar la resolución de cada promesa
  function handleResolve(index, data) {
    results[index] = data;
    pendingPromises--;

    // Si todas las promesas han sido resueltas, resuelve la promesa global
    if (pendingPromises === 0) {
      return Promise.resolve(results);
    } else {
      return Promise.resolve(); // Devuelve una promesa resuelta para mantener la consistencia
    }
  }

  // Crea un array de promesas basado en las funciones que devuelven promesas
  const promises = promiseFunctions.map((promiseFn, index) => {
    return promiseFn().then(response => response.json()).then(data => {
      return handleResolve(index, data);
    }).catch(error => {
      // Manejo de errores para cada promesa individualmente
      console.error(`Error in promise ${index}:, error`);
      // Si una promesa falla, la marcamos como resuelta para no bloquear a las demás
      return handleResolve(index, null);
    });
  });

  // Devuelve una promesa que se resuelve cuando todas las promesas individuales han terminado
  return Promise.all(promises).then(() => results);
}

// Uso de la función parallelPromises
parallelPromises(promiseFunctions).then(results => {
  console.log('Todos los resultados:', results);
}).catch(error => {
  console.error('Hubo un error al ejecutar las promesas en paralelo:', error);
});