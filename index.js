#!/usr/bin/env node

const {fetchDog, fetchCat} = require('./lib/fetchAnimals');

if(require.main === module){
  console.log(fetchCat(300,300));
}

module.exports = {fetchCat, fetchDog};