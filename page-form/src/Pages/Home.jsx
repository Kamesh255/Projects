import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1 style={{fontStyle:"italic",color:"black"}}>Hello users fill your details click on form button </h1>
        <button style={{backgroundColor:"#58EBCB",borderRadius:"5px", padding:"2px", width:"10%",marginTop:"70px", marginBottom:"30px"}} onClick={()=>{
           navigate(`/registration/one`);
       }}>Form</button>
    </div>
  )
}

export default Home