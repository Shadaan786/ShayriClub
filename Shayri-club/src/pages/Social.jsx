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


//-------------------------------------------------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>



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

//      {/* ── Browse Header ── */}
// <div
//   className="px-5 pt-7 pb-5 relative overflow-hidden"
//   style={{ background: "#0e0e14" }}
// >
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
//     @keyframes header-fade-up {
//       from { opacity: 0; transform: translateY(10px); }
//       to   { opacity: 1; transform: translateY(0); }
//     }
//     .browse-a1 { animation: header-fade-up 0.45s ease both; }
//     .browse-a2 { animation: header-fade-up 0.45s 0.08s ease both; }
//     .browse-a3 { animation: header-fade-up 0.45s 0.16s ease both; }
//   `}</style>

//   {/* Ambient glow blobs */}
//   <div style={{
//     position: "absolute", top: -40, left: -20,
//     width: 260, height: 260, borderRadius: "50%",
//     background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%, transparent 70%)",
//     pointerEvents: "none",
//   }} />
//   <div style={{
//     position: "absolute", bottom: -60, right: -30,
//     width: 200, height: 200, borderRadius: "50%",
//     background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
//     pointerEvents: "none",
//   }} />

//   {/* "Discover" label */}


//   {/* Title */}
//   <h1
//     className="browse-a2"
//     style={{
//       fontFamily: "'Cormorant Garamond', Georgia, serif",
//       fontSize: "clamp(44px, 13vw, 54px)",
//       fontWeight: 300, fontStyle: "italic",
//       lineHeight: 0.95, marginBottom: 20, letterSpacing: "-0.5px",
//       position: "relative",
//     }}
//   >
//     <span style={{ color: "#c4bde8", display: "block" }}>Browse</span>
//     <span style={{ fontWeight: 600, fontStyle: "normal", color: "#fff", display: "block", position: "relative", width: "fit-content" }}>
//       Kalams
//       <span style={{
//         position: "absolute", bottom: -3, left: 0, right: 0, height: 2,
//         background: "linear-gradient(90deg, #7c3aed, #a78bfa, transparent)",
//         borderRadius: 2,
//       }} />
//     </span>
//   </h1>

//   {/* Subtitle row */}
//   <div className="browse-a3 flex items-center justify-between">
    

//   </div>

//   {/* Stats row */}
 
// </div>

//         {/* ── Top Bar ── */}
//         {/* ── Top Bar ── */}
//         <div
//           className="relative flex items-center justify-between px-4 pb-3.5 sticky top-0 z-30 border-b border-violet-500/10"
//           style={{
//             paddingTop: "max(env(safe-area-inset-top), 20px)",
//             background: "linear-gradient(180deg, #12121c 0%, rgba(12,12,20,0.97) 100%)",
//           }}
//         >
//           {/* Glow divider */}
//           <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-violet-500/35 to-transparent" />

//           {/* Sidebar trigger */}
//           <button
//             onClick={() => setIsOpen(true)}
//             className="flex items-center justify-center w-9 h-9 min-w-[36px]
//               bg-white/5 border border-white/[0.09] rounded-xl
//               text-[#9090b0] hover:text-violet-300 hover:bg-violet-500/10 hover:border-violet-500/30
//               transition-all duration-150 active:scale-95"
//             aria-label="Open sidebar"
//           >
//             <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="12" x2="15" y2="12" />
//               <line x1="3" y1="18" x2="18" y2="18" />
//             </svg>
//           </button>

//           {/* Tab switcher */}
//           <div className="flex items-center bg-white/[0.04] border border-white/[0.07] rounded-full p-[3px] gap-0.5">
//             {[
//               { id: "kalams", label: "Kalams" },
//               { id: "kotw",   label: "Of Week" },
//               { id: "albums", label: "Albums" },
//             ].map(({ id, label }) => (
//               <button
//                 key={id}
//                 onClick={() => handleTabClick(id)}
//                 className={`
//                   px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide
//                   transition-all duration-200 min-h-[30px] active:scale-95 whitespace-nowrap
//                   ${activeTab === id
//                     ? "text-white shadow-[0_2px_12px_rgba(124,77,255,0.45),inset_0_1px_0_rgba(255,255,255,0.15)]"
//                     : "text-[#707090] hover:text-violet-300"
//                   }
//                 `}
//                 style={activeTab === id
//                   ? { background: "linear-gradient(135deg, #7c4dff 0%, #9c6dff 100%)" }
//                   : {}
//                 }
//               >
//                 {label}
//               </button>
//             ))}
//           </div>

//           {/* Publish button */}
//           <Link
//             to="/kalam"
//             className="flex items-center gap-1.5 px-3.5 py-2
//               text-white text-xs font-semibold rounded-full
//               transition-all duration-150 active:scale-95 min-h-[34px]"
//             style={{ background: "linear-gradient(135deg, #7c4dff, #9c6dff)", boxShadow: "0 2px 10px rgba(124,77,255,0.4)" }}
//           >
//             <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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



//---------------------------------------------------------------------------------------------------------------------------->>>


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
//       .get(`/api/social?page=${page}&limit=${limit}`, { withCredentials: true })
//       .then((response) => {
//         setKalamDat(response.data.allKalamsName);
//         customStyles = response.data.allKalamsName.customStyles
//         console.log(response.data);
//         setLength(response.data.allKalamsName.length);
//         setUid(response.data.userId[0]._id);
//         setTotalLength(response.data.totalLength);
//         likedKalams = new Set(response.data.likedKalams)
//         for (const items of likedKalams) {
//           likedKalams2.current.add(items._id)
//         }
//       });
//     setTimeout(() => { console.log("hhhh2", likedKalams2.current) }, 3000)
//     setPage(prev => prev + 1);
//   };

//   useEffect(() => { handle(); }, []);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     if (tab === "albums") navigate("/albumsLive");
//     else if (tab === "kotw") navigate("/Kotw");
//   };

//   const fetchMoreData = () => {
//     console.log("FetchMore_running");
//     axiosInstance
//       .get(`/api/social?page=${page}&limit=${limit}`, { withCredentials: true })
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

//   return (
//     <div
//       id="mainScroll"
//       className="relative overflow-auto"
//       style={{ height: "100svh", WebkitOverflowScrolling: "touch", background: "#0a0a10" }}
//     >
//       <SidebarExample isOpen={isOpen} onClose={() => setIsOpen(false)} />

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
//         @keyframes social-fu {
//           from { opacity: 0; transform: translateY(12px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .s-a1 { animation: social-fu .45s ease both; }
//         .s-a2 { animation: social-fu .45s .09s ease both; }
//         .s-a3 { animation: social-fu .45s .18s ease both; }
//         .s-a4 { animation: social-fu .45s .27s ease both; }
//         .s-tab-btn { transition: color .2s, border-color .2s; }
//         .s-tab-btn:hover:not([data-active="true"]) { color: rgba(167,139,250,0.7) !important; }
//       `}</style>

//       <div
//         className="relative z-20"
//         style={{ paddingBottom: "max(80px, env(safe-area-inset-bottom))" }}
//       >
//         <div className="max-w-[1600px] mx-auto">

//           {/* ── Top Nav ── */}
//           <nav
//             className="flex items-center justify-between px-10 py-4 sticky top-0 z-30"
//             style={{
//               background: "rgba(10,10,16,0.98)",
//               borderBottom: "1px solid rgba(255,255,255,0.06)",
//               backdropFilter: "blur(12px)",
//             }}
//           >
//             {/* Left: sidebar + logo */}
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setIsOpen(true)}
//                 className="flex items-center justify-center w-9 h-9 flex-shrink-0 transition-all duration-150 active:scale-95"
//                 style={{
//                   background: "rgba(255,255,255,0.05)",
//                   border: "1px solid rgba(255,255,255,0.09)",
//                   borderRadius: 10,
//                   color: "#9090b0",
//                 }}
//                 aria-label="Open sidebar"
//               >
//                 <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
//                   <line x1="3" y1="6" x2="21" y2="6" />
//                   <line x1="3" y1="12" x2="15" y2="12" />
//                   <line x1="3" y1="18" x2="18" y2="18" />
//                 </svg>
//               </button>
//               <div
//                 className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
//                 style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)" }}
//               >
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
//                   <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
//                 </svg>
//               </div>
//               <span style={{ fontSize: 15, fontWeight: 600, color: "#e2d9ff", letterSpacing: "-0.3px" }}>Kalams</span>
//             </div>

//             {/* Center: search */}
//             <div
//               className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
//               style={{
//                 background: "rgba(255,255,255,0.05)",
//                 border: "1px solid rgba(255,255,255,0.09)",
//                 width: 260,
//               }}
//             >
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
//                 <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
//               </svg>
//               <input
//                 placeholder="Search kalams..."
//                 className="bg-transparent outline-none w-full"
//                 style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", border: "none" }}
//               />
//             </div>

//             {/* Right: links + avatar + publish */}
//             <div className="flex items-center gap-4">
//               <a style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Explore</a>
//               <a style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", cursor: "pointer" }}>Artists</a>
//               <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.08)" }} />
//               <div
//                 className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white cursor-pointer"
//                 style={{ background: "linear-gradient(135deg,#7c4dff,#c16dff)", border: "2px solid rgba(255,255,255,0.1)" }}
//               >
//                 A
//               </div>
//               <Link
//                 to="/kalam"
//                 className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all active:scale-95"
//                 style={{ background: "linear-gradient(135deg,#7c4dff,#9c6dff)", boxShadow: "0 2px 10px rgba(124,77,255,0.35)" }}
//               >
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
//                   <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
//                 </svg>
//                 Publish
//               </Link>
//             </div>
//           </nav>

//           {/* ── Hero Header ── */}
//           <div
//             className="relative overflow-hidden px-10 pt-16 pb-12"
//             style={{ background: "#0a0a10" }}
//           >
//             {/* Glow blobs */}
//             <div style={{ position: "absolute", top: -80, left: -60, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(109,40,217,0.18) 0%,transparent 65%)", pointerEvents: "none" }} />
//             <div style={{ position: "absolute", bottom: -40, right: -40, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />

