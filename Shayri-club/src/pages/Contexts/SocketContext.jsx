import { useState, useEffect, createContext, Children, useRef } from "react";

export const SocialContext = createContext();

export const SocialContextProvider=({children})=>{

    const socket = useRef(null);
    const [isOpened, setIsOpened] = useState(false)

    useEffect(()=>{


   socket.current = new WebSocket("ws://localhost:8080?username=Bob");
   console.log("Hello Checking")

   socket.current.onopen = () =>{

    console.log("connected sucessfully");
    setIsOpened(true);

   }
}, [])

const send = (data)=>{

    if(!isOpened){
        return
    }

socket.current.send(data)
}

return(
    
    <SocialContext.Provider value = {{send}}>

        {children}
    </SocialContext.Provider>
)
} 