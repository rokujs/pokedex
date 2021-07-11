import getPokemon from "../services/getPokemon";

async function ResultPokemon({ keyword }) {
  try {
    const pokemon = await getPokemon({ id: keyword });

    const name = pokemon.name;
    const type = pokemon.types[0].type.name;
    const image = pokemon.sprites.front_default;
    const url = pokemon.id

    const view = `
      <div class="container_pokemon type_${type}">
      <a href="/#/${url}">
        <h3 class="title_pokemon">${name}</h3>
        <div class="container_img">
          <img src="${image}" class="img_${type}">
        </div>
        <div class="description_pokemon">
        <span class="type_pokemon"><b>Type: </b></span><span class="type_pokemon" id="type">${type}
        </span>
        </div>
        </a>
      </div>
  `;

    return view

  } catch (error) {
    console.error(error);
    return `
    <span class="text__error">
      Pokemon id or name not found
    </span>
    `
  }
}

export default ResultPokemon;
