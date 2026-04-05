import { useState, useEffect, createContext, Children, useRef } from "react";
import ws from '@/Apis/ws'

export const SocialContext = createContext();

export const SocialContextProvider=({children})=>{

    const socket = useRef(null);
    const [isOpened, setIsOpened] = useState(false)

    useEffect(()=>{


   socket.current = new WebSocket(`${ws}?username=Bob`);
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