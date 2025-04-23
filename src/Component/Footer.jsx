import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Address:123 Knowledge Lane, Education City</p>
          <p>Email: info@eduplatform.com</p>
          <p>Phone no.: 123-4567-890</p>
        </div>

        {/* Follow Us */}
        <div className="footer-section center">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Head Office */}
        <div className="footer-section">
          <h3>Head Office</h3>
          <p><i className="fas fa-map-marker-alt"></i> 88 Academic Drive, Learningville</p>
          <p><i className="fas fa-clock"></i> Mon - Fri: 9:00 AM - 6:00 PM</p>
          <p><i className="fas fa-train"></i> Metro Line: Blue, Exit 4</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()}All rights reserved.Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
