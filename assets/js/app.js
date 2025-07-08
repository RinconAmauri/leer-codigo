const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //cambie la seleccion de name a la clase .name de la etiqueta <p> del index.html.
const $b = document.querySelector('.blog'); //cambie #blog a .blog como esta en la segunda etiqueta <p> del index.html.
const $l = document.querySelector('.location');

async function displayUser(username) { //agregue el async para crear una funcion asincrona y quitar el error que marcaba con el await.
  $n.textContent = 'cargando...';
  try { //Envolvi response y data en un bloque try-catch ya que no habia manejo de errores dentro de la funcion displayUser.
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // faltaba la conversion de la respuesta fetch a un objeto JSON, asi que complete la constante que hiciera esta conversion.
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`; // Cambie las comillas simples por backticks para que funcionaran los placeholders.
    $l.textContent = `${data.location}`;
    console.log(data); //cambie la posicion de este console.log para que pudiera mostrar todos los dtos previos en consola.
  } catch (err) { //faltaba el catch para el manejo de errores en caso de que falle la petición.
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`; //corregi la variable n por $n que si esta declarada en el codigo, y agregue .message al err para que solo mostrara el mensaje de error y no toda la informacion del objeto.
}

displayUser('stolinski'); //quite el .catch(handleError) porque ya se estan maenjando los errores desde la funcion displayUser.