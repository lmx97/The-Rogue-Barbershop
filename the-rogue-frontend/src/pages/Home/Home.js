import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Team from "../Team/Team";
// import News from "../News/News";
import Images from "../Images/Images";
import Cover from "../Cover/Cover";

const Home = () => {
    return (
        <div className="home" id="home">
            <Navbar />
            <Cover />
            <Services />
            <Images />
            <Team />
            <Contact />
        </div>
    );
};

export default Home;