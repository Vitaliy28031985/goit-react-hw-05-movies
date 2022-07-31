import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import {Navigation} from 'components/Navgation/Navigation';
// import {LoaderComponent} from 'components/Loader/Loader';

const Home = lazy(() => import('components/Home/Home' /* webpackChunkName: "Home" */));
const Movies = lazy(() => import('components/Movies/Movies' /* webpackChunkName: "Movies" */));
// 
const MovieEl = lazy(() => import('components/MovieEl/MovieEl' /* webpackChunkName: "MovieEl" */));
const Cast = lazy(() => import('components/Cast/Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() => import('components/Reviews/Reviews' /* webpackChunkName: "Reviews" */));
const NoPage = lazy(() => import('components/NoPage/NoPage' /* webpackChunkName: "NoPage" */));
// const LoaderComponent = lazy(() => import('components/Loader/Loader' /* webpackChunkName: "Loader" */));

<p>Loder...</p>

//<LoaderComponent/> <p>Loder...</p> 

export const App = () => {

  return (
    <>
 
<Navigation/>
<Suspense fallback={<p>Loder...</p>}>
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
