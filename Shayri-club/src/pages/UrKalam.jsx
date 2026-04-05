// import { useContext } from "react";
// // import { MyContext } from "../ContextProvider";
// import axiosInstance from "../Apis/axiosInstance";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";




// const UrKalam = ()=>{

//   const[kalam, setKalam] = useState({});

//     // const {content, type} = useContext(MyContext);

//      // Axios fetch

// useEffect(()=>{
  

     

//     axiosInstance
//       .get("/api/UrKalam")
//       .then((res) => {
//         setKalam(res.data);


//         console.log(res.data)
//         // setLoading(false);
//         // setTimeout(() => setShowPoetry(true), 1000);
//       })
//       // .catch((err) => {
//       //   console.error(err);
//       //   setLoading(false);
//       // });

     
//      }, [])

//     return(
//         <>

//         <div>
//   {Object.values(kalam).map((kalam, _id) => (
//     <p key={kalam._id }>{kalam.type}:{kalam.content}</p>
//   ))}
// </div>

//        {/* <h1>{kalam.content}</h1> */}

        

//           {/* <h1>{JSON.stringify(kalam.content)}</h1> */}
        
//         {/* <h1>hello {type}</h1><br/><br/><br/><br/><br/><br/>
//         <h1>hello {content} </h1>
//         <button onClick={() =>{setContent('lakka')}}>click me</button> */}
//         {/* <button onClick={call}>hello</button> */}


//         <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


//         <Link to = '/Profile'>
//         <button>View your profile</button>
//         </Link>


        
//         </>

//     )
// }

// export default UrKalam;






//-------------------------------------------------------------------------------->





import { useContext } from "react";
import axiosInstance from "../Apis/axiosInstance";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const typeColors = {
  poem:    { bg: "rgba(120,200,180,0.07)", border: "rgba(120,200,180,0.25)", text: "rgba(120,200,180,0.9)" },
  thought: { bg: "rgba(180,140,255,0.07)", border: "rgba(180,140,255,0.25)", text: "rgba(180,140,255,0.9)" },
  note:    { bg: "rgba(255,200,100,0.07)", border: "rgba(255,200,100,0.25)", text: "rgba(255,200,100,0.9)" },
};

const getTypeStyle = (type = "") => {
  return typeColors[type.toLowerCase()] || {
    bg: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.12)",
    text: "rgba(255,255,255,0.4)",
  };
};

