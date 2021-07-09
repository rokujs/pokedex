import getPokemon from "../services/getPokemon";

async function Home() {
  try {
    let pokemons = [];
    for (let i = 1; i < 30; i++) {
      const pokemon = await getPokemon(i);
      pokemons.push(pokemon)
    }
    
    const view = pokemons.map((pokemon) => {
      const name = pokemon.name;
      const type = pokemon.types[0].type.name;
      const image = pokemon.sprites.front_default;
      const url = pokemon.id

      return `
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
    }).join('');

  return view

  } catch (error) {
    console.error(error);
  }
}

export default Home;
