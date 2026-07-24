// import { useState, useEffect, useRef } from "react";
// import axiosInstance from "../Apis/axiosInstance";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";
// import { AlbumCard } from "./components/AlbumsCard";
// import ('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
// import { Card } from "./components/Card";
// import { KalamPlayer } from "./components/kalamPlayer";
// // import { Globe } from './components/globe';
// import { Globe } from "lucide-react";
// import axios from "axios";
// // import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";


// export const Album=()=>{

//     const[SearchParams] = useSearchParams();
//     const[dataArrived, setDataArrived] = useState(false);
//     const[data, setData] = useState([]);
//     const[length, setLength] = useState([]);
//     const[statement, setStatement] = useState("You dont have not added any kalams yet"); 
//     const[modalShow, setModalShow] = useState(false);
//     const[modalShow2, setModalShow2] = useState(false);
//     const[kalamList, setKalamList] = useState([]);
//     const[selectedKalams, setSelectedKalams] = useState([]);
//     const[selected, setSelected] = useState(false);
//     const[allVaues, setAllValues] = useState([]);
//     const[albumName, setAlbumName] = useState([]);  
//     const[image, setImage] = useState(false);  // tracking if user uploaded file or not
//     const [file, setFile] = useState([]);  // state for storing user updated file
//     const[isOpen, setIsOpen] = useState(false);
//     const [playerOpen, setPlayerOpen] = useState(false) // State for player modal
//     const [detailsOpen, setDetailsOpen] = useState(false);  // State modal of kalam details
//     const [backgroundVideo, setBackgroundVideo] = useState();
//     const[albumStat, setAlbumStat] = useState("");  // To check is live or not
    
//     const [openIndex, setOpenIndex] = useState(null);
//     const[tracks, setTracks] = useState([]);
  
//     let obj;
//     let keysMap;
//     let keysArray;
//     let keysObject;
    
   

//     const selectedList = useRef(new Map());
//       const scrollRef = useRef(null);

//        // header heights in px
//   const MAX_H = 220; // starting height
//   const MIN_H = 110; // minimum height (shrink limit)

//   const [headerH, setHeaderH] = useState(MAX_H);


//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;

//    const handleScroll = () => {
//       const scrollY = el.scrollTop;

//       // shrink header based on scroll
//       const newHeight = Math.max(MIN_H, MAX_H - scrollY);
//       setHeaderH(newHeight);
//     };

//     el.addEventListener("scroll", handleScroll);
//     return () => el.removeEventListener("scroll", handleScroll);
//   }, []);

   
//     // const[final, setFinal] = useState([]);
//     let final = [];
//     const Navigate = useNavigate();

//     const albumId = SearchParams.get('albumId')
//     console.log("albumId", albumId)

// //      const go = (path) => {
// //     onClose();
// //     Navigate(path);
// //   };

//   useEffect(()=>{




//         axiosInstance
//     .get(`/api/albumKalams?albumId=${albumId}`,{

//       withCredentials: true
//     })

//     .then((response)=>{
//                 console.log(response.data)
//                 const kalamCollection = response.data.albumKalams?.[0]?.kalamCollection;
//                 setDataArrived(true);
//                 setKalamList(response.data.kalamList);
//                 setData(response.data.albumKalams[0].kalamCollection);

//               setAllValues(Object.values(response.data.albumKalams[0].kalamCollection));
//               setAlbumStat(response.data.albumKalams[0].isLive)

//               console.log("checking albumStat", response.data.albumKalams[0].isLive)

//               console.log("checking_allValues",Object.values(response.data.albumKalams[0].kalamCollection))

//               console.log("checkin_allValue_again",response.data.albumKalams )
//               setAlbumName(response.data.albumKalams)
//               console.log("checking albumName", response.data.albumKalams)
                
                
//                 console.log("checking Data", response.data.albumKalams[0].kalamCollection)
//                 console.log("checking_length", response.data.length)
//                 setLength(response.data.length)




//                  setTracks(kalamCollection.map((x) => ({
//                   _id: x.kalam._id,
//                   title: x.kalam.content || "Untitled",
//                   artist: x.kalam.name || "Unknown",         // you said treat name as artist
//                   coverUrl: albumName?.[0]?.coverUrl || "",  // if you have it, else ""
//                   waveformVideoUrl: x.kalam.kalamAudio || "",
//                 })))





//                 // console.log("Kalam length", response.data.kalamCollection.length)
//     })

//     .catch((error)=>{
//         console.error("Error fetching request", error)
//     })

//   }, [])

//   const handleSelect=()=>{

    
//    obj = Object.fromEntries(selectedList.current)
   
//    // Taking keys of map
//    keysMap  = selectedList.current.keys();

//    //Converting iterator to an array
//    keysArray = Array.from(keysMap);

//    //Converting Array to Object
//    keysObject = Object.assign({}, keysArray);

//    console.log("values_Object", keysObject)


               
//     axiosInstance

//     .post(`/api/selection?albumId=${albumId}`, {
//       list: keysObject
//     })

//     .then((response2)=>{
//       console.log("done", response2)
//     })
//   }

//   const checking=()=>{

//     return  console.log(selectedList);
//   }



//   const handleImage=()=>{

//     if(!image){

//       alert("select atleast one image ")

//       return
//     }else{

//       const formData = new FormData();

//       formData.append('video', file);
//       formData.append("type", "Gallery-Cover");

//       console.log("checking_formData", formData);

//       axiosInstance
//       .post("/api/GalleryCover", formData)
//     }


//   }

//   const handlePublish=()=>{

//     axiosInstance
//     .post(`/api/album/status?albumId=${albumId}`)

//     .then((response)=>{
//       console.log(response.data)
//     })

//     .catch((error)=>{
          
//       console.log("error while loading Album status", error)
//     })
//   }



//     return(
//         <>
//         {/* <h1 className= {
//             (!dataArrived)?"Loading kalams":`${
              
//                 data.map((item, i)=>(
//                     <h1 key={i}>
//                         {item.kalam}
//                     </h1>
//                 ))
//             }`:(data.length === 0)?'fde':'fedd'
            
//         }>
       
//         </h1> */}

         
//          {
//             (!dataArrived)?<h1>Loading</h1>:null
//          }




//          {
//             (length === 0)?
            
//             <div className="flex flex-col items-center h-full w-full justify-center">
            
//             <h1 className="text-center text-white text-4xl my-0.5 ">You have not added any kalams in this album yet......</h1>
//             <br /><br />

//             <button
//         onClick={() => setModalShow(true)}
//         className="px-5 py-2 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#6b4f2b] hover:text-[#d4a373] transition"
//       >
//         + Add Kalam
//       </button>
      
//               <MyVerticallyCenteredModal isOpen={modalShow} onClose={modalShow}>
      
//       {/* Header */}
//       <div className="flex justify-between items-start mb-6">
//         <div>
          
//           <p className="text-sm text-gray-500 italic mt-1">
//             Every word carries a soul.
//           </p>
//         </div>

//         <button
//           onClick={()=>setModalShow(false)}
//           className="text-gray-500 hover:text-gray-200 transition"
//         >
//           ✕
//         </button>
//       </div>

//       {/* Options */}
//       <div className="flex flex-col gap-4">
//         <button
//           onClick={() => Navigate('/kalam')}
//           className="group text-left rounded-2xl px-6 py-5 bg-[#161616] border border-[#2a2a2a] hover:border-[#6b4f2b] transition"
//         >
//           <h3 className="text-lg font-light group-hover:text-[#d4a373] transition">
//             ✒ Create a Kalam
//           </h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Let your thoughts flow into verse.
//           </p>
//         </button>

//         <button
//         //   onClick={() => Navigate('/kalam')}
//         onClick={()=>{

//             setModalShow(false); 
//             setModalShow2(true);
//         }}
        
//           className="group text-left rounded-2xl px-6 py-5 bg-[#161616] border border-[#2a2a2a] hover:border-[#6b4f2b] transition"
//         >
            



//           <h3 className="text-lg font-light group-hover:text-[#d4a373] transition">
//             📜 Add from Collection
//           </h3>
//           <p className="text-sm text-gray-500 mt-2">
//             Revisit memories and weave them into meaning.
//           </p>
//         </button>
//       </div>

//       {/* Footer */}
//       <div className="mt-6 text-right">
//         <button
//           onClick={()=>setModalShow(false)}
//           className="px-5 py-2 rounded-xl border border-[#2a2a2a] hover:border-[#6b4f2b] hover:text-[#d4a373] transition text-sm"
//         >
//           Close
//         </button>
//       </div>
//     </MyVerticallyCenteredModal>
//      <MyVerticallyCenteredModal isOpen={modalShow2} onClose={modalShow2}>

//       <div className="w-full h-full">
//         <h1 className="text-2xl">Choose kalams you like</h1>

//         {
//           kalamList.map((item, i)=>(
            
//             <div key={i} className="w-full border border-blue-400 bg-blue-400 flex ">
//             <h1 className="text-black">{item.content}</h1>
           
//             {/* <input type="checkbox" onChange={

//               (!selected)?()=>{
//                 setSelectedKalams(prev=>[...prev, item.content]);
//                  setSelected(true)
//                 }
//               :(selected)? final = selectedKalams.filter(value=>{
//                 return value!==item.content

                
//               }):null
//             } /> */}

//             <input type="checkbox" onClick={

//               ()=>
//               (!selectedList.current.has(item._id))?selectedList.current.set(item._id, item.content):selectedList.current.delete(item._id)
//             } />

           

//             {console.log(selectedList)};
           
//             </div>
//           ))
//         }

               
              


//       </div>
//         <button onClick={()=>setModalShow2(false)}>close</button>
//         <button onClick={handleSelect}>Done</button>
//         <button onClick={checking}>check</button>
//      </MyVerticallyCenteredModal>
//             </div>
            
//             :  

//            <div className="h-screen w-full overflow-hidden bg-black flex flex-col">

//       {/* 🔥 Elevated Collapsing Header */}
//       <div
//         className="sticky top-0 z-50 
//                    bg-blue-950 backdrop-blur-md
//                    shadow-[0_8px_30px_rgba(0,0,0,0.6)]
//                    border-b border-black
//                    transition-all duration-300 ease-out
//                    flex items-center justify-center"
//         style={{ height: `${headerH}px` }}
//       >
//         {/* <img className="w-full h-full absolute object-cover" src="http://res.cloudinary.com/dbcocbkit/image/upload/v1771687457/ntnracgxrd0154bzrhox.jpg" alt="" /> */}
//         <h1 className="text-white text-2xl font-semibold transition-all duration-300">
//           Top Section (shrinks on scroll)
//         </h1>
//         <input type="file" onChange={(e)=>{setFile(e.target.files[0]); setImage(true)}} />
//       </div>

