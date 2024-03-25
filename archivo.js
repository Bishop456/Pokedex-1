const URL = "https://pokeapi.co/api/v2/pokemon/";

const SearchInput = document.getElementById("buscar");
const PokedexContainer = document.getElementById("pokedex");

async function BuscarPokemon() {
  const BuscandoPokemon = SearchInput.value.toLowerCase();

  try {
    const response = await fetch(URL + BuscandoPokemon);
    const data = await response.json();
    PokedexContainer.innerHTML =
      `<h2>${data.name.toUpperCase()}</h2>
      <img style="height: 60px; width: 60px;" src="${data.sprites.front_default}">
      <p>Numero: ${data.id}</p>
      <p>Altura: ${data.height / 10}m</p>
      <p>Peso: ${data.weight / 10}kg</p>`;
  } catch (error) {
    console.error(error);
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    BuscarPokemon();
  }
}

SearchInput.addEventListener("keypress", handleKeyPress);
document.getElementById("boton").addEventListener("click", BuscarPokemon);

