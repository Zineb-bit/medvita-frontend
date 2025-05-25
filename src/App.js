import React from "react";
// import Home from "./pages/Home";
//import Equipment from "./pages/Equipment";
 import Products from "./pages/Products";
// import Apropos from "./pages/Apropos";
// import ContactezNous from "./pages/ContactezNous"; // 👈 Correspond au fichier ContactezNous.js
//import PaymentMethod from "./pages/PaymentMethod";

function App() {
  return (
    <div>
      {/* Pages désactivées */}
      {/* <Home /> */}
      { /*<Equipment /> */}
      { <Products /> }
      {/* <Apropos /> */}
      {/* <ContactezNous /> */}

      {/* ✅ Page affichée */}
      {/*<PaymentMethod />*/}
    </div>
  );
}

export default App;
