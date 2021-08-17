import React, {Component} from "react";
import styles from './footer.module.css'

class Footer extends Component{

    render(){

        return <footer className={styles.estiloRodape}>

            <p className={styles.rodape2}>Todos os direitos reservados - Sergio T5 Resilia {new Date().getFullYear()}</p>
            
        </footer>
    }
}

export default Footer