// import { useState, useEffect } from "react";


// export const ProfileCard=({userName, totalKalams, joiningDate, Streak, totalSher, totalGhazal, totalNazm})=>{








//     return(

        

//         <div className=" w-full min-h-screen flex">

//             <div className=" mx-auto  flex flex-col border h-screen w-1/2 bg-blue-900 border-blue-400 rounded-3xl">


//             {/* main upper div */}

            

//             <div className="flex  mx-auto rounded-3xl bg-blue-900 border w-full h-1/2 border-blue-400">

            
         

//            <div  className=" h-full w-2/3 flex flex-col">
            

//             <div className="h-full w-full flex border border-black ">    

           
                
//                 {/* upper left above div */}
                
//             <div className="flex">

//                  {/* profile pic */}

//             <div className="rounded-full  bg-blue-950 w-40 h-40 ">

//                 <img className="rounded-full w-full h-full" src="http://localhost:9000/uploads/profilePics/image-1770827123299_744819523.jpg" />

//             </div>

//             {/* Name */}

//             <div className="rounded-2xl my-auto flex bg-blue-950 w-64 h-8">

//                 <h1 className="flex mx-auto text-3xl">{userName}</h1>
                

//             </div>

//             </div>

            

           


//             </div>

//             {/* upper left below div */}


//             <div className=" flex border border-yellow-500 w-full h-full">

                 
//             </div>



//             </div>
            

//             {/* upper right div */}

//              <div className=" flex border flex-col border-blue-400  h-full w-1/2">

//              {/* upper right above div */}

//              <div className="border flex flex-col items-center justify-center border-blue-400 h-1/2 w-full">

//              <h1 className="flex  text-8xl  ">00</h1>
//              <h2 className="flex text-2xl">Followers</h2>

//              </div>

//              {/* upper right below div */}

//              <div className=" flex border flex-col items-center justify-center border-red-600 h-1/2 w-full ">

//              <h1 className="text-8xl">{totalKalams}</h1>
//              <h1 className="text-2xl">Total Kalams</h1>


//              </div>

            
//             </div>

               

             


//             </div>

//             <div className="border border-pink-600 w-full flex h-1/6">

//             <div className="border flex flex-col border-black h-full w-1/4 items-center justify-center">
//             <h1 className="text-4xl">{totalSher}</h1>
//             <h1>contributions in shayri</h1>
//             </div>
//             <div className="border border-black h-full w-1/4 flex flex-col items-center justify-center ">
//             <h1 className="text-4xl">{totalGhazal}</h1>
//             <h1>contributions in Gahzal</h1>
//             </div>
//             <div className="border border-black h-full w-1/4 flex flex-col items-center justify-center">
//             <h1 className="text-4xl">{totalNazm}</h1>
//             <h1>contributions in Nazm</h1>
//             </div>

//             <div className="border border-black h-full w-1/4 flex flex-col items-center justify-center">
//             <h1 className="text-4xl">{totalGhazal}</h1>
//             <h1>contributions in Gahzal</h1>
//             </div>



//             </div>




//             </div>

//             {/* <h1>Hello</h1> */}

//         </div>
        
        
//     )
// }













//------------------------------------------------------------------------------------------------------------->
















// import axiosInstance from "@/Apis/axiosInstance";
// import { useEffect, useRef, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// const css = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

//   .pp-wrap {
//     width: 100%; min-height: 100vh;
//     background: #080b12;
//     font-family: 'DM Sans', sans-serif;
//   }
//   .pp-card {
//     width: 100%; min-height: 100vh;
//     background: #0d1117;
//     display: flex; flex-direction: column;
//     position: relative; overflow: hidden;
//   }
//   .pp-noise {
//     position: absolute; inset: 0; pointer-events: none; z-index: 0;
//     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
//     background-size: 180px; opacity: 0.4;
//   }
//   .pp-glow-tl {
//     position: absolute; width: 500px; height: 500px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
//     top: -180px; left: -180px; pointer-events: none; z-index: 0;
//   }
//   .pp-glow-br {
//     position: absolute; width: 400px; height: 400px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%);
//     bottom: -100px; right: -100px; pointer-events: none; z-index: 0;
//   }
//   .pp-content { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; }

//   .pp-hero {
//     display: flex; flex-direction: column; align-items: center;
//     padding: 56px 40px 32px; gap: 22px;
//   }
//   .pp-avatar-ring {
//     width: 116px; height: 116px; border-radius: 50%; padding: 3px;
//     background: linear-gradient(135deg, #6366f1, #ec4899, #6366f1);
//   }
//   .pp-avatar-inner {
//     width: 100%; height: 100%; border-radius: 50%;
//     background: #0d1117; padding: 3px;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .pp-avatar-inner img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
//   .pp-name {
//     font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 700;
//     color: #f1f5f9; letter-spacing: -0.01em; margin: 0 0 8px; text-align: center;
//   }
//   .pp-tag {
//     display: inline-flex; align-items: center; gap: 6px;
//     background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3);
//     border-radius: 20px; padding: 4px 14px;
//     font-size: 11px; font-weight: 500; color: #818cf8;
//     letter-spacing: 0.1em; text-transform: uppercase;
//   }
//   .pp-dot { width: 6px; height: 6px; border-radius: 50%; background: #818cf8; }

//   .pp-stats-grid {
//     display: grid; grid-template-columns: 1fr 1px 1fr;
//     width: 100%; max-width: 360px;
//     background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
//     border-radius: 16px; overflow: hidden;
//   }
//   .pp-stat-cell { display: flex; flex-direction: column; align-items: center; padding: 22px 16px; gap: 4px; }
//   .pp-stat-divider { background: rgba(255,255,255,0.07); }
//   .pp-stat-num {
//     font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 700;
//     color: #f1f5f9; line-height: 1;
//   }
//   .pp-stat-label { font-size: 11px; color: rgba(148,163,184,0.6); letter-spacing: 0.12em; text-transform: uppercase; }

//   /* ── BADGES SECTION ── */
//   .pp-badges-section {
//     padding: 28px 28px 0;
//     flex: 1;
//     display: flex; flex-direction: column; gap: 0;
//   }
//   .pp-section-header {
//     display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
//   }
//   .pp-section-title {
//     font-size: 11px; font-weight: 500; color: rgba(148,163,184,0.45);
//     letter-spacing: 0.16em; text-transform: uppercase; white-space: nowrap;
//   }
//   .pp-section-line {
//     flex: 1; height: 1px;
//     background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent);
//   }

//   .pp-badges-scroll {
//     overflow-x: auto; overflow-y: visible;
//     padding-bottom: 20px;
//     scrollbar-width: none;
//   }
//   .pp-badges-scroll::-webkit-scrollbar { display: none; }

//   .pp-badges-row {
//     display: flex; gap: 20px;
//     padding: 8px 4px 4px;
//     width: max-content;
//   }

//   .pp-hex-wrap {
//     display: flex; flex-direction: column; align-items: center; gap: 8px;
//     width: 76px; cursor: default; flex-shrink: 0;
//     transition: transform 0.2s;
//   }
//   .pp-hex-wrap:hover { transform: translateY(-4px); }

//   .pp-hex-outer {
//     width: 72px; height: 80px;
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//     display: flex; align-items: center; justify-content: center;
//   }
//   .pp-hex-outer.earned {
//     background: linear-gradient(160deg, #a5b4fc, #6366f1, #ec4899);
//     filter: drop-shadow(0 0 8px rgba(99,102,241,0.65)) drop-shadow(0 0 18px rgba(99,102,241,0.25));
//   }
//   .pp-hex-outer.locked {
//     background: rgba(255,255,255,0.06);
//     filter: none;
//   }
//   .pp-hex-inner {
//     width: 64px; height: 72px;
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//     display: flex; align-items: center; justify-content: center;
//     font-size: 24px; line-height: 1;
//   }
//   .pp-hex-inner.earned { background: #13152a; }
//   .pp-hex-inner.locked { background: #0f1015; filter: grayscale(1); opacity: 0.28; }

//   .pp-hex-name {
//     font-size: 10px; font-weight: 500; color: #cbd5e1;
//     text-align: center; line-height: 1.3; max-width: 76px;
//   }
//   .pp-hex-name.locked { color: rgba(148,163,184,0.22); }

//   /* ── TICKER ── */
//   .pp-ticker-wrap {
//     overflow: hidden; cursor: default; user-select: none;
//     height: 76px; border-top: 1px solid rgba(255,255,255,0.06);
//     margin-top: auto;
//   }
//   .pp-ticker-track { display: flex; height: 100%; }
//   .pp-ticker-item {
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     min-width: 175px; height: 100%; padding: 0 20px; flex-shrink: 0;
//     border-right: 1px solid rgba(255,255,255,0.05); gap: 3px;
//     transition: background 0.2s;
//   }
//   .pp-ticker-item:hover { background: rgba(255,255,255,0.02); }
//   .pp-ticker-num {
//     font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700;
//     color: #818cf8; line-height: 1;
//   }
//   .pp-ticker-label {
//     font-size: 10px; color: rgba(148,163,184,0.4);
//     letter-spacing: 0.12em; text-transform: uppercase; text-align: center;
//   }
// `;

// export const ProfileCard = ({
//   userName, totalKalams, joiningDate, Streak,
//   totalSher, totalGhazal, totalNazm,
//   profileLink, totalFollowers,
//   badges = []
// }) => {
//   const scrollRef = useRef(null);
//   const animRef = useRef(null);
//   const speed = 0.5;

//   const categories = [
//     { label: "Contributions in Shayri", value: totalSher },
//     { label: "Contributions in Ghazal", value: totalGhazal },
//     { label: "Contributions in Nazm", value: totalNazm },
//     { label: "Contributions in Matla", value: totalGhazal },
//     { label: "Contributions in Maqta", value: totalNazm },
//   ];

//   const earnedBadges = badges.filter(b => b.earned);
//   const lockedBadges = badges.filter(b => !b.earned);
//   const sortedBadges = [...earnedBadges, ...lockedBadges];
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const [userId, setUserId] = useState("")
//   const[isVisible, setIsVisible] = useState(false);
//   const userId = useRef(false);
//   const [following, setFollowing] = useState(false)
//   const[status, setStatus] = useState("")

//   const user = searchParams.get("userId")

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;
//     let pos = 0;
//     const step = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth / 2) pos = 0;
//       el.scrollLeft = pos;
//       animRef.current = requestAnimationFrame(step);
//     };
//     animRef.current = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(animRef.current);
    
//   }, []);

//   const pause = () => cancelAnimationFrame(animRef.current);
//   const resume = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     let pos = el.scrollLeft;
//     const step = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth / 2) pos = 0;
//       el.scrollLeft = pos;
//       animRef.current = requestAnimationFrame(step);
//     };
//     animRef.current = requestAnimationFrame(step);
//   };

//   useEffect(()=>{
//        axiosInstance
//     .get(`/api/userId`,{
//       withCredentials: true
//     }).then((response)=>{
//       // setUserId(response.data._id)
//       userId.current = response.data._id;
//       console.log("checking_fetched_UserId", response.data._id)

//       if(userId.current === user){
//         setIsVisible(false);
//       }else{
//         setIsVisible(true);
//       }

//     })
//   }, [])

//   useEffect(()=>{

//     if(userId.current !== user){

    
//     axiosInstance
//     .get(`/api/getFollowers?user=${user}`,{

//       withCredentials: true
//     }).then((response)=>{
//       console.log("follower_data", response.data)
//       if(response.data.found){
//         setFollowing(true);
//         setStatus("Following")
//       }else{
//         setFollowing(false)
//       }
//     }).catch((error)=>{
//       console.error("error fetching follower", error)
//     })
//   }else{
//     ;
//   }
//   }, [])

//   const triggerFollow=()=>{
//     axiosInstance
//     .post('/api/follow',{
//       userId: user
//     },{
//       withCredentials: true
//     }).then((response)=>{
//       if(response.data.success){
//         setStatus("Following");
//         setFollowing(true)
//       }else{
//         ;
//       }
//     })
//   }

//   const triggerUnfollow=()=>{
    
//     axiosInstance
//     .post(`/api/unfollow?userId=${user}`, {
//       withCredentials: true
//     }).then((response)=>{
//       console.log(response.data)
//       if(response.data.success){
//         setFollowing("")
//       }
//     })
//   }

//   return (
//     <>
//       <style>{css}</style>
//       <div className="pp-wrap">
//         <div className="pp-card">
//           <div className="pp-noise" />
//           <div className="pp-glow-tl" />
//           <div className="pp-glow-br" />

//           <div className="pp-content">

//             {/* ── HERO ── */}
//             <div className="pp-hero">
//               <div className="pp-avatar-ring">
//                   {/* {(userId === user)?setIsVisible(false):setIsVisible(true)} */}
                  
//                 <div className="pp-avatar-inner">
//                   <img src= {profileLink} />
//                 </div>
              
//               </div>
//               {isVisible && !following && <button onClick={triggerFollow}>follow</button>}
//               {following &&<button onClick={triggerUnfollow}>following</button>}
              
//               <h1>{(`Followers: ${totalFollowers}`)}</h1>

//               <div style={{ textAlign: "center" }}>
//                 <h1 className="pp-name">{userName}</h1>
//                 <span className="pp-tag"><span className="pp-dot" />Shayar</span>
//               </div>

//               <div className="pp-stats-grid">
//                 <div className="pp-stat-cell">
//                   <span className="pp-stat-num">00</span>
//                   <span className="pp-stat-label">Followers</span>
//                 </div>
//                 <div className="pp-stat-divider" />
//                 <div className="pp-stat-cell">
//                   <span className="pp-stat-num">{totalKalams}</span>
//                   <span className="pp-stat-label">Total Kalams</span>
//                 </div>
//               </div>

//               {(joiningDate || Streak) && (
//                 <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
//                   {joiningDate && (
//                     <span style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "rgba(148,163,184,0.7)" }}>
//                       Joined {joiningDate}
//                     </span>
//                   )}
// {Streak && (
//   <div style={{
//     display: "flex", alignItems: "center", gap: 10,
//     background: "rgba(251,146,60,0.08)",
//     border: "1px solid rgba(251,146,60,0.2)",
//     borderRadius: 14, padding: "10px 18px",
//   }}>
//     <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path d="M10.5 1C10.5 1 11 5.5 8.5 8C6 10.5 3 10 3 10C3 10 3.5 13 6 14.5C5 15.5 4 17 4 19C4 19 6 17.5 8 17.5C10 17.5 11.5 19 11.5 21C11.5 21 14 19 14 16C14 14 12.5 12.5 12.5 12.5C12.5 12.5 16 11 16 7C16 4 13.5 2 10.5 1Z" fill="url(#flameGrad)" />
//       <path d="M8.5 13C8.5 13 9 14.5 9 16C9 17.5 8 18.5 8 18.5C8 18.5 10.5 18 10.5 15.5C10.5 14 9.5 13 8.5 13Z" fill="rgba(254,215,170,0.6)" />
//       <defs>
//         <linearGradient id="flameGrad" x1="9" y1="1" x2="9" y2="21" gradientUnits="userSpaceOnUse">
//           <stop offset="0%" stopColor="#fb923c" />
//           <stop offset="50%" stopColor="#f97316" />
//           <stop offset="100%" stopColor="#ea580c" />
//         </linearGradient>
//       </defs>
//     </svg>
//     <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
//       <span style={{ fontSize: 16, fontWeight: 600, color: "#fed7aa", lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>
//         {Streak}
//       </span>
//       <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(251,146,60,0.55)" }}>
//         day streak
//       </span>
//     </div>
//   </div>
// )}
//                 </div>
//               )}
//             </div>

//             {/* ── BADGES — horizontal scroll row ── */}
//             {sortedBadges.length > 0 && (
//               <div className="pp-badges-section">
//                 <div className="pp-section-header">
//                   <span className="pp-section-title">
//                     Badges &nbsp;·&nbsp; {earnedBadges.length} of {badges.length} earned
//                   </span>
//                   <div className="pp-section-line" />
//                 </div>

//                 <div className="pp-badges-scroll">
//                   <div className="pp-badges-row">
//                     {sortedBadges.map((badge, i) => (
//                       <div key={i} className="pp-hex-wrap">
//                         <div className={`pp-hex-outer ${badge.earned ? "earned" : "locked"}`}>
//                           <div className={`pp-hex-inner ${badge.earned ? "earned" : "locked"}`}>
//                             {badge.icon}
//                           </div>
//                         </div>
//                         <span className={`pp-hex-name ${badge.earned ? "" : "locked"}`}>
//                           {badge.name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ── TICKER ── */}
//             <div
//               className="pp-ticker-wrap"
//               ref={scrollRef}
//               onMouseEnter={pause}
//               onMouseLeave={resume}
//             >
//               <div className="pp-ticker-track">
//                 {[0, 1].map((d) => (
//                   <div key={d} style={{ display: "flex", flexShrink: 0 }}>
//                     {categories.map((cat, i) => (
//                       <div key={i} className="pp-ticker-item">
//                         <span className="pp-ticker-num">{cat.value}</span>
//                         <span className="pp-ticker-label">{cat.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// THIS IS MAIN ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//---------------------------------------------------------------------------------------------------------------------------->





// import axiosInstance from "@/Apis/axiosInstance";
// import { useEffect, useRef, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { MyVerticallyCenteredModal } from "./Modals/MyModal";

// const css = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

//   .pp-wrap {
//     width: 100%; min-height: 100vh;
//     background: #080b12;
//     font-family: 'DM Sans', sans-serif;
//   }
//   .pp-card {
//     width: 100%; min-height: 100vh;
//     background: #0d1117;
//     display: flex; flex-direction: column;
//     position: relative; overflow: hidden;
//   }
//   .pp-noise {
//     position: absolute; inset: 0; pointer-events: none; z-index: 0;
//     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
//     background-size: 180px; opacity: 0.4;
//   }
//   .pp-glow-tl {
//     position: absolute; width: 500px; height: 500px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
//     top: -180px; left: -180px; pointer-events: none; z-index: 0;
//   }
//   .pp-glow-br {
//     position: absolute; width: 400px; height: 400px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%);
//     bottom: -100px; right: -100px; pointer-events: none; z-index: 0;
//   }
//   .pp-content { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; }

