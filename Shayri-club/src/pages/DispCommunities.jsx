import { useEffect, useState } from "react";
import axiosInstance from "../Apis/axiosInstance";
import Login from "../pages/Login"
import { useNavigate } from "react-router-dom";
import { CommunityCard } from "./components/CommunityCard";
import { Link } from "react-router-dom";




const DispCommunities =()=>{

    const[dat, setDat] = useState([]);
    const Navigate = useNavigate();
    // const[length, setLength] = useState("");
    // const communityName;
    // const bio;
    // const category;


    useEffect(()=>{

         axiosInstance
        .get("/api/communityDisp")

        .then((Response)=>{
            // console.log(Response.data[0].name)
            // console.log(Response.data.length)
            // //  setLength(Response.data.length)
            //  console.log(Response.data)
            setDat(Response.data)
            console.log(Response.data)
                
            
            
        })


    }, [])


    // const HandleDisp =()=>{

       
    //         // length = Response.data.length;

            
    // }


    return(
        <>


        <h1>Search for Communities</h1>
  
        <h1>
            {/* <button onClick={HandleDisp}>Search</button> */}
            </h1>
            <br/><br/><br/><br/>

            {/* {Object.keys(dat).map(key=>(
                
                <p key = {dat[key]._id}>
                    
                    <button onClick={()=>Navigate(`/CommunityNav?to=${dat[key].name}`)}>
                    {key}:
                    
                    
                    <br/><br/>
                    
                     {JSON.stringify(dat[key].bio)}
                    <br/>
                     {JSON.stringify(dat[key].category)}
                     </button>
                </p>      
            
            ))} */}


                       

                        <div className="p-6 mx-60">

            {

                //  dat.map((dat, i)=>(

                //     <div key={i}>

                //          <button onClick={()=>Navigate(`/CommunityNav?to=${dat.name}`)}>
                        
                //         {dat.name}<br/>
                    
                    
                    
                //     <h1>{dat.bio}</h1>
                //     <h1>{dat.category}</h1>

                //     </button>

                //      <br/><br/>
                    
                //     </div>


                   
                    
                   

                //  ))

                
                    dat.map((dat)=>(

                    //    <button onClick={()=>Navigate(`/CommunityNav?to=${dat.name}`)}>

                     
                    <Link to={`/CommunityNav?to=${dat.name}`}>


                              
                              
           
                    
                        <CommunityCard

                        key={dat._id}
                        communityName={dat.name}
                        bio={dat.bio}
                        category={dat.category}
                        
                        
                        
                        
                        
                        
                        
                        />

                        <br/>

                        </Link>
                            // </button>

                          


                        
                    ))

                     
            }

             </div>

           

            {/* <h1>{dat}</h1> */}
        </>
    )
}

export default DispCommunities