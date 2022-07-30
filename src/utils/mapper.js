export const  mapperMoviesTitle = (movies) => {
   return movies.map(({id, title, }) =>
   ({
      id,
      title,
   }));
   };