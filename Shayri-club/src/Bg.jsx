import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

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

const Footer = () => (
  <footer className="mt-32 pb-8 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Shayri Club
          </h3>
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
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/5">
        © 2025 Shayri Club. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function ShayriClub() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const slides = [
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Stars Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CanvasStars />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-3xl sm:text-3xl font-black bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shayri Club
                </h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="/kalam" className="px-4 py-2 text-gray-300 hover:text-white transition rounded-lg hover:bg-white/5">
                  Kalam
                </a>
                <a href="/community" className="px-4 py-2 text-gray-300 hover:text-white transition rounded-lg hover:bg-white/5">
                  Community
                </a>
                <a href="/browse" className="px-4 py-2 text-gray-300 hover:text-white transition rounded-lg hover:bg-white/5">
                  Browse
                </a>
              </div>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <button className="px-5 py-2 text-white hover:bg-white/10 transition rounded-lg border border-white/20">
                  Login
                </button>
                <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition">
                  Sign Up
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
              <div className="px-4 py-4 space-y-2">
                <a href="/kalam" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
                  Kalam
                </a>
                <a href="/community" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
                  Community
                </a>
                <a href="/browse" className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition">
                  Browse
                </a>
                <div className="pt-4 space-y-2 border-t border-white/10">
                  <button className="w-full px-4 py-3 text-white border border-white/20 rounded-lg hover:bg-white/10 transition">
                    Login
                  </button>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
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
        </section>

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