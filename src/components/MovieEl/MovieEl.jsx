import { useParams, Outlet, NavLink, useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchMovie} from '../../service/api';
import s from './MovieEl.module.css';

export const MovieEl = () => {
const [movies, setMovies] = useState({});
const location = useLocation();
const [backPath] = useState(location.state?.from ?? '/');

const posterUrl = `https://image.tmdb.org/t/p/w500${movies.poster_path}`;

const {id} = useParams();

useEffect(() => {
   fetchMovie(id).then(setMovies); 
}, [id]);


const {title, popularity, overview, genres} = movies;
return (
<>
<div>
<NavLink className={s.button} to={backPath}>Go back</NavLink>
{movies.poster_path === null ? (<img className={s.img} src="https://via.placeholder.com/250x200" alt={title}/>) : (<img className={s.img} src={posterUrl} alt={title} />)}

<div className={s.infoFilm}>
<h2 className={s.title}>{title}</h2>
<p className={s.titleText}>Popularity: <span className={s.text}>{popularity}</span></p>
<h2 className={s.titleText}>Overview</h2>
<p className={s.text}>{overview}</p>
<h3 className={s.titleText}>Genres</h3>
<p className={s.text}>{genres}</p>
</div>
<div className={s.linkConteiner}>
   <ul>
<p className={s.titleLink}>Additional information</p>
<li><NavLink className={s.link} to={`cast${id}`}>Cast</NavLink></li>
<li><NavLink className={s.link} to={`reviews${id}`}> Reviews</NavLink></li>
</ul>
</div>
</div>

<Outlet />
</>
);

};