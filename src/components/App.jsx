
import { Routes, Route } from 'react-router-dom';
import {Home} from 'components/Home/Home';
import {Movies} from 'components/Movies/Movies';
import {Navigation} from 'components/Navgation/Navigation'
import {MovieEl} from 'components/MovieEl/MovieEl';
import {Cast} from 'components/Cast/Cast';
import {Reviews} from 'components/Reviews/Reviews';


// import {fetchValue} from '../service/api';
import {fetchMovie} from '../service/api';
import {fetchCast} from '../service/api';

export const App = () => {


  return (
    <>
   <Navigation/>
   <Routes>
<Route  path="/" element={<Home/>}/>
<Route  path="/movies" element={<Movies/>}/>
<Route path="/movies/:id" element={<MovieEl />}>
<Route path="cast:id" element={<Cast/>}/>
<Route path="reviews:id" element={<Reviews/>}/>
</Route>



   </Routes>
   </>
  );
};
console.log(fetchCast(8859));
console.log(fetchMovie(8859));