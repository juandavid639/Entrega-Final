import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer } from "react";

export const ContextGlobal = createContext(undefined);
export function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('white') });

let lista =[{id: 1, Doctor: 'Pepito Perez', Especialidad: "Oncologia", Email: "Pepitopere@gmail.com", Numero: 1800315, Foto:'https://cdn-icons-png.flaticon.com/512/1085/1085413.png' },
{id: 2, Doctor: 'Patricia', Especialidad: "Pediatria", Email: "PatriciaP@gmail.com", Numero: 184806, Foto:'https://cdn-icons-png.flaticon.com/512/1085/1085413.png'},
{id: 3, Doctor: 'Juanito', Especialidad: "Ortopedia", Email: "ortopediaJuanito@gmail.com", Numero: 515430, Foto:'https://cdn-icons-png.flaticon.com/512/1085/1085413.png'}];

const initialFavState = []

const favsReducer = (state, action) => {
  switch(action.type){
      case 'ADD_FAV':
          return [...state, action.payload]
  }
}

export const ContextProvider = ({ children }) => {
const [data, setData ] = useState(lista);
const [favs, setFavs] = useState([])
const [lightTheme, toggleTheme] = useState(true);
const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialFavState, initFav)

// const [state, dispatch] = useReducer(reducer, initialState)
// useEffect(() => {axios(data).then(res=>setData(res.data))},[])
function initFav(initialFavState) {
        return localStorage.getItem("favs")
          ? JSON.parse(localStorage.getItem("favs"))
          : initialFavState;
      }
    

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(stateFavs))
    }, [stateFavs])


  return (
    
  <ContextGlobal.Provider value={{lightTheme, toggleTheme, data, favs, setFavs}} >
            {children}
        </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useGlobaStates = () =>{
  return useContext(ContextGlobal)
}

