// import { useState, useEffect, useRef } from "react";
// import axiosInstance from "@/Apis/axiosInstance";
// import { useNavigate } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
// import { useTimer } from 'react-timer-hook';

// // import { MyTimer } from "./components/ReactTimer";


// const OtpVerification= ()=>{

//     const Navigate = useNavigate();

//     const[secretPin, setSecretPin] = useState("")
//     const[text, setText] = useState("");
//     const [SearchParams] = useSearchParams();
//     const [isDisable, setIsDisable] = useState(false);
//     const mainTime = new Date();
//     mainTime.setSeconds(mainTime.getSeconds() + 30); // 5 minutes timer

//     const time2 = new Date();
//     time2.setSeconds(time2.getSeconds()+ 60); // 1 minute timer

//     const handleOtp=()=>{

        
//     axiosInstance
//     .post(`/api/verify_otp?email=${SearchParams.get("email")}`,{
//       otp: secretPin  
//     })
//     .then((Response)=>{
//         console.log("Response", Response)
//         if(Response.data.success){

//             Navigate('/');
//         }else{

//             setText("Sorry, invalid secret pin")

//         }
//     }).catch((error)=>{
//         console.error("Error while sending post request to otp endpoint", error);
//     })

//     }

//     const resendOtp = ()=>{
//         axiosInstance
//         .get(`/api/resendOtp?email=${SearchParams.get("email")}`)
//         .then((Response)=>{
//             if(Response.data.success){
//                 setText(Response.data.message)
//             }
//         })
//     }

//    const OtpTimer=({ expiryTimestamp })=> {
//       const {
//         totalSeconds,
//         milliseconds,
//         seconds,
//         minutes,
//         hours,
//         days,
//         isRunning,
//         start,
//         pause,
//         resume,
//         restart,
//       } = useTimer({ expiryTimestamp, onExpire: () => setIsDisable(false), interval: 20 });
    
    
    

//   return (
//     <div style={{textAlign: 'center'}}>
//       {/* <h1>react-timer-hook </h1>
//       <p>Timer Demo</p> */}
//       <div style={{fontSize: '100px'}}>
//     <span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//       {/* <p>{isRunning ? 'Running' : 'Not running'}</p>
//       <button onClick={start}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={resume}>Resume</button>
//       <button onClick={() => {
//         // Restarts to 5 minutes timer
//         const time = new Date();
//         time.setSeconds(time.getSeconds() + 300);
//         restart(time)
//       }}>Restart</button> */}
//       <div>
      
//     </div>
//     </div>
//   );

// }
//    const MainTimer=({ expiryTimestamp })=> {
//       const {
//         totalSeconds,
//         milliseconds,
//         seconds,
//         minutes,
//         hours,
//         days,
//         isRunning,
//         start,
//         pause,
//         resume,
//         restart,
//       } = useTimer({ expiryTimestamp, onExpire: () => Navigate('/Signup'), interval: 20 });
    
    
    

//   return (
//     <div style={{textAlign: 'center'}}>
//       {/* <h1>react-timer-hook </h1>
//       <p>Timer Demo</p> */}
//       <div style={{fontSize: '100px'}}>
//     <span>{minutes}</span>:<span>{seconds}</span>
//       </div>
//       {/* <p>{isRunning ? 'Running' : 'Not running'}</p>
//       <button onClick={start}>Start</button>
//       <button onClick={pause}>Pause</button>
//       <button onClick={resume}>Resume</button>
//       <button onClick={() => {
//         // Restarts to 5 minutes timer
//         const time = new Date();
//         time.setSeconds(time.getSeconds() + 300);
//         restart(time)
//       }}>Restart</button> */}
//       <div>
      
//     </div>
//     </div>
//   );

// }



    





//     return(
//         <>
//         <h1 className="text-red-500 text-7xl">{text}</h1>
//         <div><MainTimer expiryTimestamp={mainTime}/></div>
//         <input
//         className="text-black"
//          type="password"
//          placeholder="secret_pin"
//          onChange={(e)=>setSecretPin(e.target.value)} />

//          <button onClick={handleOtp}>send</button>

//          <h1>Didn't recieve the otp? Send again</h1>
//          <button disabled={isDisable} onClick={()=>{resendOtp(); setIsDisable(true)}}>send</button>

//          <div>

//             {isDisable && <OtpTimer expiryTimestamp={time2}/>}

//          </div>
            
         
         
//         </>
//     )
    
// }

// export default OtpVerification

