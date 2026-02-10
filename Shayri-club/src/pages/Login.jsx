import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../Apis/axiosInstance';
import MagicBento from './components/LoginCard';


const Login=()=>{

    const[logiin, setLogiin] = useState([]);
    const navigate = useNavigate();
    const[id, setId] = useState("");
    const[password, setPassword] = useState("")


  const Logging=()=>{
    axiosInstance

    .post("/login", {

        email: `${id}`,
        password: `${password}`
    },
        {
        withCredentials: true
        }

      )



    .then((response)=>{
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


    

{/* <MagicBento 
  textAutoHide={true}
  enableStars
  enableSpotlight
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={false}
  clickEffect
  spotlightRadius={290}
  particleCount={12}
  glowColor="132, 0, 255"
  disableAnimations={false}
/> */}


        </>
    )
}

export default Login