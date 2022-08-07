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

  
         export const mapperReviews = (movies) => {
            return movies.map(({ id, author, content,}) =>
            ({
              id,
              author,
              content,
            }));
            };  