//------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// import { useState, useEffect, useRef } from "react";
// import axiosInstance from "@/Apis/axiosInstance";
// import { useNavigate } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";
// import { useTimer } from 'react-timer-hook';

// // import { MyTimer } from "./components/ReactTimer";


// const OtpVerification = () => {

//     const Navigate = useNavigate();

//     const [secretPin, setSecretPin] = useState("")
//     const [text, setText] = useState("");
//     const [SearchParams] = useSearchParams();
//     const [isDisable, setIsDisable] = useState(false);
//     const mainTime = new Date();
//     mainTime.setSeconds(mainTime.getSeconds() + 300); // 5 minutes timer

//     const time2 = new Date();
//     time2.setSeconds(time2.getSeconds() + 60); // 1 minute timer

//     // Inject fonts once — visual only, no logic touched.
//     useEffect(() => {
//         if (document.getElementById("otp-fonts")) return;
//         const link = document.createElement("link");
//         link.id = "otp-fonts";
//         link.rel = "stylesheet";
//         link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500;1,600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,500&display=swap";
//         document.head.appendChild(link);
//     }, []);

//     const handleOtp = () => {


//         axiosInstance
//             .post(`/api/verify_otp?email=${SearchParams.get("email")}`, {
//                 otp: secretPin
//             })
//             .then((Response) => {
//                 console.log("Response", Response)
//                 if (Response.data.success) {

//                     Navigate('/');
//                 } else {

//                     setText("Sorry, invalid secret pin")

//                 }
//             }).catch((error) => {
//                 console.error("Error while sending post request to otp endpoint", error);
//             })

//     }

//     const resendOtp = () => {
//         axiosInstance
//             .get(`/api/resendOtp?email=${SearchParams.get("email")}`)
//             .then((Response) => {
//                 if (Response.data.success) {
//                     setText(Response.data.message)
//                 }
//             })
//     }

//     // Ink-ring countdown — a wax-seal circle that empties like drying ink,
//     // with a quill nib riding the leading edge.
//     const CountdownBadge = ({ label, durationSeconds }) => {
//         const C = 100.53; // circumference for r=16
//         return (
//             <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A54A]/25 bg-[#2A1B42]/50 px-4 py-2">
//                 <svg width="22" height="22" viewBox="0 0 36 36" className="shrink-0">
//                     <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(212,165,74,0.16)" strokeWidth="2" />
//                     <circle
//                         cx="18" cy="18" r="16" fill="none"
//                         stroke="#D4A54A" strokeWidth="2" strokeLinecap="round"
//                         strokeDasharray={C}
//                         style={{
//                             transform: "rotate(-90deg)",
//                             transformOrigin: "18px 18px",
//                             animation: `otp-ring-drain ${durationSeconds}s linear forwards`,
//                         }}
//                     />
//                     <circle cx="18" cy="2.5" r="1.4" fill="#F0C36D" />
//                 </svg>
//                 <span className="font-serif italic text-[14px] text-[#E9DFC8] tracking-wide">
//                     {label}
//                 </span>
//             </div>
//         );
//     };

//     const OtpTimer = ({ expiryTimestamp }) => {
//         const {
//             totalSeconds,
//             milliseconds,
//             seconds,
//             minutes,
//             hours,
//             days,
//             isRunning,
//             start,
//             pause,
//             resume,
//             restart,
//         } = useTimer({ expiryTimestamp, onExpire: () => setIsDisable(false), interval: 20 });



//         return (
//             <CountdownBadge
//                 durationSeconds={60}
//                 label={`A new line may be sent in ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//             />
//         );

//     }

//     const MainTimer = ({ expiryTimestamp }) => {
//         const {
//             totalSeconds,
//             milliseconds,
//             seconds,
//             minutes,
//             hours,
//             days,
//             isRunning,
//             start,
//             pause,
//             resume,
//             restart,
//         } = useTimer({ expiryTimestamp, onExpire: () => Navigate('/Signup'), interval: 20 });



//         return (
//             <CountdownBadge
//                 durationSeconds={30}
//                 label={`This verse fades in ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//             />
//         );

//     }

//     const email = SearchParams.get("email");

