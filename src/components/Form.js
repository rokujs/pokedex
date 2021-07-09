function Form() {
  const view = `
  <form id="dataForm" class="searched">
        <input
          id="dataPokemon"
          type="text"
          name="name"
          class="searched__input"
          placeholder="Search a pokemon for name or id"
        />
        <button class="searched__button" type="submit" >Search</button>
      </form>
  `

  return view
}

export default Form