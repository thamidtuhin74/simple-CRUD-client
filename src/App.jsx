import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Form } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)
  const submitHandeler = (event) =>{
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    const user = {email, password};
    console.log(user);


    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res=> res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          alert('New user successfully Added');
          from.reset();
        }
      })

    
  }

  return (
    <>
        
      <h1>Simple CRUD Client</h1>
      <form onSubmit={submitHandeler}>
        <input type="email" name="email" id="email" /><br/>
        <input type="password" name="password" id="password" /><br/>
        <input type="submit" value="Add User" />
      </form>
      
    </>
  )
}

export default App
