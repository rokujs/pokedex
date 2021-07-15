import getEvolution from '../services/getEvolution'
import CreatePokemon from '../components/CreatePokemon'

async function Evolution({ id }) {
  const evolutions = await getEvolution({ id })

  const pokemons = CreatePokemon({list:evolutions})
  const view = `
  <div class="evolution">
    ${pokemons}
  </div>
  `
  return view
}

export default Evolution