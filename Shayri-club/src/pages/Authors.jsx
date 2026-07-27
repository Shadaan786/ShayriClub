import { useState, useEffect, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

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