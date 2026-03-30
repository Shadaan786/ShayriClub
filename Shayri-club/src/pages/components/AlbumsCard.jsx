// import { useState, useEffect } from "react";

// export const AlbumCard=({albumName, albumId, albumImg})=>{



//     return(
//         <>
        

//           {/* <div className="h-screen w-full flex "> */}
//             {/* <div className="h-56 w-44 rounded-xl flex items-center justify-center </button> mx-auto my-auto border-blue-400 p-3 mt-4"> */}
//             <div className="h-56 w-44 rounded-xl flex  border-blue-400 ">

//             <img src= {albumImg} alt="albumCover" />

//                   <h1 className="text-2xl">
//                     {albumName}
//                   </h1>
//             </div>

//             {/* </div> */}


        
//         </>
//     )
// }




import { useState } from "react";

export const AlbumCard = ({ albumName, albumId, albumImg }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:wght@600&display=swap');

        .album-card {
          font-family: 'DM Sans', sans-serif;
          width: 176px;
          border-radius: 16px;
          overflow: hidden;
          background: #0f0f0f;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .album-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.6);
        }

        .album-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }

        .album-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .album-card:hover .album-img-wrapper img {
          transform: scale(1.06);
        }

        .play-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .album-card:hover .play-overlay {
          opacity: 1;
        }

        .play-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #1DB954;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(29,185,84,0.5);
          transition: transform 0.2s ease;
        }

        .play-btn:hover {
          transform: scale(1.1);
        }

        .album-info {
          padding: 12px 14px 14px;
        }

        .album-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: #f0f0f0;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0 0 4px;
        }

        .album-id {
          font-size: 11px;
          color: #888;
          letter-spacing: 0.04em;
          margin: 0;
          text-transform: uppercase;
        }
      `}</style>

      <div
        className="album-card"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="button"
        tabIndex={0}
        aria-label={`Play ${albumName}`}
      >
        <div className="album-img-wrapper">
          <img src={albumImg} alt={`${albumName} cover`} />
          <div className="play-overlay">
            <div className="play-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="album-info">
          <p className="album-title">{albumName}</p>
          {albumId && <p className="album-id"></p>}
        </div>
      </div>
    </>
  );
};