const UrKalam = () => {
  const [kalam, setKalam] = useState({});
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const Navigate = useNavigate();
  
  useEffect(()=>{

    axiosInstance
    .get('/api/userId',{

      withCredentials: true
    })
    .then((Response)=>{

      setUserId(Response.data._id)

    })
  })

  useEffect(() => {
    axiosInstance
      .get("/api/UrKalam",
        {

          withCredentials: true

      })
      .then((res) => {
        setKalam(res.data);
        console.log(res.data);






      })
      .finally(() => setLoading(false));
  }, []);

  const entries = Object.values(kalam);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Mono:wght@300;400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .ur-root {
          min-height: 100vh;
          background-color: #0a0a0c;
          background-image:
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 80, 255, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 80% 80%, rgba(60, 200, 180, 0.05) 0%, transparent 50%);
          font-family: 'DM Mono', monospace;
          color: #e8e2d9;
        }

        .ur-container {
          max-width: 680px;
          margin: 0 auto;
          padding: 60px 24px 100px;
        }

        /* Header */
        .ur-header {
          margin-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 32px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ur-header-left {}

        .ur-eyebrow {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin-bottom: 10px;
        }

        .ur-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 7vw, 56px);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #f0ebe3;
        }

        .ur-title span { color: rgba(120, 200, 180, 0.9); }

        .ur-count {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-top: 10px;
        }

        /* Nav link */
        .ur-nav-link {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 10px 18px;
          border-radius: 3px;
          transition: border-color 0.2s, color 0.2s;
          white-space: nowrap;
        }

        .ur-nav-link:hover {
          border-color: rgba(255,255,255,0.2);
          color: rgba(255,255,255,0.6);
        }

        /* Loading state */
        .ur-loading {
          text-align: center;
          padding: 80px 0;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.15);
        }

        .ur-loading-dots span {
          display: inline-block;
          animation: blink 1.2s infinite;
        }
        .ur-loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .ur-loading-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes blink {
          0%, 80%, 100% { opacity: 0.15; }
          40% { opacity: 1; }
        }

        /* Empty state */
        .ur-empty {
          text-align: center;
          padding: 80px 0;
          border: 1px dashed rgba(255,255,255,0.07);
          border-radius: 6px;
        }

        .ur-empty-glyph {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          color: rgba(255,255,255,0.06);
          margin-bottom: 16px;
        }

        .ur-empty-text {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }

        /* Entry list */
        .ur-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ur-entry {
          display: flex;
          align-items: baseline;
          gap: 20px;
          padding: 20px 22px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          background: rgba(255,255,255,0.02);
          transition: border-color 0.2s, background 0.2s;
          animation: fadeUp 0.4s ease both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ur-entry:hover {
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.035);
        }

        .ur-entry-index {
          font-size: 10px;
          color: rgba(255,255,255,0.15);
          letter-spacing: 0.05em;
          min-width: 24px;
          flex-shrink: 0;
          user-select: none;
        }

        .ur-entry-body {
          flex: 1;
          min-width: 0;
        }

        .ur-entry-content {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 400;
          color: rgba(240, 235, 227, 0.85);
          line-height: 1.5;
          word-break: break-word;
        }

        .ur-entry-type-pill {
          display: inline-block;
          margin-top: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 2px;
          border: 1px solid;
        }

        /* Footer */
        .ur-footer {
          margin-top: 56px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: flex-end;
        }

        .ur-profile-link {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(120, 200, 180, 0.6);
          text-decoration: none;
          border: 1px solid rgba(120, 200, 180, 0.2);
          padding: 12px 22px;
          border-radius: 3px;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }

        .ur-profile-link:hover {
          border-color: rgba(120, 200, 180, 0.5);
          color: rgba(120, 200, 180, 1);
          background: rgba(120, 200, 180, 0.06);
        }
      `}</style>

      <div className="ur-root">
        <div className="ur-container">

          {/* Header */}
          <header className="ur-header">
            <div className="ur-header-left">
              <p className="ur-eyebrow">Collection</p>
              <h1 className="ur-title">Your <span>Kalams</span></h1>
              {!loading && (
                <p className="ur-count">
                  {entries.length} {entries.length === 1 ? "entry" : "entries"}
                </p>
              )}
            </div>
            <Link to="/kalam" className="ur-nav-link">
              + New Entry
            </Link>
          </header>

          {/* Content */}
          {loading ? (
            <div className="ur-loading">
              <div className="ur-loading-dots">
                <span>▪</span><span>▪</span><span>▪</span>
              </div>
            </div>
          ) : entries.length === 0 ? (
            <div className="ur-empty">
              <div className="ur-empty-glyph">✦</div>
              <p className="ur-empty-text">No kalams yet — start writing</p>
            </div>
          ) : (
            <div className="ur-list">
              {entries.map((item, idx) => {
                const style = getTypeStyle(item.type);
                return (
                  <div
                    className="ur-entry"
                    key={item._id || idx}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <span className="ur-entry-index">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="ur-entry-body">
                      <p className="ur-entry-content">{item.content}</p>
                      {item.type && (
                        <span
                          className="ur-entry-type-pill"
                          style={{
                            background: style.bg,
                            borderColor: style.border,
                            color: style.text,
                          }}
                        >
                          {item.type}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer */}
          <div className="ur-footer">
            <Link to={`/Profile?userId=${userId}`} className="ur-profile-link">
              View Profile →
            </Link>
            
          </div> 

        </div>
      </div>
    </>
  );
};

export default UrKalam;