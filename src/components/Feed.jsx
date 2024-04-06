import React from 'react'
import { useParams } from 'react-router-dom'
import Login from "./Login";
const Feed = () => {
    const {nameOfOrg} = useParams()
    // console.log(nameOfOrg)
  return (
    <>
       <Login/>
       <div className='border d-flex justify-content-center ' style={{width:'100vw',height:'80vh'}}> 
       <div className=' border text-white '><h2> {nameOfOrg} </h2></div>s
       </div>
    
    </>
 
  )
}

export default Feed