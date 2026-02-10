import { useNavigate, useSearchParams, } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../Apis/axiosInstance";
import { useRef } from "react";



const CommunityNav=()=>{
// const navigate = useNavigate();
const [SearchParams] = useSearchParams();
const [result, setResult] = useState("");
const[communityId, setCommunityId] = useState("");
const[communityName, setCommunityName] = useState("");
const[uuid, setUuid] = useState("");
const ws = useRef(null);

const to = SearchParams.get("to");



const HandleNav=()=>{

 
    
 axiosInstance
 .post("/api/community/search", {

    need: "Trial12",
 })

  
    .then((Response)=>{
         
        setResult(Response.data)

        console.log(Response.data);
        setCommunityId(Response.data.communityFound[0]._id)

        console.log(Response.data.communityFound[0]._id)
        setCommunityName(Response.data.communityFound[0].name)

        console.log(Response.data.communityFound[0].name);

        setUuid(Response.data.userId[0]._id)
        console.log("member UUID:", Response.data.userId[0]._id)
        // console.log(Response.data)

    })

}

const JoiningCommunity=()=>{

     ws.current = new WebSocket("ws://localhost:8080?username=anon")

    ws.current.onopen=()=>{
        console.log("connection opened")
    }

    ws.current.onmessage = message =>{
        console.log(message.data)
    }

   


}

 const HandleJoining =()=>{

         ws.current.send(JSON.stringify({

        "type": "joining_community",
        "payload": {

            communityId: communityId,
            communityName: communityName,
            memberUuid: uuid
           
            
        }
    }))
    }


return(
  
    <>
    <h1>Hello World</h1>
    <br/><br/><br/><br/>
    {/* <h1>{result}</h1> */}
    <br/><br/><br/><br/>
    <button onClick={HandleNav}>Check</button>
    <button onClick={JoiningCommunity}>Join</button>
    <button onClick={HandleJoining}>handle</button>
    </>

)


}



export default CommunityNav