//             <div className="max-w-[680px] relative">
//               {/* Discover label */}
//               <div className="s-a1 flex items-center gap-2 mb-5">
//                 <div style={{ width: 3, height: 16, borderRadius: 2, background: "linear-gradient(180deg,#8b5cf6,#6d28d9)", flexShrink: 0 }} />
//                 <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(139,92,246,0.85)" }}>Discover</span>
//               </div>

//               {/* Title */}
//               <h1
//                 className="s-a2"
//                 style={{
//                   fontFamily: "'Cormorant Garamond', Georgia, serif",
//                   fontSize: "clamp(52px, 6vw, 80px)",
//                   fontWeight: 300, fontStyle: "italic",
//                   lineHeight: 0.92, marginBottom: 24, letterSpacing: "-1px",
//                 }}
//               >
//                 <span style={{ color: "#b8aee0", display: "block", fontFamily:"Great Vibes" }}>Browse</span>
//                 <span style={{ fontWeight: 800, fontStyle: "normal", color: "#fff", display: "block", fontFamily:"Great Vibes", position: "relative", width: "fit-content" }}>
//                   Kalams
//                   <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#7c3aed,#a78bfa,transparent)", borderRadius: 2 }} />
//                 </span>
//               </h1>

//               {/* Subtitle + stats */}
//               <div className="s-a3 flex items-center gap-6">
//                 <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, maxWidth: 380, margin: 0 }}>
//                   Poetry, qawwali &amp; soulful verses — all in one place.
//                 </p>
//                 <div className="flex gap-5 flex-shrink-0 pl-6" style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}>
//                   <div>
//                     <div style={{ fontSize: 20, fontWeight: 700, color: "#e2d9ff", letterSpacing: "-0.5px" }}>{totalLength || "—"}</div>
//                     <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>Kalams</div>
//                   </div>
//                   <div>
//                     <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 2 }}>
//                       <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6", display: "inline-block", boxShadow: "0 0 6px rgba(139,92,246,0.8)" }} />
//                       <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(167,139,250,0.9)", letterSpacing: "0.02em" }}>Live</span>
//                     </div>
//                     <div style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Feed</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── Tab Nav (below header) ── */}
//           <div
//            className="s-a4 flex items-center justify-center gap-1 px-10"
//             style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "#0a0a10" }}
//           >
//             {[
//               { id: "kalams", label: "Kalams" },
//               { id: "kotw",   label: "Kalam of The Week" },
//               { id: "albums", label: "Albums" },
//             ].map(({ id, label }) => (
//               <button
//                 key={id}
//                 onClick={() => handleTabClick(id)}
//                 data-active={activeTab === id}
//                 className="s-tab-btn"
//                 style={{
//                   padding: "14px 20px",
//                   fontSize: 13,
//                   fontWeight: activeTab === id ? 600 : 500,
//                   border: "none",
//                   background: "transparent",
//                   color: activeTab === id ? "#a78bfa" : "rgba(255,255,255,0.4)",
//                   cursor: "pointer",
//                   borderBottom: activeTab === id ? "2px solid #7c4dff" : "2px solid transparent",
//                   whiteSpace: "nowrap",
//                 }}
//               >
//                 {label}
//               </button>
//             ))}
//           </div>

//           {/* ── Feed ── */}
//           <InfiniteScroll
//             dataLength={kalamDat.length}
//             next={fetchMoreData}
//             scrollableTarget="mainScroll"
//             hasMore={hasMore}
//             loader={
//               <div className="flex justify-center py-8">
//                 <div
//                   className="w-5 h-5 rounded-full border-2 border-violet-600/30 border-t-violet-600"
//                   style={{ animation: "spin 0.8s linear infinite" }}
//                 />
//                 <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//               </div>
//             }
//             endMessage={
//               <p className="text-center py-8 text-white/20 text-xs tracking-widest uppercase font-mono">
//                 ✦ You've reached the end ✦
//               </p>
//             }
//           >
//             <div className="flex flex-col items-center pt-6 gap-8 px-4 pb-10">
//               {kalamDat.map((item) => (
//                 <div key={item._id} className="w-full max-w-[520px]">
//                   {
//                     setTimeout(() => { console.log("hhh", likedKalams2) }, 3000)
//                   }
//                   <NewKalam
//                     customStyles={item.customStyles}
//                     content={item.content}
//                     kalId={item._id}
//                     mUid={uid}
//                     userName={item.name}
//                     time={item.createdAt}
//                     type={item.type}
//                     title={item.name}
//                     isImage={isImage}
//                     isLiked2={likedKalams2.current.has(item._id)}
//                   />
//                 </div>
//               ))}
//             </div>
//           </InfiniteScroll>

//         </div>
//       </div>
//     </div>
//   );
// };

