// import { useState, useEffect, useRef } from "react";


// const GlobalChat= ()=>{


//     const[content, setContent] = useState("");
//     const[cont, setCont] = useState([]);
//     const[mess, setMess] = useState([]);
//     // const[content2, setContent2] = useState("");
//     // const[ws, setWs] = useState(new WebSocket(null));
//     const ws = useRef(null);
//     const content2 = useRef(null);
//     // const ind = useRef(-1)
//     const[mes, setMes] = useState([]);


//     // console.log('checking')
//     // let i = 0;


//     useEffect(()=>{


//         //   setWs(new WebSocket('ws://localhost:8080?username=anon'));

//         ws.current = new WebSocket('ws://localhost:8080?username=anon')
          

//         ws.current.onerror = ()=>{
//             console.error("Error while connecting to the websocket connection")
//         }

//         ws.current.onopen = ()=>{
//             console.log("connection opened")


            
        
//         }

//             ws.current.onmessage = message =>{
//                 console.log(message.data)
//                 // setCont(message.data)

//                 setCont(prev=>[...prev, message.data])
//                 setMes(prev=>[...prev, {

//                     sender: "other",
//                     data: message.data
//                 }])

//                 console.log(mes)
            
//             }

//             // ws.send(JSON.stringify({
//             //     "type": "global_chat",
//             //     "payload":{
//             //         "content": content
//             //     }
//             // }))
//         console.log(ws.current.readyState)
 
//     }, [])

// //     useEffect(()=>{

// //                if(ws.current.readyState == 1){
// //    ws.current.send(JSON.stringify({
// //                 "type": "global_chat",
// //                 "payload":{
// //                     "content": content2
// //                 }
// //             }))

// //         }

// //     }, [content2])

//     // const handle=()=>{

       
//     // }

//       function sender(){
//         ws.current.send(JSON.stringify({
//             "type": "global_chat",
//             "payload":{
                
//              "content": content2.current,
//             }
            

        

//         }))
//         console.log(mes)
//     }

    

//     return(
//         <>

        
        
//         {/* <h1 className = "right-0">{content}</h1> */}
//         {/* <h1>{cont}</h1> */}
//         <div className ="fixed bottom-0 left-0 w-full bg-blue-800 text-white p-4">
//         <input 
//         className ="fixed bottom-0 left-0 w-full bg-blue-800 text-white p-4"
//         type="text"
//         placeholder="send message"
//         onChange={(e)=> setContent(e.target.value)}
        
        
//         />

//         {/* {console.log(content)} */}

//         <button 
//          className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded" 
//          onClick ={()=>{

//             // handle();
//             content2.current = content
//             sender();
//             // setContent2(content);

            
//             setMess(prev=>[...prev, content]);
//             setMes(prev=>[...prev, {
//                 sender: "me",
//                 data: content
//             }])
//             console.log(mes)
//             // ind.current = ind.current + 1;
           
//             {
//                 // console.log(mess);
//             }
            
//          }}> send</button>


//          <br/>
        
//         </div>

//         {/* <h1>{mess}</h1> */}
//         <div className="p-4" >

//            {/* {
//             mess.map((mess, i)=>(

                
//                 <p key = {i} className="text-right text-size-xl bottom-10 bg-blue-700 p-4"> {mess}</p>
//             ))
            
//             }
            

//             {mess[ind.current]} */}


//         </div>


        
//              <div className="p-4" >

//            {
//             // cont.map((cont, i)=>(

                
//             //     <p key = {i} className="text-right text-size-xl bottom-10 bg-green-700 p-4"> {cont}</p>
//             // ))
            


//             mes.map((mes, i)=>(

//                 <p key = {i} className=  {(mes.sender === "me")?"text-right bg-blue-700":"text-left bg-green-700"}>{mes.data}</p>
//             ))
//             }
            

//             {/* {mess[ind.current]} */}

            


//         </div>
        
//         </>
//     )
// }


// export default GlobalChat





//------------------------------------------------------------------------------------------------------------------------>




import axiosInstance from "@/Apis/axiosInstance";
import { useState, useEffect, useRef } from "react";