//   /* ── HERO ── */
//   .pp-hero {
//     display: flex; flex-direction: column; align-items: center;
//     padding: 52px 40px 32px; gap: 0;
//   }

//   /* Avatar */
//   .pp-avatar-ring {
//     width: 116px; height: 116px; border-radius: 50%; padding: 3px;
//     background: linear-gradient(135deg, #6366f1, #ec4899, #6366f1);
//     margin-bottom: 20px;
//   }
//   .pp-avatar-inner {
//     width: 100%; height: 100%; border-radius: 50%;
//     background: #0d1117; padding: 3px;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .pp-avatar-inner img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }

//   /* Name block — sits directly under avatar */
//   .pp-name-block {
//     display: flex; flex-direction: column; align-items: center; gap: 8px;
//     margin-bottom: 18px;
//   }
//   .pp-name {
//     font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 700;
//     color: #f1f5f9; letter-spacing: -0.01em; margin: 0; text-align: center;
//     line-height: 1.1;
//   }
//   .pp-tag {
//     display: inline-flex; align-items: center; gap: 6px;
//     background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3);
//     border-radius: 20px; padding: 4px 14px;
//     font-size: 11px; font-weight: 500; color: #818cf8;
//     letter-spacing: 0.1em; text-transform: uppercase;
//   }
//   .pp-dot { width: 6px; height: 6px; border-radius: 50%; background: #818cf8; }

//   /* Follow row — followers pill + button sit on one line, centered */
//   .pp-social-row {
//     display: flex; align-items: center; justify-content: center; gap: 10px;
//     margin-bottom: 24px;
//   }

//   /* Followers pill */
//   .pp-followers-pill {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(255,255,255,0.09);
//     border-radius: 40px; padding: 8px 18px;
//     font-size: 13px; font-weight: 500; color: #94a3b8;
//     letter-spacing: 0.01em;
//   }
//   .pp-followers-pill-icon {
//     display: flex; align-items: center; justify-content: center;
//     width: 22px; height: 22px; border-radius: 50%;
//     background: rgba(99,102,241,0.18);
//   }
//   .pp-followers-pill-count {
//     font-family: 'Playfair Display', serif;
//     font-size: 16px; font-weight: 700; color: #e2e8f0;
//     line-height: 1;
//   }
//   .pp-followers-pill-label {
//     font-size: 11px; color: rgba(148,163,184,0.5);
//     letter-spacing: 0.1em; text-transform: uppercase;
//   }

//   /* Follow button */
//   .pp-btn-follow {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
//     border: none; border-radius: 40px;
//     padding: 10px 22px; cursor: pointer;
//     font-family: 'DM Sans', sans-serif;
//     font-size: 13px; font-weight: 600; color: #fff;
//     letter-spacing: 0.04em;
//     box-shadow: 0 0 18px rgba(99,102,241,0.45), 0 2px 8px rgba(0,0,0,0.4);
//     transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
//     position: relative; overflow: hidden;
//   }
//   .pp-btn-follow::before {
//     content: ''; position: absolute; inset: 0;
//     background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
//     border-radius: inherit;
//   }
//   .pp-btn-follow:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 0 28px rgba(99,102,241,0.65), 0 4px 16px rgba(0,0,0,0.5);
//     filter: brightness(1.08);
//   }
//   .pp-btn-follow:active { transform: translateY(0); }

//   /* Unfollow button */
//   .pp-btn-unfollow {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(99,102,241,0.3);
//     border-radius: 40px; padding: 10px 22px; cursor: pointer;
//     font-family: 'DM Sans', sans-serif;
//     font-size: 13px; font-weight: 500; color: #818cf8;
//     letter-spacing: 0.04em;
//     transition: background 0.18s, border-color 0.18s, transform 0.18s, color 0.18s;
//   }
//   .pp-btn-unfollow:hover {
//     background: rgba(99,102,241,0.08);
//     border-color: rgba(236,72,153,0.4);
//     color: #f472b6;
//     transform: translateY(-1px);
//   }
//   .pp-btn-unfollow:active { transform: translateY(0); }

//   /* Stats grid */
//   .pp-stats-grid {
//     display: grid; grid-template-columns: 1fr 1px 1fr;
//     width: 100%; max-width: 360px;
//     background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
//     border-radius: 16px; overflow: hidden;
//     margin-bottom: 20px;
//   }
//   .pp-stat-cell { display: flex; flex-direction: column; align-items: center; padding: 22px 16px; gap: 4px; }
//   .pp-stat-divider { background: rgba(255,255,255,0.07); }
//   .pp-stat-num {
//     font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 700;
//     color: #f1f5f9; line-height: 1;
//   }
//   .pp-stat-label { font-size: 11px; color: rgba(148,163,184,0.6); letter-spacing: 0.12em; text-transform: uppercase; }

//   /* Meta row — joined + streak sit together */
//   .pp-meta-row {
//     display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
//   }

//   /* ── BADGES SECTION ── */
//   .pp-badges-section {
//     padding: 28px 28px 0;
//     flex: 1;
//     display: flex; flex-direction: column; gap: 0;
//   }
//   .pp-section-header {
//     display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
//   }
//   .pp-section-title {
//     font-size: 11px; font-weight: 500; color: rgba(148,163,184,0.45);
//     letter-spacing: 0.16em; text-transform: uppercase; white-space: nowrap;
//   }
//   .pp-section-line {
//     flex: 1; height: 1px;
//     background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent);
//   }

//   .pp-badges-scroll {
//     overflow-x: auto; overflow-y: visible;
//     padding-bottom: 20px;
//     scrollbar-width: none;
//   }
//   .pp-badges-scroll::-webkit-scrollbar { display: none; }

//   .pp-badges-row {
//     display: flex; gap: 20px;
//     padding: 8px 4px 4px;
//     width: max-content;
//   }

//   .pp-hex-wrap {
//     display: flex; flex-direction: column; align-items: center; gap: 8px;
//     width: 76px; cursor: default; flex-shrink: 0;
//     transition: transform 0.2s;
//   }
//   .pp-hex-wrap:hover { transform: translateY(-4px); }

//   .pp-hex-outer {
//     width: 72px; height: 80px;
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//     display: flex; align-items: center; justify-content: center;
//   }
//   .pp-hex-outer.earned {
//     background: linear-gradient(160deg, #a5b4fc, #6366f1, #ec4899);
//     filter: drop-shadow(0 0 8px rgba(99,102,241,0.65)) drop-shadow(0 0 18px rgba(99,102,241,0.25));
//   }
//   .pp-hex-outer.locked {
//     background: rgba(255,255,255,0.06);
//     filter: none;
//   }
//   .pp-hex-inner {
//     width: 64px; height: 72px;
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//     display: flex; align-items: center; justify-content: center;
//     font-size: 24px; line-height: 1;
//   }
//   .pp-hex-inner.earned { background: #13152a; }
//   .pp-hex-inner.locked { background: #0f1015; filter: grayscale(1); opacity: 0.28; }

//   .pp-hex-name {
//     font-size: 10px; font-weight: 500; color: #cbd5e1;
//     text-align: center; line-height: 1.3; max-width: 76px;
//   }
//   .pp-hex-name.locked { color: rgba(148,163,184,0.22); }

//   /* ── TICKER ── */
//   .pp-ticker-wrap {
//     overflow: hidden; cursor: default; user-select: none;
//     height: 76px; border-top: 1px solid rgba(255,255,255,0.06);
//     margin-top: auto;
//   }
//   .pp-ticker-track { display: flex; height: 100%; }
//   .pp-ticker-item {
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     min-width: 175px; height: 100%; padding: 0 20px; flex-shrink: 0;
//     border-right: 1px solid rgba(255,255,255,0.05); gap: 3px;
//     transition: background 0.2s;
//   }
//   .pp-ticker-item:hover { background: rgba(255,255,255,0.02); }
//   .pp-ticker-num {
//     font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700;
//     color: #818cf8; line-height: 1;
//   }
//   .pp-ticker-label {
//     font-size: 10px; color: rgba(148,163,184,0.4);
//     letter-spacing: 0.12em; text-transform: uppercase; text-align: center;
//   }

//   /* Search Modal - Professional Styling */

// .search-modal-body {
//   padding: 20px 24px 24px;
//   display: flex;
//   flex-direction: column;
//   gap: 0;
//   overflow: hidden;
//   max-height: 100%;
// }

// .search-input-wrapper {
//   position: relative;
//   margin-bottom: 16px;
// }

// .search-input-wrapper::before {
//   content: "";
//   position: absolute;
//   left: 12px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 16px;
//   height: 16px;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24'%3E%3Ccircle cx='11' cy='11' r='8' stroke='%23888' stroke-width='2'/%3E%3Cpath d='M21 21l-4.35-4.35' stroke='%23888' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-size: contain;
//   pointer-events: none;
//   opacity: 0.5;
// }

// .search-input {
//   width: 100%;
//   height: 42px;
//   padding: 0 14px 0 40px;
//   font-size: 14px;
//   color: #111;
//   background: #f9f9f9;
//   border: 1px solid #e0e0e0;
//   border-radius: 10px;
//   outline: none;
//   transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
//   box-sizing: border-box;
// }

// .search-input:focus {
//   border-color: #6c63ff;
//   background: #fff;
//   box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.12);
// }

// .search-input::placeholder {
//   color: #aaa;
//   font-size: 14px;
// }

// /* Results List */

// .search-results-list {
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
  
//   overflow-y: auto;
//   padding-right: 2px;
// }

// .search-results-list::-webkit-scrollbar {
//   width: 4px;
// }

// .search-results-list::-webkit-scrollbar-track {
//   background: transparent;
// }

// .search-results-list::-webkit-scrollbar-thumb {
//   background: #ddd;
//   border-radius: 4px;
// }

// /* Each Result Row */

// .search-result-item {
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   padding: 10px 12px;
//   border-radius: 8px;
//   border: 1px solid transparent;
//   cursor: pointer;
//   text-decoration: none;
//   transition: background 0.15s, border-color 0.15s;
//   background: transparent;
//   width: 100%;
//   text-align: left;
// }

// .search-result-item:hover {
//   background: #f3f2ff;
//   border-color: #e0deff;
// }

// .search-result-item:active {
//   background: #eae8ff;
// }

// /* Avatar Circle */

// .search-result-avatar {
//   width: 36px;
//   height: 36px;
//   min-width: 36px;
//   border-radius: 50%;
//   background: #6c63ff;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 13px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//    overflow: hidden;
// }

// /* Name Text */

// .search-result-name {
//   font-size: 14px;
//   font-weight: 500;
//   color: #111;
//   margin: 0;
//   line-height: 1.4;
// }

// .search-result-sub {
//   font-size: 12px;
//   color: #888;
//   margin: 0;
//   line-height: 1.3;
// }

// /* Empty State */

// .search-empty-state {
//   text-align: center;
//   padding: 32px 16px;
//   color: #aaa;
//   font-size: 14px;
// }

// .search-empty-state svg {
//   margin-bottom: 10px;
//   opacity: 0.35;
// }



// /* Fix for dark theme - force text visibility */

// .search-result-name {
//   font-size: 14px;
//   font-weight: 500;
//   color: #ffffff !important;
//   margin: 0;
//   line-height: 1.4;
// }

// .search-result-sub {
//   font-size: 12px;
//   color: rgba(255, 255, 255, 0.55) !important;
//   margin: 0;
//   line-height: 1.3;
// }

// /* Also fix hover state for dark bg */
// .search-result-item:hover {
//   background: rgba(108, 99, 255, 0.18) !important;
//   border-color: rgba(108, 99, 255, 0.35) !important;
// }

// .search-result-item:active {
//   background: rgba(108, 99, 255, 0.28) !important;
// }

// /* Fix input text color for dark theme */
// .search-input {
//   color: #111 !important;
//   background: #ffffff !important;
//   border: 1px solid #444 !important;
// }

// .search-input:focus {
//   border-color: #6c63ff !important;
//   box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2) !important;
// }
// `;

// export const ProfileCard = ({
//   userName, totalKalams, joiningDate, Streak,
//   totalSher, totalGhazal, totalNazm,
//   profileLink, totalFollowers,
//   badges = []
// }) => {
//   const scrollRef = useRef(null);
//   const animRef = useRef(null);
//   const speed = 0.5;

//   const categories = [
//     { label: "Contributions in Shayri", value: totalSher },
//     { label: "Contributions in Ghazal", value: totalGhazal },
//     { label: "Contributions in Nazm", value: totalNazm },
//     { label: "Contributions in Matla", value: totalGhazal },
//     { label: "Contributions in Maqta", value: totalNazm },
//   ];

//   const earnedBadges = badges.filter(b => b.earned);
//   const lockedBadges = badges.filter(b => !b.earned);
//   const sortedBadges = [...earnedBadges, ...lockedBadges];
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const [userId, setUserId] = useState("")
//   const[isVisible, setIsVisible] = useState(false);
//   const userId = useRef(false);
//   const [following, setFollowing] = useState(false)
//   const[status, setStatus] = useState("")
//   const[isOpen, setIsOpen] = useState(false);
//   const [followers, setFollowers] = useState([]);
//   // const [value, setValue] = useState("");
//   const[searchOpen, setSearchOpen] = useState(false)
//   const [searchResult, setSearchResult] = useState([]);
//   const Navigate = useNavigate();

//   const value = useRef(null);

//   const user = searchParams.get("userId")
//   let timeoutId;

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;
//     let pos = 0;
//     const step = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth / 2) pos = 0;
//       el.scrollLeft = pos;
//       animRef.current = requestAnimationFrame(step);
//     };
//     animRef.current = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(animRef.current);
    
//   }, []);

//   const pause = () => cancelAnimationFrame(animRef.current);
//   const resume = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     let pos = el.scrollLeft;
//     const step = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth / 2) pos = 0;
//       el.scrollLeft = pos;
//       animRef.current = requestAnimationFrame(step);
//     };
//     animRef.current = requestAnimationFrame(step);
//   };

//   useEffect(()=>{
//        axiosInstance
//     .get(`/api/userId`,{
//       withCredentials: true
//     }).then((response)=>{
//       // setUserId(response.data._id)
//       userId.current = response.data._id;
//       console.log("checking_fetched_UserId", response.data._id)

//       if(userId.current === user){
//         setIsVisible(false);
//       }else{
//         setIsVisible(true);
//       }

//     })
//   }, [])

//   useEffect(()=>{

//     if(userId.current !== user){

    
//     axiosInstance
//     .get(`/api/getFollowers?user=${user}`,{

//       withCredentials: true
//     }).then((response)=>{
//       console.log("follower_data", response.data)
//       if(response.data.found){
//         setFollowing(true);
//         setStatus("Following");
//         setFollowers(response.data.follower.followers)
//         console.log("all_followers", response.data.follower.followers)
//       }else{
//         setFollowing(false)
//       }
//     }).catch((error)=>{
//       console.error("error fetching follower", error)
//     })
//   }else{
//     ;
//   }
//   }, [])

//   const triggerFollow=()=>{
//     axiosInstance
//     .post('/api/follow',{
//       userId: user
//     },{
//       withCredentials: true
//     }).then((response)=>{
//       if(response.data.success){
//         setStatus("Following");
//         setFollowing(true)
//       }else{
//         ;
//       }
//     })
//   }

//   const triggerUnfollow=()=>{
    
//     axiosInstance
//     .post(`/api/unfollow?userId=${user}`, {
//       withCredentials: true
//     }).then((response)=>{
//       console.log(response.data)
//       if(response.data.success){
//         setFollowing("")
//       }
//     })
//   }

//   return (
//     <>
//       <style>{css}</style>
//       <div className="pp-wrap">
//         <div className="pp-card">
       

//           <div className="pp-noise" />
//           <div className="  items-end w-full">
//             <div className="search-trigger-wrap">
//   <button className="search-trigger-btn" onClick={()=>setSearchOpen(true)}>
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
//       <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//     </svg>
//     <span>Search users</span>
//   </button>
// </div>




//             {
//               //---------------------------------------------------------------------------------------------------------------->
//           //     <MyVerticallyCenteredModal isOpen={searchOpen} onClose={()=>setSearchOpen(false)} width={"1/2"} height={"1/2"}>

//           //       <br /><br />

//           //        <input className="w-40 items-start text-black" type="text"
           
//           //  onChange={(e)=>{
//           //   value.current = e.target.value
//           //   if (timeoutId){
//           //     if(!value) return
//           //     clearTimeout(timeoutId);
//           //      timeoutId = setTimeout(()=>{
//           //       axiosInstance
//           //       .post('/api/searchUser',{
//           //         query: value.current
//           //       }).then((response)=>{
//           //           (response.data.length === 0)? <h1>Sorry no users found</h1>:
//           //         console.log("deBounce_response", response.data);
//           //         setSearchResult(response.data);
//           //       })
//           //     }, 500)
//           //   }else{
//           //     // setValue(e.target.value)

//           //    value.current = e.target.value

//           //     timeoutId = setTimeout(()=>{
//           //       axiosInstance
//           //       .post('/api/searchUser',{
//           //         query: value.current
//           //       }).then((response)=>{
//           //           (response.data.length === 0)? <h1>Sorry no users found</h1>:
//           //         console.log("deBounce_response", response.data);
//           //         setSearchResult(response.data)
//           //       })
//           //     }, 500)

//           //   }
//           //  }}
//           //  />

//           //  <br /><br />

//           //  {
            
//           //   searchResult.map((item, i)=>(
//           //     <div key={i}>
//           //       <h1>
//           //      <button onClick={()=>{Navigate(`/profile?userId=${item._id}`);setSearchOpen(false); Navigate(0)}}>   {item.name} </button>
//           //       </h1>

//           //     </div>
//           //   ))
//           //  }


//           //     </MyVerticallyCenteredModal>

//           //----------------------------------------------------------------------------------------------------------------->


//           <MyVerticallyCenteredModal isOpen={searchOpen} onClose={()=>setSearchOpen(false)} width={"1/2"} height={"1/2"}>

            

//   <div className="search-modal-body">

//     <div className="search-input-wrapper">
//       <input
//         className="search-input"
//         type="text"
//         placeholder="Search users..."

