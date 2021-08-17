import React, { Component } from "react";
import styles from "./Sobre.module.css";
import sobrePic from "../../imagens/sobreNos.jpg";
import Botao from "../Botao/Botao";

class Sobre extends Component {

    render() {
        return (
            <section className={`${styles.innerGrid} ${styles.scontent} ${styles.animeLeft}`}>
                {/* concatenando classe do app.css com o module - como estamos passando a variável style temos que abrir as chaves {} para passar a string e a variavel e dar espaço para começar a string da classe css para não ficar tudo colado*/}
                <h1 className={`${styles.title} ${styles.title}`}>Sobre Nós</h1>
                <img src={sobrePic} className={styles.col2img} alt="Cocktails"></img>
                <p className={styles.aboutText}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                    quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur.
                </p>

                <Botao text='clicar'/>
            </section>
        )
    }
}

export default Sobre;