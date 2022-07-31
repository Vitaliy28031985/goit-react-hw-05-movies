export const  mapperMoviesTitle = (movies) => {
   return movies.map(({id, title, }) =>
   ({
      id,
      title,
   }));
   };

   export const  mapperCast = (movies) => {
      return movies.map(({id, name, profile_path, character}) =>
      ({
        id,
        name,
        profile_path,
        character, 
      }));
      };  

      export const mapperMovieEl = (movies) => {
         return movies.map(({ title, popularity, overview, genres, poster_path}) =>
         ({
           genres,
           title,
           popularity,
           overview,
           poster_path, 
         }));
         };  

         export const mapperReviews = (movies) => {
            return movies.map(({ id, author, content,}) =>
            ({
              id,
              author,
              content,
            }));
            };  