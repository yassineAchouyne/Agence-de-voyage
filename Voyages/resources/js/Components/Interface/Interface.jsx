import React, { useState } from "react";
import styles from "./Interface.module.css";
export default function Interface() {
    return (
        <section
            className={styles.interface}
            style={{
                background:
                    "linear-gradient(var(--blue2), rgba(0, 0, 0, 0.5)100%),url(img/6c92f22733569a4c81af7b84648f2f80b7d55030.jpeg) ",
            }}
        >
            <div>
                <h1 className={styles.title}>
                    Achetez vos tickets d'autocar au meilleur prix!
                </h1>
                <form action="resultat">
                    <div>
                        <select>
                            <option selected disabled>
                                ------Vill du départ------
                            </option>
                            <option value="safi">SAFI</option>
                        </select>

                        <select>
                            <option>------Vill d'arriveé------</option>
                            <option value="safi">SAFI</option>
                        </select>
                    </div>
                    <div>
                        <input type="date" style={{width:"100%"}} className={styles.date}/>
                    </div>

                    <div>

                        <input
                            type="submit"
                            value="RECHERCHER"
                            style={{ color: "#fff",width:"100%" }}
                            className={styles.recherch}
                        />
                    </div>
                </form>
                <h3 className={styles.soustitre}>
                    Destinations les plus recherchées :
                </h3>
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
