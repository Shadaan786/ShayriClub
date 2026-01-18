import { useState } from "react";
import axiosInstance from "../Apis/axiosInstance";
import Login from "../pages/Login"
import { useNavigate } from "react-router-dom";




const DispCommunities =()=>{

    const[dat, setDat] = useState("");
    const Navigate = useNavigate();
    // const[length, setLength] = useState("");


    const HandleDisp =()=>{

        axiosInstance
        .get("http://localhost:9000/api/communityDisp")

        .then((Response)=>{
            // console.log(Response.data[0].name)
            // console.log(Response.data.length)
            // //  setLength(Response.data.length)
            //  console.log(Response.data)
            setDat(Response.data)
            console.log(Response.data)
                
            
            
        })

            // length = Response.data.length;

            
    }


    return(
        <>


        <h1>Search for Communities</h1>
  
        <h1>
            <button onClick={HandleDisp}>Search</button>
            </h1>
            <br/><br/><br/><br/>

            {Object.keys(dat).map(key=>(
                
                <p key = {dat[key]._id}>
                    
                    <button onClick={()=>Navigate(`/CommunityNav?to=${dat[key].name}`)}>
                    {key}:
                    
                    
                    <br/><br/>
                    
                     {JSON.stringify(dat[key].bio)}
                    <br/>
                     {JSON.stringify(dat[key].category)}
                     </button>
                </p>      
            
            ))}

            {/* <h1>{dat}</h1> */}
        </>
    )
}

export default DispCommunities