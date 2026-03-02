import { useState, useEffect } from "react";

export const AlbumCard=({albumName, albumId})=>{



    return(
        <>
        

          {/* <div className="h-screen w-full flex "> */}
            <div className="h-56 w-44 rounded-xl flex items-center justify-center </button> mx-auto my-auto border-blue-400 p-3 mt-4">

                  <h1 className="text-2xl">
                    {albumName}
                  </h1>
            </div>

            {/* </div> */}


        
        </>
    )
}