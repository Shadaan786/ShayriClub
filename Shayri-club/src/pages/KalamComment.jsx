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



// import { useState, useEffect } from "react";
// import axiosInstance from "../Apis/axiosInstance";
// import { useSearchParams } from "react-router-dom";

// export const KalamComment = () => {
//   const [commentValue, setCommentValue] = useState("");
//   const [memberId, setMemberId] = useState("");
//   const [totalComments, setTotalComments] = useState([]);
//   const [SearchParams] = useSearchParams();
//   const [allComments, setAllComments] = useState([]);

//   const kalamId = SearchParams.get("kalamId");

//   console.log(kalamId);

//   const Handle = () => {
//     axiosInstance
//       .get(`/api/kalam/comment?kalamId=${kalamId}`, { withCredentials: true })
//       .then((response) => {
//         console.log(response.data);
//         setMemberId(response.data.mId[0]._id);
//         setTotalComments(response.data.userKalam[0].comments);
//         console.log(totalComments);
//       });
//   };

//   useEffect(() => {
//     Handle();
//   }, []);

//   const handleComment = () => {
//     axiosInstance.post(
//       `/api/kalam/comm?kalamId=${kalamId}`,
//       {
//         comment: commentValue,
//         mUid: memberId,
//       },
//       {
//         withCredentials: true,
//       }
//     );
//   };

//   console.log(totalComments.length);

//   return (
//     <div className="flex flex-col h-screen bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">

//       {/* Header */}
//       <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-zinc-950">
//         <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 text-base">
//           💬
//         </div>
//         <div>
//           <h2 className="text-sm font-medium text-zinc-100">Comments</h2>
//           <p className="text-xs text-zinc-500">
//             {totalComments.length} comment{totalComments.length !== 1 ? "s" : ""}
//           </p>
//         </div>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-zinc-900">
//         {totalComments.length === 0 && (
//           <div className="flex flex-col items-center justify-center flex-1 gap-2 text-zinc-600">
//             <span className="text-3xl">💬</span>
//             <p className="text-sm">No comments yet.</p>
//           </div>
//         )}
//         {totalComments.map((c, i) => (
//           <div
//             key={i}
//             className={`flex items-end gap-2 ${c.commentBy === memberId ? "flex-row-reverse" : ""}`}
//           >
//             {/* Avatar */}
//             <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-medium text-zinc-400 shrink-0">
//               {c.commentBy?.slice(-2).toUpperCase()}
//             </div>

//             {/* Bubble */}
//             <div
//               className={`max-w-[68%] px-3 py-2 text-sm rounded-2xl ${
//                 c.commentBy === memberId
//                   ? "bg-indigo-600 text-white rounded-br-sm"
//                   : "bg-zinc-800 text-zinc-100 border border-zinc-700 rounded-bl-sm"
//               }`}
//             >
//               {c.comment}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Composer */}
//       <div className="flex items-center gap-2 px-4 py-3 border-t border-zinc-800 bg-zinc-950">
//         <input
//           type="text"
//           className="flex-1 text-sm px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-500 outline-none focus:border-zinc-500 transition"
//           placeholder="Write a comment…"
//           value={commentValue}
//           onChange={(e) => setCommentValue(e.target.value)}
//           onKeyDown={(e) => { if (e.key === "Enter" && commentValue.trim()) handleComment(); }}
//         />
//         <button
//           onClick={handleComment}
//           disabled={!commentValue.trim()}
//           className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-500 transition shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
//         >
//           ➤
//         </button>
//       </div>
//     </div>
//   );
// };

//-------------------------------------------------------------------------------------------------------------------------->


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
      { comment: commentValue, mUid: memberId },
      { withCredentials: true }
    );
  };

  console.log(totalComments.length);
  console.log("see total comments", totalComments)

  return (
    <div className="flex flex-col h-screen bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl">

      {/* Header */}
      <div className="px-5 py-4 border-b border-[#1f1f1f]">
        <h2 className="text-[15px] font-medium text-[#f1f1f1]">Comments</h2>
        <p className="text-xs text-[#555] mt-0.5">
          {totalComments.length} comment{totalComments.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Comment List */}
      <div className="flex-1 overflow-y-auto px-5 py-3 flex flex-col">
        {totalComments.length === 0 && (
          <div className="flex flex-col items-center justify-center flex-1 gap-2 text-[#444] py-10">
            <span className="text-2xl">💬</span>
            <p className="text-sm">No comments yet.</p>
          </div>
        )}

        {totalComments.map((c, i) => {
          const isOwn = c.commentBy === memberId;
          return (
            <div key={i} className="flex gap-3 py-3.5 border-b border-[#1c1c1c] last:border-none">

              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-medium shrink-0 mt-0.5
                ${isOwn
                  ? "bg-[#1a1a2e] border border-[#2e2e4e] text-indigo-400"
                  : "bg-[#1e1e1e] border border-[#2e2e2e] text-[#888]"}`}>
                {isOwn ? "Me" : c.commentBy?.slice(-2).toUpperCase()}
              </div>

              {/* Name + Comment stacked */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[13px] font-medium ${isOwn ? "text-indigo-400" : "text-[#d1d1d1]"}`}>
                    {isOwn ? "You" : `User ${c.commentBy?.slice(-3)}`}
                  </span>
                  {isOwn && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1a1a2e] text-indigo-400 border border-[#2e2e4e]">
                      you
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#a1a1a1] leading-relaxed">{c.comment}</p>
              </div>

            </div>
          );
        })}
      </div>

      {/* Composer */}
<div className="sticky bottom-0 border-t border-[#1f1f1f] px-5 py-3.5 bg-[#0f0f0f]">
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-full bg-[#1a1a2e] border border-[#2e2e4e] flex items-center justify-center text-[11px] font-medium text-indigo-400 shrink-0">
      Me
    </div>
    <input
      type="text"
      className="flex-1 bg-[#161616] border border-[#2a2a2a] rounded-lg px-3 py-2 text-sm text-[#e1e1e1] placeholder-[#3a3a3a] outline-none focus:border-[#3a3a4e] transition"
      placeholder="Add a comment…"
      value={commentValue}
      onChange={(e) => setCommentValue(e.target.value)}
      onKeyDown={(e) => { if (e.key === "Enter" && commentValue.trim()) handleComment(); }}
    />
    <button
      onClick={handleComment}
      disabled={!commentValue.trim()}
      className="h-9 px-4 bg-[#18183a] border border-[#2e2e5e] rounded-lg text-indigo-400 text-sm flex items-center gap-1.5 hover:opacity-80 transition disabled:opacity-30 disabled:cursor-not-allowed"
    >
      Post
    </button>
  </div>
</div>

    </div>
  );
};