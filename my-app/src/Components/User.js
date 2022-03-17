import React,{useState} from 'react'
import './User.css'
import axios from 'axios'

function User() {
  
  
 
 const[data,setData]=useState([])

  const fetchUsers=async()=>{
    
const response=await axios.get("https://jsonplaceholder.typicode.com/users ")
setData(response.data)

  }
  return (
    <div className='user'>
<h1>hello users</h1>
<div>

  <button onClick={fetchUsers}className="btn">get users</button>

  {data.map(

user=>(
<>

  

<ul>{user.name}</ul>


</>



)



  )
  
  }
</div>


    </div>
  )
}

export default User
    