//       {/* Body Section */}
//       <div className="flex flex-1 min-h-0">

//         {/* Sidebar (static) */}
//   <div
//       className="w-1/5 h-full min-h-0 flex flex-col overflow-hidden
//                  bg-[#080808] border-r border-white/[0.04]"
//       style={{ fontFamily: "'Outfit', sans-serif" }}
//     >
//       {/* ── Header ── */}
//       <div className="relative px-5 pt-6 pb-4 flex-shrink-0">
//         {/* Ambient glow behind header */}
//         <div className="absolute inset-x-0 top-0 h-24
//                         bg-gradient-to-b from-violet-900/20 to-transparent
//                         pointer-events-none" />

//         <div className="relative flex items-center justify-between">
//           <div>
//             <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
//                           text-violet-400/60 mb-0.5">
//               Your
//             </p>
//             <h2 className="text-[17px] font-semibold text-white/90 tracking-tight">
//               Library
//             </h2>
//           </div>

//          {  console.log("tracks", tracks[0])}

//           {/* Add button */}
//           <button className="w-7 h-7 rounded-full
//                              bg-white/[0.05] hover:bg-white/[0.10]
//                              border border-white/[0.08] hover:border-violet-500/40
//                              flex items-center justify-center
//                              transition-all duration-200 group">
//             <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-violet-400
//                             transition-colors duration-200"
//                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//             </svg>
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="mt-4 h-px bg-gradient-to-r
//                         from-transparent via-white/[0.08] to-transparent" />
//       </div>

//       {/* ── Scrollable List ── */}
//       <div
//         className="flex-1 overflow-y-auto px-3 pb-6"
//         style={{
//           scrollbarWidth: "thin",
//           scrollbarColor: "rgba(255,255,255,0.08) transparent",
//         }}
//       >
//         {albumName.map((album, idx) => (
//           <div key={album._id} className="mb-1">

//             {/* ── Album Row ── */}
//             <button
//               className="w-full text-left group relative
//                          flex items-center gap-3
//                          px-3 py-2.5 rounded-xl
//                          hover:bg-white/[0.04]
//                          transition-all duration-200"
//             >
//               {/* Colored dot accent per album */}
//               <div
//                 className="w-1 h-6 rounded-full flex-shrink-0 opacity-70"
//                 style={{
//                   background: [
//                     "linear-gradient(to bottom, #a78bfa, #7c3aed)",
//                     "linear-gradient(to bottom, #60a5fa, #2563eb)",
//                     "linear-gradient(to bottom, #f472b6, #be185d)",
//                     "linear-gradient(to bottom, #34d399, #059669)",
//                   ][idx % 4],
//                 }}
//               />

//               <div className="flex-1 min-w-0 ">
//                 <p className="text-[13px] font-medium text-white/70
//                                group-hover:text-white/95 truncate
//                                transition-colors duration-200">
//                   {album.name}
//                 </p>
//                 <p className="text-[11px] text-white/25 mt-0.5">
//                   {length} tracks
//                 </p>
//               </div>

//               <svg
//                 className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40
//                            flex-shrink-0 transition-all duration-200
//                            group-hover:translate-x-0.5"
//                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//             {/* ── Track List ── */}
//             <div className="mt-0.5 ml-4 space-y-px">
//               {data.map((item, i) => (
//                 <button
//                   key={i}
//                   className="w-full flex items-center gap-3
//                              px-3 py-2 rounded-lg text-left group
//                              hover:bg-white/[0.05]
//                              transition-all duration-150 relative"
//                 >
//                   {/* Index → Play on hover */}
//                   <div className="w-5 flex-shrink-0 flex items-center justify-center">
//                     <span className="text-[11px] text-white/20 font-mono
//                                      group-hover:opacity-0 absolute
//                                      transition-opacity duration-150">
//                       {String(i + 1).padStart(2, "0")}
//                     </span>
//                     <svg
//                       className="w-3 h-3 text-violet-400
//                                  opacity-0 group-hover:opacity-100
//                                  transition-opacity duration-150"
//                       fill="currentColor" viewBox="0 0 24 24"
//                     >
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>

//                   <span className="text-[12.5px] font-normal text-white/40
//                                    group-hover:text-white/85 truncate
//                                    transition-colors duration-150">
//                     {item.kalam.content}
//                   </span>

//                   {/* Duration placeholder */}
//                   <span className="ml-auto text-[11px] text-white/15
//                                    group-hover:text-white/30
//                                    flex-shrink-0 font-mono
//                                    transition-colors duration-150">
//                     3:24
//                   </span>
//                 </button>
//               ))}
//             </div>

//             {/* Section divider (skip after last) */}
//             {idx < length - 1 && (
//               <div className="mx-3 mt-3 mb-2 h-px
//                               bg-gradient-to-r from-transparent
//                               via-white/[0.06] to-transparent" />
//             )}
//           </div>
//         ))}
//       </div>
//       <button onClick={handleImage}>set</button>

//       {/* ── Footer Bar ── */}
//       <div className="flex-shrink-0 px-4 py-3
//                       border-t border-white/[0.04]
//                       bg-gradient-to-t from-black/60 to-transparent">
//         <div className="flex items-center justify-between">
//           <span className="text-[11px] text-white/20 font-medium tracking-wide">
//             {length} albums
//           </span>
//           <div className="flex gap-1">
//             {[0,1,2].map(i => (
//               <div key={i}
//                 className="w-1 h-1 rounded-full bg-white/20"
//                 style={{ opacity: 0.2 + i * 0.2 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//         {/* Scrollable Content */}


//         {/* Main content region  */}
//        {/* Main content region */}
// <div
//   ref={scrollRef}
//   className="flex-1 flex min-h-0 p-6 bg-black text-white"
// >
//   {/* LEFT: 4/5 (scrollable list) */}
//   <div className="w-4/5 min-h-0 overflow-y-auto pr-4">
//     <h1 className="mb-6 text-xl font-semibold">
//       Scroll to see header shrink
//     </h1>

//     {data.map((item, i) => (
//       <div key={i} className="flex flex-col">
//         <button
//           onClick={() => {
//             setOpenIndex(i);
//             setDetailsOpen(true);
//           }}
//           className="text-left"
//         >
//           <div className="border border-gray-700 p-4 mb-4 rounded-lg">
//             {item?.kalam?.content}
//           </div>
//         </button>
//       </div>
//     ))}

//     {/* Details Modal */}
//     <MyVerticallyCenteredModal
//       isOpen={detailsOpen}
//       onClose={() => setDetailsOpen(false)}
//     >
//       {openIndex !== null && data?.[openIndex] && (
//         <Card
//           kalam={data[openIndex]?.kalam?.content}
//           userName={data[openIndex]?.kalam?.name}
//           time={data[openIndex]?.kalam?.createdAt}
//           type={data[openIndex]?.kalam?.type}
//           kalId={data[openIndex]?.kalam?._id}
//           mUid={data[openIndex]?.kalam?.createdBy}
//         />
//       )}

//       <button onClick={() => setDetailsOpen(false)}>Close</button>
//       <button
//         onClick={() => {
//           setPlayerOpen(true);
//           setDetailsOpen(false);
//         }}
//       >
//         play
//       </button>
//     </MyVerticallyCenteredModal>

//     {/* Player Modal */}
//     {playerOpen && (
//       <MyVerticallyCenteredModal
//         isOpen={playerOpen}
//         onClose={() => setPlayerOpen(false)}
//       >
//         <KalamPlayer
//           tracks={tracks}
//           initialIndex={openIndex ?? 0}
//           onClose={() => setPlayerOpen(false)}
//         />
//       </MyVerticallyCenteredModal>
//     )}
//   </div>

//   {/* RIGHT: 1/5 (sidebar) */}
// <div className="w-1/5 min-h-0 border border-red-800 flex flex-col p-3 gap-3">
//   <h1 className="text-2xl text-white">Visibility</h1>

//   {/* Globe container fills available width */}
//   {/* <div className="w-full aspect-square overflow-hidden rounded-xl relative">
//     <Globe className="absolute inset-0 w-full h-full" />
//   </div> */}
//   <h1 className="text-4xl w-full items-center text-center">
//      <Globe/>
//   </h1>
//   <button onClick={handlePublish}>Publish</button>
//  { (!albumStat)?<div >Not live

//   <h1 ></h1>
//  </div>
 
 
//  : <div>
//   <h1>live</h1>
//   <h1 className="w-3 h-3 bg-green-500 rounded-full"></h1>
//   </div>}
 
// </div>
// </div>
              
//       </div>
               
//     </div>
              

//           }

                


                 

          
              
           
            
         
    
//       {console.log(selectedList)}

 
        
//         </>
//     )
// }


//------------------------------------------------------------------------------------------------------------------------>




// import { useState, useEffect, useRef } from "react";
// import axiosInstance from "../Apis/axiosInstance";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";
// import { AlbumCard } from "./components/AlbumsCard";
// import ('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
// import { Card } from "./components/Card";
// import { KalamPlayer } from "./components/kalamPlayer";
// import { Globe } from "lucide-react";
// import axios from "axios";
// import { KalamCard } from "./components/KalamCard";


// export const Album=()=>{

//     const[SearchParams] = useSearchParams();
//     const[dataArrived, setDataArrived] = useState(false);
//     const[data, setData] = useState([]);
//     const[length, setLength] = useState([]);
//     const[statement, setStatement] = useState("You dont have not added any kalams yet"); 
//     const[modalShow, setModalShow] = useState(false);
//     const[modalShow2, setModalShow2] = useState(false);
//     const[kalamList, setKalamList] = useState([]);
//     const[selectedKalams, setSelectedKalams] = useState([]);
//     const[selected, setSelected] = useState(false);
//     const[allVaues, setAllValues] = useState([]);
//     const[albumName, setAlbumName] = useState([]);  
//     const[image, setImage] = useState(false);
//     const [file, setFile] = useState([]);
//     const[isOpen, setIsOpen] = useState(false);
//     const [playerOpen, setPlayerOpen] = useState(false)
//     const [detailsOpen, setDetailsOpen] = useState(false);
//     const [backgroundVideo, setBackgroundVideo] = useState();
//     const[albumStat, setAlbumStat] = useState("");
    
//     const [openIndex, setOpenIndex] = useState(null);
//     const[tracks, setTracks] = useState([]);
  
//     let obj;
//     let keysMap;
//     let keysArray;
//     let keysObject;

//     const selectedList = useRef(new Map());
//     const scrollRef = useRef(null);   // middle column

//     const MAX_H = 220;
//     const MIN_H = 110;
//     const [headerH, setHeaderH] = useState(MAX_H);

