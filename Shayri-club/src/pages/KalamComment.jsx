//------------------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// import { useState, useEffect } from "react";
// import axiosInstance from "../Apis/axiosInstance"
// import { useSearchParams } from "react-router-dom";


// export const KalamComment=()=>{

//     const [commentValue, setCommentValue] = useState("");
//     const [memberId, setMemberId] = useState("");
//     const [totalComments, setTotalComments] = useState([]);
//     const [SearchParams] = useSearchParams();
//     const [allComments, setAllComments] = useState([]);

//     const kalamId = SearchParams.get("kalamId")

//     console.log(kalamId)
    




//     const Handle=()=>{
       
// axiosInstance
// .get(`/api/kalam/comment?kalamId=${kalamId}`,{withCredentials: true})

// .then((response)=>{

//     console.log(response.data);
//     setMemberId(response.data.mId[0]._id)
//     setTotalComments((response.data.userKalam[0].comments))
//     console.log(totalComments)

    

// })




//     }


//     const handleComment=()=>{

//     axiosInstance
//     .post(`/api/kalam/comm?kalamId=${kalamId}`,
        
//         {
//           comment: commentValue,
//           mUid: memberId

//         },
//         {
//             withCredentials: true
//         }


//     )


    


// }

// console.log(totalComments.length);

// return(
//     <>
//     <div className="min-w-fit h-screen flex flex-col">
//     <h1>Comment Section</h1>
//     <button onClick={Handle}> handle</button>
//     <br/><br/><br/><br/>
//     <div>
//          {
//             totalComments.map((totalComments, i)=>(
//                 <div key = {i} className= {(totalComments.commentBy === memberId)? "text-right": "text-left"}>{totalComments.comment}</div>
//             ))
//          }
//     </div>
//     <input
//      type="text"
//       className="mb-0 mt-auto text-black" 
//       onChange={(e)=> setCommentValue(e.target.value)}
      
      
//       />
//       <button onClick={handleComment}>
//                     send
//       </button>
//     </div>
//     </>
// )
// }


//--------------------------------------------------------------------------------------------------------------------------------->



import { useState, useEffect } from "react";
import axiosInstance from "../Apis/axiosInstance";
import { useSearchParams } from "react-router-dom";

export const KalamComment = () => {
  const [commentValue, setCommentValue] = useState("");
  const [memberId, setMemberId] = useState("");
  const [totalComments, setTotalComments] = useState([]);
  const [SearchParams] = useSearchParams();
  const [allComments, setAllComments] = useState([]);

  const kalamId = SearchParams.get("kalamId");

  console.log(kalamId);

  const Handle = () => {
    axiosInstance
      .get(`/api/kalam/comment?kalamId=${kalamId}`, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setMemberId(response.data.mId[0]._id);
        setTotalComments(response.data.userKalam[0].comments);
        console.log(totalComments);
      });
  };

  useEffect(() => {
    Handle();
  }, []);

  const handleComment = () => {
    axiosInstance.post(
      `/api/kalam/comm?kalamId=${kalamId}`,
      {
        comment: commentValue,
        mUid: memberId,
      },
      {
        withCredentials: true,
      }
    );
  };

  console.log(totalComments.length);

  return (
    <div className="flex flex-col h-screen bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-zinc-950">
        <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 text-base">
          💬
        </div>
        <div>
          <h2 className="text-sm font-medium text-zinc-100">Comments</h2>
          <p className="text-xs text-zinc-500">
            {totalComments.length} comment{totalComments.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-zinc-900">
        {totalComments.length === 0 && (
          <div className="flex flex-col items-center justify-center flex-1 gap-2 text-zinc-600">
            <span className="text-3xl">💬</span>
            <p className="text-sm">No comments yet.</p>
          </div>
        )}
        {totalComments.map((c, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${c.commentBy === memberId ? "flex-row-reverse" : ""}`}
          >
            {/* Avatar */}
            <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-400 shrink-0">
              {c.commentBy?.slice(-2).toUpperCase()}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[68%] px-3 py-2 text-sm rounded-2xl ${
                c.commentBy === memberId
                  ? "bg-indigo-600 text-white rounded-br-sm"
                  : "bg-zinc-800 text-zinc-100 border border-zinc-700 rounded-bl-sm"
              }`}
            >
              {c.comment}
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div className="flex items-center gap-2 px-4 py-3 border-t border-zinc-800 bg-zinc-950">
        <input
          type="text"
          className="flex-1 text-sm px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 outline-none focus:border-zinc-500 transition"
          placeholder="Write a comment…"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && commentValue.trim()) handleComment(); }}
        />
        <button
          onClick={handleComment}
          disabled={!commentValue.trim()}
          className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ➤
        </button>
      </div>
    </div>
  );
};