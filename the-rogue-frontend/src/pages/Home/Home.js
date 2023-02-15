import React from "react";
import logoImg from "../../assets/logo-the-rogue-2.jpg";
import mainImg from "../../assets/main-door.jpg";
import shopImg from "../../assets/shop.jpeg";
import cut5Img from "../../assets/cutting-area5.jpeg";
import cut6Img from "../../assets/cutting-area6.jpeg";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <nav className="container --flex-between">
                <div className="logo">
                    <img src={logoImg} alt="logo" width="550px"/>
                </div>
                <ul className="home-links">
                    <li>
                        <Link to="/story">Story</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>                
                        <Link to="/team">Team</Link>
                    </li>
                    <li>                   
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {/* HERO SECTION */}
            <section className="container hero">
                <div className="hero-image">
                    <img src={shopImg} alt="mainDoor" height="180px"/>
                </div>
                <div className="hero-image2">
                    <img src={cut6Img} alt="mainDoor" width="150px"/>
                </div>
                <div className="hero-image3">
                    <img src={cut5Img} alt="mainDoor" height="200px"/>
                </div>
                <div className="hero-image4">
                    <img src={mainImg} alt="mainDoor" width="180px"/>
                </div>
            </section>
        </div>
    );
};

const NumberText = ({num, text}) => {
    return (
        <div className="--mr">
            <h3 className="--color-white">{num}</h3>
            <p className="--color-white">{text}</p>
        </div>
    );
};

export default Home