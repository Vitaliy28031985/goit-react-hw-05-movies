import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchReviews} from '../../service/api';

export const Reviews = () => {  
   const [movies, setMovies] = useState([]);
   const {id} = useParams();
   useEffect(() => {
      fetchReviews(id).then(setMovies);
   }, [id]);
   
      return (
   <>
   {movies.length < 0 ? (
      <ul>
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
      <p>Sorry, there are no reviews</p>
    )
   }
   
   </>
      );
   }