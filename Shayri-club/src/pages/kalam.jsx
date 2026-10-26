// import axiosInstance from "../Apis/axiosInstance";
// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from 'react-router-dom';
// // import { MyContext } from "../pages/";
// import { useContext } from "react";
// // import { createContext } from "react";
// import { MyContext } from "../ContextProvider";





//  const Kalam = () => {
  



//   const [type, setType] = useState("");
//   const [content, setContent] = useState("");
//   const [message, setMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();
//   const {setStreak, setStreak2} = useContext(MyContext);


//    const audioChunk = useRef([]);
//   const [recording, setRecording] = useState([]);
//   const mediaRecorderRef = useRef(null);
//   const [streamRecording, setStreamRecording] = useState(false);


//   // const {content, setContent} = useContext(MyContext);
//   // const {type, setType} = useContext(MyContext);

//   const handleKalam = () => {
//     axiosInstance
//       .post(
//         "/kalam",
//         {
//           type,
//           content,
//         },
//         { withCredentials: true }
//       )
//       .then((response) => {
//         const data = response.data;
//         console.log(response.data);
        
        

       

//         if (data.success) {
//           setMessage(data.msg);
//           setShowPopup(true); // show popup on success

//           // hide popup automatically
//           setTimeout(() => {
//             setShowPopup(false);
//           }, 2000);

//           if (data.redirectUrl) {
        
//             navigate(data.redirectUrl);
//           }
//         }
//          setStreak(response.data.streak[0].createdAt)
//        setStreak2(response.data.streak[1].createdAt)
      
//       })
//       .catch((err) => {
//         console.error(err);
      
//       });
//   };  

//       const startRec = async () => {
//     try {
//       audioChunk.current = []; // reset previous chunks

//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const mediaRecorder = new MediaRecorder(stream);

//       mediaRecorder.ondataavailable = (e) => {
//         if (e.data.size > 0) {
//           audioChunk.current.push(e.data);
//         }
//       };

//       mediaRecorder.onstop = () => {
//         const audioBlob = new Blob(audioChunk.current, { type: "audio/wav" });
//         const audioUrl = URL.createObjectURL(audioBlob);

//         setRecording([audioUrl]);
//       };

//       mediaRecorderRef.current = mediaRecorder;
//       mediaRecorder.start();
//       setStreamRecording(true);

//     } catch (error) {
//       console.log("Mic permission error:", error);
//     }
//   };



//         const stopRec = () => {
//     if (
//       mediaRecorderRef.current &&
//       mediaRecorderRef.current.state === "recording"
//     ) {
//       mediaRecorderRef.current.stop();
//       setStreamRecording(false);
//     }
//   };

//     // 🔥 Toggle function
//   const handleRecording = () => {
//     if (streamRecording) {
//       stopRec();
//     } else {
//       startRec();
//     }
//   };

//   return (
//     <>
//     <div>
//     <h1>Hello </h1>
//     <br /><br />

//      <button onClick={handleRecording}>
//         {streamRecording ? "Stop Recording" : "Start Recording"}
//       </button>

//       {recording.map((recUrl, i) => (
//         <div key={i}>
//           <audio controls src={recUrl} />
//           <a href={recUrl} download={`recording-${i}.wav`}>
//             Download
//           </a>
//         </div>
//       ))}

//   {/* {streak}
//   {streak2}
//      */}
//       <div className="flex flex-col items-center justify-center h-screen gap-6">
//         <h1 className="text-4xl text-black">Welcome to Kalam</h1>

//         <input
//           type="text"
//           placeholder="type"
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="border px-3 py-2 rounded text-black"
//         />

//         <input
//           type="text"
//           placeholder="content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="border px-3 py-2 rounded text-black"
//         />

//         <button
//           onClick={handleKalam}
//           className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition"
//         >
//           Submit
//         </button>

//         <h1>{message}</h1>
//         <Link to = '/UrKalam'>
//         <button>view your kalams</button>
//         </Link>

//         {/* Popup */}
//         <AnimatePresence>
//           {showPopup && (
//             <motion.div
//               initial={{ scale: 0.5, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.5, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 200, damping: 20 }}
//               className="fixed top-20 right-1/2 translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-2xl shadow-2xl"
//             >
//               ✅ Submitted Successfully!
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       </div>
      
//     </>
//   );
// };

// // export const MyContext = createContext();

// // export const ContextProvider = ({ children })=>{

// //   const[content, setContent] = useState("");

// //   return(

// //     <MyContext.Provider value = {{content, setContent}}>
// //         { children }
    
// //     </MyContext.Provider>
    
// //   )

// // }




// export default Kalam;














//------------------------------------------------------------------------------------------------------------->


// import axiosInstance from "../Apis/axiosInstance";
// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { MyContext } from "../ContextProvider";

// const Kalam = () => {
//   const [type, setType] = useState("");
//   const [content, setContent] = useState("");
//   const [message, setMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();
//   const { setStreak, setStreak2 } = useContext(MyContext);

//   const audioChunk = useRef([]);
//   const [recording, setRecording] = useState([]);
//   const mediaRecorderRef = useRef(null);
//   const [streamRecording, setStreamRecording] = useState(false);
//   const[file, setFile] = useState([]);
//   const[available, setAvailable] = useState(false);
//   const[recordingFinal, setRecordingFinal] = useState([]); 
//   const[checking, setChecking] = useState()
//   // let audioBlob;
 

//   const handleKalam = () => {

//     if(!available){


//          axiosInstance
//       .post("/kalam", { type, content }, { withCredentials: true })
//       .then((response) => {
//         const data = response.data;
//         console.log(response.data);

//         if (data.success) {
//           setMessage(data.msg);
//           setShowPopup(true);
//           setTimeout(() => setShowPopup(false), 2000);
//           if (data.redirectUrl) navigate(data.redirectUrl);
//         }
//         setStreak(response.data.streak[0].createdAt);
//         setStreak2(response.data.streak[1].createdAt);
//       })
//       .catch((err) => console.error(err));


//     }else{

//        const formData = new FormData()

//        console.log("type", typeof(checking))

//       formData.append('audio', checking, {'originalFileName':"hello.webm","type":type, "content": content});
//       formData.append('type', type)
//       formData.append('content', content)

//       console.log("recording", recordingFinal)
    


//       axiosInstance
//       .post('/upload/kalamAudio', formData,{

//         withCredentials: true
        
//       })

//       .then((response)=>{

//           console.log("data from multer",response.data)
//         })
        
//         .catch((error)=>{
//           console.error("error from Multer", error)
//         })

//     }
 
//   };

//   const startRec = async () => {
//     try {
//       audioChunk.current = [];
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       const mediaRecorder = new MediaRecorder(stream);

//       mediaRecorder.ondataavailable = (e) => {
//         if (e.data.size > 0) audioChunk.current.push(e.data);
//       };

//       mediaRecorder.onstop = () => {
//         const pook = new Blob(audioChunk.current, { type: "audio/wav" });
//         setChecking(pook)
//         const audioUrl = URL.createObjectURL(pook);
//         console.log("checking type", pook)
//         setRecording([audioUrl]);
//         setRecordingFinal([audioUrl + ".wav"])
//         setAvailable(true);
//       };

//       mediaRecorderRef.current = mediaRecorder;
//       mediaRecorder.start();
//       setStreamRecording(true);
//     } catch (error) {
//       console.log("Mic permission error:", error);
//     }
//   };

//   const stopRec = () => {
//     if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
//       mediaRecorderRef.current.stop();
//       setStreamRecording(false);
//     }
//   };

//   const handleRecording = () => {
//     if (streamRecording) stopRec();
//     else startRec();
//   };


//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Mono:wght@300;400&display=swap');

//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .kalam-root {
//           min-height: 100vh;
//           background-color: #0a0a0c;
//           background-image:
//             radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 80, 255, 0.08) 0%, transparent 60%),
//             radial-gradient(ellipse 40% 30% at 80% 80%, rgba(60, 200, 180, 0.05) 0%, transparent 50%);
//           font-family: 'DM Mono', monospace;
//           color: #e8e2d9;
//         }

//         .kalam-container {
//           max-width: 640px;
//           margin: 0 auto;
//           padding: 60px 24px 80px;
//         }

//         /* Header */
//         .kalam-header {
//           margin-bottom: 56px;
//           border-bottom: 1px solid rgba(255,255,255,0.06);
//           padding-bottom: 32px;
//         }

//         .kalam-eyebrow {
//           font-family: 'DM Mono', monospace;
//           font-size: 10px;
//           font-weight: 400;
//           letter-spacing: 0.3em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.3);
//           margin-bottom: 12px;
//         }

//         .kalam-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(42px, 8vw, 64px);
//           font-weight: 300;
//           letter-spacing: -0.02em;
//           line-height: 1;
//           color: #f0ebe3;
//         }

//         .kalam-title span {
//           color: rgba(120, 200, 180, 0.9);
//         }

//         .kalam-subtitle {
//           margin-top: 12px;
//           font-size: 11px;
//           letter-spacing: 0.08em;
//           color: rgba(255,255,255,0.25);
//         }

//         /* Form Section */
//         .kalam-section {
//           margin-bottom: 40px;
//         }

//         .kalam-label {
//           display: block;
//           font-size: 10px;
//           letter-spacing: 0.25em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.3);
//           margin-bottom: 10px;
//         }

//         .kalam-input {
//           width: 100%;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 4px;
//           padding: 14px 18px;
//           font-family: 'DM Mono', monospace;
//           font-size: 13px;
//           color: #e8e2d9;
//           transition: border-color 0.2s, background 0.2s;
//           outline: none;
//         }

//         .kalam-input::placeholder {
//           color: rgba(255,255,255,0.15);
//         }

//         .kalam-input:focus {
//           border-color: rgba(120, 200, 180, 0.4);
//           background: rgba(255,255,255,0.05);
//         }

//         /* Buttons */
//         .kalam-btn-primary {
//           width: 100%;
//           padding: 16px;
//           background: rgba(120, 200, 180, 0.12);
//           border: 1px solid rgba(120, 200, 180, 0.3);
//           border-radius: 4px;
//           color: rgba(120, 200, 180, 0.9);
//           font-family: 'DM Mono', monospace;
//           font-size: 11px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           cursor: pointer;
//           transition: background 0.2s, border-color 0.2s, color 0.2s;
//           margin-bottom: 16px;
//         }

//         .kalam-btn-primary:hover {
//           background: rgba(120, 200, 180, 0.2);
//           border-color: rgba(120, 200, 180, 0.6);
//           color: #7efbda;
//         }

//         .kalam-btn-secondary {
//           display: inline-block;
//           padding: 12px 24px;
//           background: transparent;
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 4px;
//           color: rgba(255,255,255,0.4);
//           font-family: 'DM Mono', monospace;
//           font-size: 10px;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           cursor: pointer;
//           text-decoration: none;
//           transition: border-color 0.2s, color 0.2s;
//         }

//         .kalam-btn-secondary:hover {
//           border-color: rgba(255,255,255,0.25);
//           color: rgba(255,255,255,0.7);
//         }

//         /* Record button */
//         .kalam-record-btn {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           width: 100%;
//           padding: 14px 18px;
//           background: rgba(255,255,255,0.02);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 4px;
//           color: rgba(255,255,255,0.5);
//           font-family: 'DM Mono', monospace;
//           font-size: 11px;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           cursor: pointer;
//           transition: all 0.2s;
//         }

//         .kalam-record-btn:hover {
//           border-color: rgba(255, 100, 100, 0.3);
//           color: rgba(255,180,180,0.8);
//           background: rgba(255, 80, 80, 0.05);
//         }

//         .kalam-record-btn.recording {
//           border-color: rgba(255, 80, 80, 0.5);
//           color: rgba(255, 120, 120, 0.9);
//           background: rgba(255, 80, 80, 0.08);
//         }

//         .rec-dot {
//           width: 8px;
//           height: 8px;
//           border-radius: 50%;
//           background: rgba(255, 100, 100, 0.5);
//           flex-shrink: 0;
//         }

//         .rec-dot.active {
//           background: rgb(255, 80, 80);
//           animation: pulse 1s infinite;
//         }

//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(0.8); }
//         }

//         /* Audio player */
//         .kalam-audio-wrap {
//           margin-top: 12px;
//           padding: 14px 18px;
//           background: rgba(255,255,255,0.02);
//           border: 1px solid rgba(255,255,255,0.06);
//           border-radius: 4px;
//           display: flex;
//           align-items: center;
//           gap: 14px;
//         }

//         .kalam-audio-wrap audio {
//           flex: 1;
//           height: 28px;
//           filter: invert(0.85) hue-rotate(160deg);
//         }

//         .kalam-download-link {
//           font-size: 10px;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: rgba(120, 200, 180, 0.6);
//           text-decoration: none;
//           white-space: nowrap;
//           transition: color 0.2s;
//         }

//         .kalam-download-link:hover {
//           color: rgba(120, 200, 180, 1);
//         }

//         /* Divider */
//         .kalam-divider {
//           border: none;
//           border-top: 1px solid rgba(255,255,255,0.05);
//           margin: 40px 0;
//         }

//         /* Message */
//         .kalam-message {
//           font-size: 12px;
//           letter-spacing: 0.1em;
//           color: rgba(255,255,255,0.3);
//           text-align: center;
//           margin-bottom: 20px;
//           min-height: 16px;
//         }

//         /* Footer row */
//         .kalam-footer {
//           display: flex;
//           justify-content: flex-end;
//           margin-top: 12px;
//         }

//         /* Popup */
//         .kalam-popup {
//           position: fixed;
//           top: 32px;
//           left: 50%;
//           transform: translateX(-50%);
//           background: rgba(12, 14, 16, 0.95);
//           border: 1px solid rgba(120, 200, 180, 0.3);
//           backdrop-filter: blur(20px);
//           color: rgba(120, 200, 180, 0.9);
//           padding: 14px 28px;
//           border-radius: 4px;
//           font-family: 'DM Mono', monospace;
//           font-size: 11px;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           z-index: 1000;
//           white-space: nowrap;
//           box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(120,200,180,0.05);
//         }
//       `}</style>

//       <div className="kalam-root">
//         <div className="kalam-container">

//           {/* Header */}
//           <header className="kalam-header">
//             <p className="kalam-eyebrow">Your Writing Space</p>
//             <h1 className="kalam-title">
//               Kal<span>am</span>
//             </h1>
//             <p className="kalam-subtitle">Capture thoughts. Record moments.</p>
//           </header>

//           {/* Voice Recording */}
//           <div className="kalam-section">
//             <label className="kalam-label">Voice Note</label>
//             <button
//               className={`kalam-record-btn ${streamRecording ? "recording" : ""}`}
//               onClick={handleRecording}
//             >
//               <span className={`rec-dot ${streamRecording ? "active" : ""}`} />
//               {streamRecording ? "Recording — tap to stop" : "Tap to record"}
//             </button>

