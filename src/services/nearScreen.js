import getPokemon from '../services/getPokemon'
import CreatePokemon from '../components/CreatePokemon'

let indexPage = 0

function NearScreen({ distance = '100px', index = 0 }) {
  const options = {
    rootMargin: distance,
  }

  indexPage = index

  const observer = new IntersectionObserver(morePokemon, options)

  return observer.observe(document.getElementById('viewport'))
}

async function morePokemon() {
  const home = document.getElementById('Main')
  console.log(indexPage);

  indexPage += 10
  const pokemon = await getPokemon({ indexPage })
  const pokemons = CreatePokemon({ list: pokemon })

  home.innerHTML += pokemons
}

export default NearScreen