import { useState, useEffect, useRef} from "react";
import axiosInstance from "@/Apis/axiosInstance";
import NewKalam from "./components/NewKalam";
import { MyVerticallyCenteredModal } from "./components/Modals/MyModal";
import { useSearchParams } from "react-router-dom";

const ProfileKalams = () => {
  const [kalams, setKalams] = useState([]);
  const [savedKalams, setSavedKalams] = useState([]);
  // const [likedKalams, setLikedKalams] = useState([]);
  let likedKalams;
  const likedKalams2 = useRef(new Set())
  const[isFinished, setIsFinished] = useState(false);
  const[isOpen, setIsOpen] = useState(false);
  const [SearchParams] = useSearchParams();
  const [modalKalamInfo, setModalKalamInfo] = useState('')
  const[isModalDone, setIsModalDone] = useState(false);

  const kalamId = SearchParams.get("kalamId")



  useEffect(() => {
    axiosInstance.get("/api/customKalam").then((response) => {
      setKalams(response.data);
      console.log("see", response.data);
    });
  }, []);

    useEffect(()=>{

        if(!kalamId){
    null
  }else{
    setIsOpen(true);
  }
    axiosInstance
    .get('/api/likedKalams',{
      withCredentials: true
    })
    .then((response)=>{
      likedKalams = new Set(JSON.parse(response.data))
      console.log("see redis res", likedKalams)
       for (const items of likedKalams) {
          likedKalams2.current.add(items._id)
        }
        setIsFinished(true);
    })

  }, [])
  
  const handleModalKalam=()=>{
    axiosInstance
    .get(`/api/kalam?kalamId=${kalamId}`,{
      withCredentials: true
    })
    .then((response)=>{
      setModalKalamInfo(response.data)
      console.log("modal", response.data)
      setIsModalDone(true)
    })
  }

  useEffect(()=>{
    if(!kalamId) return
    handleModalKalam()
    

  }, [])

if (!isFinished) {
  return (
    <div
      className="main_parent_div min-h-screen w-full flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #05030a 0%, #0a0614 40%, #130c1f 100%)",
      }}
    >
      <style>{`
        @keyframes shimmerSweep {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(212, 175, 55, 0.06) 0%,
            rgba(212, 175, 55, 0.06) 40%,
            rgba(212, 175, 55, 0.18) 50%,
            rgba(212, 175, 55, 0.06) 60%,
            rgba(212, 175, 55, 0.06) 100%
          );
          background-size: 800px 100%;
          animation: shimmerSweep 1.6s infinite linear;
        }
      `}</style>

      {/* Header skeleton */}
      <div
        className="header_div relative w-full flex items-center justify-center overflow-hidden px-6 py-14 md:py-20"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, #150c22 0%, #0a0614 55%, #05030a 100%)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
        }}
      >
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 md:h-72 md:w-72 rounded-full blur-3xl opacity-10"
          style={{ background: "#d4af37" }}
        />
        <div className="relative text-center">
          <div className="shimmer mx-auto mb-3 h-3 w-32 rounded-full" />
          <div className="shimmer mx-auto h-10 w-56 md:h-12 md:w-72 rounded-lg" />
          <div
            className="mx-auto mt-5 h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)",
            }}
          />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="content_area_div w-full flex-1 px-4 md:px-10 py-10">
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #130c1f 0%, #08050f 100%)",
                border: "1px solid rgba(212, 175, 55, 0.08)",
                boxShadow: "0 10px 28px rgba(0,0,0,0.6), 0 0 0 1px rgba(5,3,10,0.8)",
              }}
            >
              {/* image / top area placeholder */}
              <div className="shimmer w-full h-40" />

              {/* text lines placeholder */}
              <div className="p-4 space-y-3">
                <div className="shimmer h-4 w-3/4 rounded" />
                <div className="shimmer h-3 w-full rounded" />
                <div className="shimmer h-3 w-5/6 rounded" />
                <div className="shimmer h-3 w-1/2 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  return (
    <div
      className="main_parent_div min-h-screen w-full flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #05030a 0%, #0a0614 40%, #130c1f 100%)",
      }}
    >
      {/* Header */}
      <div
        className="header_div relative w-full flex items-center justify-center overflow-hidden px-6 py-14 md:py-20"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, #150c22 0%, #0a0614 55%, #05030a 100%)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
        }}
      >
        {/* subtle decorative glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-56 md:h-72 md:w-72 rounded-full blur-3xl opacity-10"
          style={{ background: "#d4af37" }}
        />

        <div className="relative text-center">
          <span
            className="block text-xs md:text-sm tracking-[0.35em] uppercase mb-3"
            style={{ color: "#8f7647" }}
          >
            Your Collection
          </span>
          <h1
            className="text-4xl md:text-5xl font-serif font-semibold tracking-wide"
            style={{
              background: "linear-gradient(90deg, #f3d98b 0%, #d4af37 50%, #f3d98b 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
             Kalams
          </h1>
          <div
            className="mx-auto mt-5 h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, #d4af37, transparent)",
            }}
          />
        </div>
      </div>

      {/* Content area */}
      <div className="content_area_div w-full flex-1 px-4 md:px-10 py-10">
        {kalams.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center py-24">
            <p
              className="text-sm tracking-wide"
              style={{ color: "#8a7a9c" }}
            >
              No kalams saved yet.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {kalams.map((item) => (
              <div
                key={item._id}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] rounded-2xl transition-transform duration-300 hover:-translate-y-1"
                // style={{
                //   background:
                //     "linear-gradient(160deg, #130c1f 0%, #08050f 100%)",
                //   border: "1px solid rgba(212, 175, 55, 0.14)",
                //   boxShadow:
                //     "0 10px 28px rgba(0,0,0,0.6), 0 0 0 1px rgba(5,3,10,0.8)",
                // }}
              >
                <NewKalam
                  title={item.name}
                  content={item.content}
                  type={item.type}
                  imageSrc={item.customStyles?.imageSrc}
                  mUid={item.createdBy}
                  kalId={item._id}
                  customStyles={item.customStyles}
                  //   isSaved={savedKalams2.current.has(item._id)}
                  isLiked2={likedKalams2.current.has(item._id)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <MyVerticallyCenteredModal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
        {
          (isModalDone)?<NewKalam title={modalKalamInfo.name} content={modalKalamInfo.content} 
          mUid={modalKalamInfo.createdBy} kalId={modalKalamInfo._id} isLiked2={true} isSaved={true} 
          type={modalKalamInfo.type} customStyles={modalKalamInfo.customStyles} />
           : <h1 className="text-9xl">Loading...</h1>
        }
        
      </MyVerticallyCenteredModal>
    </div>
  );
};

export default ProfileKalams;