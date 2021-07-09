class CardPokemon extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const name = this.getAttribute("name");
    const image = this.getAttribute("image");
    const type = this.getAttribute("type");

    this.root.innerHTML += `
    <div class="container_pokemon type_${type}">
        <h3 class="title_pokemon">${name}</h3>
        <div class="container_img">
          <img src="${image}">
        </div>
        <div class="description_pokemon">
        <span class="type_pokemon"><b>Type: </b></span><span class="type_pokemon" id="type">${type}
        </span>
        </div>
      </div>
    `;
  }
}

window.customElements.define("card-pokemon", CardPokemon);
