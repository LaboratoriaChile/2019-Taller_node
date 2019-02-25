#!/usr/bin/env node
const {fetchDog, fetchCat} = require('./lib/fetchAnimals');

if(require.main === module){
  const daPromise = new Promise((resolve, reject)=>{
    Promise.all([fetchDog(), fetchDog(), fetchDog()])
      .then(daResults => {
        return [daResults[2], daResults[1], daResults[0]];
      })
      .then(daResultsReverse => {
        resolve(daResultsReverse);
      })
      .catch(reject);
  });
  //============= daPromise está en estado pendiente
  daPromise
    .then(daResults => {
      console.log("Resultados de la promesa > "+daResults);
    })
    .catch(console.error);
  
}

module.exports = {fetchCat, fetchDog};