const fetchDog = ()=>{
  return "https://dog.ceo/api/breeds/image/random";
};

const fetchCat = (width, height)=>{
  return `http://placekitten.com/${width}/${height}`;
};

module.exports = {fetchDog, fetchCat};