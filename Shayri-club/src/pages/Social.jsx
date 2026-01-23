import axiosInstance from "../Apis/axiosInstance";
import { useState, useEffect } from "react";
import { Card } from "./components/Card";


export const Social=()=>{

    const [kalamDat, setKalamDat] = useState([])

   

    const handle=()=>{

         axiosInstance
        .get('http://localhost:9000/api/social')

        .then((Response)=>{
            console.log(Response.data)
            setKalamDat(Response.data)
        })
        
    }


    return(
        <>
        <h1>Hey there</h1>
        <button onClick={handle}>handle</button>

        {
            kalamDat.map((kalamDat, i)=>(
                <div key={i} className="mx-60">

                    <Card kalam={kalamDat.content} userName={kalamDat.name} time = {kalamDat.createdAt} type={kalamDat.type} />
                </div>
            ))
        }
          
          {/* <Card kalam = {"Hello from props"}/>
          
          <Card /> */}

        </>
    )
}