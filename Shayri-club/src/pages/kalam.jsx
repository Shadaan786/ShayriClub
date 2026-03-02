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


import axiosInstance from "../Apis/axiosInstance";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../ContextProvider";

const Kalam = () => {
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
  const[file, setFile] = useState([]);
  const[available, setAvailable] = useState(false);
  const[recordingFinal, setRecordingFinal] = useState([]); 
  const[checking, setChecking] = useState()
  // let audioBlob;
 

  const handleKalam = () => {

    if(!available){


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


    }else{

       const formData = new FormData()

       console.log("type", typeof(checking))

      formData.append('audio', checking, {'originalFileName':"hello.webm","type":type, "content": content});
      formData.append('type', type)
      formData.append('content', content)

      console.log("recording", recordingFinal)
    


      axiosInstance
      .post('/upload/kalamAudio', formData,{

        withCredentials: true
        
      })

      .then((response)=>{

          console.log("data from multer",response.data)
        })
        
        .catch((error)=>{
          console.error("error from Multer", error)
        })

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
        setChecking(pook)
        const audioUrl = URL.createObjectURL(pook);
        console.log("checking type", pook)
        setRecording([audioUrl]);
        setRecordingFinal([audioUrl + ".wav"])
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


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Mono:wght@300;400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .kalam-root {
          min-height: 100vh;
          background-color: #0a0a0c;
          background-image:
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 80, 255, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 80% 80%, rgba(60, 200, 180, 0.05) 0%, transparent 50%);
          font-family: 'DM Mono', monospace;
          color: #e8e2d9;
        }

        .kalam-container {
          max-width: 640px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        /* Header */
        .kalam-header {
          margin-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 32px;
        }

        .kalam-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 12px;
        }

        .kalam-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 8vw, 64px);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #f0ebe3;
        }

        .kalam-title span {
          color: rgba(120, 200, 180, 0.9);
        }

        .kalam-subtitle {
          margin-top: 12px;
          font-size: 11px;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.25);
        }

        /* Form Section */
        .kalam-section {
          margin-bottom: 40px;
        }

        .kalam-label {
          display: block;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 10px;
        }

        .kalam-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          padding: 14px 18px;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          color: #e8e2d9;
          transition: border-color 0.2s, background 0.2s;
          outline: none;
        }

        .kalam-input::placeholder {
          color: rgba(255,255,255,0.15);
        }

        .kalam-input:focus {
          border-color: rgba(120, 200, 180, 0.4);
          background: rgba(255,255,255,0.05);
        }

        /* Buttons */
        .kalam-btn-primary {
          width: 100%;
          padding: 16px;
          background: rgba(120, 200, 180, 0.12);
          border: 1px solid rgba(120, 200, 180, 0.3);
          border-radius: 4px;
          color: rgba(120, 200, 180, 0.9);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
          margin-bottom: 16px;
        }

        .kalam-btn-primary:hover {
          background: rgba(120, 200, 180, 0.2);
          border-color: rgba(120, 200, 180, 0.6);
          color: #7efbda;
        }

        .kalam-btn-secondary {
          display: inline-block;
          padding: 12px 24px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          color: rgba(255,255,255,0.4);
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }

        .kalam-btn-secondary:hover {
          border-color: rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.7);
        }

        /* Record button */
        .kalam-record-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 14px 18px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          color: rgba(255,255,255,0.5);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s;
        }

        .kalam-record-btn:hover {
          border-color: rgba(255, 100, 100, 0.3);
          color: rgba(255,180,180,0.8);
          background: rgba(255, 80, 80, 0.05);
        }

        .kalam-record-btn.recording {
          border-color: rgba(255, 80, 80, 0.5);
          color: rgba(255, 120, 120, 0.9);
          background: rgba(255, 80, 80, 0.08);
        }

        .rec-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 100, 100, 0.5);
          flex-shrink: 0;
        }

        .rec-dot.active {
          background: rgb(255, 80, 80);
          animation: pulse 1s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        /* Audio player */
        .kalam-audio-wrap {
          margin-top: 12px;
          padding: 14px 18px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .kalam-audio-wrap audio {
          flex: 1;
          height: 28px;
          filter: invert(0.85) hue-rotate(160deg);
        }

        .kalam-download-link {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(120, 200, 180, 0.6);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
        }

        .kalam-download-link:hover {
          color: rgba(120, 200, 180, 1);
        }

        /* Divider */
        .kalam-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.05);
          margin: 40px 0;
        }

        /* Message */
        .kalam-message {
          font-size: 12px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.3);
          text-align: center;
          margin-bottom: 20px;
          min-height: 16px;
        }

        /* Footer row */
        .kalam-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 12px;
        }

        /* Popup */
        .kalam-popup {
          position: fixed;
          top: 32px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(12, 14, 16, 0.95);
          border: 1px solid rgba(120, 200, 180, 0.3);
          backdrop-filter: blur(20px);
          color: rgba(120, 200, 180, 0.9);
          padding: 14px 28px;
          border-radius: 4px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          z-index: 1000;
          white-space: nowrap;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(120,200,180,0.05);
        }
      `}</style>

      <div className="kalam-root">
        <div className="kalam-container">

          {/* Header */}
          <header className="kalam-header">
            <p className="kalam-eyebrow">Your Writing Space</p>
            <h1 className="kalam-title">
              Kal<span>am</span>
            </h1>
            <p className="kalam-subtitle">Capture thoughts. Record moments.</p>
          </header>

          {/* Voice Recording */}
          <div className="kalam-section">
            <label className="kalam-label">Voice Note</label>
            <button
              className={`kalam-record-btn ${streamRecording ? "recording" : ""}`}
              onClick={handleRecording}
            >
              <span className={`rec-dot ${streamRecording ? "active" : ""}`} />
              {streamRecording ? "Recording — tap to stop" : "Tap to record"}
            </button>

            {recording.map((recUrl, i) => (
              <div className="kalam-audio-wrap" key={i}>
                <audio controls src={recUrl} />
                <a className="kalam-download-link" href={recUrl} download={`recording-${i}.wav`}>
                  ↓ Save
                </a>
              </div>
            ))}
          </div>

          <hr className="kalam-divider" />

          {/* Form */}
          <div className="kalam-section">
            <label className="kalam-label">Type</label>
            <input
              className="kalam-input"
              type="text"
              placeholder="e.g. poem, thought, note..."
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>

          <div className="kalam-section">
            <label className="kalam-label">Content</label>
            <input
              className="kalam-input"
              type="text"
              placeholder="Write something..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {message && <p className="kalam-message">{message}</p>}

          <button className="kalam-btn-primary" onClick={handleKalam}>
            Submit Entry
          </button>

          <div className="kalam-footer">
            <Link to="/UrKalam" style={{ textDecoration: "none" }}>
              <button className="kalam-btn-secondary">View your kalams →</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="kalam-popup"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            ✦ Entry submitted
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Kalam;