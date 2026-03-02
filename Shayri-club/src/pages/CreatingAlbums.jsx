import { useState, useEffect } from "react";
import axiosInstance from "../Apis/axiosInstance";


export const CreatingAlbums=()=>{


    const [name, setName] = useState("")

  const handleSubmit=()=>{


      axiosInstance
    .post("/api/album",{

        name: name,

    },{
        withCredentials: true
    })

  }
  




    return(
        <>

        <br /><br />
        <input className="text-black" type="text" placeholder="Album name" onChange={(e)=>setName(e.target.value)} />

        <br /><br />
        <button onClick={handleSubmit}>submit</button>
        </>
    )
}