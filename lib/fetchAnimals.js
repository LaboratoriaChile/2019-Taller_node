const fetch = require('node-fetch');

//Función asíncrona que retorna una promesa
const fetchDog = ()=>{
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(daJson => {
      console.log(daJson);
      return daJson.message;
    })
    .catch(error => console.error(error));
};

const fetchCat = (width, height)=>{
  return `http://placekitten.com/${width}/${height}`;
};

module.exports = {fetchDog, fetchCat};