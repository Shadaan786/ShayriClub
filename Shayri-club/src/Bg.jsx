import allama from "./Allama.jpg";
import jaun from "./Jaun.jpg";
// import logo from "./shayri club.png";
import background from "./background.jpg";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "./image.png"
import commu from "./communities.png"
import comm2 from "./kalamImg.png"
// import carousel from "./pages/Carousel"
import Carousel from "./pages/Carousel";
import CanvasStars from "./pages/CanvasStars";
import Footer from "./pages/Footer";






export default function ShayriClub() {

  const [stars, setStars] = useState([]);
  const slides =[
   commu,
   comm2,
   commu,
   commu
  ]

   useEffect(() => {
      const starArray = [];
      for (let i = 0; i < 200; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100, 
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      setStars(starArray);
    }, []);
    
  return (
  <div className="relative min-h-screen bg-black">

    {/* 🌌 STARS LAYER */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))} */}

         <CanvasStars />
    </div>

    {/* 🕶️ DARK OVERLAY (BLOCKS STARS) */}
    {/* <div className="absolute inset-0 z-10 bg-black/80"></div> */}

    {/* 🌟 CONTENT */}
    <div className="relative z-20 px-2 sm:px-4">

      {/* NAVBAR */}
      <div className="
  sticky top-0 z-50
  w-full
  flex
  py-20
  p-2 sm:p-6 md:p-4
  bg-black/90
  backdrop-blur-md
">
        <ul className="w-full flex items-baseline">
          <li className="sm:text-5xl md:text-[4rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400">
            Shayri Club
          </li>

          <li className="gap-6 flex mx-auto items-center">
            <Link to={"/Kalam"}>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white font-black rounded-full">
              Kalam
            </span>
            </Link>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white font-black rounded-full">
              Community
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white font-black rounded-full">
              Browse
            </span>
          </li>

          <li className="flex ml-auto gap-4">
            <span className="px-4 py-2 bg-blue-700 rounded-lg">Login</span>
            <span className="px-4 py-2 bg-blue-700 rounded-lg">Signup</span>
          </li>
        </ul>
      </div>

      {/* HERO */}
      <div className="
  h-72 
  p-4 
  
  mt-96
  flex items-center justify-center
  rounded-2xl
  bg-white/10
  backdrop-blur-xl
  border border-white/20
  shadow-[0_0_40px_rgba(255,255,255,0.08)]
">
  <p
    className="
      text-7xl 
      font-mono 
      text-white 
      relative 
      w-max
      before:absolute 
      before:inset-0 
      before:animate-typewriter 
      before:bg-white/10
      after:absolute 
      after:inset-0 
      after:w-[0.125em] 
      after:animate-caret 
      after:bg-white
    "
  >
    Unleash the writer within you...
  </p>
</div>


      {/* CAROUSEL */}
      <div className="w-1/2  mt-20 bg-black/95 rounded-2xl p-4">
        <Carousel>
          {slides.map((s, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={s}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
                alt="slide"
              />
            </div>
          ))}
        </Carousel>
      </div>

<Footer/>
    </div>
    
  </div>
);

}
