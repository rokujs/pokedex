const api = "https://pokeapi.co/api/v2/";

async function getPokemon(id) {
  try {
    const response = await fetch(`${api}pokemon/${id}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getPokemon;