//------------------------------------------------------------------------------------------------------------------------------->
import axiosInstance from "../Apis/axiosInstance";
import { useState, useEffect, useRef } from "react";
import { Card } from "./components/Card";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SidebarExample from "./components/Sidebar"
import InfiniteScroll from "react-infinite-scroll-component";
import NewKalam from "./components/NewKalam";
import { type } from "firebase/firestore/lite/pipelines";
import { Footer } from "@/Bg";


// ── Poetry-aesthetic font options ──────────────────────────────────────────
const TITLE_FONTS = [
  { id: "cormorant",       label: "Cormorant Garamond", sample: "یاد کا لمحہ",  family: "'Cormorant Garamond', serif",      googleParam: "Cormorant+Garamond:ital,wght@1,300;1,400;1,600" },
  { id: "playfair",        label: "Playfair Display",   sample: "Shaam-e-Ghazal", family: "'Playfair Display', serif",          googleParam: "Playfair+Display:ital,wght@1,400;1,700" },
  { id: "im_fell",         label: "IM Fell English",    sample: "Dil ki Baat",    family: "'IM Fell English', serif",            googleParam: "IM+Fell+English:ital@1" },
  { id: "sorts_mill",      label: "Sorts Mill Goudy",   sample: "Raat Ka Sitara", family: "'Sorts Mill Goudy', serif",           googleParam: "Sorts+Mill+Goudy:ital@1" },
  { id: "spectral",        label: "Spectral",            sample: "Aashiqui",       family: "'Spectral', serif",                   googleParam: "Spectral:ital,wght@1,300;1,400;1,600" },
  { id: "eb_garamond",     label: "EB Garamond",         sample: "Dard-e-Dil",     family: "'EB Garamond', serif",                googleParam: "EB+Garamond:ital,wght@1,400;1,700" },
  { id: "libre_baskerville",label: "Libre Baskerville",  sample: "Tanhai",         family: "'Libre Baskerville', serif",          googleParam: "Libre+Baskerville:ital@1" },
  { id: "gfs_didot",       label: "GFS Didot",           sample: "Mohabbat",       family: "'GFS Didot', serif",                  googleParam: "GFS+Didot" },
  { id: "dm_serif",        label: "DM Serif Display",    sample: "Khwab",          family: "'DM Serif Display', serif",           googleParam: "DM+Serif+Display:ital@1" },
  { id: "cinzel",          label: "Cinzel",              sample: "KALAM",          family: "'Cinzel', serif",                     googleParam: "Cinzel:wght@400;700" },
  { id: "della_respira",   label: "Della Respira",       sample: "Ruh ki Awaaz",   family: "'Della Respira', serif",              googleParam: "Della+Respira" },
  { id: "alice",           label: "Alice",               sample: "Teri Yaad",      family: "'Alice', serif",                      googleParam: "Alice" },
];


const CONTENT_FONTS = [
  { id: "cormorant_body",  label: "Cormorant Garamond", sample: "Har saans mein teri khushbu hai…", family: "'Cormorant Garamond', serif",   googleParam: "Cormorant+Garamond:ital,wght@1,300;1,400" },
  { id: "eb_garamond_body",label: "EB Garamond",         sample: "Main woh sitara hoon jo doob gaya…", family: "'EB Garamond', serif",        googleParam: "EB+Garamond:ital,wght@1,400" },
  { id: "spectral_body",   label: "Spectral Light",      sample: "Zindagi ek ghazal thi, adhoori rahi…", family: "'Spectral', serif",         googleParam: "Spectral:ital,wght@1,300;1,400" },
  { id: "im_fell_body",    label: "IM Fell English",     sample: "Raaton ko taaron se baatein karta hoon…", family: "'IM Fell English', serif", googleParam: "IM+Fell+English:ital@1" },
  { id: "lora",            label: "Lora",                sample: "Tere bina yeh chaand bhi suna lagta hai…", family: "'Lora', serif",          googleParam: "Lora:ital,wght@1,400;1,500" },
  { id: "merriweather",    label: "Merriweather Light",  sample: "Dil ke dareecha se teri jhalak aati hai…", family: "'Merriweather', serif",  googleParam: "Merriweather:ital,wght@1,300" },
  { id: "crimson",         label: "Crimson Pro",         sample: "Aankhon mein teri sirf teri tasveer hai…", family: "'Crimson Pro', serif",   googleParam: "Crimson+Pro:ital,wght@1,300;1,400" },
  { id: "libre_bask_body", label: "Libre Baskerville",   sample: "Tu hai toh sab kuch hai, tu nahi toh kuch bhi nahi…", family: "'Libre Baskerville', serif", googleParam: "Libre+Baskerville:ital@1" },
  { id: "noto_serif",      label: "Noto Serif",          sample: "یہ عشق نہیں آسان بس اتنا سمجھ لیجے", family: "'Noto Serif', serif",         googleParam: "Noto+Serif:ital,wght@1,300;1,400" },
  { id: "noto_nastaliq",   label: "Noto Nastaliq Urdu",  sample: "دل کے آئینے میں تیری تصویر ہے",         family: "'Noto Nastaliq Urdu', serif", googleParam: "Noto+Nastaliq+Urdu:wght@400;600" },
];

