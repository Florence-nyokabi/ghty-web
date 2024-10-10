import React, { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`} data-testid="nav-items">
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/services">Services</a>
        <a href="/blogs">Blogs</a>
        <a href="/about-us">About Us</a>
        <a href="/our-customers">Our Customers</a>
        <a href="#contact-us">Contact Us</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
        data-testid="nav-toggle"
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;