console.log('hola mundo!');
const noCambia = "Laura";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

/* promesa, recibe de argumento o parametro una una funcion
y la podemos guardar en una variable, la funcion tambien recibe dos parametros
el primero es correcto y el segundo rechaza la promesa o todo esta mal

en este caso la invocamos imediadamente si sale todo bien
*/

const getUser = new Promise(function (todoBien, todoMal) {
  //llamar a un Api o le pones un tiempo llamado timers
  //setInterval(); // varias veces en determinado tiempo
  setTimeout(function () {
    todoMal('se acabo el timepo');
  }, 3000);
  // una sola vez en determinado tiempo, como parametros tiene una funcion
  // y el tiempo en milesegundos, luego de tres segundos, ejecuta la funcion que tenemos dentr
})

/* las promesas tienen metodos*/

const getUserAll = new Promise(function (todoBien, todoMal) {
   setTimeout(function () {
    todoMal('se acabo el timepo');
  }, 5000);
})


/*getUser
  // llamamos al metodo then si se encuentra bien y le pasamos un metodo
  .then(function () {
    console.log("Se llama a la promesa y al metodo indicando que todo esta bien")
  })
// cuando la promesa falla llamamos a un metodo cath 
  .catch (function (mensaje){
    console.log (mensaje)
  })*/ 

// vamos a llamar a varias promesas con el .all dentro de corchetes y es un array
 /* Promise.all([
    getUser,
    getUserAll,
  ])
.then(function(mensaje){
  console.log(mensaje)
})
  .catch(function(mensaje){
    console.log(mensaje)
  })*/
// carrera de promesas para saber cual promesa se hace primero
  Promise.race([
    getUser,
    getUserAll,
  ])
.then(function(mensaje){
  console.log(mensaje)
})
  .catch(function(mensaje){
    console.log(mensaje)
  })

//AJAX
//mandamos dos parametros
/*$.ajax('https://randomuser.me/api/',{
  method: 'GET',
  success: function(data){
    console.log(data)
  },
  error:function(error){
    console.log(error)
  }
//XMLhttpRequest un servicio externo 
  
})*/
// peticion por javascript, resumen lo que hicimos con AJAX
fetch ('https://randomuser.me/api/') // devuelve una promesa
.then(function(response){
//console.log(response)
return response.json ()// devuelve una promesa ( una promesa puede devolver una promesa)
})
.then (function(user){
  console.log('user',user.results[0].name.first)
})
.catch(function(){
  console.log('algo fallo')
});

//funciones asincronas se lee de manera sincrona

