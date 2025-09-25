import { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) =>{

    const[content, setContent] = useState("");
    const[type, setType] = useState("");


    return(
        <MyContext.Provider value = {{content, setContent, type, setType}}>
            { children }
            </MyContext.Provider>
    );
};