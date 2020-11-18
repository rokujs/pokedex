const api = 'https://pokeapi.co/api/v2/'
let pokeId = 0;


async function start(id) {
  const pokemon = await get_pokemon(id);
  const name = document.getElementById('name')
  const image = document.getElementById('image')
  const type = document.getElementById('type')
  name.innerHTML = pokemon.name;
  type.innerHTML = pokemon.types[0].type.name
  image.src = pokemon.sprites.front_default;
}

async function get_pokemon(id) {
  try {
    const response = await fetch(`${api}pokemon/${id}/`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

async function generator_pokemon() {
  try {
    const container = document.querySelector('.container');

    for (let i = 1; i < 10; i++) {
      const pokemon = await get_pokemon(i);
      const name = pokemon.name;
      const type = pokemon.types[0].type.name
      const image = pokemon.sprites.front_default;

      container.innerHTML += `<div class="container_pokemon">
    <h3 class="title_pokemon">${name}</h3>
    <div class="container_img"><img src="${image}"></div>
    <div class="description_pokemon"><span class="type_pokemon">Type: </span><span class="type_pokemon"
        id="type">${type}</span></div>
  </div>`
    }
  } catch (error) {
    console.error(error)
  }
}


generator_pokemon();