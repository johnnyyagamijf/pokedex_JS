const getPokemonsUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

const generatePokemonsPromises = () => Array(150).fill().map((_, index) => 
    fetch(getPokemonsUrl(index + 1)).then(res => res.json()))

    const genereteHTML = pokemons => pokemons.reduce((accumulator, {id, name, types}) => {
            const elementsTypes = types.map(typeInfo => typeInfo.type.name);

            accumulator += `
                 <li class="card ${elementsTypes[0]}">
                     <img class="card-image" alt="${name}" src="https://pokeres.bastionbot.org/images/pokemon/${id}.png">
                     <h2 class="card-title">${id}. ${name}</h2>
                     <p class="card-subtitle">${elementsTypes.join(' | ')}</p>
                 </li>`
            return accumulator;
        }, '');

     const insertPokemonIntoPage = pokemons => {
        const ul = document.querySelector('[data-js="pokedex"]');
        ul.innerHTML = pokemons; 
    };

const pokemonsPromises = generatePokemonsPromises();
Promise.all(pokemonsPromises)
    .then(genereteHTML)
    .then(insertPokemonIntoPage)


