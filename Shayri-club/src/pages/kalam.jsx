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
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../ContextProvider";

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

const Kalam = () => {
  // ── ALL ORIGINAL STATE & LOGIC (untouched) ─────────────────────────────────
  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { setStreak, setStreak2 } = useContext(MyContext);

  const audioChunk = useRef([]);
  const [recording, setRecording] = useState([]);
  const mediaRecorderRef = useRef(null);
  const [streamRecording, setStreamRecording] = useState(false);
  const [file, setFile] = useState([]);
  const [available, setAvailable] = useState(false);
  const [recordingFinal, setRecordingFinal] = useState([]);
  const [checking, setChecking] = useState();
  const [titleFont, setTitleFont] = useState("")
  const [contentFont, setContentFont] = useState("")
  

  const handleKalam = () => {
    if (!available) {
      axiosInstance
        .post("/kalam", { type, content }, { withCredentials: true })
        .then((response) => {
          const data = response.data;
          console.log(response.data);
          if (data.success) {
            setMessage(data.msg);
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000);
            if (data.redirectUrl) navigate(data.redirectUrl);
          }
          setStreak(response.data.streak[0].createdAt);
          setStreak2(response.data.streak[1].createdAt);
        })
        .catch((err) => console.error(err));
    } else {
      const formData = new FormData();
      console.log("type", typeof checking);
      formData.append("audio", checking, { originalFileName: "hello.webm", type: type, content: content });
      formData.append("type", type);
      formData.append("content", content);
      console.log("recording", recordingFinal);
      axiosInstance
        .post("/upload/kalamAudio", formData, { withCredentials: true })
        .then((response) => { console.log("data from multer", response.data); })
        .catch((error) => { console.error("error from Multer", error); });
    }
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
      scrim
      
      

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

  return (
    <>
      <style>{`
        @import url('${buildGoogleFontsUrl()}');

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
        .k-nav {
          background: rgba(10,10,14,0.92);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 0.5px solid var(--border-sm);
          padding: 0 max(1.25rem, env(safe-area-inset-left));
          display: flex; align-items: center; justify-content: space-between;
          height: 52px; position: sticky; top: 0; z-index: 50; width: 100%;
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
        }
        .k-hamburger {
          display: none; flex-direction: column; justify-content: center;
          align-items: center; gap: 4px; width: 32px; height: 32px;
          background: transparent; border: none; cursor: pointer; padding: 4px;
        }
        .k-hamburger span { display: block; width: 18px; height: 1.5px; background: rgba(210,170,90,0.7); border-radius: 2px; }
        .k-mobile-menu {
          position: fixed; top: 52px; left: 0; right: 0; z-index: 49;
          background: rgba(10,10,14,0.97); backdrop-filter: blur(20px);
          border-bottom: 0.5px solid rgba(210,170,90,0.1); padding: 0.5rem 0;
          display: flex; flex-direction: column;
        }
        .k-mobile-menu .k-nl {
          padding: 13px 1.25rem; font-size: 12px; border-radius: 0;
          border-bottom: 0.5px solid var(--border-sm); text-align: left;
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
          top: 52px;
          height: calc(100vh - 52px);
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
          height: calc(100vh - 52px);
          padding: 1.5rem 0 4rem 1.5rem;
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
        @media (max-width: 900px) {
          .k-split {
            grid-template-columns: 1fr;
            height: auto;
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
        }

        @media (max-width: 480px) {
          .k-nav { height: 50px; }
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
        }

        .k-body-wrap {
          padding-bottom: max(0px, env(safe-area-inset-bottom));
        }
      `}</style>

      <div className="k-root">

        {/* ── Navbar ─────────────────────────────── */}
        <nav className="k-nav">
          <div className="k-brand">
            <div className="k-logo">✦</div>
            <span className="k-wordmark">Kalam</span>
          </div>
          <div className="k-nav-links">
            {["Compose","Collection","Explore","Analytics"].map(n => (
              <button key={n} className={`k-nl${activeNav === n ? " active" : ""}`} onClick={() => setActiveNav(n)}>
                {n}
              </button>
            ))}
          </div>
          <div className="k-nav-right">
            <div className="k-avatar">AK</div>
            <button className="k-hamburger" onClick={() => setMobileMenuOpen(o => !o)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div className="k-mobile-menu"
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.14 }}
            >
              {["Compose","Collection","Explore","Analytics"].map(n => (
                <button key={n} className={`k-nl${activeNav === n ? " active" : ""}`}
                  onClick={() => { setActiveNav(n); setMobileMenuOpen(false); }}>
                  {n}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Hero ─────────────────────────────────── */}
        <div className="k-hero">
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
        </div>

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
                  <button  className="k-btn-primary" onClick={updateCustomKalam}>
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