//     return (
//         <>
//             <style>{`
//                 @keyframes otp-ring-drain {
//                     from { stroke-dashoffset: 0; }
//                     to   { stroke-dashoffset: 100.53; }
//                 }
//                 @keyframes otp-fade-in {
//                     from { opacity: 0; transform: translateY(-4px); }
//                     to   { opacity: 1; transform: translateY(0); }
//                 }
//                 @keyframes otp-flourish-draw {
//                     from { stroke-dashoffset: 340; }
//                     to   { stroke-dashoffset: 0; }
//                 }
//                 @keyframes otp-glow-drift {
//                     0%, 100% { transform: translate(-6%, -4%) scale(1); }
//                     50%      { transform: translate(4%, 3%) scale(1.06); }
//                 }
//                 .otp-fade-in { animation: otp-fade-in 0.2s ease-out; }
//                 .otp-flourish path {
//                     stroke-dasharray: 340;
//                     animation: otp-flourish-draw 1.1s ease-out forwards;
//                 }
//                 .otp-serif { font-family: 'Cormorant Garamond', 'EB Garamond', serif; }
//                 .otp-body  { font-family: 'EB Garamond', 'Cormorant Garamond', serif; }
//             `}</style>

//             <div
//     className="otp-body relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-12"
//     style={{ background: "linear-gradient(155deg, #08050D 0%, #170F26 32%, #2E1C48 50%, #170F26 68%, #08050D 100%)" }}
// >
//                 {/* ambient ink glow */}
//                 <div
//                     aria-hidden="true"
//                     className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full opacity-30 blur-[110px]"
//                     style={{ background: "radial-gradient(circle, #6B3FA0 0%, transparent 70%)", animation: "otp-glow-drift 14s ease-in-out infinite" }}
//                 />
//                 <div
//                     aria-hidden="true"
//                     className="pointer-events-none absolute -bottom-40 -right-24 h-[460px] w-[460px] rounded-full opacity-20 blur-[120px]"
//                     style={{ background: "radial-gradient(circle, #D4A54A 0%, transparent 70%)" }}
//                 />

//                 <div
//                     className="relative w-full max-w-[560px] rounded-2xl border border-[#D4A54A]/15 px-8 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur sm:px-14 sm:py-12"
//                     style={{ background: "linear-gradient(155deg, #08050D 0%, #170F26 32%, #2E1C48 50%, #170F26 68%, #08050D 100%)" }}
//                 >

//                     {/* corner ornament */}
//                     <svg aria-hidden="true" width="30" height="30" viewBox="0 0 30 30" className="absolute right-6 top-6 opacity-60">
//                         <path d="M2 2 Q 18 2 18 18 Q 18 28 28 28" stroke="#D4A54A" strokeWidth="1" fill="none" />
//                         <circle cx="28" cy="28" r="1.6" fill="#D4A54A" />
//                     </svg>

//                     {/* header */}
//                     <div className="flex items-start justify-between gap-6">
//                         <div>
//                             <p className="otp-serif text-[12px] font-medium uppercase tracking-[0.28em] text-[#D4A54A]">
//                                 Alfaz
//                             </p>
//                             <h1 className="otp-serif mt-2 text-[28px] font-medium italic leading-snug text-[#F3E9D8]">
//                                 Confirm your identity
//                             </h1>
//                             <p className="mt-2 text-[15px] leading-relaxed text-[#B7A6D3]">
//                                 {email
//                                     ? <>A six-digit line was sent to <span className="text-[#E9DFC8]">{email}</span></>
//                                     : "A six-digit line was sent to your email"}
//                             </p>
//                         </div>
//                         <div className="hidden shrink-0 sm:block">
//                             <svg width="34" height="40" viewBox="0 0 34 40" fill="none">
//                                 <path d="M27 2C20 6 12 12 8 22c-2 5-3 9-3 13" stroke="#D4A54A" strokeWidth="1.4" strokeLinecap="round" />
//                                 <path d="M27 2C22 8 20 14 14 18" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
//                                 <path d="M27 2C24 9 22 15 17 21" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
//                                 <path d="M4 33c2-1 5-1 6 1" stroke="#D4A54A" strokeWidth="1.4" strokeLinecap="round" />
//                                 <path d="M2 37c4-2 9-1 12 1" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
//                             </svg>
//                         </div>
//                     </div>

//                     {/* flourish divider */}
//                     <svg className="otp-flourish mt-5 h-3 w-full" viewBox="0 0 500 12" preserveAspectRatio="none">
//                         <path d="M0 6 C 80 -2, 160 14, 250 6 S 420 -2, 500 6" stroke="#D4A54A" strokeWidth="1" fill="none" opacity="0.55" />
//                     </svg>

