// import axiosInstance from "../Apis/axiosInstance";
// import { useState, useEffect, useContext, useRef } from "react";
// import { Card } from "./components/Card";
// import LightRays from "./Bg2";
// import StarryBackground from "./components/StarryBackground";
// import {Link} from "react-router-dom";
// // import { Sidebar } from "lucide-react";
// import SidebarExample from "./components/Sidebar"
// // import { ContextProvider, MyContext } from "./LikeContext";


// export const Social = () => {
//   const [kalamDat, setKalamDat] = useState([]);
//   const [uid, setUid] = useState("");
//   const [kalamid, setKalamId] = useState("");
//   const [isReady, setIsReady] = useState(false);
//   const[isOpen, setIsOpen] = useState(false);
//   // const {kId} = useContext(MyContext)
//    const socket = useRef(null);
  

//   const handle = () => {
//     axiosInstance
//       .get("/api/social",{

//         withCredentials: true
//       })
//       .then((response) => {
//         setKalamDat(response.data.allKalamsName);
//         console.log(response.data)
//         setUid(response.data.userId[0]._id)
//       });
//   };

//   useEffect(() => {
//     handle();
//   }, []);

   

// // useEffect(()=>{


// //    socket.current = new WebSocket("ws://localhost:8080?username=Bob");
// //    console.log("Hello Checking")

// //    socket.current.onopen = () =>{

// //     console.log("connected sucessfully");
// //     setIsReady(true);

// //    }
// // }, [])


// // useEffect(()=>{

// //   if (!isReady){
// //     return;
// //   }

// //   if (!kId){
// //     return;
// //   }

// //     socket.current.send(JSON.stringify({
// //     "type": "kalam_like",

// //     "payload":{
        
// //         "uid": kId,
// //         "kalamUid": "69768a001010ab14e9a4ea81"
        
// //     }
// // }));
  
// // }, [kId, isReady])





//   return (
//     <div className="relative min-h-screen bg-black">

//       <SidebarExample isOpen={isOpen} onClose={()=>setIsOpen(false)} />

//         <button onClick={()=>setIsOpen(true)}>Open Sidebar</button>

//       {/* Fixed Light rays (deep background) - CHANGED TO FIXED */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         {/* <LightRays /> */}
//       </div>

//       {/* Fixed Stars (above rays, still background) - CHANGED TO FIXED */}


//       {/* <div className="fixed inset-0 z-[1] pointer-events-none">
//         <StarryBackground />
//       </div> */}

//       {/* Scrollable UI / Content */}
//       <div className="relative z-20 pt-9 pb-20">
//         <div className="flex flex-col items-center">
//           <Link 
//             to="/kalam"
//             className="mb-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
//           >
//             Publish
//           </Link>

//           {kalamDat.map((item) => (

//             <>
//             <Card
//               key={item._id}
//               kalam={item.content}
//               kalId={item._id}
//               mUid={uid}
//               userName={item.name}
//               time={item.createdAt}
//               type={item.type}
//             />
            
//             <br /><br /><br /><br /><br />
            

//             </>
//           )
          
          
//           )}
//         </div>
//       </div>

//     </div>
//   );
// };

//-------------------------------------------------------------------------------------------------------------------------------->






// import axiosInstance from "../Apis/axiosInstance";
// import { useState, useEffect, useContext, useRef } from "react";
// import { Card } from "./components/Card";
// import LightRays from "./Bg2";
// import StarryBackground from "./components/StarryBackground";
// import { Link, useNavigate } from "react-router-dom";
// // import { Sidebar } from "lucide-react";
// import SidebarExample from "./components/Sidebar"
// // import { ContextProvider, MyContext } from "./LikeContext";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { pre } from "framer-motion/client";
// import NewKalam from "./components/NewKalam";


