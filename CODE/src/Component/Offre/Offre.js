import React from 'react'
import styles from './Offre.module.css'
export default function Offre() {
  return ( 
    <section>
        <div className={styles.titre}>
            <h1 >Découvrez nos offres</h1>
            <span></span>
        </div>
        <div className={styles.LesArticle}>
          <article>
            <img src='./img/1442191.jpg'/>
            <p>
            Profitez de -10% sur tous les Horaires et Tarifs CTM pour vos tickets Aller-Retour partout au Maroc.
            </p>
            <a href=''>
            J'achète
            </a>
          </article>
          <article>
            <img src='./img/1442191.jpg'/>
            <p>
            Profitez de -10% sur tous les Horaires et Tarifs CTM pour vos tickets Aller-Retour partout au Maroc.
            </p>
            <a href=''>
            J'achète
            </a>
          </article>

          <article>
            <img src='./img/1442191.jpg'/>
            <p>
            Profitez de -10% sur tous les Horaires et Tarifs CTM pour vos tickets Aller-Retour partout au Maroc.
            </p>
            <a href=''>
            J'achète
            </a>
          </article>
        </div>
    </section>
  )
}
