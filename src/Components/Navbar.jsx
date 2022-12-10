import userEvent from '@testing-library/user-event'
import React from 'react'
import {Link} from "react-router-dom";
import { useGlobaStates } from './utils/global.context';

const Navbar = ({titulo}) => {

  const {lightTheme, toggleTheme, data} = useGlobaStates();

  return (
    
    <nav>
      <h1>Bienvenido </h1>
      <Link to ={'./Home'}><p>Home</p></Link> 
      <Link to ={'./Contact'}><p>Contacto</p></Link> 
      <Link to ={'./Favs'}><p>Favs</p></Link> 
      <label class="switch">
       🌙
        <input type="checkbox" onChange={() => toggleTheme(!lightTheme)}></input>
       <span class="slider round"></span>
      </label>
    </nav>
  )
}

export default Navbar