const GlobalChat = () => {
  const [content, setContent] = useState("");
  const [cont, setCont] = useState([]);
  const [mess, setMess] = useState([]);
  // const[content2, setContent2] = useState("");
  // const[ws, setWs] = useState(new WebSocket(null));
  const ws = useRef(null);
  const content2 = useRef(null);
  // const ind = useRef(-1)
  const [mes, setMes] = useState([]);
  const userId = useRef(null);
  const name = useRef(null);
  const profilePic = useRef(null);
  const otherPfPic = useRef(null);

  // console.log('checking')
  // let i = 0;

  useEffect(() => {
    //   setWs(new WebSocket('ws://localhost:8080?username=anon'));

    axiosInstance
    .get('/globalchat/userInfo', {withCredentials: true})

    .then((Response)=>{

      userId.current = Response.data._id;
      profilePic.current = Response.data.profilePic;
      name.current = Response.data.name;


    

    ws.current = new WebSocket(`ws://localhost:8080?username=anon&userId=${userId.current}`);

    ws.current.onerror = () => {
      console.error("Error while connecting to the websocket connection");
    };

    ws.current.onopen = () => {
      console.log("connection opened");
    };

    ws.current.onmessage = (message) => {

      console.log("Checking_message", message)
      console.log(message.data);
      const message2 = JSON.parse(message.data)
      // setCont(message.data)

      setCont((prev) => [...prev, message.data]);
      setMes((prev) => [
        ...prev,
        {
          sender: "other",
          data: message2.content,
          othersPfPic: message2.profilePic,
          from: message2.name,
          userId: message2.userId
        },
      ]);

      console.log(mes);
    };

    // ws.send(JSON.stringify({
    //     "type": "global_chat",
    //     "payload":{
    //         "content": content
    //     }
    // }))
    console.log(ws.current.readyState);
  })
  }, []);

  //     useEffect(()=>{

  //                if(ws.current.readyState == 1){
  //    ws.current.send(JSON.stringify({
  //                 "type": "global_chat",
  //                 "payload":{
  //                     "content": content2
  //                 }
  //             }))

  //         }

  //     }, [content2])

  // const handle=()=>{

  // }

  function sender() {
    ws.current.send(
      JSON.stringify({
        type: "global_chat",
        payload: {
          content: content2.current,
          name: name.current,
          profilePic: profilePic.current,
          userId: userId.current
        },
      })
    );
    console.log(mes);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background: #0a0a0f;
        }

        .gc-root {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: #0a0a0f;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* Subtle background texture */
        .gc-root::before {
          content: '';
          position: fixed;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 20% 10%, rgba(99,102,241,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 90%, rgba(16,185,129,0.06) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        /* Header */
        .gc-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          height: 60px;
          display: flex;
          align-items: center;
          padding: 0 24px;
          background: rgba(14, 14, 22, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          gap: 12px;
        }

        .gc-header-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .gc-header-title {
          font-size: 15px;
          font-weight: 600;
          color: #f0f0f5;
          letter-spacing: 0.01em;
        }

        .gc-header-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          font-weight: 400;
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
        }

        /* Messages area */
        .gc-messages {
          flex: 1;
          overflow-y: auto;
          padding: 80px 20px 100px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
          width: 100%;
        }

        .gc-messages::-webkit-scrollbar { width: 4px; }
        .gc-messages::-webkit-scrollbar-track { background: transparent; }
        .gc-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }

        /* Empty state */
        .gc-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: auto;
          opacity: 0.35;
          user-select: none;
        }

        .gc-empty-icon {
          width: 48px; height: 48px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .gc-empty p {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          font-weight: 400;
        }

        /* Message bubble */
        .gc-bubble-row {
          display: flex;
          animation: fadeSlideIn 0.25s ease forwards;
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .gc-bubble-row.me { justify-content: flex-end; }
        .gc-bubble-row.other { justify-content: flex-start; }

        .gc-bubble {
          max-width: 68%;
          padding: 10px 15px;
          border-radius: 18px;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 400;
          word-break: break-word;
        }

        .gc-bubble.me {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: #ffffff;
          border-bottom-right-radius: 5px;
          box-shadow: 0 4px 20px rgba(99,102,241,0.3);
        }

        .gc-bubble.other {
          background: rgba(255,255,255,0.07);
          color: #e8e8f0;
          border: 1px solid rgba(255,255,255,0.08);
          border-bottom-left-radius: 5px;
          backdrop-filter: blur(8px);
        }

        /* Avatar for "other" */
        .gc-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #059669);
          display: flex;
          align-items: center
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          color: white;
          flex-shrink: 0;
          margin-right: 8px;
          align-self: flex-end;
        }

        /* Input bar */
        .gc-inputbar {
          position: fixed;
          bottom: 0; left: 0; right: 0;
          z-index: 50;
          padding: 12px 20px 16px;
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(24px);
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .gc-inputbar-inner {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 6px 6px 6px 16px;
          transition: border-color 0.2s;
        }

        .gc-inputbar-inner:focus-within {
          border-color: rgba(99,102,241,0.5);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }

        .gc-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #e8e8f0;
          caret-color: #6366f1;
        }

        .gc-input::placeholder {
          color: rgba(255,255,255,0.25);
        }

        .gc-send-btn {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
          box-shadow: 0 2px 12px rgba(99,102,241,0.35);
        }

        .gc-send-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 18px rgba(99,102,241,0.5);
        }

        .gc-send-btn:active {
          transform: scale(0.97);
        }

        .gc-send-btn svg {
          width: 16px; height: 16px;
          fill: white;
        }
      `}</style>

      <div className="gc-root">

        {/* Header */}
        <div className="gc-header">
          <div className="gc-header-dot" />
          <span className="gc-header-title">Global Chat</span>
          <span className="gc-header-sub">ws://localhost:8080</span>
        </div>

        {/* Messages */}
        {/* <h1 className = "right-0">{content}</h1> */}
        {/* <h1>{cont}</h1> */}

        <div className="gc-messages">
          {mes.length === 0 && (
            <div className="gc-empty">
              <div className="gc-empty-icon">💬</div>
              <p>No messages yet. Say something!</p>
            </div>
          )}

          {/* {
            mess.map((mess, i)=>(
                <p key = {i} className="text-right text-size-xl bottom-10 bg-blue-700 p-4"> {mess}</p>
            ))
            }
            {mess[ind.current]} */}

          {/* {
            cont.map((cont, i)=>(
                <p key = {i} className="text-right text-size-xl bottom-10 bg-green-700 p-4"> {cont}</p>
            ))
            } */}

          {mes.map((mes, i) => (
            <div
              key={i}
              className={`gc-bubble-row ${mes.sender === "me" ? "me" : "other"}`}
            >
              {mes.sender === "other" && (
                // Avatar of other users
                <div className="gc-avatar">

                  <img src={mes.othersPfPic} alt="other users avatar" className="rounded-lg"/>


                </div>
              )}
              <div className={`gc-bubble ${mes.sender === "me" ? "me" : "other"}`}>
                {mes.data}
              </div>
            </div>
          ))}

          {/* {mess[ind.current]} */}
        </div>

        {/* Input bar */}
        <div className="gc-inputbar">
          <div className="gc-inputbar-inner">
            <input
              className="gc-input"
              type="text"
              placeholder="Type a message…"
              onChange={(e) => setContent(e.target.value)}
            />

            {/* {console.log(content)} */}

            <button
              className="gc-send-btn"
              onClick={() => {
                // handle();
                content2.current = content;
                sender();
                // setContent2(content);

                setMess((prev) => [...prev, content]);
                setMes((prev) => [
                  ...prev,
                  {
                    sender: "me",
                    data: content,
                  },
                ]);
                console.log(mes);
                // ind.current = ind.current + 1;
                {
                  // console.log(mess);
                }
              }}
            >
              {/* Send arrow icon */}
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          <br />
        </div>

        {/* <h1>{mess}</h1> */}
        <div className="p-4"></div>
      </div>
    </>
  );
};

export default GlobalChat;