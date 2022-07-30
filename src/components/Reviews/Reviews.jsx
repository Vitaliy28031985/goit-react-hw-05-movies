import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchReviews} from '../../service/api';
import s from './Reviews.module.css';

export default function Reviews() {  
   const [movies, setMovies] = useState([]);
   const {id} = useParams();
   useEffect(() => {
      fetchReviews(id).then(setMovies);
   }, [id]);
   
      return (
   <>
   {movies.length > 0 ? (
      <ul className={s.list}>
      {movies.map(movie => {
         return (
            <li
            key={movie.id}>
               <h2>Author: {movie.author}</h2>
               <p>{movie.content}</p>
           </li>
         )
      })}
   </ul>
   ) : 
   (
      <p className={s.list}>Sorry, there are no reviews</p>
    )
   }
   
   </>
      );
   }
  