//         onChange={(e)=>{
//           value.current = e.target.value
//           if (timeoutId){
//             if(!value) return
//             clearTimeout(timeoutId);
//              timeoutId = setTimeout(()=>{
//               axiosInstance
//               .post('/api/searchUser',{
//                 query: value.current
//               }).then((response)=>{
//                   (response.data.length === 0)? <h1>Sorry no users found</h1>:
//                 console.log("deBounce_response", response.data);
//                 setSearchResult(response.data);
//               })
//             }, 500)
//           }else{
//             // setValue(e.target.value)

//            value.current = e.target.value

//             timeoutId = setTimeout(()=>{
//               axiosInstance
//               .post('/api/searchUser',{
//                 query: value.current
//               }).then((response)=>{
//                   (response.data.length === 0)? <h1>Sorry no users found</h1>:
//                 console.log("deBounce_response", response.data);
//                 setSearchResult(response.data)
//               })
//             }, 500)

//           }
//         }}
//       />
//     </div>

//     <div className="search-results-list">
//       {
//         searchResult.map((item, i)=>(
//           <button className="search-result-item" key={i} onClick={()=>{Navigate(`/profile?userId=${item._id}`);setSearchOpen(false); Navigate(0)}}>
//             <div className="search-result-avatar">
//   {item.profilePic 
//     ? <img src={item.profilePic} alt={item.name} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
//     : item.name?.charAt(0)
//   }
// </div>
//             <div>
//               <p className="search-result-name">{item.name}</p>
//             </div>
//           </button>
//         ))
//       }
//     </div>

//   </div>

// </MyVerticallyCenteredModal>
//             }
          
//            </div>
//            {/* <button onClick={}>search</button> */}
//           <div className="pp-glow-tl" />
//           <div className="pp-glow-br" />

//           <div className="pp-content">

//             {/* ── HERO ── */}
//             <div className="pp-hero">

//               {/* 1. Avatar */}
//               <div className="pp-avatar-ring">
//                 {/* {(userId === user)?setIsVisible(false):setIsVisible(true)} */}
//                 <div className="pp-avatar-inner">
//                   <img src={profileLink} />
//                 </div>
//               </div>

//               {/* 2. Name + role tag — identity block */}
//               <div className="pp-name-block">
//                 <h1 className="pp-name">{userName}</h1>
//                 <span className="pp-tag"><span className="pp-dot" />Shayar</span>
//               </div>

//               {/* 3. Followers count + follow/unfollow — social action row */}
//               <div className="pp-social-row">
//                 {/* Followers pill */}
//                 {/* <div className="pp-followers-pill">
//                   <span className="pp-followers-pill-icon"> */}
//                     {/* person icon */}
//                     {/* <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <circle cx="8" cy="5" r="3" fill="#818cf8"/>
//                       <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"/>
//                     </svg>
//                   </span>
//                   <span className="pp-followers-pill-count">{totalFollowers}</span>
//                   <span className="pp-followers-pill-label">Followers</span>
//                 </div> */}

//                 {/* Follow button */}
//                 {isVisible && !following && (
//                   <button className="pp-btn-follow" onClick={triggerFollow}>
//                     {/* plus icon */}
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M7 1v12M1 7h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                     Follow
//                   </button>
//                 )}

//                 {/* Unfollow button */}
//                 {following && (
//                   <button className="pp-btn-unfollow" onClick={triggerUnfollow}>
//                     {/* checkmark icon */}
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M2 7l4 4 6-6" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                     Following
//                   </button>
//                 )}
//               </div>

//               {/* 4. Stats grid */}
//               <div className="pp-stats-grid">
//                  <button onClick={()=>setIsOpen(true)}>
//                 <div className="pp-stat-cell">
//                   <span className="pp-stat-num">{totalFollowers}</span>
//                  <span className="pp-stat-label">Followers</span>
//                 </div>
//                 </button>
//                 <div className="pp-stat-divider" />
//                 <div className="pp-stat-cell">
//                   <span className="pp-stat-num">{totalKalams}</span>
//                   <span className="pp-stat-label">Total Kalams</span>
//                 </div>
//               </div>

//               {/* 5. Meta — joined date + streak */}
//               {(joiningDate || Streak) && (
//                 <div className="pp-meta-row">
//                   {joiningDate && (
//                     <span style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "rgba(148,163,184,0.7)" }}>
//                       Joined {joiningDate}
//                     </span>
//                   )}
//                   {Streak && (
//                     <div style={{
//                       display: "flex", alignItems: "center", gap: 10,
//                       background: "rgba(251,146,60,0.08)",
//                       border: "1px solid rgba(251,146,60,0.2)",
//                       borderRadius: 14, padding: "10px 18px",
//                     }}>
//                       <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.5 1C10.5 1 11 5.5 8.5 8C6 10.5 3 10 3 10C3 10 3.5 13 6 14.5C5 15.5 4 17 4 19C4 19 6 17.5 8 17.5C10 17.5 11.5 19 11.5 21C11.5 21 14 19 14 16C14 14 12.5 12.5 12.5 12.5C12.5 12.5 16 11 16 7C16 4 13.5 2 10.5 1Z" fill="url(#flameGrad)" />
//                         <path d="M8.5 13C8.5 13 9 14.5 9 16C9 17.5 8 18.5 8 18.5C8 18.5 10.5 18 10.5 15.5C10.5 14 9.5 13 8.5 13Z" fill="rgba(254,215,170,0.6)" />
//                         <defs>
//                           <linearGradient id="flameGrad" x1="9" y1="1" x2="9" y2="21" gradientUnits="userSpaceOnUse">
//                             <stop offset="0%" stopColor="#fb923c" />
//                             <stop offset="50%" stopColor="#f97316" />
//                             <stop offset="100%" stopColor="#ea580c" />
//                           </linearGradient>
//                         </defs>
//                       </svg>
//                       <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                         <span style={{ fontSize: 16, fontWeight: 600, color: "#fed7aa", lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>
//                           {Streak}
//                         </span>
//                         <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(251,146,60,0.55)" }}>
//                           day streak
//                         </span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//             </div>

//             {/* ── BADGES — horizontal scroll row ── */}
//             {sortedBadges.length > 0 && (
//               <div className="pp-badges-section">
//                 <div className="pp-section-header">
//                   <span className="pp-section-title">
//                     Badges &nbsp;·&nbsp; {earnedBadges.length} of {badges.length} earned
//                   </span>
//                   <div className="pp-section-line" />
//                 </div>

//                 <div className="pp-badges-scroll">
//                   <div className="pp-badges-row">
//                     {sortedBadges.map((badge, i) => (
//                       <div key={i} className="pp-hex-wrap">
//                         <div className={`pp-hex-outer ${badge.earned ? "earned" : "locked"}`}>
//                           <div className={`pp-hex-inner ${badge.earned ? "earned" : "locked"}`}>
//                             {badge.icon}
//                           </div>
//                         </div>
//                         <span className={`pp-hex-name ${badge.earned ? "" : "locked"}`}>
//                           {badge.name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ── TICKER ── */}
//             <div
//               className="pp-ticker-wrap"
//               ref={scrollRef}
//               onMouseEnter={pause}
//               onMouseLeave={resume}
//             >
//               <div className="pp-ticker-track">
//                 {[0, 1].map((d) => (
//                   <div key={d} style={{ display: "flex", flexShrink: 0 }}>
//                     {categories.map((cat, i) => (
//                       <div key={i} className="pp-ticker-item">
//                         <span className="pp-ticker-num">{cat.value}</span>
//                         <span className="pp-ticker-label">{cat.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//         {
//           <MyVerticallyCenteredModal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
          
          
//           {
//             followers.map((item, i)=>(

//               <div key={i}>
//                 <h1>
//                   {item.follower}
//                 </h1>

//               </div>
//             ))
//           }
          
//           </MyVerticallyCenteredModal>
//         }
//       </div>
//     </>
//   );
// };

// THIS IS SECOND MAIN ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//----------------------------------------------------------------------------------------------------------------------------->




// import axiosInstance from "@/Apis/axiosInstance";
// import { useEffect, useRef, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { MyVerticallyCenteredModal } from "./Modals/MyModal";

// const css = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

//   .pp-wrap {
//     width: 100%; min-height: 100vh;
//     background: #080b12;
//     font-family: 'DM Sans', sans-serif;
//   }
//   .pp-card {
//     width: 100%; min-height: 100vh;
//     background: #0d1117;
//     display: flex; flex-direction: column;
//     position: relative; overflow: hidden;
//   }
//   .pp-noise {
//     position: absolute; inset: 0; pointer-events: none; z-index: 0;
//     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
//     background-size: 180px; opacity: 0.4;
//   }
//   .pp-glow-tl {
//     position: absolute; width: 500px; height: 500px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
//     top: -180px; left: -180px; pointer-events: none; z-index: 0;
//   }
//   .pp-glow-br {
//     position: absolute; width: 400px; height: 400px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%);
//     bottom: -100px; right: -100px; pointer-events: none; z-index: 0;
//   }
//   .pp-content { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; }

//   /* ── HERO ── */
//   .pp-hero {
//     display: flex; flex-direction: column; align-items: center;
//     padding: 52px 40px 32px; gap: 0;
//   }

//   /* Avatar */
//   .pp-avatar-ring {
//     width: 116px; height: 116px; border-radius: 50%; padding: 3px;
//     background: linear-gradient(135deg, #6366f1, #ec4899, #6366f1);
//     margin-bottom: 20px;
//   }
//   .pp-avatar-inner {
//     width: 100%; height: 100%; border-radius: 50%;
//     background: #0d1117; padding: 3px;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .pp-avatar-inner img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }

//   /* Name block — sits directly under avatar */
//   .pp-name-block {
//     display: flex; flex-direction: column; align-items: center; gap: 8px;
//     margin-bottom: 18px;
//   }
//   .pp-name {
//     font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 700;
//     color: #f1f5f9; letter-spacing: -0.01em; margin: 0; text-align: center;
//     line-height: 1.1;
//   }
//   .pp-tag {
//     display: inline-flex; align-items: center; gap: 6px;
//     background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3);
//     border-radius: 20px; padding: 4px 14px;
//     font-size: 11px; font-weight: 500; color: #818cf8;
//     letter-spacing: 0.1em; text-transform: uppercase;
//   }
//   .pp-dot { width: 6px; height: 6px; border-radius: 50%; background: #818cf8; }

//   /* Follow row — followers pill + button sit on one line, centered */
//   .pp-social-row {
//     display: flex; align-items: center; justify-content: center; gap: 10px;
//     margin-bottom: 24px;
//   }

//   /* Followers pill */
//   .pp-followers-pill {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(255,255,255,0.09);
//     border-radius: 40px; padding: 8px 18px;
//     font-size: 13px; font-weight: 500; color: #94a3b8;
//     letter-spacing: 0.01em;
//   }
//   .pp-followers-pill-icon {
//     display: flex; align-items: center; justify-content: center;
//     width: 22px; height: 22px; border-radius: 50%;
//     background: rgba(99,102,241,0.18);
//   }
//   .pp-followers-pill-count {
//     font-family: 'Playfair Display', serif;
//     font-size: 16px; font-weight: 700; color: #e2e8f0;
//     line-height: 1;
//   }
//   .pp-followers-pill-label {
//     font-size: 11px; color: rgba(148,163,184,0.5);
//     letter-spacing: 0.1em; text-transform: uppercase;
//   }

//   /* Follow button */
//   .pp-btn-follow {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: linear-gradient(135deg, #6366f1 0%, #818cf8 100%);
//     border: none; border-radius: 40px;
//     padding: 10px 22px; cursor: pointer;
//     font-family: 'DM Sans', sans-serif;
//     font-size: 13px; font-weight: 600; color: #fff;
//     letter-spacing: 0.04em;
//     box-shadow: 0 0 18px rgba(99,102,241,0.45), 0 2px 8px rgba(0,0,0,0.4);
//     transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
//     position: relative; overflow: hidden;
//   }
//   .pp-btn-follow::before {
//     content: ''; position: absolute; inset: 0;
//     background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
//     border-radius: inherit;
//   }
//   .pp-btn-follow:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 0 28px rgba(99,102,241,0.65), 0 4px 16px rgba(0,0,0,0.5);
//     filter: brightness(1.08);
//   }
//   .pp-btn-follow:active { transform: translateY(0); }

//   /* Unfollow button */
//   .pp-btn-unfollow {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(99,102,241,0.3);
//     border-radius: 40px; padding: 10px 22px; cursor: pointer;
//     font-family: 'DM Sans', sans-serif;
//     font-size: 13px; font-weight: 500; color: #818cf8;
//     letter-spacing: 0.04em;
//     transition: background 0.18s, border-color 0.18s, transform 0.18s, color 0.18s;
//   }
//   .pp-btn-unfollow:hover {
//     background: rgba(99,102,241,0.08);
//     border-color: rgba(236,72,153,0.4);
//     color: #f472b6;
//     transform: translateY(-1px);
//   }
//   .pp-btn-unfollow:active { transform: translateY(0); }

//   /* Stats grid */
//   .pp-stats-grid {
//     display: grid; grid-template-columns: 1fr 1px 1fr;
//     width: 100%; max-width: 360px;
//     background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
//     border-radius: 16px; overflow: hidden;
//     margin-bottom: 20px;
//   }
//   .pp-stat-cell { display: flex; flex-direction: column; align-items: center; padding: 22px 16px; gap: 4px; }
//   .pp-stat-divider { background: rgba(255,255,255,0.07); }
//   .pp-stat-num {
//     font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 700;
//     color: #f1f5f9; line-height: 1;
//   }
//   .pp-stat-label { font-size: 11px; color: rgba(148,163,184,0.6); letter-spacing: 0.12em; text-transform: uppercase; }

//   /* Meta row — joined + streak sit together */
//   .pp-meta-row {
//     display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
//   }

//   /* ── BADGES SECTION ── */
//   .pp-badges-section {
//     padding: 28px 28px 0;
//     flex: 1;
//     display: flex; flex-direction: column; gap: 0;
//   }
//   .pp-section-header {
//     display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
//   }
//   .pp-section-title {
//     font-size: 11px; font-weight: 500; color: rgba(148,163,184,0.45);
//     letter-spacing: 0.16em; text-transform: uppercase; white-space: nowrap;
//   }
//   .pp-section-line {
//     flex: 1; height: 1px;
//     background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent);
//   }

//   .pp-badges-scroll {
//     overflow-x: auto; overflow-y: visible;
//     padding-bottom: 20px;
//     scrollbar-width: none;
//   }
//   .pp-badges-scroll::-webkit-scrollbar { display: none; }

//   .pp-badges-row {
//     display: flex; gap: 20px;
//     padding: 8px 4px 4px;
//     width: max-content;
//   }

//   .pp-hex-wrap {
//     display: flex; flex-direction: column; align-items: center; gap: 8px;
//     width: 76px; cursor: default; flex-shrink: 0;
//     transition: transform 0.2s;
//   }
//   .pp-hex-wrap:hover { transform: translateY(-4px); }

//   .pp-hex-outer {
//     width: 72px; height: 80px;
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//     display: flex; align-items: center; justify-content: center;
//   }
//   .pp-hex-outer.earned {
//     background: linear-gradient(160deg, #a5b4fc, #6366f1, #ec4899);
//     filter: drop-shadow(0 0 8px rgba(99,102,241,0.65)) drop-shadow(0 0 18px rgba(99,102,241,0.25));
//   }
//   .pp-hex-outer.locked {
//     background: rgba(255,255,255,0.06);
//     filter: none;
//   }
//   .pp-hex-inner {
//     width: 64px; height: 72px;
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//     display: flex; align-items: center; justify-content: center;
//     font-size: 24px; line-height: 1;
//   }
//   .pp-hex-inner.earned { background: #13152a; }
//   .pp-hex-inner.locked { background: #0f1015; filter: grayscale(1); opacity: 0.28; }

//   .pp-hex-name {
//     font-size: 10px; font-weight: 500; color: #cbd5e1;
//     text-align: center; line-height: 1.3; max-width: 76px;
//   }
//   .pp-hex-name.locked { color: rgba(148,163,184,0.22); }

//   /* ── TICKER ── */
//   .pp-ticker-wrap {
//     overflow: hidden; cursor: default; user-select: none;
//     height: 76px; border-top: 1px solid rgba(255,255,255,0.06);
//     margin-top: auto;
//   }
//   .pp-ticker-track { display: flex; height: 100%; }
//   .pp-ticker-item {
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     min-width: 175px; height: 100%; padding: 0 20px; flex-shrink: 0;
//     border-right: 1px solid rgba(255,255,255,0.05); gap: 3px;
//     transition: background 0.2s;
//   }
//   .pp-ticker-item:hover { background: rgba(255,255,255,0.02); }
//   .pp-ticker-num {
//     font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700;
//     color: #818cf8; line-height: 1;
//   }
//   .pp-ticker-label {
//     font-size: 10px; color: rgba(148,163,184,0.4);
//     letter-spacing: 0.12em; text-transform: uppercase; text-align: center;
//   }

//   /* Search Modal - Professional Styling */

// .search-modal-body {
//   padding: 20px 24px 24px;
//   display: flex;
//   flex-direction: column;
//   gap: 0;
//   overflow: hidden;
//   max-height: 100%;
// }

// .search-input-wrapper {
//   position: relative;
//   margin-bottom: 16px;
// }

// .search-input-wrapper::before {
//   content: "";
//   position: absolute;
//   left: 12px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 16px;
//   height: 16px;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24'%3E%3Ccircle cx='11' cy='11' r='8' stroke='%23888' stroke-width='2'/%3E%3Cpath d='M21 21l-4.35-4.35' stroke='%23888' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-size: contain;
//   pointer-events: none;
//   opacity: 0.5;
// }

// .search-input {
//   width: 100%;
//   height: 42px;
//   padding: 0 14px 0 40px;
//   font-size: 14px;
//   color: #111 !important;
//   background: #ffffff !important;
//   border: 1px solid #444 !important;
//   border-radius: 10px;
//   outline: none;
//   transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
//   box-sizing: border-box;
// }

