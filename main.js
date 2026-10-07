/*
    Cargar comidas en memoria desde el JSON
*/
fetch('./data/comidas.json')          // Ruta al archivo JSON
  .then(response => response.json())  // Convertir la respuesta en JSON
  .then(data => {                     // Aquí tienes acceso al JSON en formato de objeto JS
    console.log('Comidas cargadas desde JSON:');
    console.log(data);    
    comidas = data
    mostarlasomidasconforeach()                  // Asignar el JSON a la variable comidas
  })
  .catch(error => {                   // Manejo de errores al leer el archivo JSON
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = []

const container = document.getElementById('comidaContainer');
/*
function comidasenfuncion(){
  for(let i = 0; i < comidas.length; i++){
    let comidapuntual = comidas[i]
    let lista = ""
    console.log(comidapuntual.ingredientes)
    for( a = 0; a < comidapuntual.ingredientes.length; a++){
      lista += `<li>${comidapuntual.ingredientes[a]}</li>`
    }
    container.innerHTML += 
    ` <article class="card">
      <h2 class="comida">${comidapuntual.nombre}
      <p>${comidapuntual.categoria}</p>
      <p>${comidapuntual.provincia}</p>
      <ul>
      ${lista}
      </ul>
  </article>`}

}
*/
function mostarlasomidasconforeach(){
  container.innerHTML = "";

  comidas.forEach(comida => {

    console.log(comida.ingredientes)

    let lista = comida.ingredientes
    let listita = ""
    lista.forEach(itemdelista => {
      listita += `<li>${itemdelista}</li>`
    })
    container.innerHTML += 
    ` <article class="card">
     <p class= "categoría">${comida.categoria}</p>
      <h2 class="comida">${comida.nombre}</h2>
      <p>${comida.provincia}</p>
      <ul>
      ${listita}
      </ul>
  </article>`

  })
}

const agregarcomidaform = document.getElementById('agregarcomida');
agregarcomidaform.addEventListener("submit",(event) => {
  //alert("Comida agregada: " + event.target.nombre.value)
  event.preventDefault()
  let comidanueva = {
    nombre: event.target.nombre.value,
    provincia: event.target.provincia.value,
    categoria: event.target.categoria.value,
    ingredientes: event.target.ingredientes.value.split(", ") 
  }
  comidas.push(comidanueva)
  mostarlasomidasconforeach()
  console.log(comidanueva)
  event.target.reset()
})
