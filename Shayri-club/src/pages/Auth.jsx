import { useRef, useState } from "react";
import "./Auth.css";
import axiosInstance from "../Apis/axiosInstance";
import { useNavigate } from "react-router-dom";


export default function Auth() {
  const containerRef = useRef(null);
  const[email, setEmail] = useState("");
  const[password, setPasssword] = useState("");
  const[login, setLogin] = useState("");
  const navigate = useNavigate();

  //  user.name = name;
  //  user.id = id;
  //  user.password = password

  const handleRegister = () => {
    containerRef.current.classList.add("active");
  };

  const handleLogin = () => {
    containerRef.current.classList.remove("active");

    axiosInstance

    .post("/login", {

        email: `${email}`,
        password: `${password}`
    },
        {
        withCredentials: true
        }

      )



    .then((response)=>{
      setLogin(response.data)

      const data = response.data;
      if(data.success){
        navigate(data.redirectUrl);

      }
    })


  };

  return (
    <div className="container"  ref={containerRef}>
      {/* SIGN UP */}
      <div className="form-container sign-up">
        <form>
          <h1 className="text-black text-2xl ">Create Account</h1>

          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
            <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
          </div>

          <span className="text-lg text-black">or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="button">Sign Up</button>
        </form>
      </div>

      {/* SIGN IN */}
      <div className="form-container sign-in">
        <form>
          <h1 className="text-2xl text-black">Sign In</h1>

          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g" /></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f" /></a>
            <a href="#" className="icon"><i className="fa-brands fa-github" /></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in" /></a>
          </div>

          <span className="text-black">or use your email password</span>
          <input
           type="email"
            placeholder="Email"
             onChange = {(e)=> setEmail(e.target.value)}
            />
          <input
           type="password"
            placeholder="Password"
             onChange = {(e)=> setPasssword(e.target.value)}
            />
          <a href="#">Forgot your password?</a>
          <button type="button"  onClick={handleLogin}>Sign In</button>
        </form>
      </div>

      {/* TOGGLE */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className="text-2xl">Welcome Back!</h1>
            <p>Enter your personal details to use all features</p>
            <button type="button" onClick ={handleLogin}  className = "ghost-btn">Sign In</button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1 className="text-2xl">Hello, Friend!</h1>
            <p>Register with your personal details</p>
            <button type="button" className="ghost-btn" onClick={handleRegister}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 