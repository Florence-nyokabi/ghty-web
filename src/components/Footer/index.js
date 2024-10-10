import React from 'react';
import './style.css';

import { IoLogoFacebook,IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin} from "react-icons/io";
function Footer() {
  return (
    <div className="footer-container" id="contact-us">
      <div className="footer-icons" id="footer-icons">
        <div className="footer">
          <div className='logos'>
            <img src={`${process.env.PUBLIC_URL}/logo-two.png`} alt="Logo" className='logs' width="210" height="210" />
            <h4 id="footer-logo">Elevating Coffee Experiences Worldwide</h4>
          </div>
        </div>
        <br />
        <div className="information" id="footer-information">
          <span>VISIT US</span>
          <ul>
            <li>Addis Ababa, Ethiopia</li>
            <li>Sengater, Sengatera Traders</li>
            <li>SC building</li>
          </ul>
        </div>
        <br />
        <div className="CONTACT US" id="footer-contact">
          <span>CONTACT US</span>
          <ul>
            <li className='c-li'>ghtygeneraltrading@gmail.com</li>
            <li className='c-li'>+251 929-367-608 / +251 911-518-886</li>
            <div className='iconz'>
              <IoLogoFacebook className='icon' data-testid="facebook-icon" />
              <IoLogoTwitter className='icon' data-testid="twitter-icon" />
              <IoLogoInstagram className='icon' data-testid="instagram-icon" />
              <IoLogoLinkedin className='icon' data-testid="linkedin-icon" />
            </div>
          </ul>
        </div>
      </div>
      <br />
      <div className="f-down">
      </div>
      <hr className="footer-hr" />
      <div className="footer-p">
        <p>&copy; 2024 G.H.T.Y</p>
      </div>
    </div>
  );
}
export default Footer;