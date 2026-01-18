import { useState, useEffect, useRef } from "react";


const GlobalChat= ()=>{


    const[content, setContent] = useState("");
    const[cont, setCont] = useState([]);
    const[mess, setMess] = useState([]);
    // const[content2, setContent2] = useState("");
    // const[ws, setWs] = useState(new WebSocket(null));
    const ws = useRef(null);
    const content2 = useRef(null);
    // const ind = useRef(-1)
    const[mes, setMes] = useState([]);


    // console.log('checking')
    // let i = 0;


    useEffect(()=>{


        //   setWs(new WebSocket('ws://localhost:8080?username=anon'));

        ws.current = new WebSocket('ws://localhost:8080?username=anon')
          

        ws.current.onerror = ()=>{
            console.error("Error while connecting to the websocket connection")
        }

        ws.current.onopen = ()=>{
            console.log("connection opened")


            
        
        }

            ws.current.onmessage = message =>{
                console.log(message.data)
                // setCont(message.data)

                setCont(prev=>[...prev, message.data])
                setMes(prev=>[...prev, {

                    sender: "other",
                    data: message.data
                }])

                console.log(mes)
            
            }

            // ws.send(JSON.stringify({
            //     "type": "global_chat",
            //     "payload":{
            //         "content": content
            //     }
            // }))
        console.log(ws.current.readyState)
 
    }, [])

//     useEffect(()=>{

//                if(ws.current.readyState == 1){
//    ws.current.send(JSON.stringify({
//                 "type": "global_chat",
//                 "payload":{
//                     "content": content2
//                 }
//             }))

//         }

//     }, [content2])

    // const handle=()=>{

       
    // }

      function sender(){
        ws.current.send(JSON.stringify({
            "type": "global_chat",
            "payload":{
                
             "content": content2.current,
            }
            

        

        }))
        console.log(mes)
    }

    

    return(
        <>

        
        
        {/* <h1 className = "right-0">{content}</h1> */}
        {/* <h1>{cont}</h1> */}
        <div className ="fixed bottom-0 left-0 w-full bg-blue-800 text-white p-4">
        <input 
        className ="fixed bottom-0 left-0 w-full bg-blue-800 text-white p-4"
        type="text"
        placeholder="send message"
        onChange={(e)=> setContent(e.target.value)}
        
        
        />

        {/* {console.log(content)} */}

        <button 
         className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded" 
         onClick ={()=>{

            // handle();
            content2.current = content
            sender();
            // setContent2(content);

            
            setMess(prev=>[...prev, content]);
            setMes(prev=>[...prev, {
                sender: "me",
                data: content
            }])
            console.log(mes)
            // ind.current = ind.current + 1;
           
            {
                // console.log(mess);
            }
            
         }}> send</button>


         <br/>
        
        </div>

        {/* <h1>{mess}</h1> */}
        <div className="p-4" >

           {/* {
            mess.map((mess, i)=>(

                
                <p key = {i} className="text-right text-size-xl bottom-10 bg-blue-700 p-4"> {mess}</p>
            ))
            
            }
            

            {mess[ind.current]} */}


        </div>


        
             <div className="p-4" >

           {
            // cont.map((cont, i)=>(

                
            //     <p key = {i} className="text-right text-size-xl bottom-10 bg-green-700 p-4"> {cont}</p>
            // ))
            


            mes.map((mes, i)=>(

                <p key = {i} className=  {(mes.sender === "me")?"text-right bg-blue-700":"text-left bg-green-700"}>{mes.data}</p>
            ))
            }
            

            {/* {mess[ind.current]} */}

            


        </div>
        
        </>
    )
}


export default GlobalChat