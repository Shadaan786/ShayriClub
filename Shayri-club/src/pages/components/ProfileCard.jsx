import { useState, useEffect } from "react";


export const ProfileCard=({userName, totalKalams, joiningDate, Streak, totalSher, totalGhazal, totalNazm})=>{








    return(

        

        <div className=" w-full min-h-screen flex">

            <div className=" mx-auto  flex flex-col border h-screen w-1/2 bg-blue-900 border-blue-400 rounded-3xl">


            {/* main upper div */}

            

            <div className="flex  mx-auto rounded-3xl bg-blue-900 border w-full h-1/2 border-blue-400">

            
         

           <div  className=" h-full w-2/3 flex flex-col">
            

            <div className="h-full w-full flex border border-black ">    

           
                
                {/* upper left above div */}
                
            <div className="flex">

                 {/* profile pic */}

            <div className="rounded-full  bg-blue-950 w-40 h-40 ">

                <img className="rounded-full w-full h-full" src="http://localhost:9000/uploads/profilePics/image-1770827123299_744819523.jpg" />

            </div>

            {/* Name */}

            <div className="rounded-2xl my-auto flex bg-blue-950 w-64 h-8">

                <h1 className="flex mx-auto text-3xl">{userName}</h1>
                

            </div>

            </div>

            

           


            </div>

            {/* upper left below div */}


            <div className=" flex border border-yellow-500 w-full h-full">

                 
            </div>



            </div>
            

            {/* upper right div */}

             <div className=" flex border flex-col border-blue-400  h-full w-1/2">

             {/* upper right above div */}

             <div className="border flex flex-col items-center justify-center border-blue-400 h-1/2 w-full">

             <h1 className="flex  text-8xl  ">00</h1>
             <h2 className="flex text-2xl">Followers</h2>

             </div>

             {/* upper right below div */}

             <div className=" flex border flex-col items-center justify-center border-red-600 h-1/2 w-full ">

             <h1 className="text-8xl">{totalKalams}</h1>
             <h1 className="text-2xl">Total Kalams</h1>


             </div>

            
            </div>

               

             


            </div>

            <div className="border border-pink-600 w-full flex h-1/6">

            <div className="border flex flex-col border-black h-full w-1/4 items-center justify-center">
            <h1 className="text-4xl">{totalSher}</h1>
            <h1>contributions in shayri</h1>
            </div>
            <div className="border border-black h-full w-1/4 flex flex-col items-center justify-center ">
            <h1 className="text-4xl">{totalGhazal}</h1>
            <h1>contributions in Gahzal</h1>
            </div>
            <div className="border border-black h-full w-1/4 flex flex-col items-center justify-center">
            <h1 className="text-4xl">{totalNazm}</h1>
            <h1>contributions in Nazm</h1>
            </div>

            <div className="border border-black h-full w-1/4 flex flex-col items-center justify-center">
            <h1 className="text-4xl">{totalGhazal}</h1>
            <h1>contributions in Gahzal</h1>
            </div>



            </div>




            </div>

            {/* <h1>Hello</h1> */}

        </div>
        
        
    )
}