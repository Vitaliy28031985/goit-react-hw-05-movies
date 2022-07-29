import {Form} from '../Form/Form';
import { useState, useEffect } from 'react';
import {fetchValue} from '../../service/api';
import {mapperMoviesTitle} from '../../utils/mapper';
import { NavLink, useLocation } from 'react-router-dom';
import s from './Movies.module.css';

export const Movies = () => {
const [value, setValue] = useState('');
const [movies, setMovies] = useState([]);


const location = useLocation();
let url = location.pathname !== '/movies' ? '/movies/' : '';




useEffect(() => {
   if(value !== '') {
      renderMovies(value); 
   }
}, [value]);


const renderMovies = (value) => {
   fetchValue(value).then(response => setMovies(
 [...mapperMoviesTitle(response.results)]
   )) 
};

const handleFormSubmit = newValue => {
   if(newValue === value) {
      return;
   }
   setValue(newValue);
   setMovies([]);

}

   return (
      <>
<h2 className={s.text}>Enter your request</h2>
<Form onSubmit={handleFormSubmit}/>
{movies && (
   <ul>
   {movies.map(({id, original_title,}) => (
     <li
     className={s.link}
     key={id}
     >
      <NavLink to={`${url}${id}`}>{original_title}</NavLink ></li> 
   ))}   
   </ul>
)}

</>
   );
}