// export const Social = () => {
//   const [kalamDat, setKalamDat] = useState([]);
//   const [uid, setUid] = useState("");
//   const [kalamid, setKalamId] = useState("");
//   const [isReady, setIsReady] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("kalams"); // "kalams" | "albums"
//   const[page, setPage] = useState(1);
//   const[limit, setLimit] = useState(10);
//   // const {kId} = useContext(MyContext)
//   const socket = useRef(null);
//   const navigate = useNavigate();
//   const[length, setLength] = useState(0)
//   // const[newKalams, setNewKalams] = useState([]);
//   const[hasMore, setHasMore] = useState(true);
//   const newKalams = useRef([null]);
//   const[totalLength, setTotalLength] = useState(0);
//   const [isImage, setIsImage] = useState(false)

//   const handle = () => {
//     axiosInstance
//       .get(`/api/social?page=${page}&limit=${limit}`, {
//         withCredentials: true
//       })
//       .then((response) => {
//         setKalamDat(response.data.allKalamsName);
//         console.log(response.data)
//         setLength(response.data.allKalamsName.length)
//         setUid(response.data.userId[0]._id)
//         setTotalLength(response.data.totalLength);
//       });

//       setPage(prev=>prev + 1);

//   };

//   useEffect(() => {
//     handle();
//   }, []);


// // useEffect(()=>{


// //    socket.current = new WebSocket("ws://localhost:8080?username=Bob");
// //    console.log("Hello Checking")

// //    socket.current.onopen = () =>{

// //     console.log("connected sucessfully");
// //     setIsReady(true);

// //    }
// // }, [])


// // useEffect(()=>{

// //   if (!isReady){
// //     return;
// //   }

// //   if (!kId){
// //     return;
// //   }

// //     socket.current.send(JSON.stringify({
// //     "type": "kalam_like",

// //     "payload":{
        
// //         "uid": kId,
// //         "kalamUid": "69768a001010ab14e9a4ea81"
        
// //     }
// // }));
  
// // }, [kId, isReady])


//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     if (tab === "albums") {
//       navigate("/albumsLive");
//     }
//   };


//    const fetchMoreData=()=>{

//     console.log("FetchMore_running")

//      axiosInstance
//       .get(`/api/social?page=${page}&limit=${limit}`, {
//         withCredentials: true
//       })
//       .then((response) => {
//         // setKalamDat(prevItems=> prevItems.concat(kalamDat))
//         newKalams.current = response.data.allKalamsName;
//         console.log("checking_newKalams", newKalams.current)
//         console.log("CHECKING_TOTAL_LENGTH", totalLength)
//         if(newKalams.current.length === 0){
//           setHasMore(false);
//         }else{
//           setKalamDat(prevItems=> [...prevItems, ...newKalams.current]);
//            setPage(prev=>prev + 1);
//            setLength(prev=>prev + 10);
//         }

       

        
//         // console.log(response.data)
//         // setLength(response.data.allKalamsName.length)
//         // setUid(response.data.userId[0]._id)
//       });

//   }

//   return (
//     <div id="mainScroll" className="relative h-screen overflow-auto bg-[#000000]">

//       <SidebarExample isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       {/* Fixed Light rays (deep background) - CHANGED TO FIXED */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         {/* <LightRays /> */}
//       </div>

//       {/* Fixed Stars (above rays, still background) - CHANGED TO FIXED */}

//       {/* <div className="fixed inset-0 z-[1] pointer-events-none">
//         <StarryBackground />
//       </div> */}

//       {/* Scrollable UI / Content */}
//       <div className="relative z-20 pb-20">

//         {/* ── Top Bar ── */}
//         <div className="flex items-center justify-between px-6 pt-6 pb-4">

//           {/* Sidebar trigger */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="
//               flex items-center justify-center w-9 h-9
//               bg-[#1c1c1e] border border-[#2e2e30] rounded-xl
//               text-[#a0a0a6] hover:text-[#e0e0e0] hover:bg-[#242426]
//               transition-all duration-150
//             "
//             aria-label="Open sidebar"
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="18" x2="21" y2="18" />
//             </svg>
//           </button>

