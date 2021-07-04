let pokeId = 0;

async function generator_pokemon() {
  try {
    const container = document.querySelector(".container");

    for (let i = 1; i < 10; i++) {
      const pokemon = await getPokemon(i);
      const name = pokemon.name;
      const type = pokemon.types[0].type.name;
      const image = pokemon.sprites.front_default;

      container.innerHTML += `
      <div class="container_pokemon type_${type}">
        <h3 class="title_pokemon">${name}</h3>
        <div class="container_img">
          <img src="${image}">
        </div>
        <div class="description_pokemon">
        <span class="type_pokemon"><b>Type: </b></span><span class="type_pokemon" id="type">${type}
        </span>
        </div>
      </div>
  `;
    }
  } catch (error) {
    console.error(error);
  }
}

generator_pokemon();
