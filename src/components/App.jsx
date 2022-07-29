import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import {Home} from 'components/Home/Home';
// import {Movies} from 'components/Movies/Movies';
// import {Navigation} from 'components/Navgation/Navigation';
// import {MovieEl} from 'components/MovieEl/MovieEl';
// import {Cast} from 'components/Cast/Cast';
// import {Reviews} from 'components/Reviews/Reviews';
// import {NoPage} from 'components/NoPage/NoPage';


const Movies = lazy(() => import('components/Movies/Movies' /* webpackChunkName: "Movies" */));
const Navigation = lazy(() => import('components/Navgation/Navigation' /* webpackChunkName: "Navigation" */));
const MovieEl = lazy(() => import('components/MovieEl/MovieEl' /* webpackChunkName: "MovieEl" */));
const Cast = lazy(() => import('components/Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('components/Reviews/Reviews' /* webpackChunkName: "Reviews" */));
const NoPage = lazy(() => import('components/NoPage/NoPage' /* webpackChunkName: "NoPage" */));




export const App = () => {

  return (
    <>
 
   <Navigation/>
   <Suspense fallback={<p>Loding...</p>}>
   <Routes>
<Route  path="/" element={<Home/>}/>
<Route  path="/movies" element={<Movies/>}/>
<Route path="/movies/:id" element={<MovieEl />}>
<Route path="cast:id" element={<Cast/>}/>
<Route path="reviews:id" element={<Reviews/>}/>
</Route>
<Route path="*" element={<NoPage />} />
   </Routes>
   </Suspense> 
   </>
  );
};
