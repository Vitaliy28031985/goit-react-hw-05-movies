
import { Routes, Route } from 'react-router-dom';
import {Home} from 'components/Home/Home';
import {Movies} from 'components/Movies/Movies';
import {Navigation} from 'components/Navgation/Navigation'

import {fetchValue} from '../service/api';

export const App = () => {


  return (
    <>
   <Navigation/>
   <Routes>
<Route  path="/" element={<Home/>}/>
<Route  path="/movies" element={<Movies/>}/>



   </Routes>
   </>
  );
};
console.log(fetchValue('car'));