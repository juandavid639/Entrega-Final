import React from 'react'
import Card from '../Components/Card'
import { useGlobaStates, changeBackground } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const {lightTheme, data} = useGlobaStates();

  return (

    <main style={{backgroundColor:  lightTheme?(changeBackground('white')) : (changeBackground('gray'))}}>
      <h1>Home</h1>
      <div className='card-grid'>
        {console.log(data)}
        {/* Aqui deberias renderizar las cards */}
        {data.map( doctor => {return (
          <Card name={doctor.Doctor} username={doctor.Especialidad} id={doctor.Id} foto={doctor.Foto}></Card>
        );})}
      </div>
      
    </main>
    
  )
}

export default Home