// .search-input:focus {
//   border-color: #6c63ff !important;
//   background: #fff;
//   box-shadow: 0 0 0 3px rgba(108, 99, 255, 0.2) !important;
// }

// .search-input::placeholder {
//   color: #aaa;
//   font-size: 14px;
// }

// /* Results List */

// .search-results-list {
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
//   max-height: 240px;
//   overflow-y: auto;
//   overflow-x: hidden;
//   padding-right: 2px;
// }

// .search-results-list::-webkit-scrollbar {
//   width: 4px;
// }

// .search-results-list::-webkit-scrollbar-track {
//   background: transparent;
// }

// .search-results-list::-webkit-scrollbar-thumb {
//   background: #ddd;
//   border-radius: 4px;
// }

// /* Each Result Row */

// .search-result-item {
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   padding: 10px 12px;
//   border-radius: 8px;
//   border: 1px solid transparent;
//   cursor: pointer;
//   text-decoration: none;
//   transition: background 0.15s, border-color 0.15s;
//   background: transparent;
//   width: 100%;
//   text-align: left;
// }

// .search-result-item:hover {
//   background: rgba(108, 99, 255, 0.18) !important;
//   border-color: rgba(108, 99, 255, 0.35) !important;
// }

// .search-result-item:active {
//   background: rgba(108, 99, 255, 0.28) !important;
// }

// /* Avatar Circle */

// .search-result-avatar {
//   width: 36px;
//   height: 36px;
//   min-width: 36px;
//   border-radius: 50%;
//   background: #6c63ff;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 13px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   overflow: hidden;
// }

// /* Name Text */

// .search-result-name {
//   font-size: 14px;
//   font-weight: 500;
//   color: #ffffff !important;
//   margin: 0;
//   line-height: 1.4;
// }

// .search-result-sub {
//   font-size: 12px;
//   color: rgba(255, 255, 255, 0.55) !important;
//   margin: 0;
//   line-height: 1.3;
// }

// /* Empty State */

// .search-empty-state {
//   text-align: center;
//   padding: 32px 16px;
//   color: #aaa;
//   font-size: 14px;
// }

// .search-empty-state svg {
//   margin-bottom: 10px;
//   opacity: 0.35;
// }
// `;

// export const ProfileCard = ({
//   userName, totalKalams, joiningDate, Streak,
//   totalSher, totalGhazal, totalNazm,
//   profileLink, totalFollowers,
//   badges = []
// }) => {
//   const scrollRef = useRef(null);
//   const animRef = useRef(null);
//   const speed = 0.5;

//   const categories = [
//     { label: "Contributions in Shayri", value: totalSher },
//     { label: "Contributions in Ghazal", value: totalGhazal },
//     { label: "Contributions in Nazm", value: totalNazm },
//     { label: "Contributions in Matla", value: totalGhazal },
//     { label: "Contributions in Maqta", value: totalNazm },
//   ];

//   const earnedBadges = badges.filter(b => b.earned);
//   const lockedBadges = badges.filter(b => !b.earned);
//   const sortedBadges = [...earnedBadges, ...lockedBadges];
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const [userId, setUserId] = useState("")
//   const[isVisible, setIsVisible] = useState(false);
//   const userId = useRef("");
//   const [following, setFollowing] = useState(false)
//   const[status, setStatus] = useState("")
//   const[isOpen, setIsOpen] = useState(false);
//   const [followers, setFollowers] = useState([]);
//   // const [value, setValue] = useState("");
//   const[searchOpen, setSearchOpen] = useState(false)
//   const [searchResult, setSearchResult] = useState([]);
//   const Navigate = useNavigate();

//   const value = useRef(null);

//   const user = searchParams.get("userId")
//   let timeoutId;

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;
//     let pos = 0;
//     const step = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth / 2) pos = 0;
//       el.scrollLeft = pos;
//       animRef.current = requestAnimationFrame(step);
//     };
//     animRef.current = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(animRef.current);
    
//   }, []);

//   const pause = () => cancelAnimationFrame(animRef.current);
//   const resume = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     let pos = el.scrollLeft;
//     const step = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth / 2) pos = 0;
//       el.scrollLeft = pos;
//       animRef.current = requestAnimationFrame(step);
//     };
//     animRef.current = requestAnimationFrame(step);
//   };

//   useEffect(()=>{
//        axiosInstance
//     .get(`/api/userId`,{
//       withCredentials: true
//     }).then((response)=>{
//       // setUserId(response.data._id)
//       userId.current = response.data._id;
//       console.log("checking_fetched_UserId", response.data._id)

//       if(userId.current === user){
//         setIsVisible(false);
//       }else{
//         setIsVisible(true);
//       }

//     })
//   }, [])

//   useEffect(()=>{

//     if(userId.current !== user){

    
//     axiosInstance
//     .get(`/api/getFollowers?user=${user}`,{

//       withCredentials: true
//     }).then((response)=>{
//       console.log("follower_data", response.data)
//       if(response.data.found){
//         setFollowing(true);
//         setStatus("Following");
//         setFollowers(response.data.follower.followers)
//         console.log("all_followers", response.data.follower.followers)
//       }else{
//         setFollowing(false)
//       }
//     }).catch((error)=>{
//       console.error("error fetching follower", error)
//     })
//   }else{
//     ;
//   }
//   }, [])

//   const triggerFollow=()=>{
//     axiosInstance
//     .post('/api/follow',{
//       userId: user
//     },{
//       withCredentials: true
//     }).then((response)=>{
//       if(response.data.success){
//         setStatus("Following");
//         setFollowing(true)
//       }else{
//         ;
//       }
//     })
//   }

//   const triggerUnfollow=()=>{
    
//     axiosInstance
//     .post(`/api/unfollow?userId=${user}`, {
//       withCredentials: true
//     }).then((response)=>{
//       console.log(response.data)
//       if(response.data.success){
//         setFollowing("")
//       }
//     })
//   }

//   return (
//     <>
//       <style>{css}</style>
//       <div className="pp-wrap">
//         <div className="pp-card">
       

//           <div className="pp-noise" />

//           {/* ── SEARCH TRIGGER BUTTON ── */}
//           <div style={{position: 'absolute', top: '20px', right: '24px', zIndex: 10}}>
//             <button
//               style={{
//                 display: 'inline-flex', alignItems: 'center', gap: '8px',
//                 background: 'rgba(255,255,255,0.05)',
//                 border: '1px solid rgba(255,255,255,0.12)',
//                 borderRadius: '40px', padding: '9px 18px',
//                 cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//                 fontSize: '13px', fontWeight: '500',
//                 color: 'rgba(148,163,184,0.85)', letterSpacing: '0.03em',
//                 backdropFilter: 'blur(8px)', transition: 'all 0.2s'
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.background = 'rgba(99,102,241,0.15)';
//                 e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
//                 e.currentTarget.style.color = '#a5b4fc';
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
//                 e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
//                 e.currentTarget.style.color = 'rgba(148,163,184,0.85)';
//               }}
//               onClick={()=>setSearchOpen(true)}
//             >
//               <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
//                 <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//               <span>Search users</span>
//             </button>
//           </div>

//           {
//             //---------------------------------------------------------------------------------------------------------------->
//         //     <MyVerticallyCenteredModal isOpen={searchOpen} onClose={()=>setSearchOpen(false)} width={"1/2"} height={"1/2"}>

//         //       <br /><br />

//         //        <input className="w-40 items-start text-black" type="text"
           
//         //  onChange={(e)=>{
//         //   value.current = e.target.value
//         //   if (timeoutId){
//         //     if(!value) return
//         //     clearTimeout(timeoutId);
//         //      timeoutId = setTimeout(()=>{
//         //       axiosInstance
//         //       .post('/api/searchUser',{
//         //         query: value.current
//         //       }).then((response)=>{
//         //           (response.data.length === 0)? <h1>Sorry no users found</h1>:
//         //         console.log("deBounce_response", response.data);
//         //         setSearchResult(response.data);
//         //       })
//         //     }, 500)
//         //   }else{
//         //     // setValue(e.target.value)

//         //    value.current = e.target.value

//         //     timeoutId = setTimeout(()=>{
//         //       axiosInstance
//         //       .post('/api/searchUser',{
//         //         query: value.current
//         //       }).then((response)=>{
//         //           (response.data.length === 0)? <h1>Sorry no users found</h1>:
//         //         console.log("deBounce_response", response.data);
//         //         setSearchResult(response.data)
//         //       })
//         //     }, 500)

//         //   }
//         //  }}
//         //  />

//         //  <br /><br />

//         //  {
            
//         //   searchResult.map((item, i)=>(
//         //     <div key={i}>
//         //       <h1>
//         //      <button onClick={()=>{Navigate(`/profile?userId=${item._id}`);setSearchOpen(false); Navigate(0)}}>   {item.name} </button>
//         //       </h1>

//         //     </div>
//         //   ))
//         //  }


//         //     </MyVerticallyCenteredModal>

//         //----------------------------------------------------------------------------------------------------------------->


//           <MyVerticallyCenteredModal isOpen={searchOpen} onClose={()=>setSearchOpen(false)} width={"1/2"} height={"1/2"}>

//   <div style={{height: '100%', maxHeight: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
//     <div className="search-modal-body">

//       <div className="search-input-wrapper">
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search users..."

//           onChange={(e)=>{
//             value.current = e.target.value
//             if (timeoutId){
//               if(!value) return
//               clearTimeout(timeoutId);
//                timeoutId = setTimeout(()=>{
//                 axiosInstance
//                 .post('/api/searchUser',{
//                   query: value.current
//                 }).then((response)=>{
//                     (response.data.length === 0)? <h1>Sorry no users found</h1>:
//                   console.log("deBounce_response", response.data);
//                   setSearchResult(response.data);
//                 })
//               }, 500)
//             }else{
//               // setValue(e.target.value)

//              value.current = e.target.value

//               timeoutId = setTimeout(()=>{
//                 axiosInstance
//                 .post('/api/searchUser',{
//                   query: value.current
//                 }).then((response)=>{
//                     (response.data.length === 0)? <h1>Sorry no users found</h1>:
//                   console.log("deBounce_response", response.data);
//                   setSearchResult(response.data)
//                 })
//               }, 500)

//             }
//           }}
//         />
//       </div>

//       <div className="search-results-list">
//         {
//           searchResult.map((item, i)=>(
//             <button className="search-result-item" key={i} onClick={()=>{Navigate(`/profile?userId=${item._id}`);setSearchOpen(false); Navigate(0)}}>
//               <div className="search-result-avatar">
//                 {item.profilePic
//                   ? <img src={item.profilePic} alt={item.name} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
//                   : item.name?.charAt(0)
//                 }
//               </div>
//               <div>
//                 <p className="search-result-name">{item.name}</p>
//               </div>
//             </button>
//           ))
//         }
//       </div>

//     </div>
//   </div>

// </MyVerticallyCenteredModal>
//           }
        
//           <div className="pp-glow-tl" />
//           <div className="pp-glow-br" />

//           <div className="pp-content">

//             {/* ── HERO ── */}
//             <div className="pp-hero">

//               {/* 1. Avatar */}
//               <div className="pp-avatar-ring">
//                 {/* {(userId === user)?setIsVisible(false):setIsVisible(true)} */}
//                 <div className="pp-avatar-inner">
//                   <img src={profileLink} />
//                 </div>
//               </div>

//               {/* 2. Name + role tag — identity block */}
//               <div className="pp-name-block">
//                 <h1 className="pp-name">{userName}</h1>
//                 <span className="pp-tag"><span className="pp-dot" />Shayar</span>
//               </div>

//               {/* 3. Followers count + follow/unfollow — social action row */}
//               <div className="pp-social-row">
//                 {/* Followers pill */}
//                 {/* <div className="pp-followers-pill">
//                   <span className="pp-followers-pill-icon"> */}
//                     {/* person icon */}
//                     {/* <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <circle cx="8" cy="5" r="3" fill="#818cf8"/>
//                       <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"/>
//                     </svg>
//                   </span>
//                   <span className="pp-followers-pill-count">{totalFollowers}</span>
//                   <span className="pp-followers-pill-label">Followers</span>
//                 </div> */}

//                 {/* Follow button */}
//                 {isVisible && !following && (
//                   <button className="pp-btn-follow" onClick={triggerFollow}>
//                     {/* plus icon */}
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M7 1v12M1 7h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                     Follow
//                   </button>
//                 )}

//                 {/* Unfollow button */}
//                 {following && (
//                   <button className="pp-btn-unfollow" onClick={triggerUnfollow}>
//                     {/* checkmark icon */}
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M2 7l4 4 6-6" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                     Following
//                   </button>
//                 )}
//               </div>

//               {/* 4. Stats grid */}
//               <div className="pp-stats-grid">
//                  <button onClick={()=>setIsOpen(true)}>
//                 <div className="pp-stat-cell">
//                   <span className="pp-stat-num">{totalFollowers}</span>
//                  <span className="pp-stat-label">Followers</span>
//                 </div>
//                 </button>
//                 <div className="pp-stat-divider" />
//                 <div className="pp-stat-cell">
//                   <span className="pp-stat-num">{totalKalams}</span>
//                   <span className="pp-stat-label">Total Kalams</span>
//                 </div>
//               </div>
//               {
//                 console.log("see isVisible", isVisible)
//               }

//               {/* 5. Meta — joined date + streak */}
//               {(joiningDate || Streak) && (
//                 <div className="pp-meta-row">
//                   {joiningDate && (
//                     <span style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "rgba(148,163,184,0.7)" }}>
//                       Joined {joiningDate}
//                     </span>
//                   )}
//                   {Streak && (
//                     <div style={{
//                       display: "flex", alignItems: "center", gap: 10,
//                       background: "rgba(251,146,60,0.08)",
//                       border: "1px solid rgba(251,146,60,0.2)",
//                       borderRadius: 14, padding: "10px 18px",
//                     }}>
//                       <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.5 1C10.5 1 11 5.5 8.5 8C6 10.5 3 10 3 10C3 10 3.5 13 6 14.5C5 15.5 4 17 4 19C4 19 6 17.5 8 17.5C10 17.5 11.5 19 11.5 21C11.5 21 14 19 14 16C14 14 12.5 12.5 12.5 12.5C12.5 12.5 16 11 16 7C16 4 13.5 2 10.5 1Z" fill="url(#flameGrad)" />
//                         <path d="M8.5 13C8.5 13 9 14.5 9 16C9 17.5 8 18.5 8 18.5C8 18.5 10.5 18 10.5 15.5C10.5 14 9.5 13 8.5 13Z" fill="rgba(254,215,170,0.6)" />
//                         <defs>
//                           <linearGradient id="flameGrad" x1="9" y1="1" x2="9" y2="21" gradientUnits="userSpaceOnUse">
//                             <stop offset="0%" stopColor="#fb923c" />
//                             <stop offset="50%" stopColor="#f97316" />
//                             <stop offset="100%" stopColor="#ea580c" />
//                           </linearGradient>
//                         </defs>
//                       </svg>
//                       <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                         <span style={{ fontSize: 16, fontWeight: 600, color: "#fed7aa", lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>
//                           {Streak}
//                         </span>
//                         <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(251,146,60,0.55)" }}>
//                           day streak
//                         </span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//             </div>

//             {/* ── BADGES — horizontal scroll row ── */}
//             {sortedBadges.length > 0 && (
//               <div className="pp-badges-section">
//                 <div className="pp-section-header">
//                   <span className="pp-section-title">
//                     Badges &nbsp;·&nbsp; {earnedBadges.length} of {badges.length} earned
//                   </span>
//                   <div className="pp-section-line" />
//                 </div>

//                 <div className="pp-badges-scroll">
//                   <div className="pp-badges-row">
//                     {sortedBadges.map((badge, i) => (
//                       <div key={i} className="pp-hex-wrap">
//                         <div className={`pp-hex-outer ${badge.earned ? "earned" : "locked"}`}>
//                           <div className={`pp-hex-inner ${badge.earned ? "earned" : "locked"}`}>
//                             {badge.icon}
//                           </div>
//                         </div>
//                         <span className={`pp-hex-name ${badge.earned ? "" : "locked"}`}>
//                           {badge.name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ── TICKER ── */}
//             <div
//               className="pp-ticker-wrap"
//               ref={scrollRef}
//               onMouseEnter={pause}
//               onMouseLeave={resume}
//             >
//               <div className="pp-ticker-track">
//                 {[0, 1].map((d) => (
//                   <div key={d} style={{ display: "flex", flexShrink: 0 }}>
//                     {categories.map((cat, i) => (
//                       <div key={i} className="pp-ticker-item">
//                         <span className="pp-ticker-num">{cat.value}</span>
//                         <span className="pp-ticker-label">{cat.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//         {
//           <MyVerticallyCenteredModal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
          
          
//           {
//             followers.map((item, i)=>(

//               <div key={i}>
//                 <h1>
//                   {item.follower}
//                 </h1>

//               </div>
//             ))
//           }
          
//           </MyVerticallyCenteredModal>
//         }
//       </div>
//     </>
//   );
// };



//-------------------------------------------------------------------------------------------------------------->

// import axiosInstance from "@/Apis/axiosInstance";
// import { useEffect, useRef, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { MyVerticallyCenteredModal } from "./Modals/MyModal";

// const css = `
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

//   .pp-wrap {
//     width: 100%; min-height: 100vh;
//     background: #0a0510;
//     font-family: 'DM Sans', sans-serif;
//   }
//   .pp-card {
//     width: 100%; min-height: 100vh;
//     background: radial-gradient(120% 100% at 50% -10%, #1b0f2e 0%, #12081d 45%, #0a0510 100%);
//     display: flex; flex-direction: column;
//     position: relative; overflow: hidden;
//   }
//   .pp-noise {
//     position: absolute; inset: 0; pointer-events: none; z-index: 0;
//     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
//     background-size: 180px; opacity: 0.35;
//   }
//   .pp-glow-tl {
//     position: absolute; width: 520px; height: 520px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(168,85,247,0.16) 0%, transparent 70%);
//     top: -200px; left: -180px; pointer-events: none; z-index: 0;
//   }
//   .pp-glow-br {
//     position: absolute; width: 420px; height: 420px; border-radius: 50%;
//     background: radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 70%);
//     bottom: -120px; right: -100px; pointer-events: none; z-index: 0;
//   }
//   .pp-content { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; }

