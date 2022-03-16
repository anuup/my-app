import React,{useState} from 'react'
import './User.css'
function user() {
  const [data, setData] = useState([])

  const fetchUsers=async()=>{
    
const response=await axios.get(" ")
setData(response.data)

  }
  return (
    <div className='user'>
I AM A USER
<div>

  <button onClick={fetchUsers}>get users</button>
</div>


    </div>
  )
}

export default user
    