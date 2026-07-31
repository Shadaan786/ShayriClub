import React, { useState, useEffect, useCallback } from "react";
import "./profileAlbums.css";
import axiosInstance from "@/Apis/axiosInstance";

/**
 * profileAlbums.jsx
 *
 * Exports two things:
 *  - AlbumsPanel (named export): just the browsing UI — title, sort,
 *    search, filters, grid, pagination. No page chrome. Safe to embed
 *    inside another layout (e.g. PoetProfileDashboard's content area).
 *  - ProfileAlbums (default export): the full standalone page, using
 *    AlbumsPanel internally, for when this needs to be its own route.
 *
 * Fetched from: /api/albumsLive?query=<filter>&limit=<pageSize>&page=<pageNumber>
 * Expected API response shape:
 * {
 *   albums: [{ id, title, compositionsCount, coverImageUrl }, ...],
 *   total: number,
 *   page: number,
 *   limit: number
 * }
 */

const PAGE_SIZE = 3;

const FILTERS = [
  { label: "All Albums", value: "all" },
  { label: "Ghazal Collections", value: "ghazal" },
  { label: "Thematic Sets", value: "thematic" },
  { label: "Legacy Series", value: "legacy" },
];

export function AlbumsPanel() {
  const [albums, setAlbums] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAlbums = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({
        query,
        limit: String(PAGE_SIZE),
        page: String(page),
      });
      const res = await axiosInstance
      .get(`/api/albumsLive?category=all&page=1&limit=2`);
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      setAlbums(Array.isArray(data.albums) ? data.albums : []);
      setTotal(typeof data.total === "number" ? data.total : (data.albums || []).length);
    } catch (err) {
      setError(err.message || "Something went wrong while loading albums.");
      setAlbums([]);
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const handleFilterClick = (value) => {
    setQuery(value);
    setPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery(searchTerm.trim() === "" ? "all" : searchTerm.trim());
    setPage(1);
  };

  const goToPage = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="max-w-container-max mx-auto">
      {/* Header Section */}
      <div className="mb-stack-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">
              Poetic Albums
            </h1>
            <p className="text-on-surface-variant max-w-2xl font-body-lg text-body-lg italic opacity-80">
              Explore curated collections of Mirza Ghalib's masterpieces,
              organized by theme, era, and poetic form.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-on-surface-variant font-label-caps text-label-caps">
              Sort By
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-surface-container border border-outline/30 text-on-surface py-2 pl-4 pr-10 rounded-full font-label-caps text-label-caps focus:ring-primary focus:border-primary cursor-pointer"
              >
                <option>Newest</option>
                <option>Popular</option>
                <option>Alphabetical</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none text-sm">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-stack-md flex items-center bg-surface-container-low border border-outline/20 px-4 py-1.5 rounded-full w-full md:w-80"
        >
          <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">
            search
          </span>
          <input
            className="bg-transparent border-none focus:ring-0 text-body-md text-on-surface w-full placeholder:text-on-surface-variant/50"
            placeholder="Search compositions..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        {/* Filters Strip */}
        <div className="mt-stack-md flex flex-wrap items-center gap-3 py-4 border-y border-primary/10">
          {FILTERS.map((filter) => {
            const isActive = query === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => handleFilterClick(filter.value)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full border font-label-caps text-label-caps transition-all ${
                  isActive
                    ? "bg-primary/10 border-primary/20 text-primary"
                    : "border-outline/20 text-on-surface-variant hover:border-primary/40 hover:text-primary"
                }`}
              >
                {filter.value === "all" && (
                  <span className="material-symbols-outlined text-sm">
                    filter_list
                  </span>
                )}
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="mb-6 p-4 rounded-lg border border-error/30 bg-error-container/10 text-error">
          Couldn't load albums: {error}
        </div>
      )}

      {/* Compositions Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {Array.from({ length: PAGE_SIZE }).map((_, i) => (
            <div key={i} className="glass-card p-4 flex flex-col animate-pulse">
              <div className="aspect-square w-full mb-4 rounded-lg bg-surface-variant" />
              <div className="h-5 w-3/4 bg-surface-variant rounded mb-2" />
              <div className="h-3 w-1/3 bg-surface-variant rounded mb-4" />
              <div className="h-9 w-full bg-surface-variant rounded" />
            </div>
          ))}
        </div>
      ) : albums.length === 0 ? (
        <div className="py-16 text-center text-on-surface-variant">
          No albums found for this filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      )}

      {/* Pagination/Footer Stats */}
      <div className="mt-section-gap flex flex-col md:flex-row items-center justify-between gap-6 border-t border-primary/10 pt-stack-md">
        <p className="text-on-surface-variant font-label-caps text-label-caps">
          Showing {albums.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1}-
          {(page - 1) * PAGE_SIZE + albums.length} of {total} Albums
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page <= 1}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-on-surface-variant hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {pageNumbers.map((n) => (
            <button
              key={n}
              onClick={() => goToPage(n)}
              className={`w-10 h-10 flex items-center justify-center rounded-full font-bold transition-colors ${
                n === page
                  ? "bg-primary text-on-primary"
                  : "border border-primary/20 text-on-surface-variant hover:bg-primary/10"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-on-surface-variant hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function AlbumCard({ album }) {
  const [hovered, setHovered] = useState(false);
  const title = album.title || "Untitled Album";
  const count = album.compositionsCount ?? album.compositions ?? 0;
  const cover =
    album.coverImageUrl ||
    album.cover ||
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop";

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? "translateY(-4px)" : "translateY(0px)" }}
      className="glass-card p-4 flex flex-col group cursor-pointer transition-all duration-300"
    >
      <div className="aspect-square w-full mb-4 overflow-hidden rounded-lg bg-surface-variant relative border border-primary/10">
        <img
          src={cover}
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
        <span className="absolute bottom-3 left-3 material-symbols-outlined text-primary">
          play_circle
        </span>
      </div>
      <h3 className="font-headline-md text-xl text-on-surface mb-1">{title}</h3>
      <p className="text-on-surface-variant font-label-caps text-xs mb-4">
        {count} COMPOSITION{count === 1 ? "" : "S"}
      </p>
      <button className="mt-auto flex items-center justify-center gap-2 w-full py-2 border border-primary/20 rounded text-primary font-label-caps text-xs hover:bg-primary/10 transition-colors">
        VIEW ALBUM
      </button>
    </article>
  );
}

/**
 * ProfileAlbums — full standalone page (header + sidebar + AlbumsPanel).
 * Use this for a dedicated /albums route. For embedding inside another
 * layout (like PoetProfileDashboard), import { AlbumsPanel } instead.
 */
export default function ProfileAlbums() {
  return (
    <div className="shayar-app font-body-md text-body-md overflow-x-hidden min-h-screen">
      <div className="grain-overlay" />

      {/* Navigation Shell */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop h-16 bg-surface/80 backdrop-blur-xl border-b border-primary/20">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md text-primary tracking-tight">
            Shayar
          </span>
        </div>
        <div className="flex items-center gap-stack-md">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
            notifications
          </span>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
            settings
          </span>
        </div>
      </header>

      {/* Side Navigation (Desktop Only) */}
      <aside className="fixed left-0 top-0 h-screen flex-col py-stack-md px-4 bg-surface-container border-r border-primary/10 w-64 hidden md:flex z-40 pt-20">
        <div className="mb-stack-lg px-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30">
              <img
                className="w-full h-full object-cover"
                alt="Portrait of Mirza Ghalib"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArJNcRUZRB1DPtswv7gJoMAfwO7V-a_3rH4qPzRcDrMTNagzW3ChssC0xGbkFQjYfW1LC7WlPmDcLfu0zA_cMq3kHGKFl1k6xozceZBuoORE30-nZS-8rzJn4ZsdPA6flP-DDiDeRy7DPKm4PVOePd7Ery-OrMpKXDyhNndDMFAekN2kKPkjMNlo-V3qI82MeDelySbsTcODXp7XxyeiBKUFcn0IXEcsQcsRwAnV21ZJgU8Ttpx1_F"
              />
            </div>
            <div>
              <p className="font-bold text-on-surface leading-tight">Mirza Ghalib</p>
              <p className="text-xs text-on-surface-variant">Master Poet</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          
            className="flex items-center gap-3 bg-primary-container text-on-primary-container font-bold rounded-lg px-3 py-2 transition-all duration-200"
            <a href="#"
          >
            <span className="material-symbols-outlined">auto_stories</span>
            <span className="font-label-caps text-label-caps">Compositions</span>
          </a>
          <div className="pl-8 space-y-1 mt-1">
            
              <a href="#"
              className="flex items-center gap-3 text-on-surface-variant py-2 hover:text-primary transition-all"
            >
              <span className="material-symbols-outlined text-sm">ink_pen</span>
              <span className="font-label-caps text-xs tracking-widest">KALAMS</span>
            </a>
            
              <a href="#"
              className="flex items-center gap-3 text-primary py-2 transition-all"
            >
              <span className="material-symbols-outlined text-sm">album</span>
              <span className="font-label-caps text-xs tracking-widest">ALBUMS</span>
            </a>
          </div>
        </nav>
        <div className="mt-auto pt-6 border-t border-primary/10 space-y-2">
          
            className="flex items-center gap-3 text-on-surface-variant pl-2 py-2 hover:text-primary transition-all"
            <a href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-caps text-label-caps">Settings</span>
          </a>
          
            className="flex items-center gap-3 text-on-surface-variant pl-2 py-2 hover:text-primary transition-all"
            <a href="#"
          >
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-caps text-label-caps">Support</span>
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-24 pb-stack-lg px-margin-mobile md:px-margin-desktop min-h-screen">
        <AlbumsPanel />
      </main>
    </div>
  );
}