// Build Google Fonts URL dynamically from all fonts
const buildGoogleFontsUrl = () => {
  const all = [...TITLE_FONTS, ...CONTENT_FONTS];
  const seen = new Set();
  const params = all
    .filter(f => { if (seen.has(f.googleParam)) return false; seen.add(f.googleParam); return true; })
    .map(f => `family=${f.googleParam}`)
    .join("&");
  return `https://fonts.googleapis.com/css2?${params}&family=DM+Mono:wght@300;400&display=swap`;
};

export const Social = () => {
  const [kalamDat, setKalamDat] = useState([]);
  const [uid, setUid] = useState("");
  const [kalamid, setKalamId] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("kalams");
  // const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const socket = useRef(null);
  const Navigate = useNavigate();
  const [length, setLength] = useState(0);
  const [length2, setLength2] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const newKalams = useRef([null]);
  const [totalLength, setTotalLength] = useState(0);
  const [isImage, setIsImage] = useState(false);
  let customStyles;
  let likedKalams;
  const likedKalams2 = useRef(new Set())
  const page = useRef(1)
  const [isSearch, setIsSearch] = useState(false);
  const newSearchKalams = useRef([null]);
  const page2 = useRef(1);
  const [searchQuery, setSearchQuery] = useState("")
  const [searchClear, setSearchClear] = useState(false);
  const searchType = useRef("feed_search")
  const [profilePic, setProfilePic] = useState("");
  // const[searchType, setSearchType] = useState("feed_search");
  const [isSearchFocused, setIsSearchFocused] = useState(false); // UI-only: search bar focus/blur width animation

  const handle = () => {
    axiosInstance
      .get(`/api/social?page=1&limit=${limit}&searchType=${searchType.current}`, { withCredentials: true })
      .then((response) => {
        setKalamDat(response.data.allKalamsName);
        customStyles = response.data.allKalamsName.customStyles
        console.log(response.data);
        setLength(response.data.allKalamsName.length);
        // setUid(response.data.userId[0]._id);
        setTotalLength(response.data.totalLength);
        // likedKalams = new Set(response.data.likedKalams)
        // for (const items of likedKalams) {
        //   likedKalams2.current.add(items._id)
        // }
      });
    // setTimeout(() => { console.log("hhhh2", likedKalams2.current) }, 3000)
    page.current = page.current + 1;
  };

  const getUserId=()=>{

    axiosInstance
    .get('/api/userId',{
      withCredentials: true
    }).then((response)=>{
      setUid(response.data._id)
      setProfilePic(response.data.profilePic);
    })
    
  }

  useEffect(() => { handle(); getUserId()}, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "albums") Navigate("/albumsLive");
    else if (tab === "kotw") Navigate("/Kotw");
  };

  const fetchMoreData = () => {
    console.log("FetchMore_running");
    if(isSearch){
      axiosInstance
      .get(`/api/search/kalam?page=${page2.current}&limit=${limit}&searchQuery=${searchQuery}`)
        .then((response)=>{

          console.log("response.data from fetchMoreData if isSearch is true", response.data)

          newSearchKalams.current = response.data.kalamsSearched;
          if(newSearchKalams.current.length === 0) {

            setHasMore(false);
            return
          }else{

                      setKalamDat(prevItems=>[...prevItems, newSearchKalams]);
                      page.current = page.current + 1;
                      setLength2(prev=> prev + 10);



          }



        })
      
    }else{
    axiosInstance
      .get(`/api/social?page=${page.current}&limit=${limit}&searchType=${searchType.current}`, { withCredentials: true })
      .then((response) => {
        newKalams.current = response.data.allKalamsName;
        console.log("checking_newKalams", newKalams.current);
        console.log("CHECKING_TOTAL_LENGTH", totalLength);
        console.log("see1", newKalams.current.length);
        console.log("see2", searchType.current)
        if (newKalams.current.length === 0 && searchType.current === "feed_search") {
          // setHasMore(false);
          // console.log("hasMore is set false")
          searchType.current = "all_kalams"
          console.log("all_kalams type field is ended")
          page.current = 1;

          handleFeed()

        } else if(newKalams.current.length === 0 && searchType.current === "all_kalams"){

         
          setHasMore(false);
          console.log("hasMore is set false")

        }
        else {
              setKalamDat(prevItems => [...prevItems, ...newKalams.current]);
          page.current = page.current + 1;
          setLength(prev => prev + 10);

       
        }
      });
    }
  };

    const searchKalams=()=>{
    axiosInstance
    .get(`/api/search/kalam?page=${page2.current}&limit=${limit}&searchQuery=${searchQuery}`)
    .then((response)=>{
      console.log("response.data from searchKalams module", response.data)
      setKalamDat(response.data.kalamsSearched)

      page2.current = page2.current + 1;

    }
  )
  }

  useEffect(()=>{
    axiosInstance
    .get('/api/likedKalams',{
      withCredentials: true
    })
    .then((response)=>{
      likedKalams = new Set(JSON.parse(response.data))
      console.log("see redis res", likedKalams)
       for (const items of likedKalams) {
          likedKalams2.current.add(items._id)
        }
    })

  }, [])
  const handleFeed=()=>{
    fetchMoreData()
  }

  // ── Sidebar (Browse active) — matches Social.jsx's black/gold/violet theme ──
  const SocialSidebar = () => (
    <aside className="s-sidebar">
      <div className="s-sidebar-links">
        <div className="s-sidebar-section">Navigate</div>
        <a href="/" className="s-sidebar-link">Home</a>
        <a href="/kalam" className="s-sidebar-link">Kalam</a>
        <a href="/Social" className="s-sidebar-link active">Browse</a>
        <a href="/Kotw" className="s-sidebar-link">Kalam of the Week</a>
        <button onClick={() => Navigate('/spaces')} className="s-sidebar-link">Community</button>
        <a href="/albumsLive" className="s-sidebar-link">Library</a>
      </div>
    </aside>
  );

  return (
    <div
      id="mainScroll"
      className="relative overflow-auto"
      style={{ height: "100svh", WebkitOverflowScrolling: "touch", background: "linear-gradient(to right, #000000, #1a0828, #000000)" }}
    >
      <SidebarExample isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <SocialSidebar />

      {/* ── Page-wide ambient glow (was previously scoped to hero only) ── */}
      <div
        style={{
          position: "fixed",
          top: -80,
          left: -60,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(197,160,89,0.10) 0%,transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: -40,
          right: -40,
          width: 340,
          height: 340,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(139,92,246,0.10) 0%,transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('${buildGoogleFontsUrl()}');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: 20px;
          line-height: 1;
        }
        .s-nav-input {
          transition: width 0.3s ease;
        }
        @keyframes social-fu {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .s-a1 { animation: social-fu .45s ease both; }
        .s-a2 { animation: social-fu .45s .09s ease both; }
        .s-a3 { animation: social-fu .45s .18s ease both; }
        .s-a4 { animation: social-fu .45s .27s ease both; }
        .s-tab-btn { transition: color .2s, border-color .2s; }
        .s-tab-btn:hover:not([data-active="true"]) { color: rgba(167,139,250,0.7) !important; }

        /* Hide nav search + links on mobile */
        .s-nav-search, .s-nav-links { display: flex; }
        .s-nav-publish-inline { display: flex; }
        .s-fab-publish { display: none; }
        .s-hero-book { display: block; }

        .s-tabs-row {
          overflow-x: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .s-tabs-row::-webkit-scrollbar { display: none; }

        .k-global-brand { display: flex; align-items: center; gap: 10px; }

        .k-global-logo-wrap { position: relative; display: flex; align-items: center; }
        .k-global-logo-glow {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #f0c060, #f0a080, #f0d890);
          border-radius: 50%; filter: blur(10px); opacity: 0.35;
          transition: opacity 0.4s;
        }
        .k-global-brand:hover .k-global-logo-glow { opacity: 0.6; }
        .k-global-logo-img {
          position: relative; height: 34px; width: auto;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
          transition: transform 0.3s ease;
        }
        .k-global-brand:hover .k-global-logo-img { transform: scale(1.05); }

        .k-global-wordmark {
          position: relative; display: inline-block;
          font-size: 22px; line-height: 1; font-weight: 900; letter-spacing: 0.02em;
        }
        .k-global-wordmark-glow {
          position: absolute; inset: 0; filter: blur(10px); opacity: 0.4;
          background: linear-gradient(90deg, #f0c060, #e8a0b0, #f0a080);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          font-family: 'Playfair Display', serif;
        }
        .k-global-wordmark-text { position: relative; }
        .k-global-wm-a {
          font-family: 'Dancing Script', cursive;
          background: linear-gradient(90deg, #f0d890, #f0c060);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .k-global-wm-ur {
          font-family: 'Noto Nastaliq Urdu', serif;
          display: inline-block; margin: 0 -1px; transform: translateY(2px);
          background: linear-gradient(90deg, #e8a0b0, #d4a0c0, #f0a080);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* ── Left sidebar (matches Social.jsx black/gold theme) ─────────────── */
        .s-sidebar {
          display: none;
          flex-direction: column;
          width: 220px;
          position: fixed;
          top: 76px;
          bottom: 0;
          left: 0;
          overflow-y: auto;
          background: linear-gradient(180deg, #000000, #140620);
          border-right: 1px solid rgba(78,70,57,0.3);
          z-index: 25;
        }
        @media (min-width: 1024px) { .s-sidebar { display: flex; } }

        .s-sidebar-links {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
        }

        .s-sidebar-section {
          font-family: 'Inter', sans-serif;
          font-size: 10px; font-weight: 600; color: rgba(209,197,180,0.4);
          letter-spacing: 0.25em; text-transform: uppercase;
          margin: 0 0 14px 4px;
        }
        .s-sidebar-link {
          display: flex; align-items: center;
          width: 100%; text-align: left;
          padding: 10px 10px 10px 14px;
          margin-bottom: 2px;
          font-family: 'Inter', sans-serif;
          font-size: 12px; font-weight: 500; letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #d1c5b4; text-decoration: none;
          border: none; border-left: 2px solid transparent;
          cursor: pointer; background: none;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .s-sidebar-link:hover { color: #e9c176; }
        .s-sidebar-link.active {
          color: #e9c176;
          border-left-color: #e9c176;
          font-weight: 700;
        }

        /* Shifts page content right on desktop to make room for the sidebar */
        @media (min-width: 1024px) {
          .s-page-body { margin-left: 220px; }
        }

        @media (max-width: 768px) {
          .s-nav-search, .s-nav-links { display: none !important; }
          .s-nav-publish-inline { display: none !important; }
          .s-fab-publish { display: flex !important; }
          .s-hero-book { display: none !important; }

          .s-hero-wrap { padding-left: 24px !important; padding-right: 24px !important; padding-top: 40px !important; padding-bottom: 32px !important; }
          .s-hero-stats { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .s-hero-stats > div:last-child { padding-left: 0 !important; border-left: none !important; }
          .s-top-nav { padding-left: 16px !important; padding-right: 16px !important; }
          .s-tabs-row { padding-left: 16px !important; padding-right: 16px !important; justify-content: flex-start !important; }
          .s-tab-btn { padding: 12px 14px !important; font-size: 12px !important; }
        }
      `}</style>

      {/* ── Top Nav — full width, FIXED so it stays on screen while scrolling ── */}
      <nav
        className="s-top-nav flex items-center justify-between px-10 py-4"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          background: "linear-gradient(to right, #000000, #1a0828, #000000)",
          borderBottom: "1px solid rgba(78,70,57,0.3)",
        }}
      >
      <div
        className="max-w-[1600px] mx-auto w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          columnGap: 24,
        }}
      >
        {/* Left: brand only */}
        <div className="flex items-center">
          <div className="k-global-brand">
            <div className="k-global-logo-wrap">
              <div className="k-global-logo-glow" />
              <img src="/logo2.svg" alt="Alfaz Logo" className="k-global-logo-img" />
            </div>
            <h1 className="k-global-wordmark">
              <span aria-hidden="true" className="k-global-wordmark-glow">Alfaz</span>
              <span className="k-global-wordmark-text">
                <span className="k-global-wm-a">A</span>
                <bdi className="k-global-wm-ur">لف</bdi>
                <span className="k-global-wm-a">az</span>
              </span>
            </h1>
          </div>
        </div>

        {/* Center: nav links */}
        <div className="s-nav-links hidden md:flex items-center gap-10" style={{ justifySelf: "center" }}>
          <a href="/kalam"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: "0.1em",
              fontWeight: 700,
              color: "#e9c176",
              borderBottom: "2px solid #e9c176",
              paddingBottom: 4,
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            Kalam
          </a>
          <button onClick={() => Navigate('/spaces')}>
            <a className="nav-link-transition"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                letterSpacing: "0.1em",
                fontWeight: 500,
                color: "#d1c5b4",
                cursor: "pointer",
                textTransform: "uppercase",
                position: "relative",
              }}
            >
              Community
            </a>
          </button>
          <button>
            <a className="nav-link-transition"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                letterSpacing: "0.1em",
                fontWeight: 500,
                color: "#d1c5b4",
                cursor: "pointer",
                textTransform: "uppercase",
                position: "relative",
              }}
            >
              Browse
            </a>
          </button>
          <button onClick={() => Navigate('/albumsLive')}>
            <a className="nav-link-transition"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                letterSpacing: "0.1em",
                fontWeight: 500,
                color: "#d1c5b4",
                cursor: "pointer",
                textTransform: "uppercase",
                position: "relative",
              }}
            >
              Library
            </a>
          </button>
        </div>

        {/* Right: search + publish + avatar */}
        <div className="flex items-center gap-6" style={{ justifySelf: "end" }}>
          <div className="s-nav-search relative hidden lg:flex items-center">
      <span
        className="material-symbols-outlined absolute left-3"
        style={{ color: "#9a8f80", pointerEvents: "none" }}
      >
        search
      </span>
      <input
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setIsSearchFocused(false)}
        onChange={(e) => { setSearchQuery(e.target.value); setIsSearch(true); (e.target.value.trim() === "") ? handle() : null }}
        placeholder="Search archive..."
        type="text"
        className="s-nav-input outline-none"
        style={{
          background: "#1a1c1c",
          borderBottom: `1px solid ${isSearchFocused ? "#e9c176" : "rgba(78,70,57,0.3)"}`,
          color: "#e2e2e2",
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          letterSpacing: "0.05em",
          padding: "8px 40px 8px 40px",
          width: isSearchFocused ? 320 : 256,
          transition: "all 0.3s ease",
        }}
      />
      <button
        onClick={searchKalams}
        aria-label="Search"
        className="absolute right-2 flex items-center justify-center"
        style={{
          color: "#e9c176",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 4,
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
          search
        </span>
      </button>
    </div>

          <div className="flex items-center gap-4">
            <Link
              to="/kalam"
              className="s-nav-publish-inline items-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                letterSpacing: "0.1em",
                fontWeight: 600,
                padding: "8px 24px",
                border: "1px solid #e9c176",
                color: "#e9c176",
                background: "transparent",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(233,193,118,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              Publish
            </Link>

            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer"
              style={{
                border: "1px solid rgba(78,70,57,0.5)",
                color: "#e9c176",
                background: "#1a1c1c",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e9c176"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(78,70,57,0.5)"; }}
            >
              <img onClick={() => Navigate(`/profile?userId=${uid}`)} className="h-full rounded-full" src={profilePic} alt="" />
            </div>
          </div>
        </div>
      </div>
      </nav>

      <div
        className="relative z-20 s-page-body"
        style={{ paddingTop: 76, paddingBottom: "max(80px, env(safe-area-inset-bottom))" }}
      >
        <div className="max-w-[1600px] mx-auto">

          {/* ── Hero Header ── */}
          

          {/* ── Tab Nav (below header) ── */}
          {/* <div
           className="s-a4 s-tabs-row flex items-center justify-center gap-1 px-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "linear-gradient(to right, #000000, #1a0828, #000000)" }}
          >
            {[
              { id: "kalams", label: "Kalams" },
              { id: "kotw",   label: "Kalam of The Week" },
              { id: "albums", label: "Albums" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleTabClick(id)}
                data-active={activeTab === id}
                className="s-tab-btn"
                style={{
                  padding: "14px 20px",
                  fontSize: 13,
                  fontWeight: activeTab === id ? 600 : 500,
                  border: "none",
                  background: "transparent",
                  color: activeTab === id ? "#a78bfa" : "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  borderBottom: activeTab === id ? "2px solid #7c4dff" : "2px solid transparent",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </button>
            ))}
          </div> */}

{
  console.log("seeeeeeeee kalamDat", kalamDat)
}
          {/* ── Feed ── */}
          {
            (isSearch)?
            <InfiniteScroll
            dataLength={kalamDat.length}
            next={fetchMoreData}
            scrollableTarget="mainScroll"
            hasMore={hasMore}
            loader={
              <div className="flex justify-center py-8">
                <div
                  className="w-5 h-5 rounded-full border-2 border-violet-600/30 border-t-violet-600"
                  style={{ animation: "spin 0.8s linear infinite" }}
                />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            }
            endMessage={
              <p className="text-center py-8 text-white/20 text-xs tracking-widest uppercase font-mono">
                ✦ You've reached the end ✦
              </p>
            }
          >
            {
              console.log("kalamDat", kalamDat)
            }
            <div className="flex flex-col items-center pt-6 gap-8 px-4 pb-10">
            
            <div
                className="flex flex-col items-center pt-6 gap-8 px-4 pb-10"
                style={{ minHeight: "120vh" }}
              >

              {kalamDat.map((item) => (
                <div key={item._id} className="w-full max-w-[520px]">
                  
                  {

                    console.log("likes!!!!!!!!!", item.createdBy.name)
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
                    isImage={item.customStyles.isImage}
                    imageSrc={item.customStyles.imageSrc}
                    authorName={item.createdBy.name}
                  
                    isLiked2={likedKalams2.current.has(item._id)}
                  />
                </div>
              ))}
              </div>
            </div>
          </InfiniteScroll>:
                    <InfiniteScroll
            dataLength={kalamDat.length}
            next={fetchMoreData}
            scrollableTarget="mainScroll"
            hasMore={hasMore}
            loader={
              <div className="flex justify-center py-8">
                <div
                  className="w-5 h-5 rounded-full border-2 border-violet-600/30 border-t-violet-600"
                  style={{ animation: "spin 0.8s linear infinite" }}
                />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            }
            endMessage={
              <p className="text-center py-8 text-white/20 text-xs tracking-widest uppercase font-mono">
                ✦ You've reached the end ✦
              </p>
            }
          >
            {
              console.log("kalamDat", kalamDat)
            }
            <div className="flex flex-col items-center pt-6 gap-8 px-4 pb-10">
            
            <div
                className="flex flex-col items-center pt-6 gap-8 px-4 pb-10"
                style={{ minHeight: "120vh" }}
              >

              {kalamDat.map((item) => (
                <div key={item._id} className="w-full max-w-[520px]">
                  {
                    setTimeout(() => { console.log("hhh", likedKalams2) }, 3000)
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
                    isImage={isImage}
                    isLiked2={likedKalams2.current.has(item._id)}
                  />
                </div>
              ))}
              </div>
            </div>
          </InfiniteScroll>
          
          }


        </div>
      </div>

      {/* ── Floating Publish button (mobile only) ── */}
      <Link
        to="/kalam"
        className="s-fab-publish items-center justify-center"
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
      <Footer />
    </div>
  );
  
};