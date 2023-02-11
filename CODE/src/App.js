import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
import Interface from "./Component/Interface/Interface";
import Education from "./Component/Education/Education";
import Offre from "./Component/Offre/Offre";
import Fornisseur from "./Component/Fornisseur/Fornisseur";
import Footer from "./Component/Footer/Footer";
import Resultat from "./Component/Resultat_de_recherche/Resultat";
function App() {
  const [scrol, setScrol] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setScrol(true);
      else setScrol(false);
    });
    console.log(scrol);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <NavBar scrol={scrol} />
              <Interface />
              <Education />
              <Offre />
              <Fornisseur />
              <Footer />
            </main>
          }
        />
        <Route path="/resultat" element={<Resultat/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
