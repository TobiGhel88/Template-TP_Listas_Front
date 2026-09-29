/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data
    comidasenfuncion()                  // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = []

const container = document.getElementById('comidaContainer');
function comidasenfuncion(){
  for(let i = 0; i < comidas.length; i++){
    let comidapuntual = comidas[i]
    console.log(comidapuntual)
    
    container.innerHTML += 
    ` <article class="card">
      <h2 class="comida">${comidapuntual.nombre}
      <p>${comidapuntual.categoria}</p>
      <p>${comidapuntual.provincia}</p>
      <ul>
      
      </ul>
  </article>
  `}
}

