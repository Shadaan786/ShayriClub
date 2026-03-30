import { useState, useEffect } from "react";
import axiosInstance from "@/Apis/axiosInstance";

const AlbumsLive=()=>{

    useEffect(()=>{

        axiosInstance
        .get('/api/albumsLive')

        .then((response)=>{

            console.log(response.data)

        })

        .catch((error)=>{
            console.error("error while fetching live albums", error)
        })
    })

    return(
        <><h1>Live Albums</h1></>
    )
}

export default AlbumsLive;