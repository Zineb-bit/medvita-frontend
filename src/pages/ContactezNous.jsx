import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PageHeader from "../components/PageHeader/PageHeader";
import ContactSection  from "../components/ContactSection/ContactSection";
import MapDisplay from "../components/MapDisplay/MapDisplay";
import Footer from "../components/Footer/Footer";
function ContactezNous() {
  return (
    <div>
      <Navbar />
      <PageHeader />
      <ContactSection />
      <MapDisplay />
      <Footer/>
    </div>
  );
}

export default ContactezNous;