//           {/* Kalams / Albums Toggle */}
//           <div className="flex items-center bg-[#1a1a1c] border border-[#2a2a2e] rounded-full p-1 gap-1">
//             <button
//               onClick={() => handleTabClick("kalams")}
//               className={`
//                 px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200
//                 ${activeTab === "kalams"
//                   ? "bg-violet-600 text-white shadow-sm"
//                   : "text-[#888] hover:text-[#ccc]"
//                 }
//               `}
//             >
//               Kalams
//             </button>
//             <button
//               onClick={() => handleTabClick("albums")}
//               className={`
//                 px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200
//                 ${activeTab === "albums"
//                   ? "bg-violet-600 text-white shadow-sm"
//                   : "text-[#888] hover:text-[#ccc]"
//                 }
//               `}
//             >
//               Albums
//             </button>
//           </div>

//           {/* Publish button */}
//           <Link
//             to="/kalam"
//             className="
//               flex items-center gap-1.5 px-4 py-2
//               bg-violet-600 hover:bg-violet-700
//               text-white text-sm font-medium rounded-full
//               transition-all duration-150
//             "
//           >
//             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="12" y1="5" x2="12" y2="19" />
//               <line x1="5" y1="12" x2="19" y2="12" />
//             </svg>
//             Publish
//           </Link>

//         </div>

//         {/* ── Feed ── */}

//         {
//           console.log("len" ,kalamDat.length)
          
//         }
//         {
//           console.log("hasMore", hasMore )
//         }

        

//         <InfiniteScroll
//   dataLength={kalamDat.length} //This is important field to render the next data
//   next={fetchMoreData}
//   scrollableTarget= "mainScroll"
//   hasMore={hasMore}
//   loader={<h4>Loading...</h4>}
//   endMessage={
//     <p style={{ textAlign: 'center' }}>
//       <b>Yay! You have seen it all</b>
//     </p>
//   }
// >



//         <div className="flex flex-col items-center pt-4">
//           {kalamDat.map((item) => (

//             <>
//             {/* <Card
//               key={item._id}
//               kalam={item.content}
//               kalId={item._id}
//               mUid={uid}
//               userName={item.name}
//               time={item.createdAt}
//               type={item.type}
//             /> */}
//             <NewKalam
//               // key={item._id}
//               key={item._id}
//               content={item.content}
//               kalId={item._id}
//               mUid={uid}
//               userName={item.name}
//               time={item.createdAt}
//               type={item.type}
//               title={item.name}
//               badgeBg={item.customStyles.badgeBg}
//               badgeBorder={item.customStyles.badgeBorder}
//               autoMainColor={item.customStyles.autoMainColor}
//               resolvedTitleColor={item.customStyles.resolvedTitleColor}
//               titleFs={item.customStyles.titleFs}
//               resolvedTitleFamily={item.customStyles.resolvedTitleFamily}
//               resolvedContentFamily={item.customStyles.resolvedContentFamily}
//               contentFs={item.customStyles.contentFs}
//               subColor={item.customStyles.subColor}
//               backdrop={item.customStyles.backdrop}
//               resolvedTextColor={item.customStyles.resolvedTextColor}
//               activeMoods={item.customStyles.activeMoods}
//               bgTab={item.customStyles.bgTab}
//               customColor={item.customStyles.customColor}
//               selectedColor={item.customStyles.selectedColor}
//               bgOpacity={item.customStyles.bgOpacity}
//               scrim={item.customStyles.scrim}
//               isImage={isImage}
              
              
//             />

//             <br /><br /><br /><br /><br />

//             </>
//           ),


          
//             console.log("checking length", length)
          


          
//           )}
//         </div>

//         </InfiniteScroll>
        

//       </div>
//       {/* <button onClick={fetchMoreData}>check</button> */}

//     </div>
//   );
// };





//------------------------------------------------------------------------------------------------------>



