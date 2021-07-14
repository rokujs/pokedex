import { API } from './setting'

async function getPokemon({ indexPage = 0, limit=10 }) {
  const offset = indexPage 
  console.log(limit);
  try {
    const response = await fetch(`${API}/pokemon/?limit=${limit}&offset=${offset}/`);
    const data = await response.json();

    const pokemons = Promise.all(data.results.map(({ name }) => getOnePokemon({ id: name })))

    return pokemons;
  } catch (error) {
    console.error(error);
  }
}

export async function getOnePokemon({ id }) {
  try {
    const response = await fetch(`${API}/pokemon/${id}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getPokemon;
