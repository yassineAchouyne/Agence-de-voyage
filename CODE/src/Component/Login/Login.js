import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";

export default function Login() {
    const [connect,setConnect]=useState(true)
    const [inscrire,setInscrire]=useState(true)

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const HandelLogin = (e) =>{
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/api/login',{
        email,password
      })
    }
  return (
    <div>
      <header className={styles.menu}>
        <p>Contactz-vous à votre compte</p>
      </header>
      <br />
      <br />
      <br />
      <br />
      <section className={styles.login}>
        <article>
          <div className={styles.header}  onClick={()=>{setConnect(!connect);setInscrire(true)} }>
            <div>
              <img src="img/anmeldung.png" />
              <h4>Se connecter</h4>
            </div>
            <img src={connect?"img/down-chevron.png":"img/up-arrow.png"} />
          </div>

          <form className={styles.body} hidden={connect} onSubmit={HandelLogin} >
            <label className="w-100">
              Email :
              <input
                type={"text"}
                name="email"
                className="form-control mt-2"
                placeholder="Saisissez votre Email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </label>
            <label className="w-100">
              Mot de passe :
              <input
                type={"text"}
                onChange={(e)=>setPassword(e.target.value)}
                name="password"
                className="form-control mt-2"
                placeholder="********"
              />
            </label>
            <button type="submit" className="btn btn-primary w-100">Se connecter</button>
          </form>
        </article>

        <article>
          <div className={styles.header}  onClick={()=>{setConnect(true); setInscrire(!inscrire)}}>
            <div>
              <img src="img/anmeldung.png" />
              <h4>S'inscrire</h4>
            </div>
            <img src={inscrire?"img/down-chevron.png":"img/up-arrow.png"} />
          </div>

          <form className={styles.body} hidden={inscrire}>
            <label className="w-100">
            Nom :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="Saisissez votre Nom"
              />
            </label>
            <label className="w-100">
            Prénom :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="Saisissez votre Prénom"
              />
            </label>
            <label className="w-100">
            Téléphone :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="+212 000000000"
              />
            </label>
            <label className="w-100">
              Email :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="Saisissez votre Email"
              />
            </label>
            <label className="w-100">
              Mot de passe :
              <input
                type={"text"}
                className="form-control mt-2"
                placeholder="********"
              />
            </label>
            <button className="btn btn-primary w-100">S'INSCRIRE</button>
          </form>
        </article>
      </section>
    </div>
  );
}
