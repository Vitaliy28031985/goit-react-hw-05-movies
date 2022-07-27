
import { Routes, Route } from 'react-router-dom';
import {Home} from 'components/Home/Home';
import {Movies} from 'components/Movies/Movies';
import {Navigation} from 'components/Navgation/Navigation'
import {MovieEl} from 'components/MovieEl/MovieEl';


import {fetchValue} from '../service/api';
// import {fetchMovie} from '../service/api';

export const App = () => {


  return (
    <>
   <Navigation/>
   <Routes>
<Route  path="/" element={<Home/>}/>
<Route  path="/movies" element={<Movies/>}/>
<Route path="/movies/:id" element={<MovieEl />}></Route>



   </Routes>
   </>
  );
};
console.log(fetchValue('car'));
