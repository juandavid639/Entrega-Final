import React from 'react'
import { useGlobaStates, changeBackground } from '../Components/utils/global.context'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Detail = (props) => {
 
  const {lightTheme, data} = useGlobaStates([]);
  const [user, setUser ] = useState([])
  
    const url = `/http://localhost:3000/Home/doctor/${data.Id}`
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))

        axios.get(url)
        .then(res => setUser(res.data))
    }, [url])

  return (
    <>
      <main style={{backgroundColor:  lightTheme?(changeBackground('white')) : (changeBackground('gray'))}}>

      <h1>Detail Dentist id </h1>
      <h1> </h1>
    
      </main>
    </>
  )
}

export default Detail