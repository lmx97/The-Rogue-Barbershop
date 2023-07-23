import "./Navbar.scss";
import logoImg from "../../assets/logo2.jpg";
import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
    render() {
        return (
            <div className="t-nav">
                <ul className="nav-header">
                    <li className="nav-hide">
                        <Link smooth to="#home">Home</Link>
                    </li>
                    <li className="nav-hide">
                        <Link smooth to="#services">Services</Link>
                    </li>
                    <li>
                        <Link smooth to="#home">
                            <img src={logoImg} alt="logo"/>
                        </Link>
                    </li>
                    <li className="nav-hide">                
                        <Link smooth to="#team">Team</Link>
                    </li>
                    <li className="nav-hide">                   
                        <Link smooth to="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
};

// export default Navbar;