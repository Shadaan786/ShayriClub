import { useState, useEffect, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

/**
 * Color tokens pulled from the Library page's Material-3 dark theme mock,
 * kept as plain JS so we don't depend on a custom Tailwind config existing
 * in this project.
 */
const COLORS = {
    background: "#051424",
    surfaceContainer: "#122131",
    surfaceContainerHigh: "#1c2b3c",
    surfaceContainerHighest: "#273647",
    onSurface: "#d4e4fa",
    onSurfaceVariant: "#cbc4d2",
    primary: "#cfbcff",
    onPrimary: "#381e72",
    secondary: "#cdc0e9",
    tertiary: "#e7c365",
    outline: "#948e9c",
    borderSubtle: "rgba(255,255,255,0.10)",
};

const LIMIT = 10;

const GENRE_CHIPS = ["Synthwave", "Lofi", "Jazz"];

const SORT_OPTIONS = [
    { value: "recent", label: "Recently Added" },
    { value: "az", label: "A-Z" },
    { value: "artist", label: "Artist Name" },
    { value: "year", label: "Release Year" },
];

const ExploreAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [total, setTotal] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [initialLoading, setInitialLoading] = useState(true);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sortBy, setSortBy] = useState("recent");
    const [activeGenre, setActiveGenre] = useState(null);

    // Same pattern as AlbumsLive: refs drive the request params so we don't
    // need to worry about stale closures inside the InfiniteScroll callbacks.
    const page = useRef(1);
    const query = useRef("all");
    const newAlbums = useRef([]);
    const [searchValue, setSearchValue] = useState("");

    const handleFetch = () => {
        if (query.current.trim() === "") {
            query.current = "all";
        }

        page.current = 1;

        axiosInstance
            .get(`/api/albumsLive?page=${page.current}&limit=${LIMIT}&query=${query.current}`)
            .then((response) => {
                const data = response.data;
                // API may return a plain array, or an object with { albums, total }
                const list = Array.isArray(data) ? data : data.albums ?? [];
                const totalCount = Array.isArray(data) ? undefined : data.total;

                setAlbums(list);
                setTotal(typeof totalCount === "number" ? totalCount : list.length);
                setHasMore(list.length === LIMIT);

                page.current = page.current + 1;
                setInitialLoading(false);
            })
            .catch((error) => {
                console.error("error while fetching albums", error);
                setInitialLoading(false);
            });
    };

    useEffect(() => {
        handleFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchMore = () => {
        if (initialLoading) return;

        axiosInstance
            .get(`/api/albumsLive?page=${page.current}&limit=${LIMIT}&query=${query.current}`)
            .then((response) => {
                const data = response.data;
                const list = Array.isArray(data) ? data : data.albums ?? [];

                newAlbums.current = list;

                if (newAlbums.current.length === 0) {
                    setHasMore(false);
                } else {
                    setAlbums((prevItems) => [...prevItems, ...newAlbums.current]);
                    setTotal((prevTotal) => prevTotal + newAlbums.current.length);
                    page.current = page.current + 1;
                    setHasMore(newAlbums.current.length === LIMIT);
                }
            })
            .catch((error) => {
                console.error("error while fetching albums", error);
            });
    };

    const handleSearch = () => {
        query.current = searchValue;
        handleFetch();
    };

    const toggleGenre = (genre) => {
        setActiveGenre((prev) => (prev === genre ? null : genre));
    };

    return (
        <div
            id="scrollable-explore-albums"
            className="h-screen w-full overflow-y-auto overflow-x-hidden"
            style={{ background: COLORS.background, color: COLORS.onSurface, fontFamily: "Inter, system-ui, sans-serif" }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block');

                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    vertical-align: middle;
                    line-height: 1;
                }

                .ea-glass-card {
                    background: rgba(39, 54, 71, 0.4);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                .ea-sunset-gradient {
                    background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.tertiary} 100%);
                }
                .ea-nav-link { color: rgba(212,228,250,0.65); transition: color .2s; }
                .ea-nav-link:hover { color: ${COLORS.primary}; }
                .ea-sidebar-link { transition: background .2s, color .2s; }
                .ea-sidebar-link:hover { background: rgba(255,255,255,0.08); }
                .ea-album-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                    gap: 24px;
                }
                @keyframes ea-spin { to { transform: rotate(360deg); } }
                @media (max-width: 1023px) {
                    .ea-sidebar { display: none !important; }
                }
                @media (max-width: 767px) {
                    .ea-nav-search { display: none !important; }
                    .ea-nav-links { display: none !important; }
                }
            `}</style>

            {/* ── Top Navigation ── */}
            <header
                className="fixed top-0 left-0 w-full z-50"
                style={{ background: "rgba(5,20,36,0.7)", backdropFilter: "blur(40px)", borderBottom: `1px solid ${COLORS.borderSubtle}` }}
            >
                <div className="flex justify-between items-center h-20 px-6 w-full max-w-[1440px] mx-auto">
                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="lg:hidden mr-1 w-9 h-9 flex items-center justify-center rounded-lg"
                            style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                            aria-label="Open sidebar"
                        >
                            <span className="material-symbols-outlined text-lg">menu</span>
                        </button>
                        <span className="font-extrabold text-2xl md:text-3xl tracking-tight">Library</span>

                        <nav className="ea-nav-links hidden md:flex gap-6">
                            <Link to="/artists" className="ea-nav-link">Artists</Link>
                            <Link to="/albums" className="font-bold pb-1" style={{ color: COLORS.primary, borderBottom: `2px solid ${COLORS.primary}` }}>
                                Albums
                            </Link>
                            <Link to="/playlists" className="ea-nav-link">Playlists</Link>
                            <Link to="/genres" className="ea-nav-link">Genres</Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div
                            className="ea-nav-search hidden sm:flex items-center relative"
                        >
                            <span
                                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2"
                                style={{ color: COLORS.onSurfaceVariant }}
                            >
                                search
                            </span>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                placeholder="Search collection..."
                                className="rounded-full py-2 pl-10 pr-4 text-sm w-64 outline-none transition-all"
                                style={{ background: "rgba(39,54,71,0.4)", border: "none", color: COLORS.onSurface }}
                            />
                        </div>
                        <button style={{ color: COLORS.onSurfaceVariant }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 28 }}>account_circle</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="flex pt-20">
                {/* ── Sidebar (desktop) ── */}
                <aside
                    className="ea-sidebar hidden lg:flex flex-col fixed left-0 top-20 z-40 overflow-y-auto"
                    style={{
                        width: 256,
                        height: "calc(100vh - 80px)",
                        background: "rgba(18,33,49,0.4)",
                        backdropFilter: "blur(20px)",
                        borderRight: `1px solid ${COLORS.borderSubtle}`,
                    }}
                >
                    <div className="flex flex-col py-8 px-4 gap-4 flex-grow">
                        <div className="px-4 mb-6">
                            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: COLORS.secondary }}>
                                Your Collection
                            </p>
                            <p className="text-sm" style={{ color: COLORS.onSurfaceVariant }}>Premium Member</p>
                        </div>

                        <div className="space-y-1">
                            {[
                                { icon: "home", label: "Home", to: "/" },
                                { icon: "explore", label: "Explore", to: "/explore" },
                                { icon: "library_music", label: "Library", to: "/library", active: true },
                                { icon: "history", label: "Recent", to: "/recent" },
                                { icon: "download", label: "Downloads", to: "/downloads" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="ea-sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg"
                                    style={{
                                        color: item.active ? COLORS.primary : COLORS.onSurfaceVariant,
                                        fontWeight: item.active ? 700 : 400,
                                        background: item.active ? "rgba(255,255,255,0.05)" : "transparent",
                                    }}
                                >
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 px-4">
                            <button
                                className="ea-sunset-gradient w-full py-3 rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2 font-semibold"
                                style={{ color: COLORS.onPrimary }}
                            >
                                <span className="material-symbols-outlined">add</span>
                                Add New
                            </button>
                        </div>

                        <div className="mt-auto pt-8" style={{ borderTop: `1px solid rgba(255,255,255,0.05)` }}>
                            <Link to="/settings" className="ea-sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg" style={{ color: COLORS.onSurfaceVariant }}>
                                <span className="material-symbols-outlined">settings</span>
                                <span>Settings</span>
                            </Link>
                            <Link to="/support" className="ea-sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg" style={{ color: COLORS.onSurfaceVariant }}>
                                <span className="material-symbols-outlined">help</span>
                                <span>Support</span>
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* ── Main Content ── */}
                <main className="flex-1 min-h-screen px-4 md:px-12 py-8 md:py-12 pb-32 lg:ml-64 lg:w-[calc(100%-16rem)]">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold mb-1">All Albums</h2>
                            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: "rgba(203,196,210,0.7)" }}>
                                {total} ALBUMS TOTAL
                            </p>
                        </div>

                        {/* Sorting & Filtering */}
                        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0" style={{ scrollbarWidth: "none" }}>
                            <div
                                className="flex items-center gap-2 px-4 py-2 rounded-full"
                                style={{ background: COLORS.surfaceContainerHigh, border: "1px solid rgba(255,255,255,0.05)" }}
                            >
                                <span className="text-sm" style={{ color: COLORS.onSurfaceVariant }}>Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-transparent border-none text-sm font-bold outline-none cursor-pointer p-0 pr-6"
                                    style={{ color: COLORS.primary }}
                                >
                                    {SORT_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value} style={{ color: "#000" }}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="h-8 w-[1px] hidden md:block" style={{ background: "rgba(255,255,255,0.1)" }} />

                            <button
                                className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors"
                                style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                            >
                                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                <span className="text-sm font-bold">Filters</span>
                            </button>

                            <div className="flex gap-2">
                                {GENRE_CHIPS.map((genre) => {
                                    const active = activeGenre === genre;
                                    return (
                                        <span
                                            key={genre}
                                            onClick={() => toggleGenre(genre)}
                                            className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide cursor-pointer transition-all"
                                            style={{
                                                background: active ? "rgba(207,188,255,0.1)" : "rgba(255,255,255,0.05)",
                                                color: active ? COLORS.primary : COLORS.onSurfaceVariant,
                                                border: `1px solid ${active ? "rgba(207,188,255,0.2)" : "rgba(255,255,255,0.05)"}`,
                                            }}
                                        >
                                            {genre}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Album Grid — driven by InfiniteScroll, same pattern as AlbumsLive */}
                    <InfiniteScroll
                        dataLength={albums.length}
                        next={fetchMore}
                        hasMore={hasMore}
                        scrollableTarget="scrollable-explore-albums"
                        loader={
                            <div className="flex justify-center py-8">
                                <div
                                    className="w-5 h-5 rounded-full border-2"
                                    style={{
                                        borderColor: "rgba(207,188,255,0.25)",
                                        borderTopColor: COLORS.primary,
                                        animation: "ea-spin 0.8s linear infinite",
                                    }}
                                />
                            </div>
                        }
                        endMessage={
                            albums.length > 0 && (
                                <p
                                    className="text-center py-8 text-xs tracking-widest uppercase font-mono"
                                    style={{ color: "rgba(203,196,210,0.35)" }}
                                >
                                    ✦ You've seen it all ✦
                                </p>
                            )
                        }
                    >
                        <div className="ea-album-grid">
                            {albums.map((item) => (
                                <div key={item._id} className="group cursor-pointer">
                                    <div
                                        className="ea-glass-card relative aspect-square mb-4 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.02] group-hover:-translate-y-1"
                                    >
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url('${item.albumCover}')` }}
                                        />
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                            style={{ background: "rgba(0,0,0,0.4)" }}
                                        >
                                            <button
                                                className="ea-sunset-gradient w-12 h-12 rounded-full flex items-center justify-center shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                                                style={{ color: COLORS.onPrimary }}
                                            >
                                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-base text-left truncate transition-colors group-hover:text-[color:var(--ea-primary)]" style={{ color: COLORS.onSurface }}>
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-left truncate" style={{ color: COLORS.onSurfaceVariant }}>
                                        {item.curator || item.category}
                                    </p>
                                </div>
                            ))}

                            {albums.length === 0 && !initialLoading && (
                                <p className="text-sm col-span-full" style={{ color: COLORS.onSurfaceVariant }}>
                                    No albums found — try a different search or filter.
                                </p>
                            )}

                            {initialLoading &&
                                Array.from({ length: 10 }).map((_, i) => (
                                    <div key={i} className="animate-pulse">
                                        <div className="aspect-square mb-4 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }} />
                                        <div className="h-4 w-3/4 mb-2 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                                        <div className="h-3 w-1/2 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                                    </div>
                                ))}
                        </div>
                    </InfiniteScroll>
                </main>
            </div>

            {/* ── Now Playing bar ── */}
            <footer
                className="fixed bottom-0 left-0 w-full h-24 z-[100] px-6"
                style={{ background: "rgba(5,20,36,0.7)", backdropFilter: "blur(40px)", borderTop: `1px solid ${COLORS.borderSubtle}` }}
            >
                <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
                    <div className="flex items-center gap-4 w-1/3">
                        <div
                            className="ea-glass-card w-14 h-14 rounded-lg bg-cover bg-center"
                            style={{ background: "linear-gradient(135deg,#fb923c,#111)" }}
                        />
                        <div className="hidden sm:block">
                            <p className="font-bold text-base" style={{ color: COLORS.onSurface }}>Neon Horizons</p>
                            <p className="text-sm" style={{ color: COLORS.onSurfaceVariant }}>Arcade Echoes</p>
                        </div>
                        <button style={{ color: COLORS.onSurfaceVariant }}>
                            <span className="material-symbols-outlined">favorite</span>
                        </button>
                    </div>

                    <div className="flex flex-col items-center gap-2 w-1/3">
                        <div className="flex items-center gap-6">
                            <button style={{ color: COLORS.onSurfaceVariant }}>
                                <span className="material-symbols-outlined">shuffle</span>
                            </button>
                            <button style={{ color: COLORS.onSurfaceVariant }}>
                                <span className="material-symbols-outlined">skip_previous</span>
                            </button>
                            <button
                                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                                style={{ background: COLORS.onSurface, color: COLORS.background }}
                            >
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                            </button>
                            <button style={{ color: COLORS.onSurfaceVariant }}>
                                <span className="material-symbols-outlined">skip_next</span>
                            </button>
                            <button style={{ color: COLORS.onSurfaceVariant }}>
                                <span className="material-symbols-outlined">repeat</span>
                            </button>
                        </div>
                        <div className="w-full flex items-center gap-3">
                            <span className="text-[10px]" style={{ color: COLORS.onSurfaceVariant }}>1:24</span>
                            <div className="flex-grow h-1 rounded-full relative overflow-hidden cursor-pointer" style={{ background: "rgba(255,255,255,0.1)" }}>
                                <div className="ea-sunset-gradient absolute left-0 top-0 h-full w-1/3" />
                            </div>
                            <span className="text-[10px]" style={{ color: COLORS.onSurfaceVariant }}>3:45</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4 w-1/3">
                        <button className="hidden md:block" style={{ color: COLORS.onSurfaceVariant }}>
                            <span className="material-symbols-outlined">mic</span>
                        </button>
                        <button className="hidden md:block" style={{ color: COLORS.onSurfaceVariant }}>
                            <span className="material-symbols-outlined">queue_music</span>
                        </button>
                        <div className="flex items-center gap-2 w-32">
                            <span className="material-symbols-outlined" style={{ color: COLORS.onSurfaceVariant }}>volume_up</span>
                            <div className="flex-grow h-1 rounded-full relative" style={{ background: "rgba(255,255,255,0.1)" }}>
                                <div className="absolute left-0 top-0 h-full w-2/3 rounded-full" style={{ background: COLORS.onSurfaceVariant }} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* ── Mobile Sidebar Drawer ── */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-[70] lg:hidden" onClick={() => setSidebarOpen(false)} style={{ background: "rgba(0,0,0,0.6)" }}>
                    <aside
                        onClick={(e) => e.stopPropagation()}
                        className="h-full w-64 flex flex-col py-8 px-4 gap-4"
                        style={{ background: COLORS.surfaceContainer }}
                    >
                        {[
                            { icon: "home", label: "Home", to: "/" },
                            { icon: "explore", label: "Explore", to: "/explore" },
                            { icon: "library_music", label: "Library", to: "/library", active: true },
                            { icon: "history", label: "Recent", to: "/recent" },
                            { icon: "download", label: "Downloads", to: "/downloads" },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                to={item.to}
                                onClick={() => setSidebarOpen(false)}
                                className="flex items-center gap-3 py-2 px-3 rounded-lg"
                                style={{ color: item.active ? COLORS.primary : COLORS.onSurfaceVariant, fontWeight: item.active ? 700 : 400 }}
                            >
                                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </aside>
                </div>
            )}

            {/* ── Mobile Bottom Nav ── */}
            <nav
                className="fixed bottom-0 left-0 w-full z-[60] flex lg:hidden justify-around items-center h-16 px-4"
                style={{ background: "rgba(5,20,36,0.7)", backdropFilter: "blur(40px)", borderTop: `1px solid ${COLORS.borderSubtle}` }}
            >
                {[
                    { icon: "home", label: "Home", to: "/" },
                    { icon: "library_music", label: "Library", to: "/library", active: true },
                    { icon: "search", label: "Search", to: "/search" },
                    { icon: "person", label: "Profile", to: "/profile" },
                ].map((item) => (
                    <Link
                        key={item.label}
                        to={item.to}
                        className="flex flex-col items-center justify-center"
                        style={{ color: item.active ? COLORS.primary : COLORS.onSurfaceVariant }}
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span className="text-[10px] font-semibold mt-1">{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default ExploreAlbums;