export const  mapperMoviesTitle = (movies) => {
   return movies.map(({id, original_title}) =>
   ({
      id,
      original_title,
   }));
   };