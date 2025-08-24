import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../Apis/axiosInstance';


const Login=()=>{

    const[logiin, setLogiin] = useState([]);
    const navigate = useNavigate();
    const[id, setId] = useState("");
    const[password, setPassword] = useState("")


  const Logging=()=>{
    axiosInstance

    .post("http://localhost:9000/login", {

        email: `${id}`,
        password: `${password}`



    }).then((response)=>{
      setLogiin(response.data)

      const data = response.data;
      if(data.success){
        navigate(data.redirectUrl);

      }
    })



  }
  



    return(

        <>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        <input
        type='text'
        placeholder='Id'
        onChange = {(e)=> setId(e.target.value)}

        />
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
        <input
        type='text'
        placeholder='Password'
        onChange = {(e)=> setPassword(e.target.value)}

        />

         <br/><br/><br/><br/><br/><br/><br/><br/><br/>
         
          <button onClick={Logging}>Login</button>


        </>
    )
}

export default Login