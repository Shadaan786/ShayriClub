import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../Apis/axiosInstance";
import { Link } from "react-router-dom";

const IqbalApi = () => {
  const [shayri, setShayri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPoetry, setShowPoetry] = useState(false);
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate stars
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

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Axios fetch
  useEffect(() => {
    axiosInstance
      .get("/api/sher/Allama_Iqbal")
      .then((res) => {
        setShayri(res.data);
        setLoading(false);
        setTimeout(() => setShowPoetry(true), 1000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleNextPoetry = () => {
    if (!shayri.length) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(Math.floor(Math.random() * shayri.length));
      setIsAnimating(false);
    }, 600);
  };

  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
  };

  if (loading)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
        <h2 className="text-3xl sm:text-4xl text-white animate-pulse">
          Loading Allama Iqbal...
        </h2>
      </div>
    );

  const currentPoetry = shayri[currentIndex];

  return (
    <div
      className="min-h-screen bg-black overflow-hidden relative px-2 sm:px-4"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 69, 19, 0.1) 0%, rgba(0, 0, 0, 1) 50%)`,
      }}
    >
      {/* Stars */}
      {stars.map((star) => (
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
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-[6rem] font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 animate-pulse">
          اقبال
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 animate-pulse">
          ALLAMA IQBAL
        </h2>

        {/* Description */}
        <div className="space-y-1 sm:space-y-2 mb-6 text-center">
          <p className="text-purple-200 text-xs sm:text-sm md:text-xl animate-bounce">
            🌟 Philosopher of the East • شاعر مشرق 🌟
          </p>
          <p className="text-cyan-200 text-[10px] sm:text-xs md:text-lg animate-pulse">
            ✨ Architect of Dreams • Awakener of Souls • Voice of Eternity ✨
          </p>
        </div>

        {/* Poetry Box */}
        <div className="relative group max-w-lg w-full transform transition-all duration-2000 delay-1000">
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 border-2 border-white/30 shadow-[0_0_80px_rgba(147,51,234,0.3)] hover:shadow-[0_0_120px_rgba(147,51,234,0.5)] transition-all duration-1000 relative overflow-hidden group-hover:scale-[1.02]">
            <div className="text-center relative z-10 min-h-[150px] sm:min-h-[180px] md:min-h-[220px] flex items-center justify-center">
              <p
                className={`text-white text-base sm:text-xl md:text-2xl leading-relaxed whitespace-pre-line transition-all duration-1000 ${
                  isAnimating ? "opacity-0 translate-y-8 scale-95 rotate-1" : "opacity-100 translate-y-0 scale-100 rotate-0"
                }`}
              >
                {currentPoetry?.text}
              </p>
            </div>

            {/* Translation */}
            {currentPoetry?.translation && (
              <div className="border-t border-white/20 pt-2 sm:pt-4">
                <p className="text-cyan-200 text-sm sm:text-base md:text-lg font-light italic leading-relaxed whitespace-pre-line animate-pulse">
                  {currentPoetry.translation}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Next Button */}
        <div className="mt-6 sm:mt-8">
          <button
            onClick={handleNextPoetry}
            onMouseDown={createRipple}
            disabled={isAnimating}
            className="relative px-5 sm:px-10 py-2 sm:py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white font-black rounded-full shadow-[0_0_40px_rgba(147,51,234,0.5)] hover:shadow-[0_0_80px_rgba(147,51,234,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-500 text-xs sm:text-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 flex items-center space-x-2 sm:space-x-3">
              <span className="text-lg sm:text-xl">🌟</span>
              <span>{isAnimating ? "MANIFESTING..." : "NEXT DIVINE VERSE"}</span>
              <span className="text-lg sm:text-xl">🌟</span>
            </span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center max-w-md">
          <p className="text-purple-300/80 text-xs sm:text-sm md:text-base italic leading-relaxed animate-pulse">
            "In every verse lies a universe of infinite possibilities. Let Iqbal's words be the compass that guides your soul through the cosmos of consciousness."
          </p>
        </div>
      </div><Link to = '/kalam'>
      <button>Submit you  Kalam</button>
      </Link>

      {/* Ripple CSS */}
      <style jsx>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: scale(0);
          animation: ripple-animation 0.6s linear;
          pointer-events: none;
        }
        @keyframes ripple-animation {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default IqbalApi;
