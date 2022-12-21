import React ,{useState,useEffect}from "react";
import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Interface from "./Component/Interface/Interface";
import Education from "./Component/Education/Education";
import Offre from "./Component/Offre/Offre";

function App() {
  const [scrol,setScrol]=useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>10)setScrol(true)
      else setScrol(false)
    })
    console.log(scrol)
  },[])
  return (
    <main>
      <NavBar scrol={scrol}/>
      <Interface/>
      <Education/>
      <Offre/>
    </main>
  );
}

export default App;
