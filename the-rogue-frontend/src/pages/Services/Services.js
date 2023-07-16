import React from "react";
// import { RiProductHuntLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
import "./Services.scss";
// import logoImg from "../../assets/logo-the-rogue-2.jpg";
// import bgImg from "../../assets/bg.jpg";
// import bgImg from "../../assets/cutting-area7.jpeg";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-bg">
        <section className="services-header">
          <h3><b>SERVICES</b></h3>
          <p>First-rate services in FadeCut, Wash, and Beard Trim. <br/>
          Witty quips and good conversations come standard. Walk-ins only.
          </p>
        </section>
        <div className="services-links">
          <div className="service-text">
            <h4>FadeCut</h4>
            <h5>RM 30</h5>
            <br/>
            <p>
              Consultation and cut
              and style with premium products.
            </p>
          </div>
          <div className="service-text">
            <h4>FadeCut & Wash</h4>
            <h5>RM 35</h5>
            <br/>
            <p>
              Consultation, cut, wash, blow dry, 
              and style with premium products.
            </p>
          </div>
          <div className="service-text">
            <h4>Beard Trim</h4>
            <h5>RM 15</h5>
            <br/>
            <p>
            Consultation, trim, straight razor edging, and hot & cold towel combo. <br/>
            Finished with after-shave, lotion, and your choice of beard oil or balm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;