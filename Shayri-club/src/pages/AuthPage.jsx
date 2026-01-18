import Auth from "./Auth"
import CanvasStars from "./CanvasStars";


const AuthPage=()=>{

    return(
<>
<div className="relative min-h-screen bg-black">

        <div className="absolute inset-0 z-0 pointer-events-none">

            <CanvasStars/>
        </div>


<div className=" flex justify-center mt-52">
<Auth/>


</div>



</div>


</>
    )
}

export default AuthPage;