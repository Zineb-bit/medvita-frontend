import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import Produits from '../components/Produits/Produits'
import References from '../components/References/References'
import Footer from '../components/Footer/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Banner/>
            <Categories/>
            <Produits/>   
            <References/>  
            <Footer/>
        </>
    )
}