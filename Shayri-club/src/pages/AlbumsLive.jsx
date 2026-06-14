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
import { AlbumCard } from "./components/AlbumsCard";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";


const AlbumsLive = () => {

    const [liveAlbums, setLiveAlbums] = useState([]);
    const Navigate = useNavigate();
    const [roman, setRoman] = useState([]);
    const [isRomantic, setIsRomantic] = useState(false);
    const [motiv, setMotiv] = useState([]);
    const [isMotivation, setIsMotivation] = useState(false);
    const [category, setCategory] = useState(["all"]);
    const newAlbums = useRef([null]);
    const[hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(15);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {

        axiosInstance
            .get(`/api/albumsLive?category=${category}&page=${page}&limit=${limit}`)
            .then((response) => {
                console.log("length", response.data.length);
                console.log("response.data", response.data)
                setLiveAlbums(response.data)

                setPage(2);
            })
            .catch((error) => {
                console.error("error while fetching live albums", error)
            })
    }, [category])

    // const Romantic = () => {

    //     axiosInstance
    //         .get('/api/albumRomantic')
    //         .then((Response) => {
    //             console.log("response.data of romantic", Response.data)
    //             setRoman(Response.data)
    //         })

    //     return (
    //         <>
    //             {
    //                 <main className="px-10 pt-10">
    //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    //                         {
    //                             roman.map((item) => (
    //                                 <div key={item._id} className="flex flex-row mx-3">
    //                                     {
    //                                         <button
    //                                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
    //                                             className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
    //                                         >
    //                                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
    //                                         </button>
    //                                     }
    //                                 </div>
    //                             ))
    //                         }
    //                     </div>
    //                 </main>
    //             }
    //         </>
    //     )
    // }

    // const Motivation = () => {

    //     axiosInstance
    //         .get('/api/albumMotivation')
    //         .then((Response) => {
    //             setMotiv(Response.data)
    //         })

    //     return (
    //         <>
    //             {
    //                 <main className="px-10 pt-10">
    //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    //                         {
    //                             motiv.map((item) => (
    //                                 <div key={item._id} className="flex flex-row mx-3">
    //                                     {
    //                                         <button
    //                                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
    //                                             className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
    //                                         >
    //                                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
    //                                         </button>
    //                                     }
    //                                 </div>
    //                             ))
    //                         }
    //                     </div>
    //                 </main>
    //             }
    //         </>
    //     )
    // }

    const fetchMore =()=>{
        axiosInstance
          .get(`/api/albumsLive?category=${category}&page=${page}&limit=${limit}`)
            .then((response) => {
                console.log("fetchMore_running")
                console.log("length", response.data.length);
                console.log("response.data", response.data)
                

                newAlbums.current = response.data
               
                if(newAlbums.current.length === 0){
                    setHasMore(false);
                }else{
                     
                setLiveAlbums(prevItems =>[...prevItems, ...newAlbums.current])
                setPage(prev=> prev + 1)

                }
            })
            .catch((error) => {
                console.error("error while fetching live albums", error)
            })
    }

    return (
        <div id="scrollable" className="overflow-auto" style={{ height: "100svh", background: "#0a0a10", color: "#fff", fontFamily: "system-ui, sans-serif" }}>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
                @keyframes albumslive-fu {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .live-a1 { animation: albumslive-fu .45s ease both; }
                .live-a2 { animation: albumslive-fu .45s .09s ease both; }
                .live-a3 { animation: albumslive-fu .45s .18s ease both; }
                .live-a4 { animation: albumslive-fu .45s .27s ease both; }
                .live-tab-btn { transition: color .2s, border-color .2s; }
                .live-tab-btn:hover:not([data-active="true"]) { color: rgba(167,139,250,0.7) !important; }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .live-nav-search, .live-nav-links { display: flex; }
                .live-nav-publish-inline { display: flex; }
                .live-fab-publish { display: none; }

                .live-tabs-row {
                    overflow-x: auto;
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .live-tabs-row::-webkit-scrollbar { display: none; }

                @media (max-width: 768px) {
                    .live-nav-search, .live-nav-links { display: none !important; }
                    .live-nav-publish-inline { display: none !important; }
                    .live-fab-publish { display: flex !important; }

                    .live-hero-wrap { padding-left: 24px !important; padding-right: 24px !important; padding-top: 40px !important; padding-bottom: 32px !important; }
                    .live-top-nav { padding-left: 16px !important; padding-right: 16px !important; }
                    .live-tabs-row { padding-left: 16px !important; padding-right: 16px !important; justify-content: flex-start !important; }
                    .live-tab-btn { padding: 12px 14px !important; font-size: 12px !important; }
                    .live-filter-pills { padding-left: 16px !important; padding-right: 16px !important; }
                    .live-album-grid-main { padding-left: 16px !important; padding-right: 16px !important; }
                    .live-album-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important; gap: 12px !important; }
                }
            `}</style>

            <div className="max-w-[1600px] mx-auto" style={{ paddingBottom: "max(80px, env(safe-area-inset-bottom))" }}>

                {/* ── Top Nav ── */}
                <nav
                    className="live-top-nav flex items-center justify-between px-10 py-4 sticky top-0 z-30"
                    style={{
                        background: "rgba(10,10,16,0.98)",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        backdropFilter: "blur(12px)",
                    }}
                >
                    {/* Left: sidebar + logo */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="flex items-center justify-center w-9 h-9 flex-shrink-0 transition-all duration-150 active:scale-95"
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.09)",
                                borderRadius: 10,
                                color: "#9090b0",
                            }}
                            aria-label="Open sidebar"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="15" y2="12" />
                                <line x1="3" y1="18" x2="18" y2="18" />
                            </svg>
                        </button>
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
                            </svg>
                        </div>
                        <span style={{ fontSize: 15, fontWeight: 600, color: "#e2d9ff", letterSpacing: "-0.3px" }}>Kalams</span>
                    </div>

                    {/* Center: search */}
                    <div
                        className="live-nav-search items-center gap-2 px-3 py-1.5 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", width: 260 }}
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            placeholder="Search albums..."
                            className="bg-transparent outline-none w-full"
                            style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", border: "none" }}
                        />
                    </div>

                    {/* Right: links + avatar + publish */}
                    <div className="flex items-center gap-4">
                        <a className="live-nav-links" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Explore</a>
                        <a className="live-nav-links" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Artists</a>
                        <div className="live-nav-links" style={{ width: 1, height: 18, background: "rgba(255,255,255,0.08)" }} />
                        <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white cursor-pointer"
                            style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)", border: "2px solid rgba(255,255,255,0.1)" }}
                        >
                            A
                        </div>
                        <Link
                            to="/kalam"
                            className="live-nav-publish-inline items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all active:scale-95"
                            style={{ background: "linear-gradient(135deg,#7c4dff,#9c6dff)", boxShadow: "0 2px 10px rgba(124,77,255,0.35)" }}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Publish
                        </Link>
                    </div>
                </nav>

                {/* ── Hero Header ── */}
                <div className="live-hero-wrap relative overflow-hidden px-10 pt-16 pb-12" style={{ background: "#0a0a10" }}>
                    <div style={{ position: "absolute", top: -80, left: -60, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(109,40,217,0.18) 0%,transparent 65%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", bottom: -40, right: -40, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,77,255,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />

                    <div className="max-w-[680px] relative">
                        <div className="live-a1 flex items-center gap-2 mb-5">
                            <div style={{ width: 3, height: 16, borderRadius: 2, background: "linear-gradient(180deg,#8b5cf6,#6d28d9)", flexShrink: 0 }} />
                            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(139,92,246,0.85)" }}>Now Live</span>
                            <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)", margin: "0 4px" }} />
                            <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 10px", borderRadius: 99, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)" }}>
                                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#8b5cf6", display: "inline-block", flexShrink: 0, boxShadow: "0 0 5px rgba(139,92,246,0.8)" }} />
                                <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(167,139,250,0.9)", letterSpacing: "0.05em" }}>{liveAlbums.length} albums</span>
                            </div>
                        </div>

                        <h1
                            className="live-a2"
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: "clamp(52px, 6vw, 80px)",
                                fontWeight: 300, fontStyle: "italic",
                                lineHeight: 0.92, marginBottom: 24, letterSpacing: "-1px",
                            }}
                        >
                            <span style={{ color: "#b8aee0", display: "block" }}>Live</span>
                            <span style={{ fontWeight: 600, fontStyle: "normal", color: "#fff", display: "block", position: "relative", width: "fit-content" }}>
                                Albums
                                <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#7c3aed,#a78bfa,transparent)", borderRadius: 2 }} />
                            </span>
                        </h1>

                        <p className="live-a3" style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, maxWidth: 400, margin: 0 }}>
                            Albums currently trending across the community.
                        </p>
                    </div>
                </div>

                {/* ── Tab Nav ── */}
                <div
                    className="live-a4 live-tabs-row flex items-center justify-center gap-1 px-10"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0a0a10" }}
                >
                    {[
                        { id: "kalams", label: "Kalams",            path: "/social" },
                        { id: "kotw",   label: "Kalam of The Week", path: "/Kotw" },
                        { id: "albums", label: "Albums",            path: null },
                    ].map(({ id, label, path }) => (
                        <Link
                            key={id}
                            to={path ?? "#"}
                            onClick={e => { if (!path) e.preventDefault(); }}
                            data-active={id === "albums"}
                            className="live-tab-btn"
                            style={{
                                padding: "14px 20px",
                                fontSize: 13,
                                fontWeight: id === "albums" ? 600 : 500,
                                textDecoration: "none",
                                color: id === "albums" ? "#a78bfa" : "rgba(255,255,255,0.4)",
                                borderBottom: id === "albums" ? "2px solid #7c4dff" : "2px solid transparent",
                                whiteSpace: "nowrap",
                                display: "inline-block",
                            }}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* ── Filter Pills ── */}
                <div className="live-filter-pills flex items-center gap-2 px-10 py-6">
                    {["all", "romantic", "motivation"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory([cat])}
                            className="capitalize transition-all duration-150"
                            style={{
                                padding: "7px 18px",
                                borderRadius: 99,
                                fontSize: 13,
                                fontWeight: 500,
                                border: category[0] === cat ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)",
                                background: category[0] === cat
                                    ? "linear-gradient(135deg, #7c4dff 0%, #9c6dff 100%)"
                                    : "rgba(255,255,255,0.04)",
                                color: category[0] === cat ? "#fff" : "rgba(255,255,255,0.45)",
                                boxShadow: category[0] === cat ? "0 2px 10px rgba(124,77,255,0.4)" : "none",
                                cursor: "pointer",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ── Album Grid ── */}
                {
                    <main className="live-album-grid-main px-10 pb-20">

                        <InfiniteScroll
                            dataLength={liveAlbums.length} //This is important field to render the next data
                            next={fetchMore}
                            scrollableTarget="scrollable"
                            hasMore={hasMore}
                            loader={
                                <div className="flex justify-center py-8">
                                    <div
                                        className="w-5 h-5 rounded-full border-2 border-violet-600/30 border-t-violet-600"
                                        style={{ animation: "spin 0.8s linear infinite", borderRadius: "50%" }}
                                    />
                                    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                                </div>
                            }
                            endMessage={
                                <p className="text-center py-8 text-white/20 text-xs tracking-widest uppercase font-mono">
                                    ✦ You've seen it all ✦
                                </p>
                            }
                        >

                            <div className="live-album-grid grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>

                                {
                                    liveAlbums.map((item) => (
                                        <div key={item._id}>
                                            {
                                                <button
                                                    onClick={() => Navigate(`/album?albumId=${item._id}`)}
                                                    className="w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-2xl transition-all"
                                                    style={{ animation: "fadeUp 0.4s ease both" }}
                                                >
                                                    <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
                                                </button>
                                            }
                                        </div>
                                    ))
                                }

                            </div>
                        </InfiniteScroll>
                    </main>
                }

                {/* ------------------------------------------------------------------------------------------------------------------------>
                
                <button onClick={()=>setIsRomantic(true)}>rom</button>
                <button onClick={()=>setIsMotivation(true)}>mot</button>

                {isRomantic && <Romantic />}

               { 
               (isRomantic)?<Romantic/>:(isMotivation)?<Motivation/>:  <main className="px-10 pt-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {
                    liveAlbums.map((item) => (
                      <div key={item._id} className="flex flex-row mx-3">
                        {
                          <button
                            onClick={() => Navigate(`/album?albumId=${item._id}`)}
                            className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
                          >
                            <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
                          </button>
                        }
                      </div>
                    ))
                  }
                </div>
              </main>
               
               }
                 */}

            </div>

            {/* ── Floating Publish button (mobile only) ── */}
            <Link
                to="/kalam"
                className="live-fab-publish items-center justify-center"
                style={{
                    position: "fixed",
                    right: "max(20px, env(safe-area-inset-right))",
                    bottom: "max(24px, env(safe-area-inset-bottom))",
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#7c4dff,#9c6dff)",
                    boxShadow: "0 6px 20px rgba(124,77,255,0.5), 0 2px 8px rgba(0,0,0,0.4)",
                    color: "#fff",
                    zIndex: 50,
                }}
                aria-label="Publish"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
            </Link>

        </div>
    )
}

export default AlbumsLive;