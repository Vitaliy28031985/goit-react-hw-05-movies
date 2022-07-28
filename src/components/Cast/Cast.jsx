import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchCast} from '../../service/api';

export const Cast = () => {  
const [movies, setMovies] = useState([]);
const {id} = useParams();

   // useEffect(() => {
   //    fetchCast(id).then(response => setMovies(
   //       [...response.genres])) 
   // }, [id]);

   const {character} = movies

   return (
<>
<p>{id}</p>
<p>Cast</p>
</>
   );
}