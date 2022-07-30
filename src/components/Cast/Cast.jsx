import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchCast} from '../../service/api';
import s from './Cast.module.css';

export default function Cast() {  
const [movies, setMovies] = useState([]);
const {id} = useParams();

   useEffect(() => {
      fetchCast(id).then(setMovies); 
   }, [id]);
   const posterUrl = `https://image.tmdb.org/t/p/w200`;

   return (

<ul className={s.list}>
   {movies.map(movie => {
     return (
      <li
      key={movie.id}>
         <img src={`${posterUrl}${movie.profile_path}`} alt={movie.name}></img>
     <p>{movie.name}</p>
      <p>Character: {movie.character}</p>
     
    </li> )
   })}
</ul>

   );
}

 //Cast.module.css
