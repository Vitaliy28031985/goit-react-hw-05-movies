import {Form} from '../Form/Form';
import { useState, useEffect } from 'react';
import {fetchValue} from '../../service/api';
import {mapperMoviesTitle} from '../../utils/mapper';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import s from './Movies.module.css';

export default function Movies() {
const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('query') ?? '';
const [movies, setMovies] = useState([]);


const location = useLocation();
let url = location.pathname !== '/movies' ? '/movies/' : '';

useEffect(() => {
   if(query !== '') {
      renderMovies(query); 
   }
}, [query]);


const renderMovies = (query) => {
   fetchValue(query).then(response => setMovies(
 [...mapperMoviesTitle(response.results)]
   )) 
};

const handleFormSubmit = query => {
   setSearchParams({ query });
}

// const handleFormSubmit = newValue => {
//    if(newValue === value) {
//       return;
//    }
//    setValue(newValue);
//    setMovies([]);

// }

   return (
      <>

<h2 className={s.text}>Enter your request</h2>
<Form onSubmit={handleFormSubmit}/>
{movies.length > 0 && (
   <ul>
   {movies.map(({id, title,}) => (
     <li
     className={s.link}
     key={id}
     >
      <NavLink to={`${url}${id}`} state={{ from: location}}>{title}</NavLink ></li> 
   ))}   
   </ul>
)}

</>
   );
}