import { useState, useEffect } from "react";
import axiosInstance from "../Apis/axiosInstance";
import { AlbumCard } from "./components/AlbumsCard";
import { useNavigate } from "react-router-dom";
import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";

export const DispAlbums = () => {

  const [albumList, setAlbumList] = useState([]);
  const Navigate = useNavigate();
  const[isOpen, setIsOpen]  = useState(false);
  const[isAvailable, setIsAvailable] = useState(false);
  const[file, setFile] = useState([]);
  const[imageUrl, setImageUrl] = useState([]);
  const[category, setCategory] = useState("");

  useEffect(() => {

    axiosInstance
      .get('/api/displayAlbums', {
        withCredentials: true
      })

      .then((response) => {
        setAlbumList(response.data)
        console.log("response.data", response.data)
        setImageUrl(response.data.imageUrl)
      })

      .catch((error) => {
        console.error("error fetching request", error)
      })

  }, [])

  const [name, setName] = useState("")

  // const handleSubmit=()=>{


    

  // }

  const handleUpload =()=>{

    if(!isAvailable){

        axiosInstance
    .post("/api/album",{

        name: name,
        category: category

    },{
        withCredentials: true
    })


    }else{
      const formData = new FormData()
      formData.append('albumCover', file)
      formData.append('name', name)
      formData.append('category', category)

      axiosInstance
      .post('/api/upload/albumCover', formData,{withCredentials: true})

      .then((response)=>{

        console.log('response.data', response.data)
      })

      .catch((error)=>{
        console.error('error while fetching post', error);
      })
    }
  }
  



  return (
    <div className="min-h-screen bg-[#09090f] [background-image:radial-gradient(ellipse_80%_40%_at_10%_0%,rgba(109,40,217,0.07),transparent),radial-gradient(ellipse_60%_50%_at_90%_100%,rgba(80,60,200,0.05),transparent)] pb-20">

      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-[#09090f]/80 px-10 pt-14 pb-10 border-b border-white/[0.06] flex items-end justify-between gap-6">
        <div className="flex flex-col gap-1.5">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-violet-400">
            Your Collection
          </p>
          <h1 className="text-7xl font-extrabold text-slate-100 tracking-tight leading-none">
            Library
          </h1>
        </div>

       
      </header>

      {/* Grid */}
      <main className="px-10 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {
            albumList.map((item) => (
              <div key={item._id} className="flex flex-row mx-3">
                {
                  <button
                    onClick={() => Navigate(`/album?albumId=${item._id}`)}
                    className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
                  >
                    <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
                  </button>
                }
              </div>
            ))
          }
        </div>
      </main>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <button onClick={()=>setIsOpen(true)} className="z-50 bottom-0">Add New</button>
      {
 <MyVerticallyCenteredModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <div className="flex flex-col" style={{ background: '#000000', fontFamily: "'Inter', system-ui, sans-serif" }}>

    {/* Header */}
    <div style={{ padding: '32px 32px 24px' }}>
      <p style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', color: '#7c5cbf', textTransform: 'uppercase', margin: '0 0 8px' }}>
        Your Collection
      </p>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff', margin: '0 0 8px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Create Album
          </h2>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.6 }}>
            Organize all your kalams at one place which shares the same vibe.
          </p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', padding: '4px', marginTop: '4px', flexShrink: 0 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>

    <div style={{ height: '0.5px', background: 'rgba(255,255,255,0.07)', margin: '0 32px' }} />

    {/* Body */}
    <div style={{ padding: '24px 32px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

      {/* Album Name */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
          Album name
        </label>
        <input
          type="text"
          placeholder="e.g. Summer 2024"
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '10px 0',
            fontSize: '15px',
            border: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            background: 'transparent',
            color: '#ffffff',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => e.target.style.borderBottomColor = '#7c5cbf'}
          onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.12)'}
        />
      </div>

      {/* Category */}
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
    Category
  </label>
  <div style={{ position: 'relative' }}>
    <select
  defaultValue=""
  style={{
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px 0',
    paddingRight: '24px',
    fontSize: '15px',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.12)',
    background: 'transparent',
    color: 'rgba(255,255,255,0.4)',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
  }}
  onFocus={e => e.target.style.borderBottomColor = '#7c5cbf'}
  onBlur={e => e.target.style.borderBottomColor = 'rgba(255,255,255,0.12)'}
  onChange={e => {
    setCategory(e.target.value);
    e.target.style.color = e.target.value ? '#ffffff' : 'rgba(255,255,255,0.4)';
  }}
>
      <option value="" disabled style={{ background: '#111', color: 'rgba(255,255,255,0.4)' }}>Select a category</option>
      <option value="romantic" style={{ background: '#111', color: '#fff' }}>Romantic</option>
      <option value="motivation" style={{ background: '#111', color: '#fff' }}>Motivation</option>
      <option value="inspirational" style={{ background: '#111', color: '#fff' }}>Inspirational</option>
      <option value="visionary" style={{ background: '#111', color: '#fff' }}>Visionary</option>
    </select>
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ position: 'absolute', right: '2px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'rgba(255,255,255,0.3)' }}>
      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
</div>

      {/* Album Cover */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
          Album cover
        </label>
        <label
          style={{
            border: '1px dashed rgba(255,255,255,0.12)',
            borderRadius: '4px',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,92,191,0.6)'; e.currentTarget.style.background = 'rgba(124,92,191,0.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'transparent'; }}
        >
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(255,255,255,0.4)' }}>
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
              <path d="M3 15l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 1v5M14.5 3.5L17 1l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: '0 0 3px' }}>
              <span style={{ color: '#7c5cbf', fontWeight: 500 }}>Upload a file</span> or drag & drop
            </p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>PNG, JPG, WEBP — up to 10 MB</p>
          </div>
          <input type="file" style={{ display: 'none' }} onChange={(e)=>{setFile(e.target.files[0]); setIsAvailable(true)}} />
        </label>
      </div>
    </div>

    {/* Footer */}
    <div style={{ padding: '16px 32px 24px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
      <button
        onClick={() => setIsOpen(false)}
        style={{ padding: '9px 20px', fontSize: '13px', fontWeight: 500, borderRadius: '3px', border: '0.5px solid rgba(255,255,255,0.12)', background: 'transparent', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', transition: 'color 0.2s, border-color 0.2s' }}
        onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
      >
        Cancel
      </button>
      <button
        onClick={() => { handleUpload(); setIsOpen(false); }}
        style={{ padding: '9px 24px', fontSize: '13px', fontWeight: 600, borderRadius: '3px', border: 'none', background: '#ffffff', color: '#0d0d14', cursor: 'pointer', transition: 'background 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.88)'}
        onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
      >
        Add New
      </button>
    </div>

  </div>
</MyVerticallyCenteredModal>
      }
    </div>
  )
}