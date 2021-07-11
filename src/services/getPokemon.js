import { API } from './setting'

async function getPokemon({ id = 1 }) {
  try {
    const response = await fetch(`${API}/pokemon/${id}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getPokemon;
