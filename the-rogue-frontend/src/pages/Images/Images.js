import React from "react";
import "./Images.scss";
import hair1 from "../../assets/hair-style1.png";
import hair2 from "../../assets/hair-style2.png";
import hair3 from "../../assets/hair-style3.png";
import hair4 from "../../assets/hair-style4.png";
import hair5 from "../../assets/hair-style5.png";
import hair6 from "../../assets/hair-style6.png";
// import hair7 from "../../assets/hair-style7.png";
import hair8 from "../../assets/hair-style8.png";
import hair9 from "../../assets/hair-style9.png";
// import hair10 from "../../assets/hair-style10.png";
import hair11 from "../../assets/hair-style11.png";
import hair12 from "../../assets/hair-style12.png";
// import hair13 from "../../assets/hair-style13.png";
import barber1 from "../../assets/barber1.jpg";
// import barber2 from "../../assets/barber2.jpg";
import barber3 from "../../assets/barber3.jpg";
import barber4 from "../../assets/barber4.jpg";
import barber5 from "../../assets/barber5.png";
// import cutarea1 from "../../assets/cutting-area.jpg";
// import cutarea2 from "../../assets/cutting-area3.jpeg";

const Images = () => {
  return (
    <div className="images">
      <div className="row">
        <div className="column">
          <img src={ barber1 } alt="barber1" style={{ width: '100%', marginTop:'50%' }} />
          <img src={ hair1 } alt="hair1" style={{ width: '100%' }} />
          <img src={ barber5 } alt="barber5" style={{ width: '100%' }} />
        </div>
        <div className="column">
          <img src={ hair8 } alt=" hair8" style={{ width: '100%', marginTop:'25%' }} />
          <img src={ barber3 } alt="barber3" style={{ width: '100%' }} />
          <img src={ hair2 } alt="hair2" style={{ width: '100%' }} />
        </div>
        <div className="column">
          <img src={ hair9 } alt="hair9" style={{ width: '100%' }} />
          <img src={ hair11 } alt="hair11" style={{ width: '100%' }} />
          <img src={ hair12 } alt="hair12" style={{ width: '100%' }} />         
        </div>
        <div className="column">
          <img src={ barber4 } alt="barber4" style={{ width: '100%', marginTop:'25%' }} />
          <img src={ hair3 } alt="hair3" style={{ width: '100%' }} />
          <img src={ hair6 } alt="hair6" style={{ width: '100%' }} />
        </div>
        <div className="column">
          <img src={ hair5 } alt="hair5" style={{ width: '100%', marginTop:'50%' }} />
          <img src={ hair4 } alt="hair4" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Images;