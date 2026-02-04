import { useState, useEffect } from "react";
import axiosInstance from "../Apis/axiosInstance"
import { useSearchParams } from "react-router-dom";


export const KalamComment=()=>{

    const [commentValue, setCommentValue] = useState("");
    const [memberId, setMemberId] = useState("");
    const [totalComments, setTotalComments] = useState([]);
    const [SearchParams] = useSearchParams();
    const [allComments, setAllComments] = useState([]);

    const kalamId = SearchParams.get("kalamId")

    console.log(kalamId)
    




    const Handle=()=>{
       
axiosInstance
.get(`/api/kalam/comment?kalamId=${kalamId}`,{withCredentials: true})

.then((response)=>{

    console.log(response.data);
    setMemberId(response.data.mId[0]._id)
    setTotalComments((response.data.userKalam[0].comments))
    console.log(totalComments)

    

})




    }


    const handleComment=()=>{

    axiosInstance
    .post(`/api/kalam/comm?kalamId=${kalamId}`,
        
        {
          comment: commentValue,
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
    <br/><br/><br/><br/>
    <div>
         {
            totalComments.map((totalComments, i)=>(
                <div key = {i} className= {(totalComments.commentBy === memberId)? "text-right": "text-left"}>{totalComments.comment}</div>
            ))
         }
    </div>
    <input
     type="text"
      className="mb-0 mt-auto text-black" 
      onChange={(e)=> setCommentValue(e.target.value)}
      
      
      />
      <button onClick={handleComment}>
                    send
      </button>
    </div>
    </>
)
}