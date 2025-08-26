import axios from "axios";  
import axiosInstance from "../Apis/axiosInstance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Kalam = ()=>{

    const navigate = useNavigate();

    const[type, setType] = useState([]);
    const[content, setContent] = useState([]);


const handleKalam = ()=>{


    axios
    .post("http://localhost:9000/kalam",
        {

        type: `${type}`,
        content: `${content}`


    },
    {
        withCredentials: true
    }
)
    .then((response)=>{
        const data = response.data;

       

        if(data.success){
            navigate(data.redirectUrl)

        }
    })

}



    return (
        <>

        <h1>Welcome to kalam</h1>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <input
        type="text"
        placeholder="type"
        value = {type}
        onChange = {(e)=> setType(e.target.value)}
        />
        <br/><br/><br/><br/><br/><br/><br/><br/>    
        <input
        type="text"
        placeholder="content"
        value = {content}
        onChange = {(e)=> setContent(e.target.value)}
        />

        <br/><br/><br/>

        <button onClick={handleKalam}>Submit</button>
        </>
    )
}

export default Kalam;