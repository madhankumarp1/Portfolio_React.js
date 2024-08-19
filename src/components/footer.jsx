// import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer>
      <div className="head_footer">
        <div className="left_footer">
          <h3 className="footer_home">HOME</h3>
        </div>
        <div className="center_footer">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="right_footer">
          {/* <a href="">blog</a> */}
          <h3 className="footer_blog">BLOG</h3>
        </div>
      </div>
      <div className="bottom_footer">
        <p className="footer_p">Follow me on social media</p>
      </div>

      <div className="icon_footer">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/madhan-kumar-p-6b1269276/" className="icon_color">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="instgram">
          <a href="https://www.instagram.com/charmingprince6/" className="icon_color">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="twitter">
          <a href="" className="icon_color">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/madhankumarp1" className="icon_color">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;