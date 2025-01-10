import React from 'react'
import axios from 'axios'

const Home = () => {
 const handleLogin=async()=>{
    try {
      const response = await axios.get("http://localhost:5000/");
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    }
  }
  return (
    <div>

     <button onClick={()=>{handleLogin()}}>get</button>


    </div>
  )
}

export default Home