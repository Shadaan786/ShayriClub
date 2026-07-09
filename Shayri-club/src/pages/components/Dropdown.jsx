import { useState, useRef, useEffect } from "react";

export default function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-md border text-black border-gray-300 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 px-4 py-2 shadow "
      >
        {title}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-md border border-gray-200 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 shadow-lg z-50">
      {items.map((item, index) => (
  <button
    key={index}
    onClick={() => {
      item.onClick?.();
      setOpen(false);
    }}
    className="flex w-full items-center gap-3 px-4 py-2 text-left text-black"
  >
    {/* Profile image / reserved space */}
    <div className="h-8 w-8 flex-shrink-0">
      {item.image && (
        <img
          src={item.image}
          alt={item.label}
          className="h-8 w-8 rounded-full object-cover"
        />
      )}
    </div>

    <span>{item.label}</span>
  </button>
))}
        </div>
      )}
    </div>
  );
}