//                     {/* expiry status */}
//                     <div className="mt-6">
//                         <MainTimer expiryTimestamp={mainTime} />
//                     </div>

//                     {/* error / status message */}
//                     {text && (
//                         <div className="otp-fade-in mt-5 rounded-md border-l-2 border-[#C06A57] bg-[#C06A57]/[0.08] px-3.5 py-2.5">
//                             <p className="otp-serif text-[14.5px] italic text-[#E3B3A6]">{text}</p>
//                         </div>
//                     )}

//                     {/* code input */}
//                     <div className="mt-8">
//                         <label className="otp-serif mb-2 block text-[12.5px] font-medium uppercase tracking-[0.2em] text-[#8E7BAE]">
//                             Verification code
//                         </label>
//                         <input
//                             className="otp-serif w-full rounded-lg border border-[#D4A54A]/25 bg-[#150C24] px-4 py-3.5 text-xl tracking-[0.5em] text-[#F3E9D8] outline-none transition placeholder:text-[#4B3B63] placeholder:tracking-normal focus:border-[#D4A54A]/60 focus:ring-[3px] focus:ring-[#D4A54A]/15"
//                             type="password"
//                             inputMode="numeric"
//                             maxLength={6}
//                             placeholder="· · · · · ·"
//                             aria-label="One-time passcode"
//                             onChange={(e) => setSecretPin(e.target.value)}
//                         />

//                         <button
//                             className="otp-serif mt-4 w-full rounded-lg bg-gradient-to-r from-[#D4A54A] to-[#C68F3A] py-3 text-[15px] font-semibold tracking-wide text-[#1D1230] transition hover:from-[#F0C36D] hover:to-[#D4A54A] active:scale-[0.995] focus:outline-none focus:ring-[3px] focus:ring-[#D4A54A]/25"
//                             onClick={handleOtp}
//                         >
//                             Confirm &amp; continue
//                         </button>
//                     </div>

//                     {/* resend */}
//                     <div className="mt-7 flex flex-col gap-3 border-t border-[#D4A54A]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
//                         <p className="text-[14px] text-[#8E7BAE]">Not in your inbox yet?</p>

//                         <div className="flex items-center gap-3">
//                             {isDisable && (
//                                 <div className="otp-fade-in">
//                                     <OtpTimer expiryTimestamp={time2} />
//                                 </div>
//                             )}
//                             <button
//                                 className="otp-serif text-[14.5px] italic font-medium text-[#D4A54A] transition hover:text-[#F0C36D] disabled:cursor-not-allowed disabled:text-[#5A4C74] focus:outline-none"
//                                 disabled={isDisable}
//                                 onClick={() => { resendOtp(); setIsDisable(true) }}
//                             >
//                                 {isDisable ? "Sent, once more" : "Send again"}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )

// }

// export default OtpVerification

//------------------------------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import { useState, useEffect, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useTimer } from 'react-timer-hook';

// import { MyTimer } from "./components/ReactTimer";