//             {recording.map((recUrl, i) => (
//               <div className="kalam-audio-wrap" key={i}>
//                 <audio controls src={recUrl} />
//                 <a className="kalam-download-link" href={recUrl} download={`recording-${i}.wav`}>
//                   ↓ Save
//                 </a>
//               </div>
//             ))}
//           </div>

//           <hr className="kalam-divider" />

//           {/* Form */}
//           <div className="kalam-section">
//             <label className="kalam-label">Type</label>
//             <input
//               className="kalam-input"
//               type="text"
//               placeholder="e.g. poem, thought, note..."
//               value={type}
//               onChange={(e) => setType(e.target.value)}
//             />
//           </div>

//           <div className="kalam-section">
//             <label className="kalam-label">Content</label>
//             <input
//               className="kalam-input"
//               type="text"
//               placeholder="Write something..."
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//             />
//           </div>

//           {message && <p className="kalam-message">{message}</p>}

//           <button className="kalam-btn-primary" onClick={handleKalam}>
//             Submit Entry
//           </button>

//           <div className="kalam-footer">
//             <Link to="/UrKalam" style={{ textDecoration: "none" }}>
//               <button className="kalam-btn-secondary">View your kalams →</button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Success Popup */}
//       <AnimatePresence>
//         {showPopup && (
//           <motion.div
//             className="kalam-popup"
//             initial={{ y: -16, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -16, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 300, damping: 24 }}
//           >
//             ✦ Entry submitted
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Kalam;


//------------------------------------------------------------------------------------------------------------------------------->
import axiosInstance from "../Apis/axiosInstance";
import { useState, useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../ContextProvider";
import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";
import Shepherd from "shepherd.js";
import "shepherd.js/dist/css/shepherd.css";



const PRESET_COLORS = [
  { hex: "#26215C", label: "Midnight Indigo" },
  { hex: "#04342C", label: "Deep Forest" },
  { hex: "#042C53", label: "Deep Navy" },
  { hex: "#412402", label: "Walnut" },
  { hex: "#4B1528", label: "Burgundy" },
  { hex: "#2C2C2A", label: "Charcoal" },
  { hex: "#534AB7", label: "Violet" },
  { hex: "#0F6E56", label: "Emerald" },
  { hex: "#854F0B", label: "Amber Dusk" },
  { hex: "#993556", label: "Rose Deep" },
  { hex: "#888780", label: "Stone" },
  { hex: "#185FA5", label: "Royal Blue" },
];

const MOODS = [
  { en: "Ishq", ur: "عشق" },
  { en: "Gham", ur: "غم" },
  { en: "Khushi", ur: "خوشی" },
  { en: "Firaaq", ur: "فراق" },
  { en: "Falsafa", ur: "فلسفہ" },
  { en: "Watan", ur: "وطن" },
];

const SINF_OPTIONS = [
  { value: "Sher", ur: "شعر" },
  { value: "Nazm", ur: "نظم" },
  { value: "Ghazal", ur: "غزل" },
  { value: "Qita", ur: "قطعہ" },
  { value: "Rubai", ur: "رباعی" },
  { value: "Masnavi", ur: "مثنوی" },
  { value: "Marsiya", ur: "مرثیہ" },
];

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

// ── Text color palettes ─────────────────────────────────────────────────────
const TEXT_COLOR_PALETTE = [
  { hex: "#FFFFFF", label: "Pure White" },
  { hex: "#F5EDD5", label: "Parchment" },
  { hex: "#E8D5A3", label: "Warm Gold" },
  { hex: "#F0C060", label: "Saffron" },
  { hex: "#D4A0C0", label: "Rose Petal" },
  { hex: "#AFA9EC", label: "Lavender" },
  { hex: "#88C8D8", label: "Aqua Mist" },
  { hex: "#98D8A8", label: "Sage" },
  { hex: "#F0A080", label: "Amber Glow" },
  { hex: "#E8A0B0", label: "Blush" },
  { hex: "#C8D8E8", label: "Moon Mist" },
  { hex: "#1A1A1A", label: "Ink" },
];

function isDark(hex) {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h[0]+h[0]+h[1]+h[1]+h[2]+h[2] : h;
  const r = parseInt(full.slice(0,2),16), g = parseInt(full.slice(2,4),16), b = parseInt(full.slice(4,6),16);
  return (r*299 + g*587 + b*114) / 1000 < 128;
}

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

// ── Product tour (Shepherd.js) ──────────────────────────────────────────────
const tourEl = (selector, i = 0) => () => document.querySelectorAll(selector)[i];
const TP = ".text-protect > .tp-row:nth-child"; // rows inside "Text readability"

const TOUR_STEPS = [
  {
    id: "welcome",
    title: "خوش آمدید · Welcome to Kalam",
    text: "Let's take a short walk through the composer, from choosing a form to publishing your verse. It takes about a minute.",
  },
  {
    id: "preview",
    title: "Live preview",
    text: "Everything you change appears here instantly: your words, fonts, colors and background. What you see is what readers will see.",
    target: tourEl(".k-preview-card"),
    on: "auto",
  },
  {
    id: "form",
    title: "Choose your form · صنف",
    text: "Pick the kind of writing: Sher, Nazm, Ghazal, Qita, Rubai, Masnavi or Marsiya. It shows as a badge on your card.",
    target: tourEl(".k-select"),
    on: "bottom",
  },
  {
    id: "title",
    title: "Give it a title · عنوان",
    text: "Name your kalam. The title is styled separately from your content, so you can give it its own font, color and size.",
    target: tourEl(".k-input"),
    on: "bottom",
  },
  {
    id: "mood",
    title: "Set the mood · کیفیت",
    text: "Tag your piece with one or more moods like Ishq, Gham or Khushi. These help readers discover your work.",
    target: tourEl(".k-moods"),
    on: "bottom",
  },
  {
    id: "content",
    title: "Write your kalam · متن",
    text: "Write in Urdu, Roman Urdu or both. Line breaks are preserved exactly as you type them.",
    target: tourEl(".k-textarea-wrap"),
    on: "top",
  },
  {
    id: "voice",
    title: "Add your voice 🎙",
    text: "Tap <b>Speak</b> to record yourself reciting. Tap again to stop. Your recording appears below with a player and will be published with your kalam.",
    target: tourEl(".k-mic"),
    on: "top",
  },
  {
    id: "background",
    title: "Pick a background · پس منظر",
    text: "Choose a preset color, a custom color, or upload your own image to set the scene for your words.",
    target: tourEl(".bp-tabs"),
    on: "top",
  },
  {
    id: "brightness",
    title: "Brightness",
    text: "Dim or brighten your background color or image to find the right atmosphere.",
    target: tourEl(".bp-opacity-row"),
    on: "top",
  },
  {
    id: "textcolor",
    title: "Text color",
    text: "Choose <b>Light</b>, <b>Dark</b>, or <b>Auto</b>, which picks the most readable option for your background.",
    target: tourEl(`${TP}(2)`),
    on: "top",
  },
  {
    id: "backdrop",
    title: "Text backdrop",
    text: "Add a soft blur or a solid panel behind your text so it stays readable on busy images.",
    target: tourEl(`${TP}(3)`),
    on: "top",
  },
  {
    id: "scrim",
    title: "Scrim overlay",
    text: "A scrim darkens your background evenly. Slide it up when text is hard to read over a bright image.",
    target: tourEl(`${TP}(4)`),
    on: "top",
  },
  {
    id: "titlefont",
    title: "Title font · عنوان کا خط",
    text: "Scroll through poetry-friendly typefaces and tap one. The preview updates instantly.",
    target: tourEl(`${TP}(5)`),
    on: "top",
  },
  {
    id: "titlecolor",
    title: "Title color · عنوان رنگ",
    text: "Stay on <b>Auto</b>, tap a palette swatch, or use the color thumb to pick any shade.",
    target: tourEl(`${TP}(6)`),
    on: "top",
  },
  {
    id: "contentfont",
    title: "Content font · متن کا خط",
    text: "Pick a typeface for the body of your kalam, including Nastaliq options for Urdu script.",
    target: tourEl(`${TP}(7)`),
    on: "top",
  },
  {
    id: "contentcolor",
    title: "Content color · متن رنگ",
    text: "Color your verses independently from the title for a layered, editorial look.",
    target: tourEl(`${TP}(8)`),
    on: "top",
  },
  {
    id: "sizes",
    title: "Title & content size",
    text: "Switch between Small, Medium and Large for both the title and the content to balance your layout.",
    target: tourEl(`${TP}(9)`),
    on: "top",
  },
  {
    id: "publish",
    title: "Publish your kalam ✦",
    text: "When you're happy with the preview, hit <b>Publish kalam</b> to share it with the world. Happy writing!",
    target: tourEl(".k-btn-primary"),
    on: "top",
  },
];

const TOUR_CATS = {
  welcome: "ATELIER ONBOARDING",
  preview: "LIVE PREVIEW SUITE",
  form: "CLASSICAL STRUCTURE",
  title: "CLASSICAL STRUCTURE",
  mood: "CLASSICAL STRUCTURE",
  content: "MANUSCRIPT",
  voice: "VOICE RECITATION",
  background: "FOLIO BACKGROUND",
  brightness: "FOLIO BACKGROUND",
  textcolor: "TEXT READABILITY",
  backdrop: "TEXT READABILITY",
  scrim: "TEXT READABILITY",
  titlefont: "CALLIGRAPHY",
  titlecolor: "CALLIGRAPHY",
  contentfont: "CALLIGRAPHY",
  contentcolor: "CALLIGRAPHY",
  sizes: "CALLIGRAPHY",
  publish: "COMPLETION",
};

const buildKalamTour = ({ onComplete }) => {
  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    exitOnEsc: true,
    keyboardNavigation: true,
    defaultStepOptions: {
      classes: "k-tour",
      arrow: true,
      scrollTo: { behavior: "smooth", block: "center" },
      cancelIcon: { enabled: true, label: "Close tour" },
      modalOverlayOpeningPadding: 8,
      modalOverlayOpeningRadius: 10,
    },
  });

  const total = TOUR_STEPS.length;

  // ── Blur everything except the highlighted area ───────────────────────────
  // Shepherd's dim overlay is an SVG <path> with a "hole" over the target.
  // We copy that same path into a clip-path on a backdrop-blur layer, so the
  // blur covers the whole screen EXCEPT the hole (the focused element).
  let blurObserver = null;
  // Positions the animated border exactly over the cut-out in Shepherd's path
  const syncRing = (d) => {
    const ring = document.getElementById("k-tour-ring");
    if (!ring) return;
    const i = d.indexOf("Z");
    const rest = i >= 0 ? d.slice(i + 1) : "";
    const cmds = {};
    rest.replace(/([MaVH])([^MaVHZ]*)/g, (_, c, args) => {
      if (!(c in cmds)) cmds[c] = (args.match(/-?\d*\.?\d+/g) || []).map(Number);
      return "";
    });
    const [mx, my] = cmds.M || [];
    const r = (cmds.a || [])[0];
    const v = (cmds.V || [])[0];
    const h = (cmds.H || [])[0];
    if ([mx, my, r, v, h].some((n) => n == null || Number.isNaN(n))) {
      ring.style.display = "none"; // no target on this step (e.g. welcome)
      return;
    }
    const x = mx - r, y = my;
    if (h + r - x < 2 || v + r - y < 2) {
      ring.style.display = "none"; // zero-size opening = no target
      return;
    }
    Object.assign(ring.style, {
      display: "block",
      left: `${x}px`,
      top: `${y}px`,
      width: `${h + r - x}px`,
      height: `${v + r - y}px`,
      borderRadius: `${r}px`,
    });
  };
  const syncBlur = () => {
    const path = document.querySelector(".shepherd-modal-overlay-container path");
    const layer = document.getElementById("k-tour-blur");
    const d = path?.getAttribute("d");
    if (layer && d) layer.style.clipPath = `path('${d}')`;
    if (d) syncRing(d);
  };
  const ensureBlur = () => {
    if (!document.getElementById("k-tour-blur")) {
      const layer = document.createElement("div");
      layer.id = "k-tour-blur";
      document.body.appendChild(layer);
    }
    if (!document.getElementById("k-tour-ring")) {
      const ring = document.createElement("div");
      ring.id = "k-tour-ring";
      ring.style.display = "none";
      document.body.appendChild(ring);
    }
    const path = document.querySelector(".shepherd-modal-overlay-container path");
    if (path && !blurObserver) {
      blurObserver = new MutationObserver(syncBlur);
      blurObserver.observe(path, { attributes: true, attributeFilter: ["d"] });
    }
    syncBlur();
  };
  const removeBlur = () => {
    blurObserver?.disconnect();
    blurObserver = null;
    document.getElementById("k-tour-blur")?.remove();
    document.getElementById("k-tour-ring")?.remove();
  };

  TOUR_STEPS.forEach((s, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === total - 1;
    const buttons = [];

    if (!isLast) {
      buttons.push({ text: "Skip tour", classes: "k-tour-btn k-tour-btn-skip", action: () => tour.cancel() });
    }
    if (!isFirst) {
      buttons.push({ text: "← Back", classes: "k-tour-btn k-tour-btn-ghost", action: () => tour.back() });
    }
    buttons.push({
      text: isFirst ? "Begin tour →" : isLast ? "✦ Complete" : "Next Step →",
      classes: "k-tour-btn k-tour-btn-primary",
      action: () => (isLast ? tour.complete() : tour.next()),
    });

    tour.addStep({
      id: s.id,
      title: s.title,
      text: s.text,
      attachTo: s.target ? { element: s.target, on: s.on || "auto" } : undefined,
      buttons,
      when: {
        show() {
          ensureBlur();
          const el = this.getElement();
          const num = String(idx + 1).padStart(2, "0");
          const tot = String(total).padStart(2, "0");

          const header = el?.querySelector(".shepherd-header");
          if (header && !header.querySelector(".k-tour-eyebrow")) {
            const eyebrow = document.createElement("div");
            eyebrow.className = "k-tour-eyebrow";
            eyebrow.innerHTML = `
              <span>STEP ${num} OF ${tot}</span>
              <span class="k-tour-eyebrow-dot">·</span>
              <span class="k-tour-eyebrow-cat">${TOUR_CATS[s.id] || ""}</span>`;
            header.prepend(eyebrow);
          }

          const footer = el?.querySelector(".shepherd-footer");
          if (!footer || footer.querySelector(".k-tour-progress")) return;
          const bar = document.createElement("div");
          bar.className = "k-tour-progress";
          bar.innerHTML = `
            <span class="k-tour-count">${num} / ${tot}</span>
            <span class="k-tour-track"><span class="k-tour-fill" style="width:${((idx + 1) / total) * 100}%"></span></span>`;
          footer.prepend(bar);
        },
      },
    });
  });

  tour.on("complete", onComplete);
  tour.on("complete", removeBlur);
  tour.on("cancel", removeBlur);
  return tour;
};

