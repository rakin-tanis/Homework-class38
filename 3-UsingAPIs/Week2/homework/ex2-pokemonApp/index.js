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
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw 'network error';
  } else {
    return response.json();
  }
}

async function fetchAndPopulatePokemons() {
  if (document.body.childElementCount >= 4) {
    return;
  } else {
    const selectElement = document.body.appendChild(
      document.createElement('select')
    );

    const img = document.body.appendChild(document.createElement('img'));
    selectElement.classList.add('select-element');

    const data = await fetchData(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    data.results.forEach((element) => {
      const optionElement = document.createElement('option');
      optionElement.value = element.url;
      optionElement.textContent = element.name;
      selectElement.appendChild(optionElement);
    });
    selectElement.addEventListener(
      'input',
      async () => await fetchImage(selectElement.value, img)
    );
  }
}

async function fetchImage(url, img) {
  const data = await fetchData(url);
  img.src = data.sprites.front_default;
  console.log(img.src);
  return img;
}

async function main() {
  const buttonElement = document.body.appendChild(
    document.createElement('button')
  );
  buttonElement.textContent = 'Pokemons';
  buttonElement.type = 'button';

  try {
    buttonElement.addEventListener('click', fetchAndPopulatePokemons);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
