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
        <h3><b>MEET OUR TEAM</b></h3>
        <p>The barbers you'd trust with your hair and your life. 
        You may know us before, <br/> or maybe you're a new face.
        Either way, you can trust us with yours. Welcome to the family.
        </p>
      </section>
      <div className="team-links">
        <div className="team-text">
          <div className="team-icon">
            <BsFillFileEarmarkPersonFill size={180} />
            <br/>
            <h4>Harry</h4>
            <h5>Master Barber</h5>
          </div>
        </div>
        <br/>
        <div className="team-text">
          <div className="team-icon">
            <BsFillFileEarmarkPersonFill size={180} />
            <br/>
            <h4>Barber 1</h4>
            <h5>Barber </h5>
          </div>
        </div>
        <div className="team-text-2">
          <div className="team-icon-2">
            <BsFillFileEarmarkPersonFill size={180}/>
            <h4>Barber 2</h4>
            <h5>Barber</h5>
          </div>
        </div>
        <br/>
        <div className="team-text-2">
          <div className="team-icon-2"> 
            <BsFillFileEarmarkPersonFill size={180}/>
            <h4>Barber 3</h4>
            <h5>Barber</h5>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Team;