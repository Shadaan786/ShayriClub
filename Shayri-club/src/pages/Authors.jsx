import { useState } from "react";
import { Link } from "react-router-dom";

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

const SORT_OPTIONS = [
    { value: "followers", label: "Sort by: Most Followers" },
    { value: "active", label: "Sort by: Recently Active" },
    { value: "az", label: "Sort by: A-Z" },
    { value: "newest", label: "Sort by: Newest" },
];

const INITIAL_CURATORS = [
    {
        id: "elena-vance",
        name: "Elena Vance",
        followers: "12.4K Followers",
        following: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8w7JydXCNCeek6DQ3KlfPtlOkxVIXLUx3VNY-NhbDh2w_1sSYpMDb2MmWJPJi5A94sdEPHueyxJN1d64Shsujl8l9xCsTXX353A3HawqP2iptydJB-WL4M7lgsVuuqBJhg7HwIhcFyN9wsANEQ6L-wXbVdRcqOFTs4-peLcFH6qL-PuGRLFV_CFEkp2CgNIlotyD5dVr9mnhWC3PwbA5oSwFRoRq4Ye6_cxslv7u5nQqtzN7kYcJV",
    },
    {
        id: "marcus-thorne",
        name: "Marcus Thorne",
        followers: "8.2K Followers",
        following: true,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD94UZexa0rjJE7xfknfHzciszVjPAviCJ322Vc1AJwsax_4t70EIMGsnKwO3BzDWyuoIXtqn4LsXBJ_gJA1FBfn3DvWyhBSgRxTjuqraUxNWKDdf09fW94mocibzylqhPInbkTkNSXm9Ppp-VZ_LGu0XnASE2OAoOowWKcMRxx-C4tggNu31XiIATmJo_Ur8JuPthRNv9sfHWgnSCOMA0FTqZvTtFl-vCrKGemjOtTr7mbELa14Oyk",
    },
    {
        id: "sia-chen",
        name: "Sia Chen",
        followers: "25.1K Followers",
        following: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtHbXaH3mn0kHQoJT_psGeJ7DWSnzAYHkI6zWLooiI3VlqdhUqctHD1mUdkW0-40BE9CM18sdzoQVwQ1o5Qk8oji3cZH-tmDoFqKUhha3ebX3-pEftBcB2M6e18FOSutt-V3TOGa73KsYrkyA9LkSKDO6eFM1r1yRc9k_UxabHN79nnhhBVnHLR2Bsjj51drjD9VLlJwimeloti91g3t65nyvw6ly2So9laG0etay6QZhLdDOC3Evi",
    },
    {
        id: "arthur-bloom",
        name: "Arthur Bloom",
        followers: "3.4K Followers",
        following: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0j0cuB8zFaBxDKAfT6q4stJPsoik_87L4p0r8ZxxpqprdoXMyTDe2zlUSwBPEFKNcMo55fZy4BgkTTjYyDOq_3zc4F8j_azT_gJgepNHo1wayNwk8Dz7mrqGXOzSuoVa2KVyqFPHDLJIVi2394YdxXBa6CScUsQ3P-umACxnmtWUI8aA3uI-usF30D4jdGTdjmy1rHygxwX-WIyMaffd_-J-JTiEwaxhGmOQUf5tJUmy4RzDQ7qT4",
    },
    {
        id: "luna-ray",
        name: "Luna Ray",
        followers: "15.9K Followers",
        following: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3TZq03asZeSXqDEGUtIo6D4Bxj3uTBKAfcX4QohomDotoZtE6_YGpHhX7cOLNql-vG3Iana-hn1jWPjW2qGsw7OcC8DGPyf_1RgNVVOrKHaBbqYT4t-737dZPzLIJtDDOWiVbY-NnpVSpgAGF3pMWEJidr1EHWsS7SfVQd-mnOCowskLaIzD_dcBCUkfMRQs1aVtRb3Mj-P5vI8_ezVGxiP0J2c19xj8rEvugCurkh2U2Hb_054N-",
    },
    {
        id: "felix-grey",
        name: "Felix Grey",
        followers: "7.1K Followers",
        following: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3shGgHIYlmyWvTslO6WmqxmHTDBJBmBRgcYPm7Koks_6B-UXVWJZu-iXcKjR0k4vR_S1UlZs3njwrQQYD5lByugkqLWwvJSNL-RCYYJRS_0sb80_rzAFqs0kYzfJ2dslXus-Wwm2M1y0U6cTrTsX7QlEbFIffV2YtiW7w6O2vPD0qBhbJcEUaIRNS9uge1ltws-EqOEJEAcyMnsQmA3k43cWJyXk057tSZ-26B_ULMchQjPcs9gCf",
    },
    {
        id: "jasmine-vo",
        name: "Jasmine Vo",
        followers: "42.2K Followers",
        following: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYw0eUFvVj3_--_993abecorIALw90tyv3zn-eywQc4Rsswc-cydsXDmv8WHtLoLSuyOI6kQGFL2GYxDF6e4RoiRKR6HpQ833ZmXgI8TqaohLG0GvnmbFYL6TgDHX7AJWMLLKlavyu32A8wCGZS5AVgegY6729L8tGnSwRGaFkdw1s2wngrDIQGC6lHB4InP4IO8rM42u-RmbL6r8cAOXXvGEAJAdvG2rmSvQZ1llT2n_Yrzf5nuht",
    },
    {
        id: "tariq-khan",
        name: "Tariq Khan",
        followers: "11.0K Followers",
        following: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsgGVIFHrl59QtqWujoU5czWnc6IHcQxkiJiHRlVcX7YM6ABd8UlKQSQlIwwdpTrTW6lnyKGfg5pku-y0RgLNPb-fqrenvnmGr6wr564UHMsLo1wE-OJz4npOp0QsowcseP3HlFdI4cFtVjQl1Ff-1GCxQasD94fuAkdNR_Hcp6hTHyrXDjEHnTQpjrrR3yrkkLRS1TshnuOxp_XietR0n865D_RdOPxu-Jjj52jDP5tkPPkN7IzJm",
    },
    {
        id: "maya-sol",
        name: "Maya Sol",
        followers: "9.8K Followers",
        following: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbJN_qJ_RYiFPgrrjrh_vJJUYmfvNzdm39HtqGQ0UssgMrdq8b57aF1pbyaf2OxlRmhQqnUCkxjdQctqVyOD99ANZPgWvFJvBJbdKkYl6j7DTAJ9sPB87DdYrTRmABJvHM7ll5BNyKXLdyovNdd8c1I_5LgN7DhbtVnvUfgKXPUBKOAGPD7vF09L3gW32mxCP74rjyjGA-xnPpPT3hxBU298UgWgXUkoxjhHIVF7f5vjO-SMWptftY",
    },
    {
        id: "dante-cross",
        name: "Dante Cross",
        followers: "6.5K Followers",
        following: false,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVt0_tR30FbkQQVPb5iKuSQ1lFVjhmb3bOsctPG3RjIVPJJ2akupJT1CUd0vVgfsDrWn5JlExMAZPMRXI9CmKmDyEJioJkckZy_Rf0jvWrbdvHu7TdiFL81O0IFUfGFQdYfQxVTkD9ndGDSybKMdIw6ZfAygSCla0M_fKVT0A-7Dkf_rF5uOiZ7-15r7qxbZsYZm4C7Npf6CimQmSRGhzohMcmQsTMKLVWDg6dWaVMNeVueDUoWcyu",
    },
];