//   /* ── HERO ── */
//   .pp-hero {
//     display: flex; flex-direction: column; align-items: center;
//     padding: 52px 40px 32px; gap: 0;
//   }

//   /* Avatar */
//   .pp-avatar-ring {
//     width: 116px; height: 116px; border-radius: 50%; padding: 3px;
//     background: linear-gradient(135deg, #f0c85a, #a855f7, #7c3aed, #f0c85a);
//     box-shadow: 0 0 24px rgba(168,85,247,0.35), 0 0 12px rgba(240,200,90,0.15);
//     margin-bottom: 20px;
//   }
//   .pp-avatar-inner {
//     width: 100%; height: 100%; border-radius: 50%;
//     background: #150c24; padding: 3px;
//     display: flex; align-items: center; justify-content: center;
//   }
//   .pp-avatar-inner img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }

//   /* Name block — sits directly under avatar */
//   .pp-name-block {
//     display: flex; flex-direction: column; align-items: center; gap: 9px;
//     margin-bottom: 18px;
//   }
//   .pp-name {
//     font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 700;
//     background: linear-gradient(135deg, #f6e3a1 0%, #f0c85a 45%, #d9a441 100%);
//     -webkit-background-clip: text; background-clip: text; color: transparent;
//     letter-spacing: -0.01em; margin: 0; text-align: center;
//     line-height: 1.1;
//   }
//   .pp-tag {
//     display: inline-flex; align-items: center; gap: 6px;
//     background: rgba(168,85,247,0.15); border: 1px solid rgba(168,85,247,0.35);
//     border-radius: 20px; padding: 4px 14px;
//     font-size: 11px; font-weight: 500; color: #c9a4fb;
//     letter-spacing: 0.1em; text-transform: uppercase;
//   }
//   .pp-dot { width: 6px; height: 6px; border-radius: 50%; background: #d4af37; }

//   /* Follow row — followers pill + button sit on one line, centered */
//   .pp-social-row {
//     display: flex; align-items: center; justify-content: center; gap: 10px;
//     margin-bottom: 24px;
//   }

//   /* Followers pill */
//   .pp-followers-pill {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(212,175,55,0.18);
//     border-radius: 40px; padding: 8px 18px;
//     font-size: 13px; font-weight: 500; color: #b9a8cf;
//     letter-spacing: 0.01em;
//   }
//   .pp-followers-pill-icon {
//     display: flex; align-items: center; justify-content: center;
//     width: 22px; height: 22px; border-radius: 50%;
//     background: rgba(168,85,247,0.2);
//   }
//   .pp-followers-pill-count {
//     font-family: 'Playfair Display', serif;
//     font-size: 16px; font-weight: 700; color: #f0c85a;
//     line-height: 1;
//   }
//   .pp-followers-pill-label {
//     font-size: 11px; color: rgba(201,164,251,0.55);
//     letter-spacing: 0.1em; text-transform: uppercase;
//   }

//   /* Follow button */
//   .pp-btn-follow {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: linear-gradient(135deg, #7c3aed 0%, #a855f7 55%, #d4af37 130%);
//     border: none; border-radius: 40px;
//     padding: 10px 22px; cursor: pointer;
//     font-family: 'DM Sans', sans-serif;
//     font-size: 13px; font-weight: 600; color: #fff;
//     letter-spacing: 0.04em;
//     box-shadow: 0 0 18px rgba(168,85,247,0.45), 0 2px 8px rgba(0,0,0,0.45);
//     transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
//     position: relative; overflow: hidden;
//   }
//   .pp-btn-follow::before {
//     content: ''; position: absolute; inset: 0;
//     background: linear-gradient(135deg, rgba(255,255,255,0.14), transparent);
//     border-radius: inherit;
//   }
//   .pp-btn-follow:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 0 28px rgba(168,85,247,0.65), 0 4px 16px rgba(0,0,0,0.55);
//     filter: brightness(1.08);
//   }
//   .pp-btn-follow:active { transform: translateY(0); }

//   /* Unfollow button */
//   .pp-btn-unfollow {
//     display: inline-flex; align-items: center; gap: 8px;
//     background: rgba(255,255,255,0.04);
//     border: 1px solid rgba(212,175,55,0.35);
//     border-radius: 40px; padding: 10px 22px; cursor: pointer;
//     font-family: 'DM Sans', sans-serif;
//     font-size: 13px; font-weight: 500; color: #f0c85a;
//     letter-spacing: 0.04em;
//     transition: background 0.18s, border-color 0.18s, transform 0.18s, color 0.18s;
//   }
//   .pp-btn-unfollow:hover {
//     background: rgba(212,175,55,0.08);
//     border-color: rgba(168,85,247,0.45);
//     color: #d9a4fb;
//     transform: translateY(-1px);
//   }
//   .pp-btn-unfollow:active { transform: translateY(0); }

//   /* Stats grid */
//   .pp-stats-grid {
//     display: grid; grid-template-columns: 1fr 1px 1fr;
//     width: 100%; max-width: 360px;
//     background: rgba(168,85,247,0.05); border: 1px solid rgba(212,175,55,0.16);
//     border-radius: 16px; overflow: hidden;
//     margin-bottom: 20px;
//   }
//   .pp-stat-cell {
//     display: flex; flex-direction: column; align-items: center; padding: 22px 16px; gap: 4px;
//     transition: background 0.2s;
//   }
//   .pp-stat-cell:hover { background: rgba(212,175,55,0.05); }
//   .pp-stat-divider { background: linear-gradient(180deg, transparent, rgba(212,175,55,0.25), transparent); }
//   .pp-stat-num {
//     font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 700;
//     color: #f6e3a1; line-height: 1;
//   }
//   .pp-stat-label { font-size: 11px; color: rgba(201,164,251,0.6); letter-spacing: 0.12em; text-transform: uppercase; }

//   /* Meta row — joined + streak sit together */
//   .pp-meta-row {
//     display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
//   }

//   /* ── BADGES SECTION ── */
//   .pp-badges-section {
//     padding: 28px 28px 0;
//     flex: 1;
//     display: flex; flex-direction: column; gap: 0;
//   }
//   .pp-section-header {
//     display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
//   }
//   .pp-section-title {
//     font-size: 11px; font-weight: 500; color: rgba(212,175,55,0.55);
//     letter-spacing: 0.16em; text-transform: uppercase; white-space: nowrap;
//   }
//   .pp-section-line {
//     flex: 1; height: 1px;
//     background: linear-gradient(90deg, rgba(212,175,55,0.22), transparent);
//   }

//   .pp-badges-scroll {
//     overflow-x: auto; overflow-y: visible;
//     padding-bottom: 20px;
//     scrollbar-width: none;
//   }
//   .pp-badges-scroll::-webkit-scrollbar { display: none; }

//   .pp-badges-row {
//     display: flex; gap: 20px;
//     padding: 8px 4px 4px;
//     width: max-content;
//   }

//   .pp-hex-wrap {
//     display: flex; flex-direction: column; align-items: center; gap: 8px;
//     width: 76px; cursor: default; flex-shrink: 0;
//     transition: transform 0.2s;
//   }
//   .pp-hex-wrap:hover { transform: translateY(-4px); }

//   .pp-hex-outer {
//     width: 72px; height: 80px;
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//     display: flex; align-items: center; justify-content: center;
//   }
//   .pp-hex-outer.earned {
//     background: linear-gradient(160deg, #f6e3a1, #d4af37, #7c3aed);
//     filter: drop-shadow(0 0 8px rgba(212,175,55,0.55)) drop-shadow(0 0 18px rgba(168,85,247,0.3));
//   }
//   .pp-hex-outer.locked {
//     background: rgba(255,255,255,0.05);
//     filter: none;
//   }
//   .pp-hex-inner {
//     width: 64px; height: 72px;
//     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
//     display: flex; align-items: center; justify-content: center;
//     font-size: 24px; line-height: 1;
//   }
//   .pp-hex-inner.earned { background: #1b0f2e; }
//   .pp-hex-inner.locked { background: #100a19; filter: grayscale(1); opacity: 0.28; }

//   .pp-hex-name {
//     font-size: 10px; font-weight: 500; color: #d8c8ee;
//     text-align: center; line-height: 1.3; max-width: 76px;
//   }
//   .pp-hex-name.locked { color: rgba(201,164,251,0.22); }

//   /* ── TICKER ── */
//   .pp-ticker-wrap {
//     overflow: hidden; cursor: default; user-select: none;
//     height: 76px; border-top: 1px solid rgba(212,175,55,0.14);
//     margin-top: auto;
//   }
//   .pp-ticker-track { display: flex; height: 100%; }
//   .pp-ticker-item {
//     display: flex; flex-direction: column; align-items: center; justify-content: center;
//     min-width: 175px; height: 100%; padding: 0 20px; flex-shrink: 0;
//     border-right: 1px solid rgba(212,175,55,0.08); gap: 3px;
//     transition: background 0.2s;
//   }
//   .pp-ticker-item:hover { background: rgba(168,85,247,0.05); }
//   .pp-ticker-num {
//     font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700;
//     color: #f0c85a; line-height: 1;
//   }
//   .pp-ticker-label {
//     font-size: 10px; color: rgba(201,164,251,0.45);
//     letter-spacing: 0.12em; text-transform: uppercase; text-align: center;
//   }

//   /* Search Modal - Professional Styling */

// .search-modal-body {
//   padding: 20px 24px 24px;
//   display: flex;
//   flex-direction: column;
//   gap: 0;
//   overflow: hidden;
//   max-height: 100%;
// }

// .search-input-wrapper {
//   position: relative;
//   margin-bottom: 16px;
// }

// .search-input-wrapper::before {
//   content: "";
//   position: absolute;
//   left: 12px;
//   top: 50%;
//   transform: translateY(-50%);
//   width: 16px;
//   height: 16px;
//   background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 24 24'%3E%3Ccircle cx='11' cy='11' r='8' stroke='%23a855f7' stroke-width='2'/%3E%3Cpath d='M21 21l-4.35-4.35' stroke='%23a855f7' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
//   background-repeat: no-repeat;
//   background-size: contain;
//   pointer-events: none;
//   opacity: 0.7;
// }

// .search-input {
//   width: 100%;
//   height: 42px;
//   padding: 0 14px 0 40px;
//   font-size: 14px;
//   color: #f1e9d8 !important;
//   background: #1b0f2e !important;
//   border: 1px solid rgba(212,175,55,0.3) !important;
//   border-radius: 10px;
//   outline: none;
//   transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
//   box-sizing: border-box;
// }

// .search-input:focus {
//   border-color: #d4af37 !important;
//   background: #1b0f2e;
//   box-shadow: 0 0 0 3px rgba(168,85,247,0.25) !important;
// }

// .search-input::placeholder {
//   color: rgba(201,164,251,0.4);
//   font-size: 14px;
// }

// /* Results List */

// .search-results-list {
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
//   max-height: 240px;
//   overflow-y: auto;
//   overflow-x: hidden;
//   padding-right: 2px;
// }

// .search-results-list::-webkit-scrollbar {
//   width: 4px;
// }

// .search-results-list::-webkit-scrollbar-track {
//   background: transparent;
// }

// .search-results-list::-webkit-scrollbar-thumb {
//   background: rgba(212,175,55,0.4);
//   border-radius: 4px;
// }

// /* Each Result Row */

// .search-result-item {
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   padding: 10px 12px;
//   border-radius: 8px;
//   border: 1px solid transparent;
//   cursor: pointer;
//   text-decoration: none;
//   transition: background 0.15s, border-color 0.15s;
//   background: transparent;
//   width: 100%;
//   text-align: left;
// }

// .search-result-item:hover {
//   background: rgba(168,85,247,0.18) !important;
//   border-color: rgba(212,175,55,0.35) !important;
// }

// .search-result-item:active {
//   background: rgba(168,85,247,0.28) !important;
// }

// /* Avatar Circle */

// .search-result-avatar {
//   width: 36px;
//   height: 36px;
//   min-width: 36px;
//   border-radius: 50%;
//   background: linear-gradient(135deg, #a855f7, #d4af37);
//   color: #150c24;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 13px;
//   font-weight: 700;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   overflow: hidden;
// }

// /* Name Text */

// .search-result-name {
//   font-size: 14px;
//   font-weight: 500;
//   color: #f1e9d8 !important;
//   margin: 0;
//   line-height: 1.4;
// }

// .search-result-sub {
//   font-size: 12px;
//   color: rgba(241, 233, 216, 0.55) !important;
//   margin: 0;
//   line-height: 1.3;
// }

// /* Empty State */

// .search-empty-state {
//   text-align: center;
//   padding: 32px 16px;
//   color: rgba(201,164,251,0.5);
//   font-size: 14px;
// }

// .search-empty-state svg {
//   margin-bottom: 10px;
//   opacity: 0.35;
// }
// `;

// export const ProfileCard = ({
//   userName, totalKalams, joiningDate, Streak,
//   totalSher, totalGhazal, totalNazm,
//   profileLink, totalFollowers,
//   badges = []
// }) => {
//   const scrollRef = useRef(null);
//   const animRef = useRef(null);
//   const speed = 0.5;

//   const categories = [
//     { label: "Contributions in Shayri", value: totalSher },
//     { label: "Contributions in Ghazal", value: totalGhazal },
//     { label: "Contributions in Nazm", value: totalNazm },
//     { label: "Contributions in Matla", value: totalGhazal },
//     { label: "Contributions in Maqta", value: totalNazm },
//   ];

//   const earnedBadges = badges.filter(b => b.earned);
//   const lockedBadges = badges.filter(b => !b.earned);
//   const sortedBadges = [...earnedBadges, ...lockedBadges];
//   const [searchParams, setSearchParams] = useSearchParams();
//   // const [userId, setUserId] = useState("")
//   const[isVisible, setIsVisible] = useState(false);
//   const userId = useRef("");
//   const [following, setFollowing] = useState(false)
//   const[status, setStatus] = useState("")
//   const[isOpen, setIsOpen] = useState(false);
//   const [followers, setFollowers] = useState([]);
//   // const [value, setValue] = useState("");
//   const[searchOpen, setSearchOpen] = useState(false)
//   const [searchResult, setSearchResult] = useState([]);
//   const Navigate = useNavigate();

//   const value = useRef(null);

//   const user = searchParams.get("userId")
//   let timeoutId;

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;
//     let pos = 0;
//     const step = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth / 2) pos = 0;
//       el.scrollLeft = pos;
//       animRef.current = requestAnimationFrame(step);
//     };
//     animRef.current = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(animRef.current);
    
//   }, []);

//   const pause = () => cancelAnimationFrame(animRef.current);
//   const resume = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     let pos = el.scrollLeft;
//     const step = () => {
//       pos += speed;
//       if (pos >= el.scrollWidth / 2) pos = 0;
//       el.scrollLeft = pos;
//       animRef.current = requestAnimationFrame(step);
//     };
//     animRef.current = requestAnimationFrame(step);
//   };

//   useEffect(()=>{
//        axiosInstance
//     .get(`/api/userId`,{
//       withCredentials: true
//     }).then((response)=>{
//       // setUserId(response.data._id)
//       userId.current = response.data._id;
//       console.log("checking_fetched_UserId", response.data._id)

//       if(userId.current === user){
//         setIsVisible(false);
//       }else{
//         setIsVisible(true);
//       }

//     })
//   }, [])

//   useEffect(()=>{

//     if(userId.current !== user){

    
//     axiosInstance
//     .get(`/api/getFollowers?user=${user}`,{

//       withCredentials: true
//     }).then((response)=>{
//       console.log("follower_data", response.data)
//       if(response.data.found){
//         setFollowing(true);
//         setStatus("Following");
//         setFollowers(response.data.follower.followers)
//         console.log("all_followers", response.data.follower.followers)
//       }else{
//         setFollowing(false)
//       }
//     }).catch((error)=>{
//       console.error("error fetching follower", error)
//     })
//   }else{
//     ;
//   }
//   }, [])

//   const triggerFollow=()=>{
//     axiosInstance
//     .post('/api/follow',{
//       userId: user
//     },{
//       withCredentials: true
//     }).then((response)=>{
//       if(response.data.success){
//         setStatus("Following");
//         setFollowing(true)
//       }else{
//         ;
//       }
//     })
//   }

//   const triggerUnfollow=()=>{
    
//     axiosInstance
//     .post(`/api/unfollow?userId=${user}`, {
//       withCredentials: true
//     }).then((response)=>{
//       console.log(response.data)
//       if(response.data.success){
//         setFollowing("")
//       }
//     })
//   }

//   return (
//     <>
//       <style>{css}</style>
//       <div className="pp-wrap">
//         <div className="pp-card">
       

//           <div className="pp-noise" />

//           {/* ── SEARCH TRIGGER BUTTON ── */}
//           <div style={{position: 'absolute', top: '20px', right: '24px', zIndex: 10}}>
//             <button
//               style={{
//                 display: 'inline-flex', alignItems: 'center', gap: '8px',
//                 background: 'rgba(255,255,255,0.04)',
//                 border: '1px solid rgba(212,175,55,0.25)',
//                 borderRadius: '40px', padding: '9px 18px',
//                 cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
//                 fontSize: '13px', fontWeight: '500',
//                 color: 'rgba(201,164,251,0.85)', letterSpacing: '0.03em',
//                 backdropFilter: 'blur(8px)', transition: 'all 0.2s'
//               }}
//               onMouseEnter={e => {
//                 e.currentTarget.style.background = 'rgba(168,85,247,0.15)';
//                 e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)';
//                 e.currentTarget.style.color = '#f0c85a';
//               }}
//               onMouseLeave={e => {
//                 e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
//                 e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)';
//                 e.currentTarget.style.color = 'rgba(201,164,251,0.85)';
//               }}
//               onClick={()=>setSearchOpen(true)}
//             >
//               <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
//                 <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//               </svg>
//               <span>Search users</span>
//             </button>
//           </div>

//           {
//             //---------------------------------------------------------------------------------------------------------------->
//         //     <MyVerticallyCenteredModal isOpen={searchOpen} onClose={()=>setSearchOpen(false)} width={"1/2"} height={"1/2"}>

