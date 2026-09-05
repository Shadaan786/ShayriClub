import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, LucideCircleUserRound, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./Apis/axiosInstance";
import { MyVerticallyCenteredModal } from "./pages/components/Modals/MyModal";
import { TokenContext } from "./services/push notifications/tokenContextProvider";
import { useContext } from "react";
import { getFCMToken } from "./services/push notifications/getToken";
import { BellRingIcon } from "@animateicons/react/lucide";
import { NotiicationCard } from "./pages/components/NotificationCard";
import { UserRoundIcon } from "@animateicons/react/lucide";
import { LogoutIcon } from "@animateicons/react/lucide";
import logo from "../public/logo2.svg"
import Dropdown from "./pages/components/Dropdown";

// Placeholder components - replace with your actual imports
const CanvasStars = () => (
  <div className="absolute inset-0">
    {[...Array(100)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          opacity: Math.random() * 0.8 + 0.2,
          animationDuration: `${Math.random() * 3 + 2}s`,
        }}
      />
    ))}
  </div>
);


function FeatureScrollDots() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = document.getElementById('featureScroll');
    if (!el) return;
    const handler = () => setActive(Math.round(el.scrollLeft / el.offsetWidth));
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, []);
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {[0,1,2].map(i => (
        <button key={i}
          onClick={() => document.getElementById('featureScroll')?.scrollTo({ left: i * window.innerWidth, behavior: 'smooth' })}
          className="h-2 rounded-full transition-all duration-300"
          style={{ width: active === i ? '26px' : '8px', background: active === i ? '#fff' : 'rgba(255,255,255,0.3)' }}
          aria-label={`Go to slide ${i+1}`} />
      ))}
    </div>
  );
}

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % children.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [children.length]);

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {children.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === current ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Footer = () => {

  const Navigate = useNavigate();

  return(
    <>
   
  <footer className="mt-32 pb-8 border-t bg-gradient-to-r from-black via-[#12061c] to-black backdrop-blur-lg border-b border-amber-500/20">
    <div className="max-w-7xl mx-auto px-4 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h1
  className="relative inline-block text-3xl sm:text-5xl leading-none font-black tracking-wide cursor-default group"
>
  {/* soft glow layer behind the text */}
  <span
    aria-hidden="true"
    className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-amber-400 via-rose-400 to-orange-400 bg-clip-text text-transparent transition-opacity duration-500 group-hover:opacity-70"
    style={{ fontFamily: "Playfair Display" }}
  >
    Alfaz
  </span>

  {/* main text, floating */}
  <span className="relative inline-block">
    <span
      className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      A
    </span>
    <bdi
      className="inline-block -mx-0.5 translate-y-[3px] bg-gradient-to-r from-rose-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"
      style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
    >
      لف
    </bdi>
    <span
      className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent"
      style={{ fontFamily: "'Dancing Script', cursive" }}
    >
      az
    </span>
  </span>
</h1>

          <p className="text-gray-400 text-sm">
            A platform for poets and writers to share their art with the world.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">Kalam</li>
            <li className="hover:text-white cursor-pointer transition">Community</li>
            <li className="hover:text-white cursor-pointer transition">Browse</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer transition">About Us</li>
            <li className="hover:text-white cursor-pointer transition">Guidelines</li>
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
  <li>
    <button
      onClick={() => Navigate('/privacyPolicy')}
      className="block w-full hover:text-white cursor-pointer transition"
    >
      Privacy Policy
    </button>
  </li>
  <li>
    <button
      onClick={() => Navigate('/termsofservices')}
      className="block w-full hover:text-white cursor-pointer transition"
    >
      Terms of Service
    </button>
  </li>
  <li className="hover:text-white cursor-pointer transition">
    Contact
  </li>
</ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/5">
        © 2025 Shayri Club. All rights reserved.
      </div>
    </div>
  </footer>
   </>
  )
};

export default function ShayriClub() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const Navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const uuid = useRef(null);
  const [profilePic, setProfilePic] = useState(null)
  // const [token, setToken] = useState("");
  const[notificationsAvailable, setNotificationsAvailable] = useState(false);
  const [notificationSeen, setNotificationSeen] = useState(false)

const[notificationOpened, setNotificationOpened] = useState(false);

  const handleLogOut=()=>{

    getFCMToken()
    .then((token)=>{


      axiosInstance.
    get(`/api/logout?token=${token}`)

    .then((response)=>{
         console.log(response.data);
    }).catch((error)=>{
      console.error("Error while Signing out", error)
    })


    })

    
  }


 const menuItems = [
    {
      label: "Profile",
      onClick: () => Navigate(`/profile?userId=${uuid.current}`),
    },
    {
      label: "Saved kalams"
    },
    {
      label: "Logout",
      onClick: ()=>handleLogOut(),
    },
      {
      label: "Settings",
      onClick: () => console.log("Settings"),
    },
    {
      label: "Get Support"
    },
    {
      label: "Feedback"
    },
    {
      label: "Privacy policy"
    },
    {
      label: "About us"
    },
  ];
  
  const slides = [
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
  ];

  // console.log("fcm_tokennnnn", fcm_token)
  // Auto-advance the feature scroll hero
useEffect(() => {
  const el = document.getElementById('featureScroll');
  if (!el) return;
  const timer = setInterval(() => {
    const next = Math.round(el.scrollLeft / el.offsetWidth) + 1;
    el.scrollTo({ left: (next % 3) * el.offsetWidth, behavior: 'smooth' });
  }, 5000);
  return () => clearInterval(timer);
}, []);

  useEffect(()=>{
    axiosInstance
    .get('/api/trackUser',{
      withCredentials: true
    }).then((Response)=>{

      if(!Response.data.loggedIn){
        console.log("checking_not_loggedIn", Response.data.loggedIn)

        setIsLoggedIn(false)
      }else{
        setIsLoggedIn(true)
        console.log("checking_logged_in", )
      }

    })
  })
  // useEffect(()=>{

  //   const gettinUserId = async()=>{

  //     const response =  await axiosInstance
  //   .get('/redis/userId')

    
  //   const data = JSON.parse(response.data)
  //   console.log(data._id)
  //   // const userId = response.data._id;
  //   uuid.current = data._id;
  //   // axiosInstance
  //   // .get(`/api/notifictions?uuid=${userId}`)

  //   // .then((response)=>{
  //   //   console.log("response.data", response.data)
  //   //   setNotifications(response.data)
  //   // }).catch((error)=>{
  //   //   console.log("Error while fetching user notifications", error);
  //   // })


  //   }

  //   gettinUserId()

   
  // }, [])

  //------------------------------------------------------------------------------------------------>


  //-----------------------------------------------------------------------------------------------------
  
    




  useEffect(()=>{



  

    const fetchingNotifications=async()=>{

       const response =  await axiosInstance.get('/api/userId',{
      withCredentials: true
    })
        uuid.current = response.data._id
        setProfilePic(response.data.profilePic)

    const userId = response.data._id;

    console.log("check", userId._id)

      axiosInstance
      .get(`/api/offlineNotifications`)
      .then((response)=>{
        console.log("offline_notifications", response.data.offlineNotifications)
        // console.log(response.data.notifications.length)
        setNotifications(response.data.offlineNotifications)
      })
    }

    fetchingNotifications()

  }, [])

  const handleNotificationSeen=(notificationId)=>{

    axiosInstance
    .post('/api/notificationStatus',{
      notificationId: notificationId
    },{
      withCredentials: true
    })

  }
    

  return (
    <div className="relative min-h-screen bg-black">
      {/* Stars Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CanvasStars />
      </div>

      {/* Content */}
      <div className="relative z-10">
{/* Navbar */}
<nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-[#1a0828] to-black backdrop-blur-lg border-b border-amber-500/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20 gap-4">

      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2.5 group cursor-pointer">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
          <img
            src={logo}
            alt="Shayri Club Logo"
            className="relative h-14 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>

        <h1 className="relative inline-block text-2xl sm:text-4xl leading-none font-black tracking-wide cursor-default group">
          <span
            aria-hidden="true"
            className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-amber-400 via-rose-400 to-orange-400 bg-clip-text text-transparent transition-opacity duration-500 group-hover:opacity-70"
            style={{ fontFamily: "Playfair Display" }}
          >
            Alfaz
          </span>

          <span className="relative inline-block">
            <span
              className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              A
            </span>
            <bdi
              className="inline-block -mx-0.5 translate-y-[3px] bg-gradient-to-r from-rose-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            >
              لف
            </bdi>
            <span
              className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              az
            </span>
          </span>
        </h1>
      </div>

      {/* Desktop Navigation — grouped pill for visual separation */}
      <div className="hidden md:flex items-center gap-1 px-1.5 py-1.5">
        <a
          href="/kalam"
          className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-amber-300 transition-colors rounded-full hover:bg-amber-400/10"
        >
          Kalam
        </a>
        <a
          href="/spaces"
          className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-amber-300 transition-colors rounded-full hover:bg-amber-400/10"
        >
          Community
        </a>
        <a
          href="/Social"
          className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-amber-300 transition-colors rounded-full hover:bg-amber-400/10"
        >
          Browse
        </a>
        <a
          href="/albumsLive"
          className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-amber-300 transition-colors rounded-full hover:bg-amber-400/10"
        >
          Library
        </a>
      </div>

      {/* Right-side actions — all grouped in one consistent flex row */}
      <div className="flex items-center gap-2 sm:gap-3">

        {isLoggedIn && (
          <button
            onClick={() => setNotificationOpened(true)}
            aria-label="Notifications"
            className="relative p-2.5 rounded-lg text-gray-300 hover:text-amber-300 hover:bg-amber-400/10 transition-colors"
          >
            <BellRingIcon size={22} duration={1} color="currentColor" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-black" />
          </button>
        )}

        {/* Auth / profile — desktop only */}
        <div className="hidden md:flex items-center gap-3">
          {!isLoggedIn && (
            <>
              <button
                onClick={() => Navigate('/Signup/Login')}
                className="px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition rounded-lg border border-white/20"
              >
                Login
              </button>
              <button
                onClick={() => Navigate('/Signup')}
                className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 text-black rounded-lg hover:shadow-lg hover:shadow-orange-500/40 transition"
              >
                Sign Up
              </button>
            </>
          )}

          {isLoggedIn && (
            <div className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-lg border border-white/10 hover:border-amber-400/30 hover:bg-amber-400/5 transition-colors">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-black text-xs font-bold flex-shrink-0">
                {("user" || "U")}
              </div>
              <Dropdown title={"Profile"} items={menuItems} />
            </div>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
      <div className="px-4 py-4 space-y-1">
        <a href="/kalam" className="block px-4 py-3 text-gray-300 hover:text-amber-300 hover:bg-amber-400/10 rounded-lg transition">
          Kalam
        </a>
        <a href="/DispCommunities" className="block px-4 py-3 text-gray-300 hover:text-amber-300 hover:bg-amber-400/10 rounded-lg transition">
          Community
        </a>
        <a href="/Social" className="block px-4 py-3 text-gray-300 hover:text-amber-300 hover:bg-amber-400/10 rounded-lg transition">
          Browse
        </a>

        <div className="pt-4 mt-2 space-y-2 border-t border-white/10">
          {!isLoggedIn && (
            <>
              <button
                onClick={() => Navigate('/Signup/Login')}
                className="w-full px-4 py-3 text-white border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                Login
              </button>
              <button
                onClick={() => Navigate('/Signup')}
                className="w-full px-4 py-3 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 text-black font-semibold rounded-lg"
              >
                Sign Up
              </button>
            </>
          )}

          {isLoggedIn && (
            <div className="px-2">
              <Dropdown title={"Profile"} items={menuItems} />
            </div>
          )}
        </div>
      </div>
    </div>
  )}
</nav>

        {/* // ─── ADD THIS SECTION COMPONENT (insert just before the existing <section className="pt-32 pb-20"> Hero) ─── */}

{/* ── Full-Screen Horizontal Scroll Feature Hero ── */}
<section className="relative w-full" style={{ marginTop: '80px' }}>
  {/* Scroll track */}
  <div
    id="featureScroll"
    className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
    style={{ scrollbarWidth: 'none', cursor: 'grab' }}
    onMouseDown={(e) => {
      const el = document.getElementById('featureScroll');
      el._isDragging = true; el._startX = e.pageX; el._scrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
    }}
    onMouseMove={(e) => {
      const el = document.getElementById('featureScroll');
      if (!el._isDragging) return;
      el.scrollLeft = el._scrollLeft - (e.pageX - el._startX);
    }}
    onMouseUp={() => { const el = document.getElementById('featureScroll'); el._isDragging = false; el.style.cursor = 'grab'; }}
    onMouseLeave={() => { const el = document.getElementById('featureScroll'); el._isDragging = false; el.style.cursor = 'grab'; }}
  >
{/* ── Slide 1: Audio Kalam ── */}
<div className="relative flex-shrink-0 w-full h-screen snap-start flex items-center justify-center overflow-hidden min-h-[560px]">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1400&q=80')",
      filter: 'brightness(0.18) saturate(0.6)',
    }}
  />
  <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg,rgba(60,10,90,0.72) 0%,rgba(10,5,30,0.55) 55%,rgba(0,0,0,0.15) 100%)' }} />

  <div className="relative z-10 flex items-center w-full h-full px-16 py-14 gap-12">
    {/* LEFT: all text content */}
    <div className="flex flex-col gap-5 flex-[0_0_50%] max-w-[520px]">
      <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
        style={{ background: 'rgba(168,85,247,0.18)', border: '1.5px solid rgba(168,85,247,0.4)' }}>🎙️</div>

      <span className="inline-block text-xs tracking-widest uppercase px-4 py-1.5 rounded-full font-semibold w-fit"
        style={{ background: 'rgba(168,85,247,0.18)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.3)' }}>
        New feature
      </span>

      <h2 className="text-5xl font-extrabold text-white leading-tight tracking-tight">
        Build & publish your<br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">kalam with audio</span>
      </h2>

      <p className="text-gray-300 text-base leading-relaxed max-w-[440px]">
        Give your shayari a voice. Record, edit, and layer ambient sounds with your words — then publish a full audio experience your audience can feel.
      </p>

      <div className="flex flex-wrap gap-2">
        {['🎚️ Sound mixing','🎤 Voice recording','🎶 Ambient music','📢 One-tap publish'].map(t => (
          <span key={t} className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white/75"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)' }}>{t}</span>
        ))}
      </div>

      <div className="flex gap-3 flex-wrap mt-1">
        <button className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm"
           style={{
    background: "linear-gradient(to right, #fbbf24, #fb923c, #eab308)",
  }}>Start recording ›</button>
        <button className="px-7 py-3.5 rounded-xl font-semibold text-sm"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}>
          See examples
        </button>
      </div>
    </div>

