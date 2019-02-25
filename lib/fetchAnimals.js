export const fetchDog = ()=>{
  return "https://dog.ceo/api/breeds/image/random";
};

export const fetchCat = (width, height)=>{
  return `http://placekitten.com/${width}/${height}`;
}