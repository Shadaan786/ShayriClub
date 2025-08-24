import allama from "./Allama.jpg";
import jaun from "./Jaun.jpg";
import logo from "./shayri club.png";
import background from "./background.jpg";
import {Link} from "react-router-dom";
export default function ShayriClub() {
  return (
    
    <div
      className="relative w-screen min-h-screen font-['Playfair_Display']"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Top bar */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-5 p-5">
        <img
          src={logo}
          alt="Shayri Club Logo"
          className="w-24 h-auto rounded-2xl shadow-lg shadow-white/80 bg-white/10 p-1"
        />
        <h1 className="text-white text-5xl md:text-6xl uppercase tracking-[8px] animate-fadeInSlide">
          SHAYRI CLUB
        </h1>
      </div>

      {/* Gallery */}
      <div className="relative z-10 flex flex-wrap justify-center gap-10 mt-16 p-5">
        {/* Allama Iqbal */}
        <div className="text-center transition-transform duration-300 hover:scale-105">
          
          <Link to = "/IqbalInfo">

            <img
              src={allama}
              alt="Allama Iqbal"
              className="w-64 h-64 rounded-full p-2 shadow-lg shadow-white/30 hover:shadow-white/80 transition-all duration-400"
            />
            </Link>
          
          <p className="text-white text-2xl mt-2">علامہ اقبال</p>
        </div>

        {/* Jaun Elia */}
        <div className="text-center transition-transform duration-300 hover:scale-105">
          <Link to ="/JaunInfo">
            <img
              src={jaun}
              alt="Jaun Elia"
              className="w-64 h-64 rounded-full p-2 shadow-lg shadow-white/30 hover:shadow-white/80 transition-all duration-400"
            />
          </Link>
          <p className="text-white text-2xl mt-2">جون ایلیا</p>
        </div>
      </div>

      {/* Keyframes for fadeInSlide */}
      <style>
        {`
          @keyframes fadeInSlide {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlide {
            animation: fadeInSlide 1.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
