'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
const SELECT_ID = 'select_id';
const IMG_ID = 'img_id';
const IMG_CONTAINER_ID = 'img_container_id';
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

async function fetchData(url) {
  try {
    const data = await fetch(url);
    return await data.json();
  } catch (err) {
    console.log(err);
  }
}

async function fetchAndPopulatePokemons() {
  const selectEl = document.getElementById(SELECT_ID);
  const pokemonData = await fetchData(URL);
  const pokemonList = pokemonData.results;
  pokemonList.forEach((item) => {
    const option = document.createElement('option');
    option.textContent = item.name;
    option.value = item.url;
    selectEl.appendChild(option);
  });
  await fetchImage(selectEl.value);
}

async function fetchImage(pokemonUrl) {
  const pokemonJson = await fetchData(pokemonUrl);
  populateImage({
    img: pokemonJson.sprites.front_default,
    alt: pokemonJson.name + ' image',
  });
}

async function populateImage({ img, alt }) {
  const imgContainerEl = document.getElementById(IMG_CONTAINER_ID);
  imgContainerEl.textContent = '';
  imgContainerEl.appendChild(createImageElement(img, alt));
}

function main() {
  document.body.appendChild(createButtonElement());
  document.body.appendChild(createSelectElement());
  document.body.appendChild(createImageContainer());
}

window.addEventListener('load', main);

const createButtonElement = () => {
  const buttonEl = document.createElement('button');
  buttonEl.type = 'button';
  buttonEl.textContent = 'Get Pokemon!';
  buttonEl.onclick = fetchAndPopulatePokemons;
  return buttonEl;
};

const createSelectElement = () => {
  const selectEl = document.createElement('select');
  selectEl.id = SELECT_ID;
  selectEl.onchange = async () => await fetchImage(selectEl.value);
  return selectEl;
};

const createImageContainer = () => {
  const divEl = document.createElement('div');
  divEl.id = IMG_CONTAINER_ID;
  return divEl;
};

const createImageElement = (src, alt) => {
  const imgEl = document.createElement('img');
  imgEl.id = IMG_ID;
  imgEl.alt = alt;
  imgEl.src = src;
  return imgEl;
};
