import Lottie from "lottie-react";
import sun from "../../../public/sun.json"
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { useState } from "react";
import { FaTemperatureLow } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";


const WeatherCard = () => {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});
    console.log(weather);
    const api = {
        key: "2636a21b4497413eb9691a02f4298a31",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const handleGetWeatherData = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
          .then((res) => res.json())
          .then((result) => {
            setWeather(result);
          });
      };

      const date = new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });


    return (
        <div className="max-w-6xl mx-auto py-10">

            <div className="mb-7">
                <h1 className="text-2xl font-bold text-gray-600 mb-1 flex items-center gap-1 justify-center">Explore Your Local Weather with Real-time Updates and Accurate Forecasts <TiWeatherPartlySunny className="text-yellow-500"></TiWeatherPartlySunny></h1>
                <p className="text-center text-gray-500">Discover the latest weather conditions and forecasts for your location. Stay informed with real-time updates on temperature, humidity, wind speed, and more. Plan your day confidently with accurate weather information at your fingertips.</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl grid grid-cols-3 items-center gap-10">



 
            <div className="">
                <Lottie animationData={sun}></Lottie>
            </div>

            <div className="col-span-2">
                <h1 className="text-xl font-semibold text-white mb-2 flex items-center gap-2"> <FaLocationDot></FaLocationDot>{weather.name ? weather.name + " , " + weather.sys.country : "Your City"}</h1>
                <p className="text-white flex items-center gap-2 mb-5"><FaRegCalendarDays></FaRegCalendarDays>{date}</p>
                <h1 className="text-5xl font-bold text-white mb-5 flex items-center gap-2"><FaTemperatureLow></FaTemperatureLow> {weather?.main?.temp}º F</h1>


                <div className="flex items-center gap-5 mb-5">
                <div className="flex items-center gap-3">
                <WiHumidity className="text-5xl text-white"></WiHumidity>
                <div>
                <p className="text-white text-2xl">{weather?.main?.humidity ? weather?.main?.humidity : "0"}%</p>
                <p className="text-white text-sm">Humidity</p>
                </div>
                </div>
                <div className="flex items-center gap-3">
                <MdAir className="text-4xl text-white"></MdAir>
                <div>
                <p className="text-white text-2xl">{weather.wind?.speed ? weather.wind?.speed : "0"}</p>
                <p className="text-white text-sm">Wind Speed</p>
                </div>
                </div>
            </div>
                <div className="flex items-center">
                <input
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-l-md border border-blue-400  bg-gray-100 px-3 h-12 text-sm focus:outline-none focus:border-blue-600 transition duration-300 ease-in-out w-7/12 hover:border-rose-300" type="text"  placeholder="Enter your location/city" />
                <button onClick={handleGetWeatherData} className="text-white bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-2xl font-semibold  rounded-r-md h-12 px-6">Search</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WeatherCard;