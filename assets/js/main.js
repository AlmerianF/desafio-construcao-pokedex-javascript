const pokemonList = document.getElementById('pokemonList')



function convertPokemonAbilitiesToString(pokemonAbilities) {
    return pokemonAbilities.map((abilities) => abilities.ability.name)
}

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`)
}

function convertPokemonTypesToString(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `${typeSlot.type.name}`)
}

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${convertPokemonTypesToString(pokemon.types)}">
    <span class="name">${pokemon.name}</span>
    <span class="number">#${pokemon.order}</span>
    <div class="detail">
        <ol class="types">
            ${convertPokemonTypesToLi(pokemon.types).join('')}
        </ol>
    </div>
    
    
    <div class="detail">

        <img src="${pokemon.sprites.other.dream_world.front_default}"
            alt="${pokemon.name}">

    </div>
    <div class="pokeInfo">


        <ol>
            <h3>About</h3>
            <li class="list1">Species <span class="list2"> ${pokemon.species.name}</span></li>
            <li class="list1">Height <span class="list2">${pokemon.height}</span></li>
            <li class="list1">Weight <span class="list2"> ${pokemon.weight}</span></li>
            <li class="list1">Abilities <span class="list2">${convertPokemonAbilitiesToString(pokemon.abilities).join()}</span></li>



        </ol>

        
    </div>

</li>
    `
}

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')



})



