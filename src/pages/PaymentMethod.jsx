import React from "react";
import Navbar from "../components/Navbar/Navbar";
import PageHeader from "../components/PageHeader/PageHeader";
import PaymentSection from "../components/PaymentSection/PaymentSection"
import Footer from '../components/Footer/Footer'

export default function PaymentMethod() {
  return (
    <>
      <Navbar />
      <PageHeader />
      <PaymentSection/>
      <Footer />
    </>
  );
}