{/* RIGHT: auto-scrolling screenshot with glassmorphism, tilt, glow & badges */}
<div className="flex-1 flex items-center justify-center h-full py-4 relative">

  {/* Purple glow behind */}
  <div
    className="absolute inset-0 pointer-events-none z-0"
    style={{
      background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(139,92,246,0.35) 0%, transparent 70%)',
    }}
  />

  {/* Tilt wrapper */}
  <div className="relative z-10" style={{ transform: 'rotate(2deg)' }}>

    {/* Floating badges */}
    {/* Top-left */}
    <div className="absolute -top-4 -left-8 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
      style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}>
      🎨 120+ Themes
    </div>
    {/* Top-right */}
    <div className="absolute -top-4 -right-8 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
      style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', whiteSpace: 'nowrap' }}>
      🖋️ 40 Fonts
    </div>
    {/* Bottom-left */}
    <div className="absolute -bottom-4 -left-8 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
      style={{ background: 'rgba(168,85,247,0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(168,85,247,0.4)', whiteSpace: 'nowrap' }}>
      ✨ Live Preview
    </div>
    {/* Bottom-right */}
    <div className="absolute -bottom-4 -right-8 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
      style={{ background: 'rgba(168,85,247,0.25)', backdropFilter: 'blur(12px)', border: '1px solid rgba(168,85,247,0.4)', whiteSpace: 'nowrap' }}>
      🌈 Unlimited Colors
    </div>

    {/* Glassmorphism card */}
    <div
      className="relative overflow-hidden rounded-2xl w-full max-w-[600px] max-h-[600px]"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(16px)',
        border: '1.5px solid rgba(255,255,255,0.15)',
        boxShadow: '0 0 80px rgba(139,92,246,0.3), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)',
        padding: '6px',
      }}
    >
      {/* Inner rounded clip for the scroll */}
      <div className="relative overflow-hidden rounded-xl" style={{ maxHeight: '588px' }}>

        {/* Fade top */}
        <div className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(6,4,15,0.85), transparent)' }} />
        {/* Fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(6,4,15,0.85), transparent)' }} />

        {/* Scrolling track */}
        <div className="flex flex-col animate-[scrollUp_18s_linear_infinite] hover:[animation-play-state:paused]">
          <img src="/2nd hero.png" alt="App preview" className="w-full block" />
          <img src="/2nd hero.png" alt="App preview" className="w-full block" />
        </div>

      </div>
    </div>

  </div>
