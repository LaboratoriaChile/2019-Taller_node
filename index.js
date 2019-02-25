const {fetchDog, fetchCat} = require('./lib/fetchAnimals');

console.log(fetchCat(300,300));

module.exports = {fetchCat, fetchDog};