//     useEffect(() => {
//       const el = scrollRef.current;
//       if (!el) return;
//       const handleScroll = () => {
//         const scrollY = el.scrollTop;
//         const newHeight = Math.max(MIN_H, MAX_H - scrollY);
//         setHeaderH(newHeight);
//       };
//       el.addEventListener("scroll", handleScroll);
//       return () => el.removeEventListener("scroll", handleScroll);
//     }, []);

//     let final = [];
//     const Navigate = useNavigate();
//     const albumId = SearchParams.get('albumId');
//     console.log("albumId", albumId);

//     useEffect(()=>{
//       axiosInstance
//       .get(`/api/albumKalams?albumId=${albumId}`,{ withCredentials: true })
//       .then((response)=>{
//         console.log(response.data);
//         const kalamCollection = response.data.albumKalams?.[0]?.kalamCollection;
//         setDataArrived(true);
//         setKalamList(response.data.kalamList);
//         setData(response.data.albumKalams[0].kalamCollection);
//         setAllValues(Object.values(response.data.albumKalams[0].kalamCollection));
//         setAlbumStat(response.data.albumKalams[0].isLive);
//         console.log("checking albumStat", response.data.albumKalams[0].isLive);
//         console.log("checking_allValues",Object.values(response.data.albumKalams[0].kalamCollection));
//         console.log("checkin_allValue_again",response.data.albumKalams);
//         setAlbumName(response.data.albumKalams);
//         console.log("checking albumName", response.data.albumKalams);
//         console.log("checking Data", response.data.albumKalams[0].kalamCollection);
//         console.log("checking_length", response.data.length);
//         setLength(response.data.length);
//         setTracks(kalamCollection.map((x) => ({
//           _id: x.kalam._id,
//           title: x.kalam.content || "Untitled",
//           artist: x.kalam.name || "Unknown",
//           coverUrl: albumName?.[0]?.coverUrl || "",
//           waveformVideoUrl: x.kalam.kalamAudio || "",
//         })));
//       })
//       .catch((error)=>{
//         console.error("Error fetching request", error);
//       });
//     }, []);

//     const handleSelect=()=>{
//       obj = Object.fromEntries(selectedList.current);
//       keysMap  = selectedList.current.keys();
//       keysArray = Array.from(keysMap);
//       keysObject = Object.assign({}, keysArray);
//       console.log("values_Object", keysObject);
//       axiosInstance
//       .post(`/api/selection?albumId=${albumId}`, { list: keysObject })
//       .then((response2)=>{ console.log("done", response2) });
//     };

//     const checking=()=>{ return console.log(selectedList); };

//     const handleImage=()=>{
//       if(!image){ alert("select atleast one image"); return; }
//       else {
//         const formData = new FormData();
//         formData.append('video', file);
//         formData.append("type", "Gallery-Cover");
//         console.log("checking_formData", formData);
//         axiosInstance.post("/api/GalleryCover", formData);
//       }
//     };

//     const handlePublish=()=>{
//       axiosInstance
//       .post(`/api/album/status?albumId=${albumId}`)
//       .then((response)=>{ console.log(response.data) })
//       .catch((error)=>{ console.log("error while loading Album status", error) });
//     };

//     return(
//         <>
//          {(!dataArrived)?<h1>Loading</h1>:null}

//          {(length === 0)?
//             <div className="flex flex-col items-center h-full w-full justify-center">
//               <h1 className="text-center text-white text-4xl my-0.5">You have not added any kalams in this album yet......</h1>
//               <br /><br />
//               <button
//                 onClick={() => setModalShow(true)}
//                 className="px-5 py-2 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#6b4f2b] hover:text-[#d4a373] transition"
//               >
//                 + Add Kalam
//               </button>
      
//               <MyVerticallyCenteredModal isOpen={modalShow} onClose={modalShow}>
//                 <div className="flex justify-between items-start mb-6">
//                   <div>
//                     <p className="text-sm text-gray-500 italic mt-1">Every word carries a soul.</p>
//                   </div>
//                   <button onClick={()=>setModalShow(false)} className="text-gray-500 hover:text-gray-200 transition">✕</button>
//                 </div>
//                 <div className="flex flex-col gap-4">
//                   <button onClick={() => Navigate('/kalam')} className="group text-left rounded-2xl px-6 py-5 bg-[#161616] border border-[#2a2a2a] hover:border-[#6b4f2b] transition">
//                     <h3 className="text-lg font-light group-hover:text-[#d4a373] transition">✒ Create a Kalam</h3>
//                     <p className="text-sm text-gray-500 mt-2">Let your thoughts flow into verse.</p>
//                   </button>
//                   <button onClick={()=>{ setModalShow(false); setModalShow2(true); }}
//                     className="group text-left rounded-2xl px-6 py-5 bg-[#161616] border border-[#2a2a2a] hover:border-[#6b4f2b] transition">
//                     <h3 className="text-lg font-light group-hover:text-[#d4a373] transition">📜 Add from Collection</h3>
//                     <p className="text-sm text-gray-500 mt-2">Revisit memories and weave them into meaning.</p>
//                   </button>
//                 </div>
//                 <div className="mt-6 text-right">
//                   <button onClick={()=>setModalShow(false)} className="px-5 py-2 rounded-xl border border-[#2a2a2a] hover:border-[#6b4f2b] hover:text-[#d4a373] transition text-sm">Close</button>
//                 </div>
//               </MyVerticallyCenteredModal>

//               <MyVerticallyCenteredModal isOpen={modalShow2} onClose={modalShow2}>
//                 <div className="w-full h-full">
//                   <h1 className="text-2xl">Choose kalams you like</h1>
//                   {kalamList.map((item, i)=>(
//                     <div key={i} className="w-full border border-blue-400 bg-blue-400 flex">
//                       <h1 className="text-black">{item.content}</h1>
//                       <input type="checkbox" onClick={()=>
//                         (!selectedList.current.has(item._id))?selectedList.current.set(item._id, item.content):selectedList.current.delete(item._id)
//                       }/>
//                       {console.log(selectedList)};
//                     </div>
//                   ))}
//                 </div>
//                 <button onClick={()=>setModalShow2(false)}>close</button>
//                 <button onClick={handleSelect}>Done</button>
//                 <button onClick={checking}>check</button>
//               </MyVerticallyCenteredModal>
//             </div>
            
//             :  

//            <div className="h-screen w-full overflow-hidden bg-[#080808] flex flex-col"
//                 style={{ fontFamily: "'Outfit', sans-serif" }}>

//             {/* ── Collapsing Header ── */}
//             <div
//               className="sticky top-0 z-50 
//                          bg-blue-950 backdrop-blur-md
//                          shadow-[0_8px_30px_rgba(0,0,0,0.6)]
//                          border-b border-black
//                          transition-all duration-300 ease-out
//                          flex items-center justify-center"
//               style={{ height: `${headerH}px` }}
//             >
//               <h1 className="text-white text-2xl font-semibold transition-all duration-300">
//                 Top Section (shrinks on scroll)
//               </h1>
//               <input type="file" onChange={(e)=>{setFile(e.target.files[0]); setImage(true)}} />
//             </div>

//             {/* ── Body ── */}
//             <div className="flex flex-1 min-h-0">

//               {/* ━━━━━━ LEFT SIDEBAR ━━━━━━ */}
//               <div
//                 className="w-1/5 h-full min-h-0 flex flex-col overflow-hidden
//                            bg-[#080808] border-r border-white/[0.04]"
//                 style={{ fontFamily: "'Outfit', sans-serif" }}
//               >
//                 {/* Sidebar Header */}
//                 <div className="relative px-5 pt-6 pb-4 flex-shrink-0">
//                   <div className="absolute inset-x-0 top-0 h-24
//                                   bg-gradient-to-b from-violet-900/20 to-transparent
//                                   pointer-events-none" />
//                   <div className="relative flex items-center justify-between">
//                     <div>
//                       <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
//                                     text-violet-400/60 mb-0.5">
//                         Your
//                       </p>
//                       <h2 className="text-[17px] font-semibold text-white/90 tracking-tight">
//                         Library
//                       </h2>
//                     </div>
//                     {console.log("tracks", tracks[0])}
//                     <button className="w-7 h-7 rounded-full
//                                        bg-white/[0.05] hover:bg-white/[0.10]
//                                        border border-white/[0.08] hover:border-violet-500/40
//                                        flex items-center justify-center
//                                        transition-all duration-200 group">
//                       <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-violet-400
//                                       transition-colors duration-200"
//                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="mt-4 h-px bg-gradient-to-r
//                                   from-transparent via-white/[0.08] to-transparent" />
//                 </div>

//                 {/* Sidebar Scrollable List */}
//                 <div
//                   className="flex-1 overflow-y-auto px-3 pb-6"
//                   style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}
//                 >
//                   {albumName.map((album, idx) => (
//                     <div key={album._id} className="mb-1">
//                       <button
//                         className="w-full text-left group relative
//                                    flex items-center gap-3
//                                    px-3 py-2.5 rounded-xl
//                                    hover:bg-white/[0.04]
//                                    transition-all duration-200"
//                       >
//                         <div
//                           className="w-1 h-6 rounded-full flex-shrink-0 opacity-70"
//                           style={{
//                             background: [
//                               "linear-gradient(to bottom, #a78bfa, #7c3aed)",
//                               "linear-gradient(to bottom, #60a5fa, #2563eb)",
//                               "linear-gradient(to bottom, #f472b6, #be185d)",
//                               "linear-gradient(to bottom, #34d399, #059669)",
//                             ][idx % 4],
//                           }}
//                         />
//                         <div className="flex-1 min-w-0">
//                           <p className="text-[13px] font-medium text-white/70
//                                          group-hover:text-white/95 truncate
//                                          transition-colors duration-200">
//                             {album.name}
//                           </p>
//                           <p className="text-[11px] text-white/25 mt-0.5">
//                             {length} tracks
//                           </p>
//                         </div>
//                         <svg
//                           className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40
//                                      flex-shrink-0 transition-all duration-200
//                                      group-hover:translate-x-0.5"
//                           fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                         </svg>
//                       </button>

