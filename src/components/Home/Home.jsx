import { useState, useEffect } from 'react';
import {fetchTrendingDay} from '../../service/api';
import {mapperMoviesTitle} from '../../utils/mapper';

export const Home = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      const renderMovies = () => {

         fetchTrendingDay().then(response => setMovies([...mapperMoviesTitle(response.results)]));
       }
      
      renderMovies();
  
   }, []);



   return (
<>
<h1>Trending Today</h1>
<ul>
{movies.map(({id, original_title}) => (
<li key={id}>{original_title}</li>
))}
</ul>
</>
   );
}

//.results