(async function load(){ 

  // await // palabra reservada para esperar a que se termine el fetch
 //funcion 

 async function getData(url){ //asincronismos
  const response = await fetch(url);//petición gracias a que ees asincroma 
  // podemos guardar el resultado en una variable para traer la promesa y se envuelve 
  const data = await response.json();
  return data; //retorna los datos de las peliculas 
 }
 const $form = document.getElementById('form'); // selector del formulario
 const $home= document.getElementById('home'); //selector jquery //const $home = $('.home.list #item');
 const $featuringContainer = document.getElementById('#feacturing'); // selector parte de abajo.

// funcion para poner varioas atributos en un html
function setAttributes ($element, attributes){
for (const attribute in attributes){ // set agrega elementos 
    //$element.getAttributes /* llama el valor */(attribute) 
  $element.setAttributes /* set asigna el valor */(attribute, attributes [attribute]) // agregamos el atributo en el array que contiene el objecto 
  featuringContainer.append0() 
}
};

 $form.addEventListener('submit', (event) => {
   event.preventDefault(); //evita que la pagina se recargue al utilizar eventos
    //agregamos la clase 
    $home.classList.add ('search-active'); // agregamos este elemento a la clase home de hmtl 
    // vamos a crear un  elemento html
const $loader = document.createElement ('img')// tipo de elemento
debugger
setAttributes ($loader, { // llamamos a la funcion y le pasamos los atributos
  src: 'src/images/loader.gif',
  height : 50,
  width: 50,

/* objeto */}) 
  });


 const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action'); // promesas
 const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama'); // promesas
 const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation'); // promesas
 /*let terrorList; // promesas  
  getData('https://yts.mx/api/v2/list_movies.json?genre=action') // promesas
  .then (function (data){ // promesas
console.log('TerrorList', data); // promesas
    terrorList = data; // promesas
  }) */
 console.log(actionList, dramaList, animationList); // asincronismos
//selectores

//iteración  // funcion anomina mas facil de escribir
//()=> item recibe la pelicula

//JavaScript templace se puede poner una varible dinamica con $
function videoItemTemplace(movie){
  return (
    `<div class="primaryPlaylistItem">
      <div class="primaryPlaylistItem-image">
      <img src="${movie.medium_cover_image}">
      </div>
      <h4 class="primaryPlaylistItem-title">
      ${movie.title}
      </h4>
    </div>`
    )
    };
 // creamos a la funcion que nos crea el Templace
 function createTemplace(HTMLstring){
      // se crea un elemento de html en js
      const html = document.implementation.createHTMLDocument();
      // html tiene un elemento body y dentro del elemento inner que pone al los elementos dentro del HTML 
      html.body.innerHTML = HTMLstring; // en este cosa ponemos el templace que lo tenenmos guardado en esa variable
      return html.body.children[0];
    };
    //console.log (videoItemTemplace('src/images/covers/midnight.jpg ', 'titulo'));
    // funcion que imprime los elementos en pantalla dentro del navegador ejecuta el iterador
function addEventClick($element){
  $element.addEventListener('click', function(){
    // funcion 
    showModal();
  }) // agrega una escucha de eventos
};

  function renderMovieList(list, $container){
  // buscar un elemento dentro del container 
  $container.children[0].remove(); // removemos la primera imagen atntes de iterar 

  //actionList.data.movies.forEach((movie)=> { // forma no dinamica
  list.forEach((movie)=> {
      //debugger
    const HTMLstring = videoItemTemplace(movie); 
    const movieElement = createTemplace(HTMLstring);// llamamos a la funcion una funcion para  que nos cree el templace
      //debugger
      // agrega los 20 elementos uno despues del otro. se muestra en la pantalla 
      //$actionContainer.append(HTMLstring); // vamos a crear el DOM partiendeo de la variable HTMLstring
      //$actionContainer.append(movieElement); // vamos a crear el DOM partiendeo de la variable HTMLstring // forma no dinamica
    $container.append(movieElement); // vamos a crear el DOM partiendeo de la variable HTMLstring // forma dinamica
      //console.log(HTMLstring);
      addEventClick (movieElement);
  });
    };

const $actionContainer = document.querySelector('#action');
renderMovieList(actionList.data.movies, $actionContainer);

const $dramaContainer = document.getElementById('drama');
renderMovieList(dramaList.data.movies, $dramaContainer);

const $animationContainer = document.getElementById('animation');
renderMovieList(animationList.data.movies, $animationContainer);




const $modal = document.getElementById('modal'); // selectores 
const $overlay = document.getElementById('overlay');
const $hideModal = document.getElementById('hide-modal');

const $modalImage = $modal.querySelector('img');
const $modalTitle = $modal.querySelector('h1');
const $modalDescription= $modal.querySelector('p');

function showModal(){
$overlay.classList.add('active'); // activar la clase css estilo para que se muestre
$modal.style.animation = 'modalIn .8s forwards'; // se le asigna una animacion que dura 8 segundos cuando acaba la animacion se queda en su estado original
};

$hideModal.addEventListener('click',hideModal /*oculta */ );
function hideModal (){
  $overlay.classList.remove('active'); // remueve la clase css estilo para que se muestre
  $modal.style.animation = 'modalOut .8s forwards'; // saca la animacion que dura 8 segundos cuando acaba la animacion se queda en su estado original
};
/*
// creacion de templace con jquery

'<div class="primaryPlaylistItem">'+
'<div class="primaryPlaylistItem-image">'+
  '<img src="src/images/covers/midnight.jpg">'+ //dato dimanico en jquery '+imageSRC+'
'</div>'+
'<h4 class="primaryPlaylistItem-title">'+
 ' Titulo de la peli'+
'</h4>'+
'</div>'
*/

})();

