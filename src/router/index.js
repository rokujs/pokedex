import Header from "../components/Header";
import Form from "../components/Form";
import ResultsPokemon from '../components/ResultPokemon'

import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import ErrorPage from "../pages/ErrorPage";

import getHash from "../services/getHash";
import resolveRoutes from "../services/resolveRoutes";

let keyword = ''

const form = null || document.getElementById("form");
const header = null || document.getElementById("header");
const main = null || document.getElementById("Main");
const results = null || document.getElementById("results");
const viewPoint = null || document.getElementById('viewport')

const routes = {
  "/": Home,
  "/:id": Pokemon,
};

async function router() {
  header.innerHTML = Header();
  form.innerHTML = Form()
  results.innerHTML = null

  const dataForm = null || document.getElementById("dataForm")
  const dataPokemon = null || document.getElementById("dataPokemon")


  dataForm.onsubmit = Search
  dataPokemon.onchange = (evt) => handleChange(evt)

  const hash = getHash();
  const route = await resolveRoutes(hash);
  const render = routes[route] ? routes[route] : ErrorPage;

  console.log(route);

  main.innerHTML = await render();

  main.className = route === '/' ? 'container' : null
  viewPoint.style.display = route === '/' ? "block" : 'none'
}

export default router;

async function Search(evt) {
  evt.preventDefault()
  results.innerHTML = await ResultsPokemon({ keyword })
}

function handleChange(evt) {
  keyword = evt.target.value
}