// import axiosInstance from "../Apis/axiosInstance";
// import { useState, useEffect, useRef } from "react";
// import { Card } from "./components/Card";
// import { Link, useNavigate } from "react-router-dom";
// import SidebarExample from "./components/Sidebar"
// import InfiniteScroll from "react-infinite-scroll-component";
// import NewKalam from "./components/NewKalam";
// import { type } from "firebase/firestore/lite/pipelines";


// export const Social = () => {
//   const [kalamDat, setKalamDat] = useState([]);
//   const [uid, setUid] = useState("");
//   const [kalamid, setKalamId] = useState("");
//   const [isReady, setIsReady] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("kalams");
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const socket = useRef(null);
//   const navigate = useNavigate();
//   const [length, setLength] = useState(0);
//   const [hasMore, setHasMore] = useState(true);
//   const newKalams = useRef([null]);
//   const [totalLength, setTotalLength] = useState(0);
//   const [isImage, setIsImage] = useState(false);
//   let customStyles;
//   let likedKalams;
//   const likedKalams2 = useRef(new Set())

//   const handle = () => {
//     axiosInstance
//       .get(`/api/social?page=${page}&limit=${limit}`, {
//         withCredentials: true
//       })
//       .then((response) => {
//         setKalamDat(response.data.allKalamsName);
//         customStyles = response.data.allKalamsName.customStyles
//         console.log(response.data);
//         setLength(response.data.allKalamsName.length);
//         setUid(response.data.userId[0]._id);
//         setTotalLength(response.data.totalLength);
//         likedKalams = new Set(response.data.likedKalams)

//            for (const items of likedKalams){

//           likedKalams2.current.add(items._id)
          
//         }
//       });


       

//          setTimeout(()=>{

//       console.log("hhhh2", likedKalams2.current)

//   }, 3000)


//     setPage(prev => prev + 1);
//   };

 


//   useEffect(() => {
//     handle();
//   }, []);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     if (tab === "albums") {
//       navigate("/albumsLive");
//     }else if(tab === "kotw"){
//       navigate("/Kotw");
//     }
//   };

//   const fetchMoreData = () => {
//     console.log("FetchMore_running");
//     axiosInstance
//       .get(`/api/social?page=${page}&limit=${limit}`, {
//         withCredentials: true
//       })
//       .then((response) => {
//         newKalams.current = response.data.allKalamsName;
//         console.log("checking_newKalams", newKalams.current);
//         console.log("CHECKING_TOTAL_LENGTH", totalLength);
//         if (newKalams.current.length === 0) {
//           setHasMore(false);
//         } else {
//           setKalamDat(prevItems => [...prevItems, ...newKalams.current]);
//           setPage(prev => prev + 1);
//           setLength(prev => prev + 10);
//         }
//       });
//   };

//   // useEffect(()=>{
//   //   axiosInstance
//   //   .get('/api/isLiked',{
//   //     withCredentials: true
//   //   }).then((response)=>{
  
//   //     console.log("response.data", response.data);
//   //     likedKalams = new Set(response.data);
//   //     console.log("likedKalams", likedKalams)
//   //     console.log("checking .has", likedKalams.has({_id: '6a19d9f536cd50a90f0cea74'}))
//   //     for(const item of likedKalams){

//   //       likedKalams2.add(item._id);
        
//   //     }
//   //     console.log("Checking_likedKalams2", likedKalams2)
//   //     console.log("checking.has again", likedKalams2.has('6a19d9f536cd50a90f0cea74'))
//   //     console.log("he he",likedKalams2.keys)
//   //   })
//   // })

//   return (
//     <div
//       id="mainScroll"
//       className="relative overflow-auto bg-black"
//       style={{ height: "100svh", WebkitOverflowScrolling: "touch" }}
//       // {/* 100svh fixes the iOS Safari browser-chrome bug that 100vh has */}
//     >
//       <SidebarExample isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       {/* Scrollable content */}
//       <div className="relative z-20 pb-20" style={{ paddingBottom: "max(80px, env(safe-area-inset-bottom))" }}>

