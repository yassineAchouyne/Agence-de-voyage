import React from "react";
import styles from "./Resultat.module.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
export default function Resultat() {
  return (
    <>
      <header className={styles.menu}>
        <nav>
          <img src="./img/pngwing.com.png" />
          <h3 href="" className={styles.connecter}>
            les voyage disponible
          </h3>
          <a>
            <img className={styles.img} src="./img/icons8-filter-64.png" />
          </a>
        </nav>
      </header>
      <br />
      <br />
      <br />
      <br />
      <section>
        <h1 className={styles.titre}>SAFI → CASABLANCA</h1>

        <div className={styles.lesArticle}>
          <article>
            <div>
              <img className={styles.tmp} src="img/logo.jpg" />
              <p className={styles.time}>10:00 → 13:30</p>
              <dir><span>autorout</span></dir>
            </div>
            <div>
              <label>N°  Plase : 
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </label>
              <img className={styles.info} src="img/info.png"/>
              <div>
                <p>prix par personne: <span>80 </span>DH</p>
                <Link to={'/confirm'}><button>reserver</button></Link>
              </div>
            </div>
          </article>

          <article>
            <div>
              <img className={styles.tmp} src="img/logoAutoroute.jpg" />
              <p className={styles.time}>11:30 → 15:10</p>
              <dir><span>ordinaire</span></dir>
            </div>
            <div>
              <label>N°  Plase : 
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </label>
              <img className={styles.info} src="img/info.png"/>
              <div>
                <p>prix par personne: <span>90 </span>DH</p>
                <button>reserver</button>
              </div>
            </div>
          </article><article>
            <div>
              <img className={styles.tmp} src="img/téléchargement.jpeg" />
              <p className={styles.time}>15:00 → 17:20</p>
              <dir><span>ordinaire</span></dir>
            </div>
            <div>
              <label>N°  Plase : 
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </label>
              <img className={styles.info} src="img/info.png"/>
              <div>
                <p>prix par personne: <span>75 </span>DH</p>
                <button>reserver</button>
              </div>
            </div>
          </article><article>
            <div>
              <img className={styles.tmp} src="img/images (2).jpeg" />
              <p className={styles.time}>16:30 → 20:00</p>
              <dir><span>autorout</span></dir>
            </div>
            <div>
              <label>N°  Plase : 
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </label>
              <img className={styles.info} src="img/info.png"/>
              <div>
                <p>prix par personne: <span>95 </span>DH</p>
                <button>reserver</button>
              </div>
            </div>
          </article>
        </div>
      </section>
<Footer/>
    </>
  );
}
