import "./Navbar.scss";
import logoImg from "../../assets/logo.jpg";
import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
    render() {
        return (
            <div className="t-nav">
                <div className="nav-header">
                    <ul className="nav-links">
                        <li>
                            <Link smooth to="#home">News</Link>
                        </li>
                        <li>
                            <Link smooth to="#services">Services</Link>
                        </li>
                        <li>
                            <Link smooth to="#home">
                                <img src={logoImg} alt="logo" width="150px" />
                            </Link>
                        </li>
                        <li>                
                            <Link smooth to="#team">Team</Link>
                        </li>
                        <li>                   
                            <Link smooth to="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

// export default Navbar;