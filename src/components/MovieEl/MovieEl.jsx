import PropTypes from 'prop-types';
import { useParams, Outlet, NavLink, useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {fetchMovie} from '../../service/api';
import s from './MovieEl.module.css';


export default function MovieDetails()  {
const [movies, setMovies] = useState({});
const location = useLocation();




const {id} = useParams();

useEffect(() => {
   fetchMovie(id).then(setMovies); 
}, [id]);

const posterUrl = 'https://image.tmdb.org/t/p/w500';


const [backBack] = useState(location.state?.from ?? '/goit-react-hw-05-movies');


return (

<>
<NavLink className={s.button} to={backBack}>Go back</NavLink>

<div>
{movies.poster_path === null ? (<img className={s.img} src="https://via.placeholder.com/250x200" alt={movies.title}/>) : (<img className={s.img} src={`${posterUrl}${movies.poster_path}`} alt={movies.title} />)}

<div className={s.infoFilm}>
<h2 className={s.title}>{movies.title}</h2>
<p className={s.titleText}>Popularity: <span className={s.text}>{movies.popularity}</span></p>
<h2 className={s.titleText}>Overview</h2>
<p className={s.text}>{movies.overview}</p>
<h3 className={s.titleText}>Genres</h3>
<p className={s.text}>{movies.genres}</p>
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

MovieDetails.propTypes = {
   movie: PropTypes.objectOf(
     PropTypes.shape({
       title: PropTypes.string.isRequired,
       popularity: PropTypes.number.isRequired,
       overview: PropTypes.string.isRequired,
       genres: PropTypes.string.isRequired,
       poster_path: PropTypes.string.isRequired,
     })
   ),
 };