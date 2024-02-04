import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosClient from "../../hooks/useAxiosClient";

const Signin = () => {
    const {login, googleSignUp} = useContext(AuthContext)
    const navigate = useNavigate();
    const axiosUser = useAxiosClient();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        const toastId = toast.loading("Signing In...")
        login(email, password)
        .then(result => {
            console.log(result.user);
            if (result.user?.email) {
                toast.success("Signed in successfully.", { id: toastId });
                navigate(location?.state ? location.state : "/");
              }
            navigate( "/")
        })
        .catch(error => {
            console.error(error);
        })
    }


    const googleSignIn = () => {
        googleSignUp()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                name: result.user?.displayName,
                email: result.user?.email
            }
            axiosUser.post('/users',userInfo )
            .then(res => {
                console.log(res);
                navigate( "/")
            })
        })
    }

    return (
      <div>
         <Navbar></Navbar>
       <div className="max-w-6xl mx-auto py-10">
     <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-center bg-white rounded-3xl md:rounded-md shadow-md border border-gray-300">

       {/* Left side form */}
       <form onSubmit={handleLogin} className="p-14" >
       <div>
       <div className="flex justify-center mb-3">
       <div className="flex items-center gap-3">
          <img
            className="w-10"
            src="https://i.ibb.co/9ZDVRzh/logo.png"
            alt=""
          />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Strom Scope
          </h1>
        </div>
       </div>
         <h1 className="text-xl font-bold text-gray-600 text-center mb-7">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Welcome back!!</span> Signin to access your info.
         </h1>
         

         <div>
           

           <div className="mb-2">
             <p className="mb-1 font-semibold text-gray-600">Your Email</p>
             <input
             name="email"
               className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
               type="email"
               placeholder="rahul@gmail.com"
             />
           </div>

           <div className="mb-3">
             <p className="mb-1 font-semibold text-gray-600">Password</p>
             <input
             name="password"
               className="bg-white border border-gray-400 outline-none px-2 py-1 rounded w-full"
               type="password"
               placeholder="*********"
             />
           </div>


           <div className="mb-3 flex justify-between items-center">
              <p className="textgray-600 font-semibold flex items-center gap-2"><input type="checkbox"  className="checkbox text-blue-600" /> Remember me</p>


              <p className="textgray-600 font-semibold text-blue-400">Forgot Password?</p>
           </div>

           <button onClick={googleSignIn} className="w-full font-semibold transition duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded text-white mb-3 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500">
             Sign In
           </button>

           <p className="mb-3 text-center text-gray-600 font-semibold">Or,</p>


           <button className="w-full font-semibold transition duration-300 border border-gray-300 hover:shadow-md px-4 py-2 rounded text-gray-600 mb-3 flex items-center gap-2 justify-center">
           <FcGoogle></FcGoogle> Coninue with Google
           </button>

           <p className="mb-4 text-center">
           Don't Have An Account?{" "}
           <Link to={"/signup"} className="text-blue-500 font-semibold underline">Sign Up</Link>
         </p>
         </div>
       </div>
       
       </form>

      {/* Right side banner */}
       <div className="h-full">
         <div
           className="hero h-full"
           
         >
            <video autoPlay loop muted className="w-full h-full object-cover">
      <source src="/public/bg.mp4" type="video/mp4"/>
    </video>
           <div className="hero-overlay bg-opacity-60"></div>
           <div className="hero-content text-center text-neutral-content">
             <div className="max-w-md">
               <h1 className="mb-5 text-4xl font-bold">
               Sign in to StormScope: Your Portal for Precise Weather Updates!
               </h1>
               <p className="mb-5">
               Unlock precise weather forecasts with StormScope. Sign up now for real-time insights and stay ahead of the storm!
               </p>
               <button className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">Get Started</button>
             </div>
           </div>
         </div>
       </div>



     </div>
   </div>
   <Toaster
 position="bottom-center"
 reverseOrder={false}
/>
   </div>
    );
};

export default Signin;