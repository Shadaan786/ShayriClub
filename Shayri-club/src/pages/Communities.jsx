import { useState } from "react";
import axiosInstance from "../Apis/axiosInstance";

export const Community =()=>{

    const[dat, setDat] = useState("");
    const[name, setName] = useState("")
    const[bio, setBio] = useState("");
    const[category, setCategory] = useState("")

    const HandleCommunity=()=>{


        axiosInstance
        .post("http://localhost:9000/api/community",{
            name: name,
            category: category,
            bio: bio
        },
              {
                withCredentials: true
              }
    )
        
        .then((response)=>{
              setDat(response.data)

              console.log(response.data)
        })
    }

    return(

        
        <h1>

            <br/><br/><br/><br/><br/><br/>
            
            <input type="text"
            placeholder="Name"
            onChange={e=>setName(e.target.value)}
            />
             <br/><br/><br/><br/>
            <input type="text"
            placeholder="About"
            onChange={e=>setBio(e.target.value)}
            />
            <br/><br/><br/><br/>
            <input
             type="text"
             placeholder="Category"
             onChange={e=>setCategory(e.target.value)}
             
             
             />
             <br/><br/><br/><br/>
            <button onClick={HandleCommunity} type='submit'>Create</button>
            
            
        </h1>

        
        
        
    )

}