</div>
  </div>
</div>

    {/* ── Slide 2: Kalam of the Week ── */}
    <div className="relative flex-shrink-0 w-full h-screen snap-start flex items-center justify-center overflow-hidden min-h-[560px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1400&q=80')",
          filter: 'brightness(0.28)',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(15,76,129,0.65) 0%,rgba(0,0,0,0.5) 100%)' }} />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl"
          style={{ background: 'rgba(251,191,36,0.18)', border: '1.5px solid rgba(251,191,36,0.4)' }}>🏆</div>
        <span className="inline-block text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 font-medium"
          style={{ background: 'rgba(251,191,36,0.15)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}>Weekly spotlight</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Kalam <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">of the Week</span>
        </h2>
        <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto leading-relaxed">
          Every week, our community votes for the piece that moved them most. Get featured, earn recognition, and inspire the next generation of poets.
        </p>
        {/* Winner card */}
        <div className="flex items-center gap-4 text-left p-4 rounded-xl mb-7 mx-auto max-w-sm"
          style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }}>
          <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-2xl"
            style={{ background: 'linear-gradient(135deg,#a855f7,#ec4899)' }}>📜</div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-0.5">This week's winner</p>
            <p className="font-semibold text-white text-base">Tanhaiyon Ki Baat</p>
            <p className="text-xs text-white/50">by @aditi_shayar · 2.4k votes</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-7 py-3.5 rounded-lg font-semibold text-white"
            style={{ background: 'linear-gradient(90deg,#d97706,#ea580c)' }}>Nominate a kalam ›</button>
          <button className="px-7 py-3.5 rounded-lg font-semibold text-white"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.2)' }}>Past winners</button>
        </div>
      </div>
    </div>

    {/* ── Slide 3: Album Creation ── */}
    <div className="relative flex-shrink-0 w-full h-screen snap-start flex items-center justify-center overflow-hidden min-h-[560px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=1400&q=80')",
          filter: 'brightness(0.28)',
        }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(5,78,72,0.65) 0%,rgba(0,0,0,0.5) 100%)' }} />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 text-4xl"
          style={{ background: 'rgba(20,184,166,0.18)', border: '1.5px solid rgba(20,184,166,0.4)' }}>📚</div>
        <span className="inline-block text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 font-medium"
          style={{ background: 'rgba(20,184,166,0.15)', color: '#2dd4bf', border: '1px solid rgba(20,184,166,0.3)' }}>Collections</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Create your own <br />
          <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">poetry albums</span>
        </h2>
        <p className="text-gray-300 text-lg mb-5 max-w-xl mx-auto leading-relaxed">
          Curate your best work into beautiful themed albums. Add cover art, arrange pieces, and share a collection that tells your story from first verse to last.
        </p>
        {/* Mini album grid */}
        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mb-7">
          {[
            { label: 'Ishq', bg: 'linear-gradient(135deg,#1e1b4b,#4c1d95)' },
            { label: 'Dard', bg: 'linear-gradient(135deg,#1c1917,#78350f)' },
            { label: 'Zindagi', bg: 'linear-gradient(135deg,#022c22,#14532d)' },
            { label: 'Aasman', bg: 'linear-gradient(135deg,#1e3a5f,#1e40af)' },
            { label: '＋', bg: 'linear-gradient(135deg,#4c0519,#9f1239)', center: true },
            { label: 'Raatein', bg: 'linear-gradient(135deg,#1c1917,#44403c)' },
          ].map((a, i) => (
            <div key={i} className="aspect-square rounded-xl flex items-end p-2 text-xs font-bold text-white"
              style={{ background: a.bg, alignItems: a.center ? 'center' : 'flex-end', justifyContent: a.center ? 'center' : 'flex-start', fontSize: a.center ? '20px' : undefined }}>
              {a.label}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-7 py-3.5 rounded-lg font-semibold text-white"
            style={{ background: 'linear-gradient(90deg,#0d9488,#6366f1)' }}>Create album ›</button>
          <button className="px-7 py-3.5 rounded-lg font-semibold text-white"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.2)' }}>Browse albums</button>
        </div>
      </div>
    </div>
  </div>

  {/* ── Nav arrows ── */}
  {/* {[{ dir: 'left', label: '‹', delta: -1 }, { dir: 'right', label: '›', delta: 1 }].map(({ dir, label, delta }) => (
    <button
      key={dir}
      className={`absolute top-1/2 -translate-y-1/2 ${dir === 'left' ? 'left-5' : 'right-5'} z-20 w-10 h-10 rounded-full flex items-center justify-center text-white text-xl transition`}
      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}
      onClick={() => {
        const el = document.getElementById('featureScroll');
        el.scrollBy({ left: delta * el.offsetWidth, behavior: 'smooth' });
      }}
      aria-label={dir === 'left' ? 'Previous slide' : 'Next slide'}
    >{label}</button>
  ))} */}

  {/* ── Dot indicators ── */}
  <FeatureScrollDots />
</section>
       

        {/* Hero Section */}
        {/* <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Unleash the{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Writer
                </span>
                <br />
                Within You
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Join a vibrant community of poets and writers. Share your shayari, discover incredible works, and connect with fellow artists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center justify-center gap-2">
                  Start Writing
                  <ChevronRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg hover:bg-white/10 transition border border-white/10">
                  Explore Works
                </button>
              </div>
            </div>
          
          </div>
        </section> */}
<MyVerticallyCenteredModal isOpen={notificationOpened} onClose={() => setNotificationOpened(false)}>
  <div
    className="rounded-xl w-full max-w-md max-h-[80vh] flex flex-col overflow-hidden border border-[#f59e0b]/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    style={{ background: "rgba(29,13,33,0.45)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)" }}
  >

    {/* Header */}
    <div className="px-6 py-5 border-b border-[#f59e0b]/15 relative">
      <div className="flex justify-between items-center mb-1">
        <h2 className="flex items-center gap-3 text-[#f4daf7] text-xl font-semibold tracking-wide">
          Notifications
          {/* {notifications.length > 0 && (
            <span className="bg-[#f59e0b]/10 text-[#ffc174] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#f59e0b]/20">
              {notifications.length} NEW
            </span>
          )} */}
        </h2>
        <button
          onClick={() => setNotificationOpened(false)}
          className="w-8 h-8 flex items-center justify-center rounded-full text-[#d8c3ad] hover:text-[#ffc174] transition-colors active:scale-90"
          aria-label="Close notifications"
        >
          ✕
        </button>
      </div>
      <div className="w-12 h-1 bg-[#ffc174] rounded-full mt-2" />
    </div>
    

    {/* List */}
    <div className="flex-1 overflow-y-auto p-2 space-y-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-[#f59e0b]/20 [&::-webkit-scrollbar-thumb]:rounded-full">
      {notifications.length > 0 ? (
        notifications.map((item, i) => (
          
          <button
            key={item.id ?? i}
            onClick={() => {Navigate(item.toNavigate); handleNotificationSeen(item._id)}}
            className="w-full text-left flex gap-4 p-4 rounded-lg border border-transparent transition-all duration-300 hover:bg-[#f59e0b]/5 hover:border-[#f59e0b]/40 hover:-translate-y-0.5"
          >
                  {console.log("see status", item.isSeen)}

            {/* Status dot*/}
           {!item.isSeen && <div className="relative flex-shrink-0 mt-1">
              <span
                className="block w-2.5 h-2.5 rounded-full"
                style={{
                  background: item.read ? "transparent" : "#f59e0b",
                  boxShadow: item.read ? "none" : "0 0 8px #f59e0b",
                }}
              />
            </div>}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1 gap-2">
                <h3 className={`truncate text-sm ${item.read ? "font-medium text-[#f4daf7]/70" : "font-bold text-[#f4daf7]"}`}>
                  {item.notificationTitle}
                </h3>
                <span className="text-[10px] tracking-wider text-[#d8c3ad] opacity-60 whitespace-nowrap font-mono">
                  {item.createdAt ?? "Just now"}
                </span>
              </div>
              <p className="text-sm text-[#d8c3ad] leading-relaxed truncate">
                {item.notificationBody}
              </p>
            </div>
          </button>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center px-8">
          <div className="w-20 h-20 rounded-full bg-[#f59e0b]/5 border border-[#f59e0b]/10 flex items-center justify-center mb-6">
            <span className="text-[#f59e0b] text-3xl opacity-40">🔔</span>
          </div>
          <h3 className="text-[#f4daf7] font-semibold text-lg mb-2">Your notifications will appear here</h3>
          <p className="text-[#d8c3ad] max-w-xs mx-auto text-sm">
            We'll let you know when something important happens in your elite ecosystem.
          </p>
        </div>
      )}
    </div>

    {/* Footer */}
    <div className="px-6 py-4 border-t border-[#f59e0b]/15 flex justify-between items-center" style={{ background: "rgba(23,8,28,0.5)" }}>
      {/* <button className="text-[#d8c3ad] hover:text-[#ffc174] transition-colors text-[10px] font-medium tracking-[0.15em] font-mono">
        MARK ALL AS READ
      </button> */}
      <button onClick={()=>setNotificationOpened(false)} className="text-[#d8c3ad] text-right hover:text-[#ffc174] transition-colors text-[10px] font-medium tracking-[0.15em] font-mono flex items-center gap-1">
        close <span className="text-sm">›</span>
      </button>
    </div>
  </div>
</MyVerticallyCenteredModal>

        {/* Featured Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  Featured Collections
                </h3>
                <p className="text-gray-400">Discover curated poetry and shayari from our community</p>
              </div>
              <a href="/browse" className="hidden sm:flex items-center gap-2 text-purple-400 hover:text-purple-300 transition">
                View All
                <ChevronRight size={20} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Carousel Card */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition">
                <Carousel>
                  {slides.map((url, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={url}
                        className="w-full h-[400px] object-cover rounded-xl"
                        alt={`Featured ${index + 1}`}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Stats/Info Cards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
                  <h4 className="text-2xl font-bold text-white mb-2">10K+ Poets</h4>
                  <p className="text-gray-300">Active community members sharing their art daily</p>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20">
                  <h4 className="text-2xl font-bold text-white mb-2">50K+ Works</h4>
                  <p className="text-gray-300">Published poems and shayari across all genres</p>
                </div>
                <div className="bg-gradient-to-br from-pink-600/20 to-yellow-600/20 backdrop-blur-lg rounded-2xl p-6 border border-pink-500/20">
                  <h4 className="text-2xl font-bold text-white mb-2">100+ Events</h4>
                  <p className="text-gray-300">Monthly poetry sessions and community gatherings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}