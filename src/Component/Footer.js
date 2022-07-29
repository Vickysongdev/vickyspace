import React from 'react';
import "./Footer.css";
import{FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter, FaWhatsapp} from "react-icons/fa";

function Footer() {
  return (
    <div  className="footer">
      <div  className="footer-container">
        <div className="left">
          <div  className="location">
            <FaSearchLocation size={20}  style={{color: '#fff',   marginRight:"2rem"}} />
              <div>
                <p>Osopalondon</p>
                <h4>Lekki Nigeria</h4>
              </div>
          </div>
          <div  className="phone">
            <h4> <FaPhone size={20}  style={{color: '#fff',   marginRight:"2rem"}} /> +234801234456</h4>
          </div>
          <div  className="phone">
            <h4> <FaWhatsapp size={20}  style={{color: '#fff',   marginRight:"2rem"}} /> +2348065896915 VickyTec</h4>
          </div>
          <div  className="email">
            <h4> <FaMailBulk size={20}  style={{color: '#fff',   marginRight:"2rem"}}/> 12345@gmail.com</h4> 
          </div>
        </div>
        <div  className="right">
          <h4> About the company</h4>
          <p> lorem ipsum dolor sit amet, consectetur adip</p>
          <div  className="social">
            <FaFacebook size={30}  style={{color: '#fff', marginRight:"1rem"}}/>
            <FaTwitter size={30}  style={{color: '#fff',  marginRight:"1rem"}}/>
            <FaLinkedin size={30}  style={{color: '#fff',  marginRight:"1rem"}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer