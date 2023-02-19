import React from 'react'
import styles from './Fornisseur.module.css'
export default function Fornisseur() {
  return (
    <section>
        <div className={styles.titre}>
            <h1 >Nos fournisseur</h1>
            <span></span>
        </div>
        <div className={styles.lesArticle}>

            <article>
                <img src='img/images (2).jpeg' alt=''/>
            </article>
            <article>
                <img src='img/images (3).jpeg' alt=''/>
            </article>
            <article>
                <img src='img/images (4).jpeg' alt=''/>
            </article>
            <article>
                <img src='img/logo (1).jpg' alt=''/>
            </article>
            <article>
                <img src='img/logo.jpg' alt=''/>
            </article>
            <article>
                <img src='img/logoAutoroute.jpg' alt=''/>
            </article>
            <article>
                <img src='img/téléchargement.jpeg' alt=''/>
            </article>

        </div>
    </section>
  )
}
