import { useState, useEffect } from "react";
import axiosInstance from "../Apis/axiosInstance";
import { AlbumCard } from "./components/AlbumsCard";
import { useNavigate } from "react-router-dom";

export const DispAlbums=()=>{

    const [albumList, setAlbumList] = useState([]);
    const Navigate = useNavigate();


    useEffect(()=>{


         axiosInstance
    .get('/api/displayAlbums', {
        withCredentials:true
    })

    .then((response)=>{

        setAlbumList(response.data)
        console.log(response.data)
    })

    .catch((error)=>{
        console.error("error fetching request", error)
    })


    }, [])
   


    return(
        <>
         <div className="flex flex-wrap  p-6 items-center justify-center  border border-blue-400 gap-5 h-full ">
       
        {
            albumList.map((item)=>(
               
 <div key={item._id} className="flex flex-row mx-3">
                
                {
                    <button onClick={()=>Navigate(`/album?albumId=${item._id}`)}>
                   <AlbumCard albumName={item.name} albumId={albumList._id}/>
                   </button>
                }
                
  </div>
 
            ))
        }
       </div>
        </>
    )
}














// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // Mock data for preview
// const mockAlbums = [
//   { _id: "1", name: "Midnight Echoes" },
//   { _id: "2", name: "Neon Horizons" },
//   { _id: "3", name: "Velvet Thunder" },
//   { _id: "4", name: "Silver Lining" },
//   { _id: "5", name: "Dark Matter" },
//   { _id: "6", name: "Crystal Void" },
// ];

// const AlbumCard = ({ albumName }) => (
//   <div style={{
//     background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
//     border: "1px solid rgba(99, 179, 237, 0.15)",
//     borderRadius: "12px",
//     padding: "20px",
//     width: "180px",
//     height: "200px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     gap: "12px",
//     position: "relative",
//     overflow: "hidden",
//     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//     cursor: "pointer",
//   }}
//     className="album-card"
//   >
//     {/* Album art placeholder */}
//     <div style={{
//       position: "absolute",
//       top: 0, left: 0, right: 0,
//       height: "65%",
//       background: "linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 50%, #1a4a7a 100%)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//     }}>
//       <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//         <circle cx="20" cy="20" r="18" stroke="rgba(99,179,237,0.4)" strokeWidth="1.5"/>
//         <circle cx="20" cy="20" r="8" stroke="rgba(99,179,237,0.6)" strokeWidth="1.5"/>
//         <circle cx="20" cy="20" r="2.5" fill="rgba(99,179,237,0.8)"/>
//       </svg>
//     </div>

//     {/* Gradient overlay */}
//     <div style={{
//       position: "absolute",
//       bottom: 0, left: 0, right: 0,
//       height: "55%",
//       background: "linear-gradient(to top, #0d0d1a 60%, transparent)",
//     }} />

//     <span style={{
//       position: "relative",
//       zIndex: 2,
//       color: "#e2e8f0",
//       fontSize: "13px",
//       fontWeight: "600",
//       fontFamily: "'DM Sans', sans-serif",
//       letterSpacing: "0.02em",
//       textAlign: "center",
//       lineHeight: "1.4",
//     }}>
//       {albumName}
//     </span>
//   </div>
// );

// export const DispAlbums = () => {
//   const [albumList, setAlbumList] = useState(mockAlbums);
//   const [loading, setLoading] = useState(false);
//   const [hoveredId, setHoveredId] = useState(null);
//   const Navigate = useNavigate ? useNavigate() : () => {};

//   // Uncomment for real usage:
//   // useEffect(() => {
//   //   setLoading(true);
//   //   axiosInstance.get('/api/displayAlbums', { withCredentials: true })
//   //     .then((response) => { setAlbumList(response.data); })
//   //     .catch((error) => { console.error("error fetching request", error); })
//   //     .finally(() => setLoading(false));
//   // }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

//         .albums-wrapper {
//           min-height: 100vh;
//           background: #080812;
//           background-image: 
//             radial-gradient(ellipse at 20% 20%, rgba(30, 58, 95, 0.3) 0%, transparent 50%),
//             radial-gradient(ellipse at 80% 80%, rgba(15, 52, 96, 0.2) 0%, transparent 50%);
//           padding: 48px 32px;
//           font-family: 'DM Sans', sans-serif;
//         }

//         .albums-header {
//           max-width: 1200px;
//           margin: 0 auto 40px;
//           display: flex;
//           align-items: baseline;
//           gap: 16px;
//         }

//         .albums-title {
//           color: #f0f4ff;
//           font-size: 28px;
//           font-weight: 700;
//           letter-spacing: -0.02em;
//           margin: 0;
//         }

//         .albums-count {
//           color: #4a6fa5;
//           font-size: 13px;
//           font-family: 'Space Mono', monospace;
//         }

//         .divider {
//           max-width: 1200px;
//           margin: 0 auto 40px;
//           height: 1px;
//           background: linear-gradient(to right, rgba(99,179,237,0.2), transparent);
//         }

//         .albums-grid {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//         }

//         .album-btn {
//           background: none;
//           border: none;
//           padding: 0;
//           cursor: pointer;
//           outline: none;
//           border-radius: 12px;
//         }

//         .album-btn:focus-visible .album-card {
//           box-shadow: 0 0 0 2px #63b3ed;
//         }

//         .album-card:hover {
//           transform: translateY(-6px) scale(1.02);
//           border-color: rgba(99, 179, 237, 0.4) !important;
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(99, 179, 237, 0.1);
//         }

//         .loading-grid {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//         }

//         .skeleton {
//           width: 180px;
//           height: 200px;
//           border-radius: 12px;
//           background: linear-gradient(90deg, #1a1a2e 25%, #1e2444 50%, #1a1a2e 75%);
//           background-size: 200% 100%;
//           animation: shimmer 1.5s infinite;
//         }

//         @keyframes shimmer {
//           0% { background-position: -200% 0; }
//           100% { background-position: 200% 0; }
//         }

//         .empty-state {
//           color: #4a6fa5;
//           font-size: 15px;
//           letter-spacing: 0.05em;
//           text-align: center;
//           width: 100%;
//           padding: 60px 0;
//         }
//       `}</style>

//       <div className="albums-wrapper">
//         <div className="albums-header">
//           <h1 className="albums-title">Your Library</h1>
//           <span className="albums-count">{albumList.length} albums</span>
//         </div>

//         <div className="divider" />

//         {loading ? (
//           <div className="loading-grid">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <div key={i} className="skeleton" />
//             ))}
//           </div>
//         ) : albumList.length === 0 ? (
//           <p className="empty-state">No albums found</p>
//         ) : (
//           <div className="albums-grid">
//             {albumList.map((item) => (
//               <button
//                 key={item._id}
//                 className="album-btn"
//                 onClick={() => Navigate(`/album?albumId=${item._id}`)}
//               >
//                 <AlbumCard albumName={item.name} albumId={item._id} />
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default DispAlbums;