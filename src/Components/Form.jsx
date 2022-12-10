
import React, { useState } from 'react';


const Form = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    
  })
  //Aqui deberan implementar el form completo con sus validaciones

  const handleSubmit = (e) => {
    e.preventDefault()
    //validaciones
    if(user.name.length <= 3){
      alert(`Invalido el nombre ${user.name}`)
    } 
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    
    if(emailRegex.test(user.email)){
      alert('Te has registrado')
    } else {
      alert('Email invalido')
    }
    
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" onChange={(e) => setUser({...user, name: e.target.value})}/>
        <label>Email</label>
        <input type="text" onChange={(e) => setUser({...user, email: e.target.value})}/>
      
        <button>Send</button>
      </form>
      <h3>Gracias  {user.name} , te contactaremos.</h3>
      
      
    </> 
  )
};

export default Form;
