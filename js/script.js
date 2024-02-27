const characterList = document.getElementById(`character-list`);

function sacarPersonajes() {
  fetch(`https://rickandmortyapi.com/api/character/?page=1`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`La solicitud no fue exitosa`);
      }
      return response.json();
    })
    .then((data) => {
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

sacarPersonajes();

const previousPage = document.getElementById("prev-page");
const nextPage = document.getElementById("next-page");

nextPage.addEventListener("click", function () {});
