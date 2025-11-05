import { useContext } from "react";
// import { MyContext } from "../ContextProvider";
import axiosInstance from "../Apis/axiosInstance";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";




const UrKalam = ()=>{

  const[kalam, setKalam] = useState({});

    // const {content, type} = useContext(MyContext);

     // Axios fetch

useEffect(()=>{
  

     

    axiosInstance
      .get("/api/UrKalam")
      .then((res) => {
        setKalam(res.data);


        console.log(res.data)
        // setLoading(false);
        // setTimeout(() => setShowPoetry(true), 1000);
      })
      // .catch((err) => {
      //   console.error(err);
      //   setLoading(false);
      // });

     
     }, [])

    return(
        <>

        <div>
  {Object.values(kalam).map((kalam, _id) => (
    <p key={kalam._id }>{kalam.type}:{kalam.content}</p>
  ))}
</div>

       {/* <h1>{kalam.content}</h1> */}

        

          {/* <h1>{JSON.stringify(kalam.content)}</h1> */}
        
        {/* <h1>hello {type}</h1><br/><br/><br/><br/><br/><br/>
        <h1>hello {content} </h1>
        <button onClick={() =>{setContent('lakka')}}>click me</button> */}
        {/* <button onClick={call}>hello</button> */}


        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


        <Link to = '/Profile'>
        <button>View your profile</button>
        </Link>


        
        </>

    )
}

export default UrKalam;