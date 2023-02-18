import React from "react";
// import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import "../Services/Services.scss";
import "./Story.scss";
import logoImg from "../../assets/logo-the-rogue-2.jpg";

const Story = () => {
  return (
    <div className="story">
      <nav className="container --flex-between">
        <Link to="/">
          <img src={logoImg} alt="logo" width="73px"/>
        </Link>
        
        <ul className="story-links">
            <li>
              <Link to="/story">Story</Link>
            </li>

            <li>
              <button className="--btn --btn-tertiary">
                <Link to="/services">Services</Link>
              </button>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>

      {/* SERVICE SECTION */}
      <section className="container story">
        <div className="story-text">
          <h2>Story</h2>
          <br/>
          <p>
            Your story...
          </p>
        </div>
      </section>
    </div>
  );
};

export default Story;