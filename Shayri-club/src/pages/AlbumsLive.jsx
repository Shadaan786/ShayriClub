// import { useState, useEffect } from "react";
// import axiosInstance from "@/Apis/axiosInstance";
// import { AlbumCard } from "./components/AlbumsCard";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const AlbumsLive=()=>{

//     const[liveAlbums, setLiveAlbums] = useState([]);
//     const Navigate = useNavigate();
//     const[roman, setRoman] = useState([]);
//     const[isRomantic, setIsRomantic] = useState(false)
//     const[motiv, setMotiv] = useState([])
//     const[isMotivation, setIsMotivation] = useState(false)
//     const[category, setCategory] = useState(["all"]);

//     useEffect(()=>{

//         axiosInstance
//         .post('/api/albumsLive',{

//           category: category
//         })

//         .then((response)=>{

//             console.log("length", response.data.length);
//             console.log("response.data", response.data)
//             setLiveAlbums(response.data)

//         })

//         .catch((error)=>{
//             console.error("error while fetching live albums", error)
//         })
//     }, [category])

//     const Romantic=()=>{

//       axiosInstance
//       .get('/api/albumRomantic')
//       .then((Response)=>{

//         console.log("response.data of romantic", Response.data)

//         setRoman(Response.data)


//       })

//       return(
//         <>

//               {
//  <main className="px-10 pt-10">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//           {
//             roman.map((item) => (
//               <div key={item._id} className="flex flex-row mx-3">
//                 {
//                   <button
//                     onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                     className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                   >
//                     <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                   </button>
//                 }
//               </div>
//             ))
//           }
//         </div>
//       </main>
//         }
        
//         </>
//       )
//     }

//     const Motivation =()=>{

//       axiosInstance
//       .get('/api/albumMotivation')

//       .then((Response)=>{

//         setMotiv(Response.data)
//       })

//        return(
//       <>

//          {
//  <main className="px-10 pt-10">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//           {
//             motiv.map((item) => (
//               <div key={item._id} className="flex flex-row mx-3">
//                 {
//                   <button
//                     onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                     className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                   >
//                     <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                   </button>
//                 }
//               </div>
//             ))
//           }
//         </div>
//       </main>
//         }
      
//       </>
//     )
//     }

   

//     return(
//         <><h1>Live Albums</h1>

//         <br /> <br /> <br />
         
//          <button onClick={()=>setCategory(["all"])}>all</button>
//         <button onClick={()=>setCategory(["romantic"])}>romantic</button>
//          <button onClick={()=>setCategory(["motivation"])}>motivation</button>
        

//         {/* ---------------------------------------------------------------------------------------------------------------------> */}

//         {
//  <main className="px-10 pt-10">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//           {
//             liveAlbums.map((item) => (
//               <div key={item._id} className="flex flex-row mx-3">
//                 {
//                   <button
//                     onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                     className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                   >
//                     <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                   </button>
//                 }
//               </div>
//             ))
//           }
//         </div>
//       </main>
//         }

//         {/* ------------------------------------------------------------------------------------------------------------------------> */}
// {/* 
//         <button onClick={()=>setIsRomantic(true)}>rom</button>
//         <button onClick={()=>setIsMotivation(true)}>mot</button>

//         {isRomantic && <Romantic />}

//        { 
//        (isRomantic)?<Romantic/>:(isMotivation)?<Motivation/>:  <main className="px-10 pt-10">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
//           {
//             liveAlbums.map((item) => (
//               <div key={item._id} className="flex flex-row mx-3">
//                 {
//                   <button
//                     onClick={() => Navigate(`/album?albumId=${item._id}`)}
//                     className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
//                   >
//                     <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
//                   </button>
//                 }
//               </div>
//             ))
//           }
//         </div>
//       </main>
       
//        }
//          */}

         
        
//         </>
        
//     )
// }

// export default AlbumsLive;







//-------------------------------------------------------------------------------------------------------------------------------->



import { useState, useEffect, useRef } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { AlbumCard } from "./components/AlbumsCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";


