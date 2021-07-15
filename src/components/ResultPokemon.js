import { getOnePokemon } from "../services/getPokemon";
import CreatePokemon from '../components/CreatePokemon'

async function ResultPokemon({ keyword }) {
  keyword = keyword.toLowerCase()
  try {
    let pokemon = []
    pokemon[0] = await getOnePokemon({ id: keyword });

    const view = CreatePokemon({ list: pokemon })

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
