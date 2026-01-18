import { useState, useEffect } from "react";
import axiosInstance from "../Apis/axiosInstance";
import { useRef } from "react";

export const CommunityChat=()=>{
const ws = useRef(null);
const[message, setMessage] = useState("")
const[messageHis, setMessageHis] = useState([]);
const[messageF, setMessageF] = useState([]);
const[message2, setMessage2] = useState([]);

useEffect(()=>{

    ws.current = new WebSocket('ws://localhost:8080?username=anon')

    ws.current.onopen =()=>{
        console.log("Connection Opened")
    }

    ws.current.onmessage= message=>{
        console.log(message.data);
        setMessageF(message.data)
    }

}, [])

const sender=()=>{

    ws.current.send(JSON.stringify({
            "type": "community_chat",
            "payload":{

                "communityName": "Hello2.0",
                "communityId": "69637afa344efe2b2d081c16",
                "memberUuid": "68ff816b785eb33c34d4d91f",
                 "content": message
            }
            

        

        }))
}


  useEffect(()=>{

    axiosInstance
    .get("http://localhost:9000/api/community/Chat?community=Hello2.0")

    .then((Response)=>{
        console.log(Response.data[0].messages)
        // console.log(Response.data[0].messages[0])
        setMessageHis(Response.data[0].messages);
       
    })
}, [])
const memId = "68ff816b785eb33c34d4d91f"
//    axiosInstance
//    .get("localhost:9000/api/community/search2")

//    .then((Response)=>{
//     console.log(Response.data)
//    })


    return(

        <>
        
        <h1>Helo</h1>
        <input
         type="text"
         onChange={e=>setMessage(e.target.value)}
         
         />
         <button onClick={()=>{


           sender();
           setMessage2(prev=>[...prev, message])

         }
           

            }>
         send
         </button>
         {/* <button onClick={chatHistory}>
            Display
         </button> */}
         <br/><br/><br/><br/>
         {/* <h1>{messageHis}</h1> */}
         <div>

            {
                messageHis.map((messageHis, i)=>(
                    <p key = {i} className = {(messageHis.sendFrom === "68ff816b785eb33c34d4d91f")?"text-right":"text-left"}>{messageHis.message}</p>
                ))
            }
         </div>
         <h1 className="text-right">{messageF}</h1>
         <h1>{message2.map((message2, i)=>(
            <p key={i} className="text-right">{message2}</p>
         ))}</h1>
        </>
     
    )
}