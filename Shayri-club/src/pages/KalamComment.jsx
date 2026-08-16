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
import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../Apis/axiosInstance";

/**
 * KalamComment — comment thread for a post or a kalam.
 * Self-contained styling so it can drop into any panel (the PostCard inline-expand /
 * bottom-sheet panel, or anywhere else) without depending on an ancestor's styles.
 *
 * API calls are unchanged from the original: same endpoints, same query params,
 * same request bodies. What changed is control flow (hooks are now called
 * unconditionally) and which variables feed those calls (postId/kalamId come from
 * props, matching what the GET request already did, instead of from the URL).
 */

const styles = `
.cs-kc-root, .cs-kc-root *, .cs-kc-root *::before, .cs-kc-root *::after {
  box-sizing: border-box;
}
.cs-kc-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
  font-family: 'DM Sans', sans-serif;
}

/* Header — title + count, with the same thin gold rule the rest of the app
   uses to separate sections (echoes .cs-ornament-line without the diamonds). */
.cs-kc-header {
  padding: 16px 20px 14px;
  flex-shrink: 0;
}
.cs-kc-header-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 12px;
}
.cs-kc-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.01em;
  color: #e3e2e7;
  margin: 0;
}
.cs-kc-subtitle {
  font-size: 11px;
  color: rgba(208, 197, 175, 0.55);
  letter-spacing: 0.02em;
}
.cs-kc-header-rule {
  height: 1px;
  background: linear-gradient(to right, rgba(212,175,55,0.35), transparent);
}

.cs-kc-list {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding: 2px 20px;
  display: flex;
  flex-direction: column;
}
/* Thin gold scrollbar instead of the default browser chrome, to match .cs-root */
.cs-kc-list::-webkit-scrollbar { width: 4px; }
.cs-kc-list::-webkit-scrollbar-track { background: transparent; }
.cs-kc-list::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.2); border-radius: 4px; }
.cs-kc-list::-webkit-scrollbar-thumb:hover { background: rgba(212,175,55,0.5); }

.cs-kc-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 10px;
  text-align: center;
  padding: 36px 16px;
}
.cs-kc-state-icon {
  color: rgba(212, 175, 55, 0.45);
}
.cs-kc-state-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-style: italic;
  font-size: 14px;
  color: rgba(208, 197, 175, 0.65);
  margin: 0;
}
.cs-kc-state-sub {
  font-size: 12px;
  color: rgba(208, 197, 175, 0.35);
  margin: 0;
}
@keyframes cs-kc-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}
.cs-kc-loading-dots {
  display: flex;
  gap: 5px;
}
.cs-kc-loading-dots span {
  width: 5px;
  height: 5px;
  border-radius: 9999px;
  background: #d4af37;
  animation: cs-kc-pulse 1.1s ease-in-out infinite;
}
.cs-kc-loading-dots span:nth-child(2) { animation-delay: 0.15s; }
.cs-kc-loading-dots span:nth-child(3) { animation-delay: 0.3s; }

.cs-kc-comment {
  display: flex;
  gap: 12px;
  padding: 14px 8px;
  margin: 0 -8px;
  border-radius: 10px;
  transition: background-color 0.15s ease;
}
.cs-kc-comment:hover {
  background: rgba(255, 255, 255, 0.02);
}
.cs-kc-comment + .cs-kc-comment {
  border-top: 1px solid rgba(212, 175, 55, 0.08);
}
.cs-kc-avatar {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  flex-shrink: 0;
  background: rgba(41, 42, 46, 0.7);
  border: 1px solid rgba(212, 175, 55, 0.2);
  color: rgba(208, 197, 175, 0.75);
}
.cs-kc-avatar.own {
  background: rgba(212, 175, 55, 0.14);
  border-color: rgba(212, 175, 55, 0.5);
  color: #f2ca50;
  box-shadow: 0 0 0 1px rgba(212, 175, 55, 0.08);
}
.cs-kc-comment-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
  padding-top: 2px;
}
.cs-kc-comment-meta {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.cs-kc-comment-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  font-size: 13px;
  color: #e3e2e7;
  letter-spacing: 0.01em;
}
.cs-kc-comment-name.own {
  color: #d4af37;
}
.cs-kc-comment-time {
  font-size: 11px;
  color: rgba(208, 197, 175, 0.4);
  flex-shrink: 0;
}
.cs-kc-comment-text {
  font-size: 13.5px;
  line-height: 1.6;
  color: rgba(227, 226, 231, 0.82);
  margin: 0;
  overflow-wrap: anywhere;
}
.cs-kc-error {
  font-size: 12px;
  color: #e0968f;
  text-align: center;
  padding: 20px 16px;
  margin: 0;
}

.cs-kc-composer {
  flex-shrink: 0;
  padding: 14px 20px 16px;
  border-top: 1px solid rgba(212, 175, 55, 0.12);
  background: rgba(13, 14, 18, 0.5);
}
.cs-kc-composer-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cs-kc-input {
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(212, 175, 55, 0.18);
  border-radius: 9999px;
  padding: 9px 16px;
  font-size: 13px;
  color: #e3e2e7;
  font-family: 'DM Sans', sans-serif;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}
.cs-kc-input::placeholder {
  color: rgba(208, 197, 175, 0.35);
}
.cs-kc-input:focus {
  border-color: rgba(212, 175, 55, 0.5);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.08);
}
.cs-kc-input:disabled {
  opacity: 0.5;
}
.cs-kc-send-btn {
  height: 34px;
  padding: 0 18px;
  border-radius: 9999px;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: #d4af37;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease;
  flex-shrink: 0;
}
.cs-kc-send-btn:hover:not(:disabled) {
  background: #d4af37;
  color: #0d0e12;
  box-shadow: 0 0 12px rgba(212, 175, 55, 0.25);
}
.cs-kc-send-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
`;

const PenIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

/* Compact relative timestamp — falls back to nothing if the API doesn't send
   a date field, rather than showing "Invalid Date". */
const timeAgo = (dateString) => {
  if (!dateString) return null;
  const then = new Date(dateString).getTime();
  if (Number.isNaN(then)) return null;
  const minutes = Math.floor((Date.now() - then) / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;
  return new Date(dateString).toLocaleDateString(undefined, { month: "short", day: "numeric" });
};

export const KalamComment = ({ commentType, kalamId, postId }) => {
  const [commentValue, setCommentValue] = useState("");
  const [memberId, setMemberId] = useState("");
  const [totalComments, setTotalComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = useCallback(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/api/comment?commentType=${commentType}&kalamId=${kalamId}&postId=${postId}`, { withCredentials: true })
      .then((response) => {
        setTotalComments(response.data.content);
        setError(null);
      })
      .catch((err) => {
        console.error("Error while fetching comments", err);
        setError("Couldn't load comments.");
      })
      .finally(() => setIsLoading(false));
  }, [commentType, kalamId, postId]);

  const getUserId = useCallback(() => {
    axiosInstance
      .get("/api/userId", { withCredentials: true })
      .then((response) => setMemberId(response.data._id))
      .catch((err) => console.error("Error while fetching current user id", err));
  }, []);

  // Both branches ran the same two calls before (fetch comments, and — only for
  // kalamComment — fetch the current user's id). Own-comment detection needs
  // memberId regardless of commentType, so both now always run.
  useEffect(() => {
    fetchComments();
    getUserId();
  }, [fetchComments, getUserId]);

  const handleComment = () => {
    if (!commentValue.trim() || isPosting) return;
    setIsPosting(true);
    axiosInstance
      .post(
        `/api/kalam/comm?commentType=${commentType}&kalamId=${kalamId}&postId=${postId}`,
        { comment: commentValue, mUid: memberId },
        { withCredentials: true }
      )
      .then(() => {
        setCommentValue("");
        fetchComments();
      })
      .catch((err) => console.error("Error while posting comment", err))
      .finally(() => setIsPosting(false));
  };

  return (
    <div className="cs-kc-root">
      <style>{styles}</style>

      <div className="cs-kc-header">
        <div className="cs-kc-header-row">
          <h2 className="cs-kc-title">Discussion</h2>
          <span className="cs-kc-subtitle">
            {totalComments.length} comment{totalComments.length !== 1 ? "s" : ""}
          </span>
        </div>
        <div className="cs-kc-header-rule" />
      </div>

      <div className="cs-kc-list">
        {isLoading && (
          <div className="cs-kc-state">
            <div className="cs-kc-loading-dots">
              <span />
              <span />
              <span />
            </div>
          </div>
        )}

        {!isLoading && error && <p className="cs-kc-error">{error}</p>}

        {!isLoading && !error && totalComments.length === 0 && (
          <div className="cs-kc-state">
            <PenIcon className="cs-kc-state-icon" />
            <p className="cs-kc-state-title">No verses of reply yet.</p>
            <p className="cs-kc-state-sub">Be the first to share your thoughts.</p>
          </div>
        )}

        {!isLoading &&
          !error &&
          totalComments.map((c) => {
            const isOwn = c.commentBy === memberId;
            const posted = timeAgo(c.createdAt);
            return (
              <div key={c._id ?? `${c.commentBy}-${c.comment}`} className="cs-kc-comment">
                <div className={`cs-kc-avatar${isOwn ? " own" : ""}`}>
                  {isOwn ? "Me" : c.commentBy?.slice(-2).toUpperCase()}
                </div>
                <div className="cs-kc-comment-body">
                  <div className="cs-kc-comment-meta">
                    <span className={`cs-kc-comment-name${isOwn ? " own" : ""}`}>
                      {isOwn ? "You" : `User ${c.commentBy?.slice(-3)}`}
                    </span>
                    {posted && <span className="cs-kc-comment-time">{posted}</span>}
                  </div>
                  <p className="cs-kc-comment-text">{c.comment}</p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="cs-kc-composer">
        <div className="cs-kc-composer-row">
          <div className="cs-kc-avatar own">Me</div>
          <input
            type="text"
            className="cs-kc-input"
            placeholder="Add a comment…"
            value={commentValue}
            disabled={isPosting}
            onChange={(e) => setCommentValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleComment();
            }}
          />
          <button
            className="cs-kc-send-btn"
            onClick={handleComment}
            disabled={!commentValue.trim() || isPosting}
          >
            {isPosting ? "Posting…" : "Post"}
          </button>
        </div>
      </div>
    </div>
  );
};