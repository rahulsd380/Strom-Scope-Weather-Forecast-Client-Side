import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import WeatherCard from "../Weather/WeatherCard";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <WeatherCard></WeatherCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;