// ── Footer icons (inline SVG, no library needed) ────────────────────────────
const Ico = ({ className = "", children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {children}
  </svg>
);
const SparklesIcon = ({ className }) => (
  <Ico className={className}>
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
  </Ico>
);
const MailIcon = ({ className }) => (
  <Ico className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Ico>
);
const ArrowRightIcon = ({ className }) => (
  <Ico className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></Ico>
);
const ArrowUpIcon = ({ className }) => (
  <Ico className={className}><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></Ico>
);
const ChevronDownIcon = ({ className }) => (
  <Ico className={className}><path d="m6 9 6 6 6-6" /></Ico>
);
const GlobeIcon = ({ className }) => (
  <Ico className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </Ico>
);
const HeadphonesIcon = ({ className }) => (
  <Ico className={className}>
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </Ico>
);
const ShieldCheckIcon = ({ className }) => (
  <Ico className={className}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </Ico>
);
const InstagramIcon = ({ className }) => (
  <Ico className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </Ico>
);
const TwitterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YoutubeIcon = ({ className }) => (
  <Ico className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </Ico>
);
const MicIcon = ({ className }) => (
  <Ico className={className}>
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10v1a7 7 0 0 0 14 0v-1" />
    <line x1="12" y1="18" x2="12" y2="22" />
  </Ico>
);
const GithubIcon = ({ className }) => (
  <Ico className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Ico>
);

// ── Themed footer: original layout & typography, Kalam colour theme ─────────
const KalamFooter = () => {
  const Navigate = useNavigate();

  return (
    <>
      {/* ==================== ENHANCED PROFESSIONAL FOOTER ==================== */}
      <footer className="relative mt-20 border-t border-[#d2aa5a]/20 bg-gradient-to-b from-[#0a0812] via-[#07060d] to-[#050408] overflow-hidden font-sans">
        {/* Ambient glow behind footer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(120, 60, 180, 0.18) 0%, rgba(210, 170, 90, 0.06) 35%, transparent 70%)",
          }}
        ></div>

        {/* Decorative Top Divider Accent */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d2aa5a]/40 to-transparent"></div>

        {/* Top Pre-Footer Callout / Literary Newsletter Section */}
        <div className="relative border-b border-white/5 bg-white/[0.015]">
          <div className="max-w-7xl mx-auto px-6 py-12 lg:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
              <div className="lg:col-span-6 space-y-2">
                <div className="flex items-center gap-2 text-[#d2aa5a] text-xs font-semibold tracking-wider uppercase">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  The Weekly Bayt &amp;courier Dispatch
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#f0ebe3] font-medium">
                  Curated couplets, literary contests &amp; essays.
                </h3>
                <p className="text-sm text-[#f0ebe3]/55 max-w-lg">
                  Join 42,000+ literary enthusiasts who receive handpicked gazals, poetry writing prompts, and festival invites every Sunday morning.
                </p>
              </div>
              <div className="lg:col-span-6">
                <form
                  className="flex flex-col sm:flex-row gap-3 max-w-lg lg:ml-auto"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="relative flex-1">
                    <MailIcon className="w-4 h-4 text-[#f0ebe3]/55 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      className="w-full bg-[#0f0c18]/80 text-[#f0ebe3] placeholder-[#f0ebe3]/30 text-sm rounded-xl pl-11 pr-4 py-3.5 border border-[#d2aa5a]/25 focus:border-[#d2aa5a] focus:outline-none focus:ring-2 focus:ring-[#d2aa5a]/20 transition-all"
                      placeholder="Enter your email for the gazette..."
                      required
                      type="email"
                    />
                  </div>
                  <button
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e8c872] via-[#d9b45a] to-[#caa146] hover:brightness-110 text-[#0e0c16] font-semibold text-sm transition-all shadow-md shadow-[#d2aa5a]/10 flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]"
                    type="submit"
                  >
                    <span>Subscribe</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </form>
                <p className="text-[11px] text-[#f0ebe3]/30 mt-2 lg:text-right">
                  Zero spam. Unsubscribe with one click anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Multi-Column Footer Grid */}
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Brand & Mission Column (Col 1-4) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-3">
                <h1 className="relative inline-block text-4xl sm:text-5xl leading-none font-black tracking-wide cursor-default group">
                  {/* Soft Glow layer behind text */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-[#f0c060] via-[#e8a0b0] to-[#f0a080] bg-clip-text text-transparent transition-opacity duration-500 group-hover:opacity-75"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Alfaz
                  </span>

                  {/* Main text with composite Urdu & Script flourish */}
                  <span className="relative inline-block">
                    <span
                      className="bg-gradient-to-r from-[#f0d890] to-[#f0c060] bg-clip-text text-transparent"
                      style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                      A
                    </span>
                    <bdi
                      className="inline-block -mx-0.5 translate-y-[3px] bg-gradient-to-r from-[#e8a0b0] via-[#d4a0c0] to-[#f0a080] bg-clip-text text-transparent"
                      style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
                    >
                      لف
                    </bdi>
                    <span
                      className="bg-gradient-to-r from-[#f0c060] to-[#f0d890] bg-clip-text text-transparent"
                      style={{ fontFamily: "'Dancing Script', cursive" }}
                    >
                      az
                    </span>
                  </span>
                </h1>
                {/* <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Shayri Club
                </span> */}
              </div>

              <p className="text-[#f0ebe3]/55 text-sm leading-relaxed max-w-sm">
                A sanctuary for poets, shayars, and novelists to immortalize their words, connect through soulful recitations, and celebrate the nuance of multilingual literature.
              </p>

              {/* Community Trust Badges */}
              <div className="flex items-center gap-4 pt-1">
                <div className="flex -space-x-2">
                  <img alt="Poet Avatar" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#07060d] object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
                  <img alt="Writer Avatar" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#07060d] object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
                  <img alt="Contributor" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#07060d] object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
                  <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-[#07060d] bg-[#d2aa5a]/20 text-[#e8c872] text-[10px] font-bold">
                    +18k
                  </div>
                </div>
                <div className="text-xs text-[#f0ebe3]/55">
                  <span className="text-[#f0ebe3] font-medium">18,500+</span> Published Writers
                </div>
              </div>

              {/* Social Icon Links with Tooltip/Hover Glow */}
              <div className="flex items-center gap-2.5 pt-2">
                <a aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#d2aa5a]/10 border border-white/5 hover:border-[#d2aa5a]/30 text-[#f0ebe3]/55 hover:text-[#e8c872] flex items-center justify-center transition-all" href="#">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a aria-label="Twitter / X" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#d2aa5a]/10 border border-white/5 hover:border-[#d2aa5a]/30 text-[#f0ebe3]/55 hover:text-[#e8c872] flex items-center justify-center transition-all" href="#">
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a aria-label="YouTube" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#d2aa5a]/10 border border-white/5 hover:border-[#d2aa5a]/30 text-[#f0ebe3]/55 hover:text-[#e8c872] flex items-center justify-center transition-all" href="#">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a aria-label="Spotify" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#d2aa5a]/10 border border-white/5 hover:border-[#d2aa5a]/30 text-[#f0ebe3]/55 hover:text-[#e8c872] flex items-center justify-center transition-all" href="#">
                  <MicIcon className="w-4 h-4" />
                </a>
                <a aria-label="GitHub" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#d2aa5a]/10 border border-white/5 hover:border-[#d2aa5a]/30 text-[#f0ebe3]/55 hover:text-[#e8c872] flex items-center justify-center transition-all" href="#">
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Explore (Col 5-6) */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                {/* <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> */}
                <h4 className="text-sm font-semibold text-[#f0ebe3] tracking-wider uppercase font-sans">Explore</h4>
              </div>
              <ul className="space-y-3 text-sm text-[#f0ebe3]/55">
                <li>
                  <a className="group flex items-center justify-between hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Kalam (Poetry)</span>
                    {/* <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">Hot</span> */}
                  </a>
                </li>
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Community Circle</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Browse Categories</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Mushaira Live Rooms</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center justify-between hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Audio Recitations</span>
                    <HeadphonesIcon className="w-3.5 h-3.5 text-[#f0ebe3]/30 group-hover:text-[#d2aa5a]" />
                  </a>
                </li>
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Featured Shayars</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources & Academy (Col 7-8) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-2">
                {/* <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> */}
                <h4 className="text-sm font-semibold text-[#f0ebe3] tracking-wider uppercase font-sans">Writers &amp; Guild</h4>
              </div>
              <ul className="space-y-3 text-sm text-[#f0ebe3]/55">
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">About Alfaz</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Editorial Guidelines</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center justify-between hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Poetic Meters (Behr) Guide</span>
                    {/* <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">Learn</span> */}
                  </a>
                </li>
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Publishing Grants &amp; Contests</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Help &amp; Creator Support</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal & System Status (Col 9-12) */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-2">
                {/* <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> */}
                <h4 className="text-sm font-semibold text-[#f0ebe3] tracking-wider uppercase font-sans">Legal &amp; Transparency</h4>
              </div>
              <ul className="space-y-3 text-sm text-[#f0ebe3]/55">
                <li>
                  <button
                    onClick={() => Navigate('/privacyPolicy')}
                    className="group flex items-center justify-between w-full text-left hover:text-[#f0ebe3] transition-colors duration-150"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Privacy Policy</span>
                    <ShieldCheckIcon className="w-3.5 h-3.5 text-[#f0ebe3]/30 group-hover:text-[#78c8b4]" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => Navigate('/termsofservices')}
                    className="group flex items-center w-full text-left hover:text-[#f0ebe3] transition-colors duration-150"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">Terms of Service</span>
                  </button>
                </li>
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Copyright &amp; Intellectual Rights</span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center hover:text-[#f0ebe3] transition-colors duration-150" href="#">
                    <span className="group-hover:translate-x-1 transition-transform">Contact &amp; Inquiries</span>
                  </a>
                </li>
              </ul>

              {/* System Status Card */}
              <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#78c8b4] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#78c8b4]"></span>
                  </span>
                  <span className="text-xs text-[#f0ebe3]/70 font-medium">All Systems Operational</span>
                </div>
                <span className="text-[11px] text-[#f0ebe3]/30">v2.4.0</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Language Switcher, Regional note */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#f0ebe3]/30">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center md:text-left">
              <span>© 2025 <strong className="text-[#f0ebe3]/55 font-semibold">Alfaz • Shayri Club</strong>. All rights reserved.</span>
              <span className="hidden sm:inline text-[#d2aa5a]/30">•</span>
              <span className="text-[#f0ebe3]/55">Crafted with devotion for Urdu, Hindi &amp; English verse.</span>
            </div>
            <div className="flex items-center gap-6">
              {/* Language Selector Mockup */}
              <button className="inline-flex items-center gap-1.5 text-[#f0ebe3]/55 hover:text-[#e8c872] transition-colors">
                <GlobeIcon className="w-3.5 h-3.5" />
                <span>English (EN)</span>
                <ChevronDownIcon className="w-3 h-3" />
              </button>

              {/* Back to top button */}
              <a
                className="inline-flex items-center gap-1 text-[#f0ebe3]/55 hover:text-[#f0ebe3] transition-colors"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <span>Back to top</span>
                <ArrowUpIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const Kalam = () => {
  // ── ALL ORIGINAL STATE & LOGIC (untouched) ─────────────────────────────────
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const Navigate = useNavigate();
  const { setStreak, setStreak2 } = useContext(MyContext);

  const audioChunk = useRef([]);
  const [recording, setRecording] = useState([]);
  const mediaRecorderRef = useRef(null);
  const [streamRecording, setStreamRecording] = useState(false);
  const [file, setFile] = useState([]);
  const [available, setAvailable] = useState(false);
  const [recordingFinal, setRecordingFinal] = useState([]);
  const [checking, setChecking] = useState([]);
  const [titleFont, setTitleFont] = useState("");
  const [contentFont, setContentFont] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [isNotificationModalOpen, setIsNotificationmodalOpened] = useState(false);
  

  const handleKalam = () => {
    if (!available && !isImage) {
      // axiosInstance
      //   .post("/kalam", { type, content }, { withCredentials: true })
      //   .then((response) => {
      //     const data = response.data;
      //     console.log(response.data);
      //     if (data.success) {
      //       setMessage(data.msg);
      //       setShowPopup(true);
      //       setTimeout(() => setShowPopup(false), 2000);
      //       if (data.redirectUrl) navigate(data.redirectUrl);
      //     }
      //     setStreak(response.data.streak[0].createdAt);
      //     setStreak2(response.data.streak[1].createdAt);
      //   })
      //   .catch((err) => console.error(err));

      axiosInstance
    .post('/api/customKalam',{
      title,
      content,
      badgeBg,
      badgeBorder,
      autoMainColor,
      resolvedTitleColor,
      titleFs,
      resolvedTitleFamily,
      resolvedContentColor,
      contentFs,
      resolvedContentFamily,
      subColor,
      backdrop,
      resolvedTextColor,
      activeMoods,
      type,
      bgTab,
      customColor,
      selectedColor,
      bgOpacity,
      scrim
      
      

    },{
      withCredentials: true
    }).then((response)=>{
       console.log("response from db", response.data)
    })


    } else if(isImage && !available){

    const formData = new FormData();


      formData.append("kalamBg", image);
      formData.append("fileType", "image");
      formData.append("type", type);
      formData.append("content", content);
      formData.append("title", title)
      formData.append("badgeBg", badgeBg);
      formData.append("badgeBorder", badgeBorder);
      formData.append("autoMainColor", autoMainColor);
      formData.append("resolvedTitleColor", resolvedTitleColor);
      formData.append("titleFs", titleFs);
      formData.append("resolvedTitleFamily", resolvedTitleFamily);
      formData.append("resolvedContentColor", resolvedContentColor);
      formData.append("contentsFs", contentFs);
      formData.append("resolvedContentFamily", resolvedContentFamily);
      formData.append("subColor", subColor);
      formData.append("backdrop", backdrop);
      formData.append("resolvedTextColor", resolvedTextColor);
      formData.append("activeMoods", activeMoods);
      formData.append("type", type);
      formData.append("bgTab", bgTab);
      formData.append("customColor", customColor);
      formData.append("selectedColor", selectedColor);
      formData.append("bgOpacity", bgOpacity);
      formData.append("scrim", scrim);

       axiosInstance
        .post("/api/testing", formData, { withCredentials: true })
        .then((response) => { console.log("data from multer", response.data); })
        .catch((error) => { console.error("error from Multer", error); });
      }
      
     
      else if(!isImage && available){

        const formData = new FormData();

      // formData.append("audio", checking, { originalFileName: "hello.webm", type: type, content: content });
      formData.append("kalamAudio", checking);
      formData.append("fileType", "audio")
      formData.append("type", type);
      formData.append("content", content);
      formData.append("title", title)
      formData.append("badgeBg", badgeBg);
      formData.append("badgeBorder", badgeBorder);
      formData.append("autoMainColor", autoMainColor);
      formData.append("resolvedTitleColor", resolvedTitleColor);
      formData.append("titleFs", titleFs);
      formData.append("resolvedTitleFamily", resolvedTitleFamily);
      formData.append("resolvedContentColor", resolvedContentColor);
      formData.append("contentsFs", contentFs);
      formData.append("resolvedContentFamily", resolvedContentFamily);
      formData.append("subColor", subColor);
      formData.append("backdrop", backdrop);
      formData.append("resolvedTextColor", resolvedTextColor);
      formData.append("activeMoods", activeMoods);
      formData.append("type", type);
      formData.append("bgTab", bgTab);
      formData.append("customColor", customColor);
      formData.append("selectedColor", selectedColor);
      formData.append("bgOpacity", bgOpacity);
      formData.append("scrim", scrim);

       axiosInstance
        .post("/api/testing", formData, { withCredentials: true })
        .then((response) => { console.log("data from multer", response.data); })
        .catch((error) => { console.error("error from Multer", error); });

      }else if(isImage && available){

        console.log("isImage && available")

     const formData = new FormData();
        console.log("type", typeof checking);


      // formData.append("bgImage&audio", file);
      formData.append("kalamAudio", audio,{content: content});
      formData.append("kalamBg", image);
      formData.append("fileType", "image&audio");
      formData.append("type", type);
      formData.append("content", content);
      formData.append("title", title)
      formData.append("badgeBg", badgeBg);
      formData.append("badgeBorder", badgeBorder);
      formData.append("autoMainColor", autoMainColor);
      formData.append("resolvedTitleColor", resolvedTitleColor);
      formData.append("titleFs", titleFs);
      formData.append("resolvedTitleFamily", resolvedTitleFamily);
      formData.append("resolvedContentColor", resolvedContentColor);
      formData.append("contentsFs", contentFs);
      formData.append("resolvedContentFamily", resolvedContentFamily);
      formData.append("subColor", subColor);
      formData.append("backdrop", backdrop);
      formData.append("resolvedTextColor", resolvedTextColor);
      formData.append("activeMoods", activeMoods);
      formData.append("type", type);
      formData.append("bgTab", bgTab);
      formData.append("customColor", customColor);
      formData.append("selectedColor", selectedColor);
      formData.append("bgOpacity", bgOpacity);
      formData.append("scrim", scrim);

      console.log("formData", formData);
      console.log("file", file);
      


       axiosInstance
        .post("/api/testing", formData, { withCredentials: true })
        .then((response) => { console.log("data from multer", response.data); })
        .catch((error) => { console.error("error from Multer", error); });



      }
     
     
      
      

      console.log("recording", recordingFinal);
     
    
  };

  const startRec = async () => {
    try {
      audioChunk.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunk.current.push(e.data);
      };
      mediaRecorder.onstop = () => {
        const pook = new Blob(audioChunk.current, { type: "audio/wav" });
        setChecking(pook);
        const audioUrl = URL.createObjectURL(pook);
        console.log("checking type", pook);
        setRecording([audioUrl]);
        setRecordingFinal([audioUrl + ".wav"]);
        setAvailable(true);
        setFile(prev=>[...prev, pook])
        setAudio(pook);
      };
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setStreamRecording(true);
    } catch (error) {
      console.log("Mic permission error:", error);
    }
  };

  const stopRec = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      setStreamRecording(false);
    }
  };

  const handleRecording = () => {
    if (streamRecording) stopRec();
    else startRec();
  };
  // ── END ORIGINAL LOGIC ──────────────────────────────────────────────────────

  // ── UI-only state ───────────────────────────────────────────────────────────
  const [activeMoods, setActiveMoods] = useState(["Ishq"]);
  const [bgTab, setBgTab] = useState("colors");
  const [selectedColor, setSelectedColor] = useState("#26215C");
  const [customColor, setCustomColor] = useState("#7F77DD");
  const [imageSrc, setImageSrc] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const [bgOpacity, setBgOpacity] = useState(100);
  const [scrim, setScrim] = useState(30);
  const [textColor, setTextColor] = useState("light");
  const [backdrop, setBackdrop] = useState("soft");
  const [fontSize, setFontSize] = useState("md");
  const [title, setTitle] = useState("");
  const [sinf, setSinf] = useState("");
  const [activeNav, setActiveNav] = useState("Compose");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [titleSize, setTitleSize] = useState("md")
  const [contentSize, setContentSize] = useState("md")
  const [userId, setUserId] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  // NEW: font & text-color state
  const [selectedTitleFont, setSelectedTitleFont] = useState("cormorant");
  const [selectedContentFont, setSelectedContentFont] = useState("cormorant_body");
  const [titleColorMode, setTitleColorMode] = useState("auto"); // "auto" | hex
  const [selectedTitleColor, setSelectedTitleColor] = useState("#F5EDD5");
  const [contentColorMode, setContentColorMode] = useState("auto");
  const [selectedContentColor, setSelectedContentColor] = useState("#FFFFFF");

  const toggleMood = (mood) => {
    setActiveMoods(prev =>
      prev.includes(mood) ? prev.filter(m => m !== mood) : [...prev, mood]
    );
  };

  const handleImageUpload = (e) => {
    const f = e.target.files[0];
    setFile(prev=>[...prev, f])
    setImage(f);
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => { setImageSrc(ev.target.result); setIsImage(true); };
    reader.readAsDataURL(f);
  };

  const updateCustomKalam=()=>{

    axiosInstance
    .post('/api/customKalam',{
      title,
      content,
      badgeBg,
      badgeBorder,
      autoMainColor,
      resolvedTitleColor,
      titleFs,
      resolvedTitleFamily,
      resolvedContentColor,
      contentFs,
      resolvedContentFamily,
      subColor,
      backdrop,
      resolvedTextColor,
      activeMoods,
      type,
      bgTab,
      customColor,
      selectedColor,
      bgOpacity,
      scrim,
      
      

    },{
      withCredentials: true
    }).then((response)=>{
       console.log("response from db", response.data)
    })
  }

  // ── Compute live preview styles ──────────────────────────────────────────
  const effectiveBg = isImage ? null : (bgTab === "custom" ? customColor : selectedColor);
  const resolvedTextColor = textColor === "auto"
    ? (isDark(effectiveBg || "#222") ? "light" : "dark")
    : textColor;
  const autoMainColor = resolvedTextColor === "light" ? "#ffffff" : "#1a1a1a";
  const subColor    = resolvedTextColor === "light" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.5)";
  const badgeBg     = resolvedTextColor === "light" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.10)";
  const badgeBorder = resolvedTextColor === "light" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.18)";
  const titleFs      = titleSize === "sm" ? "13px" : titleSize === "lg" ? "60px" : "15px";
  const contentFs     = contentSize === "sm" ? "17px" : contentSize === "lg" ? "40px" : "20px";

  // Resolve title & content colors (palette override or auto)
  const resolvedTitleColor   = titleColorMode   === "auto" ? autoMainColor : selectedTitleColor;
  const resolvedContentColor = contentColorMode === "auto" ? autoMainColor : selectedContentColor;

  // Resolve font families
  const resolvedTitleFamily   = TITLE_FONTS.find(f => f.id === selectedTitleFont)?.family   || "'Cormorant Garamond', serif";
  const resolvedContentFamily = CONTENT_FONTS.find(f => f.id === selectedContentFont)?.family || "'Cormorant Garamond', serif";

  const previewWrapStyle = (() => {
  if (backdrop === "none") return { 
    background: "none", 
    padding: "1.5rem", 
    backdropFilter: "none", 
    border: "none", 
    borderRadius: "0" 
  };
  if (backdrop === "soft") return {
    background: resolvedTextColor === "light" ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.28)",
    padding: "1.75rem 1.5rem",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
    border: "none",
    borderRadius: "0",
    minHeight: "100%",
    height: "100%",
  };
  return {
    background: resolvedTextColor === "light" ? "rgba(0,0,0,0.58)" : "rgba(255,255,255,0.88)",
    padding: "1.75rem 1.5rem",
    backdropFilter: "none",
    border: "none",
    borderRadius: "0",
    minHeight: "100%",
    height: "100%",
  };
})();

  const previewFormLabel = type || (sinf ? SINF_OPTIONS.find(o => o.value === sinf)?.value : "Ghazal") || "Ghazal";
  const PREVIEW_LIMIT = 160;
  const previewIsTruncated = content.length > PREVIEW_LIMIT;
  const previewText = showFullPreview ? content : content.slice(0, PREVIEW_LIMIT);

  const getUserId=()=>{
    axiosInstance
    .get('/api/userId',{
      withCredentials: true
    })
    .then((response)=>{
      setUserId(response.data._id);
      setProfilePic(response.data.profilePic);
    })
  }

  const fetchUserNotifications=()=>{
    axiosInstance
    .get('/api/offlineNotifications', {
      withCredentials: true
    }).then((response)=>{
      setNotifications(response.data.offlineNotifications)
    }).catch((error)=>{
      console.error("Error while fetching user notifications", error)
    })
  }

  useEffect(()=>{
getUserId();
fetchUserNotifications();
  },[])

  // ── Product tour ────────────────────────────────────────────────────────────
  const tourRef = useRef(null);

  const startKalamTour = () => {
    if (tourRef.current?.isActive()) return;
    const tour = buildKalamTour({
      // Fires only when the user finishes the LAST step (not on skip / close)
      onComplete: () => {
        axiosInstance
          .post("/api/updatetutorial", { payload: 1, type: "kalam_tour" }, { withCredentials: true })
          .then((res) => console.log("tutorial saved", res.data))
          .catch((err) => console.error("kalamTutorial error", err));
      },
    });
    tourRef.current = tour;
    tour.start();
  };

  useEffect(() => {
    let timer;
    let cancelled = false;

    // Ask the backend first: only run the tour if content === false
    axiosInstance
      .get("/api/tutorials?type=kalam_tour", { withCredentials: true })
      .then((response) => {
        if (cancelled) return;
        if (response.data.data === false) {
          timer = setTimeout(startKalamTour, 900);
        }
      })
      .catch((error) => {
        console.error("Error while checking kalam tutorial status", error);
      });

    return () => {
      cancelled = true;
      clearTimeout(timer);
      if (tourRef.current?.isActive()) tourRef.current.cancel();
    };
  }, []);

  // ── Sidebar (Kalam active, Compose/Collection sub-nav) ─────────────────────
  const KalamSidebar = () => (
    <aside className="k-sidebar">
      <div className="k-sidebar-section">Navigate</div>
      <a href="/" className="k-sidebar-link">
         Home
      </a>
      <a href="/kalam" className="k-sidebar-link active">
         Kalam
      </a>
      <div className="k-sidebar-sub">
        <button
          className={`k-sidebar-link${activeNav === "Compose" ? " active2" : ""}`}
          onClick={() => { setActiveNav("Compose"); Navigate("/urKalam"); }}
        >
          Compose
        </button>
        <button
          className={`k-sidebar-link${activeNav === "Collection" ? " active" : ""}`}
          onClick={() => { setActiveNav("Collection"); Navigate("/urKalam"); }}
        >
          Collection
        </button>
      </div>
      <a href="/spaces" className="k-sidebar-link">
        Community
      </a>
      <a href="/spaces" className="k-sidebar-link">
        Browse
      </a>
      <a href="/spaces" className="k-sidebar-link">
        Library
      </a>
    </aside>
  );

  return (
    <>
      <style>{`
        @import url('${buildGoogleFontsUrl()}');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── Root ──────────────────────────────────── */
        .k-root {
          --border-sm:  rgba(255,255,255,0.05);
          --border-md:  rgba(255,255,255,0.08);
          --text-pri:   #f0ebe3;
          --text-sec:   rgba(240,235,227,0.55);
          --text-ter:   rgba(240,235,227,0.28);
          --gold:       rgba(210,170,90,0.85);
          --r-md: 6px;
          --r-lg: 10px;

          min-height: 100vh;
          background-color: #07060d;
          background-image:
            radial-gradient(ellipse 70% 55% at 50% -10%, rgba(120,60,180,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 50% 40% at 15% 60%,  rgba(160,30,70,0.10)  0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 90% 80%,  rgba(180,120,20,0.07) 0%, transparent 50%),
            radial-gradient(ellipse 60% 30% at 50% 100%, rgba(80,40,140,0.12)  0%, transparent 60%);
          font-family: 'DM Mono', monospace;
          color: var(--text-pri);
          overflow-x: hidden;
          -webkit-text-size-adjust: 100%;
        }

        /* ── Sticky Nav ────────────────────────────── */
        
          /* ── Global Navbar (Kalam theme) ──────────── */
        /* ── Global Navbar (Kalam theme) — bigger, dominant tier ── */
.k-global-nav {
  background: #050408;
  padding: 0 max(1.5rem, env(safe-area-inset-left));
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 20px;
  height: 68px; width: 100%;
  box-shadow: 0 1px 0 rgba(210,170,90,0.1), 0 8px 20px -10px rgba(0,0,0,0.65);
  position: fixed; top: 0; left: 0; right: 0; z-index: 60;
}
.k-global-brand { display: flex; align-items: center; gap: 10px; min-width: 0; }
.k-global-links { display: flex; align-items: center; gap: 30px; height: 100%; justify-self: center; }
.k-global-right { display: flex; align-items: center; gap: 16px; justify-self: end; }

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
.k-global-links { display: flex; align-items: center; gap: 30px; height: 100%; }
.k-global-link {
  position: relative;
  font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--text-sec); text-decoration: none;
  font-family: 'DM Mono', monospace; font-weight: 600;
  height: 100%; display: flex; align-items: center;
  transition: color 0.15s; cursor: pointer;
}
.k-global-link:hover { color: var(--text-pri); }
.k-global-link.active { color: rgba(210,170,90,0.95); }
.k-global-link.active::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0;
  height: 2.5px; background: linear-gradient(90deg, rgba(210,170,90,0.9), rgba(210,170,90,0.4));
}
.k-global-bell {
  width: 34px; height: 34px; border-radius: 50%;
  border: none; background: rgba(255,255,255,0.04);
  color: var(--text-sec); font-size: 15px; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.15s;
}
.k-global-bell:hover { background: rgba(210,170,90,0.12); color: rgba(210,170,90,0.9); }

@media (max-width: 900px) {
  .k-global-links { display: none; }
}

/* ── Left sidebar (matches k-theme) ─────────────────── */
.k-sidebar {
  display: none;
  flex-direction: column;
  width: 220px;
  padding: 28px 18px;
  position: fixed;
  top: 68px;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  border-right: 0.5px solid var(--border-sm);
  background: rgba(10,10,14,0.5);
  backdrop-filter: blur(10px);
  z-index: 40;
}
@media (min-width: 1024px) { .k-sidebar { display: flex; } }

.k-sidebar-section {
  font-size: 9px; font-weight: 500; color: var(--text-ter);
  letter-spacing: 0.3em; text-transform: uppercase;
  margin: 0 0 10px 4px;
}
.k-sidebar-link {
  display: flex; align-items: center; gap: 10px;
  width: 100%; text-align: left;
  padding: 9px 10px 9px 12px;
  font-size: 13px; letter-spacing: 0.03em;
  color: var(--text-sec); text-decoration: none;
  border: none; border-left: 2px solid transparent;
  cursor: pointer; background: none;
  transition: color 0.2s ease, border-color 0.2s ease;
  font-family: 'DM Mono', monospace;
}
.k-sidebar-link:hover { color: var(--text-pri); }
.k-sidebar-link.active {
  color: rgba(210,170,90,0.95);
  border-left-color: rgba(210,170,90,0.85);
  font-weight: 500;
}
  .k-sidebar-link.active2 {
  color: rgba(210,170,90);
  border: 2px solid black;
  }
.k-sidebar-sub {
  display: flex; flex-direction: column;
  margin: 2px 0 4px 12px;
  padding-left: 10px;
  border-left: 0.5px solid var(--border-sm);
  gap: 1px;
}
.k-sidebar-sub .k-sidebar-link { font-size: 12px; padding: 7px 8px; }

/* Shifts page content right on desktop to make room for the sidebar */
@media (min-width: 1024px) {
  .k-page-body { margin-left: 220px; }
}

  .k-nav {
          background: rgba(10,10,14,0.92);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 0.5px solid var(--border-sm);
          padding: 0 max(1.25rem, env(safe-area-inset-left));
          display: flex; align-items: center; justify-content: space-between;
          height: 52px; position: sticky; top: 68px; z-index: 50; width: 100%;
          margin-top: 68px;
        }
        .k-brand { display: flex; align-items: center; gap: 9px; }
        .k-logo {
          width: 30px; height: 30px; flex-shrink: 0;
          background: linear-gradient(135deg, #2d2060, #4a3580);
          border: 0.5px solid rgba(210,170,90,0.3); border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(210,170,90,0.9); font-size: 14px;
        }
        .k-wordmark {
          font-family: 'Playfair Display', serif;
          font-size: 19px; font-weight: 700; font-style: italic;
          background: linear-gradient(135deg, #e8d5a3 0%, #c9a84c 50%, #f0d890 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .k-nav-links { display: flex; align-items: center; gap: 2px; }
        .k-nl {
          padding: 6px 12px; font-size: 11px; letter-spacing: 0.08em;
          color: var(--text-sec); border-radius: var(--r-md);
          cursor: pointer; border: none; background: transparent;
          transition: background 0.12s, color 0.12s; font-family: 'DM Mono', monospace;
          white-space: nowrap; min-height: 36px;
        }
        .k-nl:hover  { background: rgba(255,255,255,0.04); color: var(--text-pri); }
        .k-nl.active { color: rgba(210,170,90,0.9); background: rgba(180,140,50,0.1); }
        .k-nav-right { display: flex; align-items: center; gap: 8px; }
        .k-avatar {
          width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
          background: rgba(83,74,183,0.18); border: 0.5px solid rgba(210,170,90,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 500; color: rgba(210,170,90,0.8); cursor: pointer;
          overflow: hidden;
        }
        .k-hamburger {
          display: none; flex-direction: column; justify-content: center;
          align-items: center; gap: 4px; width: 32px; height: 32px;
          background: transparent; border: none; cursor: pointer; padding: 4px;
        }
        .k-hamburger span { display: block; width: 18px; height: 1.5px; background: rgba(210,170,90,0.7); border-radius: 2px; }
        .k-mobile-menu {
          position: fixed; top: 120px; left: 0; right: 0; z-index: 49;
          background: rgba(10,10,14,0.97); backdrop-filter: blur(20px);
          border-bottom: 0.5px solid rgba(210,170,90,0.1); padding: 0.5rem 0;
          display: flex; flex-direction: column;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
        }
        .k-mobile-menu .k-nl {
          padding: 13px 1.25rem; font-size: 12px; border-radius: 0;
          border-bottom: 0.5px solid var(--border-sm); text-align: left;
          text-decoration: none; color: var(--text-sec); display: block;
        }
        .k-mobile-menu .k-nl:last-child { border-bottom: none; }

        /* ── Buttons ───────────────────────────────── */
        .k-btn-ghost {
          background: transparent; border: 0.5px solid var(--border-md);
          border-radius: var(--r-md); padding: 6px 12px; font-size: 11px;
          color: var(--text-sec); cursor: pointer; display: flex; align-items: center;
          gap: 5px; transition: all 0.12s; font-family: 'DM Mono', monospace;
          letter-spacing: 0.07em; text-decoration: none; white-space: nowrap; min-height: 34px;
        }
        .k-btn-ghost:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.18); color: var(--text-pri); }

        .k-btn-primary {
          background: linear-gradient(135deg, #4a3080, #3C3489, #5a3d9a);
          border: 0.5px solid rgba(180,140,80,0.25); border-radius: var(--r-md);
          padding: 8px 18px; font-size: 11px; color: rgba(240,220,160,0.95);
          cursor: pointer; display: flex; align-items: center; gap: 6px;
          font-family: 'DM Mono', monospace; letter-spacing: 0.1em;
          transition: opacity 0.12s, box-shadow 0.12s; text-decoration: none;
          box-shadow: 0 2px 12px rgba(100,60,180,0.25); min-height: 36px;
          white-space: nowrap;
        }
        .k-btn-primary:hover { opacity: 0.88; box-shadow: 0 4px 20px rgba(100,60,180,0.4); }

        /* ── Hero ──────────────────────────────────── */
        .k-hero {
          position: relative; overflow: hidden;
          border-bottom: 0.5px solid rgba(180,140,80,0.15);
          padding: 2rem max(1.25rem, env(safe-area-inset-left)) 1.75rem;
        }
        .k-hero::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 90% 100% at 50% 0%,  rgba(100,50,160,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 60% 80%  at 10% 50%, rgba(150,25,60,0.10)  0%, transparent 55%),
            radial-gradient(ellipse 50% 60%  at 90% 60%, rgba(190,130,20,0.07) 0%, transparent 50%);
        }
        .k-hero::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,
            transparent, rgba(180,140,80,0) 10%, rgba(200,160,80,0.5) 30%,
            rgba(220,180,100,0.8) 50%, rgba(200,160,80,0.5) 70%, rgba(180,140,80,0) 90%, transparent);
        }
        .k-hero-inner {
          max-width: 1200px; margin: 0 auto; position: relative; z-index: 1;
          display: flex; align-items: flex-end; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .k-greeting {
          font-size: 9px; color: rgba(210,170,90,0.75);
          letter-spacing: 0.4em; text-transform: uppercase; margin-bottom: 8px;
          display: flex; align-items: center; gap: 10px;
        }
        .k-greeting::before, .k-greeting::after {
          content: ''; display: inline-block; width: 20px; height: 0.5px;
          background: rgba(210,170,90,0.4);
        }
        @keyframes goldShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .k-hero-kalam {
          font-family: 'Playfair Display', serif;
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 700; font-style: italic; line-height: 0.92; letter-spacing: -0.03em;
          background: linear-gradient(135deg, #e8d5a3 0%, #f5e6c0 18%, #c9a84c 35%, #f0d890 50%, #b8860b 65%, #e8d5a3 80%, #f5edd5 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          display: block; background-size: 200% auto;
          animation: goldShimmer 5s linear infinite;
          filter: drop-shadow(0 2px 20px rgba(200,160,60,0.18));
        }
        .k-hero-kalam-urdu {
          font-family: 'Noto Nastaliq Urdu', serif;
          font-size: clamp(14px, 2.5vw, 22px); color: rgba(210,170,90,0.5);
          display: block; margin-top: 3px; direction: rtl;
        }
        .k-hero-ornament { display: flex; align-items: center; gap: 10px; margin: 10px 0 3px; }
        .k-hero-ornament-line { flex: 1; max-width: 55px; height: 0.5px; background: linear-gradient(90deg, rgba(210,170,90,0.5), transparent); }
        .k-hero-ornament-line.right { background: linear-gradient(270deg, rgba(210,170,90,0.5), transparent); }
        .k-hero-ornament-diamond { width: 5px; height: 5px; background: rgba(210,170,90,0.7); transform: rotate(45deg); flex-shrink: 0; }
        .k-hero-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(12px, 2vw, 14px); color: rgba(240,235,220,0.3); font-style: italic;
        }
        .k-stats { display: flex; gap: 1.5rem; flex-shrink: 0; }
        .k-stat { text-align: right; }
        .k-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(20px, 3vw, 26px); font-weight: 400; line-height: 1;
          background: linear-gradient(135deg, #e8d5a3, #c9a84c);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .k-stat-label { font-size: 9px; color: rgba(210,170,90,0.4); letter-spacing: 0.25em; text-transform: uppercase; margin-top: 3px; }
        .k-stat-divider { width: 0.5px; align-self: stretch; background: rgba(210,170,90,0.12); margin: 2px 0; }

        /* ══ SPLIT LAYOUT ══════════════════════════ */
        .k-split {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          height: calc(100vh - 52px - 130px);
          min-height: 600px;
          padding: 0 max(1rem, env(safe-area-inset-left));
          overflow: hidden;
        }

        .k-preview-pane {
          position: sticky;
          top: 120px;
          height: calc(100vh - 120px);
          display: flex;
          flex-direction: column;
          padding: 1.5rem 1rem 1.5rem 0;
          border-right: 0.5px solid var(--border-sm);
          overflow: hidden;
          flex-shrink: 0;
        }

        .k-preview-label {
          font-size: 9px; font-weight: 500; letter-spacing: 0.35em; text-transform: uppercase;
          color: var(--text-ter); margin-bottom: 10px;
          display: flex; align-items: center; gap: 8px;
        }
        .k-preview-label::after {
          content: ''; flex: 1; height: 0.5px;
          background: linear-gradient(90deg, var(--border-sm), transparent);
        }

        .k-preview-card {
          flex: none; border-radius: 14px; overflow: hidden;
          height: 400px;
          border: 0.5px solid var(--border-md);
          position: relative; display: flex; align-items: center; justify-content: center;
          transition: all 0.3s ease;
          box-shadow: inset 0 0 60px rgba(0,0,0,0.3), 0 8px 40px rgba(0,0,0,0.4);
        }

        .k-prev-bg {
          position: absolute; inset: 0;
          transition: background-color 0.35s ease, opacity 0.35s ease;
          border-radius: inherit;
        }

        .k-prev-scrim {
          position: absolute; inset: 0; border-radius: inherit;
          transition: background 0.3s ease;
        }

          .k-prev-content {
          position: relative; z-index: 2;
          width: 100%; padding: 1.5rem 1.25rem 60px;
          text-align: center;
          overflow-wrap: break-word;
          word-break: break-word;
          min-width: 0;
          overflow-y: auto;
          max-height: 100%;
          scrollbar-width: none;
        }
        .k-prev-content::-webkit-scrollbar { display: none; }

        .k-prev-badge {
          display: inline-block; padding: 3px 12px; border-radius: 20px;
          font-size: 9px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase;
          margin-bottom: 14px; transition: all 0.2s;
          font-family: 'DM Mono', monospace;
        }

        .k-prev-title {
          font-weight: 400; line-height: 1.35; margin-bottom: 16px;
          transition: color 0.2s, font-size 0.2s;
          font-style: italic;
        }

        .k-prev-text {
          line-height: 2; font-style: italic;
          white-space: pre-wrap;
          word-break: break-word;
          overflow-wrap: break-word;
          word-wrap: break-word;
          max-width: 100%;
          transition: color 0.2s, font-size 0.2s;
        }

        .k-prev-read-more {
          display: inline-flex; align-items: center; gap: 5px;
          margin-top: 10px;
          padding: 4px 12px; border-radius: 20px;
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          font-family: 'DM Mono', monospace;
          border: 0.5px solid rgba(210,170,90,0.3);
          background: rgba(210,170,90,0.07);
          color: rgba(210,170,90,0.8);
          cursor: pointer;
          transition: all 0.15s;
        }
        .k-prev-read-more:hover {
          background: rgba(210,170,90,0.14);
          border-color: rgba(210,170,90,0.55);
          color: rgba(210,170,90,1);
        }

        .k-prev-author {
          font-size: 11px; font-family: 'DM Mono', monospace;
          letter-spacing: 0.1em; margin-top: 18px; opacity: 0.65;
          transition: color 0.2s;
        }

        .k-prev-empty {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 12px;
          z-index: 3;
        }
        .k-prev-empty-glyph {
          font-family: 'Playfair Display', serif;
          font-size: 48px; font-style: italic;
          background: linear-gradient(135deg, #e8d5a3, #c9a84c);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          opacity: 0.25; line-height: 1;
        }
        .k-prev-empty-text {
          font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }

        .k-preview-status {
          margin-top: 10px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 2px;
        }
        .k-preview-status-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(120,200,180,0.7); flex-shrink: 0;
          animation: livePulse 2.5s ease infinite;
        }
        @keyframes livePulse { 0%,100%{opacity:0.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)} }
        .k-preview-status-text {
          font-size: 9px; color: rgba(120,200,180,0.55);
          letter-spacing: 0.2em; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
        }
        .k-preview-mood-pills { display: flex; gap: 4px; flex-wrap: wrap; justify-content: flex-end; }
        .k-preview-mood-pill {
          padding: 2px 8px; border-radius: 20px; font-size: 9px;
          background: rgba(83,74,183,0.12); border: 0.5px solid rgba(175,169,236,0.3);
          color: #AFA9EC; letter-spacing: 0.1em;
        }

        .k-form-pane {
          overflow-y: auto;
          overflow-x: hidden;
          height: calc(100vh - 120px);
          padding: 1.5rem 0 6rem 1.5rem;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
          scrollbar-width: thin;
          scrollbar-color: rgba(210,170,90,0.15) transparent;
        }
        .k-form-pane::-webkit-scrollbar { width: 4px; }
        .k-form-pane::-webkit-scrollbar-track { background: transparent; }
        .k-form-pane::-webkit-scrollbar-thumb { background: rgba(210,170,90,0.15); border-radius: 4px; }

        .k-section-label {
          font-size: 9px; font-weight: 500; color: var(--text-ter);
          letter-spacing: 0.35em; text-transform: uppercase; margin-bottom: 10px;
        }

        .k-card {
          background: rgba(255,255,255,0.025); border: 0.5px solid var(--border-sm);
          border-radius: var(--r-lg); margin-bottom: 12px;
          width: 100%;
          min-width: 0;
          overflow: hidden;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .k-card-head {
          padding: 0.9rem 1.1rem;
          border-bottom: 0.5px solid var(--border-sm);
          display: flex; align-items: center; justify-content: space-between; gap: 8px;
        }
        .k-card-title { font-size: 13px; font-weight: 500; color: var(--text-pri); }
        .k-card-sub   { font-size: 10px; color: var(--text-ter); margin-top: 2px; }
        .k-card-body  { padding: 1.1rem; }

        .k-field-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 12px; margin-bottom: 1.1rem;
        }
        .k-field { display: flex; flex-direction: column; gap: 6px; }
        .k-label {
          font-size: 9px; font-weight: 500; color: var(--text-sec);
          letter-spacing: 0.25em; text-transform: uppercase;
        }
        .k-label-urdu { font-size: 10px; color: var(--text-ter); letter-spacing: 0; text-transform: none; font-weight: 400; }

        .k-select, .k-input {
          height: 40px; border-radius: var(--r-md);
          border: 0.5px solid var(--border-md);
          background: rgba(255,255,255,0.04); color: var(--text-pri);
          font-size: 16px; padding: 0 12px; outline: none;
          transition: border 0.15s, box-shadow 0.15s;
          font-family: 'DM Mono', monospace; width: 100%; appearance: none;
        }
        .k-select option { background: #0f0f12; color: #f0ebe3; }
        .k-select:focus, .k-input:focus {
          border-color: rgba(127,119,221,0.6);
          box-shadow: 0 0 0 3px rgba(127,119,221,0.08);
        }
        .k-input::placeholder { color: var(--text-ter); font-style: italic; font-size: 13px; }

        .k-sep { height: 0.5px; background: var(--border-sm); margin: 0 0 1.1rem; }

        .k-mood-label {
          font-size: 9px; font-weight: 500; color: var(--text-sec);
          letter-spacing: 0.25em; text-transform: uppercase; margin-bottom: 8px;
        }
        .k-moods { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1.1rem; }
        .k-mood {
          padding: 5px 11px; border-radius: 20px; font-size: 10px;
          border: 0.5px solid var(--border-md); color: var(--text-sec);
          background: transparent; cursor: pointer;
          transition: all 0.12s; font-family: 'DM Mono', monospace; min-height: 32px;
          display: flex; align-items: center;
        }
        .k-mood:hover { border-color: rgba(175,169,236,0.5); color: #AFA9EC; }
        .k-mood.on { background: rgba(83,74,183,0.12); border-color: rgba(175,169,236,0.5); color: #AFA9EC; font-weight: 500; }

        .k-textarea-wrap { position: relative; margin-bottom: 1.1rem; }
        .k-textarea {
          width: 100%; min-height: 140px;
          border: 0.5px solid var(--border-md); border-radius: var(--r-md);
          background: rgba(255,255,255,0.04); color: var(--text-pri);
          font-size: 16px; font-family: 'Cormorant Garamond', serif;
          line-height: 1.85; padding: 14px 14px 50px; resize: vertical; outline: none;
          transition: border 0.15s, box-shadow 0.15s;
        }
        .k-textarea:focus { border-color: rgba(127,119,221,0.6); box-shadow: 0 0 0 3px rgba(127,119,221,0.08); }
        .k-textarea::placeholder { color: var(--text-ter); font-style: italic; font-size: 14px; }
        .k-toolbar {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 7px 10px;
          display: flex; align-items: center; justify-content: space-between;
          border-top: 0.5px solid var(--border-sm);
        }
        .k-mic {
          display: flex; align-items: center; gap: 6px;
          padding: 4px 10px; border-radius: 20px;
          border: 0.5px solid var(--border-md); background: rgba(255,255,255,0.03);
          color: var(--text-sec); font-size: 10px; cursor: pointer;
          transition: all 0.15s; font-family: 'DM Mono', monospace;
          letter-spacing: 0.05em; min-height: 28px;
        }
        .k-mic:hover { border-color: rgba(175,169,236,0.4); color: #AFA9EC; background: rgba(83,74,183,0.07); }
        .k-mic.rec   { border-color: rgba(226,75,74,0.5); background: rgba(226,75,74,0.07); color: rgba(255,140,140,0.9); }
        .k-mic-dot { width: 6px; height: 6px; border-radius: 50%; background: #E24B4A; display: none; flex-shrink: 0; }
        .k-mic.rec .k-mic-dot { display: block; animation: blink 1s ease infinite; }
        @keyframes blink { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.6)} }
        .k-charcount { font-size: 10px; color: var(--text-ter); }

        .k-audio-row {
          margin-top: 8px; padding: 9px 12px;
          background: rgba(255,255,255,0.02); border: 0.5px solid var(--border-sm);
          border-radius: var(--r-md); display: flex; align-items: center; gap: 10px;
        }
        .k-audio-row audio { flex: 1; height: 26px; filter: invert(0.8) hue-rotate(160deg); min-width: 0; }

        /* ── Background picker ─────────────────────── */
        .bp-tabs { display: flex; gap: 4px; margin-bottom: 12px; flex-wrap: wrap; }
        .bp-tab {
          padding: 5px 10px; border-radius: var(--r-md); font-size: 10px; font-weight: 500;
          border: 0.5px solid transparent; color: var(--text-sec);
          cursor: pointer; background: transparent; font-family: 'DM Mono', monospace;
          transition: all 0.12s; letter-spacing: 0.05em; min-height: 30px;
        }
        .bp-tab:hover { background: rgba(255,255,255,0.04); }
        .bp-tab.on { background: rgba(83,74,183,0.12); color: #AFA9EC; border-color: rgba(175,169,236,0.35); }
        .bp-colors { display: flex; flex-wrap: wrap; gap: 7px; }
        .bp-swatch {
          width: 30px; height: 30px; border-radius: var(--r-md);
          cursor: pointer; border: 2px solid transparent; transition: all 0.15s; flex-shrink: 0;
        }
        .bp-swatch:hover { transform: scale(1.12); }
        .bp-swatch.selected { border-color: #AFA9EC; transform: scale(1.15); }
        .bp-custom-row { display: flex; align-items: center; gap: 12px; }
        .bp-color-thumb {
          width: 44px; height: 44px; border-radius: var(--r-md);
          border: 0.5px solid var(--border-md); cursor: pointer;
          position: relative; overflow: hidden; flex-shrink: 0;
        }
        .bp-color-thumb input[type=color] {
          position: absolute; inset: -4px; opacity: 0; cursor: pointer;
          width: calc(100% + 8px); height: calc(100% + 8px);
        }
        .bp-upload-zone {
          border: 0.5px dashed var(--border-md); border-radius: var(--r-md);
          padding: 1rem; text-align: center; cursor: pointer;
          transition: all 0.15s; background: rgba(255,255,255,0.03); position: relative;
        }
        .bp-upload-zone:hover { border-color: rgba(127,119,221,0.5); background: rgba(83,74,183,0.06); }
        .bp-upload-zone input { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; }
        .bp-img-thumb {
          width: 100%; height: 60px; border-radius: var(--r-md);
          object-fit: cover; margin-top: 8px; border: 0.5px solid var(--border-sm);
        }
        .bp-opacity-row { display: flex; align-items: center; gap: 10px; margin-top: 12px; }
        .bp-opacity-label { font-size: 10px; color: var(--text-sec); white-space: nowrap; }
        .bp-opacity-val { font-size: 10px; color: var(--text-ter); min-width: 32px; text-align: right; }

        /* ── Text readability ──────────────────────── */
        .text-protect {
          margin-top: 12px; background: rgba(255,255,255,0.03);
          border-radius: var(--r-md); border: 0.5px solid var(--border-sm); padding: 11px 12px;
        }
        .tp-head {
          font-size: 9px; font-weight: 500; color: var(--text-sec);
          letter-spacing: 0.25em; text-transform: uppercase;
          margin-bottom: 9px; display: flex; align-items: center; gap: 5px;
        }
        .tp-row { display: flex; align-items: center; gap: 8px; margin-bottom: 7px; flex-wrap: wrap; }
        .tp-row:last-child { margin-bottom: 0; }
        .tp-label { font-size: 10px; color: var(--text-sec); min-width: 86px; }
        .tp-val { font-size: 10px; color: var(--text-ter); min-width: 28px; text-align: right; }
        .tp-toggle-group { display: flex; gap: 4px; flex-wrap: wrap; }
        .tp-opt {
          padding: 4px 9px; border-radius: 20px; font-size: 9px; font-weight: 500;
          border: 0.5px solid var(--border-md); background: transparent; color: var(--text-sec);
          cursor: pointer; font-family: 'DM Mono', monospace; transition: all 0.12s;
          letter-spacing: 0.05em; min-height: 28px;
        }
        .tp-opt:hover { border-color: rgba(175,169,236,0.4); color: #AFA9EC; }
        .tp-opt.on { background: rgba(83,74,183,0.12); border-color: rgba(175,169,236,0.4); color: #AFA9EC; }

        input[type=range] { flex: 1; height: 2px; cursor: pointer; accent-color: #534AB7; min-width: 0; }

        /* ── Font picker ───────────────────────────── */
        .font-picker-scroll {
          max-height: 180px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-right: 4px;
          scrollbar-width: thin;
          scrollbar-color: rgba(210,170,90,0.15) transparent;
        }
        .font-picker-scroll::-webkit-scrollbar { width: 3px; }
        .font-picker-scroll::-webkit-scrollbar-track { background: transparent; }
        .font-picker-scroll::-webkit-scrollbar-thumb { background: rgba(210,170,90,0.2); border-radius: 3px; }

        .font-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 11px;
          border-radius: var(--r-md);
          border: 0.5px solid var(--border-sm);
          background: rgba(255,255,255,0.02);
          cursor: pointer;
          transition: all 0.13s;
          gap: 8px;
          min-height: 44px;
        }
        .font-option:hover { background: rgba(255,255,255,0.04); border-color: rgba(175,169,236,0.25); }
        .font-option.selected {
          background: rgba(83,74,183,0.1);
          border-color: rgba(175,169,236,0.45);
        }
        .font-option-sample {
          font-size: 15px;
          font-style: italic;
          color: var(--text-pri);
          flex: 1;
          line-height: 1.3;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
        }
        .font-option-name {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: var(--text-ter);
          letter-spacing: 0.1em;
          flex-shrink: 0;
          text-align: right;
          max-width: 90px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .font-option.selected .font-option-name { color: #AFA9EC; }
        .font-option-check {
          width: 14px; height: 14px; border-radius: 50%;
          background: rgba(83,74,183,0.7); flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-size: 8px; color: #fff;
        }

        /* ── Text color palette ────────────────────── */
        .tc-row {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 8px; flex-wrap: wrap;
        }
        .tc-auto-btn {
          padding: 4px 10px; border-radius: 20px; font-size: 9px; font-weight: 500;
          border: 0.5px solid var(--border-md); background: transparent; color: var(--text-sec);
          cursor: pointer; font-family: 'DM Mono', monospace; transition: all 0.12s;
          letter-spacing: 0.07em; min-height: 28px; white-space: nowrap;
        }
        .tc-auto-btn:hover { border-color: rgba(175,169,236,0.4); color: #AFA9EC; }
        .tc-auto-btn.on { background: rgba(83,74,183,0.12); border-color: rgba(175,169,236,0.4); color: #AFA9EC; }
        .tc-palette { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
        .tc-swatch {
          width: 24px; height: 24px; border-radius: 5px;
          cursor: pointer; border: 2px solid transparent;
          transition: all 0.14s; flex-shrink: 0;
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        .tc-swatch:hover { transform: scale(1.15); }
        .tc-swatch.selected { border-color: #AFA9EC; transform: scale(1.18); }

        /* ── Actions ───────────────────────────────── */
        .k-actions {
          display: flex; align-items: center; justify-content: space-between;
          margin-top: 1rem; gap: 8px; flex-wrap: wrap;
        }
        .k-action-left { display: flex; gap: 6px; flex-wrap: wrap; }

        .k-popup {
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
          background: rgba(10,10,14,0.96); border: 0.5px solid rgba(120,200,180,0.35);
          backdrop-filter: blur(20px); color: rgba(120,200,180,0.95);
          padding: 11px 22px; border-radius: var(--r-md);
          font-family: 'DM Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em; text-transform: uppercase; z-index: 200;
          white-space: nowrap; box-shadow: 0 8px 32px rgba(0,0,0,0.7);
          max-width: calc(100vw - 2rem);
        }

        /* ── Responsive ────────────────────────────── */
        /* Tablet / small-laptop tier: keep two columns but tighten spacing */
        @media (max-width: 1024px) and (min-width: 901px) {
          .k-split { padding: 0 1rem; }
          .k-form-pane { padding-left: 1rem; }
        }

        /* Mobile tier: stack preview above form (THE key fix — was
           incorrectly staying 2-column before) */
        @media (max-width: 900px) {
          .k-split {
            grid-template-columns: 1fr;
            height: auto;
            min-height: 0;
            overflow: visible;
            padding: 0 1rem;
          }
          .k-preview-pane {
            position: relative; top: auto;
            height: auto; min-height: 260px;
            padding: 1.25rem 0 0;
            border-right: none;
            border-bottom: 0.5px solid var(--border-sm);
            overflow: visible;
          }
          .k-preview-card { min-height: 240px; flex: none; }
          .k-form-pane {
            height: auto;
            overflow-y: visible;
            overflow-x: hidden;
            padding: 1.25rem 0 4rem;
          }
          .k-field-grid { grid-template-columns: 1fr; gap: 10px; }
          .k-hamburger { display: flex; }
          .k-nav-links { display: none; }
          .k-global-links { display: none; }
        }

        @media (max-width: 480px) {
          .k-global-nav { padding: 0 1rem; column-gap: 10px; height: 60px; }
          .k-global-logo-img { height: 26px; }
          .k-global-wordmark { font-size: 17px; }
          .k-global-bell, .k-avatar { width: 30px; height: 30px; }
          .k-nav { top: 60px; margin-top: 60px; height: 48px; }
          .k-mobile-menu { top: 108px; max-height: calc(100vh - 108px); }
          .k-hero { padding: 1.5rem 1rem 1.25rem; }
          .k-hero-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
          .k-stats { justify-content: flex-start; }
          .k-stat { text-align: left; }
          .k-stat-divider { display: none; }
          .k-preview-card { min-height: 200px; }
          .k-card-body { padding: 0.85rem 0.75rem; }
          .k-moods .k-mood { font-size: 10px; padding: 4px 9px; }
          .tp-row { flex-direction: column; align-items: flex-start; gap: 5px; }
          .tp-label { min-width: unset; }
          .k-actions { flex-direction: column; align-items: stretch; }
          .k-action-left { width: 100%; }
          .k-action-left .k-btn-ghost { flex: 1; justify-content: center; }
          .k-btn-primary { width: 100%; justify-content: center; padding: 12px 14px; }
          .bp-swatch { width: 34px; height: 34px; }
          .font-picker-scroll { max-height: 150px; }
          .k-mic span { display: none; }
          .k-toolbar { padding: 6px 8px; }
        }

        .k-body-wrap {
          padding-bottom: max(0px, env(safe-area-inset-bottom));
        }

        /* ── Shepherd product tour (Atelier theme) ─────────────── */
        .shepherd-modal-overlay-container { z-index: 9997; }
        .shepherd-modal-overlay-container.shepherd-modal-is-visible path {
          fill: rgba(5,4,8,0.72);
        }
        /* Blur layer sits just under the dim overlay; its clip-path (set from JS)
           leaves the highlighted element sharp and un-dimmed */
        #k-tour-blur {
          position: fixed; inset: 0; z-index: 9996; pointer-events: none;
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }

        /* Animated gold border around the focused area */
        @property --k-ring-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @keyframes kRingSpin  { to { --k-ring-angle: 360deg; } }
        @keyframes kRingPulse {
          0%, 100% { box-shadow: 0 0 10px 0 rgba(232,200,114,0.25), 0 0 0 0 rgba(232,200,114,0.30); }
          50%      { box-shadow: 0 0 26px 2px rgba(232,200,114,0.50), 0 0 0 7px rgba(232,200,114,0); }
        }
        #k-tour-ring {
          position: fixed; z-index: 9998; pointer-events: none; box-sizing: border-box;
          border: 1px solid rgba(232,200,114,0.35);
          animation: kRingPulse 2.4s ease-in-out infinite;
        }
        #k-tour-ring::before {
          content: ''; position: absolute; inset: -2px; border-radius: inherit; padding: 2px;
          background: conic-gradient(from var(--k-ring-angle),
            transparent 0deg, #c9a84c 50deg, #fff2cc 95deg, #e8c872 130deg, transparent 190deg,
            transparent 220deg, #c9a84c 275deg, #fde68a 310deg, transparent 350deg);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          mask-composite: exclude;
          animation: kRingSpin 3s linear infinite;
          filter: drop-shadow(0 0 5px rgba(232,200,114,0.7));
        }
        @media (prefers-reduced-motion: reduce) {
          #k-tour-ring, #k-tour-ring::before { animation: none; }
        }
        .shepherd-element.k-tour {
          z-index: 9999;
          width: 100%;
          max-width: min(420px, calc(100vw - 2rem));
          background: transparent;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1.5px solid #ffffff;
          border-radius: 12px;
          box-shadow: 0 25px 60px -10px rgba(0,0,0,0.9), 0 0 35px rgba(232,200,114,0.12);
          color: #f0ebe3;
          font-family: 'DM Mono', monospace;
        }
        .shepherd-element.k-tour .shepherd-content {
          position: relative; padding: 0; overflow: hidden;
          border-radius: 10.5px;
          background: rgba(14,12,22,0.96);
        }
        .shepherd-element.k-tour .shepherd-content::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(90deg, transparent, #e8c872, #fff2cc, #e8c872, transparent);
          pointer-events: none; z-index: 2;
        }

        /* Header: eyebrow + close on row 1, title on row 2 */
        .shepherd-element.k-tour .shepherd-content .shepherd-header {
          background: transparent; padding: 20px 20px 8px;
          display: grid; grid-template-columns: 1fr auto; align-items: center; row-gap: 8px;
        }
        .k-tour-eyebrow {
          grid-column: 1; grid-row: 1;
          display: flex; flex-wrap: wrap; align-items: center; gap: 8px;
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          font-weight: 600; color: #e8c872;
        }
        .k-tour-eyebrow-dot { color: rgba(255,255,255,0.3); }
        .k-tour-eyebrow-cat { color: rgba(255,255,255,0.5); letter-spacing: 0.1em; font-weight: 400; }
        .shepherd-element.k-tour .shepherd-content .shepherd-cancel-icon {
          grid-column: 2; grid-row: 1;
          background: none; border: none; cursor: pointer; padding: 4px;
          font-size: 14px; line-height: 1; color: rgba(255,255,255,0.4); transition: color 0.15s;
        }
        .shepherd-element.k-tour .shepherd-content .shepherd-cancel-icon:hover { color: #e8c872; }
        .shepherd-element.k-tour .shepherd-content .shepherd-title {
          grid-column: 1 / -1; grid-row: 2;
          font-family: 'Playfair Display', serif; font-style: italic; font-weight: 700;
          font-size: 24px; line-height: 1.25;
          background: linear-gradient(135deg, #fdf8ee 0%, #e8c872 50%, #c9a84c 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }

        /* Body */
        .shepherd-element.k-tour .shepherd-content .shepherd-text {
          padding: 8px 20px; font-size: 13px; line-height: 1.625;
          color: rgba(255,255,255,0.8);
        }
        .shepherd-element.k-tour .shepherd-content .shepherd-text b { color: #e8c872; font-weight: 500; }

        /* Footer: progress row, then Skip (left) + Back / Next (right) */
        .shepherd-element.k-tour .shepherd-content .shepherd-footer {
          display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-end;
          gap: 16px 8px; padding: 12px 20px 20px; margin-top: 4px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .k-tour-progress { flex-basis: 100%; display: flex; align-items: center; gap: 12px; }
        .k-tour-count { font-size: 10px; letter-spacing: 0.1em; color: rgba(232,200,114,0.7); min-width: 42px; }
        .k-tour-track { flex: 1; height: 6px; border-radius: 999px; background: rgba(255,255,255,0.1); overflow: hidden; }
        .k-tour-fill {
          display: block; height: 100%; border-radius: 999px;
          background: linear-gradient(90deg, #c9a84c, #e8c872, #fde68a);
          transition: width 0.3s ease;
        }

        .shepherd-element.k-tour .shepherd-footer .k-tour-btn {
          font-family: 'DM Mono', monospace; font-size: 12px; letter-spacing: 0.02em;
          border-radius: 8px; padding: 6px 12px; margin: 0; cursor: pointer;
          transition: all 0.15s; white-space: nowrap;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .shepherd-element.k-tour .shepherd-footer .k-tour-btn.k-tour-btn-skip,
        .shepherd-element.k-tour .shepherd-footer .k-tour-btn.k-tour-btn-skip:not(:disabled):hover {
          margin-right: auto; background: transparent; border: 0;
          color: rgba(255,255,255,0.4); font-size: 11px; letter-spacing: 0.05em; padding: 6px 0;
        }
        .shepherd-element.k-tour .shepherd-footer .k-tour-btn.k-tour-btn-skip:not(:disabled):hover { color: rgba(255,255,255,0.8); }
        .shepherd-element.k-tour .shepherd-footer .k-tour-btn.k-tour-btn-ghost,
        .shepherd-element.k-tour .shepherd-footer .k-tour-btn.k-tour-btn-ghost:not(:disabled):hover {
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.8);
        }
        .shepherd-element.k-tour .shepherd-footer .k-tour-btn.k-tour-btn-ghost:not(:disabled):hover {
          border-color: rgba(255,255,255,0.3); color: #ffffff;
        }
        .shepherd-element.k-tour .shepherd-footer .k-tour-btn.k-tour-btn-primary,
        .shepherd-element.k-tour .shepherd-footer .k-tour-btn.k-tour-btn-primary:not(:disabled):hover {
          background: linear-gradient(90deg, #e8c872, #caa146); border: 0;
          color: #0e0c16; font-weight: 600; padding: 6px 16px;
          box-shadow: 0 2px 12px rgba(232,200,114,0.3);
        }
        .shepherd-element.k-tour .shepherd-footer .k-tour-btn.k-tour-btn-primary:not(:disabled):hover { filter: brightness(1.1); }

        .shepherd-element.k-tour > .shepherd-arrow:before { background: #0e0c16 !important; background-color: #0e0c16 !important; border: 1.5px solid #ffffff; }
        @media (max-width: 480px) {
          .shepherd-element.k-tour .shepherd-content .shepherd-title { font-size: 20px; }
          .shepherd-element.k-tour .shepherd-footer .k-tour-btn { padding: 6px 10px; font-size: 11px; }
        }
      `}</style>

      <div className="k-root">

        {/* ── Navbar ─────────────────────────────── */}
        {/* ── Global Navbar ─────────────────────────── */}
        <nav className="k-global-nav">
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

      <div className="k-global-links">
        <a href="/kalam" className="k-global-link active">Kalam</a>
        <a href="/spaces" className="k-global-link">Community</a>
        <a href="/Social" className="k-global-link">Browse</a>
        <a href="/albumsLive" className="k-global-link">Library</a>
      </div>

      <div className="k-global-right">
        <button onClick={()=>setIsNotificationmodalOpened(true)} className="k-global-bell" aria-label="Notifications">🔔</button>
        <div className="k-avatar">
          <img onClick={() => Navigate(`/profile?userId=${userId}`)} className="rounded-full h-full" src={profilePic} alt="profilePic" />
        </div>
      </div>
    </nav>

        <KalamSidebar />

        <div className="k-page-body">
          <nav className="k-nav">
            <div className="k-brand">
              {/* <div className="k-logo">✦</div> */}
              {/* <span className="k-wordmark">Kalam</span> */}
            </div>
            <div className="k-nav-links">
              {["Compose","Collection"].map(n => (
                <button key={n} className={`k-nl${activeNav === n ? " active" : ""}`} onClick={() => {setActiveNav(n);if(n==='Collection')Navigate('/urKalam')}}>
                  {n}
                </button>
              ))}
            </div>
            <div className="k-nav-right">
              
              <button className="k-hamburger" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu">
                <span /><span /><span />
              </button>
            </div>
          </nav>

          {/* Mobile menu — includes Compose/Collection AND the global nav
              links (Community/Browse/Library), which are hidden above 900px
              from the top navbar and would otherwise be unreachable on mobile */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div className="k-mobile-menu"
                initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.14 }}
              >
                {["Compose","Collection"].map(n => (
                  <button key={n} className={`k-nl${activeNav === n ? " active" : ""}`}
                    onClick={() => { setActiveNav(n); setMobileMenuOpen(false); if(n==='Collection') Navigate('/urKalam'); }}>
                    {n}
                  </button>
                ))}
                <a href="/spaces" className="k-nl" onClick={() => setMobileMenuOpen(false)}>Community</a>
                <a href="/Social" className="k-nl" onClick={() => setMobileMenuOpen(false)}>Browse</a>
                <a href="/albumsLive" className="k-nl" onClick={() => setMobileMenuOpen(false)}>Library</a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Hero ─────────────────────────────────── */}
          {/* <div className="k-hero">
            <div className="k-hero-inner">
              <div>
                <div className="k-greeting">Good evening, Arif</div>
                <div>
                  <span className="k-hero-kalam">Kalam</span>
                  <span className="k-hero-kalam-urdu">کلام</span>
                </div>
                <div className="k-hero-ornament">
                  <div className="k-hero-ornament-line" />
                  <div className="k-hero-ornament-diamond" />
                  <div className="k-hero-ornament-line right" />
                </div>
                <div className="k-hero-sub">Har lafz ek jazbaat hai — ہر لفظ ایک جذبات ہے</div>
              </div>
              <div className="k-stats">
                <div className="k-stat"><div className="k-stat-num">24</div><div className="k-stat-label">Kalams</div></div>
                <div className="k-stat-divider" />
                <div className="k-stat"><div className="k-stat-num">142</div><div className="k-stat-label">Ashaar</div></div>
                <div className="k-stat-divider" />
                <div className="k-stat"><div className="k-stat-num">9</div><div className="k-stat-label">Ghazals</div></div>
              </div>
            </div>
          </div> */}

          {/* ── SPLIT LAYOUT ────────────────────────── */}
          <div className="k-split k-body-wrap">

            {/* ── LEFT: Live Preview Pane ─────────────── */}
            <div className="k-preview-pane">
              {/* <div className="k-preview-label">● Live preview</div> */}

              <div className="k-preview-card">
                {/* BG layer */}
                <div
                  className="k-prev-bg"
                  style={
                    isImage && imageSrc
                      ? { backgroundImage: `url(${imageSrc})`, backgroundSize: "cover", backgroundPosition: "center", opacity: bgOpacity / 100 }
                      : { backgroundColor: bgTab === "custom" ? customColor : selectedColor, opacity: bgOpacity / 100 }
                  }
                />
                {/* Scrim */}
                <div className="k-prev-scrim" style={{ background: `rgba(0,0,0,${scrim / 100})` }} />

                {/* Empty state */}
                {!content && !title && (
                  <div className="k-prev-empty">
                    <div className="k-prev-empty-glyph">✦</div>
                    <div className="k-prev-empty-text">Start writing to see preview</div>
                  </div>
                )}

                {/* Text content */}
                {(content || title) && (
                  <div className="k-prev-content" style={previewWrapStyle}>
                    <div
                      className="k-prev-badge"
                      style={{ background: badgeBg, border: `0.5px solid ${badgeBorder}`, color: autoMainColor }}
                    >
                      {previewFormLabel}
                    </div>
                    {title && (
                      <div
                        className="k-prev-title"
                        style={{
                          color: resolvedTitleColor,
                          fontSize: titleFs,
                          fontFamily: resolvedTitleFamily,
                        }}
                      >
                        {title}
                      </div>
                    )}
                    {content && (
                      <div>
                        <div
                          className="k-prev-text"
                          style={{
                            color: resolvedContentColor,
                            fontSize: contentFs,
                            fontFamily: resolvedContentFamily,
                          }}
                        >
                          {previewText}{!showFullPreview && previewIsTruncated ? "…" : ""}
                        </div>
                        {previewIsTruncated && (
                          <button
                            className="k-prev-read-more"
                            onClick={() => setShowFullPreview(v => !v)}
                          >
                            {showFullPreview ? "↑ Show less" : "↓ Read more"}
                          </button>
                        )}
                      </div>
                    )}
                    <div className="k-prev-author" style={{ color: subColor }}>— Arif Karimi</div>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="k-preview-status">
                <div className="k-preview-status-text">
                  <span className="k-preview-status-dot" />
                  Updates live
                </div>
                <div className="k-preview-mood-pills">
                  {activeMoods.slice(0, 3).map(m => (
                    <span key={m} className="k-preview-mood-pill">{m}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Compose Form ─────────────────── */}
            <div className="k-form-pane">
              <div className="k-section-label">New composition</div>

              <div className="k-card">
                <div className="k-card-head">
                  <div>
                    <div className="k-card-title">Compose</div>
                    <div className="k-card-sub">Fill in the details and begin writing</div>
                  </div>
                  <button className="k-btn-ghost" style={{ fontSize: "10px" }}>
                    📋 Use template
                  </button>
                </div>

                <div className="k-card-body">

                  {/* Sinf + Title */}
                  <div className="k-field-grid">
                    <div className="k-field">
                      <div className="k-label">Form <span className="k-label-urdu">— صنف</span></div>
                      <select className="k-select" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="" disabled>Select a form…</option>
                        {SINF_OPTIONS.map(o => (
                          <option key={o.value} value={o.value}>{o.value} — {o.ur}</option>
                        ))}
                      </select>
                    </div>
                    <div className="k-field">
                      <div className="k-label">Title <span className="k-label-urdu">— عنوان</span></div>
                      <input
                        className="k-input" type="text" placeholder="Name your kalam…"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="k-sep" />

                  {/* Moods */}
                  <div className="k-mood-label">
                    Mood <span className="k-label-urdu" style={{ fontSize: "10px" }}>— کیفیت</span>
                  </div>
                  <div className="k-moods">
                    {MOODS.map(m => (
                      <button key={m.en} className={`k-mood${activeMoods.includes(m.en) ? " on" : ""}`} onClick={() => toggleMood(m.en)}>
                        {m.en} — {m.ur}
                      </button>
                    ))}
                  </div>

                  <div className="k-sep" />

                  {/* Content textarea */}
                  <div className="k-mood-label" style={{ marginBottom: "8px" }}>
                    Content <span className="k-label-urdu" style={{ fontSize: "10px" }}>— متن</span>
                  </div>
                  <div className="k-textarea-wrap">
                    <textarea
                      className="k-textarea"
                      placeholder="Apna kalam yahan likhein… اپنا کلام یہاں لکھیں"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="k-toolbar">
                      <button className={`k-mic${streamRecording ? " rec" : ""}`} onClick={handleRecording} aria-label="Voice input">
                        🎙 <span>{streamRecording ? "Recording…" : "Speak"}</span>
                        <span className="k-mic-dot" />
                      </button>
                      <span className="k-charcount">{content.length} chars</span>
                    </div>
                  </div>

                  {/* Audio playback */}
                  {recording.map((recUrl, i) => (
                    <div className="k-audio-row" key={i}>
                      <audio controls src={recUrl} />
                      <a href={recUrl} download={`kalam-recording-${i}.wav`}
                        style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(120,200,180,0.7)", textDecoration: "none", flexShrink: 0 }}>
                        ↓ Save
                      </a>
                    </div>
                  ))}

                  <div className="k-sep" style={{ marginTop: "1.1rem" }} />

                  {/* Background picker */}
                  <div className="k-mood-label" style={{ marginBottom: "10px" }}>
                    🎨 Background <span className="k-label-urdu" style={{ fontSize: "10px" }}>— پس منظر</span>
                  </div>
                  <div className="bp-tabs">
                    {["colors","custom","image"].map(t => (
                      <button key={t} className={`bp-tab${bgTab === t ? " on" : ""}`} onClick={() => setBgTab(t)}>
                        {t === "colors" ? "Preset colors" : t === "custom" ? "Custom color" : "Upload image"}
                      </button>
                    ))}
                  </div>

                  {bgTab === "colors" && (
                    <div className="bp-colors">
                      {PRESET_COLORS.map(c => (
                        <div key={c.hex}
                          className={`bp-swatch${selectedColor === c.hex && !isImage ? " selected" : ""}`}
                          style={{ background: c.hex }} title={c.label}
                          onClick={() => { setSelectedColor(c.hex); setIsImage(false); }}
                        />
                      ))}
                    </div>
                  )}

                  {bgTab === "custom" && (
                    <div className="bp-custom-row">
                      <div className="bp-color-thumb" style={{ background: customColor }}>
                        <input type="color" value={customColor}
                          onChange={(e) => { setCustomColor(e.target.value); setIsImage(false); }} />
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-pri)" }}>{customColor.toUpperCase()}</div>
                        <div style={{ fontSize: "10px", color: "var(--text-ter)", marginTop: "2px" }}>Click swatch to open picker</div>
                      </div>
                    </div>
                  )}

                  {bgTab === "image" && (
                    <>
                      <div className="bp-upload-zone">
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                        <div style={{ fontSize: "20px", color: "var(--text-ter)", marginBottom: "5px" }}>🖼</div>
                        <div style={{ fontSize: "11px", color: "var(--text-sec)", marginBottom: "2px" }}>Drop an image or click to browse</div>
                        <div style={{ fontSize: "10px", color: "var(--text-ter)" }}>JPG, PNG, WEBP</div>
                      </div>
                      {imageSrc && <img src={imageSrc} alt="Uploaded background" className="bp-img-thumb" />}
                    </>
                  )}

                  <div className="bp-opacity-row">
                    <span className="bp-opacity-label">☀ Brightness</span>
                    <input type="range" min="20" max="100" step="1" value={bgOpacity}
                      onChange={(e) => setBgOpacity(Number(e.target.value))} />
                    <span className="bp-opacity-val">{bgOpacity}%</span>
                  </div>

                  {/* Text readability */}
                  <div className="text-protect">
                    <div className="tp-head">Aa Text readability</div>
                    <div className="tp-row">
                      <span className="tp-label">Text color</span>
                      <div className="tp-toggle-group">
                        {["light","dark","auto"].map(v => (
                          <button key={v} className={`tp-opt${textColor === v ? " on" : ""}`} onClick={() => setTextColor(v)}>
                            {v.charAt(0).toUpperCase() + v.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="tp-row">
                      <span className="tp-label">Text backdrop</span>
                      <div className="tp-toggle-group">
                        {[["none","None"],["soft","Soft blur"],["solid","Solid panel"]].map(([v,l]) => (
                          <button key={v} className={`tp-opt${backdrop === v ? " on" : ""}`} onClick={() => setBackdrop(v)}>{l}</button>
                        ))}
                      </div>
                    </div>
                    <div className="tp-row">
                      <span className="tp-label">Scrim overlay</span>
                      <input type="range" min="0" max="80" step="1" value={scrim}
                        onChange={(e) => setScrim(Number(e.target.value))} />
                      <span className="tp-val">{scrim}%</span>
                    </div>

                    {/* ── Title Font ─────────────────────────────── */}
                    <div className="tp-row" style={{ alignItems: "flex-start", flexDirection: "column", gap: "7px" }}>
                      <span className="tp-label" style={{ marginBottom: "2px" }}>
                        Title font <span style={{ color: "var(--text-ter)", fontSize: "9px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>— عنوان کا خط</span>
                      </span>
                      <div className="font-picker-scroll" style={{ width: "100%" }}>
                        {TITLE_FONTS.map(f => (
                          <div
                            key={f.id}
                            className={`font-option${selectedTitleFont === f.id ? " selected" : ""}`}
                            onClick={() => setSelectedTitleFont(f.id)}
                          >
                            <span
                              className="font-option-sample"
                              style={{ fontFamily: f.family }}
                            >
                              {f.sample}
                            </span>
                            <span className="font-option-name">{f.label}</span>
                            {selectedTitleFont === f.id && (
                              <span className="font-option-check">✓</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ── Title Color ────────────────────────────── */}
                    <div className="tp-row" style={{ alignItems: "flex-start", flexDirection: "column", gap: "6px" }}>
                      <span className="tp-label">
                        Title color <span style={{ color: "var(--text-ter)", fontSize: "9px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>— عنوان رنگ</span>
                      </span>
                      <div className="tc-row">

                          <button
                            className={`tc-auto-btn${titleColorMode === "auto" ? " on" : ""}`}
                            onClick={() => setTitleColorMode("auto")}
                          >
                            Auto
                          </button>

                          <div
                            className="bp-color-thumb"
                            style={{ background: selectedTitleColor }}
                          >
                            <input
                              type="color"
                              value={selectedTitleColor}
                              onChange={(e) => {
                                setSelectedTitleColor(e.target.value);
                                setTitleColorMode("custom");
                              }}
                            />
                          </div>

                        </div>
                      <div className="tc-palette">
                        {TEXT_COLOR_PALETTE.map(c => (
                          <div
                            key={c.hex}
                            className={`tc-swatch${titleColorMode !== "auto" && selectedTitleColor === c.hex ? " selected" : ""}`}
                            style={{ background: c.hex }}
                            title={c.label}
                            onClick={() => { setSelectedTitleColor(c.hex); setTitleColorMode("custom"); }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* ── Content Font ───────────────────────────── */}
                    <div className="tp-row" style={{ alignItems: "flex-start", flexDirection: "column", gap: "7px" }}>
                      <span className="tp-label" style={{ marginBottom: "2px" }}>
                        Content font <span style={{ color: "var(--text-ter)", fontSize: "9px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>— متن کا خط</span>
                      </span>
                      <div className="font-picker-scroll" style={{ width: "100%" }}>
                        {CONTENT_FONTS.map(f => (
                          <div
                            key={f.id}
                            className={`font-option${selectedContentFont === f.id ? " selected" : ""}`}
                            onClick={() => setSelectedContentFont(f.id)}
                          >
                            <span
                              className="font-option-sample"
                              style={{ fontFamily: f.family, fontSize: "12px" }}
                            >
                              {f.sample}
                            </span>
                            <span className="font-option-name">{f.label}</span>
                            {selectedContentFont === f.id && (
                              <span className="font-option-check">✓</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ── Content Color ──────────────────────────── */}
                    <div className="tp-row" style={{ alignItems: "flex-start", flexDirection: "column", gap: "6px" }}>
                      <span className="tp-label">
                        Content color <span style={{ color: "var(--text-ter)", fontSize: "9px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>— متن رنگ</span>
                      </span>
                      <div className="tc-row">

                          <button
                            className={`tc-auto-btn${titleColorMode === "auto" ? " on" : ""}`}
                            onClick={() => setTitleColorMode("auto")}
                          >
                            Auto
                          </button>

                          <div
                            className="bp-color-thumb"
                            style={{ background: selectedTitleColor }}
                          >
                            <input
                              type="color"
                              value={selectedTitleColor}
                              onChange={(e) => {
                                setSelectedTitleColor(e.target.value);
                                setTitleColorMode("custom");
                              }}
                            />
                          </div>

                        </div>
                      <div className="tc-palette">
                        {TEXT_COLOR_PALETTE.map(c => (
                          <div
                            key={c.hex}
                            className={`tc-swatch${contentColorMode !== "auto" && selectedContentColor === c.hex ? " selected" : ""}`}
                            style={{ background: c.hex }}
                            title={c.label}
                            onClick={() => { setSelectedContentColor(c.hex); setContentColorMode("custom"); }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* ── Title size ──────────────────────────────── */}
                    <div className="tp-row">
                      <span className="tp-label">Title Size</span>
                      <div className="tp-toggle-group">
                        {[["sm","Small"],["md","Medium"],["lg","Large"]].map(([v,l]) => (
                          <button key={v} className={`tp-opt${titleSize === v ? " on" : ""}`} onClick={() => setTitleSize(v)}>{l}</button>
                        ))}
                      </div>
                    </div>
                     {/* ── Content size ──────────────────────────────── */}
                    <div className="tp-row">
                      <span className="tp-label">Content size</span>
                      <div className="tp-toggle-group">
                        {[["sm","Small"],["md","Medium"],["lg","Large"]].map(([v,l]) => (
                          <button key={v} className={`tp-opt${contentSize === v ? " on" : ""}`} onClick={() => setContentSize(v)}>{l}</button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit message */}
                  {message && (
                    <p style={{ fontSize: "11px", letterSpacing: "0.1em", color: "rgba(120,200,180,0.7)", textAlign: "center", margin: "1rem 0 0" }}>
                      {message}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="k-actions">
                    <div className="k-action-left">
                      <button className="k-btn-ghost">💾 Save draft</button>
                      <button className="k-btn-ghost">↗ Share</button>
                      <button className="k-btn-ghost">🖨 Export</button>
                    </div>
                    <button  className="k-btn-primary" onClick={()=>{handleKalam()}}>
                      ✦ Publish kalam
                    </button>
                  </div>

                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
                <Link to="/UrKalam" className="k-btn-ghost" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>
                  View your kalams →
                </Link>
              </div>
            </div>

            {/* ── Notifications modal (fixed: was calling a non-existent
                 setNotificationOpened; now correctly toggles
                 isNotificationModalOpen via setIsNotificationmodalOpened) ── */}
            <MyVerticallyCenteredModal isOpen={isNotificationModalOpen} onClose={() => setIsNotificationmodalOpened(false)}>
  <div
    className="rounded-none sm:rounded-xl w-full h-full sm:h-auto sm:max-w-md sm:max-h-[80vh] flex flex-col overflow-hidden border border-[#f59e0b]/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    style={{
      background: "rgba(29,13,33,0.45)",
      backdropFilter: "blur(32px)",
      WebkitBackdropFilter: "blur(32px)",
      paddingTop: "env(safe-area-inset-top, 0px)",
      paddingBottom: "env(safe-area-inset-bottom, 0px)",
    }}
  >

    {/* Header */}
    <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-[#f59e0b]/15 relative flex-shrink-0">
      <div className="flex justify-between items-center mb-1">
        <h2 className="flex items-center gap-2 sm:gap-3 text-[#f4daf7] text-lg sm:text-xl font-semibold tracking-wide">
          Notifications
        </h2>
        <button
          onClick={() => setIsNotificationmodalOpened(false)}
          className="w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-[#d8c3ad] hover:text-[#ffc174] transition-colors active:scale-90"
          aria-label="Close notifications"
        >
          ✕
        </button>
      </div>
      <div className="w-12 h-1 bg-[#ffc174] rounded-full mt-2" />
    </div>

    {/* List */}
    <div className="flex-1 overflow-y-auto overscroll-contain p-2 space-y-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#f59e0b]/20 [&::-webkit-scrollbar-thumb]:rounded-full">
      {notifications.length > 0 ? (
        notifications.map((item, i) => (
          <button
            key={item.id ?? i}
            onClick={() => { Navigate(item.toNavigate); handleNotificationSeen(item._id); }}
            className="w-full text-left flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border border-transparent transition-all duration-300 active:bg-[#f59e0b]/10 hover:bg-[#f59e0b]/5 hover:border-[#f59e0b]/40 sm:hover:-translate-y-0.5"
          >
            {/* Status dot */}
            {!item.isSeen && (
              <div className="relative flex-shrink-0 mt-1.5 sm:mt-1">
                <span
                  className="block w-2.5 h-2.5 rounded-full"
                  style={{
                    background: item.read ? "transparent" : "#f59e0b",
                    boxShadow: item.read ? "none" : "0 0 8px #f59e0b",
                  }}
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-0.5 sm:gap-2">
                <h3 className={`text-sm leading-snug break-words ${item.read ? "font-medium text-[#f4daf7]/70" : "font-bold text-[#f4daf7]"}`}>
                  {item.notificationTitle}
                </h3>
                <span className="text-[10px] tracking-wider text-[#d8c3ad] opacity-60 whitespace-nowrap font-mono">
                  {item.createdAt ?? "Just now"}
                </span>
              </div>
              <p className="text-sm text-[#d8c3ad] leading-relaxed line-clamp-2 sm:truncate">
                {item.notificationBody}
              </p>
            </div>
          </button>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center px-6 sm:px-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f59e0b]/5 border border-[#f59e0b]/10 flex items-center justify-center mb-5 sm:mb-6">
            <span className="text-[#f59e0b] text-2xl sm:text-3xl opacity-40">🔔</span>
          </div>
          <h3 className="text-[#f4daf7] font-semibold text-base sm:text-lg mb-2">Your notifications will appear here</h3>
          <p className="text-[#d8c3ad] max-w-xs mx-auto text-sm">
            We'll let you know when something important happens in your elite ecosystem.
          </p>
        </div>
      )}
    </div>

    {/* Footer */}
    <div
      className="px-4 sm:px-6 py-3 sm:py-4 border-t border-[#f59e0b]/15 flex justify-between items-center flex-shrink-0"
      style={{ background: "rgba(23,8,28,0.5)" }}
    >
      <button
        onClick={() => setIsNotificationmodalOpened(false)}
        className="min-h-[44px] px-2 text-[#d8c3ad] text-right hover:text-[#ffc174] transition-colors text-[10px] font-medium tracking-[0.15em] font-mono flex items-center gap-1 ml-auto"
      >
        close <span className="text-sm">›</span>
      </button>
    </div>
  </div>
</MyVerticallyCenteredModal>

          </div>
          <KalamFooter />
        </div>
      </div>

      {/* ── Success popup ── */}
      <AnimatePresence>
        {showPopup && (
          <motion.div className="k-popup"
            initial={{ y: -16, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            ✦ Entry submitted
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Kalam;