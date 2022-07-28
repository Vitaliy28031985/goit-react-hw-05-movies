const URL = 'https://api.themoviedb.org/3/';
const KEY = 'da16a0fca1d07603f8ad5b63eb5e61b5';

export const fetchTrendingDay = () => {
  return fetch(`${URL}trending/movie/day?api_key=${KEY}`)
   .then(response => {
      if(response.ok) {
         return response.json();
      }
   
      return Promise.reject(new Error('Nothing was found for your request'));})   
};

export const fetchValue = value => {
return fetch(`${URL}search/movie?api_key=${KEY}&query=${value}`)
.then(response => {
   if(response.ok) {
      return response.json();
   }

   return Promise.reject(new Error('Nothing was found for your request'));})   
};

export const fetchMovie = id => {
   return fetch(`${URL}movie/${id}?api_key=${KEY}`)
   .then(response => {
      if(response.ok) {
         return response.json();
      }
      
      return Promise.reject(new Error('Nothing was found for your request'));})
   
};

export const fetchCast = id => {
   return fetch(`${URL}movie/${id}/credits?api_key=${KEY}`)
   .then(response => {
      if(response.ok) {
         return response.json();
      }
      
      return Promise.reject(new Error('Nothing was found for your request'));})
};

