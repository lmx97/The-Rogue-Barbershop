import React from "react";
// import { RiProductHuntLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
import "./Team.scss";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs"
// import logoImg from "../../assets/logo-the-rogue-2.jpg";

const Team = () => {
  return (
    <div className="team" id="team" >
      <section className="team-header">
        <h3>Meet Our Team</h3>
        <p>The barbers you'd trust with your hair and your life. 
        You may know us before, <br/> or maybe you're a new face.
        Either way, you can trust us with yours. Welcome to the family.
        </p>
      </section>
      <section className="team-links">
        <div className="team-text">
          <div className="team-icon">
            <BsFillFileEarmarkPersonFill size={180} /> <br/>
          </div>
          <h4>Harry Chan </h4>
          <h5>Master Barber</h5>
          <br/>
          <p>
            Experience...
          </p>
        </div>
        <br/> <br/>
        <div className="team-text">
          <div className="team-icon">
            <BsFillFileEarmarkPersonFill size={180} />
          </div>
          <h4>Employee 1</h4>
          <h5>Position</h5>
          <br/>
          <p>
            Experience...
          </p>
        </div>
      </section>
      <section className="team-links-2">
        <div className="team-text-2">
          <div className="team-icon">
            <BsFillFileEarmarkPersonFill size={180}/>
          </div>
          <h4>Employee 2</h4>
          <h5>Position</h5>
          <br/>
          <p>
            Experience...
          </p>
        </div>
        <br/> <br/>
        <div className="team-text-2">
          <div className="team-icon">
            <BsFillFileEarmarkPersonFill size={180}/>
          </div>
          <h4>Employee 3</h4>
          <h5>Position</h5>
          <br/>
          <p>
            Experience...
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;