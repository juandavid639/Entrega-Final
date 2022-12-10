import React from "react";
import { useEffect } from "react";
import { useGlobaStates } from "./utils/global.context";

const Card = ({ name, username, id, foto }) => {
const {lightTheme, data, favs, setFavs} = useGlobaStates();
  const addFav = (name)=>{
    setFavs( [...favs, name])
    localStorage.setItem('favs',favs)
    // Se guardan los datos con unas ',,,' esto ocasiona que el programa no renderice, limpiar el storage en caso de algo.
  }
 

  return (
    <div className="card">
      {console.log()}
  
        <div>{name}</div>
        <div>{username}</div>
        <div>{id}</div>
        <img src={foto} width="150" height="150" padding='5px'></img>
        <button onClick={()=>addFav()} className="favButton">Add fav ⭐</button>
    </div>
  );
};

export default Card;
