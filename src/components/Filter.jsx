import axios from 'axios'
import React,{useEffect,useState} from 'react'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from "./Login";
function home(){
    const [data,setData]=useState([])
    const [records,setRecords]=useState([])
    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/users')
        axios.get('http://localhost:3000/getData')
        .then(res=>{
           setData(res.data)
           setRecords(res.data);
    })
         .catch(err=> console.log(err));
    },[])

    const Filter =(event)=>{
        setRecords(data.filter(f=>
            f.nameOfOrg.includes(event.target.value)))
    } 
    console.log(data)
    return (
<div className='p-5 bg-light'>
    <div className='bg-white shadow border'>
    <input type="text" className='form-control' onChange={Filter} placeholder="Search"/>
        <table className='table'>
            <thead>
                <tr>
                    {/* <th>Id</th> */}
                    <th>Name of Institution</th>
                    {/* <th>Email</th> */}
                    {/* <th>post</th> */}
                    {/* <th>Support</th> */}
                </tr>
            </thead>
            <tbody>
                {records.map((item,index)=>(
                    <tr key={index}>
                        <Link to={`/${item.nameOfOrg}`}>{item.nameOfOrg}</Link>
                        {/* <td>{item.name}</td>  */}
                        {/* <td>{item.email}</td> */}
                        {/* <td>{item.phone}</td>  */}
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>
</div>
    )
}
export default home