import React from "react";
import {FaTelegramPlane} from "react-icons/fa"
import { TiFlagOutline } from "react-icons/ti"
import { IoLocationSharp } from "react-icons/io5"
import { FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import "../css/footer.css" 

const Footer = () => {
    return (
        <div>
        <div className="heading">
          <h1 className="digital">Digital</h1>
          <h1 className="aided">Aided</h1>
          <h1 className="school">School</h1>
        </div>
        <div className="content">
          <div className="inner_content">
            <h1>Company</h1>
            <a href="">About Us</a>
            <a href="">Careers</a>
            <a href="">Blogs</a>
            <a href="">Privacy policy</a>
            <a href="">Terms and conditions</a>
          </div>
          <div className="inner_content">
            <h1>Courses</h1>
            <a href="">Digital Marketing</a>
            <a href="">Web Developmemt</a>
            <a href="">Machine Learning</a>
            <a href="">Artificial Intelligence</a>
            <a href="">All Programming Languages</a>
          </div>
          <div className="inner_content">
            <h1>Contact</h1>
            <div className="contact_content">
              <span className="contact_icon"><h1><FaTelegramPlane /></h1></span>
              <p>contactus@digitalaidedschool.com</p>
            </div>
            <div className="contact_content">
              <span className="contact_icon"><h1><TiFlagOutline /></h1></span>
              <p> +91 9876543210</p>
            </div>
            <div className="contact_content">
              <span className="contact_icon"><h1>< IoLocationSharp/></h1></span>
              <p> <strong>India</strong> <br/>Spectrum tower, Malad West, Maharashtra Mumbai 400054</p>
            </div>
          </div>
            </div>
            <div className="social_media">
                <h1>Connect With Us</h1>
                    <a href=""> <h1 className="icon"><FaFacebook /></h1></a>
                    <a href=""> <h1 className="icon"><AiFillTwitterCircle /></h1></a>
                    <a href=""> <h1 className="icon"><AiFillInstagram/></h1></a>
                    <a href=""> <h1 className="icon"><AiFillYoutube/></h1></a>
            </div>
            <div><hr /></div>
            <div className="copyright">
                <h3>Copyrights 2021. All rights Reserved</h3>
                <h3>Terms and Conditions</h3>
                <h3>Privacy Policy</h3>
            </div>

      </div>
    )
}
export default Footer;