const Authors = () => {
    const [curators, setCurators] = useState(INITIAL_CURATORS);
    const [sortBy, setSortBy] = useState("followers");

    const toggleFollow = (id) => {
        setCurators((prev) =>
            prev.map((c) => (c.id === id ? { ...c, following: !c.following } : c))
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
                className="fixed top-0 right-0 left-0 md:left-64 z-50 flex justify-between items-center px-4 md:px-12 h-16"
                style={{ background: "rgba(5,20,36,0.6)", backdropFilter: "blur(32px)", borderBottom: `1px solid ${COLORS.borderSubtle}` }}
            >
                <div className="flex items-center gap-8">
                    <span className="md:hidden text-2xl font-extrabold tracking-tighter" style={{ color: COLORS.primary }}>Library</span>
                    <div className="hidden lg:flex items-center gap-6">
                        <Link to="/artists" className="cur-nav-link text-base">Artists</Link>
                        <Link to="/albums" className="cur-nav-link text-base">Albums</Link>
                        <Link to="/playlists" className="cur-nav-link text-base">Playlists</Link>
                        <Link to="/genres" className="cur-nav-link text-base">Genres</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div
                        className="hidden sm:flex items-center rounded-full px-4 py-2 transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${COLORS.borderSubtle}` }}
                    >
                        <span className="material-symbols-outlined text-[20px]" style={{ color: COLORS.onSurfaceVariant }}>search</span>
                        <input
                            type="text"
                            placeholder="Search curated library..."
                            className="bg-transparent border-none focus:ring-0 text-base w-48 outline-none"
                            style={{ color: COLORS.onSurface }}
                        />
                    </div>
                    <button
                        className="material-symbols-outlined p-2 transition-colors"
                        style={{ color: COLORS.onSurfaceVariant }}
                    >
                        settings
                    </button>
                    <div
                        className="w-8 h-8 rounded-full overflow-hidden"
                        style={{ background: COLORS.surfaceContainer, border: `1px solid ${COLORS.borderSubtle}` }}
                    >
                        <img
                            className="w-full h-full object-cover"
                            alt="Profile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJvDit6hr4INv-0DUByHGbbIDeAlcpaVNuh-_p2AmLkX38PlNGnvOx3L9z0wmlAAQg4HnAJjlkvkB5VwNkswPgUqRx7lhEp6LM-TH-yFAxJh79kvcRiEhKEANKwkWGkXhJShVmNtAgLnJrZukYYyUJvaUsWz1bd4xBkRyJLJW7sY2kF4ALcCEPTK0XrhmHpP8wNC5KFTDG64GjKAnLE1wQfFKB5jz5KjW7b1kPU7ZY_GdsIemqe_Nz"
                        />
                    </div>
                </div>
            </header>

            {/* ── Main Content ── */}
            <main className="relative z-10 pt-24 pb-32 px-4 md:px-12 md:ml-64 md:w-[calc(100%-16rem)] min-h-screen">
                {/* Header Section */}
                <section className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none mb-2" style={{ color: COLORS.onSurface }}>
                                Featured Curators
                            </h2>
                            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: COLORS.primary }}>
                                {curators.length} Curators
                            </p>
                        </div>

                        {/* Search & Filters */}
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="relative">
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="appearance-none rounded-full pl-6 pr-10 py-3 text-xs font-semibold tracking-widest uppercase cursor-pointer outline-none transition-all"
                                    style={{ background: COLORS.surfaceContainerHigh, border: `1px solid ${COLORS.borderSubtle}`, color: COLORS.onSurface }}
                                >
                                    {SORT_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value} style={{ color: "#000" }}>
                                            {opt.label}
                                        </option>
                                    ))}
                                </select>
                                <span
                                    className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                    style={{ color: COLORS.onSurfaceVariant }}
                                >
                                    expand_more
                                </span>
                            </div>
                            <button className="cur-glass p-3 rounded-full flex items-center justify-center transition-all">
                                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Curator Grid */}
                <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {curators.map((curator) => (
                        <div key={curator.id} className="cur-glass p-6 rounded-3xl flex flex-col items-center text-center group">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6 transition-transform duration-500 group-hover:scale-105">
                                <img
                                    className="w-full h-full rounded-full object-cover shadow-xl"
                                    style={{ border: `4px solid ${COLORS.surfaceContainerHighest}` }}
                                    alt={curator.name}
                                    src={curator.img}
                                />
                            </div>
                            <h3 className="text-base font-bold mb-1" style={{ color: COLORS.onSurface }}>{curator.name}</h3>
                            <p className="text-xs mb-6 uppercase tracking-wider" style={{ color: COLORS.onSurfaceVariant }}>
                                {curator.followers}
                            </p>
                            {curator.following ? (
                                <button
                                    onClick={() => toggleFollow(curator.id)}
                                    className="cur-sunset-gradient w-full py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-lg hover:brightness-110 active:scale-95 transition-all"
                                    style={{ color: COLORS.onPrimary }}
                                >
                                    Following
                                </button>
                            ) : (
                                <button
                                    onClick={() => toggleFollow(curator.id)}
                                    className="cur-follow-btn w-full py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase active:scale-95"
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    ))}
                </section>

                {/* Pagination / Load More */}
                <div className="flex justify-center mt-16">
                    <button
                        className="flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all"
                        style={{ border: `1px solid ${COLORS.borderSubtle}`, color: COLORS.onSurfaceVariant }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(207,188,255,0.5)";
                            e.currentTarget.style.color = COLORS.primary;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = COLORS.borderSubtle;
                            e.currentTarget.style.color = COLORS.onSurfaceVariant;
                        }}
                    >
                        Load More Curators
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </button>
                </div>
            </main>

            {/* ── Bottom Player / Mobile Nav ── */}
            <footer
                className="fixed bottom-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-4"
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