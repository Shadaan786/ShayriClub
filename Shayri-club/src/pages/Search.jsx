import axiosInstance from "../Apis/axiosInstance";
import { useState } from "react";


const Search=()=>{

    const[dat, setDat] = useState("");
    const[name2, setName2] = useState("");
    const[search, setSearch] = useState("");
    const[namef, setNamef] = useState("");
    


    const handleCommunity = ()=>{


 
   axiosInstance

   .post("http://localhost:9000/api/username",{
        
    name: search

   })
   .then(response=>{
    // console.log(response.data[0])

     let an = response.data
    let le = an.length
        setDat(response.data)
    for(let i=0; i< le; i++){

        setNamef(response.data[i].name)
    }
    let anum = response.data
   })
   }
//    console.log(dat.name)
   

//    let le = dat.length;

//     for(i=0; i<= le; i++){

//         console.log(dat[i])
//     }


    return(

        <>
        <h1>Search Users</h1><br/><br/><br/><br/>
        <h1>{namef}</h1><br/><br/><br/><br/>
        {/* <h3>{dat}</h3> */}
        <input
        type="text"
        placeholder="username"
        onChange={(e)=> setSearch(e.target.value)}
        />
        <button onClick={handleCommunity}>search</button>
        </>
    )
}


export default Search;