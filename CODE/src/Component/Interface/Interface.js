import React,{useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Interface.module.css";
export default function Interface() {
    
   

  return (
    <section className={styles.interface}>
      <div>
        <h1 className={styles.title}>
          Achetez vos tickets d'autocar au meilleur prix!
        </h1>
        <form>
          <select>
            <option selected disabled>------Vill du départ------</option>
            <option value="safi">SAFI</option>
          </select>

          <select>
            <option>------Vill d'arriveé------</option>
            <option value="safi">SAFI</option>
          </select>


          <input type="date"  />

          <Link to={'/resultat'} ><input type="submit" value="RECHERCHER" style={{color:"#fff"}}  className={styles.recherch}/></Link>
          
        </form>
        <h3 className={styles.soustitre}>Destinations les plus recherchées :</h3>
        <div className={styles.plusRecherch}>
            <a href="">ASFI→AGADIR</a>
            <a href="">ASFI→CASABLANCA</a>
            <a href="">ASFI→RABAT</a>
            <a href="">ASFI→TANGER</a>
            <a href="">ASFI→FES</a>
        </div>
      </div>
    </section>
  );
}
