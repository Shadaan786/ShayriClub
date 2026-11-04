import { useState, useEffect, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Crown, Menu, X } from "lucide-react";
import logo from '../../public/logo2.svg'

/**
 * Color tokens pulled from the Auralis Nocturne / Library Material-3 dark
 * theme mock, kept as plain JS so we don't depend on a custom Tailwind
 * config existing in this project.
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

const SORT_OPTIONS = [
    { value: "followers", label: "Sort by: Most Followers" },
    { value: "active", label: "Sort by: Recently Active" },
    { value: "az", label: "Sort by: A-Z" },
    { value: "newest", label: "Sort by: Newest" },
];

const formatFollowers = (curator) => {
    if (typeof curator.followers === "string") return curator.followers;
    const count = curator.followers ?? curator.followerCount ?? curator.followersCount ?? 0;
    const formatted =
        count >= 1000 ? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}K` : `${count}`;
    return `${formatted} Followers`;
};

const Authors = () => {
    const [curators, setCurators] = useState([]);
    const [total, setTotal] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [initialLoading, setInitialLoading] = useState(true);
    const [sortBy, setSortBy] = useState("followers");
    const [searchValue, setSearchValue] = useState("");
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [isPremiumModal, setIsPremiumModal] = useState(false);

    // Same refs-driven pattern used for albums: page/query live outside
    // React state so InfiniteScroll's callbacks always read the latest
    // request params without worrying about stale closures.
    const page = useRef(1);
    const query = useRef("all");
    const isFetchingMore = useRef(false);

    const handleFetch = () => {
        if (query.current.trim() === "") {
            query.current = "all";
        }

        page.current = 1;

        axiosInstance
            .get(`/api/featuredCurators?page=${page.current}&limit=${LIMIT}&query=${query.current}`)
            .then((response) => {
                const data = response.data;
                // API may return a plain array, or an object with { curators, total }
                const list = Array.isArray(data) ? data : data.curators ?? data.authors ?? [];
                const totalCount = Array.isArray(data) ? undefined : data.total;

                setCurators(list);
                setTotal(typeof totalCount === "number" ? totalCount : list.length);
                setHasMore(list.length === LIMIT);

                page.current = page.current + 1;
                setInitialLoading(false);
            })
            .catch((error) => {
                console.error("error while fetching featured curators", error);
                setInitialLoading(false);
            });
    };

    useEffect(() => {
        handleFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // This page scrolls with the window (no internal scroll container), so
    // on tall desktop screens a single page of LIMIT curators may not
    // produce a scrollbar at all — meaning the user can never "scroll" to
    // trigger InfiniteScroll's next(). After every render, check whether
    // the document is actually scrollable yet; if not (and there's more to
    // load), fetch the next page automatically until it is.
    useEffect(() => {
        if (initialLoading || !hasMore || isFetchingMore.current) return;

        if (document.documentElement.scrollHeight <= window.innerHeight) {
            fetchMore();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [curators, initialLoading, hasMore]);

    const fetchMore = () => {
        if (initialLoading) return;
        // Prevent overlapping requests: without this guard, two calls
        // firing back-to-back (e.g. from the auto-fill effect above and
        // InfiniteScroll's own scroll listener) would both request the
        // same page.current.
        if (isFetchingMore.current) return;
        isFetchingMore.current = true;

        axiosInstance
            .get(`/api/featuredCurators?page=${page.current}&limit=${LIMIT}&query=${query.current}`)
            .then((response) => {
                const data = response.data;
                const list = Array.isArray(data) ? data : data.curators ?? data.authors ?? [];

                if (list.length === 0) {
                    setHasMore(false);
                    return;
                }

                let addedCount = 0;
                setCurators((prevItems) => {
                    const existingIds = new Set(prevItems.map((c) => c._id || c.id));
                    const uniqueNew = list.filter((c) => !existingIds.has(c._id || c.id));
                    addedCount = uniqueNew.length;

                    if (uniqueNew.length === 0) {
                        // The API returned a page's worth of data, but every
                        // item is already loaded — the backend is very
                        // likely not advancing on `page`. Treat this as
                        // "no more data" instead of looping forever.
                        console.warn(
                            `[Authors] page=${page.current} returned ${list.length} item(s) that were all already loaded — check that the API is honoring the "page" query param.`
                        );
                        return prevItems;
                    }

                    return [...prevItems, ...uniqueNew];
                });

                if (addedCount === 0) {
                    setHasMore(false);
                    return;
                }

                setTotal((prevTotal) => prevTotal + addedCount);
                page.current = page.current + 1;
                setHasMore(list.length === LIMIT);
            })
            .catch((error) => {
                console.error("error while fetching featured curators", error);
            })
            .finally(() => {
                isFetchingMore.current = false;
            });
    };

    const handleSearch = () => {
        query.current = searchValue;
        handleFetch();
    };

    const toggleFollow = (id) => {
        setCurators((prev) =>
            prev.map((c) => ((c._id || c.id) === id ? { ...c, following: !c.following } : c))
        );
    };

    return (
        <div
            className="min-h-screen w-full overflow-x-hidden"
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
                .cur-sunset-gradient {
                    background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.tertiary} 100%);
                }
                .cur-glass {
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.08);
                    transition: background .25s, transform .25s;
                }
                .cur-glass:hover {
                    background: rgba(255,255,255,0.06);
                    transform: translateY(-4px);
                }
                .cur-nav-link { color: ${COLORS.onSurfaceVariant}; transition: color .2s; }
                .cur-nav-link:hover { color: ${COLORS.primary}; }
                .cur-sidebar-link { color: ${COLORS.onSurfaceVariant}; transition: background .2s, color .2s; }
                .cur-sidebar-link:hover { background: rgba(255,255,255,0.05); }
                .cur-follow-btn {
                    border: 1px solid rgba(207,188,255,0.4);
                    color: ${COLORS.primary};
                    background: transparent;
                    transition: all .15s;
                }
                .cur-follow-btn:hover {
                    background: ${COLORS.primary};
                    color: ${COLORS.onPrimary};
                }
                @keyframes cur-spin { to { transform: rotate(360deg); } }
                .cur-mobile-search-bar { display: none; }

                @media (max-width: 767px) {
                    .cur-header { height: calc(56px + env(safe-area-inset-top)) !important; }
                    .cur-header-inner { padding-top: env(safe-area-inset-top) !important; }
                    .cur-main { padding-top: calc(56px + env(safe-area-inset-top) + 12px) !important; }
                    .cur-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                        gap: 12px !important;
                    }
                    .cur-card { padding: 16px !important; border-radius: 20px !important; }
                    .cur-card-avatar { width: 72px !important; height: 72px !important; margin-bottom: 12px !important; }
                    .cur-card-name { font-size: 13px !important; }
                    .cur-card-followers { font-size: 10px !important; margin-bottom: 14px !important; }
                    .cur-follow-btn, .cur-sunset-gradient.cur-follow-cta { padding-top: 8px !important; padding-bottom: 8px !important; font-size: 10px !important; }
                    .cur-mobile-search-bar { display: flex !important; }
                    .cur-icon-btn { width: 40px !important; height: 40px !important; }
                    .cur-footer-player { padding-top: 10px !important; padding-bottom: calc(10px + env(safe-area-inset-bottom)) !important; }
                }
                @media (max-width: 380px) {
                    .cur-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 10px !important; }
                    .cur-card-avatar { width: 64px !important; height: 64px !important; }
                }
            `}</style>

            {/* ── Side Nav (desktop) ── */}
            <nav
                className="hidden md:flex fixed left-0 top-0 h-full w-64 z-40 flex-col p-6 gap-2"
                style={{ background: "rgba(18,33,49,0.4)", backdropFilter: "blur(24px)", borderRight: `1px solid ${COLORS.borderSubtle}` }}
            >
                <div className="mb-8">
                    <h1 className="text-2xl font-bold" style={{ color: COLORS.primary }}>Library</h1>
                    <p className="text-xs font-semibold tracking-widest uppercase opacity-60" style={{ color: COLORS.onSurfaceVariant }}>
                        Auralis Nocturne
                    </p>
                </div>

                <div className="flex flex-col gap-2 flex-grow">
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
                            className="cur-sidebar-link flex items-center gap-3 p-3 rounded-xl"
                            style={{
                                color: item.active ? COLORS.primary : COLORS.onSurfaceVariant,
                                background: item.active ? "rgba(207,188,255,0.1)" : "transparent",
                            }}
                        >
                            <span className="material-symbols-outlined">{item.icon}</span>
                            <span className="text-xs font-semibold tracking-widest uppercase">{item.label}</span>
                        </Link>
                    ))}
                </div>

                <div className="mt-auto pt-6 flex flex-col gap-2">
                    <button
                        className="cur-sunset-gradient font-semibold text-xs tracking-widest uppercase py-3 rounded-xl mb-6 shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
                        onClick={()=>setIsPremiumModal(true)}
                        style={{ color: COLORS.onPrimary }}
                    >
                        Upgrade to Pro
                    </button>
                    <Link to="/settings" className="cur-sidebar-link flex items-center gap-3 p-3 rounded-xl">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-xs font-semibold tracking-widest uppercase">Settings</span>
                    </Link>
                    <Link to="/support" className="cur-sidebar-link flex items-center gap-3 p-3 rounded-xl">
                        <span className="material-symbols-outlined">help</span>
                        <span className="text-xs font-semibold tracking-widest uppercase">Help</span>
                    </Link>
                </div>
            </nav>

            {/* ── Top Nav ── */}
            <header
                className="cur-header fixed top-0 right-0 left-0 md:left-64 z-50 flex flex-col justify-center h-16"
                style={{ background: "rgba(5,20,36,0.6)", backdropFilter: "blur(32px)", borderBottom: `1px solid ${COLORS.borderSubtle}` }}
            >
                <div className="cur-header-inner flex justify-between items-center px-4 md:px-12 h-full">
                    <div className="flex items-center gap-8">
                        <span className="md:hidden text-2xl font-extrabold tracking-tighter" style={{ color: COLORS.primary }}>Library</span>
                        <div className="hidden lg:flex items-center gap-6">
                            <Link to="/artists" className="cur-nav-link text-base">Artists</Link>
                            <Link to="/albums" className="cur-nav-link text-base">Albums</Link>
                            <Link to="/playlists" className="cur-nav-link text-base">Playlists</Link>
                            <Link to="/genres" className="cur-nav-link text-base">Genres</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <div
                            className="hidden sm:flex items-center rounded-full px-4 py-2 transition-all"
                            style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                        >
                            <span className="material-symbols-outlined text-[20px]" style={{ color: COLORS.onSurfaceVariant }}>search</span>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                placeholder="Search curated library..."
                                className="bg-transparent border-none focus:ring-0 text-base w-48 outline-none"
                                style={{ color: COLORS.onSurface }}
                            />
                        </div>
                        <button
                            onClick={() => setMobileSearchOpen((prev) => !prev)}
                            className="cur-icon-btn sm:hidden w-9 h-9 flex items-center justify-center rounded-full"
                            style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                            aria-label="Toggle search"
                        >
                            <span className="material-symbols-outlined text-[20px]" style={{ color: COLORS.onSurfaceVariant }}>search</span>
                        </button>
                        <button
                            className="material-symbols-outlined p-2 transition-colors"
                            style={{ color: COLORS.onSurfaceVariant }}
                        >
                            settings
                        </button>
                        <div
                            className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                            style={{ background: COLORS.surfaceContainer, border: `1px solid ${COLORS.borderSubtle}` }}
                        >
                            <img
                                className="w-full h-full object-cover"
                                alt="Profile"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJvDit6hr4INv-0DUByHGbbIDeAlcpaVNuh-_p2AmLkX38PlNGnvOx3L9z0wmlAAQg4HnAJjlkvkB5VwNkswPgUqRx7lhEp6LM-TH-yFAxJh79kvcRiEhKEANKwkWGkXhJShVmNtAgLnJrZukYYyUJvaUsWz1bd4xBkRyJLJW7sY2kF4ALcCEPTK0XrhmHpP8wNC5KFTDG64GjKAnLE1wQfFKB5jz5KjW7b1kPU7ZY_GdsIemqe_Nz"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile search row — toggled by the search icon above */}
                {mobileSearchOpen && (
                    <div className="cur-mobile-search-bar items-center relative px-4 pb-3 sm:hidden">
                        <span
                            className="material-symbols-outlined absolute left-7 top-1/2 -translate-y-1/2"
                            style={{ color: COLORS.onSurfaceVariant }}
                        >
                            search
                        </span>
                        <input
                            autoFocus
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                            placeholder="Search curated library..."
                            className="rounded-full py-2 pl-10 pr-4 text-sm w-full outline-none transition-all"
                            style={{ background: "rgba(39,54,71,0.4)", border: "none", color: COLORS.onSurface }}
                        />
                    </div>
                )}
            </header>

            {/* ── Main Content ── */}
            <main className="cur-main relative z-10 pt-24 pb-32 px-4 md:px-12 md:ml-64 md:w-[calc(100%-16rem)] min-h-screen">
                {/* Header Section */}
                <section className="mb-8 md:mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tighter leading-none mb-2" style={{ color: COLORS.onSurface }}>
                                Featured Curators
                            </h2>
                            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: COLORS.primary }}>
                                {total} Curators
                            </p>
                        </div>

                        {/* Search & Filters */}
                        <div className="flex flex-wrap items-center gap-3 md:gap-4">
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="appearance-none rounded-full pl-5 pr-9 py-2.5 md:pl-6 md:pr-10 md:py-3 text-xs font-semibold tracking-widest uppercase cursor-pointer outline-none transition-all"
                                    style={{ background: COLORS.surfaceContainerHigh, border: `1px solid ${COLORS.borderSubtle}`, color: COLORS.onSurface }}
                                >
                                    {SORT_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value} style={{ color: "#000" }}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                                <span
                                    className="material-symbols-outlined absolute right-3 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                    style={{ color: COLORS.onSurfaceVariant }}
                                >
                                    expand_more
                                </span>
                            </div>
                            <button className="cur-glass p-2.5 md:p-3 rounded-full flex items-center justify-center transition-all">
                                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Curator Grid — driven by InfiniteScroll (window-scrolled, same pagination pattern as Albums) */}
                <InfiniteScroll
                    dataLength={curators.length}
                    next={fetchMore}
                    hasMore={hasMore}
                    loader={
                        <div className="flex justify-center py-8">
                            <div
                                className="w-5 h-5 rounded-full border-2"
                                style={{
                                    borderColor: "rgba(207,188,255,0.25)",
                                    borderTopColor: COLORS.primary,
                                    animation: "cur-spin 0.8s linear infinite",
                                }}
                            />
                        </div>
                    }
                    endMessage={
                        curators.length > 0 && (
                            <p
                                className="text-center py-8 text-xs tracking-widest uppercase font-mono"
                                style={{ color: "rgba(203,196,210,0.35)" }}
                            >
                                ✦ You've seen it all ✦
                            </p>
                        )
                    }
                >
                    <section className="cur-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {curators.map((curator) => {
                            const id = curator._id || curator.id;
                            const img = curator.profilePic || curator.avatar || curator.profileImage;
                            return (
                                <div key={id} className="cur-card cur-glass p-6 rounded-3xl flex flex-col items-center text-center group">
                                    <div className="cur-card-avatar relative w-24 h-24 md:w-32 md:h-32 mb-6 transition-transform duration-500 group-hover:scale-105">
                                        <img
                                            className="w-full h-full rounded-full object-cover shadow-xl"
                                            style={{ border: `4px solid ${COLORS.surfaceContainerHighest}` }}
                                            alt={curator.name}
                                            src={img}
                                        />
                                    </div>
                                    <h3 className="cur-card-name text-base font-bold mb-1" style={{ color: COLORS.onSurface }}>{curator.name}</h3>
                                    <p className="cur-card-followers text-xs mb-6 uppercase tracking-wider" style={{ color: COLORS.onSurfaceVariant }}>
                                        {formatFollowers(curator)}
                                    </p>
                                    {curator.following ? (
                                        <button
                                            onClick={() => toggleFollow(id)}
                                            className="cur-sunset-gradient cur-follow-cta w-full py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-lg hover:brightness-110 active:scale-95 transition-all"
                                            style={{ color: COLORS.onPrimary }}
                                        >
                                            Following
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => toggleFollow(id)}
                                            className="cur-follow-btn w-full py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase active:scale-95"
                                        >
                                            Follow
                                        </button>
                                    )}
                                </div>
                            );
                        })}

                        {curators.length === 0 && !initialLoading && (
                            <p className="text-sm col-span-full" style={{ color: COLORS.onSurfaceVariant }}>
                                No curators found — try a different search.
                            </p>
                        )}

                        {initialLoading &&
                            Array.from({ length: 10 }).map((_, i) => (
                                <div key={i} className="cur-card p-6 rounded-3xl flex flex-col items-center animate-pulse">
                                    <div className="cur-card-avatar w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full" style={{ background: "rgba(255,255,255,0.05)" }} />
                                    <div className="h-4 w-2/3 mb-2 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                                    <div className="h-3 w-1/2 rounded" style={{ background: "rgba(255,255,255,0.05)" }} />
                                </div>
                            ))}
                    </section>
                </InfiniteScroll>

            </main>

            {isPremiumModal && (
              <div
                className="fixed inset-0 z-[100] overflow-y-auto pm-sans text-left"
                role="dialog"
                aria-modal="true"
                aria-label="Alfaaz Pro plans"
              >
                {/* Scoped styles for the modal (animations + helper classes) */}
                <style>{`
                  .pm-serif { font-family: 'EB Garamond', Georgia, serif; }
                  .pm-sans  { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
             
                  @keyframes pmDiagonalShimmer {
                    0% { transform: translateX(-140%) rotate(25deg); }
                    30%, 100% { transform: translateX(180%) rotate(25deg); }
                  }
                  @keyframes pmButtonReflectionSweep {
                    0% { transform: translateX(-150%) skewX(-25deg); }
                    50% { transform: translateX(250%) skewX(-25deg); }
                    100% { transform: translateX(250%) skewX(-25deg); }
                  }
                  @keyframes pmCelestialBreathe {
                    0%, 100% { opacity: 0.45; transform: scale(1); }
                    50% { opacity: 0.75; transform: scale(1.08); }
                  }
                  @keyframes pmModalIn {
                    from { opacity: 0; transform: translateY(14px) scale(0.98); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                  }
             
                  .pm-modal-in { animation: pmModalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both; }
                  .pm-celestial-glow { animation: pmCelestialBreathe 9s ease-in-out infinite; }
             
                  .pm-pro-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.35), 0 2px 10px rgba(180,140,50,0.12), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 0 15px rgba(140,100,20,0.1);
                  }
                  .pm-pro-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.45), 0 4px 16px rgba(180,140,50,0.18), inset 0 1px 0 rgba(255,255,255,0.8), inset 0 0 20px rgba(140,100,20,0.12);
                  }
                  .pm-card-free {
                    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background-color 0.3s ease;
                  }
                  .pm-card-free:hover { transform: translateY(-3px); }
             
                  .pm-shimmer-sweep {
                    position: absolute;
                    inset: -60% -40%;
                    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.08) 75%, rgba(255,255,255,0) 100%);
                    pointer-events: none;
                    z-index: 5;
                    animation: pmDiagonalShimmer 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                  }
             
                  .pm-cta {
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, filter 0.25s ease, border-color 0.25s ease;
                  }
                  .pm-cta:hover {
                    transform: translateY(-1.5px);
                    box-shadow: 0 8px 24px rgba(0,0,0,0.6), 0 0 18px rgba(212,175,55,0.25) !important;
                    border-color: rgba(230,202,133,0.7) !important;
                  }
                  .pm-cta:active { transform: scale(0.985); }
             
                  .pm-feature { transition: transform 0.25s ease, opacity 0.25s ease; }
                  .pm-feature:hover { transform: translateX(3px); }
                  .pm-icon { transition: transform 0.25s ease, box-shadow 0.25s ease; }
                  .pm-feature:hover .pm-icon {
                    transform: scale(1.08);
                    box-shadow: 0 0 14px rgba(212,175,55,0.45);
                  }
             
                  @media (prefers-reduced-motion: reduce) {
                    .pm-modal-in, .pm-celestial-glow, .pm-shimmer-sweep, .pm-cta *, .pm-pro-card, .pm-card-free {
                      animation-duration: 0.01ms !important;
                      animation-iteration-count: 1 !important;
                      transition-duration: 0.01ms !important;
                    }
                    .pm-shimmer-sweep { display: none !important; }
                    .pm-pro-card, .pm-card-free { transform: none !important; }
                  }
                `}</style>
             
                {/* Backdrop — click to close */}
                <div
                  onClick={() => setIsPremiumModal(false)}
                  className="fixed inset-0 bg-[#080a0f]/90 backdrop-blur-sm"
                  aria-hidden="true"
                >
                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] max-w-full h-[500px] bg-gradient-to-b from-amber-800/15 via-[#c5a059]/10 to-transparent rounded-full blur-[130px] pm-celestial-glow" />
                  <div
                    className="absolute bottom-10 left-10 w-96 h-96 bg-amber-950/15 rounded-full blur-[140px] pm-celestial-glow"
                    style={{ animationDelay: "3s" }}
                  />
                </div>
             
                {/* Modal content */}
                <div className="relative flex min-h-full items-center justify-center p-2 sm:p-4 pointer-events-none">
                  <div className="pm-modal-in relative w-full max-w-3xl pointer-events-auto">
             
                    {/* Close button */}
                    <button
                      type="button"
                      onClick={() => setIsPremiumModal(false)}
                      aria-label="Close"
                      className="absolute -top-2 -right-1 sm:-top-3 sm:-right-3 z-30 w-9 h-9 rounded-full flex items-center justify-center bg-stone-900/90 border border-stone-700 text-stone-300 hover:text-[#f0da9e] hover:border-[#d4af37]/60 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
             
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 items-stretch relative z-10 pt-5 sm:pt-3">
             
                      {/* ================= FREE PLAN ================= */}
                      <div className="pm-card-free md:col-span-5 rounded-xl bg-stone-900/70 border border-stone-800/90 p-4 sm:p-5 hidden md:flex flex-col justify-between hover:border-stone-700 hover:bg-stone-900/80">
                        <div>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h2 className="pm-serif text-xl sm:text-2xl text-stone-100 font-medium tracking-wide">Free</h2>
                              {/* <span className="text-sm text-stone-400 block mt-1">Aam Silsila</span> */}
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-stone-300 bg-stone-800/90 px-3 py-1.5 rounded border border-stone-700/60">
                              Standard
                            </span>
                          </div>
             
                          <div className="my-3 pb-3 border-b border-stone-800/80 flex items-baseline gap-2">
                            <span className="pm-serif text-2xl sm:text-3xl text-stone-100 font-normal">₹0</span>
                            <span className="text-sm sm:text-base text-stone-400 font-normal">/ forever</span>
                          </div>
             
                          <ul className="space-y-2.5 text-sm text-stone-200 leading-relaxed">
                            <li className="pm-feature flex items-start gap-3.5">
                              <div className="pm-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-[#d4af37]/30 bg-stone-900/90 shadow-sm text-[#e6ca85]">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                                  <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="pm-serif font-medium text-sm text-stone-100 leading-snug mb-0.5">2 Kalams / Day</h4>
                                <p className="hidden sm:block text-[11px] sm:text-xs text-stone-400 font-normal leading-snug">Publishing limit across all traditional verse categories.</p>
                              </div>
                            </li>
             
                            <li className="pm-feature flex items-start gap-3.5">
                              <div className="pm-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-[#d4af37]/30 bg-stone-900/90 shadow-sm text-[#e6ca85]">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                                  <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="pm-serif font-medium text-sm text-stone-100 leading-snug mb-0.5">Standard Diwan Reach</h4>
                                <p className="hidden sm:block text-[11px] sm:text-xs text-stone-400 font-normal leading-snug">Regular organic feed distribution to fellow readers.</p>
                              </div>
                            </li>
             
                            <li className="pm-feature flex items-start gap-3.5">
                              <div className="pm-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-[#d4af37]/30 bg-stone-900/90 shadow-sm text-[#e6ca85]">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                                  <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="pm-serif font-medium text-sm text-stone-100 leading-snug mb-0.5">Reader Profile &amp; Discussions</h4>
                                <p className="hidden sm:block text-[11px] sm:text-xs text-stone-400 font-normal leading-snug">Standard public profile with public discussion rights.</p>
                              </div>
                            </li>
             
                            <li className="pm-feature flex items-start gap-3.5">
                              <div className="pm-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-[#d4af37]/30 bg-stone-900/90 shadow-sm text-[#e6ca85]">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 16 16">
                                  <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="pm-serif font-medium text-sm text-stone-100 leading-snug mb-0.5">Community Baithaks</h4>
                                <p className="hidden sm:block text-[11px] sm:text-xs text-stone-400 font-normal leading-snug">Access to open community literary gatherings &amp; rooms.</p>
                              </div>
                            </li>
                          </ul>
                        </div>
             
                        <div className="mt-3 pt-2">
                          <button
                            className="w-full py-2.5 px-4 rounded-lg border border-stone-800 text-stone-400 bg-stone-900/60 text-sm font-semibold tracking-wider uppercase cursor-default text-center whitespace-nowrap"
                            disabled
                            type="button"
                          >
                            Current Plan
                          </button>
                          <p className="text-xs text-stone-500 text-center mt-2.5">No payment required • Open forever</p>
                        </div>
                      </div>
             
                      {/* ================= PRO PLAN ================= */}
                      <div
                        className="pm-pro-card md:col-span-7 rounded-xl p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg, rgb(252, 237, 186) 0%, rgb(243, 216, 135) 25%, rgb(225, 190, 101) 60%, rgb(201, 158, 66) 100%)",
                          border: "1.5px solid rgba(255, 255, 255, 0.65)",
                        }}
                      >
                        <div aria-hidden="true" className="pm-shimmer-sweep" />
                        <div
                          className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none"
                          style={{
                            background: "radial-gradient(circle at right top, rgba(255, 255, 255, 0.5) 0%, rgba(255, 248, 220, 0.3) 40%, transparent 75%)",
                            filter: "blur(30px)",
                          }}
                        />
             
                        <div className="relative z-10">
                          <div className="flex items-center justify-between gap-3 mb-1 pb-0">
                            <div className="flex items-center gap-2">
                              <img
                                src={logo}
                                alt="Alfaaz logo"
                                className="h-7 sm:h-8 w-auto object-contain drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                              />
                              <h2
                                className="pm-serif text-xl sm:text-2xl font-semibold tracking-wide"
                                style={{ color: "#191408", textShadow: "0 1px 0 rgba(255,255,255,0.4)" }}
                              >
                                Alfaaz Pro
                              </h2>
                            </div>
                            {/* <div
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-transform hover:scale-105"
                              style={{
                                background: "rgba(24, 18, 8, 0.88)",
                                color: "#fbedba",
                                border: "1px solid rgba(160, 120, 40, 0.6)",
                                boxShadow: "0 2px 8px rgba(24, 18, 8, 0.25)",
                              }}
                            >
                              <span className="font-bold" style={{ color: "#fbedba" }}>✦</span>
                              <span className="tracking-wider">Khas Silsila</span>
                            </div> */}
                          </div>
             
                          {/* <p className="text-sm sm:text-[15px] mb-2 font-semibold" style={{ color: "rgb(26, 20, 8)" }}>
                            For distinguished poets, connoisseurs, and classical patrons.
                          </p> */}
             
                          <div
                            className="mb-3 pb-3 flex flex-wrap items-baseline justify-between gap-2"
                            style={{
                              borderBottom: "1.5px solid rgba(70, 50, 10, 0.2)",
                              boxShadow: "0 1px 0 rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            <div className="flex items-baseline gap-2">
                              <span className="pm-serif text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "#161106" }}>₹120</span>
                              <span className="text-sm sm:text-base font-bold" style={{ color: "rgb(26, 20, 8)" }}>/ month</span>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold" style={{ color: "rgb(24, 18, 6)" }}>
                              Billed monthly, cancel anytime
                            </span>
                          </div>
             
                          <div className="space-y-2.5 text-sm leading-snug mb-3" style={{ color: "rgb(26, 19, 5)" }}>
             
                            {/* Unlimited Kalams */}
                            <div className="pm-feature flex items-start gap-3.5">
                              <div
                                className="pm-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-md"
                                style={{
                                  background: "linear-gradient(135deg, #241c0e 0%, #100b04 100%)",
                                  border: "1.5px solid rgba(212, 175, 55, 0.65)",
                                  boxShadow: "inset 0 1px 1px rgba(255, 240, 190, 0.4), 0 3px 8px rgba(0, 0, 0, 0.35)",
                                }}
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="#f8e2a0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24">
                                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="pm-serif font-bold text-sm sm:text-[15px] leading-snug tracking-tight text-[#100b04] mb-0">Unlimited Kalams</h4>
                                <p className="hidden sm:block text-[11px] sm:text-xs leading-snug font-medium text-[#181206] mt-0.5">Publish ghazals, nazms &amp; ruba'iyat without daily caps.</p>
                              </div>
                            </div>
             
                            {/* 10x Reach */}
                            <div className="pm-feature flex items-start gap-3.5">
                              <div
                                className="pm-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-md"
                                style={{
                                  background: "linear-gradient(135deg, #241c0e 0%, #100b04 100%)",
                                  border: "1.5px solid rgba(212, 175, 55, 0.65)",
                                  boxShadow: "inset 0 1px 1px rgba(255, 240, 190, 0.4), 0 3px 8px rgba(0, 0, 0, 0.35)",
                                }}
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="#f8e2a0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24">
                                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                                  <polyline points="17 6 23 6 23 12" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="pm-serif font-bold text-sm sm:text-[15px] leading-snug tracking-tight text-[#100b04] mb-1">Boosted Kalam Reach</h4>
                                <p className="hidden sm:block text-[11px] sm:text-xs leading-snug font-medium text-[#181206] mt-0.5">Priority curation in weekly Diwan newsletters &amp; Baithak spotlights.</p>
                              </div>
                            </div>
             
                            {/* Gilded Quill */}
                            <div className="pm-feature flex items-start gap-3.5">
                              <div
                                className="pm-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-md"
                                style={{
                                  background: "linear-gradient(135deg, #241c0e 0%, #100b04 100%)",
                                  border: "1.5px solid rgba(212, 175, 55, 0.65)",
                                  boxShadow: "inset 0 1px 1px rgba(255, 240, 190, 0.4), 0 3px 8px rgba(0, 0, 0, 0.35)",
                                }}
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="#f8e2a0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24">
                                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                                  <line x1="16" x2="2" y1="8" y2="22" />
                                  <line x1="17.5" x2="9" y1="15" y2="15" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="pm-serif font-bold text-sm sm:text-[15px] leading-snug tracking-tight text-[#100b04] mb-1">Gilded Quill &amp; Takhallus Crest</h4>
                                <p className="hidden sm:block text-[11px] sm:text-xs leading-snug font-medium text-[#181206] mt-0.5">Ornate golden insignia on your profile &amp; couplets.</p>
                              </div>
                            </div>
             
                            {/* No Watermark */}
                            <div className="pm-feature flex items-start gap-3.5">
                              <div
                                className="pm-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-md"
                                style={{
                                  background: "linear-gradient(135deg, #241c0e 0%, #100b04 100%)",
                                  border: "1.5px solid rgba(212, 175, 55, 0.65)",
                                  boxShadow: "inset 0 1px 1px rgba(255, 240, 190, 0.4), 0 3px 8px rgba(0, 0, 0, 0.35)",
                                }}
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="#f8e2a0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24">
                                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                  <polyline points="9 12 11 14 15 10" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="pm-serif font-bold text-sm sm:text-[15px] leading-snug tracking-tight text-[#100b04] mb-1">No Watermark on Kalam Shares</h4>
                                <p className="hidden sm:block text-[11px] sm:text-xs leading-snug font-medium text-[#181206] mt-0.5">Pristine, unbranded export &amp; social sharing for all your couplets, ghazals &amp; nazms.</p>
                              </div>
                            </div>
             
                            {/* VIP Concierge */}
                            <div className="pm-feature flex items-start gap-3.5">
                              <div
                                className="pm-icon w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-md"
                                style={{
                                  background: "linear-gradient(135deg, #241c0e 0%, #100b04 100%)",
                                  border: "1.5px solid rgba(212, 175, 55, 0.65)",
                                  boxShadow: "inset 0 1px 1px rgba(255, 240, 190, 0.4), 0 3px 8px rgba(0, 0, 0, 0.35)",
                                }}
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="#f8e2a0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" viewBox="0 0 24 24">
                                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="pm-serif font-bold text-sm sm:text-[15px] leading-snug tracking-tight text-[#100b04] mb-1">VIP Concierge &amp; Priority Support</h4>
                                <p className="hidden sm:block text-[11px] sm:text-xs leading-snug font-medium text-[#181206] mt-0.5">Direct fast-track desk for disputes, manuscript guidance, profile verification, and dedicated 24/7 literary concierge.</p>
                              </div>
                            </div>
                          </div>
                        </div>
             
                        <div
                          className="relative z-10 pt-3"
                          style={{
                            borderTop: "1.5px solid rgba(70, 50, 10, 0.2)",
                            boxShadow: "rgba(255, 255, 255, 0.5) 0px -1px 0px",
                          }}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              // TODO: start your payment / checkout flow here
                            }}
                            className="pm-cta relative overflow-hidden w-full h-11 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap sm:px-10"
                            style={{
                              background: "rgb(18, 21, 28)",
                              color: "rgb(253, 248, 236)",
                              border: "1.5px solid rgba(197, 160, 89, 0.5)",
                              boxShadow: "rgba(0, 0, 0, 0.5) 0px 4px 16px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset",
                            }}
                          >
                            <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
                              <div
                                className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                style={{ animation: "pmButtonReflectionSweep 4s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}
                              />
                            </div>
                            <span className="font-bold relative z-10 tracking-widest leading-none">
                              Become an Alfaaz Pro • ₹120/mo
                            </span>
                            <span className="text-xl leading-none transition-transform duration-300 group-hover:translate-x-1 relative z-10 shrink-0 font-bold ml-1.5">→</span>
                          </button>
             
                          <div
                            className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs font-semibold"
                            style={{ color: "rgb(72, 57, 24)" }}
                          >
                            <span className="font-bold" style={{ color: "rgb(20, 15, 5)" }}>Instant UPI &amp; Card access</span>
                            <span aria-hidden="true" className="font-bold" style={{ color: "rgb(74, 56, 20)" }}>•</span>
                            <span className="font-bold" style={{ color: "rgb(20, 15, 5)" }}>7-day money-back guarantee</span>
                            <span aria-hidden="true" className="font-bold" style={{ color: "rgb(74, 56, 20)" }}>•</span>
                            <span className="font-bold" style={{ color: "rgb(20, 15, 5)" }}>Cancel anytime</span>
                          </div>
                        </div>
                      </div>
             
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Bottom Player / Mobile Nav ── */}
            <footer
                className="cur-footer-player fixed bottom-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-4"
                style={{ background: "rgba(39,54,71,0.6)", backdropFilter: "blur(32px)", borderTop: `1px solid ${COLORS.borderSubtle}`, boxShadow: "0 -8px 24px rgba(0,0,0,0.3)" }}
            >
                {/* Player Info */}
                <div className="hidden sm:flex items-center gap-4 w-1/4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            alt="Now playing"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkrU8zz4UH87YPW64Dq0rDXCCvztqLb3Xt8CFHCpFKS3TrkLlZheYKMM27lzKka1MCr0DgbZoeSQVNvV0SM4lcN-obI4CaAxfPw77J3qGN9K4dtdEbYBBjlVqfQ-yxbQyNpB4r1Sfxc6EgkaPJar2KjGvzEAqf8fVcm33vngVZyThv3ij4u4378sYOuXJAxN7LuXWz7EEIzkOUqpeUCLtIq_wtUemOwJDTkXTQR2JAvpzEqQbHfulO"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold truncate" style={{ color: COLORS.onSurface }}>Midnight Wanderer</span>
                        <span className="text-[11px] truncate" style={{ color: COLORS.onSurfaceVariant }}>Sia Chen • Synth Dreams</span>
                    </div>
                </div>

                {/* Player Controls */}
                <div className="flex flex-col items-center gap-2 flex-grow sm:w-1/2">
                    <div className="flex items-center gap-6">
                        <button className="material-symbols-outlined transition-colors" style={{ color: COLORS.onSurfaceVariant }}>shuffle</button>
                        <button className="material-symbols-outlined text-[28px] transition-colors" style={{ color: COLORS.onSurfaceVariant }}>skip_previous</button>
                        <button
                            className="cur-sunset-gradient w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg"
                            style={{ color: COLORS.onPrimary }}
                        >
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                        </button>
                        <button className="material-symbols-outlined text-[28px] transition-colors" style={{ color: COLORS.onSurfaceVariant }}>skip_next</button>
                        <button className="material-symbols-outlined transition-colors" style={{ color: COLORS.onSurfaceVariant }}>repeat</button>
                    </div>
                    <div className="w-full max-w-md flex items-center gap-3">
                        <span className="text-[10px]" style={{ color: COLORS.onSurfaceVariant }}>2:14</span>
                        <div className="h-1 flex-grow rounded-full overflow-hidden cursor-pointer relative group" style={{ background: "rgba(255,255,255,0.1)" }}>
                            <div className="cur-sunset-gradient absolute inset-y-0 left-0 w-[45%] rounded-full" />
                            <div className="absolute top-1/2 left-[45%] -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[10px]" style={{ color: COLORS.onSurfaceVariant }}>4:42</span>
                    </div>
                </div>

                {/* System Controls */}
                <div className="hidden md:flex items-center justify-end gap-4 w-1/4">
                    <button className="material-symbols-outlined transition-colors" style={{ color: COLORS.onSurfaceVariant }}>lyrics</button>
                    <button className="material-symbols-outlined transition-colors" style={{ color: COLORS.onSurfaceVariant }}>queue_music</button>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined" style={{ color: COLORS.onSurfaceVariant }}>volume_up</span>
                        <div className="w-24 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.1)" }}>
                            <div className="cur-sunset-gradient h-full w-[70%]" />
                        </div>
                    </div>
                </div>

                {/* Mobile Nav Tabs */}
                <div
                    className="md:hidden flex absolute -top-12 left-0 w-full justify-around py-3"
                    style={{ background: "rgba(18,33,49,0.8)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                    <Link to="/"><span className="material-symbols-outlined" style={{ color: COLORS.onSurfaceVariant }}>home</span></Link>
                    <Link to="/explore"><span className="material-symbols-outlined" style={{ color: COLORS.onSurfaceVariant }}>explore</span></Link>
                    <Link to="/library"><span className="material-symbols-outlined" style={{ color: COLORS.primary, fontVariationSettings: "'FILL' 1" }}>library_music</span></Link>
                    <Link to="/recent"><span className="material-symbols-outlined" style={{ color: COLORS.onSurfaceVariant }}>history</span></Link>
                </div>
            </footer>
        </div>
    );
};

export default Authors;