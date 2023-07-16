import React from "react";
import "./Contact.scss";
import { WiTime8 } from "react-icons/wi";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookSquare, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
// import iframe from "react-iframe";


const Contact = () => {
  return (
    <div className="contact" id="contact">
      <section className="contact-header">
        <h3><b>FIND US</b></h3>
      </section>
      <div className="contact-text-2">
        <iframe className="contact-text"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15953.495478597799!2d103.6333995!3d1.5417911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da75a2f3229d1f%3A0xfa112d58b6e89cdb!2sThe%20Rogue%20Barbershop!5e0!3m2!1sen!2ssg!4v1685772681384!5m2!1sen!2ssg" 
          height="500px"
          width="700px"
          style={{ margin: 'auto', borderRadius: '10px'}}
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div className="contact-text" style={{ marginLeft: '2%'}}>
          <div className="contact1">
            <p><b>< WiTime8 /> Opening Hours</b> </p>
            <p>Mon - Sun: 11am - 8.30pm</p>
            <br/>
            <p><b><FaPhone /> Contact </b></p>
            <p>014-613 9597</p>
            <br/>
            <p><b>< MdLocationOn /> Address</b> <br/> 17, Jalan Kebudayaan 1a, Taman Universiti, 81300 Skudai, Johor</p>
            <br/>
            </div>
          <div className="contact2">
            <div className="contact3">
              <a href="https://www.facebook.com/profile.php?id=100080491153430">< FaFacebookSquare size={40} /> <br/> <p>Facebook</p></a>
            </div>
            <div className="contact3">
              <a href="https://api.whatsapp.com/send?phone=60146139597">< FaWhatsapp size={40} /> <br/> <p> WhatsApp </p></a>
            </div>
            <div className="contact3">
              <a href="https://www.instagram.com/theroguebarber.official/?fbclid=IwAR0OCn1K_CCQH9f4avFpCMA-3abTpuMhFPfJlM93aOCM8occJXpuV_5Ql7Y">< FiInstagram size={40} /> <br/> <p>Instagram</p></a>
              <br/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;