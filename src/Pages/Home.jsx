import Hero from "../Components/Hero";
import wave from '../assets/wave.svg'
const Home = () => {
    return (
        <>
            <Hero />
            <img className="absolute bottom-0 w-full" src={wave} alt="" />
        </>
    );
};

export default Home;