//         {/* ── Top Bar ── */}
//         <div
//           className="flex items-center justify-between px-4 pb-4 sticky top-0 z-30 bg-black/85 backdrop-blur-md border-b border-white/5"
//           style={{ paddingTop: "max(env(safe-area-inset-top), 16px)" }}
//          //paddingTop respects iPhone notch / Dynamic Island 
//         >

//           {/* Sidebar trigger */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="
//               flex items-center justify-center w-9 h-9 min-w-[36px]
//               bg-[#1c1c1e] border border-[#2e2e30] rounded-xl
//               text-[#a0a0a6] hover:text-[#e0e0e0] hover:bg-[#242426]
//               transition-all duration-150 active:scale-95
//             "
//             aria-label="Open sidebar"
//           >
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="18" x2="21" y2="18" />
//             </svg>
//           </button>

//           {/* Kalams / Albums Toggle */}
//           <div className="flex items-center bg-[#1a1a1c] border border-[#2a2a2e] rounded-full p-1 gap-1">
//             <button
//               onClick={() => handleTabClick("kalams")}
//               className={`
//                 px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200
//                 min-h-[32px] active:scale-95
//                 ${activeTab === "kalams"
//                   ? "bg-violet-600 text-white shadow-sm"
//                   : "text-[#888] hover:text-[#ccc]"
//                 }
//               `}
//             >
//               Kalams
//             </button>
//             <button
//               onClick={() => handleTabClick("kotw")}
//               className={`
//                 px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200
//                 min-h-[32px] active:scale-95
//                 ${activeTab === "albums"
//                   ? "bg-violet-600 text-white shadow-sm"
//                   : "text-[#888] hover:text-[#ccc]"
//                 }
//               `}
//             >
//               Kalam of The Week
//             </button>
//             <button
//               onClick={() => handleTabClick("albums")}
//               className={`
//                 px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200
//                 min-h-[32px] active:scale-95
//                 ${activeTab === "albums"
//                   ? "bg-violet-600 text-white shadow-sm"
//                   : "text-[#888] hover:text-[#ccc]"
//                 }
//               `}
//             >
//               Albums
//             </button>
//           </div>

//           {/* Publish button */}
//           <Link
//             to="/kalam"
//             className="
//               flex items-center gap-1.5 px-4 py-2
//               bg-violet-600 hover:bg-violet-700 active:scale-95
//               text-white text-sm font-medium rounded-full
//               transition-all duration-150 whitespace-nowrap
//               min-h-[36px]
//             "
//           >
//             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="12" y1="5" x2="12" y2="19" />
//               <line x1="5" y1="12" x2="19" y2="12" />
//             </svg>
//             Publish
//           </Link>

//         </div>

//         {/* ── Feed ── */}
//         <InfiniteScroll
//           dataLength={kalamDat.length}
//           next={fetchMoreData}
//           scrollableTarget="mainScroll"
//           hasMore={hasMore}
//           loader={
//             <div className="flex justify-center py-6">
//               <div
//                 className="w-5 h-5 rounded-full border-2 border-violet-600/30 border-t-violet-600"
//                 style={{ animation: "spin 0.8s linear infinite" }}
//               />
//               <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//             </div>
//           }
//           endMessage={
//             <p className="text-center py-6 text-white/20 text-xs tracking-widest uppercase font-mono">
//               ✦ You've reached the end ✦
//             </p>
//           }
//         >

//           <div className="flex flex-col items-center pt-4 gap-8 px-4">
//             {kalamDat.map((item) => (
//               <div
//                 key={item._id}
//                 className="w-full max-w-[400px]"
//               >

//                 {
//                   // console.log("checking mongoose type", typeof(item._id))
//                   setTimeout(()=>{

//                     console.log("hhh", likedKalams2)

//                   }, 3000)
                  
