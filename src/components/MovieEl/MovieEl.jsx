import { useParams, Outlet, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchMovie} from '../../service/api';
import s from './MovieEl.module.css';

export const MovieEl = () => {
const [movies, setMovies] = useState({});

const posterUrl = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;

const {id} = useParams();

useEffect(() => {
   fetchMovie(id).then(setMovies); 
}, [id]);


const {title, popularity, overview, genres} = movies;
return (
<>
<div>

<img className={s.img} src={posterUrl} alt="" />
<div className={s.infoFilm}>
<h1 className={s.title}>{title}</h1>
<p className={s.titleText}>Popularity: <span className={s.text}>{popularity}</span></p>
<h2 className={s.titleText}>Overview</h2>
<p className={s.text}>{overview}</p>
<h3 className={s.titleText}>Genres</h3>
<p className={s.text}>{genres}</p>
</div>
<div className={s.linkConteiner}>
<NavLink className={s.link} to={`cast${id}`}>Cast /</NavLink>
<NavLink className={s.link} to={`reviews${id}`}> Reviews</NavLink>
</div>
</div>

<Outlet />
</>
);

};