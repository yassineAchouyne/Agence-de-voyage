import React ,{useState,useEffect}from "react";
import styles from './NavBar.module.css'
import { Link } from "react-router-dom";
export default function NavBar(props) {
  
  if(props.scrol)var st={backgroundColor:"#4A739A"}
  return (
    <header  className={styles.menu} style={st}>
      <img src="./img/pngwing.com.png"/>
      <nav>
        <a href="/logine" className={styles.connecter}>SE CONNECTER</a>
        <a>
          <img src="./img/pngwing.com (1).jpg"/>
        </a>
      </nav>
    </header>
  );
}