//                 }
//                 <NewKalam
//                 customStyles={item.customStyles}
//                   content={item.content}
//                   kalId={item._id}
//                   mUid={uid}
//                   userName={item.name}
//                   time={item.createdAt}
//                   type={item.type}
//                   title={item.name}
//                   // badgeBg={item.customStyles.badgeBg}
//                   // badgeBorder={item.customStyles.badgeBorder}
//                   // autoMainColor={item.customStyles.autoMainColor}
//                   // resolvedTitleColor={item.customStyles.resolvedTitleColor}
//                   // titleFs={item.customStyles.titleFs}
//                   // resolvedTitleFamily={item.customStyles.resolvedTitleFamily}
//                   // resolvedContentFamily={item.customStyles.resolvedContentFamily}
//                   // contentFs={item.customStyles.contentFs}
//                   // subColor={item.customStyles.subColor}
//                   // backdrop={item.customStyles.backdrop}
//                   // resolvedTextColor={item.customStyles.resolvedTextColor}
//                   // activeMoods={item.customStyles.activeMoods}
//                   // bgTab={item.customStyles.bgTab}
//                   // customColor={item.customStyles.customColor}
//                   // selectedColor={item.customStyles.selectedColor}
//                   // bgOpacity={item.customStyles.bgOpacity}
//                   // scrim={item.customStyles.scrim}
//                   isImage={isImage}
//                   isLiked2={likedKalams2.current.has(item._id)}
                  
//                 />
//               </div>
//             ))}
//           </div>

//         </InfiniteScroll>

//       </div>
//     </div>
//   );
// };


//-------------------------------------------------------------------------------------------------------------------------------->
import axiosInstance from "../Apis/axiosInstance";
import { useState, useEffect, useRef } from "react";
import { Card } from "./components/Card";
import { Link, useNavigate } from "react-router-dom";
import SidebarExample from "./components/Sidebar"
import InfiniteScroll from "react-infinite-scroll-component";
import NewKalam from "./components/NewKalam";
import { type } from "firebase/firestore/lite/pipelines";


