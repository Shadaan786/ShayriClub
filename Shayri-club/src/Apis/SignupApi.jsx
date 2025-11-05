import {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";
// import { createContext } from "react";
// import { useContext } from "react";



// export const MyContext = createContext();
// export const ContextProvider = ({children})=>{
    
//     const [name, setName] = useState("");

//     return(
//         <MyContext.Provider value = {name} >
//             { children }
//         </MyContext.Provider>
//     )


// }

const SignupApi = ()=>{

    const navigate = useNavigate();
    const[signup, setSignup] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

const handleUserSignup=()=>{
        axiosInstance
        .post("/signup", {

            name: `${name}`,
            email: `${userID}`,
            password: `${password}`
        })
        .then((response)=>{
            setSignup(response.data);
            setLoading(false);

                 const data = response.data
    if(data.success){
            navigate(data.redirectUrl);
    }else{
        alert(data.message)
    }

        })
        .catch((err)=>{
            setError(err.messsage);
            setLoading(false);
        });

   
    }

    const [name, setName] = useState("");
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");

    
    return(


<>
<br/><br/><br/>
<input 
type= "text"
placeholder="name"
value = {name}
onChange = {(e)=> setName(e.target.value)}
/>
<br/><br/><br/>
<input 
type= "text"
placeholder="userID"
value = {userID}
onChange = {(e)=> setUserID(e.target.value)}
/>
<br/><br/><br/>
<input 
type= "text"
placeholder="password"
value = {password}
onChange = {(e)=> setPassword(e.target.value)}
/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h1 className="text-4xl bg-color-red">
<button  onClick={handleUserSignup}>Signup</button>
</h1>



</>

    )
}

export default SignupApi;