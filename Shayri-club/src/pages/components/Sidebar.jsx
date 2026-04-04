// import { useState } from "react";

// export default function SidebarExample({isOpen, onClose}) {
// //   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex">
      
//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <h1 className="text-xl font-bold mb-4">Sidebar</h1>
//         <ul>
//           <li className="mb-2">Home</li>
//           <li className="mb-2">About</li>
//           <li className="mb-2">Contact</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="p-5">
//         <button
//           onClick={onClose}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Toggle Sidebar
//         </button>
        

//         <p className="mt-4">Main content goes here...</p>
//       </div>
//     </div>
//   );
// }





//-------------------------------------------------------------------------------------------------------------------->


import GlobalChat from "../globalChat";



export default function SidebarExample({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay (dark background) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-1/3 bg-gray-800 text-white p-2 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-xl font-bold mb-4">Sidebar</h1>

        <GlobalChat/>

        {/* <ul>
          <li className="mb-2">Home</li>
          <li className="mb-2">About</li>
          <li className="mb-2">Contact</li>
        </ul> */}

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </>
  );
}   