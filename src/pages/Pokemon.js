import getHash from '../services/getHash'
import { getOnePokemon } from '../services/getPokemon'

const TYPES_BACKGROUND_LIGHT = {
  'electric': true,
  'normal': true,
  'flying': true,
  'bug': true,
  'fairy': true
}

async function Pokemon() {
  try {
    const id = getHash()
    const pokemon = await getOnePokemon({ id });

    const name = pokemon.name;
    const type = pokemon.types[0].type.name;
    const { "official-artwork": aux } = pokemon.sprites.other;
    const image = aux.front_default;
    // const image = pokemon.sprites.front_default
    const url = pokemon.id

    const types = viewTypes({ types: pokemon.types })
    const abilities = viewAbilities({ abilities: pokemon.abilities })
    const stats = viewStats({ stats: pokemon.stats })

    const colorFontType = Boolean(TYPES_BACKGROUND_LIGHT[type]) ? 'pokemon__description_dark' : 'pokemon__description_light';

    const view = `
    <div class="pokemon type_${type}">
      <h3 class="pokemon__title ${colorFontType}">${name} #${url}</h3>
      <div class="pokemon__image"><img src="${image}"/></div>
      <div class="pokemon__description ${colorFontType}">
        <div class="pokemon__description--type">
          <span class="type__title">Types</span>
          <ul class="type__list">${types}</ul>
        </div>
        <div class="pokemon__description--type">
          <span class="abilities__title">Abilities</span>
          <ul class="abilities__list">${abilities}</ul>
        </div>
        <div class="pokemon__description--stats">
          <span class="stats__title">Stats</span>
          <ul class="stats__list">${stats}</ul>
        </div>
      </div>
    </div>
`;

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

function viewTypes({ types }) {
  const view = types.map(type => (`
  <li>${type.type.name}</li>
  `)).join('')

  return view
}

function viewAbilities({ abilities }) {
  const view = abilities.map(({ ability }) => (`
    <li>${ability.name}</li>
  `)).join('')

  return view
}

function viewStats({ stats }) {
  const view = stats.map(({ base_stat, stat }) => (`
    <li><span>${stat.name}: </span>${base_stat}</li>
  `)).join('')

  return view
}

export default Pokemon