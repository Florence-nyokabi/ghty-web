import React from 'react'
import Navbar from "../NavBar"
import ContactForm from '../ContactForm';

import Footer from "../../components/Footer";


const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Navbar />
      {children}
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Layout;