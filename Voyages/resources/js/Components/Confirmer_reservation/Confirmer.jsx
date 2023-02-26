import React from "react";
import styles from "./Confiremer.module.css";
import Footer from '../Footer/Footer'
export default function Confirmer() {
  return (
    <>
      <header className={styles.menu}>
        <nav>
          <img src="./img/pngwing.com.png" />
          <h3>
            Votre voyage de <span>Safi</span> à <span>Casablanca</span>
          </h3>
          <h3>Lundi 9 Janvier 2023</h3>
        </nav>
      </header>
      <br />
      <br />
      <br />
      <br />

      <main className={styles.confirm}>
        <aside>
          <article>
            <h3>Détails du prix</h3>
            <div>
              <p>Prix unitaire </p>
              <span>80DH</span>
            </div>
            <div>
              <p>Frais de service </p>
              <span>5DH</span>
            </div>
            <div>
              <h4>Prix Total</h4>
              <span className={styles.prix}>85DH</span>
            </div>
          </article>
          <article>
            <h3>J'ai un code promo</h3>
            <div>
              <p>Entrez votre code promo</p>
            </div>
            <div>
              <input type={"text"} placeholder="Code Promo" />
            </div>
          </article>
        </aside>
        <section>
          <article className={styles.article}>
            <img className={styles.tmp} src="img/logo.jpg" />
            <div>
              <span className={styles.span}>autorout</span>
              <h1>
                10:00<div className={styles.line}></div>
                <span>03:30</span>
                <div className={styles.line}></div>
                13:30
              </h1>
              <p>lundi 9 janvier 2023</p>
            </div>
          </article>
          <article>
            <h1>
              Sélectionner votre moyen de paiement parmis les choix suivants:
            </h1>
            <div className={styles.div}>
              <label>
                <input type={"radio"} checked name="pay" />
                Carte Bancaire
              </label>
              <div>
                <img src="img/payment-cards.png" />
              </div>
            </div>
            <div className={styles.div}>
              <label>
                <input type={"radio"} name="pay" />
                PayPal
              </label>
              <div>
                <img src="img/download-removebg-preview (2).png" />
              </div>
            </div>
            <label>
              <input type={"checkbox"} />
              J'ai lu et j'accepte <a href=""> les conditions générales de vente</a>, notamment
              la mention relative à la protection des données personnelles.
            </label>
            <label>
              <input type={"checkbox"} />
              J'accepte de recevoir des offres promotionnelles.
            </label>
            <div className={styles.button}><a href={"/paiment"}><button>Confirmer</button></a></div>
          </article>
        </section>
      </main>
      <Footer/>
    </>
  );
}
