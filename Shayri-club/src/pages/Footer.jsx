export default function Footer() {
  return (
    <footer className="mt-32 bg-black border-t border-white/10">
      <div className="max-w-7xl  px-3 py-12">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl text-left font-semibold tracking-wide">
              Shayri Club
            </h2>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              A home for poets, writers, and dreamers.
              Share your words. Feel the depth.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-2 text-white/70">
              <li className="hover:text-white cursor-pointer">Kalam</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Browse</li>
              <li className="hover:text-white cursor-pointer">About</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-white/70">
              <li>Email: shayriclub@gmail.com</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Shayri Club. All rights reserved.</p>
          <p className="mt-4 md:mt-0 italic">
            “Where words breathe.”
          </p>
        </div>

      </div>
    </footer>
  );
}