//                       <div className="mt-0.5 ml-4 space-y-px">
//                         {data.map((item, i) => (
//                           <button
//                             key={i}
//                             className="w-full flex items-center gap-3
//                                        px-3 py-2 rounded-lg text-left group
//                                        hover:bg-white/[0.05]
//                                        transition-all duration-150 relative"
//                           >
//                             <div className="w-5 flex-shrink-0 flex items-center justify-center">
//                               <span className="text-[11px] text-white/20 font-mono
//                                                group-hover:opacity-0 absolute
//                                                transition-opacity duration-150">
//                                 {String(i + 1).padStart(2, "0")}
//                               </span>
//                               <svg
//                                 className="w-3 h-3 text-violet-400
//                                            opacity-0 group-hover:opacity-100
//                                            transition-opacity duration-150"
//                                 fill="currentColor" viewBox="0 0 24 24"
//                               >
//                                 <path d="M8 5v14l11-7z" />
//                               </svg>
//                             </div>
//                             <span className="text-[12.5px] font-normal text-white/40
//                                              group-hover:text-white/85 truncate
//                                              transition-colors duration-150">
//                               {item.kalam.content}
//                             </span>
//                             <span className="ml-auto text-[11px] text-white/15
//                                              group-hover:text-white/30
//                                              flex-shrink-0 font-mono
//                                              transition-colors duration-150">
//                               3:24
//                             </span>
//                           </button>
//                         ))}
//                       </div>

//                       {idx < length - 1 && (
//                         <div className="mx-3 mt-3 mb-2 h-px
//                                         bg-gradient-to-r from-transparent
//                                         via-white/[0.06] to-transparent" />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 <button onClick={handleImage}>set</button>

//                 {/* Sidebar Footer */}
//                 <div className="flex-shrink-0 px-4 py-3
//                                 border-t border-white/[0.04]
//                                 bg-gradient-to-t from-black/60 to-transparent">
//                   <div className="flex items-center justify-between">
//                     <span className="text-[11px] text-white/20 font-medium tracking-wide">
//                       {length} albums
//                     </span>
//                     <div className="flex gap-1">
//                       {[0,1,2].map(i => (
//                         <div key={i} className="w-1 h-1 rounded-full bg-white/20"
//                              style={{ opacity: 0.2 + i * 0.2 }} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* ━━━━━━ MIDDLE CONTENT — independently scrollable ━━━━━━ */}
//               <div
//                 ref={scrollRef}
//                 className="flex-1 min-h-0 overflow-y-auto bg-[#080808]"
//                 style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}
//               >
//                 <div className="px-6 pt-6 pb-10">

//                   {/* Section heading — same style as sidebar "Your / Library" */}
//                   <div className="relative mb-6 pb-4 border-b border-white/[0.04]">
//                     <div className="absolute inset-x-0 top-0 h-16
//                                     bg-gradient-to-b from-violet-900/10 to-transparent
//                                     pointer-events-none" />
//                     <div className="relative">
//                       <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
//                                     text-violet-400/60 mb-0.5">
//                         Kalams
//                       </p>
//                       <h2 className="text-[17px] font-semibold text-white/90 tracking-tight">
//                         Collection
//                       </h2>
//                     </div>
//                   </div>

//                   {/* KalamCard list */}
//                   <KalamCard
//                     kalams={data}
//                     onSelect={(item, i) => { setOpenIndex(i); setDetailsOpen(true); }}
//                   />
//                 </div>

//                 {/* Details Modal */}
//                 <MyVerticallyCenteredModal isOpen={detailsOpen} onClose={() => setDetailsOpen(false)}>
//                   {openIndex !== null && data?.[openIndex] && (
//                     <Card
//                       kalam={data[openIndex]?.kalam?.content}
//                       userName={data[openIndex]?.kalam?.name}
//                       time={data[openIndex]?.kalam?.createdAt}
//                       type={data[openIndex]?.kalam?.type}
//                       kalId={data[openIndex]?.kalam?._id}
//                       mUid={data[openIndex]?.kalam?.createdBy}
//                     />
//                   )}
//                   <button onClick={() => setDetailsOpen(false)}>Close</button>
//                   <button onClick={() => { setPlayerOpen(true); setDetailsOpen(false); }}>play</button>
//                 </MyVerticallyCenteredModal>

//                 {playerOpen && (
//                   <MyVerticallyCenteredModal isOpen={playerOpen} onClose={() => setPlayerOpen(false)}>
//                     <KalamPlayer
//                       tracks={tracks}
//                       initialIndex={openIndex ?? 0}
//                       onClose={() => setPlayerOpen(false)}
//                     />
//                   </MyVerticallyCenteredModal>
//                 )}
//               </div>

//               {/* ━━━━━━ RIGHT PANEL — independently scrollable ━━━━━━ */}
//               <div
//                 className="w-1/5 flex flex-col overflow-y-auto bg-[#080808] border-l border-white/[0.04]"
//                 style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}
//               >

//                 {/* sticky top header — mirrors sidebar header */}
//                 <div className="sticky top-0 z-10 bg-[#080808]">
//                   <div className="relative px-5 pt-6 pb-4 flex-shrink-0">
//                     <div className="absolute inset-x-0 top-0 h-24
//                                     bg-gradient-to-b from-violet-900/20 to-transparent
//                                     pointer-events-none" />
//                     <div className="relative flex items-center justify-between">
//                       <div>
//                         <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
//                                       text-violet-400/60 mb-0.5">
//                           Album
//                         </p>
//                         <h2 className="text-[17px] font-semibold text-white/90 tracking-tight">
//                           Visibility
//                         </h2>
//                       </div>
//                       <div className="w-7 h-7 rounded-full
//                                      bg-white/[0.05]
//                                      border border-white/[0.08]
//                                      flex items-center justify-center">
//                         <Globe className="w-3.5 h-3.5 text-white/40" />
//                       </div>
//                     </div>
//                     <div className="mt-4 h-px bg-gradient-to-r
//                                     from-transparent via-white/[0.08] to-transparent" />
//                   </div>
//                 </div>

//                 {/* Panel body */}
//                 <div className="px-5 pb-6 flex flex-col gap-5">

//                   {/* Status section */}
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
//                                   text-violet-400/60 mb-3">
//                       Status
//                     </p>
//                     <div className="flex items-center gap-2.5">
//                       <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
//                         albumStat
//                           ? "bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]"
//                           : "bg-white/20"
//                       }`} />
//                       <span className={`text-[13px] font-medium transition-colors duration-300 ${
//                         albumStat ? "text-white/80" : "text-white/35"
//                       }`}>
//                         {albumStat ? "Live" : "Not published"}
//                       </span>
//                     </div>
//                     {albumStat && (
//                       <p className="text-[11px] text-white/25 mt-1.5 ml-4.5">
//                         visible to listeners
//                       </p>
//                     )}
//                   </div>

//                   <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

//                   {/* Reach section */}
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
//                                   text-violet-400/60 mb-3">
//                       Reach
//                     </p>


//                     {/* <div className="w-full aspect-square rounded-xl
//                                     border border-white/[0.06] bg-white/[0.02]
//                                     flex flex-col items-center justify-center gap-2">
//                       <Globe className="w-8 h-8 text-white/20" />
//                       <span className="text-[10px] text-white/20 tracking-[0.14em] uppercase font-mono">Global</span>
//                     </div> */}

                    
//                   </div>

//                   <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

//                   {/* Tracks info */}
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
//                                   text-violet-400/60 mb-3">
//                       Tracks
//                     </p>
//                     {[
//                       ["Total",    `${length}`],
//                       ["Duration", `~${length * 3} min`],
//                       ["Type",     "Collection"],
//                     ].map(([k, v]) => (
//                       <div key={k} className="flex items-center justify-between py-1.5">
//                         <span className="text-[11px] text-white/25 font-mono">{k}</span>
//                         <span className="text-[12px] text-white/50">{v}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

//                   {/* Publish button */}
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
//                                   text-violet-400/60 mb-3">
//                       Publish
//                     </p>
//                     <button
//                       onClick={handlePublish}
//                       className={`w-full px-4 py-2.5 rounded-xl text-[12.5px] font-medium
//                                   border transition-all duration-200
//                                   ${albumStat
//                                     ? "border-green-500/30 text-green-400/80 bg-green-500/[0.06] hover:bg-green-500/[0.10]"
//                                     : "border-white/[0.08] text-white/50 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.14] hover:text-white/70"
//                                   }`}
//                     >
//                       {albumStat ? "Unpublish" : "Publish"}
//                     </button>
//                   </div>

//                   <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

//                   {/* Actions */}
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
//                                   text-violet-400/60 mb-3">
//                       Actions
//                     </p>
//                     <div className="space-y-1.5">
//                       {[
//                         { label: "+ Add kalam",       action: () => setModalShow(true) },
//                         { label: "From collection",   action: () => setModalShow2(true) },
//                       ].map(({ label, action }) => (
//                         <button
//                           key={label}
//                           onClick={action}
//                           className="w-full flex items-center gap-3
//                                      px-3 py-2 rounded-lg text-left group
//                                      hover:bg-white/[0.05]
//                                      transition-all duration-150"
//                         >
//                           <span className="text-[12.5px] text-white/40
//                                            group-hover:text-white/85 truncate
//                                            transition-colors duration-150">
//                             {label}
//                           </span>
//                           <svg
//                             className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40
//                                        ml-auto flex-shrink-0 transition-all duration-200
//                                        group-hover:translate-x-0.5"
//                             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
//                           >
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                           </svg>
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                 </div>{/* end panel body */}

//                 {/* Footer — mirrors sidebar footer */}
//                 <div className="mt-auto flex-shrink-0 px-4 py-3
//                                 border-t border-white/[0.04]
//                                 bg-gradient-to-t from-black/60 to-transparent">
//                   <div className="flex items-center justify-between">
//                     <span className="text-[11px] text-white/20 font-medium tracking-wide">
//                       {albumStat ? "Published" : "Draft"}
//                     </span>
//                     <div className="flex gap-1">
//                       {[0,1,2].map(i => (
//                         <div key={i} className="w-1 h-1 rounded-full"
//                              style={{
//                                background: albumStat ? "rgba(74,222,128,0.5)" : "rgba(255,255,255,0.2)",
//                                opacity: 0.2 + i * 0.2
//                              }} />
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//               </div>{/* end right panel */}

//             </div>{/* end body */}
//           </div>
//          }

//          {console.log(selectedList)}
//         </>
//     )
// }






//---------------------------------------------------------------------------------------->


// src/pages/Album.jsx
// Updated: ambient background glow + header theme fix + filled Reach section + cleaner layout layering
// NOTE: Remove this invalid line from your original file:
// import ('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
// Add Outfit via index.html (recommended) instead.



// import { useState, useEffect, useRef } from "react";
// import axiosInstance from "../Apis/axiosInstance";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";
// import { Card } from "./components/Card";
// import { KalamPlayer } from "./components/KalamPlayer";
// import { Globe } from "lucide-react";
// import { KalamCard } from "./components/kalamCard";

// export const Album = () => {
//   const [SearchParams] = useSearchParams();
//   const Navigate = useNavigate();

//   const [dataArrived, setDataArrived] = useState(false);
//   const [data, setData] = useState([]);
//   const [length, setLength] = useState(0);
//   const [modalShow, setModalShow] = useState(false);
//   const [modalShow2, setModalShow2] = useState(false);
//   const [kalamList, setKalamList] = useState([]);
//   const [albumName, setAlbumName] = useState([]);
//   const [image, setImage] = useState(false);
//   const [file, setFile] = useState(null);

