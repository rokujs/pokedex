class CardPokemon extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const namePokemon = this.getAttribute("name");
    const imagePokemon = this.getAttribute("image");
    const typePokemon = this.getAttribute("type");

    this.root.innerHTML += `
    <div class="container_pokemon">
      <h3 class="title_pokemon">${namePokemon}</h3>
      <div class="container_img"><img src="${imagePokemon}"></div>
      <div class="description_pokemon"><span class="type_pokemon">Type: </span><span class="type_pokemon"
          id="type">${typePokemon}</span></div>
      </div>
    `;
  }
}

window.customElements.define("card-pokemon", CardPokemon);