export const Social = () => {
  const [kalamDat, setKalamDat] = useState([]);
  const [uid, setUid] = useState("");
  const [kalamid, setKalamId] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("kalams");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const socket = useRef(null);
  const navigate = useNavigate();
  const [length, setLength] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const newKalams = useRef([null]);
  const [totalLength, setTotalLength] = useState(0);
  const [isImage, setIsImage] = useState(false);
  let customStyles;
  let likedKalams;
  const likedKalams2 = useRef(new Set())

  const handle = () => {
    axiosInstance
      .get(`/api/social?page=${page}&limit=${limit}`, {
        withCredentials: true
      })
      .then((response) => {
        setKalamDat(response.data.allKalamsName);
        customStyles = response.data.allKalamsName.customStyles
        console.log(response.data);
        setLength(response.data.allKalamsName.length);
        setUid(response.data.userId[0]._id);
        setTotalLength(response.data.totalLength);
        likedKalams = new Set(response.data.likedKalams)

           for (const items of likedKalams){

          likedKalams2.current.add(items._id)
          
        }
      });


       

         setTimeout(()=>{

      console.log("hhhh2", likedKalams2.current)

  }, 3000)


    setPage(prev => prev + 1);
  };

 


  useEffect(() => {
    handle();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "albums") {
      navigate("/albumsLive");
    }else if(tab === "kotw"){
      navigate("/Kotw");
    }
  };

  const fetchMoreData = () => {
    console.log("FetchMore_running");
    axiosInstance
      .get(`/api/social?page=${page}&limit=${limit}`, {
        withCredentials: true
      })
      .then((response) => {
        newKalams.current = response.data.allKalamsName;
        console.log("checking_newKalams", newKalams.current);
        console.log("CHECKING_TOTAL_LENGTH", totalLength);
        if (newKalams.current.length === 0) {
          setHasMore(false);
        } else {
          setKalamDat(prevItems => [...prevItems, ...newKalams.current]);
          setPage(prev => prev + 1);
          setLength(prev => prev + 10);
        }
      });
  };

  // useEffect(()=>{
  //   axiosInstance
  //   .get('/api/isLiked',{
  //     withCredentials: true
  //   }).then((response)=>{
  
  //     console.log("response.data", response.data);
  //     likedKalams = new Set(response.data);
  //     console.log("likedKalams", likedKalams)
  //     console.log("checking .has", likedKalams.has({_id: '6a19d9f536cd50a90f0cea74'}))
  //     for(const item of likedKalams){

  //       likedKalams2.add(item._id);
        
  //     }
  //     console.log("Checking_likedKalams2", likedKalams2)
  //     console.log("checking.has again", likedKalams2.has('6a19d9f536cd50a90f0cea74'))
  //     console.log("he he",likedKalams2.keys)
  //   })
  // })

  return (
    <div
      id="mainScroll"
      className="relative overflow-auto bg-black"
      style={{ height: "100svh", WebkitOverflowScrolling: "touch" }}
      // {/* 100svh fixes the iOS Safari browser-chrome bug that 100vh has */}
    >
      <SidebarExample isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Scrollable content */}
      <div className="relative z-20 pb-20" style={{ paddingBottom: "max(80px, env(safe-area-inset-bottom))" }}>

     {/* ── Browse Header ── */}
<div
  className="px-5 pt-7 pb-5 relative overflow-hidden"
  style={{ background: "#0e0e14" }}
>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
    @keyframes header-fade-up {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .browse-a1 { animation: header-fade-up 0.45s ease both; }
    .browse-a2 { animation: header-fade-up 0.45s 0.08s ease both; }
    .browse-a3 { animation: header-fade-up 0.45s 0.16s ease both; }
  `}</style>

  {/* Ambient glow blobs */}
  <div style={{
    position: "absolute", top: -40, left: -20,
    width: 260, height: 260, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 70%)",
    pointerEvents: "none",
  }} />
  <div style={{
    position: "absolute", bottom: -60, right: -30,
    width: 200, height: 200, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
    pointerEvents: "none",
  }} />

  {/* "Discover" label */}


  {/* Title */}
  <h1
    className="browse-a2"
    style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontSize: "clamp(44px, 13vw, 54px)",
      fontWeight: 300, fontStyle: "italic",
      lineHeight: 0.95, marginBottom: 20, letterSpacing: "-0.5px",
      position: "relative",
    }}
  >
    <span style={{ color: "#c4bde8", display: "block" }}>Browse</span>
    <span style={{ fontWeight: 600, fontStyle: "normal", color: "#fff", display: "block", position: "relative", width: "fit-content" }}>
      Kalams
      <span style={{
        position: "absolute", bottom: -3, left: 0, right: 0, height: 2,
        background: "linear-gradient(90deg, #7c3aed, #a78bfa, transparent)",
        borderRadius: 2,
      }} />
    </span>
  </h1>

  {/* Subtitle row */}
  <div className="browse-a3 flex items-center justify-between">
    

  </div>

  {/* Stats row */}
 
</div>

        {/* ── Top Bar ── */}
        {/* ── Top Bar ── */}
        <div
          className="relative flex items-center justify-between px-4 pb-3.5 sticky top-0 z-30 border-b border-violet-500/10"
          style={{
            paddingTop: "max(env(safe-area-inset-top), 20px)",
            background: "linear-gradient(180deg, #12121c 0%, rgba(12,12,20,0.97) 100%)",
          }}
        >
          {/* Glow divider */}
          <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-violet-500/35 to-transparent" />

          {/* Sidebar trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-9 h-9 min-w-[36px]
              bg-white/5 border border-white/[0.09] rounded-xl
              text-[#9090b0] hover:text-violet-300 hover:bg-violet-500/10 hover:border-violet-500/30
              transition-all duration-150 active:scale-95"
            aria-label="Open sidebar"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="15" y2="12" />
              <line x1="3" y1="18" x2="18" y2="18" />
            </svg>
          </button>

          {/* Tab switcher */}
          <div className="flex items-center bg-white/[0.04] border border-white/[0.07] rounded-full p-[3px] gap-0.5">
            {[
              { id: "kalams", label: "Kalams" },
              { id: "kotw",   label: "Of Week" },
              { id: "albums", label: "Albums" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleTabClick(id)}
                className={`
                  px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide
                  transition-all duration-200 min-h-[30px] active:scale-95 whitespace-nowrap
                  ${activeTab === id
                    ? "text-white shadow-[0_2px_12px_rgba(124,77,255,0.45),inset_0_1px_0_rgba(255,255,255,0.15)]"
                    : "text-[#707090] hover:text-violet-300"
                  }
                `}
                style={activeTab === id
                  ? { background: "linear-gradient(135deg, #7c4dff 0%, #9c6dff 100%)" }
                  : {}
                }
              >
                {label}
              </button>
            ))}
          </div>

          {/* Publish button */}
          <Link
            to="/kalam"
            className="flex items-center gap-1.5 px-3.5 py-2
              text-white text-xs font-semibold rounded-full
              transition-all duration-150 active:scale-95 min-h-[34px]"
            style={{ background: "linear-gradient(135deg, #7c4dff, #9c6dff)", boxShadow: "0 2px 10px rgba(124,77,255,0.4)" }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Publish
          </Link>
        </div>

        {/* ── Feed ── */}
        <InfiniteScroll
          dataLength={kalamDat.length}
          next={fetchMoreData}
          scrollableTarget="mainScroll"
          hasMore={hasMore}
          loader={
            <div className="flex justify-center py-6">
              <div
                className="w-5 h-5 rounded-full border-2 border-violet-600/30 border-t-violet-600"
                style={{ animation: "spin 0.8s linear infinite" }}
              />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          }
          endMessage={
            <p className="text-center py-6 text-white/20 text-xs tracking-widest uppercase font-mono">
              ✦ You've reached the end ✦
            </p>
          }
        >

          <div className="flex flex-col items-center pt-4 gap-8 px-4">
            {kalamDat.map((item) => (
              <div
                key={item._id}
                className="w-full max-w-[400px]"
              >

                {
                  // console.log("checking mongoose type", typeof(item._id))
                  setTimeout(()=>{

                    console.log("hhh", likedKalams2)

                  }, 3000)
                  
                }
                <NewKalam
                customStyles={item.customStyles}
                  content={item.content}
                  kalId={item._id}
                  mUid={uid}
                  userName={item.name}
                  time={item.createdAt}
                  type={item.type}
                  title={item.name}
                  // badgeBg={item.customStyles.badgeBg}
                  // badgeBorder={item.customStyles.badgeBorder}
                  // autoMainColor={item.customStyles.autoMainColor}
                  // resolvedTitleColor={item.customStyles.resolvedTitleColor}
                  // titleFs={item.customStyles.titleFs}
                  // resolvedTitleFamily={item.customStyles.resolvedTitleFamily}
                  // resolvedContentFamily={item.customStyles.resolvedContentFamily}
                  // contentFs={item.customStyles.contentFs}
                  // subColor={item.customStyles.subColor}
                  // backdrop={item.customStyles.backdrop}
                  // resolvedTextColor={item.customStyles.resolvedTextColor}
                  // activeMoods={item.customStyles.activeMoods}
                  // bgTab={item.customStyles.bgTab}
                  // customColor={item.customStyles.customColor}
                  // selectedColor={item.customStyles.selectedColor}
                  // bgOpacity={item.customStyles.bgOpacity}
                  // scrim={item.customStyles.scrim}
                  isImage={isImage}
                  isLiked2={likedKalams2.current.has(item._id)}
                  
                />
              </div>
            ))}
          </div>

        </InfiniteScroll>

      </div>
    </div>
  );
};