//   const [playerOpen, setPlayerOpen] = useState(false);
//   const [detailsOpen, setDetailsOpen] = useState(false);
//   const [albumStat, setAlbumStat] = useState(false);

//   const [openIndex, setOpenIndex] = useState(null);
//   const [tracks, setTracks] = useState([]);

//   const selectedList = useRef(new Map());
//   const scrollRef = useRef(null);

//   const MAX_H = 220;
//   const MIN_H = 110;
//   const [headerH, setHeaderH] = useState(MAX_H);

//   const albumId = SearchParams.get("albumId");

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;
//     const handleScroll = () => {
//       const scrollY = el.scrollTop;
//       const newHeight = Math.max(MIN_H, MAX_H - scrollY);
//       setHeaderH(newHeight);
//     };
//     el.addEventListener("scroll", handleScroll);
//     return () => el.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     axiosInstance
//       .get(`/api/albumKalams?albumId=${albumId}`, { withCredentials: true })
//       .then((response) => {
//         const kalamCollection = response.data.albumKalams?.[0]?.kalamCollection || [];
//         setDataArrived(true);
//         setKalamList(response.data.kalamList || []);
//         setData(kalamCollection);
//         setAlbumStat(!!response.data.albumKalams?.[0]?.isLive);

//         setAlbumName(response.data.albumKalams || []);
//         setLength(response.data.length || kalamCollection.length || 0);

