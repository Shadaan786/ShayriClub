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
















import { useEffect, useRef } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

  .pp-wrap {
    width: 100%; min-height: 100vh;
    background: #080b12;
    font-family: 'DM Sans', sans-serif;
  }
  .pp-card {
    width: 100%; min-height: 100vh;
    background: #0d1117;
    display: flex; flex-direction: column;
    position: relative; overflow: hidden;
  }
  .pp-noise {
    position: absolute; inset: 0; pointer-events: none; z-index: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    background-size: 180px; opacity: 0.4;
  }
  .pp-glow-tl {
    position: absolute; width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
    top: -180px; left: -180px; pointer-events: none; z-index: 0;
  }
  .pp-glow-br {
    position: absolute; width: 400px; height: 400px; border-radius: 50%;
    background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%);
    bottom: -100px; right: -100px; pointer-events: none; z-index: 0;
  }
  .pp-content { position: relative; z-index: 1; flex: 1; display: flex; flex-direction: column; }

  .pp-hero {
    display: flex; flex-direction: column; align-items: center;
    padding: 56px 40px 32px; gap: 22px;
  }
  .pp-avatar-ring {
    width: 116px; height: 116px; border-radius: 50%; padding: 3px;
    background: linear-gradient(135deg, #6366f1, #ec4899, #6366f1);
  }
  .pp-avatar-inner {
    width: 100%; height: 100%; border-radius: 50%;
    background: #0d1117; padding: 3px;
    display: flex; align-items: center; justify-content: center;
  }
  .pp-avatar-inner img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
  .pp-name {
    font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 700;
    color: #f1f5f9; letter-spacing: -0.01em; margin: 0 0 8px; text-align: center;
  }
  .pp-tag {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3);
    border-radius: 20px; padding: 4px 14px;
    font-size: 11px; font-weight: 500; color: #818cf8;
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .pp-dot { width: 6px; height: 6px; border-radius: 50%; background: #818cf8; }

  .pp-stats-grid {
    display: grid; grid-template-columns: 1fr 1px 1fr;
    width: 100%; max-width: 360px;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px; overflow: hidden;
  }
  .pp-stat-cell { display: flex; flex-direction: column; align-items: center; padding: 22px 16px; gap: 4px; }
  .pp-stat-divider { background: rgba(255,255,255,0.07); }
  .pp-stat-num {
    font-family: 'Playfair Display', serif; font-size: 40px; font-weight: 700;
    color: #f1f5f9; line-height: 1;
  }
  .pp-stat-label { font-size: 11px; color: rgba(148,163,184,0.6); letter-spacing: 0.12em; text-transform: uppercase; }

  /* ── BADGES SECTION ── */
  .pp-badges-section {
    padding: 28px 28px 0;
    flex: 1;
    display: flex; flex-direction: column; gap: 0;
  }
  .pp-section-header {
    display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
  }
  .pp-section-title {
    font-size: 11px; font-weight: 500; color: rgba(148,163,184,0.45);
    letter-spacing: 0.16em; text-transform: uppercase; white-space: nowrap;
  }
  .pp-section-line {
    flex: 1; height: 1px;
    background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent);
  }

  .pp-badges-scroll {
    overflow-x: auto; overflow-y: visible;
    padding-bottom: 20px;
    scrollbar-width: none;
  }
  .pp-badges-scroll::-webkit-scrollbar { display: none; }

  .pp-badges-row {
    display: flex; gap: 20px;
    padding: 8px 4px 4px;
    width: max-content;
  }

  .pp-hex-wrap {
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    width: 76px; cursor: default; flex-shrink: 0;
    transition: transform 0.2s;
  }
  .pp-hex-wrap:hover { transform: translateY(-4px); }

  .pp-hex-outer {
    width: 72px; height: 80px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex; align-items: center; justify-content: center;
  }
  .pp-hex-outer.earned {
    background: linear-gradient(160deg, #a5b4fc, #6366f1, #ec4899);
    filter: drop-shadow(0 0 8px rgba(99,102,241,0.65)) drop-shadow(0 0 18px rgba(99,102,241,0.25));
  }
  .pp-hex-outer.locked {
    background: rgba(255,255,255,0.06);
    filter: none;
  }
  .pp-hex-inner {
    width: 64px; height: 72px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex; align-items: center; justify-content: center;
    font-size: 24px; line-height: 1;
  }
  .pp-hex-inner.earned { background: #13152a; }
  .pp-hex-inner.locked { background: #0f1015; filter: grayscale(1); opacity: 0.28; }

  .pp-hex-name {
    font-size: 10px; font-weight: 500; color: #cbd5e1;
    text-align: center; line-height: 1.3; max-width: 76px;
  }
  .pp-hex-name.locked { color: rgba(148,163,184,0.22); }

  /* ── TICKER ── */
  .pp-ticker-wrap {
    overflow: hidden; cursor: default; user-select: none;
    height: 76px; border-top: 1px solid rgba(255,255,255,0.06);
    margin-top: auto;
  }
  .pp-ticker-track { display: flex; height: 100%; }
  .pp-ticker-item {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    min-width: 175px; height: 100%; padding: 0 20px; flex-shrink: 0;
    border-right: 1px solid rgba(255,255,255,0.05); gap: 3px;
    transition: background 0.2s;
  }
  .pp-ticker-item:hover { background: rgba(255,255,255,0.02); }
  .pp-ticker-num {
    font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700;
    color: #818cf8; line-height: 1;
  }
  .pp-ticker-label {
    font-size: 10px; color: rgba(148,163,184,0.4);
    letter-spacing: 0.12em; text-transform: uppercase; text-align: center;
  }
`;

export const ProfileCard = ({
  userName, totalKalams, joiningDate, Streak,
  totalSher, totalGhazal, totalNazm,
  profileLink,
  badges = []
}) => {
  const scrollRef = useRef(null);
  const animRef = useRef(null);
  const speed = 0.5;

  const categories = [
    { label: "Contributions in Shayri", value: totalSher },
    { label: "Contributions in Ghazal", value: totalGhazal },
    { label: "Contributions in Nazm", value: totalNazm },
    { label: "Contributions in Matla", value: totalGhazal },
    { label: "Contributions in Maqta", value: totalNazm },
  ];

  const earnedBadges = badges.filter(b => b.earned);
  const lockedBadges = badges.filter(b => !b.earned);
  const sortedBadges = [...earnedBadges, ...lockedBadges];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    const step = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const pause = () => cancelAnimationFrame(animRef.current);
  const resume = () => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = el.scrollLeft;
    const step = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
  };

  return (
    <>
      <style>{css}</style>
      <div className="pp-wrap">
        <div className="pp-card">
          <div className="pp-noise" />
          <div className="pp-glow-tl" />
          <div className="pp-glow-br" />

          <div className="pp-content">

            {/* ── HERO ── */}
            <div className="pp-hero">
              <div className="pp-avatar-ring">
                <div className="pp-avatar-inner">
                  <img src= {profileLink} />
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <h1 className="pp-name">{userName}</h1>
                <span className="pp-tag"><span className="pp-dot" />Shayar</span>
              </div>

              <div className="pp-stats-grid">
                <div className="pp-stat-cell">
                  <span className="pp-stat-num">00</span>
                  <span className="pp-stat-label">Followers</span>
                </div>
                <div className="pp-stat-divider" />
                <div className="pp-stat-cell">
                  <span className="pp-stat-num">{totalKalams}</span>
                  <span className="pp-stat-label">Total Kalams</span>
                </div>
              </div>

              {(joiningDate || Streak) && (
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                  {joiningDate && (
                    <span style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "4px 14px", fontSize: 12, color: "rgba(148,163,184,0.7)" }}>
                      Joined {joiningDate}
                    </span>
                  )}
{Streak && (
  <div style={{
    display: "flex", alignItems: "center", gap: 10,
    background: "rgba(251,146,60,0.08)",
    border: "1px solid rgba(251,146,60,0.2)",
    borderRadius: 14, padding: "10px 18px",
  }}>
    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 1C10.5 1 11 5.5 8.5 8C6 10.5 3 10 3 10C3 10 3.5 13 6 14.5C5 15.5 4 17 4 19C4 19 6 17.5 8 17.5C10 17.5 11.5 19 11.5 21C11.5 21 14 19 14 16C14 14 12.5 12.5 12.5 12.5C12.5 12.5 16 11 16 7C16 4 13.5 2 10.5 1Z" fill="url(#flameGrad)" />
      <path d="M8.5 13C8.5 13 9 14.5 9 16C9 17.5 8 18.5 8 18.5C8 18.5 10.5 18 10.5 15.5C10.5 14 9.5 13 8.5 13Z" fill="rgba(254,215,170,0.6)" />
      <defs>
        <linearGradient id="flameGrad" x1="9" y1="1" x2="9" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
    <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <span style={{ fontSize: 16, fontWeight: 600, color: "#fed7aa", lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>
        {Streak}
      </span>
      <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(251,146,60,0.55)" }}>
        day streak
      </span>
    </div>
  </div>
)}
                </div>
              )}
            </div>

            {/* ── BADGES — horizontal scroll row ── */}
            {sortedBadges.length > 0 && (
              <div className="pp-badges-section">
                <div className="pp-section-header">
                  <span className="pp-section-title">
                    Badges &nbsp;·&nbsp; {earnedBadges.length} of {badges.length} earned
                  </span>
                  <div className="pp-section-line" />
                </div>

                <div className="pp-badges-scroll">
                  <div className="pp-badges-row">
                    {sortedBadges.map((badge, i) => (
                      <div key={i} className="pp-hex-wrap">
                        <div className={`pp-hex-outer ${badge.earned ? "earned" : "locked"}`}>
                          <div className={`pp-hex-inner ${badge.earned ? "earned" : "locked"}`}>
                            {badge.icon}
                          </div>
                        </div>
                        <span className={`pp-hex-name ${badge.earned ? "" : "locked"}`}>
                          {badge.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── TICKER ── */}
            <div
              className="pp-ticker-wrap"
              ref={scrollRef}
              onMouseEnter={pause}
              onMouseLeave={resume}
            >
              <div className="pp-ticker-track">
                {[0, 1].map((d) => (
                  <div key={d} style={{ display: "flex", flexShrink: 0 }}>
                    {categories.map((cat, i) => (
                      <div key={i} className="pp-ticker-item">
                        <span className="pp-ticker-num">{cat.value}</span>
                        <span className="pp-ticker-label">{cat.label}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

