import React from "react";
import { useGlobaStates, changeBackground } from '../Components/utils/global.context'

const Favs = () => {
  const {lightTheme} = useGlobaStates();

  return (
    <> <main style={{backgroundColor:  lightTheme?(changeBackground('white')) : (changeBackground('gray'))}}>
   
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      </div>
      </main>
    </>
  );
};

export default Favs;
