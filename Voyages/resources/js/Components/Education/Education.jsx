import React from 'react'
import styles from './Education.module.css'

export default function Education() {
  return (
    <section className={styles.education}>
        <div className={styles.titre}>
            <h1 >Agence de voyage online</h1>
            <span></span>
        </div>
        <div className={styles.info}>
            <p>autobus.ma vous permet de chercher, comparer et acheter votre billet d’autocar en espèces ou par carte bancaire, des différentes sociétés de transport.</p>
        </div>
        <div className={styles.partee}>
            <article>
                <img src='./img/number-one.png'/>
                <div>
                    <h3>Choisir</h3>
                    <p>Trouver l’offre qui vous convient.</p>
                </div>
            </article>
            <hr/>
            <article>
                <img src='./img/number-2.png'/>
                <div>
                    <h3>Réserver</h3>
                    <p>Choisissez votre siège, et payer en ligne par votre carte bancaire ou en espèces.</p>
                </div>
            </article>
            <hr/>
            <article>
                <img src='./img/number-3.png'/>
                <div>
                    <h3>Embarquer</h3>
                    <p>RDV à l’adresse du départ avec votre code du ticket !</p>
                </div>
            </article>
        </div>
    </section>
  )
}
