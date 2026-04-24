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






import axiosInstance from "../Apis/axiosInstance";
import { useState, useEffect, useContext, useRef } from "react";
import { Card } from "./components/Card";
import LightRays from "./Bg2";
import StarryBackground from "./components/StarryBackground";
import { Link, useNavigate } from "react-router-dom";
// import { Sidebar } from "lucide-react";
import SidebarExample from "./components/Sidebar"
// import { ContextProvider, MyContext } from "./LikeContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { pre } from "framer-motion/client";


export const Social = () => {
  const [kalamDat, setKalamDat] = useState([]);
  const [uid, setUid] = useState("");
  const [kalamid, setKalamId] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("kalams"); // "kalams" | "albums"
  const[page, setPage] = useState(1);
  const[limit, setLimit] = useState(10);
  // const {kId} = useContext(MyContext)
  const socket = useRef(null);
  const navigate = useNavigate();
  const[length, setLength] = useState(0)
  // const[newKalams, setNewKalams] = useState([]);
  const[hasMore, setHasMore] = useState(true);
  const newKalams = useRef([null]);
  const[totalLength, setTotalLength] = useState(0);

  const handle = () => {
    axiosInstance
      .get(`/api/social?page=${page}&limit=${limit}`, {
        withCredentials: true
      })
      .then((response) => {
        setKalamDat(response.data.allKalamsName);
        console.log(response.data)
        setLength(response.data.allKalamsName.length)
        setUid(response.data.userId[0]._id)
        setTotalLength(response.data.totalLength);
      });

      setPage(prev=>prev + 1);

  };

  useEffect(() => {
    handle();
  }, []);


// useEffect(()=>{


//    socket.current = new WebSocket("ws://localhost:8080?username=Bob");
//    console.log("Hello Checking")

//    socket.current.onopen = () =>{

//     console.log("connected sucessfully");
//     setIsReady(true);

//    }
// }, [])


// useEffect(()=>{

//   if (!isReady){
//     return;
//   }

//   if (!kId){
//     return;
//   }

//     socket.current.send(JSON.stringify({
//     "type": "kalam_like",

//     "payload":{
        
//         "uid": kId,
//         "kalamUid": "69768a001010ab14e9a4ea81"
        
//     }
// }));
  
// }, [kId, isReady])


  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "albums") {
      navigate("/albumsLive");
    }
  };


   const fetchMoreData=()=>{

    console.log("FetchMore_running")

     axiosInstance
      .get(`/api/social?page=${page}&limit=${limit}`, {
        withCredentials: true
      })
      .then((response) => {
        // setKalamDat(prevItems=> prevItems.concat(kalamDat))
        newKalams.current = response.data.allKalamsName;
        console.log("checking_newKalams", newKalams.current)
        console.log("CHECKING_TOTAL_LENGTH", totalLength)
        if(newKalams.current.length === 0){
          setHasMore(false);
        }else{
          setKalamDat(prevItems=> [...prevItems, ...newKalams.current]);
           setPage(prev=>prev + 1);
           setLength(prev=>prev + 10);
        }

       

        
        // console.log(response.data)
        // setLength(response.data.allKalamsName.length)
        // setUid(response.data.userId[0]._id)
      });

  }

  return (
    <div id="mainScroll" className="relative h-screen overflow-auto bg-[#000000]">

      <SidebarExample isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Fixed Light rays (deep background) - CHANGED TO FIXED */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* <LightRays /> */}
      </div>

      {/* Fixed Stars (above rays, still background) - CHANGED TO FIXED */}

      {/* <div className="fixed inset-0 z-[1] pointer-events-none">
        <StarryBackground />
      </div> */}

      {/* Scrollable UI / Content */}
      <div className="relative z-20 pb-20">

        {/* ── Top Bar ── */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">

          {/* Sidebar trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              flex items-center justify-center w-9 h-9
              bg-[#1c1c1e] border border-[#2e2e30] rounded-xl
              text-[#a0a0a6] hover:text-[#e0e0e0] hover:bg-[#242426]
              transition-all duration-150
            "
            aria-label="Open sidebar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Kalams / Albums Toggle */}
          <div className="flex items-center bg-[#1a1a1c] border border-[#2a2a2e] rounded-full p-1 gap-1">
            <button
              onClick={() => handleTabClick("kalams")}
              className={`
                px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${activeTab === "kalams"
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-[#888] hover:text-[#ccc]"
                }
              `}
            >
              Kalams
            </button>
            <button
              onClick={() => handleTabClick("albums")}
              className={`
                px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${activeTab === "albums"
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-[#888] hover:text-[#ccc]"
                }
              `}
            >
              Albums
            </button>
          </div>

          {/* Publish button */}
          <Link
            to="/kalam"
            className="
              flex items-center gap-1.5 px-4 py-2
              bg-violet-600 hover:bg-violet-700
              text-white text-sm font-medium rounded-full
              transition-all duration-150
            "
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Publish
          </Link>

        </div>

        {/* ── Feed ── */}

        {
          console.log("len" ,kalamDat.length)
          
        }
        {
          console.log("hasMore", hasMore )
        }

        

        <InfiniteScroll
  dataLength={kalamDat.length} //This is important field to render the next data
  next={fetchMoreData}
  scrollableTarget= "mainScroll"
  hasMore={hasMore}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
>



        <div className="flex flex-col items-center pt-4">
          {kalamDat.map((item) => (

            <>
            <Card
              key={item._id}
              kalam={item.content}
              kalId={item._id}
              mUid={uid}
              userName={item.name}
              time={item.createdAt}
              type={item.type}
            />

            <br /><br /><br /><br /><br />

            </>
          ),


          
            console.log("checking length", length)
          


          
          )}
        </div>

        </InfiniteScroll>
        

      </div>
      {/* <button onClick={fetchMoreData}>check</button> */}

    </div>
  );
};





