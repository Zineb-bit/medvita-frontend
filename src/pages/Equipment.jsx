import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import SortingBar from '../components/SortingBar/SortingBar';
import ProductPage from '../components/Product page/ProductPage';
import Produits from '../components/Produits/Produits';
import References from '../components/References/References';
import Footer from '../components/Footer/Footer';

export default function Equipment() {
    return (
        <>
            <Navbar />

            {/* PAGE CONTAINER */}
            <div className="max-w-[1320px] mx-auto px-4 pt-10">

                {/* HEADER */}
                <div className="mb-8">
                    <h1 className="text-blue-700 text-sm uppercase">
                        ÉQUIPEMENTS HOSPITALIERS
                    </h1>
                    <p className="text-xl font-bold text-gray-700 mt-1">
                        Meilleure boutique en ligne pour les fournitures médicales et les équipements hospitaliers
                    </p>
                </div>

                {/* MAIN LAYOUT: SIDEBAR + CONTENT */}
                <div className="flex gap-6 items-start">
                    {/* Sidebar */}
                    <div className="w-[240px] shrink-0">
                        <Sidebar />
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="flex-1 flex flex-col gap-10">
                        <SortingBar />
                        <ProductPage />

                        {/* Produits récemment ajoutés */}
                        <div className="mt-4">
                            <Produits />
                        </div>

                        {/* Références section */}
                        <div className="mt-4">
                            <References />
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <div className="mt-20">
                <Footer />
            </div>
        </>
    );
}