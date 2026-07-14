import { createContext } from "react";
import { useState } from "react";


export const MyContext = createContext();
export const ContextProvider = ({children})=>{

  const [streak, setStreak] = useState("");
  const [streak2, setStreak2] = useState("");
  const [counter, setCounter] = useState(0);
  const [isModalOpened, setIsModalOpened] = useState(false);

  return(
    <MyContext.Provider value = {{streak, setStreak, streak2, setStreak2, isModalOpened, setIsModalOpened}}>
    
    { children }

    </MyContext.Provider>
  )


}
