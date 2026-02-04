import axiosInstance from "../Apis/axiosInstance";
import { useState, useEffect, useContext, useRef } from "react";
import { Card } from "./components/Card";
import LightRays from "./Bg2";
import StarryBackground from "./components/StarryBackground";
import {Link} from "react-router-dom";
// import { ContextProvider, MyContext } from "./LikeContext";


export const Social = () => {
  const [kalamDat, setKalamDat] = useState([]);
  const [uid, setUid] = useState("");
  const [kalamid, setKalamId] = useState("");
  const [isReady, setIsReady] = useState(false);
  // const {kId} = useContext(MyContext)
   const socket = useRef(null);
  

  const handle = () => {
    axiosInstance
      .get("/api/social",{

        withCredentials: true
      })
      .then((response) => {
        setKalamDat(response.data.allKalamsName);
        console.log(response.data)
        setUid(response.data.userId[0]._id)
      });
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





  return (
    <div className="relative min-h-screen bg-black">

      {/* Fixed Light rays (deep background) - CHANGED TO FIXED */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays />
      </div>

      {/* Fixed Stars (above rays, still background) - CHANGED TO FIXED */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <StarryBackground />
      </div>

      {/* Scrollable UI / Content */}
      <div className="relative z-20 pt-9 pb-20">
        <div className="flex flex-col items-center">
          <Link 
            to="./kalam"
            className="mb-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
          >
            Publish
          </Link>

          {kalamDat.map((item) => (
            <Card
              key={item._id}
              kalam={item.content}
              kalId={item._id}
              mUid={uid}
              userName={item.name}
              time={item.createdAt}
              type={item.type}
            />
          ))}
        </div>
      </div>

    </div>
  );
};