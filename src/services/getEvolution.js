import { API } from './setting'
import { getOnePokemon } from './getPokemon'

async function getEvolution({ id }) {
  try {
    const responseUrl = await fetch(`${API}/pokemon-species/${id}/`);
    const dataUrl = await responseUrl.json();

    const url = dataUrl.evolution_chain.url

    const response = await fetch(url)
    const data = await response.json()

    const pokemon = await listPokemon({ listEvolution: data })

    return pokemon;
  } catch (error) {
    console.error(error);
  }
}

function listPokemon({ listEvolution }) {

  let pokemons = []

  pokemons[0] = listEvolution.chain.species.name
  if (listEvolution.chain.evolves_to[0] !== undefined) {
    pokemons[1] = listEvolution.chain.evolves_to[0].species.name
    if (listEvolution.chain.evolves_to[0].evolves_to[0] !== undefined) {
      pokemons[2] = listEvolution.chain.evolves_to[0].evolves_to[0].species.name
    }
  }
  const data = Promise.all(pokemons.map((name) => getOnePokemon({ id: name })))

  return data
}

export default getEvolution;
