// import axios from 'axios';
// import {useState} from 'react';
// import { useNavigate } from "react-router-dom";
// import axiosInstance from '../Apis/axiosInstance';
// import MagicBento from './components/LoginCard';


// const Login=()=>{

//     const[logiin, setLogiin] = useState([]);
//     const navigate = useNavigate();
//     const[id, setId] = useState("");
//     const[password, setPassword] = useState("")
//     const[notice, setNotice] = useState("");
//     const[notice2, setNotice2] = useState("");


//   const Logging=()=>{
//     axiosInstance

//     .post("/login", {

//         email: `${id}`,
//         password: `${password}`
//     },
//         {
//         withCredentials: true
//         }

//       )



//     .then((response)=>{
//       setLogiin(response.data)

//       const data = response.data;
//       if(data.success){
//         setNotice2(`Glad to see you onboard ${id}`)
//         navigate(data.redirectUrl);

//       }else{
//         setNotice(response.data.message);
//       }
//     })



//   }
  



//     return(

//         <>

//         <br/><br/><br/><br/><br/><br/><br/><br/><br/>

//         <h1 className='text-4xl text-green-700'>{notice2}</h1>

//         <br/><br/>
//         <input
//         type='text'
//         placeholder='Id'
//         onChange = {(e)=> setId(e.target.value)}

//         />
// <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        
//         <input
//         type='text'
//         placeholder='Password'
//         onChange = {(e)=> setPassword(e.target.value)}

//         />
//         <br/><br/><br/><br/>

//         <h1 className='text-red-600'>{notice}</h1>

//          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
         
//           <button onClick={Logging}>Login</button>


    

// {/* <MagicBento 
//   textAutoHide={true}
//   enableStars
//   enableSpotlight
//   enableBorderGlow={true}
//   enableTilt={false}
//   enableMagnetism={false}
//   clickEffect
//   spotlightRadius={290}
//   particleCount={12}
//   glowColor="132, 0, 255"
//   disableAnimations={false}
// /> */}


//         </>
//     )
// }

// export default Login

//---------------------------------------------------------------------->


