import Footer from "../Footer";
import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";


function HomePage() {
    return ( 
        <div>
            <Navbar />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </div>
     );
}

export default HomePage;