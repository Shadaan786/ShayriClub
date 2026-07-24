// import { useState, useEffect } from "react";
// import axiosInstance from "@/Apis/axiosInstance";
// import { AlbumCard } from "./components/AlbumsCard";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const AlbumsLive=()=>{

//     const[liveAlbums, setLiveAlbums] = useState([]);
//     const Navigate = useNavigate();
//     const[roman, setRoman] = useState([]);
//     const[isRomantic, setIsRomantic] = useState(false)
//     const[motiv, setMotiv] = useState([])
//     const[isMotivation, setIsMotivation] = useState(false)
//     const[category, setCategory] = useState(["all"]);

//     useEffect(()=>{

//         axiosInstance
//         .post('/api/albumsLive',{

//           category: category
//         })

//         .then((response)=>{

//             console.log("length", response.data.length);
//             console.log("response.data", response.data)
//             setLiveAlbums(response.data)

//         })

//         .catch((error)=>{
//             console.error("error while fetching live albums", error)
//         })
//     }, [category])

//     const Romantic=()=>{

//       axiosInstance
//       .get('/api/albumRomantic')
//       .then((Response)=>{

//         console.log("response.data of romantic", Response.data)

//         setRoman(Response.data)


//       })

//       return(
//         <>

//               {
//  <main className="px-10 pt-10">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//           {
//             roman.map((item) => (
//               <div key={item._id} className="flex flex-row mx-3">
//                 {
//                   <button
//                     onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                     className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                   >
//                     <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                   </button>
//                 }
//               </div>
//             ))
//           }
//         </div>
//       </main>
//         }
        
//         </>
//       )
//     }

//     const Motivation =()=>{

//       axiosInstance
//       .get('/api/albumMotivation')

//       .then((Response)=>{

//         setMotiv(Response.data)
//       })

//        return(
//       <>

//          {
//  <main className="px-10 pt-10">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//           {
//             motiv.map((item) => (
//               <div key={item._id} className="flex flex-row mx-3">
//                 {
//                   <button
//                     onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                     className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                   >
//                     <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                   </button>
//                 }
//               </div>
//             ))
//           }
//         </div>
//       </main>
//         }
      
//       </>
//     )
//     }

   

//     return(
//         <><h1>Live Albums</h1>

//         <br /> <br /> <br />
         
//          <button onClick={()=>setCategory(["all"])}>all</button>
//         <button onClick={()=>setCategory(["romantic"])}>romantic</button>
//          <button onClick={()=>setCategory(["motivation"])}>motivation</button>
        

//         {/* ---------------------------------------------------------------------------------------------------------------------> */}

//         {
//  <main className="px-10 pt-10">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//           {
//             liveAlbums.map((item) => (
//               <div key={item._id} className="flex flex-row mx-3">
//                 {
//                   <button
//                     onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                     className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                   >
//                     <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                   </button>
//                 }
//               </div>
//             ))
//           }
//         </div>
//       </main>
//         }

//         {/* ------------------------------------------------------------------------------------------------------------------------> */}
// {/* 
//         <button onClick={()=>setIsRomantic(true)}>rom</button>
//         <button onClick={()=>setIsMotivation(true)}>mot</button>

//         {isRomantic && <Romantic />}

//        { 
//        (isRomantic)?<Romantic/>:(isMotivation)?<Motivation/>:  <main className="px-10 pt-10">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//           {
//             liveAlbums.map((item) => (
//               <div key={item._id} className="flex flex-row mx-3">
//                 {
//                   <button
//                     onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                     className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                   >
//                     <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                   </button>
//                 }
//               </div>
//             ))
//           }
//         </div>
//       </main>
       
//        }
//          */}

         
        
//         </>
        
//     )
// }

// export default AlbumsLive;







//----------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



// import { useState, useEffect, useRef } from "react";
// import axiosInstance from "@/Apis/axiosInstance";
// import { AlbumCard } from "./components/AlbumsCard";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import InfiniteScroll from "react-infinite-scroll-component";
// import axios from "axios";


// const AlbumsLive = () => {

//     const [liveAlbums, setLiveAlbums] = useState([]);
//     const Navigate = useNavigate();
//     const [roman, setRoman] = useState([]);
//     const [isRomantic, setIsRomantic] = useState(false);
//     const [motiv, setMotiv] = useState([]);
//     const [isMotivation, setIsMotivation] = useState(false);
//     const [category, setCategory] = useState(["all"]);
//     const newAlbums = useRef([null]);
//     const[hasMore, setHasMore] = useState(true);
//     const [page, setPage] = useState(1);
//     const [limit, setLimit] = useState(15);

//     useEffect(() => {

//         axiosInstance
//             .get(`/api/albumsLive?category=${category}&page=${page}&limit=${limit}`)
//             .then((response) => {
//                 console.log("length", response.data.length);
//                 console.log("response.data", response.data)
//                 setLiveAlbums(response.data)

//                 setPage(2);
//             })
//             .catch((error) => {
//                 console.error("error while fetching live albums", error)
//             })
//     }, [category])

//     // const Romantic = () => {

//     //     axiosInstance
//     //         .get('/api/albumRomantic')
//     //         .then((Response) => {
//     //             console.log("response.data of romantic", Response.data)
//     //             setRoman(Response.data)
//     //         })

//     //     return (
//     //         <>
//     //             {
//     //                 <main className="px-10 pt-10">
//     //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//     //                         {
//     //                             roman.map((item) => (
//     //                                 <div key={item._id} className="flex flex-row mx-3">
//     //                                     {
//     //                                         <button
//     //                                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
//     //                                             className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//     //                                         >
//     //                                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//     //                                         </button>
//     //                                     }
//     //                                 </div>
//     //                             ))
//     //                         }
//     //                     </div>
//     //                 </main>
//     //             }
//     //         </>
//     //     )
//     // }

//     // const Motivation = () => {

//     //     axiosInstance
//     //         .get('/api/albumMotivation')
//     //         .then((Response) => {
//     //             setMotiv(Response.data)
//     //         })

//     //     return (
//     //         <>
//     //             {
//     //                 <main className="px-10 pt-10">
//     //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//     //                         {
//     //                             motiv.map((item) => (
//     //                                 <div key={item._id} className="flex flex-row mx-3">
//     //                                     {
//     //                                         <button
//     //                                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
//     //                                             className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//     //                                         >
//     //                                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//     //                                         </button>
//     //                                     }
//     //                                 </div>
//     //                             ))
//     //                         }
//     //                     </div>
//     //                 </main>
//     //             }
//     //         </>
//     //     )
//     // }

//     const fetchMore =()=>{
//         axiosInstance
//           .get(`/api/albumsLive?category=${category}&page=${page}&limit=${limit}`)
//             .then((response) => {
//                 console.log("fetchMore_running")
//                 console.log("length", response.data.length);
//                 console.log("response.data", response.data)
                

//                 newAlbums.current = response.data
               
//                 if(newAlbums.current.length === 0){
//                     setHasMore(false);
//                 }else{
                     
//                 setLiveAlbums(prevItems =>[...prevItems, ...newAlbums.current])
//                 setPage(prev=> prev + 1)

//                 }
//             })
//             .catch((error) => {
//                 console.error("error while fetching live albums", error)
//             })
//     }

//     return (
//         <div id="scrollable" className="h-screen overflow-auto bg-[#000000] text-white">