//         //       <br /><br />

//         //        <input className="w-40 items-start text-black" type="text"
           
//         //  onChange={(e)=>{
//         //   value.current = e.target.value
//         //   if (timeoutId){
//         //     if(!value) return
//         //     clearTimeout(timeoutId);
//         //      timeoutId = setTimeout(()=>{
//         //       axiosInstance
//         //       .post('/api/searchUser',{
//         //         query: value.current
//         //       }).then((response)=>{
//         //           (response.data.length === 0)? <h1>Sorry no users found</h1>:
//         //         console.log("deBounce_response", response.data);
//         //         setSearchResult(response.data);
//         //       })
//         //     }, 500)
//         //   }else{
//         //     // setValue(e.target.value)

//         //    value.current = e.target.value

//         //     timeoutId = setTimeout(()=>{
//         //       axiosInstance
//         //       .post('/api/searchUser',{
//         //         query: value.current
//         //       }).then((response)=>{
//         //           (response.data.length === 0)? <h1>Sorry no users found</h1>:
//         //         console.log("deBounce_response", response.data);
//         //         setSearchResult(response.data)
//         //       })
//         //     }, 500)

//         //   }
//         //  }}
//         //  />

//         //  <br /><br />

//         //  {
            
//         //   searchResult.map((item, i)=>(
//         //     <div key={i}>
//         //       <h1>
//         //      <button onClick={()=>{Navigate(`/profile?userId=${item._id}`);setSearchOpen(false); Navigate(0)}}>   {item.name} </button>
//         //       </h1>

//         //     </div>
//         //   ))
//         //  }


//         //     </MyVerticallyCenteredModal>

//         //----------------------------------------------------------------------------------------------------------------->


//           <MyVerticallyCenteredModal isOpen={searchOpen} onClose={()=>setSearchOpen(false)} width={"1/2"} height={"1/2"}>

//   <div style={{height: '100%', maxHeight: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column'}}>
//     <div className="search-modal-body">

//       <div className="search-input-wrapper">
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search users..."

//           onChange={(e)=>{
//             value.current = e.target.value
//             if (timeoutId){
//               if(!value) return
//               clearTimeout(timeoutId);
//                timeoutId = setTimeout(()=>{
//                 axiosInstance
//                 .post('/api/searchUser',{
//                   query: value.current
//                 }).then((response)=>{
//                     (response.data.length === 0)? <h1>Sorry no users found</h1>:
//                   console.log("deBounce_response", response.data);
//                   setSearchResult(response.data);
//                 })
//               }, 500)
//             }else{
//               // setValue(e.target.value)

//              value.current = e.target.value

//               timeoutId = setTimeout(()=>{
//                 axiosInstance
//                 .post('/api/searchUser',{
//                   query: value.current
//                 }).then((response)=>{
//                     (response.data.length === 0)? <h1>Sorry no users found</h1>:
//                   console.log("deBounce_response", response.data);
//                   setSearchResult(response.data)
//                 })
//               }, 500)

//             }
//           }}
//         />
//       </div>

//       <div className="search-results-list">
//         {
//           searchResult.map((item, i)=>(
//             <button className="search-result-item" key={i} onClick={()=>{Navigate(`/profile?userId=${item._id}`);setSearchOpen(false); Navigate(0)}}>
//               <div className="search-result-avatar">
//                 {item.profilePic
//                   ? <img src={item.profilePic} alt={item.name} style={{width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
//                   : item.name?.charAt(0)
//                 }
//               </div>
//               <div>
//                 <p className="search-result-name">{item.name}</p>
//               </div>
//             </button>
//           ))
//         }
//       </div>

//     </div>
//   </div>

// </MyVerticallyCenteredModal>
//           }
        
//           <div className="pp-glow-tl" />
//           <div className="pp-glow-br" />

//           <div className="pp-content">

//             {/* ── HERO ── */}
//             <div className="pp-hero">

//               {/* 1. Avatar */}
//               <div className="pp-avatar-ring">
//                 {/* {(userId === user)?setIsVisible(false):setIsVisible(true)} */}
//                 <div className="pp-avatar-inner">
//                   <img src={profileLink} />
//                 </div>
//               </div>

//               {/* 2. Name + role tag — identity block */}
//               <div className="pp-name-block">
//                 <h1 className="pp-name">{userName}</h1>
//                 <span className="pp-tag"><span className="pp-dot" />Shayar</span>
//               </div>

//               {/* 3. Followers count + follow/unfollow — social action row */}
//               <div className="pp-social-row">
//                 {/* Followers pill */}
//                 {/* <div className="pp-followers-pill">
//                   <span className="pp-followers-pill-icon"> */}
//                     {/* person icon */}
//                     {/* <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <circle cx="8" cy="5" r="3" fill="#818cf8"/>
//                       <path d="M2 14c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round"/>
//                     </svg>
//                   </span>
//                   <span className="pp-followers-pill-count">{totalFollowers}</span>
//                   <span className="pp-followers-pill-label">Followers</span>
//                 </div> */}

//                 {/* Follow button */}
//                 {isVisible && !following && (
//                   <button className="pp-btn-follow" onClick={triggerFollow}>
//                     {/* plus icon */}
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M7 1v12M1 7h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
//                     </svg>
//                     Follow
//                   </button>
//                 )}

//                 {/* Unfollow button */}
//                 {following && (
//                   <button className="pp-btn-unfollow" onClick={triggerUnfollow}>
//                     {/* checkmark icon */}
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M2 7l4 4 6-6" stroke="#f0c85a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                     Following
//                   </button>
//                 )}
//               </div>

//               {/* 4. Stats grid */}
//               <div className="pp-stats-grid">
//                  <button onClick={()=>setIsOpen(true)}>
//                 <div className="pp-stat-cell">
//                   <span className="pp-stat-num">{totalFollowers}</span>
//                  <span className="pp-stat-label">Followers</span>
//                 </div>
//                 </button>
//                 <div className="pp-stat-divider" />
//                 <div className="pp-stat-cell">
//                   <span className="pp-stat-num">{totalKalams}</span>
//                   <span className="pp-stat-label">Total Kalams</span>
//                 </div>
//               </div>
//               {
//                 console.log("see isVisible", isVisible)
//               }

//               {/* 5. Meta — joined date + streak */}
//               {(joiningDate || Streak) && (
//                 <div className="pp-meta-row">
//                   {joiningDate && (
//                     <span style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "rgba(201,164,251,0.75)" }}>
//                       Joined {joiningDate}
//                     </span>
//                   )}
//                   {Streak && (
//                     <div style={{
//                       display: "flex", alignItems: "center", gap: 10,
//                       background: "rgba(212,175,55,0.08)",
//                       border: "1px solid rgba(212,175,55,0.25)",
//                       borderRadius: 14, padding: "10px 18px",
//                     }}>
//                       <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.5 1C10.5 1 11 5.5 8.5 8C6 10.5 3 10 3 10C3 10 3.5 13 6 14.5C5 15.5 4 17 4 19C4 19 6 17.5 8 17.5C10 17.5 11.5 19 11.5 21C11.5 21 14 19 14 16C14 14 12.5 12.5 12.5 12.5C12.5 12.5 16 11 16 7C16 4 13.5 2 10.5 1Z" fill="url(#flameGrad)" />
//                         <path d="M8.5 13C8.5 13 9 14.5 9 16C9 17.5 8 18.5 8 18.5C8 18.5 10.5 18 10.5 15.5C10.5 14 9.5 13 8.5 13Z" fill="rgba(240,232,200,0.65)" />
//                         <defs>
//                           <linearGradient id="flameGrad" x1="9" y1="1" x2="9" y2="21" gradientUnits="userSpaceOnUse">
//                             <stop offset="0%" stopColor="#f6e3a1" />
//                             <stop offset="50%" stopColor="#d4af37" />
//                             <stop offset="100%" stopColor="#a855f7" />
//                           </linearGradient>
//                         </defs>
//                       </svg>
//                       <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
//                         <span style={{ fontSize: 16, fontWeight: 600, color: "#f6e3a1", lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>
//                           {Streak}
//                         </span>
//                         <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(212,175,55,0.6)" }}>
//                           day streak
//                         </span>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//             </div>

//             {/* ── BADGES — horizontal scroll row ── */}
//             {sortedBadges.length > 0 && (
//               <div className="pp-badges-section">
//                 <div className="pp-section-header">
//                   <span className="pp-section-title">
//                     Badges &nbsp;·&nbsp; {earnedBadges.length} of {badges.length} earned
//                   </span>
//                   <div className="pp-section-line" />
//                 </div>

//                 <div className="pp-badges-scroll">
//                   <div className="pp-badges-row">
//                     {sortedBadges.map((badge, i) => (
//                       <div key={i} className="pp-hex-wrap">
//                         <div className={`pp-hex-outer ${badge.earned ? "earned" : "locked"}`}>
//                           <div className={`pp-hex-inner ${badge.earned ? "earned" : "locked"}`}>
//                             {badge.icon}
//                           </div>
//                         </div>
//                         <span className={`pp-hex-name ${badge.earned ? "" : "locked"}`}>
//                           {badge.name}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* ── TICKER ── */}
//             <div
//               className="pp-ticker-wrap"
//               ref={scrollRef}
//               onMouseEnter={pause}
//               onMouseLeave={resume}
//             >
//               <div className="pp-ticker-track">
//                 {[0, 1].map((d) => (
//                   <div key={d} style={{ display: "flex", flexShrink: 0 }}>
//                     {categories.map((cat, i) => (
//                       <div key={i} className="pp-ticker-item">
//                         <span className="pp-ticker-num">{cat.value}</span>
//                         <span className="pp-ticker-label">{cat.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//         {
//           <MyVerticallyCenteredModal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
          
          
//           {
//             followers.map((item, i)=>(

//               <div key={i}>
//                 <h1>
//                   {item.follower}
//                 </h1>

//               </div>
//             ))
//           }
          
//           </MyVerticallyCenteredModal>
//         }
//       </div>
//     </>
//   );
// };

