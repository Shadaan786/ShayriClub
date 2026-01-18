import { useState, useEffect } from "react";
import axiosInstance from "../Apis/axiosInstance";

const CommunityProfile=()=>{

    const[data, setData] = useState("");
    const[name, setName] = useState("");


    useEffect(()=>{

        axiosInstance
        .get("localhost:9000/api/community/search")

        .then((Response)=>{

            setData(Response.data)
        })
    })


    return(
        <>
        <h1>Community Profile</h1>
        </>
    )
}



export default CommunityProfile;