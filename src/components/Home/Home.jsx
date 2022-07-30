import { useState, useEffect } from 'react';
import { NavLink, } from 'react-router-dom';
import {fetchTrendingDay} from '../../service/api';
import {mapperMoviesTitle} from '../../utils/mapper';
import s from './Home.module.css';

export default function Home() {
   const [movies, setMovies] = useState([]);
   

   useEffect(() => {
      const renderMovies = () => {

         fetchTrendingDay().then(response => setMovies([...mapperMoviesTitle(response.results)]));
       }
      
      renderMovies();
  
   }, []);

  

   return (
<>
<h2 className={s.text}>Trending Today</h2>
<ul>
{movies.map(({id, title,}) => (
     <li
     className={s.link}
     key={id}
     >
      <NavLink to={`movies/${id}`}>{title}</NavLink ></li> 
   ))}   
</ul>
</>
   );
}

//.results