const OtpVerification = () => {

    const Navigate = useNavigate();

    const [secretPin, setSecretPin] = useState("")
    const [text, setText] = useState("");
    const [SearchParams] = useSearchParams();
    const [isDisable, setIsDisable] = useState(false);
    const mainTime = new Date();
    mainTime.setSeconds(mainTime.getSeconds() + 30); // 5 minutes timer

    const time2 = new Date();
    time2.setSeconds(time2.getSeconds() + 60); // 1 minute timer

    // Inject fonts once — visual only, no logic touched.
    useEffect(() => {
        if (document.getElementById("otp-fonts")) return;
        const link = document.createElement("link");
        link.id = "otp-fonts";
        link.rel = "stylesheet";
        link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500;1,600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,500&display=swap";
        document.head.appendChild(link);
    }, []);

    const handleOtp = () => {


        axiosInstance
            .post(`/api/verify_otp?email=${SearchParams.get("email")}`, {
                otp: secretPin
            })
            .then((Response) => {
                console.log("Response", Response)
                if (Response.data.success) {

                    Navigate('/');
                } else {

                    setText("Sorry, invalid secret pin")

                }
            }).catch((error) => {
                console.error("Error while sending post request to otp endpoint", error);
            })

    }

    const resendOtp = () => {
        axiosInstance
            .get(`/api/resendOtp?email=${SearchParams.get("email")}`)
            .then((Response) => {
                if (Response.data.success) {
                    setText(Response.data.message)
                }
            })
    }

    // Ink-ring countdown — a wax-seal circle that empties like drying ink,
    // with a quill nib riding the leading edge.
    const CountdownBadge = ({ label, durationSeconds }) => {
        const C = 100.53; // circumference for r=16
        return (
            <div className="inline-flex items-center gap-3 rounded-full border border-[#D4A54A]/25 bg-[#2A1B42]/50 px-4 py-2">
                <svg width="22" height="22" viewBox="0 0 36 36" className="shrink-0">
                    <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(212,165,74,0.16)" strokeWidth="2" />
                    <circle
                        cx="18" cy="18" r="16" fill="none"
                        stroke="#D4A54A" strokeWidth="2" strokeLinecap="round"
                        strokeDasharray={C}
                        style={{
                            transform: "rotate(-90deg)",
                            transformOrigin: "18px 18px",
                            animation: `otp-ring-drain ${durationSeconds}s linear forwards`,
                        }}
                    />
                    <circle cx="18" cy="2.5" r="1.4" fill="#F0C36D" />
                </svg>
                <span className="font-serif italic text-[14px] text-[#E9DFC8] tracking-wide">
                    {label}
                </span>
            </div>
        );
    };

    const OtpTimer = ({ expiryTimestamp }) => {
        const {
            totalSeconds,
            milliseconds,
            seconds,
            minutes,
            hours,
            days,
            isRunning,
            start,
            pause,
            resume,
            restart,
        } = useTimer({ expiryTimestamp, onExpire: () => setIsDisable(false), interval: 20 });



        return (
            <CountdownBadge
                durationSeconds={60}
                label={`A new line may be sent in ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
            />
        );

    }

    const MainTimer = ({ expiryTimestamp }) => {
        const {
            totalSeconds,
            milliseconds,
            seconds,
            minutes,
            hours,
            days,
            isRunning,
            start,
            pause,
            resume,
            restart,
        } = useTimer({ expiryTimestamp, onExpire: () => Navigate('/Signup'), interval: 20 });



        return (
            <CountdownBadge
                durationSeconds={30}
                label={`This verse fades in ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
            />
        );

    }

    const email = SearchParams.get("email");

    return (
        <>
            <style>{`
                @keyframes otp-ring-drain {
                    from { stroke-dashoffset: 0; }
                    to   { stroke-dashoffset: 100.53; }
                }
                @keyframes otp-fade-in {
                    from { opacity: 0; transform: translateY(-4px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes otp-flourish-draw {
                    from { stroke-dashoffset: 340; }
                    to   { stroke-dashoffset: 0; }
                }
                @keyframes otp-glow-drift {
                    0%, 100% { transform: translate(-6%, -4%) scale(1); }
                    50%      { transform: translate(4%, 3%) scale(1.06); }
                }
                .otp-fade-in { animation: otp-fade-in 0.2s ease-out; }
                .otp-flourish path {
                    stroke-dasharray: 340;
                    animation: otp-flourish-draw 1.1s ease-out forwards;
                }
                .otp-serif { font-family: 'Cormorant Garamond', 'EB Garamond', serif; }
                .otp-body  { font-family: 'EB Garamond', 'Cormorant Garamond', serif; }
            `}</style>

            <div
                className="otp-body relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 py-12"
                style={{ background: "radial-gradient(circle at 50% 50%, #3A2360 0%, #241536 30%, #120A1F 60%, #050308 100%)" }}
            >
                {/* ambient ink glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full opacity-30 blur-[110px]"
                    style={{ background: "radial-gradient(circle, #6B3FA0 0%, transparent 70%)", animation: "otp-glow-drift 14s ease-in-out infinite" }}
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-40 -right-24 h-[460px] w-[460px] rounded-full opacity-20 blur-[120px]"
                    style={{ background: "radial-gradient(circle, #D4A54A 0%, transparent 70%)" }}
                />

                <div
                    className="relative w-full max-w-[560px] rounded-2xl border border-[#D4A54A]/15 px-8 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur sm:px-14 sm:py-12"
                    style={{ background: "linear-gradient(155deg, #08050D 0%, #170F26 32%, #2E1C48 50%, #170F26 68%, #08050D 100%)" }}
                >

                    {/* corner ornament */}
                    <svg aria-hidden="true" width="30" height="30" viewBox="0 0 30 30" className="absolute right-6 top-6 opacity-60">
                        <path d="M2 2 Q 18 2 18 18 Q 18 28 28 28" stroke="#D4A54A" strokeWidth="1" fill="none" />
                        <circle cx="28" cy="28" r="1.6" fill="#D4A54A" />
                    </svg>

                    {/* header */}
                    <div className="flex items-start justify-between gap-6">
                        <div>
                            <p className="otp-serif text-[12px] font-medium uppercase tracking-[0.28em] text-[#D4A54A]">
                                Alfaz
                            </p>
                            <h1 className="otp-serif mt-2 text-[28px] font-medium italic leading-snug text-[#F3E9D8]">
                                Confirm your identity
                            </h1>
                            <p className="mt-2 text-[15px] leading-relaxed text-[#B7A6D3]">
                                {email
                                    ? <>A six-digit line was sent to <span className="text-[#E9DFC8]">{email}</span></>
                                    : "A six-digit line was sent to your email"}
                            </p>
                        </div>
                        <div className="hidden shrink-0 sm:block">
                            <svg width="34" height="40" viewBox="0 0 34 40" fill="none">
                                <path d="M27 2C20 6 12 12 8 22c-2 5-3 9-3 13" stroke="#D4A54A" strokeWidth="1.4" strokeLinecap="round" />
                                <path d="M27 2C22 8 20 14 14 18" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                                <path d="M27 2C24 9 22 15 17 21" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                                <path d="M4 33c2-1 5-1 6 1" stroke="#D4A54A" strokeWidth="1.4" strokeLinecap="round" />
                                <path d="M2 37c4-2 9-1 12 1" stroke="#D4A54A" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                            </svg>
                        </div>
                    </div>

                    {/* flourish divider */}
                    <svg className="otp-flourish mt-5 h-3 w-full" viewBox="0 0 500 12" preserveAspectRatio="none">
                        <path d="M0 6 C 80 -2, 160 14, 250 6 S 420 -2, 500 6" stroke="#D4A54A" strokeWidth="1" fill="none" opacity="0.55" />
                    </svg>

                    {/* expiry status */}
                    <div className="mt-6">
                        <MainTimer expiryTimestamp={mainTime} />
                    </div>

                    {/* error / status message */}
                    {text && (
                        <div className="otp-fade-in mt-5 rounded-md border-l-2 border-[#C06A57] bg-[#C06A57]/[0.08] px-3.5 py-2.5">
                            <p className="otp-serif text-[14.5px] italic text-[#E3B3A6]">{text}</p>
                        </div>
                    )}

                    {/* code input */}
                    <div className="mt-8">
                        <label className="otp-serif mb-2 block text-[12.5px] font-medium uppercase tracking-[0.2em] text-[#8E7BAE]">
                            Verification code
                        </label>
                        <input
                            className="otp-serif w-full rounded-lg border border-[#D4A54A]/25 bg-[#150C24] px-4 py-3.5 text-xl tracking-[0.5em] text-[#F3E9D8] outline-none transition placeholder:text-[#4B3B63] placeholder:tracking-normal focus:border-[#D4A54A]/60 focus:ring-[3px] focus:ring-[#D4A54A]/15"
                            type="password"
                            inputMode="numeric"
                            maxLength={6}
                            placeholder="· · · · · ·"
                            aria-label="One-time passcode"
                            onChange={(e) => setSecretPin(e.target.value)}
                        />

                        <button
                            className="otp-serif mt-4 w-full rounded-lg bg-gradient-to-r from-[#D4A54A] to-[#C68F3A] py-3 text-[15px] font-semibold tracking-wide text-[#1D1230] transition hover:from-[#F0C36D] hover:to-[#D4A54A] active:scale-[0.995] focus:outline-none focus:ring-[3px] focus:ring-[#D4A54A]/25"
                            onClick={handleOtp}
                        >
                            Confirm &amp; continue
                        </button>
                    </div>

                    {/* resend */}
                    <div className="mt-7 flex flex-col gap-3 border-t border-[#D4A54A]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-[14px] text-[#8E7BAE]">Not in your inbox yet?</p>

                        <div className="flex items-center gap-3">
                            {isDisable && (
                                <div className="otp-fade-in">
                                    <OtpTimer expiryTimestamp={time2} />
                                </div>
                            )}
                            <button
                                className="otp-serif text-[14.5px] italic font-medium text-[#D4A54A] transition hover:text-[#F0C36D] disabled:cursor-not-allowed disabled:text-[#5A4C74] focus:outline-none"
                                disabled={isDisable}
                                onClick={() => { resendOtp(); setIsDisable(true) }}
                            >
                                {isDisable ? "Sent, once more" : "Send again"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default OtpVerification