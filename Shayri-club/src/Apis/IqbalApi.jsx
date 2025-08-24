import {useState, useEffect} from "react";
import axios from "axios";
import axiosInstance from "./axiosInstance";

const IqbalApi = () =>{

  const[shayri, setShayri] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;


  useEffect(()=>{
    axiosInstance.get("http://localhost:9000/api/sher/Allama_Iqbal")
    .then(response => {
      setShayri(response.data);
      setLoading(false);
    })
    .catch(err=>{
      setError(err.message);
      setLoading(false);
    });
  }, []);
  
  if(loading) return<p>Loading...</p>;

  const i = Math.floor(Math.random()*shayri.length);

  return(
    <div className="text-red">
      <h1 className="text-5xl text-black">IQBAL</h1>
      <ul className="text-">
      
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <li className="text-red-500 text-6xl">
    {shayri[i].text}
  </li>
             
          
            
        
      </ul>

      <br/><br/><br/><br/><br/>

      <button onClick={()=>window.location.reload()}>Read More</button>
      </div>
      


  )

}


export default IqbalApi;

