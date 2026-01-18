import axiosInstance from "../Apis/axiosInstance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
// import { MyContext } from "../pages/";
import { useContext } from "react";
// import { createContext } from "react";
import { MyContext } from "../ContextProvider";





 const Kalam = () => {
  



  const [type, setType] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const {setStreak, setStreak2} = useContext(MyContext);


  // const {content, setContent} = useContext(MyContext);
  // const {type, setType} = useContext(MyContext);

  const handleKalam = () => {
    axiosInstance
      .post(
        "/kalam",
        {
          type,
          content,
        },
        { withCredentials: true }
      )
      .then((response) => {
        const data = response.data;
        console.log(response.data);
        
        

       

        if (data.success) {
          setMessage(data.msg);
          setShowPopup(true); // show popup on success

          // hide popup automatically
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);

          if (data.redirectUrl) {
        
            navigate(data.redirectUrl);
          }
        }
         setStreak(response.data.streak[0].createdAt)
       setStreak2(response.data.streak[1].createdAt)
      
      })
      .catch((err) => {
        console.error(err);
      
      });
  };  


  return (
    <>
    <div>
    <h1>Hello </h1>

  {/* {streak}
  {streak2}
     */}
      <div className="flex flex-col items-center justify-center h-screen gap-6">
        <h1 className="text-4xl text-black">Welcome to Kalam</h1>

        <input
          type="text"
          placeholder="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <input
          type="text"
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border px-3 py-2 rounded"
        />

        <button
          onClick={handleKalam}
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition"
        >
          Submit
        </button>

        <h1>{message}</h1>
        <Link to = '/UrKalam'>
        <button>view your kalams</button>
        </Link>

        {/* Popup */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="fixed top-20 right-1/2 translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-2xl shadow-2xl"
            >
              ✅ Submitted Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
      
    </>
  );
};

// export const MyContext = createContext();

// export const ContextProvider = ({ children })=>{

//   const[content, setContent] = useState("");

//   return(

//     <MyContext.Provider value = {{content, setContent}}>
//         { children }
    
//     </MyContext.Provider>
    
//   )

// }




export default Kalam;
