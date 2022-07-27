import { useState, useEffect } from 'react';
import {fetchTrendingDay} from '../../service/api';

export const Home = () => {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      const renderMovies = () => {

         fetchTrendingDay().then(response => setMovies([...response.results]));
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