import { useState, useEffect } from "react";
import axiosInstance from "@/Apis/axiosInstance";
import { AlbumCard } from "./components/AlbumsCard";
import { useNavigate } from "react-router-dom";

const AlbumsLive=()=>{

    const[liveAlbums, setLiveAlbums] = useState([]);
    const Navigate = useNavigate();

    useEffect(()=>{

        axiosInstance
        .get('/api/albumsLive')

        .then((response)=>{

            console.log("length", response.data.length);
            console.log("response.data", response.data)
            setLiveAlbums(response.data)

        })

        .catch((error)=>{
            console.error("error while fetching live albums", error)
        })
    }, [])

    return(
        <><h1>Live Albums</h1>

        <br /> <br /> <br />

        {
 <main className="px-10 pt-10">
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
        
        
        </>
        
    )
}

export default AlbumsLive;