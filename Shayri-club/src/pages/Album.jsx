import { useState, useEffect, useRef } from "react";
import axiosInstance from "../Apis/axiosInstance";
import { useSearchParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";
import { AlbumCard } from "./components/AlbumsCard";
import ('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
import { Card } from "./components/Card";
import { KalamPlayer } from "./components/kalamPlayer";
// import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";


export const Album=()=>{

    const[SearchParams] = useSearchParams();
    const[dataArrived, setDataArrived] = useState(false);
    const[data, setData] = useState([]);
    const[length, setLength] = useState([]);
    const[statement, setStatement] = useState("You dont have not added any kalams yet"); 
    const[modalShow, setModalShow] = useState(false);
    const[modalShow2, setModalShow2] = useState(false);
    const[kalamList, setKalamList] = useState([]);
    const[selectedKalams, setSelectedKalams] = useState([]);
    const[selected, setSelected] = useState(false);
    const[allVaues, setAllValues] = useState([]);
    const[albumName, setAlbumName] = useState([]);
    const[image, setImage] = useState(false);
    const [file, setFile] = useState([]);
    const[isOpen, setIsOpen] = useState(false);
    const [playerOpen, setPlayerOpen] = useState(false)
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [backgroundVideo, setBackgroundVideo] = useState();
    
    const [openIndex, setOpenIndex] = useState(null);
    const[tracks, setTracks] = useState([]);
  
    let obj;
    let keysMap;
    let keysArray;
    let keysObject;
    
   

    const selectedList = useRef(new Map());
      const scrollRef = useRef(null);

       // header heights in px
  const MAX_H = 220; // starting height
  const MIN_H = 110; // minimum height (shrink limit)

  const [headerH, setHeaderH] = useState(MAX_H);


  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

   const handleScroll = () => {
      const scrollY = el.scrollTop;

      // shrink header based on scroll
      const newHeight = Math.max(MIN_H, MAX_H - scrollY);
      setHeaderH(newHeight);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

   
    // const[final, setFinal] = useState([]);
    let final = [];
    const Navigate = useNavigate();

    const albumId = SearchParams.get('albumId')
    console.log("albumId", albumId)

//      const go = (path) => {
//     onClose();
//     Navigate(path);
//   };

  useEffect(()=>{




        axiosInstance
    .get(`/api/albumKalams?albumId=${albumId}`,{

      withCredentials: true
    })

    .then((response)=>{
                console.log(response.data)
                const kalamCollection = response.data.albumKalams?.[0]?.kalamCollection;
                setDataArrived(true);
                setKalamList(response.data.kalamList);
                setData(response.data.albumKalams[0].kalamCollection);

              setAllValues(Object.values(response.data.albumKalams[0].kalamCollection));

              console.log("checking_allValues",Object.values(response.data.albumKalams[0].kalamCollection))

              console.log("checkin_allValue_again",response.data.albumKalams )
              setAlbumName(response.data.albumKalams)
              console.log("checking albumName", response.data.albumKalams)
                
                
                console.log("checking Data", response.data.albumKalams[0].kalamCollection)
                console.log("checking_length", response.data.length)
                setLength(response.data.length)




                 setTracks(kalamCollection.map((x) => ({
                  _id: x.kalam._id,
                  title: x.kalam.content || "Untitled",
                  artist: x.kalam.name || "Unknown",         // you said treat name as artist
                  coverUrl: albumName?.[0]?.coverUrl || "",  // if you have it, else ""
                  waveformVideoUrl: x.kalam.kalamAudio || "",
                })))





                // console.log("Kalam length", response.data.kalamCollection.length)
    })

    .catch((error)=>{
        console.error("Error fetching request", error)
    })

  }, [])

  const handleSelect=()=>{

    
   obj = Object.fromEntries(selectedList.current)
   
   // Taking keys of map
   keysMap  = selectedList.current.keys();

   //Converting iterator to an array
   keysArray = Array.from(keysMap);

   //Converting Array to Object
   keysObject = Object.assign({}, keysArray);

   console.log("values_Object", keysObject)


               
    axiosInstance

    .post(`/api/selection?albumId=${albumId}`, {
      list: keysObject
    })

    .then((response2)=>{
      console.log("done", response2)
    })
  }

  const checking=()=>{

    return  console.log(selectedList);
  }



  const handleImage=()=>{

    if(!image){

      alert("select atleast one image ")

      return
    }else{

      const formData = new FormData();

      formData.append('video', file);
      formData.append("type", "Gallery-Cover");

      console.log("checking_formData", formData);

      axiosInstance
      .post("/api/GalleryCover", formData)
    }


  }



    return(
        <>
        {/* <h1 className= {
            (!dataArrived)?"Loading kalams":`${
              
                data.map((item, i)=>(
                    <h1 key={i}>
                        {item.kalam}
                    </h1>
                ))
            }`:(data.length === 0)?'fde':'fedd'
            
        }>
       
        </h1> */}

         
         {
            (!dataArrived)?<h1>Loading</h1>:null
         }




         {
            (length === 0)?
            
            <div className="flex flex-col items-center h-full w-full justify-center">
            
            <h1 className="text-center text-white text-4xl my-0.5 ">You have not added any kalams in this album yet......</h1>
            <br /><br />

            <button
        onClick={() => setModalShow(true)}
        className="px-5 py-2 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#6b4f2b] hover:text-[#d4a373] transition"
      >
        + Add Kalam
      </button>
      
              <MyVerticallyCenteredModal isOpen={modalShow} onClose={modalShow}>
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          
          <p className="text-sm text-gray-500 italic mt-1">
            Every word carries a soul.
          </p>
        </div>

        <button
          onClick={()=>setModalShow(false)}
          className="text-gray-500 hover:text-gray-200 transition"
        >
          ✕
        </button>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => Navigate('/kalam')}
          className="group text-left rounded-2xl px-6 py-5 bg-[#161616] border border-[#2a2a2a] hover:border-[#6b4f2b] transition"
        >
          <h3 className="text-lg font-light group-hover:text-[#d4a373] transition">
            ✒ Create a Kalam
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Let your thoughts flow into verse.
          </p>
        </button>

        <button
        //   onClick={() => Navigate('/kalam')}
        onClick={()=>{

            setModalShow(false); 
            setModalShow2(true);
        }}
        
          className="group text-left rounded-2xl px-6 py-5 bg-[#161616] border border-[#2a2a2a] hover:border-[#6b4f2b] transition"
        >
            



          <h3 className="text-lg font-light group-hover:text-[#d4a373] transition">
            📜 Add from Collection
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Revisit memories and weave them into meaning.
          </p>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6 text-right">
        <button
          onClick={()=>setModalShow(false)}
          className="px-5 py-2 rounded-xl border border-[#2a2a2a] hover:border-[#6b4f2b] hover:text-[#d4a373] transition text-sm"
        >
          Close
        </button>
      </div>
    </MyVerticallyCenteredModal>
     <MyVerticallyCenteredModal isOpen={modalShow2} onClose={modalShow2}>

      <div className="w-full h-full">
        <h1 className="text-2xl">Choose kalams you like</h1>

        {
          kalamList.map((item, i)=>(
            
            <div key={i} className="w-full border border-blue-400 bg-blue-400 flex ">
            <h1 className="text-black">{item.content}</h1>
           
            {/* <input type="checkbox" onChange={

              (!selected)?()=>{
                setSelectedKalams(prev=>[...prev, item.content]);
                 setSelected(true)
                }
              :(selected)? final = selectedKalams.filter(value=>{
                return value!==item.content

                
              }):null
            } /> */}

            <input type="checkbox" onClick={

              ()=>
              (!selectedList.current.has(item._id))?selectedList.current.set(item._id, item.content):selectedList.current.delete(item._id)
            } />

           

            {console.log(selectedList)};
           
            </div>
          ))
        }

               
              


      </div>
        <button onClick={()=>setModalShow2(false)}>close</button>
        <button onClick={handleSelect}>Done</button>
        <button onClick={checking}>check</button>
     </MyVerticallyCenteredModal>
            </div>
            
            :  

           <div className="h-screen w-full overflow-hidden bg-black flex flex-col">

      {/* 🔥 Elevated Collapsing Header */}
      <div
        className="sticky top-0 z-50 
                   bg-blue-950 backdrop-blur-md
                   shadow-[0_8px_30px_rgba(0,0,0,0.6)]
                   border-b border-black
                   transition-all duration-300 ease-out
                   flex items-center justify-center"
        style={{ height: `${headerH}px` }}
      >
        {/* <img className="w-full h-full absolute object-cover" src="http://res.cloudinary.com/dbcocbkit/image/upload/v1771687457/ntnracgxrd0154bzrhox.jpg" alt="" /> */}
        <h1 className="text-white text-2xl font-semibold transition-all duration-300">
          Top Section (shrinks on scroll)
        </h1>
        <input type="file" onChange={(e)=>{setFile(e.target.files[0]); setImage(true)}} />
      </div>

      {/* Body Section */}
      <div className="flex flex-1 min-h-0">

        {/* Sidebar (static) */}
  <div
      className="w-1/5 h-full min-h-0 flex flex-col overflow-hidden
                 bg-[#080808] border-r border-white/[0.04]"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* ── Header ── */}
      <div className="relative px-5 pt-6 pb-4 flex-shrink-0">
        {/* Ambient glow behind header */}
        <div className="absolute inset-x-0 top-0 h-24
                        bg-gradient-to-b from-violet-900/20 to-transparent
                        pointer-events-none" />

        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase
                          text-violet-400/60 mb-0.5">
              Your
            </p>
            <h2 className="text-[17px] font-semibold text-white/90 tracking-tight">
              Library
            </h2>
          </div>

         {  console.log("tracks", tracks[0])}

          {/* Add button */}
          <button className="w-7 h-7 rounded-full
                             bg-white/[0.05] hover:bg-white/[0.10]
                             border border-white/[0.08] hover:border-violet-500/40
                             flex items-center justify-center
                             transition-all duration-200 group">
            <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-violet-400
                            transition-colors duration-200"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="mt-4 h-px bg-gradient-to-r
                        from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* ── Scrollable List ── */}
      <div
        className="flex-1 overflow-y-auto px-3 pb-6"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.08) transparent",
        }}
      >
        {albumName.map((album, idx) => (
          <div key={album._id} className="mb-1">

            {/* ── Album Row ── */}
            <button
              className="w-full text-left group relative
                         flex items-center gap-3
                         px-3 py-2.5 rounded-xl
                         hover:bg-white/[0.04]
                         transition-all duration-200"
            >
              {/* Colored dot accent per album */}
              <div
                className="w-1 h-6 rounded-full flex-shrink-0 opacity-70"
                style={{
                  background: [
                    "linear-gradient(to bottom, #a78bfa, #7c3aed)",
                    "linear-gradient(to bottom, #60a5fa, #2563eb)",
                    "linear-gradient(to bottom, #f472b6, #be185d)",
                    "linear-gradient(to bottom, #34d399, #059669)",
                  ][idx % 4],
                }}
              />

              <div className="flex-1 min-w-0 ">
                <p className="text-[13px] font-medium text-white/70
                               group-hover:text-white/95 truncate
                               transition-colors duration-200">
                  {album.name}
                </p>
                <p className="text-[11px] text-white/25 mt-0.5">
                  {length} tracks
                </p>
              </div>

              <svg
                className="w-3.5 h-3.5 text-white/15 group-hover:text-white/40
                           flex-shrink-0 transition-all duration-200
                           group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* ── Track List ── */}
            <div className="mt-0.5 ml-4 space-y-px">
              {data.map((item, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-3
                             px-3 py-2 rounded-lg text-left group
                             hover:bg-white/[0.05]
                             transition-all duration-150 relative"
                >
                  {/* Index → Play on hover */}
                  <div className="w-5 flex-shrink-0 flex items-center justify-center">
                    <span className="text-[11px] text-white/20 font-mono
                                     group-hover:opacity-0 absolute
                                     transition-opacity duration-150">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <svg
                      className="w-3 h-3 text-violet-400
                                 opacity-0 group-hover:opacity-100
                                 transition-opacity duration-150"
                      fill="currentColor" viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  <span className="text-[12.5px] font-normal text-white/40
                                   group-hover:text-white/85 truncate
                                   transition-colors duration-150">
                    {item.kalam.content}
                  </span>

                  {/* Duration placeholder */}
                  <span className="ml-auto text-[11px] text-white/15
                                   group-hover:text-white/30
                                   flex-shrink-0 font-mono
                                   transition-colors duration-150">
                    3:24
                  </span>
                </button>
              ))}
            </div>

            {/* Section divider (skip after last) */}
            {idx < length - 1 && (
              <div className="mx-3 mt-3 mb-2 h-px
                              bg-gradient-to-r from-transparent
                              via-white/[0.06] to-transparent" />
            )}
          </div>
        ))}
      </div>
      <button onClick={handleImage}>set</button>

      {/* ── Footer Bar ── */}
      <div className="flex-shrink-0 px-4 py-3
                      border-t border-white/[0.04]
                      bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-white/20 font-medium tracking-wide">
            {length} albums
          </span>
          <div className="flex gap-1">
            {[0,1,2].map(i => (
              <div key={i}
                className="w-1 h-1 rounded-full bg-white/20"
                style={{ opacity: 0.2 + i * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto min-h-0 p-6 bg-black text-white"
        >
          <h1 className="mb-6 text-xl font-semibold">
            Scroll to see header shrink
          </h1>

          {/* {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="border border-gray-700 p-4 mb-4 rounded-lg"
            >
              Row {i + 1}
            </div>
          ))} */}

             

{
                       data.map((item, i)=>(
                        <div key={i} className="flex flex-col">
                        {/* <button onClick={()=>setIsOpen(true)}> */}

                        <button onClick={() => { setOpenIndex(i); setDetailsOpen(true); }}>
                    <h1  className="border border-gray-700 p-4 mb-4 rounded-lg">
                        {item.kalam.content}
                    </h1>
                    </button>
                    {/* <MyVerticallyCenteredModal isOpen={isOpen} onClose={isOpen}>

              <Card kalam={item.kalam.content} userName={item.kalam.name} time= {item.kalam.createdAt} type= {item.kalam.type} kalId= {item.kalam._id} mUid= {item.kalam.createdBy}/>

                 <button onClick={()=>setIsOpen(false)}>Close</button>
                 <button onClick={setPlayerOpen(true)}>play</button>
             </MyVerticallyCenteredModal> */}


            <MyVerticallyCenteredModal isOpen={detailsOpen} onClose={() => setDetailsOpen(false)}>
                    {openIndex !== null && data[openIndex] && (
                      <Card
                        kalam={data[openIndex].kalam.content}
                        userName={data[openIndex].kalam.name}
                        time={data[openIndex].kalam.createdAt}
                        type={data[openIndex].kalam.type}
                        kalId={data[openIndex].kalam._id}
                        mUid={data[openIndex].kalam.createdBy}
                      />
                    )}

                    <button onClick={() => setDetailsOpen(false)}>Close</button>
                    <button onClick={()=>{setPlayerOpen(true); setDetailsOpen(false)}}>play</button>
                  </MyVerticallyCenteredModal>

             

                              {playerOpen && (
                    <MyVerticallyCenteredModal
                      isOpen={playerOpen}
                      onClose={() => setPlayerOpen(false)}
                    >
                      <KalamPlayer
                        tracks ={tracks}
                        initialIndex={openIndex ?? 0}
                        onClose={() => setPlayerOpen(false)}
                        
                      />
                    </MyVerticallyCenteredModal>

                   
                  )}
                    </div>
                ))

                

  }           
             

            
        </div>
              
      </div>
              
    </div>
              

          }

                


                 

          
              
           
            
         
    
      {console.log(selectedList)}

 
        
        </>
    )
}