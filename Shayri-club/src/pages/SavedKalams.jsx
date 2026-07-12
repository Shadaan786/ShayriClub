import { useState, useEffect } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import NewKalam from "./components/NewKalam";


const SavedKalams=()=>{
    const [savedKalams, setSavedKalams] = useState([])

    useEffect(()=>{

         axiosInstance
    .get('/api/savedKalams',{
        withCredentials: true
    })
    .then((response)=>{
        setSavedKalams(response.data)
        console.log("res", response.data[0].savedKalam)

    }).catch((error)=>{
        console.error("Error while fetching saved kalams", error);
    })

    }, [])
   

    return(
        <>
        <div className="h-full w-full flex flex-col">
            <div className="h-1/3 w-full border border-red-500 flex"></div>
                <div className="uk-grid flex items-center justify-center">
                {savedKalams.map((item) => (
                  <div key={item.savedKalam?._id}>
                    <NewKalam
                      title={item.savedKalam?.name}
                      content={item.savedKalam?.content}
                      type={item.savedKalam?.type}
                      imageSrc={item.savedKalam?.customStyles?.imageSrc}
                      mUid={item.savedKalam?.createdBy}
                      kalId={item.savedKalam?._id}
                      customStyles={item.savedKalam?.customStyles}
                      isSaved={true}
                    />
                     <br></br>
                  </div>
                 
                ))}
              </div>
        </div>
        </>
    )

}

export default SavedKalams