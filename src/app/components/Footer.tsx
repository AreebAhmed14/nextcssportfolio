import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="contact">
            <h2 className="footer-headeing">CONTACT</h2>
            <div className="link-icons1">
                <a href="http://wa.me/+923709180147" target="_blank"><IoLogoWhatsapp id='icon'/></a>
                <abbr title="areebfarooq549@gmail.com"><FaEnvelope id='icon'/></abbr>
            <a href="https://github.com/AreebAhmed14" target="_blank"><FaGithubAlt id='icon'/></a>
        </div>
        <div className="link-icons2">
            <a href="https://www.facebook.com/AreebFarooq549/" target="_blank"><FaFacebookSquare id='icon'/></a>
            <a href="https://www.linkedin.com/in/mohammad-areeb-856a94315/" target="_blank"><IoLogoLinkedin id='icon'/></a>
            <a href="https://www.instagram.com/areeb_ahmed549/" target="_blank"><RiInstagramFill id='icon'/></a>

        </div>
            
        </div>
        <div className="seeoff">
           <center> <h2 className="footer-headeing last-heading">I HOPE YOU KNOW ME WELL NOW</h2>
            <p>I hope you’ve gotten to know me better through my work. Your support means everything, and I look forward to sharing more with you. Let’s continue this journey together—stay connected for more updates and exciting new projects.</p>
        </center>
        </div>
    </footer>
    </div>
  )
}

export default Footer
