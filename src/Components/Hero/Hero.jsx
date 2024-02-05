import hero from "../../../public/hero.json"
import Lottie from "lottie-react";
import { TiTick } from "react-icons/ti";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Hero = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="max-w-6xl mx-auto py-10 md:py-0">
 <div className="grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-0">
            <div>
                <h1 className="text-gray-600 text-3xl md:text-5xl font-bold leading-[3rem] md:leading-[4rem] mb-5"><span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Strom Scope:</span> Navigating You Through Weather's Symphony</h1>
                <p className="mb-5">Discover weather clarity with Strom Scope. Navigate forecasts confidently and stay ahead. Your go-to for precision weather insights, ensuring you're prepared for every atmospheric shift. Welcome to Strom Scope!</p>
                
                <div className="flex items-center">
                <input className="rounded-l-md border border-blue-400  bg-gray-100 px-3 h-12 text-sm focus:outline-none focus:border-blue-600 transition duration-300 ease-in-out w-7/12 hover:border-rose-300" type="text"  placeholder="Which skill are you looking for?" />
                <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold  rounded-r-md h-12 px-6">Explore More</button>
                </div>
            </div>

            <div className="w-11/12">
                <Lottie animationData={hero}></Lottie>
            </div>
        </div>
        </div>
       
    );
};

export default Hero;