const AlbumsLive = () => {

    const [liveAlbums, setLiveAlbums] = useState([]);
    const Navigate = useNavigate();
    const [roman, setRoman] = useState([]);
    const [isRomantic, setIsRomantic] = useState(false);
    const [motiv, setMotiv] = useState([]);
    const [isMotivation, setIsMotivation] = useState(false);
    const [category, setCategory] = useState(["all"]);
    const newAlbums = useRef([null]);
    const[hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(15);

    useEffect(() => {

        axiosInstance
            .get(`/api/albumsLive?category=${category}&page=${page}&limit=${limit}`)
            .then((response) => {
                console.log("length", response.data.length);
                console.log("response.data", response.data)
                setLiveAlbums(response.data)

                setPage(2);
            })
            .catch((error) => {
                console.error("error while fetching live albums", error)
            })
    }, [category])

    // const Romantic = () => {

    //     axiosInstance
    //         .get('/api/albumRomantic')
    //         .then((Response) => {
    //             console.log("response.data of romantic", Response.data)
    //             setRoman(Response.data)
    //         })

    //     return (
    //         <>
    //             {
    //                 <main className="px-10 pt-10">
    //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    //                         {
    //                             roman.map((item) => (
    //                                 <div key={item._id} className="flex flex-row mx-3">
    //                                     {
    //                                         <button
    //                                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
    //                                             className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
    //                                         >
    //                                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
    //                                         </button>
    //                                     }
    //                                 </div>
    //                             ))
    //                         }
    //                     </div>
    //                 </main>
    //             }
    //         </>
    //     )
    // }

    // const Motivation = () => {

    //     axiosInstance
    //         .get('/api/albumMotivation')
    //         .then((Response) => {
    //             setMotiv(Response.data)
    //         })

    //     return (
    //         <>
    //             {
    //                 <main className="px-10 pt-10">
    //                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    //                         {
    //                             motiv.map((item) => (
    //                                 <div key={item._id} className="flex flex-row mx-3">
    //                                     {
    //                                         <button
    //                                             onClick={() => Navigate(`/album?albumId=${item._id}`)}
    //                                             className="text-left outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-xl animate-[fadeUp_0.4s_ease_both]"
    //                                         >
    //                                             <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
    //                                         </button>
    //                                     }
    //                                 </div>
    //                             ))
    //                         }
    //                     </div>
    //                 </main>
    //             }
    //         </>
    //     )
    // }

    const fetchMore =()=>{
        axiosInstance
          .get(`/api/albumsLive?category=${category}&page=${page}&limit=${limit}`)
            .then((response) => {
                console.log("fetchMore_running")
                console.log("length", response.data.length);
                console.log("response.data", response.data)
                

                newAlbums.current = response.data
               
                if(newAlbums.current.length === 0){
                    setHasMore(false);
                }else{
                     
                setLiveAlbums(prevItems =>[...prevItems, ...newAlbums.current])
                setPage(prev=> prev + 1)

                }
            })
            .catch((error) => {
                console.error("error while fetching live albums", error)
            })
    }

    return (
        <div id="scrollable" className="h-screen overflow-auto bg-[#000000] text-white">

            {/* ── Page Header ── */}
            <div className="flex items-center justify-between px-10 pt-8 pb-2">
                <h1 className="text-7xl font-medium tracking-tight text-[#f0f0f0]">
                    Live Albums
                </h1>
                <span className="text-xs text-[#505058]">
                    {liveAlbums.length} albums
                </span>
            </div>

            {/* ── Filter Pills ── */}
            <div className="flex items-center gap-2 px-10 py-4">
                {["all", "romantic", "motivation"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory([cat])}
                        className={`
                            px-5 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 capitalize
                            ${category[0] === cat
                                ? "bg-violet-600 border-violet-600 text-white"
                                : "bg-[#1c1c1e] border-[#2e2e30] text-[#a0a0a6] hover:bg-[#242426] hover:text-[#e0e0e0] hover:border-[#3e3e42]"
                            }
                        `}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            

            {/* ── Album Grid ── */}
            {
                <main className="px-10 pt-2">

                    <InfiniteScroll
                          dataLength={liveAlbums.length} //This is important field to render the next data
                          next={fetchMore}
                          scrollableTarget= "scrollable"
                          hasMore={hasMore}
                          loader={<h4>Loading...</h4>}
                          endMessage={
                            <p style={{ textAlign: 'center' }}>
                              <b>Yay! You have seen it all</b>
                            </p>
                          }
                        >

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">

                           
                        {
                            liveAlbums.map((item) => (
                                <div key={item._id}>
                                    {
                                        <button
                                            onClick={() => Navigate(`/album?albumId=${item._id}`)}
                                            className="
                                                w-full text-left outline-none
                                                focus-visible:ring-2 focus-visible:ring-violet-500
                                                rounded-2xl animate-[fadeUp_0.4s_ease_both]
                                            "
                                        >
                                            <AlbumCard albumName={item.name} albumId={item._id} albumImg={item.albumCover} />
                                        </button>
                                    }
                                </div>
                            ))
                        }
                       
                    </div>
                     </InfiniteScroll>
                </main>
            }

            {/* ------------------------------------------------------------------------------------------------------------------------>
            
            <button onClick={()=>setIsRomantic(true)}>rom</button>
            <button onClick={()=>setIsMotivation(true)}>mot</button>

            {isRomantic && <Romantic />}

           { 
           (isRomantic)?<Romantic/>:(isMotivation)?<Motivation/>:  <main className="px-10 pt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {
                liveAlbums.map((item) => (
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
           
           }
             */}

        </div>
    )
}

export default AlbumsLive;