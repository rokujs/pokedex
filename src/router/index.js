import Header from "../components/Header";
import Form from "../components/Form";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import ErrorPage from "../pages/ErrorPage";

import getHash from "../services/getHash";
import resolveRoutes from "../services/resolveRoutes";

let keyword = ''

const routes = {
  "/": Home,
  "/:id": Pokemon,
};

async function router() {
  const form = null || document.getElementById("form");
  const header = null || document.getElementById("header");
  const main = null || document.getElementById("Main");

  header.innerHTML = Header();
  form.innerHTML = Form()

  const dataForm = null || document.getElementById("dataForm")
  const dataPokemon = null || document.getElementById("dataPokemon")

  dataForm.onsubmit = Search
  dataPokemon.onchange = (evt) => handleChange(evt)

  const hash = getHash();
  const route = await resolveRoutes(hash);
  const render = routes[route] ? routes[route] : ErrorPage;

  main.innerHTML += await render();
}

export default router;

function Search(evt) {
  evt.preventDefault()
  console.log(keyword);
}

function handleChange(evt) {
  keyword = evt.target.value
}