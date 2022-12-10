import React from 'react'
import Form from '../Components/Form'
import { useGlobaStates, changeBackground} from '../Components/utils/global.context'

const Contact = () => {
  const {lightTheme, data} = useGlobaStates();
  
  window.addEventListener("load",function() { changeBackground('white') });

  return (
    <>
    <main style={{backgroundColor:  lightTheme?(changeBackground('white')) : (changeBackground('gray'))}}></main>
    
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div></>
    
  )
}

export default Contact