//         setTracks(
//           kalamCollection.map((x) => ({
//             _id: x.kalam?._id,
//             title: x.kalam?.content || "Untitled",
//             artist: x.kalam?.name || "Unknown",
//             coverUrl: response.data.albumKalams?.[0]?.coverUrl || "",
//             waveformVideoUrl: x.kalam?.kalamAudio || "",
//           }))
//         );
//       })
//       .catch((error) => {
//         console.error("Error fetching request", error);
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleSelect = () => {
//     const keysArray = Array.from(selectedList.current.keys());
//     const keysObject = Object.assign({}, keysArray);
//     axiosInstance.post(`/api/selection?albumId=${albumId}`, { list: keysObject });
//   };

//   const handleImage = () => {
//     if (!image || !file) {
//       alert("select atleast one image");
//       return;
//     }
//     const formData = new FormData();
//     formData.append("video", file);
//     formData.append("type", "Gallery-Cover");
//     axiosInstance.post("/api/GalleryCover", formData);
//   };

//   const handlePublish = () => {
//     axiosInstance
//       .post(`/api/album/status?albumId=${albumId}`)
//       .then(() => {})
//       .catch((error) => console.log("error while loading Album status", error));
//   };

//   return (
//     <>
//       {!dataArrived ? <h1>Loading</h1> : null}

//       {length === 0 ? (
//         <div className="flex flex-col items-center h-full w-full justify-center bg-[#080808]">
//           <h1 className="text-center text-white text-4xl my-0.5">
//             You have not added any kalams in this album yet......
//           </h1>
//           <br />
//           <br />
//           <button
//             onClick={() => setModalShow(true)}
//             className="px-5 py-2 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-violet-500/40 hover:text-violet-200 transition"
//           >
//             + Add Kalam
//           </button>

//           <MyVerticallyCenteredModal isOpen={modalShow} onClose={modalShow}>
//             <div className="flex justify-between items-start mb-6">
//               <div>
//                 <p className="text-sm text-gray-500 italic mt-1">Every word carries a soul.</p>
//               </div>
//               <button
//                 onClick={() => setModalShow(false)}
//                 className="text-gray-500 hover:text-gray-200 transition"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="flex flex-col gap-4">
//               <button
//                 onClick={() => Navigate("/kalam")}
//                 className="group text-left rounded-2xl px-6 py-5 bg-[#161616] border border-[#2a2a2a] hover:border-violet-500/40 transition"
//               >
//                 <h3 className="text-lg font-light group-hover:text-violet-200 transition">
//                   ✒ Create a Kalam
//                 </h3>
//                 <p className="text-sm text-gray-500 mt-2">Let your thoughts flow into verse.</p>
//               </button>
//               <button
//                 onClick={() => {
//                   setModalShow(false);
//                   setModalShow2(true);
//                 }}
//                 className="group text-left rounded-2xl px-6 py-5 bg-[#161616] border border-[#2a2a2a] hover:border-violet-500/40 transition"
//               >
//                 <h3 className="text-lg font-light group-hover:text-violet-200 transition">
//                   📜 Add from Collection
//                 </h3>
//                 <p className="text-sm text-gray-500 mt-2">Revisit memories and weave them into meaning.</p>
//               </button>
//             </div>
//             <div className="mt-6 text-right">
//               <button
//                 onClick={() => setModalShow(false)}
//                 className="px-5 py-2 rounded-xl border border-[#2a2a2a] hover:border-violet-500/40 hover:text-violet-200 transition text-sm"
//               >
//                 Close
//               </button>
//             </div>
//           </MyVerticallyCenteredModal>

//           <MyVerticallyCenteredModal isOpen={modalShow2} onClose={modalShow2}>
//             <div className="w-full h-full">
//               <h1 className="text-2xl">Choose kalams you like</h1>
//               {kalamList.map((item, i) => (
//                 <div key={i} className="w-full border border-blue-400 bg-blue-400 flex">
//                   <h1 className="text-black">{item.content}</h1>
//                   <input
//                     type="checkbox"
//                     onClick={() =>
//                       !selectedList.current.has(item._id)
//                         ? selectedList.current.set(item._id, item.content)
//                         : selectedList.current.delete(item._id)
//                     }
//                   />
//                 </div>
//               ))}
//             </div>
//             <button onClick={() => setModalShow2(false)}>close</button>
//             <button onClick={handleSelect}>Done</button>
//           </MyVerticallyCenteredModal>
//         </div>
//       ) : (
//         <div
//           className="h-screen w-full overflow-hidden flex flex-col relative"
//           style={{ fontFamily: "'Outfit', sans-serif", background: "#080808" }}
//         >
//           {/* Ambient glow */}
//           <div
//             className="absolute inset-0 pointer-events-none"
//             style={{
//               background:
//                 "radial-gradient(900px 520px at 50% 0%, rgba(167,139,250,0.14), transparent 60%)," +
//                 "radial-gradient(760px 520px at 88% 55%, rgba(96,165,250,0.10), transparent 55%)," +
//                 "radial-gradient(700px 520px at 15% 82%, rgba(236,72,153,0.08), transparent 55%)",
//             }}
//           />

//           <div className="relative flex flex-col min-h-0 h-full">
//             {/* ── Collapsing Header ── */}
//             <div
//               className="sticky top-0 z-50 bg-[#080808]/70 backdrop-blur-md
//                          shadow-[0_10px_40px_rgba(0,0,0,0.55)]
//                          border-b border-white/[0.06]
//                          transition-all duration-300 ease-out
//                          flex items-center justify-center gap-3"
//               style={{ height: `${headerH}px` }}
//             >
//               <h1
//                 className="text-2xl font-semibold"
//                 style={{
//                   background: "linear-gradient(90deg,#e9d5ff,#93c5fd)",
//                   WebkitBackgroundClip: "text",
//                   color: "transparent",
//                 }}
//               >
//                 Top Section (shrinks on scroll)
//               </h1>

//               <input
//                 type="file"
//                 onChange={(e) => {
//                   setFile(e.target.files[0]);
//                   setImage(true);
//                 }}
//               />
//             </div>

//             {/* ── Body ── */}
//             <div className="flex flex-1 min-h-0">
//               {/* ━━━━━━ LEFT SIDEBAR ━━━━━━ */}
//               <div className="w-1/5 h-full min-h-0 flex flex-col overflow-hidden bg-[#080808] border-r border-white/[0.06]">
//                 {/* Sidebar Header */}
//                 <div className="relative px-5 pt-6 pb-4 flex-shrink-0">
//                   <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-900/25 to-transparent pointer-events-none" />
//                   <div className="relative flex items-center justify-between">
//                     <div>
//                       <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-violet-400/60 mb-0.5">
//                         Your
//                       </p>
//                       <h2 className="text-[17px] font-semibold text-white/90 tracking-tight">
//                         Library
//                       </h2>
//                     </div>

//                     <button className="w-7 h-7 rounded-full bg-white/[0.05] hover:bg-white/[0.10]
//                                        border border-white/[0.08] hover:border-violet-500/40
//                                        flex items-center justify-center transition-all duration-200 group">
//                       <svg
//                         className="w-3.5 h-3.5 text-white/40 group-hover:text-violet-400 transition-colors duration-200"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2.5}
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />
//                 </div>

//                 {/* Sidebar Scrollable List */}
//                 <div
//                   className="flex-1 overflow-y-auto px-3 pb-6"
//                   style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.10) transparent" }}
//                 >
//                   {albumName.map((album, idx) => (
//                     <div key={album._id} className="mb-1">
//                       <button className="w-full text-left group relative flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-all duration-200">
//                         <div
//                           className="w-1 h-6 rounded-full flex-shrink-0 opacity-80"
//                           style={{
//                             background: [
//                               "linear-gradient(to bottom, #a78bfa, #7c3aed)",
//                               "linear-gradient(to bottom, #60a5fa, #2563eb)",
//                               "linear-gradient(to bottom, #f472b6, #be185d)",
//                               "linear-gradient(to bottom, #34d399, #059669)",
//                             ][idx % 4],
//                           }}
//                         />
//                         <div className="flex-1 min-w-0">
//                           <p className="text-[13px] font-medium text-white/70 group-hover:text-white/95 truncate transition-colors duration-200">
//                             {album.name}
//                           </p>
//                           <p className="text-[11px] text-white/25 mt-0.5">{length} tracks</p>
//                         </div>
//                         <svg
//                           className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40 flex-shrink-0 transition-all duration-200 group-hover:translate-x-0.5"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                         </svg>
//                       </button>

//                       <div className="mt-0.5 ml-4 space-y-px">
//                         {data.map((item, i) => (
//                           <button
//                             key={i}
//                             className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left group hover:bg-white/[0.05] transition-all duration-150 relative"
//                           >
//                             <div className="w-5 flex-shrink-0 flex items-center justify-center">
//                               <span className="text-[11px] text-white/20 font-mono group-hover:opacity-0 absolute transition-opacity duration-150">
//                                 {String(i + 1).padStart(2, "0")}
//                               </span>
//                               <svg
//                                 className="w-3 h-3 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path d="M8 5v14l11-7z" />
//                               </svg>
//                             </div>
//                             <span className="text-[12.5px] font-normal text-white/40 group-hover:text-white/85 truncate transition-colors duration-150">
//                               {item.kalam?.content}
//                             </span>
//                             <span className="ml-auto text-[11px] text-white/15 group-hover:text-white/30 flex-shrink-0 font-mono transition-colors duration-150">
//                               3:24
//                             </span>
//                           </button>
//                         ))}
//                       </div>

//                       {idx < length - 1 && (
//                         <div className="mx-3 mt-3 mb-2 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
//                       )}
//                     </div>
//                   ))}
//                 </div>

//                 <button onClick={handleImage} className="text-white/50 px-4 pb-2 text-left">
//                   set
//                 </button>

//                 {/* Sidebar Footer */}
//                 <div className="flex-shrink-0 px-4 py-3 border-t border-white/[0.06] bg-gradient-to-t from-black/60 to-transparent">
//                   <div className="flex items-center justify-between">
//                     <span className="text-[11px] text-white/20 font-medium tracking-wide">
//                       {length} albums
//                     </span>
//                     <div className="flex gap-1">
//                       {[0, 1, 2].map((i) => (
//                         <div
//                           key={i}
//                           className="w-1 h-1 rounded-full bg-white/20"
//                           style={{ opacity: 0.2 + i * 0.2 }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* ━━━━━━ MIDDLE CONTENT ━━━━━━ */}
//               <div
//                 ref={scrollRef}
//                 className="flex-1 min-h-0 overflow-y-auto"
//                 style={{
//                   scrollbarWidth: "thin",
//                   scrollbarColor: "rgba(255,255,255,0.10) transparent",
//                   background:
//                     "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))",
//                 }}
//               >
//                 <div className="px-6 pt-6 pb-10">
//                   {/* Section heading */}
//                   <div className="relative mb-6 pb-4 border-b border-white/[0.06]">
//                     <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-violet-900/15 to-transparent pointer-events-none" />
//                     <div className="relative">
//                       <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-violet-400/60 mb-0.5">
//                         Kalams
//                       </p>
//                       <h2 className="text-[17px] font-semibold text-white/90 tracking-tight">
//                         Collection
//                       </h2>
//                     </div>
//                   </div>

//                   <KalamCard
//                     kalams={data}
//                     onSelect={(item, i) => {
//                       setOpenIndex(i);
//                       setDetailsOpen(true);
//                     }}
//                   />
//                 </div>

//                 {/* Details Modal */}
//                 <MyVerticallyCenteredModal isOpen={detailsOpen} onClose={() => setDetailsOpen(false)}>
//                   {openIndex !== null && data?.[openIndex] && (
//                     <Card
//                       kalam={data[openIndex]?.kalam?.content}
//                       userName={data[openIndex]?.kalam?.name}
//                       time={data[openIndex]?.kalam?.createdAt}
//                       type={data[openIndex]?.kalam?.type}
//                       kalId={data[openIndex]?.kalam?._id}
//                       mUid={data[openIndex]?.kalam?.createdBy}
//                     />
//                   )}
//                   <button onClick={() => setDetailsOpen(false)}>Close</button>
//                   <button
//                     onClick={() => {
//                       setPlayerOpen(true);
//                       setDetailsOpen(false);
//                     }}
//                   >
//                     play
//                   </button>
//                 </MyVerticallyCenteredModal>

//                 {playerOpen && (
//                   <MyVerticallyCenteredModal isOpen={playerOpen} onClose={() => setPlayerOpen(false)}>
//                     <KalamPlayer tracks={tracks} initialIndex={openIndex ?? 0} onClose={() => setPlayerOpen(false)} />
//                   </MyVerticallyCenteredModal>
//                 )}
//               </div>

//               {/* ━━━━━━ RIGHT PANEL ━━━━━━ */}
//               <div
//                 className="w-1/5 flex flex-col overflow-y-auto border-l border-white/[0.06] relative"
//                 style={{
//                   scrollbarWidth: "thin",
//                   scrollbarColor: "rgba(255,255,255,0.10) transparent",
//                   background:
//                     "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))",
//                 }}
//               >
//                 {/* sticky header */}
//                 <div className="sticky top-0 z-10 bg-[#080808]/70 backdrop-blur-md">
//                   <div className="relative px-5 pt-6 pb-4 flex-shrink-0">
//                     <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-900/25 to-transparent pointer-events-none" />
//                     <div className="relative flex items-center justify-between">
//                       <div>
//                         <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-violet-400/60 mb-0.5">
//                           Album
//                         </p>
//                         <h2 className="text-[17px] font-semibold text-white/90 tracking-tight">
//                           Visibility
//                         </h2>
//                       </div>
//                       <div className="w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
//                         <Globe className="w-3.5 h-3.5 text-white/40" />
//                       </div>
//                     </div>
//                     <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />
//                     <div className="h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
//                   </div>
//                 </div>

//                 {/* body */}
//                 <div className="px-5 pb-6 flex flex-col gap-5">
//                   {/* Status */}
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-violet-400/60 mb-3">
//                       Status
//                     </p>
//                     <div className="flex items-center gap-2.5">
//                       <div
//                         className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
//                           albumStat
//                             ? "bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.55)]"
//                             : "bg-white/20"
//                         }`}
//                       />
//                       <span className={`text-[13px] font-medium transition-colors duration-300 ${albumStat ? "text-white/80" : "text-white/35"}`}>
//                         {albumStat ? "Live" : "Not published"}
//                       </span>
//                     </div>
//                     {albumStat && <p className="text-[11px] text-white/25 mt-1.5 ml-4.5">visible to listeners</p>}
//                   </div>

//                   <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

//                   {/* Reach (filled) */}
//                   {/* <div>
//                     <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-violet-400/60 mb-3">
//                       Reach
//                     </p>

//                     <div className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
//                       <div className="p-4 flex items-center justify-between">
//                         <div>
//                           <p className="text-[12px] text-white/70 font-medium">Audience</p>
//                           <p className="text-[11px] text-white/30 mt-0.5">People who can see this album</p>
//                         </div>

//                         <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
//                           <Globe className="w-4 h-4 text-violet-200/60" />
//                         </div>
//                       </div>

//                       <div className="px-4 pb-4">
//                         <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
//                           <div
//                             className="h-full"
//                             style={{
//                               width: albumStat ? "82%" : "28%",
//                               background:
//                                 "linear-gradient(90deg, rgba(167,139,250,0.85), rgba(96,165,250,0.65))",
//                             }}
//                           />
//                         </div>

//                         <div className="mt-2 flex justify-between text-[11px]">
//                           <span className="text-white/30">{albumStat ? "Public" : "Private"}</span>
//                           <span className="text-white/45">{albumStat ? "High reach" : "Low reach"}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div> */}

//                   <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

//                   {/* Tracks info */}
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-violet-400/60 mb-3">
//                       Tracks
//                     </p>
//                     {[
//                       ["Total", `${length}`],
//                       ["Duration", `~${length * 3} min`],
//                       ["Type", "Collection"],
//                     ].map(([k, v]) => (
//                       <div key={k} className="flex items-center justify-between py-1.5">
//                         <span className="text-[11px] text-white/25 font-mono">{k}</span>
//                         <span className="text-[12px] text-white/50">{v}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

//                   {/* Publish */}
//                   <div>
//                     {/* <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-violet-400/60 mb-3">
//                       Publish
//                     </p> */}
//                     <button
//                       onClick={handlePublish}
//                       className={`w-full px-4 py-2.5 rounded-xl text-[12.5px] font-medium border transition-all duration-200 ${
//                         albumStat
//                           ? " text-red-800 text-3xl  hover:bg-green-500/[0.10]"
//                           : "border-white/[0.08] text-white/50 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.14] hover:text-white/70"
//                       }`}
//                     >
//                       {albumStat ? "Unpublish" : "Publish"}
//                     </button>
//                   </div>

//                   <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

//                   {/* Actions */}
//                   <div>
//                     <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-violet-400/60 mb-3">
//                       Actions
//                     </p>
//                     <div className="space-y-1.5">
//                       {[
//                         { label: "+ Add kalam", action: () => setModalShow(true) },
//                         { label: "From collection", action: () => setModalShow2(true) },
//                       ].map(({ label, action }) => (
//                         <button
//                           key={label}
//                           onClick={action}
//                           className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left group hover:bg-white/[0.05] transition-all duration-150"
//                         >
//                           <span className="text-[12.5px] text-white/40 group-hover:text-white/85 truncate transition-colors duration-150">
//                             {label}
//                           </span>
//                           <svg
//                             className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40 ml-auto flex-shrink-0 transition-all duration-200 group-hover:translate-x-0.5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth={2}
//                           >
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                           </svg>
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="mt-auto flex-shrink-0 px-4 py-3 border-t border-white/[0.06] bg-gradient-to-t from-black/60 to-transparent">
//                   <div className="flex items-center justify-between">
//                     <span className="text-[11px] text-white/20 font-medium tracking-wide">
//                       {albumStat ? "Published" : "Draft"}
//                     </span>
//                     <div className="flex gap-1">
//                       {[0, 1, 2].map((i) => (
//                         <div
//                           key={i}
//                           className="w-1 h-1 rounded-full"
//                           style={{
//                             background: albumStat ? "rgba(74,222,128,0.5)" : "rgba(255,255,255,0.2)",
//                             opacity: 0.2 + i * 0.2,
//                           }}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };




//----------------------------------------------------------------------------------------------------------------------------->
import { useState, useEffect, useRef } from "react";
import axiosInstance from "../Apis/axiosInstance";
import { useSearchParams, useNavigate } from "react-router-dom";
import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";
import { Card } from "./components/Card";
import { KalamPlayer } from "./components/kalamPlayer";
import Player from './Player';
import { KalamCard } from "./components/kalamCard";
import { KalamPlayerModal } from "./components/Modals/KalamPlayerModal";
import NewKalam from "./components/NewKalam";
import {
  Bell,
  Settings,
  LayoutGrid,
  BookOpen,
  Star,
  FolderHeart,
  BarChart3,
  HelpCircle,
  LogOut,
  ListFilter,
  ArrowUpDown,
  UploadCloud,
  Share2,
  FileEdit,
  Paintbrush,
  Trash2,
  ChevronRight,
  Plus,
  Clock,
  Menu,
  X,
  SlidersHorizontal,
} from "lucide-react";
import axios from "axios";

export const Album = () => {
  const [SearchParams] = useSearchParams();
  const Navigate = useNavigate();

  const [dataArrived, setDataArrived] = useState(false);
  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [kalamList, setKalamList] = useState([]);
  const [albumName, setAlbumName] = useState([]);
  const [image, setImage] = useState(false);
  const [file, setFile] = useState(null);

  const [playerOpen, setPlayerOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [albumStat, setAlbumStat] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);
  const [tracks, setTracks] = useState([]);

  const [navOpen, setNavOpen] = useState(false); // mobile left nav drawer
  const [visibilityOpen, setVisibilityOpen] = useState(false); // mobile right panel drawer

  const selectedList = useRef(new Map());
  const scrollRef = useRef(null);
  const [isPlayerOpen, setIsPlayerOpen]= useState(false)
  const [userId, setUserId] = useState("");

  const MAX_H = 220;
  const MIN_H = 110;
  const [headerH, setHeaderH] = useState(MAX_H);

  const albumId = SearchParams.get("albumId");
  const currentAlbumName = albumName?.[0]?.name || "Album";

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollY = el.scrollTop;
      const newHeight = Math.max(MIN_H, MAX_H - scrollY);
      setHeaderH(newHeight);
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(()=>{

    axiosInstance
    .get('/api/userId')
    .then((response)=>{
            
      setUserId(response.data)
    }).catch((error)=>{
      console.error("Error while fetching userId", error)
    })

  }, [])

  useEffect(() => {
    axiosInstance
      .get(`/api/albumKalams?albumId=${albumId}`, { withCredentials: true })
      .then((response) => {
        const kalamCollection = response.data.albumKalams?.[0]?.kalamCollection || [];
        setDataArrived(true);
        setKalamList(response.data.kalamList || []);
        setData(kalamCollection);
        setAlbumStat(!!response.data.albumKalams?.[0]?.isLive);
        setAlbumName(response.data.albumKalams || []);
        setLength(response.data.length || kalamCollection.length || 0);
        setTracks(
          kalamCollection.map((x) => ({
            _id: x.kalam?._id,
            title: x.kalam?.content || "Untitled",
            artist: x.kalam?.name || "Unknown",
            coverUrl: response.data.albumKalams?.[0]?.coverUrl || "",
            waveformVideoUrl: x.kalam?.kalamAudio || "",
          }))
        );
      })
      .catch((error) => {
        console.error("Error fetching request", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = () => {
    const keysArray = Array.from(selectedList.current.keys());
    const keysObject = Object.assign({}, keysArray);
    axiosInstance.post(`/api/selection?albumId=${albumId}`, { list: keysObject });
  };

  const handleImage = () => {
    if (!image || !file) {
      alert("Select at least one image");
      return;
    }
    const formData = new FormData();
    formData.append("video", file);
    formData.append("type", "Gallery-Cover");
    axiosInstance.post("/api/GalleryCover", formData);
  };

  const handlePublish = () => {
    axiosInstance
      .post(`/api/album/status?albumId=${albumId}`)
      .then(() => {})
      .catch((error) => console.log("error while loading Album status", error));
  };

  // ── Shared Modals ──────────────────────────────────────────────
  const AddKalamModal = (
    <MyVerticallyCenteredModal isOpen={modalShow} onClose={() => setModalShow(false)}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-amber-400/70 mb-1">Add Kalam</p>
          <p className="text-sm text-gray-500 italic">Every word carries a soul.</p>
        </div>
        <button onClick={() => setModalShow(false)} className="text-gray-500 hover:text-amber-200 transition">✕</button>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => Navigate("/kalam")}
          className="group text-left rounded-2xl px-6 py-5 bg-[#141014] border border-[#2a2a2a] hover:border-amber-500/40 transition"
        >
          <h3 className="text-lg font-light group-hover:text-amber-200 transition">✒ Create a Kalam</h3>
          <p className="text-sm text-gray-500 mt-2">Let your thoughts flow into verse.</p>
        </button>
        <button
          onClick={() => { setModalShow(false); setModalShow2(true); }}
          className="group text-left rounded-2xl px-6 py-5 bg-[#141014] border border-[#2a2a2a] hover:border-amber-500/40 transition"
        >
          <h3 className="text-lg font-light group-hover:text-amber-200 transition">📜 Add from Collection</h3>
          <p className="text-sm text-gray-500 mt-2">Revisit memories and weave them into meaning.</p>
        </button>
      </div>
      <div className="mt-6 text-right">
        <button onClick={() => setModalShow(false)} className="px-5 py-2 rounded-xl border border-[#2a2a2a] hover:border-amber-500/40 hover:text-amber-200 transition text-sm">Close</button>
      </div>
    </MyVerticallyCenteredModal>
  );

  const CollectionModal = (
    <MyVerticallyCenteredModal isOpen={modalShow2} onClose={() => setModalShow2(false)}>
      <div className="w-full h-full">
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-amber-400/70 mb-1">From your collection</p>
        <h1 className="text-2xl text-white/90 font-semibold mb-4">Choose kalams you like</h1>
        <div className="flex flex-col gap-2 max-h-80 overflow-y-auto pr-1">
          {kalamList.map((item, i) => (
            <label
              key={i}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-500/30 transition cursor-pointer"
            >
              <input
                type="checkbox"
                className="accent-amber-400 w-4 h-4 flex-shrink-0"
                onClick={() =>
                  !selectedList.current.has(item._id)
                    ? selectedList.current.set(item._id, item.content)
                    : selectedList.current.delete(item._id)
                }
              />
              <span className="text-white/70 text-sm truncate">{item.content}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-3">
        <button onClick={() => setModalShow2(false)} className="px-5 py-2 rounded-xl border border-[#2a2a2a] hover:border-white/20 text-white/60 hover:text-white/90 transition text-sm">Close</button>
        <button
          onClick={handleSelect}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-black font-medium text-sm hover:opacity-90 transition"
        >
          Done
        </button>
      </div>
    </MyVerticallyCenteredModal>
  );

  // ── Loading state ──────────────────────────────────────────────
  if (!dataArrived) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#120e06]">
        <div className="flex items-center gap-3 text-white/50">
          <div className="w-4 h-4 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin" />
          <span className="text-sm tracking-wide">Loading album…</span>
        </div>
      </div>
    );
  }

  // ── Empty state ────────────────────────────────────────────────
  if (length === 0) {
    return (
      <div className="flex flex-col items-center h-full w-full justify-center bg-[#120e06] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 520px at 50% 0%, rgba(26,8,40,0.55), transparent 60%)," +
              "radial-gradient(700px 520px at 85% 80%, rgba(26,8,40,0.35), transparent 55%)",
          }}
        />
        <div className="relative flex flex-col items-center px-4 text-center">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-amber-400/70 mb-3">Empty album</p>
          <h1 className="text-white text-2xl sm:text-4xl font-semibold max-w-xl">
            You haven&apos;t added any kalams to this album yet.
          </h1>
          <p className="text-white/40 text-sm mt-3">Start building your collection below.</p>
          <button
            onClick={() => setModalShow(true)}
            className="mt-8 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-black font-medium hover:opacity-90 transition"
          >
            + Add Kalam
          </button>
        </div>
        {AddKalamModal}
        {CollectionModal}
      </div>
    );
  }

  const durationLabel = `${length * 3} min`;

  // ── App-wide left navigation (SufiVerse) ─────────────────────────
  const navItems = [
    { icon: LayoutGrid, label: "Dashboard", active: true },
    { icon: BookOpen, label: "Library" },
    { icon: Star, label: "Favorites" },
    { icon: FolderHeart, label: "Collections" },
    { icon: BarChart3, label: "Analytics" },
  ];

  const SideNavContent = (
    <div className="flex flex-col h-full py-6 px-4">
      <div className="mb-8 px-2">
        <h3 className="text-lg font-semibold text-amber-300">Poetry Master</h3>
        <p className="text-xs text-white/40">Mystic Guardian</p>
      </div>
      <nav className="flex-1 space-y-2">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ease-out text-left ${
              active
                ? "bg-amber-400/15 text-amber-300 font-semibold shadow-[0_0_15px_rgba(249,189,34,0.15)]"
                : "text-white/50 hover:text-white/85 hover:bg-white/[0.04] hover:scale-[1.02]"
            }`}
          >
            <Icon className="w-4.5 h-4.5" strokeWidth={2} />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto space-y-1 border-t border-amber-400/10 pt-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white/80 hover:bg-white/[0.04] transition-all duration-200 rounded-lg">
          <HelpCircle className="w-4.5 h-4.5" />
          <span className="text-sm">Support</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400/80 hover:bg-red-500/10 transition-all duration-200 rounded-lg">
          <LogOut className="w-4.5 h-4.5" />
          <span className="text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );

  // ── Right panel: Album Visibility ────────────────────────────────
  const otherAlbums = albumName.slice(1);

  const VisibilityPanelContent = (
    <div className="space-y-6">
      <div
        className="p-6 rounded-3xl"
        style={{
          background: "rgba(18,14,6,0.7)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(249,189,34,0.1)",
        }}
      >
        <h3 className="text-xl font-semibold text-amber-300 mb-6">Album Visibility</h3>

        {/* Status */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] mb-6">
          <div className="flex items-center gap-3">
            <div className="relative w-3 h-3">
              {albumStat && (
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
              )}
              <div
                className={`relative w-3 h-3 rounded-full ${
                  albumStat ? "bg-emerald-500 shadow-[0_0_10px_rgba(52,211,153,0.8)]" : "bg-white/20"
                }`}
              />
            </div>
            <span className="text-sm text-white/80 font-medium">Live Status</span>
          </div>
          <span
            className={`text-[11px] font-bold tracking-widest uppercase ${
              albumStat ? "text-emerald-400" : "text-white/30"
            }`}
          >
            {albumStat ? "Active" : "Draft"}
          </span>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/[0.02] p-4 rounded-2xl border border-amber-400/5">
            <p className="text-[10px] text-white/40 uppercase tracking-tighter">Total Kalams</p>
            <p className="text-xl font-bold text-amber-300">{length}</p>
          </div>
          <div className="bg-white/[0.02] p-4 rounded-2xl border border-amber-400/5">
            <p className="text-[10px] text-white/40 uppercase tracking-tighter">Duration</p>
            <p className="text-xl font-bold text-amber-300">~{durationLabel}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 mb-6">
          <p className="text-sm text-white/40">Configure how your seekers find this collection.</p>
          <button
            onClick={handlePublish}
            className={`w-full py-3.5 px-6 rounded-2xl border-2 font-bold flex items-center justify-center gap-2 group transition-all ${
              albumStat
                ? "border-amber-400/30 text-amber-300 hover:bg-amber-400/10"
                : "border-transparent text-black bg-gradient-to-r from-amber-400 to-orange-400 hover:opacity-90"
            }`}
          >
            <UploadCloud className="w-4.5 h-4.5 group-hover:rotate-180 transition-transform duration-300" />
            {albumStat ? "Unpublish Album" : "Publish Album"}
          </button>
          <label
            htmlFor="cover-upload"
            className="w-full py-3.5 px-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white/60 hover:text-amber-200 hover:border-amber-500/40 font-medium flex items-center justify-center gap-2 cursor-pointer transition"
          >
            <Share2 className="w-4.5 h-4.5" />
            <span className="truncate">{file ? file.name : "Set Cover Image"}</span>
          </label>
          <input id="cover-upload" type="file" className="hidden" onChange={(e) => { setFile(e.target.files[0]); setImage(true); }} />
          {image && file && (
            <button onClick={handleImage} className="text-[11px] text-amber-400/80 hover:text-amber-300 text-left transition -mt-1">
              Upload cover →
            </button>
          )}
        </div>

        {/* Settings list */}
        <div className="border-t border-amber-400/10 pt-4 space-y-1">
          <button
            onClick={() => setModalShow(true)}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileEdit className="w-4 h-4 text-white/40" />
              <span className="text-sm text-white/70">Add Kalam</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-white/25" />
          </button>
          <button
            onClick={() => setModalShow2(true)}
            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-3">
              <Paintbrush className="w-4 h-4 text-white/40" />
              <span className="text-sm text-white/70">From Collection</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-white/25" />
          </button>
          <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center gap-3">
              <Trash2 className="w-4 h-4 text-red-400/60" />
              <span className="text-sm text-red-400/60">Archive Album</span>
            </div>
          </button>
        </div>
      </div>

      {/* Other libraries */}
      {otherAlbums.length > 0 && (
        <div
          className="p-6 rounded-3xl"
          style={{
            background: "rgba(18,14,6,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(249,189,34,0.1)",
          }}
        >
          <h3 className="text-base font-semibold text-amber-300 mb-4">Other Libraries</h3>
          <div className="space-y-4">
            {otherAlbums.map((album) => (
              <div key={album._id} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/[0.04] border border-amber-400/10 group-hover:border-amber-400/40 transition-colors flex items-center justify-center flex-shrink-0">
                  {album.coverUrl ? (
                    <img className="w-full h-full object-cover" src={album.coverUrl} alt={album.name} />
                  ) : (
                    <BookOpen className="w-5 h-5 text-white/20" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white/80 truncate">{album.name}</p>
                  <p className="text-[10px] text-white/30 uppercase">Kalam Collection</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // ── Main View ──────────────────────────────────────────────────
  return (
    <div className="h-screen w-full overflow-hidden relative bg-[#120e06]" style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60vw 60vw at -5% -10%, rgba(26,8,40,0.45), transparent 60%)," +
            "radial-gradient(60vw 60vw at 105% 110%, rgba(121,89,0,0.10), transparent 65%)",
        }}
      />

      {/* ── Top App Bar ── */}
      <header className="fixed top-0 inset-x-0 z-50 h-16 bg-[#120e06]/80 backdrop-blur-xl border-b border-amber-400/10 shadow-2xl shadow-black/50 flex items-center justify-between px-4 md:px-12">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setNavOpen(true)}
            className="md:hidden w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-amber-300 transition"
          >
            <Menu className="w-4 h-4" />
          </button>
          <span
            className="font-semibold text-xl tracking-tight bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, #f9bd22, #ffe1a7, #f9bd22)" }}
          >
            SufiVerse
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-8">
            <a className="text-amber-300 font-bold text-sm hover:scale-105 transition-transform" href="#">Dashboard</a>
            <a className="text-white/45 text-sm hover:text-white/80 hover:scale-105 transition-all" href="#">Library</a>
            <a className="text-white/45 text-sm hover:text-white/80 hover:scale-105 transition-all" href="#">Favorites</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-amber-300/80 hover:text-amber-300 hover:scale-105 transition-transform">
              <Bell className="w-[18px] h-[18px]" />
            </button>
            <button
              onClick={() => setVisibilityOpen(true)}
              className="lg:hidden text-amber-300/80 hover:text-amber-300 hover:scale-105 transition-transform"
            >
              <Settings className="w-[18px] h-[18px]" />
            </button>
            <div className="hidden lg:flex w-9 h-9 rounded-full border-2 border-amber-400/30 items-center justify-center bg-white/[0.04] text-amber-300 text-xs font-semibold">
              {currentAlbumName?.[0]?.toUpperCase() || "A"}
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Left Nav Drawer ── */}
      {navOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setNavOpen(false)} />
          <div className="relative w-[78vw] max-w-xs bg-[#120e06] border-r border-amber-400/20 h-full z-10">
            <button onClick={() => setNavOpen(false)} className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-amber-200 transition">
              <X className="w-3.5 h-3.5" />
            </button>
            {SideNavContent}
          </div>
        </div>
      )}

      {/* ── Mobile Visibility Drawer ── */}
      {visibilityOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setVisibilityOpen(false)} />
          <div className="relative w-[85vw] max-w-sm bg-[#120e06] border-l border-amber-400/20 h-full z-10 overflow-y-auto p-5 pt-14">
            <button onClick={() => setVisibilityOpen(false)} className="absolute top-4 left-4 w-7 h-7 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-amber-200 transition">
              <X className="w-3.5 h-3.5" />
            </button>
            {VisibilityPanelContent}
          </div>
        </div>
      )}

      {/* ── Desktop Left Sidebar ── */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-60 pt-20 border-r border-amber-400/10 bg-[#120e06]/90 backdrop-blur-2xl shadow-[4px_0_24px_rgba(0,0,0,0.8)] z-40">
        {SideNavContent}
      </aside>

      {/* ── Page body ── */}
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto pt-16 md:pl-60"
        style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(251,191,36,0.20) transparent" }}
      >
        <main className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 py-8 relative">
          {/* Center content */}
          <div className="flex-1 space-y-8 max-w-5xl mx-auto w-full min-w-0">
            {/* Collapsing header */}
            <div
              className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-black via-[#1a0828] to-black border border-amber-400/20 shadow-2xl flex flex-col justify-end p-6 md:p-10 transition-[height] duration-300 ease-out"
              style={{ height: `${headerH}px` }}
            >
              <div className="relative z-10 flex flex-col gap-2">
                <span
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase text-amber-400/70 transition-opacity duration-200"
                  style={{ opacity: headerH > MIN_H + 20 ? 1 : 0 }}
                >
                  Featured Album
                </span>
                <h1
                  className="font-semibold leading-none bg-clip-text text-transparent transition-all duration-200"
                  style={{
                    backgroundImage: "linear-gradient(to right, #f9bd22, #ffe1a7, #f9bd22)",
                    fontSize: headerH > MIN_H + 20 ? "clamp(28px, 5vw, 48px)" : "24px",
                  }}
                >
                  {currentAlbumName}
                </h1>
                <div
                  className="flex items-center gap-3 transition-all duration-200"
                  style={{ marginTop: headerH > MIN_H + 20 ? "1rem" : 0, opacity: headerH > MIN_H + 20 ? 1 : 0, height: headerH > MIN_H + 20 ? "auto" : 0, overflow: "hidden" }}
                >
                  <div className="flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs text-amber-300/80 font-medium">{length} Verses</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs text-amber-300/80 font-medium">~{durationLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Collection */}
            <section className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-xl font-semibold text-white/90">Collection</h2>
                  <p className="text-sm text-white/40">The soul&apos;s journey through rhythmic silence</p>
                </div>
                <div className="hidden sm:flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-white/[0.03] border border-amber-400/10 flex items-center justify-center hover:bg-amber-400/15 transition-colors">
                    <ListFilter className="w-4 h-4 text-amber-300" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/[0.03] border border-amber-400/10 flex items-center justify-center hover:bg-amber-400/15 transition-colors">
                    <ArrowUpDown className="w-4 h-4 text-amber-300" />
                  </button>
                  <button
                    onClick={() => setModalShow(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12.5px] font-medium bg-gradient-to-r from-amber-400 to-orange-400 text-black hover:opacity-90 transition"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Kalam
                  </button>
                </div>
              </div>

              <KalamCard
                kalams={data}
                onSelect={(item, i) => { setOpenIndex(i); setDetailsOpen(true); console.log("item", item.kalam); ()=>Navigate(`/play?tracks=${data}`) }}
                
              />
            </section>
          
            {/* Details Modal */}
            <MyVerticallyCenteredModal isOpen={detailsOpen} onClose={() => setDetailsOpen(false)}>
              {openIndex !== null && data?.[openIndex] && (
                // <Card
                //   kalam={data[openIndex]?.kalam?.content}
                //   userName={data[openIndex]?.kalam?.name}
                //   time={data[openIndex]?.kalam?.createdAt}
                //   type={data[openIndex]?.kalam?.type}
                //   kalId={data[openIndex]?.kalam?._id}
                //   mUid={data[openIndex]?.kalam?.createdBy}
                // />
                <NewKalam
                 title={data[openIndex]?.kalam.name}
                 content={data[openIndex]?.kalam.content}
                 type={data[openIndex]?.kalam.category}
                 mUid={userId}
                 kalId={data[openIndex]?.kalam._id}
                 customStyles={data[openIndex]?.kalam.customStyles}
                 />

              )}
              <div className="mt-6 flex items-center justify-end gap-3">
                <button onClick={() => setDetailsOpen(false)} className="px-5 py-2 rounded-xl border border-[#2a2a2a] hover:border-white/20 text-white/60 hover:text-white/90 transition text-sm">Close</button>
                <button
                  onClick={() => { setPlayerOpen(true); setDetailsOpen(false); }}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-black font-medium text-sm hover:opacity-90 transition"
                >
                  ▶ Play
                </button>
              </div>
            </MyVerticallyCenteredModal>

            {playerOpen && (
              <KalamPlayerModal isOpen={playerOpen} height={"full"} width={"1/2"} onClose={() => setPlayerOpen(false)}>
                <KalamPlayer tracks={tracks} initialIndex={openIndex ?? 0} onClose={() => setPlayerOpen(false)} />
              </KalamPlayerModal>
            )}
          </div>

          {/* Right sidebar (desktop only) */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">{VisibilityPanelContent}</div>
          </aside>
        </main>
      </div>

      {/* ── Floating Action Button ── */}
      <button
        onClick={() => setModalShow(true)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full text-black shadow-[0_0_30px_rgba(249,189,34,0.4)] flex items-center justify-center group hover:scale-110 active:scale-95 transition-all z-40"
        style={{ background: "linear-gradient(135deg, #f9bd22, #ffdf9f)" }}
      >
        <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-amber-400 text-black rounded-lg text-xs font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
          Add Kalam
        </span>
      </button>

      {AddKalamModal}
      {CollectionModal}
      {
        console.log("data", data)
      }
        {
          
              isPlayerOpen && <Player tracks={[data[9].kalam]} currentUserId={data.createdBy}/>
            }

    </div>
  );
};