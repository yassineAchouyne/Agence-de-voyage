import React, { useState, useEffect } from "react";
import NavBar from "@/Components/NavBar/NavBar";
import Interface from "@/Components/Interface/Interface";
import Education from "@/Components/Education/Education";
import Offre from "@/Components/Offre/Offre";
import Fornisseur from "@/Components/Fornisseur/Fornisseur";
import Footer from "@/Components/Footer/Footer";
function App() {
  const [scrol, setScrol] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) setScrol(true);
      else setScrol(false);
    });
  }, []);

  return (
            <main>
              <NavBar scrol={scrol} />
              <Interface />
              <Education />
              <Offre />
              <Fornisseur />
              <Footer />
            </main>
  );
}

export default App;