import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axiosInstance from '../Apis/axiosInstance';

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [notice2, setNotice2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focused, setFocused] = useState(null);
  const navigate = useNavigate();

  const Logging = async () => {
    if (!id || !password) {
      setNotice("Please fill in all fields.");
      return;
    }
    setIsLoading(true);
    setNotice("");
    try {
      const response = await axiosInstance.post(
        "/login",
        { email: id, password },
        { withCredentials: true }
      );
      const data = response.data;
      if (data.success) {
        setNotice2(`Welcome back, ${id}`);
        setTimeout(() => navigate(data.redirectUrl), 800);
      } else {
        setNotice(data.message || "Invalid credentials.");
      }
    } catch {
      setNotice("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") Logging();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          min-height: 100vh;
          background: #080b10;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Animated background grid */
        .login-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,255,180,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,180,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          animation: gridShift 20s linear infinite;
        }

        @keyframes gridShift {
          0% { transform: translateY(0); }
          100% { transform: translateY(48px); }
        }

        /* Radial glow */
        .login-root::after {
          content: '';
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0,255,180,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .login-card {
          position: relative;
          z-index: 1;
          width: 420px;
          padding: 48px 44px;
          background: rgba(12, 16, 22, 0.85);
          border: 1px solid rgba(0, 255, 180, 0.12);
          border-radius: 4px;
          backdrop-filter: blur(20px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.03),
            0 32px 64px rgba(0,0,0,0.6),
            0 0 80px rgba(0,255,180,0.04);
          animation: cardIn 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }

        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Top accent bar */
        .card-accent {
          position: absolute;
          top: 0; left: 44px; right: 44px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ffb4, transparent);
        }

        .login-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: #00ffb4;
          text-transform: uppercase;
          margin-bottom: 10px;
          opacity: 0.7;
        }

        .login-title {
          font-size: 32px;
          font-weight: 800;
          color: #f0f4f8;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .login-subtitle {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.25);
          margin-bottom: 40px;
          letter-spacing: 0.02em;
        }

        .field-group {
          margin-bottom: 20px;
        }

        .field-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
          transition: color 0.2s;
        }

        .field-group:focus-within .field-label {
          color: #00ffb4;
        }

        .field-wrapper {
          position: relative;
        }

        .field-input {
          width: 100%;
          padding: 13px 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 3px;
          color: #e8edf2;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          outline: none;
          transition: all 0.2s ease;
          caret-color: #00ffb4;
        }

        .field-input::placeholder {
          color: rgba(255,255,255,0.15);
        }

        .field-input:focus {
          border-color: rgba(0, 255, 180, 0.4);
          background: rgba(0, 255, 180, 0.03);
          box-shadow: 0 0 0 3px rgba(0,255,180,0.06), inset 0 1px 2px rgba(0,0,0,0.3);
        }

        .field-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 1px;
          width: 0%;
          background: #00ffb4;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
          border-radius: 0 0 3px 3px;
        }

        .field-input:focus ~ .field-line {
          width: 100%;
        }

        .login-btn {
          width: 100%;
          margin-top: 32px;
          padding: 14px;
          background: #00ffb4;
          color: #060a0e;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .login-btn:hover:not(:disabled) {
          background: #1affc4;
          box-shadow: 0 0 24px rgba(0,255,180,0.3);
          transform: translateY(-1px);
        }

        .login-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .login-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Ripple / shimmer on button */
        .login-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transition: left 0.5s ease;
        }

        .login-btn:hover::after {
          left: 150%;
        }

        /* Spinner */
        .btn-spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(0,0,0,0.3);
          border-top-color: #060a0e;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
          margin-right: 8px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .notice-error {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          padding: 10px 14px;
          background: rgba(255, 60, 80, 0.07);
          border: 1px solid rgba(255, 60, 80, 0.2);
          border-radius: 3px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: #ff6b7a;
          animation: fadeIn 0.3s ease;
        }

        .notice-error::before {
          content: '⚠';
          font-size: 12px;
          flex-shrink: 0;
        }

        .notice-success {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
          padding: 10px 14px;
          background: rgba(0, 255, 180, 0.06);
          border: 1px solid rgba(0, 255, 180, 0.2);
          border-radius: 3px;
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: #00ffb4;
          animation: fadeIn 0.3s ease;
        }

        .notice-success::before {
          content: '✓';
          font-size: 12px;
          flex-shrink: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 28px 0 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.05);
        }

        .divider-text {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.18);
          letter-spacing: 0.1em;
        }

        .footer-text {
          text-align: center;
          margin-top: 20px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.2);
        }

        .footer-text a {
          color: rgba(0,255,180,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-text a:hover {
          color: #00ffb4;
        }
      `}</style>

      <div className="login-root">
        <div className="login-card">
          <div className="card-accent" />

          <p className="login-label">Secure Access</p>
          <h1 className="login-title">Sign In</h1>
          <p className="login-subtitle">Enter your credentials to continue</p>

          {notice2 && <div className="notice-success">{notice2}</div>}

          <div className="field-group">
            <label className="field-label" htmlFor="email">Email / ID</label>
            <div className="field-wrapper">
              <input
                id="email"
                className="field-input"
                type="text"
                placeholder="you@example.com"
                autoComplete="username"
                onChange={(e) => setId(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className="field-line" />
            </div>
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="password">Password</label>
            <div className="field-wrapper">
              <input
                id="password"
                className="field-input"
                type="password"
                placeholder="••••••••••••"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className="field-line" />
            </div>
          </div>

          <button
            className="login-btn"
            onClick={Logging}
            disabled={isLoading}
          >
            {isLoading && <span className="btn-spinner" />}
            {isLoading ? "Authenticating..." : "Sign In"}
          </button>

          {notice && <div className="notice-error">{notice}</div>}

          <div className="divider">
            <div className="divider-line" />
            <span className="divider-text">SYSTEM</span>
            <div className="divider-line" />
          </div>

          <p className="footer-text">
            Don't have an account? <a href="/Signup">Request access →</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;





