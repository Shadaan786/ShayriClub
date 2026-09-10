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

{/* ── Slide 2: Kalam of the Week (Archival Folio) ── */}
<div className="relative flex-shrink-0 w-full h-screen snap-start flex items-center justify-center overflow-hidden min-h-[560px] bg-[#0B0806] text-[#F5EDE0]">
  <style>{`
    @keyframes kotw-manuscriptFloat {
      0%, 100% {
        transform: translateY(0px) rotate(0deg) scale(1);
        box-shadow: 0 28px 70px -15px rgba(0, 0, 0, 0.95), 0 0 50px -10px rgba(212, 163, 89, 0.12), inset 0 1px 0 rgba(229, 192, 123, 0.18);
      }
      50% {
        transform: translateY(-16px) rotate(0.4deg) scale(1.008);
        box-shadow: 0 42px 90px -10px rgba(0, 0, 0, 0.98), 0 0 75px 0px rgba(212, 163, 89, 0.22), inset 0 1px 0 rgba(229, 192, 123, 0.28);
      }
    }
    .kotw-floating-folio {
      animation: kotw-manuscriptFloat 7s ease-in-out infinite;
    }
    .kotw-parchment-glow {
      background: radial-gradient(circle at 50% 30%, rgba(212, 163, 89, 0.14) 0%, rgba(35, 25, 18, 0) 70%);
    }
    @keyframes kotw-acousticWave {
      0%, 100% { height: 26%; opacity: 0.55; }
      50% { height: 95%; opacity: 0.98; }
    }
    .kotw-wave-reed {
      animation: kotw-acousticWave 1.9s ease-in-out infinite;
      transform-origin: bottom;
    }
    .kotw-deckle-inset {
      box-shadow: inset 0 0 20px rgba(11, 8, 6, 0.7), inset 0 0 3px rgba(212, 163, 89, 0.35);
    }
    @keyframes kotw-spotlightBeam {
      0%, 100% { opacity: 0.65; }
      50% { opacity: 0.95; }
    }
    .kotw-animate-spotlight-beam {
      animation: kotw-spotlightBeam 4.5s ease-in-out infinite;
    }
    @keyframes kotw-auraHalo {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 0.9; transform: scale(1.04); }
    }
    .kotw-animate-aura-halo {
      animation: kotw-auraHalo 5s ease-in-out infinite;
    }
    @keyframes kotw-moteFloat {
      0% { opacity: 0; transform: translateY(0px); }
      20% { opacity: 0.9; }
      80% { opacity: 0.6; }
      100% { opacity: 0; transform: translateY(-40px); }
    }
    .kotw-mote-1 { animation: kotw-moteFloat 4.2s ease-in-out infinite 0.2s; }
    .kotw-mote-2 { animation: kotw-moteFloat 3.6s ease-in-out infinite 1.1s; }
    .kotw-mote-3 { animation: kotw-moteFloat 4.8s ease-in-out infinite 0.6s; }
    .kotw-mote-4 { animation: kotw-moteFloat 3.9s ease-in-out infinite 1.6s; }
    .kotw-mote-5 { animation: kotw-moteFloat 4.5s ease-in-out infinite 2.1s; }
  `}</style>

  {/* Background Warm Vignette & Antique Paper Glow */}
  <div className="absolute inset-0 pointer-events-none kotw-parchment-glow opacity-80 z-0"></div>
  <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#d4a359_0.75px,transparent_0.75px)] [background-size:24px_24px] z-0"></div>

  <main className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10 px-6 sm:px-10 lg:px-14">

    {/* LEFT COLUMN: EDITORIAL NARRATIVE & SCHOLARLY CITATIONS */}
    <div className="lg:col-span-5 flex flex-col justify-center space-y-7 pr-0 lg:pr-3">

      {/* Wax Seal & Archival Epigraph Badge */}
      <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#18120D]/90 border border-[#4F3D30]/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.5)] w-fit">
        <span className="relative flex h-3 w-3 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A359] opacity-40"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-br from-[#E5C07B] via-[#C89547] to-[#754F1F] shadow-sm border border-[#FAF3DF]/30"></span>
        </span>
        <span className="text-[10.5px] font-cinzel tracking-[0.22em] text-[#D4A359] uppercase font-semibold">
          FOLIO ARCHIVE • ISSUE NO. 48
        </span>
        <span className="h-3 w-[1px] bg-[#4D3313]"></span>
        <span className="text-[10px] font-mono text-[#A89480] tracking-wider">ANNO 2026</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-3.5">
        <h1 className="text-4xl sm:text-5xl lg:text-[62px] leading-[1.04] font-serif font-light tracking-tight text-[#FAF6EF]">
          <span className="block text-[13px] sm:text-[14px] font-cinzel font-medium tracking-[0.28em] text-[#D4A359]/90 uppercase mb-2">
            Weekly Literary Laurel
          </span>
          <span className="block font-serif text-[#F5EDE0] tracking-normal">Honoring the</span>
          <span
            className="italic block font-serif font-normal py-0.5"
            style={{
              background: 'linear-gradient(135deg, #FDE68A 0%, #E5C07B 35%, #D4A359 65%, #9B6E32 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            verse that moved
          </span>
          <span className="inline-block relative text-[#FAF6EF] font-serif">
            thousands<span className="text-[#D4A359] font-serif">.</span>
          </span>
        </h1>
        <p className="text-[16px] sm:text-[17px] text-[#C2B29F] font-body leading-relaxed pt-1 font-normal max-w-lg">
          Every week, the community gathers to listen, cherish, and resonate with verses across the guild.
          The kalam that touches the most souls—championed by listeners, repeated plays, and heartfelt
          community likes—takes center stage as{' '}
          <span className="text-[#FAF6EF] italic font-serif">Kalam of the Week</span>.
        </p>
      </div>

      {/* Archival Criterion Tablets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
        <div className="p-4 rounded-xl bg-[#140E0A]/95 border border-[#3D2F24] hover:border-[#754F1F] transition-colors relative group shadow-lg shadow-black/40">
          <div className="flex items-center gap-2.5 text-[#D4A359] text-[11px] font-cinzel tracking-[0.14em] font-semibold">
            <svg className="w-4 h-4 text-[#D4A359]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
              />
            </svg>
            COMMUNITY RESONANCE
          </div>
          <p className="text-[13px] text-[#A89684] font-body mt-2 leading-snug">
            Crowned by over 50,000+ weekly listens, genuine community appreciations, and repeated shares
            across the literary circle.
          </p>
          <div className="absolute bottom-1 right-2 text-[18px] text-[#2A2017] pointer-events-none font-serif select-none">❦</div>
        </div>

        <div className="p-4 rounded-xl bg-[#140E0A]/95 border border-[#3D2F24] hover:border-[#754F1F] transition-colors relative group shadow-lg shadow-black/40">
          <div className="flex items-center gap-2.5 text-[#D4A359] text-[11px] font-cinzel tracking-[0.14em] font-semibold">
            <svg className="w-4 h-4 text-[#D4A359]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
              />
            </svg>
            ARCHIVAL IMMORTALITY
          </div>
          <p className="text-[13px] text-[#A89684] font-body mt-2 leading-snug">
            Pressed into the Gold Vault Anthology with bespoke cover art and FLAC master.
          </p>
          <div className="absolute bottom-1 right-2 text-[18px] text-[#2A2017] pointer-events-none font-serif select-none">❦</div>
        </div>
      </div>

      {/* CTA Row */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4A359] via-[#E2B774] to-[#C89547] hover:from-[#E2B774] hover:to-[#D4A359] active:scale-[0.98] text-[#140E0A] font-cinzel font-bold text-xs tracking-wider transition-all duration-200 shadow-[0_8px_20px_rgba(200,149,71,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center gap-2.5 group border border-[#FAF3DF]/40">
          <span>Read &amp; Listen to Laureate</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
          </svg>
        </button>
        <button className="px-5 py-3.5 rounded-xl bg-[#1A120D] hover:bg-[#231912] border border-[#4F3D30] hover:border-[#9B6E32] text-[#D9CEBE] hover:text-[#FAF6EF] font-body text-sm font-medium transition-all duration-200 flex items-center gap-2.5 shadow-sm">
          <span>Past Laureates Archive</span>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#2A2017] text-[#D4A359] border border-[#3D2F24]">47</span>
        </button>
      </div>

      {/* Calligraphic Seal Footnote / Scholar Council */}
      <div className="flex items-center gap-3.5 pt-3 border-t border-[#2E2219]">
        <div className="flex -space-x-2">
          <div className="w-7 h-7 rounded-full bg-[#1F1610] border border-[#754F1F] flex items-center justify-center text-[12px] font-serif text-[#D4A359] shadow-inner">غ</div>
          <div className="w-7 h-7 rounded-full bg-[#18110C] border border-[#754F1F] flex items-center justify-center text-[12px] font-serif text-[#D4A359] shadow-inner">ف</div>
          <div className="w-7 h-7 rounded-full bg-[#120D09] border border-[#754F1F] flex items-center justify-center text-[12px] font-serif text-[#D4A359] shadow-inner">ق</div>
        </div>
        <p className="text-xs text-[#9E8B78] font-mono tracking-wide">
          Celebrated across listener circles &amp; community heart metrics this week.
        </p>
      </div>
    </div>

    {/* RIGHT COLUMN: THE FLOATING "KALAM OF THE WEEK" SHOWCASE ARTIFACT */}
    <div className="lg:col-span-7 flex justify-center">
      <div className="w-full max-w-[680px] kotw-floating-folio rounded-2xl bg-gradient-to-b from-[#18120D] via-[#140E0A] to-[#100B08] border border-[#4A382A] shadow-2xl relative overflow-hidden backdrop-blur-md">

        {/* Ambient Warm Amber Top Light */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[420px] h-36 bg-[#D4A359]/15 blur-3xl pointer-events-none rounded-full"></div>

        {/* Archival Portfolio Header */}
        <div className="px-6 py-3.5 border-b border-[#35271C] bg-[#120D09]/95 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="flex items-center text-[#D4A359]/70 select-none text-xs font-serif tracking-widest">
              <span>✦</span>
              <span className="mx-1 text-[#4F3D30]">——</span>
              <span>✦</span>
            </div>
            <span className="text-xs font-cinzel text-[#D9C5A8] tracking-[0.2em] uppercase font-medium">
              KALAM OF THE WEEK // VOL. 48
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#261A0E] border border-[#9B6E32]/70 text-[#FAF3DF] text-[11px] font-cinzel font-semibold shadow-inner">
              <span className="text-[#D4A359]">★</span>
              LAUREATE CHOICE
            </span>
            <span className="text-[11px] font-mono text-[#8C7A68]">WEEK 36 • 2026</span>
          </div>
        </div>

        {/* Main Featured Work Body */}
        <div className="p-6 md:p-7 space-y-6">
          <div className="flex flex-col items-center justify-center relative">

            {/* Volumetric Overhead Spotlight & Atmospheric Ray System */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-[560px] h-[440px] pointer-events-none z-10 overflow-visible">
              <div
                className="kotw-animate-spotlight-beam absolute -top-4 left-1/2 w-[340px] sm:w-[420px] h-[360px] opacity-80 mix-blend-screen"
                style={{
                  background:
                    'conic-gradient(from 162deg at 50% 0%, transparent 0deg, rgba(250, 243, 223, 0.38) 12deg, rgba(212, 163, 89, 0.45) 18deg, rgba(212, 163, 89, 0.2) 28deg, transparent 36deg)',
                  filter: 'blur(10px)',
                }}
              ></div>

              <div
                className="kotw-animate-spotlight-beam absolute -top-6 left-1/2 w-[280px] h-[320px] opacity-60 mix-blend-screen"
                style={{
                  background: 'linear-gradient(115deg, rgba(245, 222, 154, 0.32) 0%, rgba(212, 163, 89, 0.12) 50%, transparent 80%)',
                  filter: 'blur(8px)',
                  transform: 'translateX(-65%)',
                }}
              ></div>

              <div
                className="kotw-animate-spotlight-beam absolute -top-6 left-1/2 w-[280px] h-[320px] opacity-60 mix-blend-screen"
                style={{
                  background: 'linear-gradient(245deg, rgba(245, 222, 154, 0.32) 0%, rgba(212, 163, 89, 0.12) 50%, transparent 80%)',
                  filter: 'blur(8px)',
                  transform: 'translateX(-35%)',
                }}
              ></div>

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full opacity-90 mix-blend-color-dodge blur-xl bg-[radial-gradient(ellipse_at_center,#FAF3DF_0%,#D4A359_45%,transparent_75%)]"></div>

              <div className="absolute inset-0 select-none">
                <span className="kotw-mote-1 absolute top-20 left-[42%] w-1.5 h-1.5 rounded-full bg-[#FAF3DF] shadow-[0_0_6px_#FAF3DF] opacity-0"></span>
                <span className="kotw-mote-2 absolute top-28 left-[54%] w-1 h-1 rounded-full bg-[#E5C07B] shadow-[0_0_4px_#D4A359] opacity-0"></span>
                <span className="kotw-mote-3 absolute top-36 left-[36%] w-1 h-1 rounded-full bg-[#FAF3DF] shadow-[0_0_5px_#FAF3DF] opacity-0"></span>
                <span className="kotw-mote-4 absolute top-44 left-[60%] w-1.5 h-1.5 rounded-full bg-[#D4A359] shadow-[0_0_5px_#C89547] opacity-0"></span>
                <span className="kotw-mote-5 absolute top-52 left-[48%] w-1 h-1 rounded-full bg-[#FAF3DF] shadow-[0_0_4px_#FAF3DF] opacity-0"></span>
              </div>
            </div>

            {/* Ethereal Multi-Tier Golden Halo Aura Behind Manuscript Vitrine */}
            <div className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-88 sm:w-[440px] h-88 sm:h-[440px] pointer-events-none -z-10">
              <div className="kotw-animate-aura-halo absolute inset-0 rounded-full bg-[radial-gradient(circle,#D4A359_0%,rgba(200,149,71,0.28)_42%,rgba(77,51,19,0.08)_65%,transparent_75%)] blur-3xl opacity-75"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[radial-gradient(circle,#FAF3DF_0%,#E5C07B_30%,#D4A359_55%,transparent_75%)] blur-2xl opacity-45 mix-blend-screen"></div>
              <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-56 h-12 rounded-full bg-[#FAF3DF]/35 blur-lg mix-blend-overlay"></div>
            </div>

            {/* Laureate Header & Metadata */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-[#2D2015] pb-3.5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-cinzel tracking-wider uppercase bg-[#231A12] text-[#D4A359] border border-[#4F3D30]">
                    Nazm • Shikwa-o-Shikayat
                  </span>
                  <span className="text-[11px] font-mono text-[#8C7A68]">Meter: Bahr-e-Hazaj</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF6EF] tracking-tight">Shikayat</h2>
                  <span className="text-sm font-serif italic text-[#D4A359]">by Arif Karimi</span>
                  <span className="text-[11px] text-[#7A6958] font-mono hidden sm:inline">• Modern Classical</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right font-mono text-xs">
                  <span className="text-[#9E8B78] text-[10px] block font-cinzel tracking-widest">WEEKLY LISTENS</span>
                  <span className="text-[#FAF6EF] font-bold text-sm">38.4k</span>
                </div>
                <div className="h-6 w-[1px] bg-[#35271C] mx-1"></div>
                <div className="text-right font-mono text-xs">
                  <span className="text-[#9E8B78] text-[10px] block font-cinzel tracking-widest">HEARTS</span>
                  <span className="text-[#D4A359] font-bold text-sm tracking-wide">12.6k ♥</span>
                </div>
              </div>
            </div>

            {/* Grand Spotlight Manuscript Centerpiece Display */}
            <div className="relative group max-w-[340px] sm:max-w-[370px] w-full my-1">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#D4A359] z-20 pointer-events-none"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#D4A359] z-20 pointer-events-none"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#D4A359] z-20 pointer-events-none"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#D4A359] z-20 pointer-events-none"></div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/80 blur-lg rounded-full pointer-events-none"></div>

              <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-b from-[#382B1F] via-[#231A12] to-[#140E0A] border-2 border-[#754F1F] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_40px_rgba(212,163,89,0.18)] transition-transform duration-700 group-hover:scale-[1.015]">
                <div className="aspect-square rounded-xl overflow-hidden border border-[#D4A359]/50 shadow-inner relative bg-[#1B130D]">
                  <img
                    alt="Original Parchment Manuscript - Shikayat by Arif Karimi"
                    className="w-full h-full object-cover sepia-[0.12] contrast-[1.02] duration-700 transition-transform group-hover:scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgQFF5IJ9MScvLdL3gXSyLdXB-RhNGOgYdCKDRntTVkGfpl52dPbBoWo60DUdPncTFi-CDVC1cqnajuHE87xcB57RMZuazvYJTBBTUx3Iy5diy5VCM8MqAar5NqpdGAVVLVp4hHpS_jpiAhfriwQBkO94LMMc8vgFXbQfpYvGzP9J5O4ZKWFG0E1hqTDWE8YxHxKpUCnwfKhkLZ9H-vQL4ECoMNMb4kuRT5N5xYSzF-0yfHafzj7ZjJgrBCSwbjbQ7SbQ"
                  />
                  <div className="absolute inset-0 kotw-deckle-inset pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Prominent Community Call to Action strip */}
            <div className="w-full flex items-center justify-between pt-4 mt-2 border-t border-[#2D2015] text-[10.5px] font-mono tracking-wider text-[#A89480]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A359] shadow-[0_0_4px_#D4A359]"></span>
                <span className="font-cinzel text-[#D9C5A8] tracking-[0.2em] uppercase font-medium">
                  ARCHIVED IN VAULT // REKHTA &amp; ALF GUILD
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[#D4A359]/90 font-cinzel text-[10px] tracking-[0.14em] px-2.5 py-0.5 rounded bg-[#1A120D] border border-[#3D2F24]">
                <span className="text-[#D4A359]">★</span>
                <span>CURATED SELECTION • WEEK 36</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

    {/* ── Slide 3: Archival Press & Studio (Poetry & Spoken Sound Archives) ── */}
    <div className="relative flex-shrink-0 w-full h-screen snap-start flex items-center justify-center overflow-hidden min-h-[560px] bg-[#0b0d13] text-[#ded7c8] font-archival-sans">
      {/* Scoped styles for this slide only — class names are prefixed with "archival-" so
          nothing here can collide with the rest of the app's global CSS. */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Cinzel:wght@400;600;700&family=Noto+Nastaliq+Urdu:wght@400;600&display=swap');

        .archival-slide { position: relative; }

        .archival-vinyl-sleeve {
          position: relative;
          box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.7), 0 2px 6px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: transform;
        }
        .archival-vinyl-sleeve::before {
          content: '';
          position: absolute;
          top: 0; bottom: 0; left: 0;
          width: 6px;
          background: linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(0,0,0,0.4) 40%, rgba(255,255,255,0.06) 80%, transparent 100%);
          z-index: 15;
          pointer-events: none;
        }
        .archival-vinyl-sleeve::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.6);
          pointer-events: none;
          z-index: 14;
        }
        .archival-vinyl-sleeve:hover,
        .archival-craft-sleeve:hover {
          transform: translateY(-12px) scale(1.025) !important;
          box-shadow: 0 24px 44px -10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(212, 175, 55, 0.1) !important;
          z-index: 20;
          animation-play-state: paused;
        }

        .archival-craft-sleeve {
          position: relative;
          background: radial-gradient(circle at 30% 20%, rgba(36, 42, 54, 0.75) 0%, rgba(17, 20, 27, 0.95) 100%);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: transform;
        }

        @keyframes archival-float-whole-showcase {
          0%, 100% { transform: translateY(0px); box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 45px -10px rgba(212, 163, 89, 0.05); }
          50% { transform: translateY(-12px); box-shadow: 0 38px 80px -15px rgba(0, 0, 0, 0.85), 0 0 65px -5px rgba(212, 163, 89, 0.09); }
        }
        .archival-animate-showcase-float {
          animation: archival-float-whole-showcase 7.5s ease-in-out infinite;
          will-change: transform, box-shadow;
        }

        @keyframes archival-float-1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-8px) rotate(-0.4deg); } }
        @keyframes archival-float-2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(0.5deg); } }
        @keyframes archival-float-3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-7px) rotate(-0.5deg); } }
        @keyframes archival-float-4 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-9px) rotate(0.4deg); } }
        @keyframes archival-float-5 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-7px) rotate(-0.3deg); } }
        @keyframes archival-float-6 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-6px) rotate(0.6deg); } }

        .archival-animate-float-1 { animation: archival-float-1 5.4s ease-in-out infinite 0s; }
        .archival-animate-float-2 { animation: archival-float-2 6.2s ease-in-out infinite 0.7s; }
        .archival-animate-float-3 { animation: archival-float-3 5.8s ease-in-out infinite 1.4s; }
        .archival-animate-float-4 { animation: archival-float-4 6.6s ease-in-out infinite 0.3s; }
        .archival-animate-float-5 { animation: archival-float-5 5.2s ease-in-out infinite 1.1s; }
        .archival-animate-float-6 { animation: archival-float-6 6.8s ease-in-out infinite 1.8s; }

        @keyframes archival-amber-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(223, 183, 88, 0.4), 0 0 8px 1px rgba(223, 183, 88, 0.3); opacity: 0.9; }
          50% { box-shadow: 0 0 0 4px rgba(223, 183, 88, 0.15), 0 0 14px 3px rgba(223, 183, 88, 0.55); opacity: 1; }
        }
        .archival-pulse-amber { animation: archival-amber-glow 3.2s ease-in-out infinite; }

        .archival-bg-noise {
          background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @keyframes archival-hifi-eq { 0%, 100% { height: 4px; } 50% { height: 18px; } }
        .archival-eq-1 { animation: archival-hifi-eq 1.4s ease-in-out infinite 0.1s; }
        .archival-eq-2 { animation: archival-hifi-eq 1.1s ease-in-out infinite 0.4s; }
        .archival-eq-3 { animation: archival-hifi-eq 1.6s ease-in-out infinite 0.2s; }
        .archival-eq-4 { animation: archival-hifi-eq 1.2s ease-in-out infinite 0.5s; }
        .archival-eq-5 { animation: archival-hifi-eq 1.5s ease-in-out infinite 0.3s; }

        @media (prefers-reduced-motion: reduce) {
          .archival-animate-showcase-float,
          .archival-animate-float-1, .archival-animate-float-2, .archival-animate-float-3,
          .archival-animate-float-4, .archival-animate-float-5, .archival-animate-float-6,
          .archival-pulse-amber,
          .archival-eq-1, .archival-eq-2, .archival-eq-3, .archival-eq-4, .archival-eq-5 {
            animation: none !important;
          }
          .archival-vinyl-sleeve, .archival-craft-sleeve { transition: none !important; }
        }
      `}</style>

      {/* Subtle tactile editorial background: Charcoal, deeply muted sepia & vignette */}
      <div className="absolute inset-0 bg-[#0b0d13] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_10%,rgba(38,32,26,0.45)_0%,transparent_75%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(26,30,42,0.5)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 archival-bg-noise opacity-40"></div>
        <div className="absolute inset-0 border-b border-white/[0.06] pointer-events-none"></div>
      </div>

      {/* Main content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-5 text-left space-y-7">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-[#161a22] border border-white/10 text-[11px] tracking-[0.16em] uppercase font-mono text-[#eed188]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb758]"></span>
              <span>Archival Press &amp; Studio</span>
              <span className="text-white/20">|</span>
              <span className="text-[#aba69a] font-archival-sans lowercase font-normal tracking-normal text-xs">series no. 04</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-archival-serif text-4xl sm:text-5xl lg:text-6xl text-[#fbfaf8] leading-[1.08] tracking-tight font-normal">
                Turn your verses into <br />
                <span className="italic font-normal text-[#dfb758] pr-1">living records.</span>
              </h1>
              <p className="text-[#a6a094] text-base sm:text-lg font-light leading-relaxed max-w-md pt-1">
                Compose physical-grade sleeve artwork, master spoken ghazals and nazms with synchronized acoustic backing, and press bespoke anthologies ready for the world.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button className="px-6 py-3.5 rounded-sm bg-[#ece7de] hover:bg-white text-[#0f1117] font-medium text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2.5 shadow-lg shadow-black/40 cursor-pointer">
                <span className="font-semibold">Create New Anthology</span>
                <svg className="w-3.5 h-3.5 text-[#0f1117]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
              <button className="px-5 py-3.5 rounded-sm bg-transparent hover:bg-white/[0.04] border border-white/20 hover:border-white/40 text-[#ded7c8] text-xs tracking-wider uppercase font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer">
                <span>Browse Press Catalog</span>
              </button>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center gap-4">
              <div className="flex -space-x-1.5 overflow-hidden flex-shrink-0">
                <div className="w-7 h-7 rounded-full ring-1 ring-[#0b0d13] bg-[#242a36] text-[#dfb758] flex items-center justify-center font-archival-serif text-[11px] font-semibold">ف</div>
                <div className="w-7 h-7 rounded-full ring-1 ring-[#0b0d13] bg-[#2c2621] text-[#eed188] flex items-center justify-center font-archival-serif text-[11px] font-semibold">م</div>
                <div className="w-7 h-7 rounded-full ring-1 ring-[#0b0d13] bg-[#1d2624] text-[#c59d3f] flex items-center justify-center font-archival-serif text-[11px] font-semibold">غ</div>
              </div>
              <div className="text-xs text-[#8c887b] leading-snug">
                <span className="text-[#ded7c8] font-medium">Preserving 14,000+ poetic works</span> across Ghazal, Nazm, Rubaiyat, and Sufi oral traditions.
              </div>
            </div>
          </div>

          {/* Right Column: Curated Physical Vinyl & Anthology Rack */}
          <div className="lg:col-span-7">
            <div className="rounded-lg bg-[#12151d]/90 border border-[#222734] p-5 sm:p-7 shadow-2xl backdrop-blur-md archival-animate-showcase-float">

              {/* Curator Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.07] text-xs">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#dfb758] archival-pulse-amber"></span>
                  <span className="font-archival-serif text-sm tracking-wider text-[#e8e4dc] font-medium">Selected Physical Editions</span>
                  <span className="text-white/20">/</span>
                  <span className="text-[11px] text-[#8c887b] font-mono tracking-tight">ALF-ARCHIVE-AUTUMN</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#aba69a]">
                  <span>33⅓ RPM STEREO</span>
                </div>
              </div>

              {/* Physical Vinyl Jacket Rack (3x2 Grid) */}
              <div className="grid grid-cols-3 gap-3.5 sm:gap-4 mb-5">

                {/* Sleeve 1: Ishq-e-Khamoosh */}
                <div className="archival-vinyl-sleeve archival-animate-float-1 group rounded-sm overflow-hidden aspect-square bg-[#161a22] cursor-pointer border border-white/10 relative">
                  <img alt="Ishq-e-Khamoosh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://picsum.photos/seed/ishq-e-khamoosh/600/600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 p-2.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-[#eed188] bg-black/60 px-1.5 py-0.5 rounded-xs uppercase tracking-wider">ALF-081</span>
                      <span className="text-[9px] text-white/80 font-mono">Vol. 01</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/70 block font-archival-serif italic">عشقِ خاموش</span>
                      <h3 className="font-archival-serif text-xs sm:text-sm font-semibold text-white tracking-wide truncate">Ishq-e-Khamoosh</h3>
                      <span className="text-[9px] text-[#dfb758] font-mono tracking-tight mt-0.5 block">8 Verses • Mastered</span>
                    </div>
                  </div>
                </div>

                {/* Sleeve 2: Aatish-e-Junoon */}
                <div className="archival-vinyl-sleeve archival-animate-float-2 group rounded-sm overflow-hidden aspect-square bg-[#161a22] cursor-pointer border border-white/10 relative">
                  <img alt="Motivation and Fire" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://picsum.photos/seed/aatish-e-junoon/600/600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 p-2.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-[#eed188] bg-black/60 px-1.5 py-0.5 rounded-xs uppercase tracking-wider">ALF-082</span>
                      <span className="text-[9px] text-white/80 font-mono">Vol. 02</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/70 block font-archival-serif italic">آتشِ جنوں</span>
                      <h3 className="font-archival-serif text-xs sm:text-sm font-semibold text-white tracking-wide truncate">Aatish-e-Junoon</h3>
                      <span className="text-[9px] text-[#e8c374] font-mono tracking-tight mt-0.5 block">14 Verses • Press Draft</span>
                    </div>
                  </div>
                </div>

                {/* Sleeve 3: Sadaa-e-Kohsaar */}
                <div className="archival-vinyl-sleeve archival-animate-float-3 group rounded-sm overflow-hidden aspect-square bg-[#161a22] cursor-pointer border border-white/10 relative">
                  <img alt="Aurora Echoes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://picsum.photos/seed/sadaa-e-kohsaar/600/600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 p-2.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-[#eed188] bg-black/60 px-1.5 py-0.5 rounded-xs uppercase tracking-wider">ALF-083</span>
                      <span className="text-[9px] text-white/80 font-mono">Vol. 03</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/70 block font-archival-serif italic">صدائے کہسار</span>
                      <h3 className="font-archival-serif text-xs sm:text-sm font-semibold text-white tracking-wide truncate">Sadaa-e-Kohsaar</h3>
                      <span className="text-[9px] text-[#a0d9b4] font-mono tracking-tight mt-0.5 block">11 Verses • Pressed</span>
                    </div>
                  </div>
                </div>

                {/* Sleeve 4: City of Echoes */}
                <div className="archival-vinyl-sleeve archival-animate-float-4 group rounded-sm overflow-hidden aspect-square bg-[#161a22] cursor-pointer border border-white/10 relative">
                  <img alt="City of Echoes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://picsum.photos/seed/city-of-echoes/600/600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 p-2.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-[#eed188] bg-black/60 px-1.5 py-0.5 rounded-xs uppercase tracking-wider">ALF-084</span>
                      <span className="text-[9px] text-white/80 font-mono">Vol. 04</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/70 block font-archival-serif italic">شبِ تنہائی</span>
                      <h3 className="font-archival-serif text-xs sm:text-sm font-semibold text-white tracking-wide truncate">City of Echoes</h3>
                      <span className="text-[9px] text-[#c4b5fd] font-mono tracking-tight mt-0.5 block">6 Verses • Vinyl Master</span>
                    </div>
                  </div>
                </div>

                {/* Sleeve 5: Khizaan Ke Phool */}
                <div className="archival-vinyl-sleeve archival-animate-float-5 group rounded-sm overflow-hidden aspect-square bg-[#161a22] cursor-pointer border border-white/10 relative">
                  <img alt="Memories Poems of Autumn" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://picsum.photos/seed/khizaan-ke-phool/600/600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 p-2.5 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-[#eed188] bg-black/60 px-1.5 py-0.5 rounded-xs uppercase tracking-wider">ALF-085</span>
                      <span className="text-[9px] text-white/80 font-mono">Vol. 05</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/70 block font-archival-serif italic">خزاں کے پھول</span>
                      <h3 className="font-archival-serif text-xs sm:text-sm font-semibold text-white tracking-wide truncate">Khizaan Ke Phool</h3>
                      <span className="text-[9px] text-[#dfb758] font-mono tracking-tight mt-0.5 block">19 Verses • Complete</span>
                    </div>
                  </div>
                </div>

                {/* Sleeve 6: Blank Archival Kraft Sleeve (+ PRESS NEW ALBUM) */}
                <div className="archival-craft-sleeve archival-animate-float-6 group rounded-sm border border-dashed border-white/20 hover:border-[#dfb758]/80 aspect-square p-3 flex flex-col justify-between items-center text-center cursor-pointer hover:bg-[#181d27]">
                  <div className="w-full flex justify-between items-center text-[9px] font-mono text-[#8c887b]">
                    <span>NEW PRESS</span>
                    <span>VOL. 06</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#eed188] mb-2 group-hover:border-[#dfb758] group-hover:scale-105 transition-all">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75"></path>
                      </svg>
                    </div>
                    <h4 className="font-archival-serif text-xs sm:text-sm text-[#f5f2eb] font-medium tracking-wide">Press New Album</h4>
                    <p className="text-[10px] text-[#8c887b] mt-0.5 font-light">Custom sleeve &amp; verses</p>
                  </div>
                  <span className="text-[9px] font-mono text-[#eed188]/75 tracking-wider uppercase">Unbound Master</span>
                </div>
              </div>

              {/* Bespoke Master Audio Playback Dock */}
              <div className="rounded-sm bg-[#0c0e14] border border-white/[0.08] p-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-10 h-10 rounded-sm overflow-hidden flex-shrink-0 border border-white/15">
                    <img alt="Now Playing Album" className="w-full h-full object-cover" src="https://picsum.photos/seed/ishq-e-khamoosh/600/600" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-archival-serif font-semibold text-[#f5f2eb] truncate">Ishq-e-Khamoosh (عشقِ خاموش)</h4>
                      <span className="text-[9px] font-mono uppercase bg-[#1f2533] text-[#eed188] px-1.5 py-0.2 rounded-xs">FLAC MASTER</span>
                    </div>
                    <p className="text-[11px] text-[#8c887b] truncate font-light mt-0.5">Track 04: Raqs-e-Khayal — Spoken recitative with acoustic Tanpura</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 h-5 px-2.5 py-1 bg-black/40 rounded-sm border border-white/5">
                  <span className="w-0.5 bg-[#dfb758] rounded-full archival-eq-1"></span>
                  <span className="w-0.5 bg-[#eed188] rounded-full archival-eq-2"></span>
                  <span className="w-0.5 bg-[#dfb758] rounded-full archival-eq-3"></span>
                  <span className="w-0.5 bg-[#eed188] rounded-full archival-eq-4"></span>
                  <span className="w-0.5 bg-[#dfb758] rounded-full archival-eq-5"></span>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="hidden md:inline-block font-mono text-[11px] text-[#8c887b]">-02:24</span>
                  <button aria-label="Play or Pause" className="w-8 h-8 rounded-full bg-[#ece7de] hover:bg-white text-[#0f1117] flex items-center justify-center transition-colors shadow-sm">
                    <svg className="w-3.5 h-3.5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    {/* ── Slide 4: Album Creation ── */}
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