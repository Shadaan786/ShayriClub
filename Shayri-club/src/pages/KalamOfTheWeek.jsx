import { useState, useEffect } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import NewKalam from "./components/NewKalam";

const KalamOfTheWeek=()=>{

    const [customStyles, setCustomStyles] = useState("")
    const [response, setResponse] = useState("")
    const [dataArrived, setDataArrived] = useState(false);

    useEffect(()=>{

         axiosInstance
    .get('/api/kalamOfTheWeek')
    .then((response)=>{
        console.log("kalam_of_the_week_response", response.data);
        setResponse(response.data)
        setCustomStyles(response.data[0].Kalam.customStyles)
        setDataArrived(true)
    }).catch((error)=>{
        console.error("Error_while_fetching_kalam_of_the_week", error);
    })


    }, [])
   



    return(
        <>
        <div className="h-full w-full">
            <div>
                
        <h1 className="text-7xl">Kalam of The Week</h1>
            </div>

            <div className="flex w-full">

                <div className="items-center justify-center w-full">



       
        {dataArrived && <NewKalam key={response[0]?.Kalam._id} customStyles={customStyles} title={response[0]?.Kalam?.name} content={response[0]?.Kalam?.content} isImage={false} mUid={response[0]?.Kalam?.createdBy} kalId={response[0]?.Kalam?._id} isLiked2={false}/>
}
</div>
</div>

        </div>
        </>
    )
}

export default KalamOfTheWeek;