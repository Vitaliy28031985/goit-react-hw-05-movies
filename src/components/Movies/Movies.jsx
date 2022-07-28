import {Form} from '../Form/Form';
import { useState, useEffect } from 'react';
import {fetchValue} from '../../service/api';
import {mapperMoviesTitle} from '../../utils/mapper';
import { NavLink } from 'react-router-dom';

export const Movies = () => {
const [value, setValue] = useState('');
const [movies, setMovies] = useState([]);

// const location = useLocation();
// let url = location.pathname !== '/movies' ? '/movies/' : ''; useLocation

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
<h1>Enter your request</h1>
<Form onSubmit={handleFormSubmit}/>
{movies && (
   <ul>
   {movies.map(({id, original_title,}) => (
     <li
     key={id}
     >
      <NavLink to={`${id}` }>{original_title}</NavLink ></li> 
   ))}   
   </ul>
)}

</>
   );
}