//             {/* ── Page Header ── */}
//             <div className="flex items-center justify-between px-10 pt-8 pb-2">
//                 <h1 className="text-7xl font-medium tracking-tight text-[#f0f0f0]">
//                     Live Albums
//                 </h1>
//                 <span className="text-xs text-[#505058]">
//                     {liveAlbums.length} albums
//                 </span>
//             </div>

//             {/* ── Filter Pills ── */}
//             <div className="flex items-center gap-2 px-10 py-4">
//                 {["all", "romantic", "motivation"].map((cat) => (
//                     <button
//                         key={cat}
//                         onClick={() => setCategory([cat])}
//                         className={`
//                             px-5 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 capitalize
//                             ${category[0] === cat
//                                 ? "bg-violet-600 border-violet-600 text-white"
//                                 : "bg-[#1c1c1e] border-[#2e2e30] text-[#a0a0a6] hover:bg-[#242426] hover:text-[#e0e0e0] hover:border-[#3e3e42]"
//                             }
//                         `}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>
            

//             {/* ── Album Grid ── */}
//             {
//                 <main className="px-10 pt-2">

//                     <InfiniteScroll
//                           dataLength={liveAlbums.length} //This is important field to render the next data
//                           next={fetchMore}
//                           scrollableTarget= "scrollable"
//                           hasMore={hasMore}
//                           loader={<h4>Loading...</h4>}
//                           endMessage={
//                             <p style={{ textAlign: 'center' }}>
//                               <b>Yay! You have seen it all</b>
//                             </p>
//                           }
//                         >

//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">

                           
//                         {
//                             liveAlbums.map((item) => (
//                                 <div key={item._id}>
//                                     {
//                                         <button
//                                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                                             className="
//                                                 w-full text-left outline-none
//                                                 focus-visible:ring-2 focus-visible:ring-violet-500
//                                                 rounded-2xl animate-[fadeUp_0.4s_ease_both]
//                                             "
//                                         >
//                                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                                         </button>
//                                     }
//                                 </div>
//                             ))
//                         }
                       
//                     </div>
//                      </InfiniteScroll>
//                 </main>
//             }

//             {/* ------------------------------------------------------------------------------------------------------------------------>
            
//             <button onClick={()=>setIsRomantic(true)}>rom</button>
//             <button onClick={()=>setIsMotivation(true)}>mot</button>

//             {isRomantic && <Romantic />}

//            { 
//            (isRomantic)?<Romantic/>:(isMotivation)?<Motivation/>:  <main className="px-10 pt-10">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//               {
//                 liveAlbums.map((item) => (
//                   <div key={item._id} className="flex flex-row mx-3">
//                     {
//                       <button
//                         onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                         className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                       >
//                         <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                       </button>
//                     }
//                   </div>
//                 ))
//               }
//             </div>
//           </main>
           
//            }
//              */}

//         </div>
//     )
// }

// export default AlbumsLive;

//---------------------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// import { useState, useEffect, useRef } from "react";
// import axiosInstance from "@/Apis/axiosInstance";
// import { AlbumCard } from "./components/AlbumsCard";
// import { useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import InfiniteScroll from "react-infinite-scroll-component";
// import axios from "axios";


// const AlbumsLive = () => {