//------------------------------------------------------------------------------------------------------------------------------>
import { useState, useEffect, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { useNavigate } from "react-router-dom";
import { AlbumsPanel } from "../new"; // adjust path to wherever profileAlbums.jsx lives;
import { useSearchParams } from "react-router-dom";
import { Edit } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Fonts + Material Symbols — injected once, so this file can be     */
/*  dropped in without editing index.html.                            */
/* ------------------------------------------------------------------ */
const FONT_LINKS = [
  {
    id: "poet-profile-fonts",
    href:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
  },
  {
    id: "poet-profile-symbols",
    href:
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
  },
];

function useInjectFonts() {
  useEffect(() => {
    FONT_LINKS.forEach(({ id, href }) => {
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);
}

/* ------------------------------------------------------------------ */
/*  Small presentational helpers                                      */
/* ------------------------------------------------------------------ */

const Icon = ({ name, className = "", filled = false }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
  >
    {name}
  </span>
);

function initialsFromName(name = "") {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join("") || "?"
  );
}

function yearsSince(dateString) {
  if (!dateString) return null;
  const then = new Date(dateString);
  if (Number.isNaN(then.getTime())) return null;
  const years = (Date.now() - then.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(0, Math.floor(years));
}

function formatJoinDate(dateString) {
  if (!dateString) return null;
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

/* ------------------------------------------------------------------ */
/*  Header search — wraps onSearchUser / onSelectSearchResult         */
/* ------------------------------------------------------------------ */

function HeaderSearch({ onSearchUser, onSelectSearchResult }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!query.trim() || !onSearchUser) {
      setResults([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    const timer = setTimeout(() => {
      Promise.resolve(onSearchUser(query))
        .then((data) => {
          if (!cancelled) setResults(Array.isArray(data) ? data : data?.users || []);
        })
        .catch(() => {
          if (!cancelled) setResults([]);
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, 300);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query, onSearchUser]);

  return (
    <div className="relative" ref={boxRef}>
      <Icon
        name="search"
        className="!text-[20px] text-[#d0c5b0] hover:text-[#ffe6ac] cursor-pointer transition-colors"
      />
      <button
        aria-label="Search poets"
        onClick={() => setOpen((v) => !v)}
        className="absolute inset-0 opacity-0"
      />
      {open && (
        <div className="absolute right-0 top-10 w-64 sm:w-72 max-w-[88vw] rounded-2xl overflow-hidden bg-[rgba(18,8,29,0.95)] backdrop-blur-xl border border-[rgba(240,200,90,0.2)] shadow-2xl z-50">
          <div className="p-3 border-b border-[rgba(240,200,90,0.1)]">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search poets…"
              className="w-full bg-[#17111d] text-[#ebdef1] placeholder-[#99907d] text-sm rounded-lg px-3 py-2 outline-none border border-[rgba(240,200,90,0.15)] focus:border-[#ffe6ac]/50"
            />
          </div>
          <div className="max-h-64 overflow-y-auto custom-scrollbar">
            {loading && (
              <p className="px-4 py-3 text-xs text-[#99907d]">Searching…</p>
            )}
            {!loading && query.trim() && results.length === 0 && (
              <p className="px-4 py-3 text-xs text-[#99907d]">No poets found.</p>
            )}
            {results.map((item) => (
              <button
                key={item._id || item.id || item.name}
                onClick={() => {
                  onSelectSearchResult?.(item);
                  setOpen(false);
                  setQuery("");
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[rgba(240,200,90,0.08)] transition-colors text-left"
              >
                <div className="w-7 h-7 rounded-full overflow-hidden bg-[#2e2735] flex items-center justify-center text-[10px] text-[#ffe6ac] shrink-0">
                  
                  {item.profilePic ? (
                    <img src={item.profilePic} alt="" className="w-full h-full object-cover" />
                  ) : (
                    initialsFromName(item.name)
                  )}
                  
                </div>
                <span className="text-sm text-[#ebdef1] truncate">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Followers modal                                                    */
/* ------------------------------------------------------------------ */

function FollowersModal({ open, onClose, followersList }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm max-h-[70vh] flex flex-col rounded-2xl glass-panel overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(240,200,90,0.1)]">
          <h3 className="font-display text-[#ffe6ac] text-lg">Followers</h3>
          <button onClick={onClose} className="text-[#d0c5b0] hover:text-[#ffe6ac]">
            <Icon name="close" />
          </button>
        </div>
        <div className="overflow-y-auto custom-scrollbar p-2">
          {(!followersList || followersList.length === 0) && (
            <p className="px-4 py-6 text-center text-sm text-[#99907d]">No followers yet.</p>
          )}
          {followersList?.map((f, i) => (
            <div
              key={f._id || f.id || i}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[rgba(240,200,90,0.06)] transition-colors"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden bg-[#2e2735] flex items-center justify-center text-[11px] text-[#ffe6ac] shrink-0">
                {f.profilePic ? (
                  <img src={f.profilePic} alt="" className="w-full h-full object-cover" />
                ) : (
                  initialsFromName(f.name)
                )}
              </div>
              <span className="text-sm text-[#ebdef1] truncate">{f.name || "Fellow poet"}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Albums grid — fetches live albums, handles like/unlike            */
/*  (used inside the "Home" tab as a preview of the repertoire)       */
/* ------------------------------------------------------------------ */

function AlbumsGrid({ userId }) {
  const [albums, setAlbums] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get(`/api/albumsLive?query=most_liked&userId=${userId}&page=1&limit=3`)
      .then((res) => {
        const data = res.data;
        const list = Array.isArray(data) ? data : data.albums || [];
        setAlbums(list);
      })
      .catch(() => setAlbums([]));
  }, [userId]);

  const handleLike = async (albumId) => {
    // Optimistic update
    setAlbums((prev) =>
      prev.map((album) =>
        album._id === albumId
          ? {
              ...album,
              isLiked: !album.isLiked,
              likesCount: (album.likesCount || 0) + (album.isLiked ? -1 : 1),
            }
          : album
      )
    );

    // TEMP DEBUG: API call disabled to confirm the UI/glow works on its own.
    // Once confirmed, uncomment this block and fix the endpoint/payload to match your backend.
    /*
    try {
      await axiosInstance.post(`/api/albums/${albumId}/like`);
    } catch (err) {
      // Roll back on failure
      setAlbums((prev) =>
        prev.map((album) =>
          album._id === albumId
            ? {
                ...album,
                isLiked: !album.isLiked,
                likesCount: (album.likesCount || 0) + (album.isLiked ? -1 : 1),
              }
            : album
        )
      );
    }
    */
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {albums.map((album) => (
        <div
          key={album._id}
          className="glass-panel rounded-2xl p-6 group cursor-pointer hover:border-[#ffe6ac]/40 transition-all"
        >
          <button onClick={()=>Navigate(`/album?albumId=${album._id}`)}>
          <div className="h-56 mb-6 rounded-xl overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-[#3a2a55] to-[#1a1030] transition-transform duration-700 group-hover:scale-105">
            {album.albumCover ? (
              <img
                src={album.albumCover}
                alt={album.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <Icon name="auto_stories" className="!text-[64px] text-[#ffe6ac]/50" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120c18]/60 to-transparent" />

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(album._id);
              }}
              aria-label={album.isLiked ? "Unlike album" : "Like album"}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#120c18]/70 backdrop-blur-sm border border-[#ffe6ac]/20 flex items-center justify-center hover:bg-[#120c18]/90 transition-all duration-300 active:scale-90"
            >
              <Icon
                name="favorite"
                filled={album.isLiked}
                className={`!text-[18px] transition-all duration-300 ${
                  album.isLiked
                    ? "text-[#ff4b4b] scale-110 drop-shadow-[0_0_6px_rgba(255,75,75,0.9)]"
                    : "text-[#d0c5b0]"
                }`}
              />
            </button>
          </div>
          </button>

          <h4 className="font-display text-[24px] mb-3">{album.name}</h4>
          <p className="text-[15px] leading-relaxed mb-6 opacity-80 capitalize">
            {album.category}
          </p>

          <div className="flex items-center justify-between">
            <span className="bg-[#ffe6ac]/10 text-[#ffe6ac] text-[10px] px-4 py-1.5 rounded-full border border-[#ffe6ac]/20">
              {album.kalamCollection?.length || 0} Kalams
            </span>
            <span className="flex items-center gap-1 text-[#d0c5b0] text-[11px] tracking-widest uppercase">
              <Icon name="favorite" className="!text-[13px]" />
              {album.likesCount || 0}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Delete confirmation modal — reused for profile picture AND cover  */
/*  photo removal                                                     */
/* ------------------------------------------------------------------ */

function DeleteConfirmModal({ open, onCancel, onConfirm, title, description }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm rounded-2xl glass-panel overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 pt-6 pb-2 text-center">
          <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[rgba(255,75,75,0.1)] border border-[rgba(255,75,75,0.3)] flex items-center justify-center">
            <Icon name="delete" className="!text-[22px] text-[#ff4b4b]" />
          </div>
          <h3 className="font-display text-[#ffe6ac] text-lg mb-2">{title}</h3>
          <p className="text-[#d0c5b0] text-[13px] leading-relaxed">{description}</p>
        </div>
        <div className="flex items-center gap-3 px-6 py-6">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 rounded-full text-[12px] uppercase tracking-widest border border-[#ffe6ac]/20 text-[#d0c5b0] hover:text-[#ffe6ac] hover:border-[#ffe6ac]/40 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 rounded-full text-[12px] uppercase tracking-widest bg-[#ff4b4b] text-white hover:bg-[#e63c3c] transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function PoetProfileDashboard({
  userName,
  totalKalams,
  joiningDate,
  Streak,
  totalSher,
  totalGhazal,
  totalNazm,
  profileLink,
  totalFollowers,
  userId,

  isOwnProfile = true,
  isFollowing,
  onFollow,
  onUnfollow,
  followersList = [],
  onFollowersOpen,

  onSearchUser,
  onSelectSearchResult,
  onWriteStanza,

  badges = [],

  // Optional — restore the original mockup's hero banner / pinned-verse /
  // top-kalam sections when this data is available. Each degrades to a
  // sensible empty state (own profile) or simply hides (other profiles)
  // when not provided, rather than showing invented content.
  coverImage,
  tagline,
  spotlightVerse, // { text, translation }
  topKalam, // { text, translation, likes, comments, onLike, onComment, onShare, onBookmark }
}) {
  useInjectFonts();
  const [followersOpen, setFollowersOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home"); // "home" | "kalams" | "albums"
  const file = useRef("");
  console.log("see usernameee", userName)
  const [SearchParams, setSearchParams] = useSearchParams()
  const profileCover = useRef("");

  const loading = !userName;
  const memberSince = formatJoinDate(joiningDate);
  const years = yearsSince(joiningDate);

  const handleFollowersClick = () => {
    onFollowersOpen?.();
    setFollowersOpen(true);
  };

  /* ---------------- Spotlight verse: edit / save / delete ---------------- */
  const [currentVerse, setCurrentVerse] = useState(spotlightVerse || null);
  const [isEditingVerse, setIsEditingVerse] = useState(false);
  const [verseDraft, setVerseDraft] = useState("");
  const [savingVerse, setSavingVerse] = useState(false);

  useEffect(() => {
    setCurrentVerse(spotlightVerse || null);
  }, [spotlightVerse]);

  const startEditVerse = () => {
    setVerseDraft(currentVerse?.text || "");
    setIsEditingVerse(true);
  };

  const cancelEditVerse = () => {
    setIsEditingVerse(false);
    setVerseDraft("");
  };

  const saveVerse = async () => {
    const verse = verseDraft.trim();
    if (!verse) return;
    setSavingVerse(true);
    try {
      const res = await axiosInstance.post(`/api/addVerse`, {
        verse: verse,
      },{
        withCredentials: true
      });
      const saved = res.data?.spotlightVerse || { text };
      setCurrentVerse(saved);
      setIsEditingVerse(false);
      setVerseDraft("");
    } catch (err) {
      console.error("Failed to save spotlight verse", err);
    } finally {
      setSavingVerse(false);
    }
  };

  const deleteVerse = async () => {
    try {
      await axiosInstance.delete(`/api/spotlightVerse`, { data: { userId } });
      setCurrentVerse(null);
    } catch (err) {
      console.error("Failed to delete spotlight verse", err);
    }
  };



  const handleProfilePicUpload=()=>{

    console.log("See image selected", file.current)

    const formdata = new FormData;
    formdata.append("profilePic", file.current);
    formdata.append("userId",userId)
    formdata.append("fileType", "profilePic")
    axiosInstance.post("/upload",formdata, {
      headers:{"Content-Type":"multipart/form-data"},
      withCredentials: true,
      
    })
    .then((response)=>{
      console.log("response", response.data)
    }).catch((error)=>{
      console.error("Error while fetching upload url",error)
    })
  }

  /* ---------------- Profile picture upload (mobile + desktop) ---------------- */
  const fileInputRef = useRef(null);
  const [localProfilePic, setLocalProfilePic] = useState(null);
  const [uploadingPic, setUploadingPic] = useState(false);
  const displayedProfilePic = localProfilePic || profileLink;

  const triggerProfilePicUpload = () => {
    fileInputRef.current?.click();
  };

  const handleProfilePicChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Instant local preview while the upload is in flight
    const previewUrl = URL.createObjectURL(file);
    setLocalProfilePic(previewUrl);
    setUploadingPic(true);

    try {
      const formData = new FormData();
      formData.append("profilePic", file);
      formData.append("userId", userId);

      const res = await axiosInstance.post(`/api/uploadProfilePic`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data?.profileLink) {
        setLocalProfilePic(res.data.profileLink);
      }
    } catch (err) {
      console.error("Failed to upload profile picture", err);
      setLocalProfilePic(null);
    } finally {
      setUploadingPic(false);
      e.target.value = "";
    }
  };
  const uploadProfileCover=()=>{
    const formData = new FormData();
    formData.append("profileCover",profileCover.current);
    formData.append("fileType","profileCover");
    formData.append("userId", userId);

    axiosInstance
    .post('/upload/profileCover', formData,{
      headers:{"Content-Type": "multipart/form-data"},
      withCredentials: true
    })
  }

  /* ---------------- Cover photo upload trigger (desktop + mobile) ---------------- */
  const coverInputRef = useRef(null);
  const [localCoverImage, setLocalCoverImage] = useState(null);
  const displayedCoverImage = localCoverImage || coverImage;

  const triggerCoverUpload = () => {
    coverInputRef.current?.click();
  };

  const handleCoverChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // Instant local preview
    const previewUrl = URL.createObjectURL(selectedFile);
    setLocalCoverImage(previewUrl);

    // Feed the existing (untouched) upload logic with the new file
    profileCover.current = selectedFile;
    uploadProfileCover();

    e.target.value = "";
  };

  const deleteProfilePic = ()=>{

    axiosInstance
    .post('/api/deleteProflePic',{
      profileLink
    },{
      withCredentials: true
    })
  }

  const handleProfilePicInputChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // Instant local preview
    const previewUrl = URL.createObjectURL(selectedFile);
    setLocalProfilePic(previewUrl);

    // Feed the existing (untouched) upload logic with the new file
    file.current = selectedFile;
    handleProfilePicUpload();

    e.target.value = "";
  };

  /* ---------------- Profile picture / cover: edit menus ---------------- */
  const [profilePicMenuOpen, setProfilePicMenuOpen] = useState(false);
  const profilePicMenuRef = useRef(null);
  const [coverMenuOpen, setCoverMenuOpen] = useState(false);
  const coverMenuRef = useRef(null);

  useEffect(() => {
    if (!profilePicMenuOpen) return;
    function handleClickOutside(e) {
      if (profilePicMenuRef.current && !profilePicMenuRef.current.contains(e.target)) {
        setProfilePicMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profilePicMenuOpen]);

  useEffect(() => {
    if (!coverMenuOpen) return;
    function handleClickOutside(e) {
      if (coverMenuRef.current && !coverMenuRef.current.contains(e.target)) {
        setCoverMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [coverMenuOpen]);

  const [deleteProfilePicConfirmOpen, setDeleteProfilePicConfirmOpen] = useState(false);

  const handleRemoveProfilePic = () => {
    setProfilePicMenuOpen(false);
    setDeleteProfilePicConfirmOpen(true);
  };

  const confirmRemoveProfilePic = () => {
    // Existing (untouched) delete call — just reset the local preview after
    deleteProfilePic();
    setLocalProfilePic(null);
    setDeleteProfilePicConfirmOpen(false);
  };

  const handleProfileCoverDelete=()=>{
    axiosInstance
    .post('api/deleteProfileCover',{
      profileCover: profileCover
    },{
      withCredentials: true
    }).then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.error("Error while fetching request",error);
    })
  }

  const [deleteCoverConfirmOpen, setDeleteCoverConfirmOpen] = useState(false);

  const handleRemoveCoverPhoto = () => {
    setCoverMenuOpen(false);
    setDeleteCoverConfirmOpen(true);
  };

  const confirmRemoveCoverPhoto = () => {
    // Existing (untouched) delete call — just reset the local preview after
    handleProfileCoverDelete();
    setLocalCoverImage(null);
    setDeleteCoverConfirmOpen(false);
  };

  return (
    <div className="poet-profile-dashboard min-h-screen w-full bg-[#0a0510] text-[#ebdef1]">
      <style>{`
        .poet-profile-dashboard { font-family: 'DM Sans', sans-serif; }
        .poet-profile-dashboard .font-display { font-family: 'Playfair Display', serif; }
        .poet-profile-dashboard {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 200px;
        }
        .poet-profile-dashboard .glass-panel {
          background: rgba(18, 8, 29, 0.8);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(240, 200, 90, 0.15);
        }
        .poet-profile-dashboard .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .poet-profile-dashboard .custom-scrollbar::-webkit-scrollbar-track { background: rgba(23, 17, 29, 0.5); }
        .poet-profile-dashboard .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(240, 200, 90, 0.3);
          border-radius: 10px;
        }
      `}</style>

      {/* ---------------- Header ---------------- */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-16 h-16 bg-[#17111d]/80 backdrop-blur-xl border-b border-[#ffe6ac]/20 shadow-sm">
        <div className="flex items-center gap-10">
          <span className="font-display text-[28px] md:text-[32px] text-[#ffe6ac] tracking-tighter">
            Shayar
          </span>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-[12px] uppercase tracking-widest text-[#d0c5b0] hover:text-[#ffe6ac] transition-colors">Library</a>
            <a href="#" className="text-[12px] uppercase tracking-widest text-[#ffe6ac] font-bold transition-colors">Compositions</a>
            <a href="#" className="text-[12px] uppercase tracking-widest text-[#d0c5b0] hover:text-[#ffe6ac] transition-colors">Aspirations</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => onWriteStanza?.()}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#ffe6ac]/10 border border-[#ffe6ac]/20 rounded-full text-[#ffe6ac] text-[12px] hover:bg-[#ffe6ac]/20 transition-all"
          >
            <Icon name="add_notes" className="!text-[18px]" />
            Write New Stanza
          </button>
          <div className="h-8 w-[1px] bg-[#ffe6ac]/10 hidden sm:block" />
          <div className="flex items-center gap-4">
            <HeaderSearch onSearchUser={onSearchUser} onSelectSearchResult={onSelectSearchResult} />
            <Icon name="settings" className="!text-[20px] text-[#d0c5b0] hover:text-[#ffe6ac] cursor-pointer transition-colors" />
            <div className="w-8 h-8 rounded-full border border-[#ffe6ac]/40 overflow-hidden cursor-pointer bg-[#2e2735] flex items-center justify-center text-[10px] text-[#ffe6ac]">
              {profileLink ? (
                <img alt="Profile" className="w-full h-full object-cover" src={profileLink} />
              ) : (
                initialsFromName(userName)
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 min-h-screen w-full bg-[#120c18] pb-16 md:pb-0">
        {/* ---------------- Hero ---------------- */}
        <section className="relative w-full overflow-hidden">
          <div className="h-[300px] sm:h-[360px] md:h-[420px] relative bg-gradient-to-br from-[#241d2a] to-[#120c18] group/cover">

            {displayedCoverImage && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${displayedCoverImage}')` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120c18] via-[#120c18]/60 to-transparent" />

            {/* ---------------- Cover photo edit menu (mobile + desktop) ---------------- */}
            {isOwnProfile && (
              <div className="absolute top-4 right-4 md:top-6 md:right-8 z-20" ref={coverMenuRef}>
                <input
                  ref={coverInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleCoverChange}
                  className="hidden"
                />
                <button
                  onClick={() => setCoverMenuOpen((v) => !v)}
                  aria-label="Edit cover photo"
                  aria-expanded={coverMenuOpen}
                  className="flex items-center gap-2 px-3.5 py-2 md:px-4 md:py-2.5 rounded-full bg-[#120c18]/70 backdrop-blur-md border border-[#ffe6ac]/25 text-[#ffe6ac] text-[11px] md:text-[12px] uppercase tracking-widest hover:bg-[#120c18]/90 hover:border-[#ffe6ac]/50 transition-all shadow-lg active:scale-95"
                >
                  <Icon name="edit" className="!text-[16px] md:!text-[18px]" />
                  <span className="hidden sm:inline">Edit Cover</span>
                </button>

                {coverMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-xl overflow-hidden bg-[rgba(18,8,29,0.95)] backdrop-blur-xl border border-[rgba(240,200,90,0.2)] shadow-2xl">
                    {displayedCoverImage ? (
                      <>
                        <button
                          onClick={() => {
                            setCoverMenuOpen(false);
                            triggerCoverUpload();
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left text-[13px] text-[#ebdef1] hover:bg-[rgba(240,200,90,0.08)] transition-colors"
                        >
                          <Icon name="photo_camera" className="!text-[16px] text-[#ffe6ac]" />
                          Change Cover Photo
                        </button>
                        <button
                          onClick={handleRemoveCoverPhoto}
                          className="w-full flex items-center gap-3 px-4 py-3 text-left text-[13px] text-[#ebdef1] hover:bg-[rgba(255,75,75,0.08)] hover:text-[#ff4b4b] transition-colors border-t border-[rgba(240,200,90,0.1)]"
                        >
                          <Icon name="delete" className="!text-[16px]" />
                          Delete Cover Photo
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setCoverMenuOpen(false);
                          triggerCoverUpload();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left text-[13px] text-[#ebdef1] hover:bg-[rgba(240,200,90,0.08)] transition-colors"
                      >
                        <Icon name="photo_camera" className="!text-[16px] text-[#ffe6ac]" />
                        Upload Cover Photo
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="absolute inset-0 flex items-end justify-center">
              <div className="max-w-[1120px] w-full px-5 md:px-16 pb-8 sm:pb-12">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-4 sm:gap-6 md:gap-10">
                  <div className="relative group">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 rounded-full border-4 border-[#ffe6ac]/20 shadow-[0_0_40px_rgba(240,200,90,0.2)] overflow-hidden bg-[#201926] flex items-center justify-center text-[#ffe6ac] text-4xl font-display transition-transform duration-500 group-hover:scale-105">
                      {(isOwnProfile ? displayedProfilePic : profileLink) ? (
                        <img
                          alt={userName || "Poet"}
                          className="w-full h-full object-cover"
                          src={isOwnProfile ? displayedProfilePic : profileLink}
                        />
                      ) : (
                        initialsFromName(userName)
                      )}
                    </div>

                    {/* ---------------- Profile picture edit menu (mobile always, desktop on hover) ---------------- */}
                    {isOwnProfile && (
                      <div
                        className="absolute bottom-1 right-1 md:bottom-2 md:right-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200"
                        ref={profilePicMenuRef}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleProfilePicInputChange}
                          className="hidden"
                        />
                        <button
                          onClick={() => setProfilePicMenuOpen((v) => !v)}
                          disabled={uploadingPic}
                          aria-label="Edit profile picture"
                          aria-expanded={profilePicMenuOpen}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#ffe6ac] text-[#3d2e00] flex items-center justify-center border-2 border-[#0a0510] shadow-lg active:scale-90 transition-transform disabled:opacity-60 hover:bg-[#f0c85a]"
                        >
                          {uploadingPic ? (
                            <span className="w-3.5 h-3.5 rounded-full border-2 border-[#3d2e00]/40 border-t-[#3d2e00] animate-spin" />
                          ) : (
                            <Icon name="edit" className="!text-[16px] md:!text-[18px]" />
                          )}
                        </button>

                        {profilePicMenuOpen && (
                          <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 w-44 rounded-xl overflow-hidden bg-[rgba(18,8,29,0.95)] backdrop-blur-xl border border-[rgba(240,200,90,0.2)] shadow-2xl z-30">
                            {displayedProfilePic ? (
                              <>
                                <button
                                  onClick={() => {
                                    setProfilePicMenuOpen(false);
                                    triggerProfilePicUpload();
                                  }}
                                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-[13px] text-[#ebdef1] hover:bg-[rgba(240,200,90,0.08)] transition-colors"
                                >
                                  <Icon name="photo_camera" className="!text-[16px] text-[#ffe6ac]" />
                                  Change Photo
                                </button>
                                <button
                                  onClick={handleRemoveProfilePic}
                                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-[13px] text-[#ebdef1] hover:bg-[rgba(255,75,75,0.08)] hover:text-[#ff4b4b] transition-colors border-t border-[rgba(240,200,90,0.1)]"
                                >
                                  <Icon name="delete" className="!text-[16px]" />
                                  Delete Photo
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => {
                                  setProfilePicMenuOpen(false);
                                  triggerProfilePicUpload();
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 text-left text-[13px] text-[#ebdef1] hover:bg-[rgba(240,200,90,0.08)] transition-colors"
                              >
                                <Icon name="photo_camera" className="!text-[16px] text-[#ffe6ac]" />
                                Upload Photo
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="font-display text-[#ffe6ac] text-[32px] sm:text-[40px] md:text-[64px] leading-tight mb-2">
                      {loading ? "Loading…" : userName}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-[#d0c5b0]">
                      <span className="text-[#ffe6ac] italic text-[18px] md:text-[20px]">Poet on Shayar</span>
                      {(memberSince || Streak) && (
                        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#ffe6ac]/30" />
                      )}
                      {memberSince && (
                        <div className="flex items-center gap-2 opacity-80">
                          <Icon name="history_edu" className="!text-[18px]" />
                          Member since {memberSince}
                          {years !== null && years > 0 ? ` · ${years} yr${years === 1 ? "" : "s"}` : ""}
                        </div>
                      )}
                      {Streak !== undefined && Streak !== "" && (
                        <div className="flex items-center gap-2 opacity-80">
                          <Icon name="local_fire_department" className="!text-[18px]" />
                          {Streak}-day streak
                        </div>
                      )}
                    </div>

                    {/* Followers / Kalams — moved out of the sticky stats strip */}
                    <div className="flex items-center justify-center md:justify-start gap-6 mt-4">
                      <button
                        onClick={handleFollowersClick}
                        className="flex items-baseline gap-2 hover:text-[#ffe6ac] transition-colors"
                      >
                        <span className="font-display text-[20px] text-[#ffe6ac]">
                          {totalFollowers ?? 0}
                        </span>
                        <span className="text-[11px] text-[#d0c5b0]/70 uppercase tracking-widest">
                          Followers
                        </span>
                      </button>
                      <span className="w-1 h-1 rounded-full bg-[#ffe6ac]/30" />
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-[20px] text-[#ffe6ac]">
                          {totalKalams || 0}
                        </span>
                        <span className="text-[11px] text-[#d0c5b0]/70 uppercase tracking-widest">
                          Kalams
                        </span>
                      </div>
                    </div>

                    {tagline && (
                      <p className="mt-6 text-[#ebdef1]/80 max-w-2xl leading-relaxed italic border-l-2 border-[#ffe6ac]/40 pl-6 hidden md:block">
                        {tagline}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Home / Kalams / Albums tab strip ---------------- */}
        <div className="border-b border-[#ffe6ac]/10 bg-[#0a0510]/50 backdrop-blur-sm sticky top-16 z-30">
          <div className="max-w-[1120px] mx-auto px-5 md:px-16 min-h-[80px] py-3 md:py-0 flex flex-wrap items-center justify-between gap-y-3">
            <div className="flex items-center gap-2 bg-[#17111d]/60 border border-[#ffe6ac]/10 rounded-full p-1">
              {[
                { key: "home", label: "Home", icon: "home" },
                { key: "kalams", label: "Kalams", icon: "menu_book" },
                { key: "albums", label: "Albums", icon: "album" },
              ].map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[12px] uppercase tracking-widest transition-colors ${
                      isActive
                        ? "bg-[#ffe6ac] text-[#3d2e00]"
                        : "text-[#d0c5b0] hover:text-[#ffe6ac]"
                    }`}
                  >
                    <Icon name={tab.icon} className="!text-[18px]" filled={isActive} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4 ml-auto">
              {!isOwnProfile && (
                <button
                  onClick={() => (isFollowing ? onUnfollow?.() : onFollow?.())}
                  className={
                    isFollowing
                      ? "px-6 py-2.5 rounded-full text-[12px] uppercase tracking-widest border border-[#ffe6ac]/40 text-[#ffe6ac] hover:bg-[#ffe6ac]/10 transition-colors flex items-center gap-2"
                      : "bg-[#ffe6ac] text-[#3d2e00] px-6 py-2.5 rounded-full text-[12px] uppercase tracking-widest hover:bg-[#f0c85a] transition-colors flex items-center gap-2"
                  }
                >
                  <Icon name={isFollowing ? "how_to_reg" : "person_add"} className="!text-[18px]" />
                  {isFollowing ? "Following" : "Follow Poet"}
                </button>
              )}
              <button className="w-10 h-10 rounded-full border border-[#ffe6ac]/20 flex items-center justify-center text-[#d0c5b0] hover:text-[#ffe6ac] transition-colors bg-[#17111d]/40 backdrop-blur-sm">
                <Icon name="share" className="!text-[20px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1120px] mx-auto px-5 md:px-16 py-16 md:py-24">
          {activeTab === "albums" ? (
            /* Only the albums browser — no ProfileAlbums header, no sidebar */
            <AlbumsPanel />
          ) : (
            <div className="space-y-16 md:space-y-24">
              {/* ---------------- Repertoire (Home only) ---------------- */}
              {activeTab === "home" && (
                <section>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between mb-6">
                    <div>
                      <h3 className="text-[11px] text-[#ffe6ac] mb-1 uppercase tracking-widest">
                        Archive
                      </h3>
                      <h2 className="font-display text-[28px] sm:text-[32px] md:text-[40px]">The Repertoire</h2>
                    </div>
                    
                      <a href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("albums");
                      }}
                      className="text-[12px] text-[#d0c5b0] hover:text-[#ffe6ac] underline underline-offset-8 decoration-[#ffe6ac]/30 transition-colors"
                    >Explore Full Library</a>
                  </div>

                  <AlbumsGrid userId={userId} />
                </section>
              )}

              {/* ---------------- Verse in Focus (Home + Kalams) ---------------- */}
              {(currentVerse || isOwnProfile) && (
                <section className="relative py-14 sm:py-20 md:py-28 px-5 sm:px-8 rounded-3xl overflow-hidden text-center border border-[#ffe6ac]/20">
                  <div className="absolute inset-0 bg-[#1a1224] opacity-50" />

                  {isOwnProfile && currentVerse && !isEditingVerse && (
                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                      <button
                        onClick={startEditVerse}
                        aria-label="Edit verse"
                        className="w-9 h-9 rounded-full bg-[#120c18]/70 backdrop-blur-sm border border-[#ffe6ac]/20 flex items-center justify-center text-[#d0c5b0] hover:text-[#ffe6ac] hover:bg-[#120c18]/90 transition-colors"
                      >
                        <Icon name="edit" className="!text-[16px]" />
                      </button>
                      <button
                        onClick={deleteVerse}
                        aria-label="Delete verse"
                        className="w-9 h-9 rounded-full bg-[#120c18]/70 backdrop-blur-sm border border-[#ffe6ac]/20 flex items-center justify-center text-[#d0c5b0] hover:text-[#ff4b4b] hover:bg-[#120c18]/90 transition-colors"
                      >
                        <Icon name="delete" className="!text-[16px]" />
                      </button>
                    </div>
                  )}

                  <div className="relative z-10 max-w-4xl mx-auto">
                    <Icon name="format_quote" className="!text-[40px] sm:!text-[56px] text-[#ffe6ac] opacity-40 mb-6" />

                    {isEditingVerse ? (
                      <div className="w-full">
                        <textarea
                          autoFocus
                          value={verseDraft}
                          onChange={(e) => setVerseDraft(e.target.value)}
                          placeholder="Write your favourite lines here…"
                          rows={4}
                          className="w-full bg-[#120c18]/60 text-[#ffe6ac] font-display text-[20px] md:text-[28px] text-center leading-relaxed placeholder-[#99907d] rounded-xl p-4 outline-none border border-[#ffe6ac]/20 focus:border-[#ffe6ac]/50 resize-none"
                        />
                        <div className="flex items-center justify-center gap-4 mt-6">
                          <button
                            onClick={cancelEditVerse}
                            disabled={savingVerse}
                            className="px-6 py-2.5 rounded-full text-[12px] uppercase tracking-widest border border-[#ffe6ac]/20 text-[#d0c5b0] hover:text-[#ffe6ac] hover:border-[#ffe6ac]/40 transition-colors disabled:opacity-50"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={saveVerse}
                            disabled={savingVerse || !verseDraft.trim()}
                            className="px-6 py-2.5 rounded-full text-[12px] uppercase tracking-widest bg-[#ffe6ac] text-[#3d2e00] hover:bg-[#f0c85a] transition-colors disabled:opacity-50"
                          >
                            {savingVerse ? "Saving…" : "Done"}
                          </button>
                        </div>
                      </div>
                    ) : currentVerse ? (
                      <>
                        <blockquote className="font-display text-[22px] sm:text-[26px] md:text-[42px] text-[#ffe6ac] leading-[1.3] mb-8 whitespace-pre-line">
                          {currentVerse}
                        </blockquote>
                        {currentVerse.translation && (
                          <>
                            <div className="flex items-center justify-center gap-6 mb-6">
                              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#ffe6ac]/40" />
                              <span className="text-[#d0c5b0] uppercase tracking-[0.4em] text-[12px]">
                                Translation
                              </span>
                              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#ffe6ac]/40" />
                            </div>
                            <p className="text-[#d0c5b0]/90 italic text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                              {currentVerse.translation}
                            </p>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <p className="font-display text-[22px] md:text-[28px] text-[#ffe6ac] mb-4">
                          No verse pinned yet
                        </p>
                        <p className="text-[#d0c5b0] text-[14px] md:text-[15px] max-w-md mx-auto leading-relaxed mb-8">
                          Pin your favourite kalam here so it's the first thing visitors read.
                        </p>
                        <button
                          onClick={startEditVerse}
                          className="px-6 py-2.5 rounded-full text-[12px] uppercase tracking-widest border border-[#ffe6ac]/40 text-[#ffe6ac] hover:bg-[#ffe6ac]/10 transition-colors"
                        >
                          Write a Stanza
                        </button>
                      </>
                    )}
                  </div>
                  <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 border-t-2 border-l-2 border-[#ffe6ac]/20 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 border-b-2 border-r-2 border-[#ffe6ac]/20 rounded-br-3xl" />
                </section>
              )}

              {/* ---------------- Most Liked Kalam (Home + Kalams) ---------------- */}
              {(topKalam || isOwnProfile) && (
                <section className="max-w-3xl mx-auto w-full">
                  <div className="mb-8">
                    <div className="flex items-end justify-between mb-6">
                      <h2 className="font-display text-[#ffe6ac] text-[28px] sm:text-[32px] md:text-[40px]">
                        Most Liked Kalam
                      </h2>
                    </div>
                    {topKalam && (
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#2e2735] flex items-center justify-center text-[#ffe6ac] font-display shrink-0">
                          {profileLink ? (
                            <img src={profileLink} alt="" className="w-full h-full object-cover" />
                          ) : (
                            initialsFromName(userName)
                          )}
                        </div>
                        <div>
                          <p className="font-display text-[18px]">{userName}</p>
                          {topKalam.date && (
                            <p className="text-[11px] text-[#d0c5b0]/60 uppercase tracking-widest">
                              {topKalam.date}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {topKalam ? (
                    <div className="relative flex flex-col md:flex-row gap-6">
                      <div className="flex-1 glass-panel rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden min-h-[220px] md:min-h-[320px] flex flex-col justify-center">
                        <blockquote className="font-display text-[18px] sm:text-[22px] md:text-[28px] text-[#ffe6ac] leading-relaxed mb-6 text-center whitespace-pre-line">
                          {topKalam.text}
                        </blockquote>
                        {topKalam.translation && (
                          <>
                            <div className="h-[1px] w-24 bg-[#ffe6ac]/20 mx-auto mb-6" />
                            <p className="text-[#d0c5b0]/80 italic text-center leading-relaxed">
                              {topKalam.translation}
                            </p>
                          </>
                        )}
                      </div>
                      <div className="flex flex-row md:flex-col gap-4 justify-center">
                        <button
                          onClick={() => topKalam.onLike?.()}
                          className="w-12 h-12 rounded-full bg-[#201926] border border-[#ffe6ac]/10 flex items-center justify-center text-[#ff4b4b] hover:bg-[#ffe6ac]/10 transition-all shadow-sm"
                          aria-label="Like"
                        >
                          <Icon name="favorite" filled />
                        </button>
                        <button
                          onClick={() => topKalam.onComment?.()}
                          className="w-12 h-12 rounded-full bg-[#201926] border border-[#ffe6ac]/10 flex items-center justify-center text-[#d0c5b0] hover:text-[#ffe6ac] transition-all shadow-sm"
                          aria-label="Comment"
                        >
                          <Icon name="chat_bubble" />
                        </button>
                        <button
                          onClick={() => topKalam.onShare?.()}
                          className="w-12 h-12 rounded-full bg-[#201926] border border-[#ffe6ac]/10 flex items-center justify-center text-[#d0c5b0] hover:text-[#ffe6ac] transition-all shadow-sm"
                          aria-label="Share"
                        >
                          <Icon name="share" />
                        </button>
                        <button
                          onClick={() => topKalam.onBookmark?.()}
                          className="w-12 h-12 rounded-full bg-[#201926] border border-[#ffe6ac]/10 flex items-center justify-center text-[#ffe6ac] hover:bg-[#ffe6ac]/10 transition-all shadow-sm"
                          aria-label="Bookmark"
                        >
                          <Icon name="bookmark" filled />
                        </button>
                      </div>
                      {(topKalam.likes !== undefined || topKalam.comments !== undefined) && (
                        <div className="static mt-1 md:absolute md:mt-0 md:-bottom-8 md:left-0 flex gap-4 text-[12px] text-[#d0c5b0]/60">
                          {topKalam.likes !== undefined && <span>{topKalam.likes} likes</span>}
                          {topKalam.comments !== undefined && <span>{topKalam.comments} comments</span>}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="glass-panel rounded-3xl p-10 text-center">
                      <p className="text-[#d0c5b0] text-[14px] md:text-[15px] max-w-md mx-auto leading-relaxed">
                        Once readers start liking your kalams, your most-loved piece will be
                        spotlighted here.
                      </p>
                    </div>
                  )}
                </section>
              )}

              {/* ---------------- Badges ---------------- */}
              {/* {badges?.length > 0 && (
                <section>
                  <div className="mb-6">
                    <h3 className="text-[11px] text-[#ffe6ac] mb-1 uppercase tracking-widest">
                      Recognition
                    </h3>
                    <h2 className="font-display text-[28px] sm:text-[32px] md:text-[40px]">Badges</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {badges.map((badge) => (
                      <div
                        key={badge.name}
                        className={`glass-panel rounded-2xl p-6 text-center transition-all ${
                          badge.earned ? "hover:border-[#ffe6ac]/40" : "opacity-40 grayscale"
                        }`}
                      >
                        <div className="text-[36px] mb-3">{badge.icon}</div>
                        <h4 className="font-display text-[18px] mb-2">{badge.name}</h4>
                        <p className="text-[13px] text-[#d0c5b0] leading-relaxed">{badge.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )} */}
            </div>
          )}
        </div>

        {/* ---------------- Footer ---------------- */}
        <footer className="mt-16 md:mt-24 py-12 md:py-16 border-t border-[#ffe6ac]/10 bg-[#241d2a]/30">
          <div className="max-w-[1120px] mx-auto px-5 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 md:gap-12 md:mb-16">
              <div className="col-span-1 md:col-span-2">
                <span className="font-display text-[24px] text-[#ffe6ac] block mb-6">
                  Shayar Digital
                </span>
                <p className="text-[#d0c5b0] max-w-sm leading-relaxed">
                  A home for Urdu and Persian-inspired verse — write, publish, and grow your
                  audience of readers.
                </p>
              </div>
              <div>
                <h4 className="text-[12px] text-[#ffe6ac] uppercase tracking-widest mb-6">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-[#d0c5b0]/80">
                  <li><a href="#" className="hover:text-[#ffe6ac] transition-colors">Library Archive</a></li>
                  <li><a href="#" className="hover:text-[#ffe6ac] transition-colors">Master Collections</a></li>
                  <li><a href="#" className="hover:text-[#ffe6ac] transition-colors">Community Guidelines</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-[12px] text-[#ffe6ac] uppercase tracking-widest mb-6">
                  Support
                </h4>
                <ul className="space-y-3 text-[#d0c5b0]/80">
                  <li><a href="#" className="hover:text-[#ffe6ac] transition-colors">Get Assistance</a></li>
                  <li><a href="#" className="hover:text-[#ffe6ac] transition-colors">Settings</a></li>
                  <li><a href="#" className="hover:text-[#ffe6ac] transition-colors">Terms of Verse</a></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[#ffe6ac]/5">
              <p className="text-[11px] text-[#d0c5b0]/40 tracking-[0.4em] uppercase mb-4 md:mb-0">
                Shayar Digital © {new Date().getFullYear()}
              </p>
              <div className="flex gap-6">
                <Icon name="language" className="text-[#d0c5b0]/40 hover:text-[#ffe6ac] cursor-pointer" />
                <Icon name="mail" className="text-[#d0c5b0]/40 hover:text-[#ffe6ac] cursor-pointer" />
                <Icon name="share" className="text-[#d0c5b0]/40 hover:text-[#ffe6ac] cursor-pointer" />
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* ---------------- Mobile nav ---------------- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full h-16 z-50 bg-[#120c18] border-t border-[#ffe6ac]/20 flex items-center justify-around px-4">
        <button onClick={() => setActiveTab("home")}>
          <Icon
            name="menu_book"
            className={`!text-[24px] ${activeTab === "home" ? "text-[#ffe6ac]" : "text-[#d0c5b0]"}`}
          />
        </button>
        <button onClick={() => setActiveTab("kalams")}>
          <Icon
            name="category"
            className={`!text-[24px] ${activeTab === "kalams" ? "text-[#ffe6ac]" : "text-[#d0c5b0]"}`}
          />
        </button>
        <button onClick={() => setActiveTab("albums")}>
          <Icon
            name="album"
            className={`!text-[24px] ${activeTab === "albums" ? "text-[#ffe6ac]" : "text-[#d0c5b0]"}`}
          />
        </button>
        <Icon name="person" className="!text-[24px] text-[#d0c5b0]" />
      </nav>

      <FollowersModal
        open={followersOpen}
        onClose={() => setFollowersOpen(false)}
        followersList={followersList}
      />
      <DeleteConfirmModal
        open={deleteProfilePicConfirmOpen}
        onCancel={() => setDeleteProfilePicConfirmOpen(false)}
        onConfirm={confirmRemoveProfilePic}
        title="Delete profile photo?"
        description="This will remove your current profile picture. This action can't be undone."
      />
      <DeleteConfirmModal
        open={deleteCoverConfirmOpen}
        onCancel={() => setDeleteCoverConfirmOpen(false)}
        onConfirm={confirmRemoveCoverPhoto}
        title="Delete cover photo?"
        description="This will remove your current cover photo. This action can't be undone."
      />
    </div>
  );
}

export default PoetProfileDashboard;