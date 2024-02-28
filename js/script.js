const characterList = document.getElementById("character-list");
const previousPage = document.getElementById("prev-page");
const nextPage = document.getElementById("next-page");

let nextPageUrl = "";
let prevPageUrl = "";

function sacarPersonajes(url) {
  characterList.innerHTML = "";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`La solicitud no fue exitosa`);
      }
      return response.json();
    })
    .then((data) => {
      nextPageUrl = data.info.next;
      prevPageUrl = data.info.prev;

      data.results.forEach((character) => {
        let listaPersonajes = document.createElement("li");
        let imagen = document.createElement("img");
        imagen.src = character.image;
        let nombre = document.createElement("p");
        nombre.innerHTML = `<strong>Nombre:</strong> ${character.name}`;
        let especie = document.createElement("p");
        especie.innerHTML = `<strong>Especie:</strong> ${character.species}`;
        listaPersonajes.appendChild(imagen);
        listaPersonajes.appendChild(nombre);
        listaPersonajes.appendChild(especie);
        characterList.appendChild(listaPersonajes);
      });
    })
    .catch((error) => {
      characterList.innerText = `Error: No se pudo obtener los personajes`;
    });
}

nextPage.addEventListener("click", function () {
  sacarPersonajes(nextPageUrl);
});

previousPage.addEventListener("click", function () {
  if (prevPageUrl) {
    sacarPersonajes(prevPageUrl);
  }
});

sacarPersonajes("https://rickandmortyapi.com/api/character/?page=1");