//     const [liveAlbums, setLiveAlbums] = useState([]);
//     const Navigate = useNavigate();
//     const [roman, setRoman] = useState([]);
//     const [isRomantic, setIsRomantic] = useState(false);
//     const [motiv, setMotiv] = useState([]);
//     const [isMotivation, setIsMotivation] = useState(false);
//     const [category, setCategory] = useState(["all"]);
//     const newAlbums = useRef([null]);
//     const[hasMore, setHasMore] = useState(true);
//     const [page, setPage] = useState(1);
//     const [limit, setLimit] = useState(15);
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     useEffect(() => {

//         axiosInstance
//             .get(`/api/albumsLive?category=${category}&page=${page}&limit=${limit}`)
//             .then((response) => {
//                 console.log("length", response.data.length);
//                 console.log("response.data", response.data)
//                 setLiveAlbums(response.data)

//                 setPage(2);
//             })
//             .catch((error) => {
//                 console.error("error while fetching live albums", error)
//             })
//     }, [category])

//     // const Romantic = () => {

//     //     axiosInstance
//     //         .get('/api/albumRomantic')
//     //         .then((Response) => {
//     //             console.log("response.data of romantic", Response.data)
//     //             setRoman(Response.data)
//     //         })

//     //     return (
//     //         <>
//     //             {
//     //                 <main className="px-10 pt-10">
//     //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//     //                         {
//     //                             roman.map((item) => (
//     //                                 <div key={item._id} className="flex flex-row mx-3">
//     //                                     {
//     //                                         <button
//     //                                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
//     //                                             className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//     //                                         >
//     //                                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//     //                                         </button>
//     //                                     }
//     //                                 </div>
//     //                             ))
//     //                         }
//     //                     </div>
//     //                 </main>
//     //             }
//     //         </>
//     //     )
//     // }

//     // const Motivation = () => {

//     //     axiosInstance
//     //         .get('/api/albumMotivation')
//     //         .then((Response) => {
//     //             setMotiv(Response.data)
//     //         })

//     //     return (
//     //         <>
//     //             {
//     //                 <main className="px-10 pt-10">
//     //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//     //                         {
//     //                             motiv.map((item) => (
//     //                                 <div key={item._id} className="flex flex-row mx-3">
//     //                                     {
//     //                                         <button
//     //                                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
//     //                                             className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//     //                                         >
//     //                                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//     //                                         </button>
//     //                                     }
//     //                                 </div>
//     //                             ))
//     //                         }
//     //                     </div>
//     //                 </main>
//     //             }
//     //         </>
//     //     )
//     // }

//     const fetchMore =()=>{
//         axiosInstance
//           .get(`/api/albumsLive?category=${category}&page=${page}&limit=${limit}`)
//             .then((response) => {
//                 console.log("fetchMore_running")
//                 console.log("length", response.data.length);
//                 console.log("response.data", response.data)
                

//                 newAlbums.current = response.data
               
//                 if(newAlbums.current.length === 0){
//                     setHasMore(false);
//                 }else{
                     
//                 setLiveAlbums(prevItems =>[...prevItems, ...newAlbums.current])
//                 setPage(prev=> prev + 1)

//                 }
//             })
//             .catch((error) => {
//                 console.error("error while fetching live albums", error)
//             })
//     }

//     return (
//         <div id="scrollable" className="overflow-auto" style={{ height: "100svh", background: "#0a0a10", color: "#fff", fontFamily: "system-ui, sans-serif" }}>

//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
//                 @keyframes albumslive-fu {
//                     from { opacity: 0; transform: translateY(12px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//                 .live-a1 { animation: albumslive-fu .45s ease both; }
//                 .live-a2 { animation: albumslive-fu .45s .09s ease both; }
//                 .live-a3 { animation: albumslive-fu .45s .18s ease both; }
//                 .live-a4 { animation: albumslive-fu .45s .27s ease both; }
//                 .live-tab-btn { transition: color .2s, border-color .2s; }
//                 .live-tab-btn:hover:not([data-active="true"]) { color: rgba(167,139,250,0.7) !important; }
//                 @keyframes fadeUp {
//                     from { opacity: 0; transform: translateY(14px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//             `}</style>

//             <div className="max-w-[1600px] mx-auto" style={{ paddingBottom: "max(80px, env(safe-area-inset-bottom))" }}>

//                 {/* ── Top Nav ── */}
//                 <nav
//                     className="flex items-center justify-between px-10 py-4 sticky top-0 z-30"
//                     style={{
//                         background: "rgba(10,10,16,0.98)",
//                         borderBottom: "1px solid rgba(255,255,255,0.06)",
//                         backdropFilter: "blur(12px)",
//                     }}
//                 >
//                     {/* Left: sidebar + logo */}
//                     <div className="flex items-center gap-3">
//                         <button
//                             onClick={() => setSidebarOpen(true)}
//                             className="flex items-center justify-center w-9 h-9 flex-shrink-0 transition-all duration-150 active:scale-95"
//                             style={{
//                                 background: "rgba(255,255,255,0.05)",
//                                 border: "1px solid rgba(255,255,255,0.09)",
//                                 borderRadius: 10,
//                                 color: "#9090b0",
//                             }}
//                             aria-label="Open sidebar"
//                         >
//                             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
//                                 <line x1="3" y1="6" x2="21" y2="6" />
//                                 <line x1="3" y1="12" x2="15" y2="12" />
//                                 <line x1="3" y1="18" x2="18" y2="18" />
//                             </svg>
//                         </button>
//                         <div
//                             className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
//                             style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)" }}
//                         >
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
//                                 <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
//                             </svg>
//                         </div>
//                         <span style={{ fontSize: 15, fontWeight: 600, color: "#e2d9ff", letterSpacing: "-0.3px" }}>Kalams</span>
//                     </div>

//                     {/* Center: search */}
//                     <div
//                         className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
//                         style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", width: 260 }}
//                     >
//                         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
//                             <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
//                         </svg>
//                         <input
//                             placeholder="Search albums..."
//                             className="bg-transparent outline-none w-full"
//                             style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", border: "none" }}
//                         />
//                     </div>

//                     {/* Right: links + avatar + publish */}
//                     <div className="flex items-center gap-4">
//                         <a style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Explore</a>
//                         <a style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Artists</a>
//                         <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.08)" }} />
//                         <div
//                             className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white cursor-pointer"
//                             style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)", border: "2px solid rgba(255,255,255,0.1)" }}
//                         >
//                             A
//                         </div>
//                         <Link
//                             to="/kalam"
//                             className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all active:scale-95"
//                             style={{ background: "linear-gradient(135deg,#7c4dff,#9c6dff)", boxShadow: "0 2px 10px rgba(124,77,255,0.35)" }}
//                         >
//                             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//                                 <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
//                             </svg>
//                             Publish
//                         </Link>
//                     </div>
//                 </nav>

//                 {/* ── Hero Header ── */}
//                 <div className="relative overflow-hidden px-10 pt-16 pb-12" style={{ background: "#0a0a10" }}>
//                     <div style={{ position: "absolute", top: -80, left: -60, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(109,40,217,0.18) 0%,transparent 65%)", pointerEvents: "none" }} />
//                     <div style={{ position: "absolute", bottom: -40, right: -40, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,77,255,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />

//                     <div className="max-w-[680px] relative">
//                         <div className="live-a1 flex items-center gap-2 mb-5">
//                             <div style={{ width: 3, height: 16, borderRadius: 2, background: "linear-gradient(180deg,#8b5cf6,#6d28d9)", flexShrink: 0 }} />
//                             <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(139,92,246,0.85)" }}>Now Live</span>
//                             <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)", margin: "0 4px" }} />
//                             <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 99, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}>
//                                 <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#8b5cf6", display: "inline-block", flexShrink: 0, boxShadow: "0 0 5px rgba(139,92,246,0.8)" }} />
//                                 <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(167,139,250,0.9)", letterSpacing: "0.05em" }}>{liveAlbums.length} albums</span>
//                             </div>
//                         </div>

//                         <h1
//                             className="live-a2"
//                             style={{
//                                 fontFamily: "'Cormorant Garamond', Georgia, serif",
//                                 fontSize: "clamp(52px, 6vw, 80px)",
//                                 fontWeight: 300, fontStyle: "italic",
//                                 lineHeight: 0.92, marginBottom: 24, letterSpacing: "-1px",
//                             }}
//                         >
//                             <span style={{ color: "#b8aee0", display: "block" }}>Live</span>
//                             <span style={{ fontWeight: 600, fontStyle: "normal", color: "#fff", display: "block", position: "relative", width: "fit-content" }}>
//                                 Albums
//                                 <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#7c3aed,#a78bfa,transparent)", borderRadius: 2 }} />
//                             </span>
//                         </h1>

//                         <p className="live-a3" style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, maxWidth: 400, margin: 0 }}>
//                             Albums currently trending across the community.
//                         </p>
//                     </div>
//                 </div>

//                 {/* ── Tab Nav ── */}
//                 <div
//                     className="live-a4 flex items-center justify-center gap-1 px-10"
//                     style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0a0a10" }}
//                 >
//                     {[
//                         { id: "kalams", label: "Kalams",            path: "/social" },
//                         { id: "kotw",   label: "Kalam of The Week", path: "/Kotw" },
//                         { id: "albums", label: "Albums",            path: null },
//                     ].map(({ id, label, path }) => (
//                         <Link
//                             key={id}
//                             to={path ?? "#"}
//                             onClick={e => { if (!path) e.preventDefault(); }}
//                             data-active={id === "albums"}
//                             className="live-tab-btn"
//                             style={{
//                                 padding: "14px 20px",
//                                 fontSize: 13,
//                                 fontWeight: id === "albums" ? 600 : 500,
//                                 textDecoration: "none",
//                                 color: id === "albums" ? "#a78bfa" : "rgba(255,255,255,0.4)",
//                                 borderBottom: id === "albums" ? "2px solid #7c4dff" : "2px solid transparent",
//                                 whiteSpace: "nowrap",
//                                 display: "inline-block",
//                             }}
//                         >
//                             {label}
//                         </Link>
//                     ))}
//                 </div>

//                 {/* ── Filter Pills ── */}
//                 <div className="flex items-center gap-2 px-10 py-6">
//                     {["all", "romantic", "motivation"].map((cat) => (
//                         <button
//                             key={cat}
//                             onClick={() => setCategory([cat])}
//                             className="capitalize transition-all duration-150"
//                             style={{
//                                 padding: "7px 18px",
//                                 borderRadius: 99,
//                                 fontSize: 13,
//                                 fontWeight: 500,
//                                 border: category[0] === cat ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
//                                 background: category[0] === cat
//                                     ? "linear-gradient(135deg, #7c4dff 0%, #9c6dff 100%)"
//                                     : "rgba(255,255,255,0.04)",
//                                 color: category[0] === cat ? "#fff" : "rgba(255,255,255,0.45)",
//                                 boxShadow: category[0] === cat ? "0 2px 10px rgba(124,77,255,0.4)" : "none",
//                                 cursor: "pointer",
//                             }}
//                         >
//                             {cat}
//                         </button>
//                     ))}
//                 </div>

//                 {/* ── Album Grid ── */}
//                 {
//                     <main className="px-10 pb-20">

//                         <InfiniteScroll
//                             dataLength={liveAlbums.length} //This is important field to render the next data
//                             next={fetchMore}
//                             scrollableTarget="scrollable"
//                             hasMore={hasMore}
//                             loader={
//                                 <div className="flex justify-center py-8">
//                                     <div
//                                         className="w-5 h-5 rounded-full border-2 border-violet-600/30 border-t-violet-600"
//                                         style={{ animation: "spin 0.8s linear infinite", borderRadius: "50%" }}
//                                     />
//                                     <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//                                 </div>
//                             }
//                             endMessage={
//                                 <p className="text-center py-8 text-white/20 text-xs tracking-widest uppercase font-mono">
//                                     ✦ You've seen it all ✦
//                                 </p>
//                             }
//                         >

//                             <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>

//                                 {
//                                     liveAlbums.map((item) => (
//                                         <div key={item._id}>
//                                             {
//                                                 <button
//                                                     onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                                                     className="w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-2xl transition-all"
//                                                     style={{ animation: "fadeUp 0.4s ease both" }}
//                                                 >
//                                                     <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                                                 </button>
//                                             }
//                                         </div>
//                                     ))
//                                 }

//                             </div>
//                         </InfiniteScroll>
//                     </main>
//                 }

//                 {/* ------------------------------------------------------------------------------------------------------------------------>
                
//                 <button onClick={()=>setIsRomantic(true)}>rom</button>
//                 <button onClick={()=>setIsMotivation(true)}>mot</button>

//                 {isRomantic && <Romantic />}

//                { 
//                (isRomantic)?<Romantic/>:(isMotivation)?<Motivation/>:  <main className="px-10 pt-10">
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//                   {
//                     liveAlbums.map((item) => (
//                       <div key={item._id} className="flex flex-row mx-3">
//                         {
//                           <button
//                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                             className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                           >
//                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                           </button>
//                         }
//                       </div>
//                     ))
//                   }
//                 </div>
//               </main>
               
//                }
//                  */}

//             </div>
//         </div>
//     )
// }

// export default AlbumsLive;

//------------------------------------------------------------------------------------------------------------------------------>
import { useState, useEffect, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { useNavigate, Link } from "react-router-dom";

/**
 * Color tokens pulled from the Library page's Material-3 dark theme mock,
 * kept as plain JS so we don't depend on a custom Tailwind config existing
 * in this project.
 */
const COLORS = {
    background: "#051424",
    surfaceContainer: "#122131",
    surfaceContainerHigh: "#1c2b3c",
    surfaceContainerHighest: "#273647",
    onSurface: "#d4e4fa",
    onSurfaceVariant: "#cbc4d2",
    primary: "#cfbcff",
    onPrimary: "#381e72",
    secondary: "#cdc0e9",
    tertiary: "#e7c365",
    outline: "#948e9c",
    borderSubtle: "rgba(255,255,255,0.10)",
};

const AlbumsLive = () => {
    const [liveAlbums, setLiveAlbums] = useState([]);
    const [initialLoading, setInitialLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [artworkFile, setArtworkFile] = useState(null);
    const [newTitle, setNewTitle] = useState("");
    const [newCurator, setNewCurator] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    const searchQuery = useRef("");
    const limit = 20;
    const Navigate = useNavigate();
    const trendingRef = useRef(null);
    const favoritesRef = useRef(null);

    const categoryOptions = [
        { value: "romantic", label: "Romantic" },
        { value: "motivation", label: "Motivation" },
        { value: "inspirational", label: "Inspirational" },
        { value: "visionary", label: "Visionary" },
        { value: "lo-fi", label: "Lo-fi" },
        { value: "study", label: "Study" },
        { value: "high-energy", label: "High Energy" },
        { value: "relaxing", label: "Relaxing" },
        { value: "deep-focus", label: "Deep Focus" },
    ];

    const featuredCurators = [
        { name: "Luna Echo", followers: "12.4k Followers", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
        { name: "Solaris", followers: "8.2k Followers", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
        { name: "Vibe Master", followers: "25k Followers", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80" },
        { name: "Nova", followers: "5.1k Followers", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" },
        { name: "Deep Blue", followers: "19.3k Followers", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80" },
        { name: "Aura", followers: "3.4k Followers", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" },
    ];

    const trendingItems = [
        {
            title: "Neon Echoes",
            artist: "Cyber Pulse",
            badge: "Top of the Charts",
            desc: "Experience the electric pulse of the digital underground. A masterclass in synth-wave and futuristic soundscapes.",
            img: "https://lh3.googleusercontent.com/aida/AP1WRLspjb46jblSvhnkI9H6Jcgnc5ESzmSCe-kAJYRetcaxRPmCkk951vEoGHvLuum-nwSOwFbhsWNRZcmYpECsedjRgBhCGnFw6RuxUCPRMIAk3zvEYx37762Qqicz2oG71KyOK_48TWlAI5946EyPDglG-W87dFqV_hGMkT23RkXWoETR75zTsE462dIXtNzeJ5vL-SUIAqDPO7OXlsZpbJaQXULs3zt-ZkIUcw7WxefeUexIO29lL_8_fQ",
        },
        {
            title: "Midnight Velocity",
            artist: "Night Drive Sessions",
            desc: "A high-octane journey through neon-lit tunnels and futuristic cityscapes.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0TG9cDC5zowyUvFvUSgX1GEb_p3u3hOpRrQb5mU1l7vJbI5qUn0e3IaATTEigq82ViGkwPucL_bqdqCb7SN-oAbiYOEhnT3nVBrsdO81l0FMhJ0qiYb-b06gku1IRoj9wDzIIz_7qZPk_gjgs5NRsqaC2AT_bs9T442s0rFHsyd318Vi4GQGDyWCacOF1TAJOj1Q_Vmu54qdOkv6UxqwzsYsXH-RvU2wQKe_NrrmWTY6ZFGOy1mR-",
        },
        {
            title: "Deep Sea Echoes",
            artist: "Lumina",
            desc: "Immerse yourself in the bioluminescent depths of ambient electronic soundscapes.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnscxQRHJ4YN4HmLYey998BFxlOueH7BkReejyk3zQyL9PYI74QOD72QNCXXRAqqLZoQgQ-ZyVsFlbK1P8J9usC0fYE1U04jphPN6eOd1XIgIQxcbEm6eE-jahdo7R_Ji12N1rfAG_iMbspsAVLS1G5um4PUC5Uv1lGZ7x5nLAOcp9J85iCaTffG0cbWgah9xG6g1oRmBh6QeJ1jmW6SMw-tC6J8JWmTOyEjUBuuqOkUkCc9PwfrAT",
        },
        {
            title: "Solar Flare",
            artist: "Stellar Echoes",
            desc: "Cosmic energy captured in vibrant gold and orange sonic textures.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7tihaYf1rtW0tjvn1rrKdBcNozVAyKV7q6rZsiDlXgUjYNpHwsBxXFZo-GgIOkmu9r4QIeaA4TGm5-VIdU7MqIOq-DKSDWCfoE2ePfam-y9yZZ2X7C5fjkLzsKALa3sDHAQw_nCqsi-w1WrRZMxaqPT3GkP0gAvN-VkDOgjHtTWFBA64t2fLJrwE8Jx9GJ8ifbDwiJZ2ARi4ClLxpJ3IhA-rlPzwTY09jOu8RLqIVQkaIhd_JFXmZ",
        },
        {
            title: "Urban Jungle",
            artist: "Kai Yume",
            desc: "Lo-fi beats for rainy nights and city lights.",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIc4dDmmrNIm8i_AzLozHJCfYhoIuHwKhkpZxYWjofsslxCmOBFpLG8bzBbcjN6vDY5rItvo9Gl--wBdaDLprG-G-mnc6h43O4v88ULIC8_q4nYp3404MDNqReatMlPphco9YbWSdteeQl9Nx5I3LeH9vw4gtCm1O7YY6R3lrLvMT_eGq9-WUq46yizwjvZ91UBFQZA1g2kBYJ3j33aWuG_C2HLlqkqCIUEUSM9SwtqKnUA0N9LQNr",
        },
    ];

    const allTimeFavorites = [
        {
            title: "Echoes of Silence",
            artist: "Ethereal Sounds",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0bwgdMd6USwL9jLtMAQBvJqm-nJm2k-KvrIiXM5AWLkPn5fFb4OSu7BdoYk5yx4kcWeqFZfL3xVHiRoRvs-kEG1ZFtsPHSys_TbtQFmdSztWup4GipC-IKeaR_vCQrqc8WpGeH4OBEbOrPHoD0SXSx1Ddm9H-KWq_hsU6GVQ20obAFUe6r0Ih3fmnuuNZYnek5dHZKH1iwpaXpNhtbG27edilPYiDU080Q48AZXbpz6_QXSt4K5bO",
        },
        {
            title: "Crimson Horizon",
            artist: "Aetheric Winds",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQm8Bw556rmn-jrwm197oqVCISdApqC-zeO7QjSXsM7htkvtlOHfStE_zwkamYQ7gO1H6BSAyWnvNd9yqZeNQgT39_UkQFCVSrJy5q-wBFX1yGg39-RlzP9xbb2GYKO-bn8JAvkuFI2vqQjWCulVX9k8wEix43Ab5WNoBdaL_ma092_-Pz2Imy-efBc8Zso4MB142ITcR9L7pvOz9mTi6LycjSdjhpV8ikCXYb-qlfY5DdU47ugaOy",
        },
        {
            title: "Golden Era",
            artist: "Jazz Collective",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM_ABHea2hfcFByc97CttzoOThOk0_t_tXh_EvWcKrNQ_yt6BmLQR8SC_rInudyYkZS2ovZTf62YcgYPY-9_HlTyikGCLw8onX-NxabikBNXBD1H1c-M_fhu3rZ_1RFLQH3mtKnwBFMq5M09jr3a-K3ad9pkd7IUDllgm7yZoAMllRzFOQZoP9buoflVt2TEYkTZ9rQYGlbgqR6LFT0GDB7Dy4mBW83eY1RcP7o-hZOvDraOyaOsm9",
        },
    ];

    const scrollByAmount = (ref, amount) => {
        if (ref.current) ref.current.scrollBy({ left: amount, behavior: "smooth" });
    };

    useEffect(() => {
        fetchAlbums();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchAlbums = () => {
        axiosInstance
            .get(`/api/albumsLive?page=1&limit=${limit}&query=${searchQuery.current || "all"}`)
            .then((response) => {
                setLiveAlbums(response.data);
                setInitialLoading(false);
            })
            .catch((error) => {
                console.error("error while fetching live albums", error);
            });
    };

    const handleSearch = () => {
        fetchAlbums();
    };

    const handleCreateAlbum = () => {
        const formData = new FormData();
        formData.append("name", newTitle);
        formData.append("curator", newCurator);
        formData.append("category", newCategory);
        if (artworkFile) formData.append("albumCover", artworkFile);

        axiosInstance
            .post("/api/albums", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(() => {
                setModalOpen(false);
                setNewTitle("");
                setNewCurator("");
                setNewCategory("");
                setArtworkFile(null);
                fetchAlbums();
            })
            .catch((error) => {
                console.error("error while creating album", error);
            });
    };

    return (
       <div
            id="scrollable-albums-live"
            className="min-h-screen w-full overflow-y-auto overflow-x-hidden"
            style={{ background: COLORS.background, color: COLORS.onSurface, fontFamily: "Inter, system-ui, sans-serif" }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block');
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Dancing+Script:wght@600&family=Noto+Nastaliq+Urdu&display=swap');

                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    vertical-align: middle;
                    line-height: 1;
                }

                .lib-glass-card {
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.08);
                    backdrop-filter: blur(20px);
                }
                .lib-sunset-gradient {
                    background: linear-gradient(135deg, #fbbf24 0%, #fb923c 100%);
                }
                .lib-nav-link { color: rgba(212,228,250,0.65); transition: color .2s; }
                .lib-nav-link:hover { color: ${COLORS.primary}; }
                .lib-sidebar-link { transition: background .2s, color .2s; }
                .lib-sidebar-link:hover { background: rgba(255,255,255,0.08); }
                .lib-pill { transition: all .15s ease; }
                @media (max-width: 1023px) {
                    .lib-sidebar { display: none !important; }
                }
                @media (max-width: 767px) {
                    .lib-nav-search { display: none !important; }
                    .lib-nav-links { display: none !important; }
                }
            `}</style>

            {/* ── Top Navigation ── */}
            <header
                className="fixed top-0 left-0 w-full z-50"
                style={{ background: "rgba(5,20,36,0.7)", backdropFilter: "blur(40px)", borderBottom: `1px solid ${COLORS.borderSubtle}` }}
            >
                <div className="flex justify-between items-center h-20 px-6 w-full max-w-[1440px] mx-auto">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden mr-2 w-9 h-9 flex items-center justify-center rounded-lg"
                            style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                            aria-label="Open sidebar"
                        >
                            <span className="material-symbols-outlined text-lg">menu</span>
                        </button>
                        <span className="font-extrabold text-2xl md:text-3xl tracking-tight">Library</span>
                    </div>

                    <nav className="lib-nav-links hidden md:flex items-center gap-8">
                        <Link to="/artists" className="lib-nav-link">Artists</Link>
                        <Link to="/albums" className="font-bold pb-1" style={{ color: COLORS.primary, borderBottom: `2px solid ${COLORS.primary}` }}>
                            Albums
                        </Link>
                        <Link to="/playlists" className="lib-nav-link">Playlists</Link>
                        <Link to="/genres" className="lib-nav-link">Genres</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div
                            className="lib-nav-search hidden lg:flex items-center rounded-full px-4 py-2"
                            style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                        >
                            <span className="material-symbols-outlined text-sm mr-2" style={{ color: COLORS.onSurfaceVariant }}>search</span>
                            <input
                                type="text"
                                placeholder="Search albums..."
                                onChange={(e) => (searchQuery.current = e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none"
                                style={{ color: COLORS.onSurface }}
                            />
                        </div>
                        <button className="material-symbols-outlined" style={{ color: COLORS.onSurface }}>account_circle</button>
                    </div>
                </div>
            </header>

            <div className="flex pt-20">
                {/* ── Sidebar (desktop) ── */}
                <aside
                    className="lib-sidebar hidden lg:flex flex-col py-8 px-4 gap-4 fixed left-0 top-20 z-40 overflow-y-auto"
                    style={{
                        width: 256,
                        height: "calc(100vh - 80px)",
                        background: "rgba(18,33,49,0.6)",
                        backdropFilter: "blur(20px)",
                        borderRight: `1px solid ${COLORS.borderSubtle}`,
                    }}
                >
                    <div className="mb-6 px-2">
                        <h3 className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: COLORS.secondary }}>
                            Your Collection
                        </h3>
                        <p className="text-xs" style={{ color: "rgba(203,196,210,0.6)" }}>Premium Member</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        {[
                            { icon: "home", label: "Home", to: "/" },
                            { icon: "explore", label: "Explore", to: "/explore" },
                            { icon: "library_music", label: "Library", to: "/library", active: true },
                            { icon: "history", label: "Recent", to: "/recent" },
                            { icon: "download", label: "Downloads", to: "/downloads" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                className="lib-sidebar-link flex items-center gap-3 py-2 px-3 rounded-lg"
                                style={{
                                    color: item.active ? COLORS.primary : COLORS.onSurfaceVariant,
                                    fontWeight: item.active ? 700 : 400,
                                    background: item.active ? "rgba(255,255,255,0.05)" : "transparent",
                                }}
                            >
                                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto flex flex-col gap-1 pt-8" style={{ borderTop: `1px solid rgba(255,255,255,0.05)` }}>
                        <Link to="/settings" className="lib-sidebar-link flex items-center gap-3 py-2 px-3 rounded-lg" style={{ color: COLORS.onSurfaceVariant }}>
                            <span className="material-symbols-outlined text-xl">settings</span>
                            <span>Settings</span>
                        </Link>
                        <Link to="/support" className="lib-sidebar-link flex items-center gap-3 py-2 px-3 rounded-lg" style={{ color: COLORS.onSurfaceVariant }}>
                            <span className="material-symbols-outlined text-xl">help</span>
                            <span>Support</span>
                        </Link>
                    </div>
                </aside>

                {/* ── Main Content ── */}
                <main className="flex-1 min-h-screen px-4 md:px-12 py-12 lg:ml-64 lg:w-[calc(100%-16rem)]">
                    {/* Hero */}
                    <section className="mb-16">
                        <div className="relative w-full h-80 rounded-[32px] overflow-hidden shadow-2xl flex items-end p-8">
                            <div className="lib-sunset-gradient absolute inset-0 z-0" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4 w-fit px-3 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.2)", backdropFilter: "blur(8px)" }}>
                                    <span className="material-symbols-outlined text-sm">star</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Featured Curator</span>
                                </div>
                                <h1 className="font-extrabold text-3xl md:text-5xl text-white mb-4">Sunset Sessions</h1>
                                <p className="text-white/90 max-w-xl mb-6">
                                    Explore the warmest vibrations of the golden hour. A curated selection for deep listening and cinematic horizons.
                                </p>
                                <div className="flex gap-4">
                                    <button className="bg-white text-orange-500 font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-lg">
                                        <span className="material-symbols-outlined">play_arrow</span>
                                        Listen Now
                                    </button>
                                    <button
                                        className="text-white font-bold px-8 py-3 rounded-full transition-all"
                                        style={{ background: "rgba(0,0,0,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}
                                    >
                                        Follow
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Trending Now */}
                    <section className="mb-16">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Trending Now</h2>
                                <p style={{ color: COLORS.onSurfaceVariant }}>The hottest sounds in the digital underground.</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div
                                ref={trendingRef}
                                className="flex gap-6 overflow-x-auto pb-8"
                                style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
                            >
                                {trendingItems.map((item) => (
                                    <div
                                        key={item.title}
                                        className="relative min-w-full md:min-w-[80%] h-[400px] rounded-[32px] overflow-hidden shadow-2xl flex-shrink-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${item.img}')`, scrollSnapAlign: "center" }}
                                    >
                                        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)" }} />
                                        <div className="relative h-full flex flex-col justify-center p-12 max-w-2xl">
                                            <div className="lib-glass-card p-8 rounded-3xl" style={{ backdropFilter: "blur(12px)" }}>
                                                {item.badge && (
                                                    <div className="flex items-center gap-2 mb-4" style={{ color: COLORS.primary }}>
                                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                                                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">{item.badge}</span>
                                                    </div>
                                                )}
                                                <h3 className="font-extrabold text-3xl md:text-4xl text-white mb-2">{item.title}</h3>
                                                <p className="font-bold mb-4" style={{ color: COLORS.primary }}>{item.artist}</p>
                                                {item.desc && <p className="text-white/80 mb-8">{item.desc}</p>}
                                                <button
                                                    className="font-bold px-8 py-3 rounded-full w-fit flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-lg"
                                                    style={{ background: COLORS.primary, color: COLORS.onPrimary }}
                                                >
                                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                                    Listen Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => scrollByAmount(trendingRef, -600)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: `1px solid ${COLORS.borderSubtle}` }}
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button
                                onClick={() => scrollByAmount(trendingRef, 600)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: `1px solid ${COLORS.borderSubtle}` }}
                            >
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {trendingItems.map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full" style={{ background: i === 0 ? COLORS.primary : "rgba(255,255,255,0.2)" }} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Recently Added */}
                    <section className="mb-16">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Recently Added</h2>
                                <p style={{ color: COLORS.onSurfaceVariant }}>Fresh tracks from your favorite genres.</p>
                            </div>
                            <Link to="/albums" className="text-xs font-semibold tracking-widest uppercase hover:underline" style={{ color: COLORS.primary }}>
                                View All
                            </Link>
                        </div>

                        <div className="flex gap-12 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
                            {liveAlbums.slice(0, 20).map((item) => (
                                <div
                                    key={item._id}
                                    onClick={() => Navigate(`/album?albumId=${item._id}`)}
                                    className="p-4 rounded-xl cursor-pointer group flex-shrink-0"
                                    style={{ width: 220 }}
                                >
                                    <div className="relative aspect-square w-60 h-60 rounded-lg overflow-hidden mb-4 shadow-xl">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${item.albumCover}')` }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(0,0,0,0.4)" }}>
                                            <div className="lib-sunset-gradient w-12 h-12 rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform shadow-lg">
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-base text-left truncate mb-1">{item.name}</h3>
                                    <p className="text-sm text-left truncate" style={{ color: COLORS.primary }}>{item.curator || item.category}</p>
                                </div>
                            ))}
                            {liveAlbums.length === 0 && !initialLoading && (
                                <p className="text-sm" style={{ color: COLORS.onSurfaceVariant }}>
                                    No albums yet — publish one to see it here.
                                </p>
                            )}
                        </div>
                    </section>

                    {/* Featured Curators */}
                    <section className="mb-16 py-8">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Featured Curators</h2>
                                <p style={{ color: COLORS.onSurfaceVariant }}>The visionaries behind your favorite sounds.</p>
                            </div>
                            <button onClick={()=>Navigate('/authors')} className="text-xs font-semibold tracking-widest uppercase hover:underline" style={{ color: COLORS.primary }}>
                                View All
                            </button>
                        </div>

                        <div className="flex gap-8 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
                            {featuredCurators.map((curator) => (
                                <div key={curator.name} className="flex flex-col items-center gap-4 group cursor-pointer" style={{ minWidth: 120 }}>
                                    <div
                                        className="w-24 h-24 rounded-full overflow-hidden transition-all duration-300"
                                        style={{ border: "2px solid transparent" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.primary)}
                                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                                    >
                                        <img src={curator.img} alt={curator.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-sm mb-1">{curator.name}</h3>
                                        <p className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(203,196,210,0.6)" }}>
                                            {curator.followers}
                                        </p>
                                    </div>
                                    <button className="text-xs font-bold hover:underline" style={{ color: COLORS.primary }}>Follow</button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* All Time Favorites */}
                    <section className="mb-16">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">All Time Favorites</h2>
                                <p style={{ color: COLORS.onSurfaceVariant }}>The timeless masterpieces of our collection.</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div
                                ref={favoritesRef}
                                className="flex gap-6 overflow-x-auto pb-8"
                                style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
                            >
                                {allTimeFavorites.map((item) => (
                                    <div
                                        key={item.title}
                                        className="relative min-w-full md:min-w-[80%] h-[400px] rounded-[32px] overflow-hidden shadow-2xl flex-shrink-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${item.img}')`, scrollSnapAlign: "center" }}
                                    >
                                        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)" }} />
                                        <div className="relative h-full flex flex-col justify-center p-12 max-w-2xl">
                                            <div className="lib-glass-card p-8 rounded-3xl" style={{ backdropFilter: "blur(12px)" }}>
                                                <h3 className="font-extrabold text-3xl md:text-4xl text-white mb-2">{item.title}</h3>
                                                <p className="font-bold mb-4" style={{ color: COLORS.primary }}>{item.artist}</p>
                                                <button
                                                    className="font-bold px-8 py-3 rounded-full w-fit flex items-center gap-2 hover:scale-105 transition-transform"
                                                    style={{ background: COLORS.primary, color: COLORS.onPrimary }}
                                                >
                                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                                    Listen Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => scrollByAmount(favoritesRef, -600)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: `1px solid ${COLORS.borderSubtle}` }}
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button
                                onClick={() => scrollByAmount(favoritesRef, 600)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", border: `1px solid ${COLORS.borderSubtle}` }}
                            >
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {allTimeFavorites.map((_, i) => (
                                    <div key={i} className="w-2 h-2 rounded-full" style={{ background: i === 0 ? COLORS.primary : "rgba(255,255,255,0.2)" }} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Personalized Mixes (bento) */}
                  {/* Personalized Mixes (bento) */}
<section className="pb-32">
    <h2 className="text-2xl font-bold mb-8">Personalized Mixes</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px]">
        <div
            className="lib-glass-card md:col-span-2 md:row-span-2 rounded-2xl relative overflow-hidden group cursor-pointer bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuClwBiiL_a0yxdAaD6xPm2xlv_P1imJIdES012wALMXY-z6xBB25j4n5UBxk5vot9QXjvKCX5GvD-Enuokn_bujWjqGZa9OIfym8LT-LcPL-630E5_-2FcfqRtnVmaKWBBL5OMiNnvbJHVAXh-3i_0Ctc9ITw9uHLo0Y1EdNozyOnDxf6LSzZMAegYwqU9WIX-C9nlUADeK-0JM-f9Xmvsfdnz8I0LXrtSC2iD-XvjH5fpAA-1RN_2s')",
            }}
        >
            <div className="absolute inset-0 p-8 flex flex-col justify-end" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)" }}>
                <h4 className="text-2xl font-bold mb-2">After Hours Focus</h4>
                <p className="text-white/70">Deep techno for midnight creation.</p>
            </div>
        </div>

        <div
            className="lib-glass-card md:col-span-2 rounded-2xl relative overflow-hidden group cursor-pointer bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkXNyMlpMqmDzsqveaiSy6Y6zpRMd0EX-4KRo2qOw1YzOXEOVZ3WgziOnj9CqjX0-oJHahAwmeBTagfmu2U9jedsuxIqtUNuf5jwTFB31vxBQ0IFk6iAtHmUs0uxeygbKIa0mG2r3VynxYT1l0wqMQCddVScwMNW65Rwn3te8I-F5iy52-ThMK9HC9Y45HWtMqTnbIgrfBYQpI8F5q0wALAOK27WF22VMhpM0k9BKmhoJghHwghiyw')",
            }}
        >
            <div className="absolute inset-0 p-6 flex flex-col justify-end" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)" }}>
                <h4 className="text-xl font-bold mb-1">Acoustic Mornings</h4>
                <p className="text-white/70">Gentle piano and strings.</p>
            </div>
        </div>

        <div className="lib-glass-card rounded-2xl relative overflow-hidden group cursor-pointer">
            <div className="lib-sunset-gradient absolute inset-0 opacity-80" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="material-symbols-outlined text-4xl mb-2 text-white">bolt</span>
                <h4 className="font-bold text-white">Vibe High</h4>
            </div>
        </div>

        <div
            onClick={() => setModalOpen(true)}
            className="lib-glass-card rounded-2xl relative overflow-hidden group cursor-pointer flex flex-col items-center justify-center p-4 text-center"
            style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
        >
            <span className="material-symbols-outlined text-4xl mb-2" style={{ color: COLORS.primary }}>add_circle</span>
            <h4 className="font-bold">Create New</h4>
        </div>
    </div>
</section>

                    {/* ── Footer (themed to match Library's navy/amber palette) ── */}
                    <footer
                        className="mt-16 pb-8 rounded-[32px] overflow-hidden"
                        style={{
                            background: `linear-gradient(90deg, ${COLORS.surfaceContainerLowest ?? "#010f1f"} 0%, ${COLORS.surfaceContainer} 55%, #010f1f 100%)`,
                            borderTop: `1px solid ${COLORS.borderSubtle}`,
                        }}
                    >
                        <div className="max-w-7xl mx-auto px-8 pt-12">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                                <div>
                                    <h1 className="relative inline-block text-3xl sm:text-5xl leading-none font-black tracking-wide cursor-default group">
                                       <span className="relative inline-block">
    <span
      className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      A
    </span>
    <bdi
      className="inline-block -mx-0.5 translate-y-[3px] bg-gradient-to-r from-rose-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"
      style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
    >
      لف
    </bdi>
    <span
      className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      az
    </span>
  </span>
                                    </h1>

                                    <p className="text-sm mt-2" style={{ color: COLORS.onSurfaceVariant }}>
                                        A platform for poets and writers to share their art with the world.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-4" style={{ color: COLORS.onSurface }}>Explore</h4>
                                    <ul className="space-y-2 text-sm" style={{ color: COLORS.onSurfaceVariant }}>
                                        <li className="lib-nav-link cursor-pointer transition">Kalam</li>
                                        <li className="lib-nav-link cursor-pointer transition">Community</li>
                                        <li className="lib-nav-link cursor-pointer transition">Browse</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-4" style={{ color: COLORS.onSurface }}>Resources</h4>
                                    <ul className="space-y-2 text-sm" style={{ color: COLORS.onSurfaceVariant }}>
                                        <li className="lib-nav-link cursor-pointer transition">About Us</li>
                                        <li className="lib-nav-link cursor-pointer transition">Guidelines</li>
                                        <li className="lib-nav-link cursor-pointer transition">Help Center</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-4" style={{ color: COLORS.onSurface }}>Legal</h4>
                                    <ul className="space-y-2 text-sm" style={{ color: COLORS.onSurfaceVariant }}>
                                        <li className="lib-nav-link cursor-pointer transition">Privacy Policy</li>
                                        <li className="lib-nav-link cursor-pointer transition">Terms of Service</li>
                                        <li className="lib-nav-link cursor-pointer transition">Contact</li>
                                    </ul>
                                </div>
                            </div>

                            <div
                                className="text-center text-sm pt-8"
                                style={{ color: "rgba(203,196,210,0.5)", borderTop: `1px solid ${COLORS.borderSubtle}` }}
                            >
                                © 2025 Alfaz. All rights reserved.
                            </div>
                        </div>
                    </footer>
                </main>
            </div>

            {/* ── Floating Action Button ── */}
            <button
                onClick={() => setModalOpen(true)}
                className="lib-sunset-gradient fixed bottom-24 right-8 w-14 h-14 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40"
                aria-label="Create album"
            >
                <span className="material-symbols-outlined text-3xl">add</span>
            </button>

            {/* ── Now Playing bar ── */}
            {isPlayerOpen && <footer
                className="fixed bottom-0 left-0 w-full h-20 z-50 px-6 flex items-center justify-between"
                style={{ background: "rgba(5,20,36,0.9)", backdropFilter: "blur(20px)", borderTop: `1px solid ${COLORS.borderSubtle}` }}
            >
                <div className="flex items-center gap-4 w-1/3">
                    <div className="w-12 h-12 rounded shadow-lg" style={{ background: "linear-gradient(135deg,#fb923c,#111)" }} />
                    <div className="hidden sm:block">
                        <p className="font-bold text-sm truncate">Amber Waves</p>
                        <p className="text-xs truncate" style={{ color: COLORS.onSurfaceVariant }}>The Golden Duo</p>
                    </div>
                    <span className="material-symbols-outlined text-xl ml-2 cursor-pointer" style={{ color: COLORS.primary }}>favorite</span>
                </div>

                <div className="flex flex-col items-center w-1/3 gap-1">
                    <div className="flex items-center gap-6">
                        <span className="material-symbols-outlined cursor-pointer" style={{ color: COLORS.onSurfaceVariant }}>shuffle</span>
                        <span className="material-symbols-outlined cursor-pointer" style={{ color: COLORS.onSurfaceVariant }}>skip_previous</span>
                        <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined">play_arrow</span>
                        </button>
                        <span className="material-symbols-outlined cursor-pointer" style={{ color: COLORS.onSurfaceVariant }}>skip_next</span>
                        <span className="material-symbols-outlined cursor-pointer" style={{ color: COLORS.onSurfaceVariant }}>repeat</span>
                    </div>
                    <div className="w-full max-w-md flex items-center gap-2">
                        <span className="text-[10px] w-8" style={{ color: COLORS.onSurfaceVariant }}>1:24</span>
                        <div className="flex-1 h-1 rounded-full overflow-hidden cursor-pointer" style={{ background: "rgba(255,255,255,0.1)" }}>
                            <div className="lib-sunset-gradient h-full w-1/3" />
                        </div>
                        <span className="text-[10px] w-8" style={{ color: COLORS.onSurfaceVariant }}>3:45</span>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4 w-1/3">
                    <span className="material-symbols-outlined cursor-pointer hidden md:block" style={{ color: COLORS.onSurfaceVariant }}>lyrics</span>
                    <span className="material-symbols-outlined cursor-pointer hidden md:block" style={{ color: COLORS.onSurfaceVariant }}>queue_music</span>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined" style={{ color: COLORS.onSurfaceVariant }}>volume_up</span>
                        <div className="w-24 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                            <div className="h-full w-2/3" style={{ background: COLORS.primary }} />
                        </div>
                    </div>
                </div>
            </footer>}

            {/* ── Mobile Sidebar Drawer ── */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-[70] lg:hidden" onClick={() => setSidebarOpen(false)} style={{ background: "rgba(0,0,0,0.6)" }}>
                    <aside
                        onClick={(e) => e.stopPropagation()}
                        className="h-full w-64 flex flex-col py-8 px-4 gap-4"
                        style={{ background: COLORS.surfaceContainer }}
                    >
                        {[
                            { icon: "home", label: "Home", to: "/" },
                            { icon: "explore", label: "Explore", to: "/explore" },
                            { icon: "library_music", label: "Library", to: "/library", active: true },
                            { icon: "history", label: "Recent", to: "/recent" },
                            { icon: "download", label: "Downloads", to: "/downloads" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                onClick={() => setSidebarOpen(false)}
                                className="flex items-center gap-3 py-2 px-3 rounded-lg"
                                style={{ color: item.active ? COLORS.primary : COLORS.onSurfaceVariant, fontWeight: item.active ? 700 : 400 }}
                            >
                                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </aside>
                </div>
            )}

            {/* ── Mobile Bottom Nav ── */}
            <nav
                className="fixed bottom-0 left-0 w-full z-[60] flex lg:hidden justify-around items-center h-16 px-4"
                style={{ background: "rgba(5,20,36,0.7)", backdropFilter: "blur(40px)", borderTop: `1px solid ${COLORS.borderSubtle}` }}
            >
                {[
                    { icon: "home", label: "Home", to: "/" },
                    { icon: "library_music", label: "Library", to: "/library", active: true },
                    { icon: "search", label: "Search", to: "/search" },
                    { icon: "person", label: "Profile", to: "/profile" },
                ].map((item) => (
                    <Link
                        key={item.label}
                        to={item.to}
                        className="flex flex-col items-center justify-center"
                        style={{ color: item.active ? COLORS.primary : COLORS.onSurfaceVariant }}
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span className="text-[10px] font-semibold mt-1">{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* ── Create Album Modal ── */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg rounded-3xl p-8"
                        style={{ background: COLORS.surfaceContainerHigh, border: `1px solid ${COLORS.borderSubtle}` }}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Create New Album</h2>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="material-symbols-outlined p-2 rounded-full"
                                style={{ background: "transparent" }}
                            >
                                close
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: COLORS.onSurfaceVariant }}>
                                    Album Title
                                </label>
                                <input
                                    value={newTitle}
                                    onChange={(e) => setNewTitle(e.target.value)}
                                    className="w-full rounded-xl px-4 py-3 outline-none"
                                    style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}`, color: COLORS.onSurface }}
                                    placeholder="Enter title"
                                    type="text"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: COLORS.onSurfaceVariant }}>
                                    Curator Name
                                </label>
                                <input
                                    value={newCurator}
                                    onChange={(e) => setNewCurator(e.target.value)}
                                    className="w-full rounded-xl px-4 py-3 outline-none"
                                    style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}`, color: COLORS.onSurface }}
                                    placeholder="Your name"
                                    type="text"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: COLORS.onSurfaceVariant }}>
                                    Category
                                </label>
                                <select
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    className="w-full rounded-xl px-4 py-3 outline-none appearance-none cursor-pointer"
                                    style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}`, color: COLORS.onSurface }}
                                >
                                    <option value="" disabled>Select a category</option>
                                    {categoryOptions.map((opt) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            <label
                                className="rounded-2xl p-12 text-center flex flex-col items-center gap-3 cursor-pointer"
                                style={{ border: `2px dashed ${COLORS.borderSubtle}` }}
                            >
                                <span className="material-symbols-outlined text-4xl" style={{ color: COLORS.onSurfaceVariant }}>cloud_upload</span>
                                <p className="text-sm" style={{ color: COLORS.onSurfaceVariant }}>
                                    {artworkFile ? artworkFile.name : "Drop album artwork here or click to browse"}
                                </p>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => setArtworkFile(e.target.files?.[0] ?? null)}
                                />
                            </label>

                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="flex-1 py-3 rounded-xl font-bold transition-colors"
                                    style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleCreateAlbum}
                                    disabled={!newTitle.trim() || !newCategory}
                                    className="lib-sunset-gradient flex-1 text-white py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-all disabled:opacity-50"
                                >
                                    Create Album
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AlbumsLive;