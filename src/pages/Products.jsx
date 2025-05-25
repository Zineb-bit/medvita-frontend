import React from "react";
import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import ProductCard from '../components/ProductCard/ProductCard'
import CaracteristiquesSection from "../components/CaracteristiquesSection/CaracteristiquesSection";
import PolitiqueSection from "../components/PolitiqueSection/PolitiqueSection"
import Produits from '../components/Produits/Produits'
import References from '../components/References/References'
import Footer from '../components/Footer/Footer'

export default function Products() {
    return (
        <>
            <Navbar />
            <PageHeader />
            <ProductCard/>
            <CaracteristiquesSection/>
            <PolitiqueSection/>
            <Produits/>   
            <References/>  
            <Footer/>

             </>
    )
}