document.addEventListener("DOMContentLoaded", obtenerInformacionPokemon);

function obtenerInformacionPokemon() {
    const cantidadPokemons = 12;
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${cantidadPokemons}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemons = data.results;
            pokemons.forEach(pokemon => {
                obtenerDetallesPokemon(pokemon.url);
            });
        })
        .catch(error => console.log(error));
}

function obtenerDetallesPokemon(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarInformacionPokemon(data))
        .catch(error => console.log(error));
}

function mostrarInformacionPokemon(pokemon) {
    const nombre = pokemon.name;
    const altura = pokemon.height;
    const peso = pokemon.weight;
    const tipos = pokemon.types.map(tipo => tipo.type.name);

    const pokemonContainer = document.getElementById("pokemon-container");
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");
    pokemonCard.innerHTML = `
        <h2>${nombre}</h2>
        <p>Altura: ${altura}</p>
        <p>Peso: ${peso}</p>
        <p>Tipos: ${tipos.join(", ")}</p>
    `;

    pokemonContainer.appendChild(pokemonCard);
}