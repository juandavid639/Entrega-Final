
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from "./Routes/Detail";
import Contact from './Routes/Contact';

import {BrowserRouter as Router,Route, Routes} from "react-router-dom";  
import ContextProvider from "./Components/utils/global.context";

function App() {
  return (
    <>
    <ContextProvider>
      <Navbar titulo='prueba'/>
      
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Favs' element={<Favs/>}/>
        <Route path='/Detail' element={<Detail/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>

      <Footer/>
    </ContextProvider>  
    </>  
  );
}

export default App;
