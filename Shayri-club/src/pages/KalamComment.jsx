import { useState, useEffect } from "react";
import axiosInstance from "../Apis/axiosInstance"
import { useSearchParams } from "react-router-dom";


export const KalamComment=()=>{

    const [commentValue, setCommentValue] = useState("");
    const [memberId, setMemberId] = useState("");
    const [totalComments, setTotalComments] = useState("");
    const [SearchParams] = useSearchParams();

    const kalamId = SearchParams.get("kalamId")

    console.log(kalamId)
    




    const Handle=()=>{
       
axiosInstance
.get(`http://localhost:9000/api/kalam/comment`,{withCredentials: true})

.then((response)=>{

    console.log(response.data);
    setMemberId(response.data.mId[0]._id)
    setTotalComments((response.data.userKalam[0].comments))

    

})




    }


    const handleComment=()=>{

    axiosInstance
    .post(`http://localhost:9000/api/kalam/comm?kalamId=${kalamId}`,
        
        {
          comment: "hello checking comment feature3",
          mUid: memberId

        },
        {
            withCredentials: true
        }


    )

    
    


}

console.log(totalComments.length);

return(
    <>
    <div className="min-w-fit h-screen flex flex-col">
    <h1>Comment Section</h1>
    <button onClick={Handle}> handle</button>
    <input
     type="text"
      className="mb-0 mt-auto text-black" 
      onChange={e=> setCommentValue(e.target.value)}
      
      
      />
      <button onClick={handleComment}>
                    send
      </button>
    </div>
    </>
)
}