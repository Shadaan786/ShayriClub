import { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();


export const ContextProvider=({children})=>{

const [kId, setKId ] = useState("");


return(

    <MyContext.Provider value = {{kId, setKId}}>

        {children}


    </MyContext.Provider>
)

}
