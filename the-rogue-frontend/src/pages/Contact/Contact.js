import React from "react";
import "./Contact.scss";
import { WiTime8 } from "react-icons/wi";
import { FiPhone, FiInstagram } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
// import iframe from "react-iframe";


const Contact = () => {
  return (
    <div className="contact" id="contact">
      <section className="contact-header">
        <h3>Contact Us</h3>
      </section>

        <div className="contact-text-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15953.495478597799!2d103.6333995!3d1.5417911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da75a2f3229d1f%3A0xfa112d58b6e89cdb!2sThe%20Rogue%20Barbershop!5e0!3m2!1sen!2ssg!4v1685772681384!5m2!1sen!2ssg" 
            width="800" 
            height="440" 
            style={{borderRadius:'10px'}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      
        <div className="contact-text">
          <p><b>< WiTime8 /> Working Hours:</b></p>
          <p>Mon: 11am - 8.30pm</p>
          <p>Tue: 11am - 8.30pm</p>
          <p>Wed: 11am - 8.30pm</p>
          <p>Thu: 11am - 8.30pm</p>
          <p>Fri: 11am - 7pm</p>
          <p>Sat: 11am - 8.30pm</p>
          <p>Sun: 11am - 8.30pm</p>
          <br/>
          <p><b>< FiPhone /> Contact:</b> 014-613 9597</p>
          <br/>
          <p><b>< FaFacebookSquare /> Facebook:</b> <a href="https://www.facebook.com/profile.php?id=100080491153430">The Rogue Barbershop</a></p>
          <br/>
          <p><b>< FiInstagram /> Instagram:</b> <a href="https://www.instagram.com/theroguebarber.official/?fbclid=IwAR0OCn1K_CCQH9f4avFpCMA-3abTpuMhFPfJlM93aOCM8occJXpuV_5Ql7Y"> theroguebarber.official </a></p>
          <br/>
          <p><b>< MdLocationOn /> Address:</b> 17, Jalan Kebudayaan 1a,<br/> Taman Universiti, 81300 Skudai, Johor</p>
        </div>

    </div>
  );
};

export default Contact;