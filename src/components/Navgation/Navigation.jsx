import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';


export const Navigation = () => {
   return (
   <nav className={s.conteiner}>
   <NavLink className={({ isActive }) =>
   `${s.list}` + (isActive ? ` ${s.carrentColor}` : '')} to='/'>Home</NavLink>
   <NavLink className={({ isActive }) =>
   `${s.list}` + (isActive ? ` ${s.carrentColor}` : '')} to='/movies'>Movies</NavLink>
  </nav>
   );
}