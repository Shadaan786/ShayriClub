import { useState } from "react";
// import { TokenContext } from "./getToken";
import { createContext } from "react";

export const TokenContext = createContext();


const TokenContextProvider = ({children})=>{
    const [fcm_token, setFcm_token] = useState("");

    return(
        <TokenContext.Provider value ={{fcm_token, setFcm_token}}>
            {children}

        </TokenContext.Provider>
    )
}


export default TokenContextProvider;