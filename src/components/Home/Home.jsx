import React, { Component } from "react";
import styles from "./Home.module.css";
import "../../App.css";
import Botao from "../Botao/Botao";

class Home extends Component {

  render() {

    return (
      <section className={styles.homeCover}>
        {/* coloca-se o elemento que queremos animar dentro de um bloco do Animate e passamos as propriedades das animações que queremos - simples assim =) */}
        <h1 className={`${styles.mainTitle} ${styles.content}`}>Bons Drinks</h1>
        {/* <Botao text="clicar"/> */}
        

      </section>
    );

  }
}

export default Home;