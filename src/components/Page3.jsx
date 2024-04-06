import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Login from "./Login";
import './Page3.css';

export default function Page3() {
  const [name, setName] = useState('');
  const [admin, setAdmin] = useState('');
  const [nameOfOrg, setNameOfOrg] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleAdminChange = (event) => {
    setAdmin(event.target.value);
  }

  const sendData = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/createPage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nameOfOrg, email })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Handle the response data here
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <>
    <Login/>
    <div className='main'>
     <div className='box'>
        <div className='first'>
          <h1>Create Your Organization's Page Here</h1>
        </div>
        <div className='second'>
        <form action='#'>

        <div class="input-group mb-3">
  <input type="text" class="form-control" name='nameOfOrg' onChange={(e) => setNameOfOrg(e.target.value)} placeholder="Name Of Org" aria-label="Username"/>
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" name='email' onChange={(e) => setEmail(e.target.value)}  placeholder="Email" aria-label="Server"/>
</div>


          {/* <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className='bt1' placeholder='Name of your page'/><br/> */}
          {/* <input type="text" id="admin" name="admin" value={admin} onChange={handleAdminChange} className='bt2' placeholder='Name of the admin'/><br/> */}
          {/* <input type="submit" value="Create Page" className='bt3'/>
           */}
           <button type='submit' onClick={sendData}  className='bt3'> Create Page </button>
        </form>
        </div>
     </div>
    </div>
    </>
  )
}