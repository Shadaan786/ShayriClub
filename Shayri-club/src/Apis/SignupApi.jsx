// import {useState, useEffect} from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "./axiosInstance";
// // import { createContext } from "react";
// // import { useContext } from "react";



// // export const MyContext = createContext();
// // export const ContextProvider = ({children})=>{
    
// //     const [name, setName] = useState("");

// //     return(
// //         <MyContext.Provider value = {name} >
// //             { children }
// //         </MyContext.Provider>
// //     )


// // }

// const SignupApi = ()=>{

//     const navigate = useNavigate();
//     const[signup, setSignup] = useState([]);
//     const[loading, setLoading] = useState(true);
//     const[error, setError] = useState(null);

// const handleUserSignup=()=>{
//         axiosInstance
//         .post("/signup", {

//             name: `${name}`,
//             email: `${userID}`,
//             password: `${password}`
//         })
//         .then((response)=>{
//             setSignup(response.data);
//             setLoading(false);

//                  const data = response.data
//     if(data.success){
//             navigate(data.redirectUrl);
//     }else{
//         alert(data.message)
//     }

//         })
//         .catch((err)=>{
//             setError(err.messsage);
//             setLoading(false);
//         });

   
//     }

//     const [name, setName] = useState("");
//     const [userID, setUserID] = useState("");
//     const [password, setPassword] = useState("");

    
//     return(


// <>
// <br/><br/><br/>
// <input 
// type= "text"
// placeholder="name"
// value = {name}
// onChange = {(e)=> setName(e.target.value)}
// />
// <br/><br/><br/>
// <input 
// type= "text"
// placeholder="userID"
// value = {userID}
// onChange = {(e)=> setUserID(e.target.value)}
// />
// <br/><br/><br/>
// <input 
// type= "text"
// placeholder="password"
// value = {password}
// onChange = {(e)=> setPassword(e.target.value)}
// />
// <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
// <h1 className="text-4xl bg-color-red">
// <button  onClick={handleUserSignup}>Signup</button>
// </h1>



// </>

//     )
// }

// export default SignupApi;


//------------------------------------------------------------------------------->



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";

const SignupApi = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const handleUserSignup = async () => {
    setError(null);
    if (!name || !userID || !password) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/signup", {
        name,
        email: userID,
        password,
      });
      const data = response.data;
      if (data.success) {
        setSuccess(`Account created! Welcome, ${name}.`);
        setTimeout(() => navigate(data.redirectUrl), 900);
      } else {
        setError(data.message || "Signup failed. Try again.");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleUserSignup();
  };

  // Password strength
  const getStrength = (pw) => {
    if (!pw) return { level: 0, label: "", color: "transparent" };
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    const map = [
      { level: 1, label: "Weak",   color: "#ff4d6a" },
      { level: 2, label: "Fair",   color: "#ffaa00" },
      { level: 3, label: "Good",   color: "#00cfff" },
      { level: 4, label: "Strong", color: "#00ffb4" },
    ];
    return map[score - 1] || { level: 0, label: "", color: "transparent" };
  };

  const strength = getStrength(password);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .signup-root {
          min-height: 100vh;
          background: #080b10;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 40px 16px;
        }

        .signup-root::before {
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
          0%   { transform: translateY(0); }
          100% { transform: translateY(48px); }
        }

        .signup-root::after {
          content: '';
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(0,255,180,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .signup-card {
          position: relative;
          z-index: 1;
          width: 440px;
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

        .card-accent {
          position: absolute;
          top: 0; left: 44px; right: 44px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00ffb4, transparent);
        }

        .signup-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: #00ffb4;
          text-transform: uppercase;
          margin-bottom: 10px;
          opacity: 0.7;
        }

        .signup-title {
          font-size: 32px;
          font-weight: 800;
          color: #f0f4f8;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 6px;
        }

        .signup-subtitle {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.25);
          margin-bottom: 36px;
          letter-spacing: 0.02em;
        }

        /* Two-column row */
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .field-group {
          margin-bottom: 18px;
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

        /* Password strength meter */
        .strength-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
        }

        .strength-bars {
          display: flex;
          gap: 4px;
          flex: 1;
        }

        .strength-bar {
          flex: 1;
          height: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.07);
          transition: background 0.3s ease;
        }

        .strength-label {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          min-width: 42px;
          text-align: right;
          transition: color 0.3s;
        }

        /* Confirm match indicator */
        .match-indicator {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          margin-top: 7px;
          letter-spacing: 0.08em;
          transition: color 0.2s;
        }

        .signup-btn {
          width: 100%;
          margin-top: 28px;
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

        .signup-btn:hover:not(:disabled) {
          background: #1affc4;
          box-shadow: 0 0 24px rgba(0,255,180,0.3);
          transform: translateY(-1px);
        }

        .signup-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .signup-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .signup-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transition: left 0.5s ease;
        }

        .signup-btn:hover::after {
          left: 150%;
        }

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
          margin-top: 16px;
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

      <div className="signup-root">
        <div className="signup-card">
          <div className="card-accent" />

          <p className="signup-label">New Account</p>
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Fill in your details to get started</p>

          {success && <div className="notice-success">{success}</div>}

          {/* Name + Email row */}
          <div className="field-row">
            <div className="field-group">
              <label className="field-label" htmlFor="name">Full Name</label>
              <div className="field-wrapper">
                <input
                  id="name"
                  className="field-input"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="field-line" />
              </div>
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="email">Email</label>
              <div className="field-wrapper">
                <input
                  id="email"
                  className="field-input"
                  type="text"
                  placeholder="you@example.com"
                  value={userID}
                  autoComplete="email"
                  onChange={(e) => setUserID(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="field-line" />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="field-group">
            <label className="field-label" htmlFor="password">Password</label>
            <div className="field-wrapper">
              <input
                id="password"
                className="field-input"
                type="password"
                placeholder="Min. 8 characters"
                value={password}
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className="field-line" />
            </div>
            {password && (
              <div className="strength-row">
                <div className="strength-bars">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="strength-bar"
                      style={{
                        background: i <= strength.level ? strength.color : undefined,
                      }}
                    />
                  ))}
                </div>
                <span className="strength-label" style={{ color: strength.color }}>
                  {strength.label}
                </span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="field-group">
            <label className="field-label" htmlFor="confirm">Confirm Password</label>
            <div className="field-wrapper">
              <input
                id="confirm"
                className="field-input"
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                autoComplete="new-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className="field-line" />
            </div>
            {confirmPassword && (
              <div
                className="match-indicator"
                style={{
                  color: confirmPassword === password ? "#00ffb4" : "#ff6b7a",
                }}
              >
                {confirmPassword === password ? "✓ Passwords match" : "✗ Passwords do not match"}
              </div>
            )}
          </div>

          <button
            className="signup-btn"
            onClick={handleUserSignup}
            disabled={isLoading}
          >
            {isLoading && <span className="btn-spinner" />}
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>

          {error && <div className="notice-error">{error}</div>}

          <div className="divider">
            <div className="divider-line" />
            <span className="divider-text">SYSTEM</span>
            <div className="divider-line" />
          </div>

          <p className="footer-text">
            Already have an account? <a href="/Signup/login">Sign in →</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupApi;