import { useState, useEffect, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
// ── icons added for the new footer ──
import {
    Sparkles as SparklesIcon,
    Mail as MailIcon,
    ArrowRight as ArrowRightIcon,
    Instagram as InstagramIcon,
    Twitter as TwitterIcon,
    Youtube as YoutubeIcon,
    Mic as MicIcon,
    Github as GithubIcon,
    Headphones as HeadphonesIcon,
    ShieldCheck as ShieldCheckIcon,
    Globe as GlobeIcon,
    ChevronDown as ChevronDownIcon,
    ArrowUp as ArrowUpIcon,
} from "lucide-react";

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

const GLOBAL_NAV_LINKS = [
    { text: "Kalam", to: "/kalam" },
    { text: "Community", to: "/spaces" },
    { text: "Browse", to: "/Social" },
    { text: "Library", to: "/albumsLive", active: true },
];

const ExploreAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const [total, setTotal] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [initialLoading, setInitialLoading] = useState(true);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [sortBy, setSortBy] = useState("recent");
    const [activeGenre, setActiveGenre] = useState(null);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [SearchParams] = useSearchParams();
    const [user, setUser] = useState("");

    const navQuery = SearchParams.get('query');
    
    const Navigate = useNavigate();

    // Footer-overlap: the content block is pinned (sticky) once its end reaches the bottom of the scroll area
    const rootRef = useRef(null);
    const wrapRef = useRef(null);
    const [wrapStickyTop, setWrapStickyTop] = useState(0);

    if(navQuery){
        console.log(true);
    }else{
        console.log(false)
    }

    // Same pattern as AlbumsLive: refs drive the request params so we don't
    // need to worry about stale closures inside the InfiniteScroll callbacks.
    const page = useRef(1);
    const query = useRef("all");
    const newAlbums = useRef([]);
    const isFetchingMore = useRef(false);
    const [searchValue, setSearchValue] = useState("");

    const handleFetch = () => {
        if (query.current.trim() === "" && !navQuery) {
            query.current = "all";
        } else if(navQuery){
            query.current = navQuery;
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

    const getUserInfo=()=>{
        axiosInstance
        .get('/api/userId',{withCredentials:true})

        .then((response)=>{
            setUser(response.data);
        }).catch((error)=>{
            console.error("Error while getting user info", error);
        })
    }

    useEffect(() => {
        handleFetch();
        getUserInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Desktop viewports are often tall enough that a single page of
    // LIMIT albums doesn't produce a scrollbar at all, so the user can
    // never "scroll" to trigger InfiniteScroll's next(). After every
    // successful render, check whether the scroll container is actually
    // scrollable yet; if not (and there's more to load), fetch the next
    // page automatically until it is (or until hasMore is false).
    useEffect(() => {
        if (initialLoading || !hasMore || isFetchingMore.current) return;

        const container = document.getElementById("scrollable-explore-albums");
        if (!container) return;

        if (container.scrollHeight <= container.clientHeight) {
            fetchMore();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [albums, initialLoading, hasMore]);

    // New: keep the content block pinned when its bottom reaches the bottom of the scroll area,
    // so the footer can scroll up over it. Sticky "top" = viewportHeight - contentHeight (negative when content is taller).
    useEffect(() => {
        const wrapEl = wrapRef.current;
        const rootEl = rootRef.current;
        if (!wrapEl || !rootEl) return;
        const update = () => {
            const top = Math.min(0, rootEl.clientHeight - wrapEl.offsetHeight);
            setWrapStickyTop(top);
        };
        update();
        const ro = new ResizeObserver(update);
        ro.observe(wrapEl);
        ro.observe(rootEl);
        window.addEventListener("resize", update);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", update);
        };
    }, []);

    const fetchMore = () => {
        if (initialLoading) return;
        // Prevent overlapping requests: on tall/desktop viewports a single
        // page may not fill the scroll container, so InfiniteScroll can
        // call next() again before the previous request resolves. Without
        // this guard both calls request the same page.current, appending
        // duplicate items (which React collapses on key) and the loader
        // never clears.
        if (isFetchingMore.current) return;
        isFetchingMore.current = true;

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
            })
            .finally(() => {
                isFetchingMore.current = false;
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
            ref={rootRef}
            className="w-full overflow-y-auto overflow-x-hidden"
            style={{
                height: "100svh",
                background: COLORS.background,
                color: COLORS.onSurface,
                fontFamily: "Inter, system-ui, sans-serif",
            }}
        >
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block');

                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    vertical-align: middle;
                    line-height: 1;
                }

                .k-avatar {
                    width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
                    background: rgba(83,74,183,0.18); border: 0.5px solid rgba(210,170,90,0.3);
                    display: flex; align-items: center; justify-content: center;
                    font-size: 11px; font-weight: 500; color: rgba(210,170,90,0.8); cursor: pointer;
                    overflow: hidden;
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
                    .ea-header-inner { height: 64px !important; }
                    .ea-content-offset { padding-top: 64px !important; }
                    .ea-album-grid {
                        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
                        gap: 14px;
                    }
                    .ea-now-playing { display: none !important; }
                    .ea-main-scroll { padding-bottom: 88px !important; }
                    .ea-mobile-search-bar { display: flex !important; }
                }
                .ea-mobile-search-bar { display: none; }
            `}</style>

            {/* ── Top Navigation ── */}
            <header
                            className="fixed top-0 left-0 w-full z-50"
                            style={{ background: "rgba(5,20,36,0.7)", backdropFilter: "blur(40px)", borderBottom: `1px solid ${COLORS.borderSubtle}` }}
                        >
                            <div
                                className="items-center h-16 md:h-20 px-3 sm:px-6 w-full max-w-[1440px] mx-auto"
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr auto 1fr",
                                    columnGap: 16,
                                }}
                            >
                                <div className="flex items-center gap-2 sm:gap-4" style={{ minWidth: 0 }}>
                                    <button
                                        onClick={() => setSidebarOpen(true)}
                                        className="lg:hidden mr-1 sm:mr-2 w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
                                        style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                                        aria-label="Open sidebar"
                                    >
                                        <span className="material-symbols-outlined text-lg">menu</span>
                                    </button>
            
                                    <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
                                        {/* <img src="/logo2.svg" alt="Alfaz Logo" className="h-7 sm:h-8 w-auto" /> */}
                                        {/* <span className="relative inline-block leading-none font-black tracking-wide">
                                            <span className="relative inline-block text-xl sm:text-2xl md:text-3xl">
                                                <span
                                                    className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent"
                                                    style={{ fontFamily: "'Dancing Script', cursive" }}
                                                >
                                                    A
                                                </span>
                                                <bdi
                                                    className="inline-block -mx-0.5 translate-y-[2px] bg-gradient-to-r from-rose-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent"
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
                                        </span> */}
                                        <span className="font-extrabold text-xl md:text-3xl tracking-tight">Library</span>
                                    </Link>
                                </div>
            
                                <nav className="lib-nav-links hidden md:flex items-center gap-8" style={{ justifySelf: "center" }}>
                                    {GLOBAL_NAV_LINKS.map((link) =>
                                        link.active ? (
                                            <Link
                                                key={link.text}
                                                to={link.to}
                                                className="font-bold pb-1"
                                                style={{ color: COLORS.primary, borderBottom: `2px solid ${COLORS.primary}` }}
                                            >
                                                {link.text}
                                            </Link>
                                        ) : (
                                            <Link key={link.text} to={link.to} className="lib-nav-link">
                                                {link.text}
                                            </Link>
                                        )
                                    )}
                                </nav>
            
                                <div className="flex items-center gap-2 sm:gap-4" style={{ justifySelf: "end" }}>
                                    <button
                                        className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
                                        style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                                        aria-label="Search"
                                        onClick={() => Navigate("/search")}
                                    >
                                        <span className="material-symbols-outlined text-lg" style={{ color: COLORS.onSurfaceVariant }}>search</span>
                                    </button>
                                    <div
                                        className="lib-nav-search hidden lg:flex items-center rounded-full px-4 py-2"
                                        style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                                    >
                                        <span className="material-symbols-outlined text-sm mr-2" style={{ color: COLORS.onSurfaceVariant }}>search</span>
                                        <input
                                            type="text"
                                            placeholder="Search albums..."
                                            onChange={(e) => (searchQuery.current = e.target.value)}
                                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                            className="bg-transparent border-none focus:ring-0 text-sm w-48 outline-none"
                                            style={{ color: COLORS.onSurface }}
                                        />
                                        <button onClick={()=>Navigate(`/albums?query=${searchQuery.current}`)}>
                                            search
                                        </button>
                                    </div>
                                    {/* <button className="material-symbols-outlined" style={{ color: COLORS.onSurface }}>account_circle</button> */}
                                    <div className="k-avatar">
                                <img onClick={() => Navigate(`/profile?userId=${user._id}`)} className="rounded-full h-full" src={user.profilePic} alt="profilePic" />
                                </div>
                                </div>
                            </div>
                        </header>

            {/* Content block (sidebar + main): pinned via sticky so the footer can scroll over it */}
            <div
                ref={wrapRef}
                className="ea-content-offset flex pt-20 pb-8 sticky"
                style={{ top: `${wrapStickyTop}px` }}
            >
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
                            { label: "Home", to: "/" },
                            { label: "Kalam", to: "/kalam" },
                            { label: "Community", to: "/spaces" },                           
                            { label: "Browse", to: "/social" },
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

                            <Link
                                to="/library"
                                className="ea-sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg"
                                style={{
                                    color: COLORS.onSurfaceVariant,
                                    fontWeight: 400,
                                    background: "transparent",
                                }}
                            >
                                <span className="material-symbols-outlined">{undefined}</span>
                                <span>Library</span>
                            </Link>
                            <Link
                                to="/explore"
                                className="ea-sidebar-link flex items-center gap-3 pl-11 pr-4 py-2 rounded-lg"
                                style={{
                                    color: COLORS.primary,
                                    fontWeight: 700,
                                    background: "rgba(255,255,255,0.05)",
                                    fontSize: 14,
                                }}
                            >
                                <span>Explore</span>
                            </Link>
                        </div>

                        {/* <div className="mt-8 px-4">
                            <button
                                className="ea-sunset-gradient w-full py-3 rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2 font-semibold"
                                style={{ color: COLORS.onPrimary }}
                            >
                                <span className="material-symbols-outlined">add</span>
                                Add New
                            </button>
                        </div> */}

                        <div className="mt-auto pt-8" style={{ borderTop: `1px solid rgba(255,255,255,0.05)` }}>
                            <Link to="/settings" className="ea-sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg" style={{ color: COLORS.onSurfaceVariant }}>
                                <span className="material-symbols-outlined">settings</span>
                                <span>Settings</span>
                            </Link>
                            <Link to="/helpcenter" className="ea-sidebar-link flex items-center gap-3 px-4 py-3 rounded-lg" style={{ color: COLORS.onSurfaceVariant }}>
                                <span className="material-symbols-outlined">help</span>
                                <span>Support</span>
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* ── Main Content ── */}
                <main className="ea-main-scroll flex-1 min-h-screen px-4 md:px-12 py-6 md:py-12 pb-32 lg:ml-64 lg:w-[calc(100%-16rem)]">
                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-2xl font-bold mb-1">{navQuery || query.current}</h2>
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
                                        
                                        {item.albumCover && <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{ backgroundImage: `url('${item.albumCover}')` }}
                                        />}

                                        {item.defaultAlbumCover && <div
                                            className="w-full h-full bg-cover bg-center"
                                             style={{ background: `linear-gradient(135deg, ${item.defaultAlbumCover.color1}, ${item.defaultAlbumCover.color2})` }}
                                        />}
                                        
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                            style={{ background: "rgba(0,0,0,0.4)" }}
                                        >
                                            <button onClick={()=>Navigate(`/album?albumId=${item._id}`)}
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

            {/* ==================== ENHANCED PROFESSIONAL FOOTER (themed to Library's navy/lavender palette) ====================
                - lives OUTSIDE the sidebar/main block, so it spans the full width (and covers the fixed sidebar)
                - relative z-[45] places it above the sidebar (z-40); the content block above is `sticky`
                  with a measured negative top (see wrapStickyTop), so it stays pinned when its end
                  reaches the bottom and this footer scrolls up OVER it
                - pb-16 on mobile keeps the last line clear of the fixed bottom nav */}
            {/* Footer only appears once every album has been loaded (hasMore === false) */}
            {!hasMore && (
            <footer
                className="relative z-[45] border-t border-[#cfbcff]/20 bg-gradient-to-b from-[#051424] via-[#04101d] to-[#020a13] overflow-hidden pb-16 lg:pb-0"
            >
                {/* Ambient Glow behind footer */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle at 50% 0%, rgba(207, 188, 255, 0.12) 0%, rgba(231, 195, 101, 0.04) 35%, transparent 70%)",
                    }}
                ></div>

                {/* Decorative Top Divider Accent */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#cfbcff]/40 to-transparent"></div>

                {/* Top Pre-Footer Callout / Literary Newsletter Section */}
                <div className="relative border-b border-white/5 bg-white/[0.015]">
                    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-14">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
                            <div className="lg:col-span-6 space-y-2">
                                <div className="flex items-center gap-2 text-[#cfbcff] text-xs font-semibold tracking-wider uppercase">
                                    <SparklesIcon className="w-3.5 h-3.5" />
                                    The Weekly Bayt &amp;courier Dispatch
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-serif text-[#d4e4fa] font-medium">
                                    Curated couplets, literary contests &amp; essays.
                                </h3>
                                <p className="text-sm text-[#cbc4d2]/70 max-w-lg">
                                    Join 42,000+ literary enthusiasts who receive handpicked gazals, poetry writing prompts, and festival invites every Sunday morning.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <form
                                    className="flex flex-col sm:flex-row gap-3 max-w-lg lg:ml-auto"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="relative flex-1">
                                        <MailIcon className="w-4 h-4 text-[#cbc4d2]/70 absolute left-4 top-1/2 -translate-y-1/2" />
                                        <input
                                            className="w-full bg-[#122131]/80 text-[#d4e4fa] placeholder-[#cbc4d2]/40 text-sm rounded-xl pl-11 pr-4 py-3.5 border border-[#cfbcff]/25 focus:border-[#cfbcff] focus:outline-none focus:ring-2 focus:ring-[#cfbcff]/20 transition-all"
                                            placeholder="Enter your email for the gazette..."
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <button
                                        className="px-6 py-3.5 rounded-xl bg-[#cfbcff] hover:brightness-110 text-[#381e72] font-semibold text-sm transition-all shadow-md shadow-[#cfbcff]/10 flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]"
                                        type="submit"
                                    >
                                        <span>Subscribe</span>
                                        <ArrowRightIcon className="w-4 h-4" />
                                    </button>
                                </form>
                                <p className="text-[11px] text-[#cbc4d2]/50 mt-2 lg:text-right">
                                    Zero spam. Unsubscribe with one click anytime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Multi-Column Footer Grid */}
                <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                        {/* Brand & Mission Column (Col 1-4) */}
                        <div className="lg:col-span-4 space-y-5">
                            <div className="flex items-center gap-3">
                                <h1 className="relative inline-block text-4xl sm:text-5xl leading-none font-black tracking-wide cursor-default group">
                                    {/* Soft Glow layer behind text */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0 blur-xl opacity-40 bg-gradient-to-r from-amber-400 via-rose-400 to-orange-400 bg-clip-text text-transparent transition-opacity duration-500 group-hover:opacity-75"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        Alfaz
                                    </span>

                                    {/* Main text with composite Urdu & Script flourish */}
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
                                {/* <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                    Shayri Club
                                </span> */}
                            </div>

                            <p className="text-[#cbc4d2]/70 text-sm leading-relaxed max-w-sm">
                                A sanctuary for poets, shayars, and novelists to immortalize their words, connect through soulful recitations, and celebrate the nuance of multilingual literature.
                            </p>

                            {/* Community Trust Badges */}
                            <div className="flex items-center gap-4 pt-1">
                                <div className="flex -space-x-2">
                                    <img alt="Poet Avatar" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#051424] object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
                                    <img alt="Writer Avatar" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#051424] object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
                                    <img alt="Contributor" className="inline-block h-8 w-8 rounded-full ring-2 ring-[#051424] object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
                                    <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-[#051424] bg-[#cfbcff]/20 text-[#cfbcff] text-[10px] font-bold">
                                        +18k
                                    </div>
                                </div>
                                <div className="text-xs text-[#cbc4d2]/70">
                                    <span className="text-[#d4e4fa] font-medium">18,500+</span> Published Writers
                                </div>
                            </div>

                            {/* Social Icon Links with Tooltip/Hover Glow */}
                            <div className="flex items-center gap-2.5 pt-2">
                                <a aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#cfbcff]/10 border border-white/5 hover:border-[#cfbcff]/30 text-[#cbc4d2]/70 hover:text-[#cfbcff] flex items-center justify-center transition-all" href="#">
                                    <InstagramIcon className="w-4 h-4" />
                                </a>
                                <a aria-label="Twitter / X" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#cfbcff]/10 border border-white/5 hover:border-[#cfbcff]/30 text-[#cbc4d2]/70 hover:text-[#cfbcff] flex items-center justify-center transition-all" href="#">
                                    <TwitterIcon className="w-4 h-4" />
                                </a>
                                <a aria-label="YouTube" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#cfbcff]/10 border border-white/5 hover:border-[#cfbcff]/30 text-[#cbc4d2]/70 hover:text-[#cfbcff] flex items-center justify-center transition-all" href="#">
                                    <YoutubeIcon className="w-4 h-4" />
                                </a>
                                <a aria-label="Spotify" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#cfbcff]/10 border border-white/5 hover:border-[#cfbcff]/30 text-[#cbc4d2]/70 hover:text-[#cfbcff] flex items-center justify-center transition-all" href="#">
                                    <MicIcon className="w-4 h-4" />
                                </a>
                                <a aria-label="GitHub" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#cfbcff]/10 border border-white/5 hover:border-[#cfbcff]/30 text-[#cbc4d2]/70 hover:text-[#cfbcff] flex items-center justify-center transition-all" href="#">
                                    <GithubIcon className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Explore (Col 5-6) */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="flex items-center gap-2">
                                {/* <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> */}
                                <h4 className="text-sm font-semibold text-[#d4e4fa] tracking-wider uppercase font-sans">Explore</h4>
                            </div>
                            <ul className="space-y-3 text-sm text-[#cbc4d2]/70">
                                <li>
                                    <a className="group flex items-center justify-between hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Kalam (Poetry)</span>
                                        {/* <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">Hot</span> */}
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Community Circle</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Browse Categories</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Mushaira Live Rooms</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center justify-between hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Audio Recitations</span>
                                        <HeadphonesIcon className="w-3.5 h-3.5 text-[#cbc4d2]/50 group-hover:text-[#cfbcff]" />
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Featured Shayars</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Resources & Academy (Col 7-8) */}
                        <div className="lg:col-span-3 space-y-4">
                            <div className="flex items-center gap-2">
                                {/* <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> */}
                                <h4 className="text-sm font-semibold text-[#d4e4fa] tracking-wider uppercase font-sans">Writers &amp; Guild</h4>
                            </div>
                            <ul className="space-y-3 text-sm text-[#cbc4d2]/70">
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">About Alfaz</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Editorial Guidelines</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center justify-between hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Poetic Meters (Behr) Guide</span>
                                        {/* <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">Learn</span> */}
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Publishing Grants &amp; Contests</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Help &amp; Creator Support</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Legal & System Status (Col 9-12) */}
                        <div className="lg:col-span-3 space-y-4">
                            <div className="flex items-center gap-2">
                                {/* <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> */}
                                <h4 className="text-sm font-semibold text-[#d4e4fa] tracking-wider uppercase font-sans">Legal &amp; Transparency</h4>
                            </div>
                            <ul className="space-y-3 text-sm text-[#cbc4d2]/70">
                                <li>
                                    <button
                                        onClick={() => Navigate('/privacyPolicy')}
                                        className="group flex items-center justify-between w-full text-left hover:text-[#cfbcff] transition-colors duration-150"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">Privacy Policy</span>
                                        <ShieldCheckIcon className="w-3.5 h-3.5 text-[#cbc4d2]/50 group-hover:text-emerald-400" />
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => Navigate('/termsofservices')}
                                        className="group flex items-center w-full text-left hover:text-[#cfbcff] transition-colors duration-150"
                                    >
                                        <span className="group-hover:translate-x-1 transition-transform">Terms of Service</span>
                                    </button>
                                </li>
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Copyright &amp; Intellectual Rights</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="group flex items-center hover:text-[#cfbcff] transition-colors duration-150" href="#">
                                        <span className="group-hover:translate-x-1 transition-transform">Contact &amp; Inquiries</span>
                                    </a>
                                </li>
                            </ul>

                            {/* System Status Card */}
                            <div className="mt-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-xs text-[#cbc4d2] font-medium">All Systems Operational</span>
                                </div>
                                <span className="text-[11px] text-[#cbc4d2]/50">v2.4.0</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar: Copyright, Language Switcher, Regional note */}
                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#cbc4d2]/50">
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center md:text-left">
                            <span>© 2025 <strong className="text-[#cbc4d2]/80 font-semibold">Alfaz • Shayri Club</strong>. All rights reserved.</span>
                            <span className="hidden sm:inline text-[#cbc4d2]/20">•</span>
                            <span className="text-[#cbc4d2]/70">Crafted with devotion for Urdu, Hindi &amp; English verse.</span>
                        </div>
                        <div className="flex items-center gap-6">
                            {/* Language Selector Mockup */}
                            <button className="inline-flex items-center gap-1.5 text-[#cbc4d2]/70 hover:text-[#cfbcff] transition-colors">
                                <GlobeIcon className="w-3.5 h-3.5" />
                                <span>English (EN)</span>
                                <ChevronDownIcon className="w-3 h-3" />
                            </button>

                            {/* Back to top button */}
                            <a
                                className="inline-flex items-center gap-1 text-[#cbc4d2]/70 hover:text-[#cfbcff] transition-colors"
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    rootRef.current?.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                            >
                                <span>Back to top</span>
                                <ArrowUpIcon className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            )}

            {/* ── Now Playing bar ── */}
            {/* <footer
                className="ea-now-playing fixed bottom-0 left-0 w-full h-24 z-[100] px-6"
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
            </footer> */}

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