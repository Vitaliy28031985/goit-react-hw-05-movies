export const  mapperMoviesTitle = (movies) => {
   return movies.map(({id, title, }) =>
   ({
      id,
      title,
   }));
   };

   // export const  mapperCast = (movies) => {
   //    return movies.map(({id, name, profile_path, character}) =>
   //    ({
   //      id,
   //      name,
   //      profile_path,
   //      character, 
   //    }));
   //    };  