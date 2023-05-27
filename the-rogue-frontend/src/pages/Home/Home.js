import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Team from "../Team/Team";
import News from "../News/News";


const Home = () => {
    return (
        <div className="home" id="home">
            <Navbar />
            <News />
            <Services />
            <Team />
            <Contact />

        </div>
    );
};

export default Home;