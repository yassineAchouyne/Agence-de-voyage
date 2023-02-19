import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return ( 
    <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.footer_col}>
              <h4>Nos servises</h4>
              <ul>
                <li><a href="#">Location d'autobus</a></li>
                <li><a href="#">Info sur les transporteurs</a></li>
                <li><a href="#">Info sur les villes et les destination</a></li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>Aide</h4>
              <ul>
             <li><a href="#">Qui Sommes-Nous?</a></li>
                <li><a href="">Contactez-nous</a></li>
                <li><a href="">Questions courantes</a></li>
                <li><a href="">Méthodes de payement</a></li>
                <li><a href="">Vidéo explicative</a></li>
              </ul>
            </div>
            <div className={styles.footer_col}>
           <h4>Conditions et consignes</h4>
              <ul>
             <li><a href="#">Conditions d'utilisation</a></li>
                <li><a href="">Garntie de remboursemant</a></li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>Suivez-nous</h4>
              <div className={styles.social_links}>
                <a href="#"><img src='img/facebook.png'/></a>
                <a href="#"><img src='img/twitter.png'/></a>
                <a href="#"><img src='img/instagram.png'/></a>
                <a href="#"><img src='img/linkedin.png'/></a>
              </div>
            </div>
          </div>
        </div>
        </footer>
  )
}
