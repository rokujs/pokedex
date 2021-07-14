import getPokemon from "../services/getPokemon";
import nearScreen from "../services/nearScreen";
import CreatePokemon from '../components/CreatePokemon'

async function Home() {
  try {
    const pokemons = await getPokemon({});

    const view = CreatePokemon({ list: pokemons })
    nearScreen({ index: 0 })

    return view

  } catch (error) {
    console.error(error);
  }
}

export default Home;
