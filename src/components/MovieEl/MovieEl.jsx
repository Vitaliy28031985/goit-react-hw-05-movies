import { useParams, Outlet, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchMovie} from '../../service/api';

export const MovieEl = () => {
const [movies, setMovies] = useState({});

const posterUrl = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;

const {id} = useParams();

useEffect(() => {
   fetchMovie(id).then(setMovies); 
}, [id]);

// console.log(movies);
const {title, popularity, overview, genres} = movies;
return (
<>

<div>
<img src={posterUrl} alt="" />
<h1>{title}</h1>
<p>Popularity: {popularity}</p>
<h2>Overview</h2>
<p>{overview}</p>
<h3>Genres</h3>
<p>{genres}</p>
<NavLink to={`cast${id}`}>Cast /</NavLink>
<NavLink to={`reviews${id}`}> Reviews</NavLink>
</div>
<Outlet />
</>
);

};