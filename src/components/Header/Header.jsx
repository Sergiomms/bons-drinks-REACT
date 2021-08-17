import React, { Component } from "react";
import styles from "./header.module.css"
import { Link } from "react-router-dom"

class Header extends Component {

    render() {

        return <header className={styles.header}>

            <nav className={styles.tagNav}>

                <Link to="/drinks" className={styles.menuItem}>Drinks</Link>
                <Link to="/sobre" className={styles.menuItem}>Sobre Nós</Link>
                <Link to="/" className={styles.logo}>Bons Drinks</Link>
                <Link to="time" className={styles.menuItem}>Nosso Time</Link>
                <Link to="contato" className={styles.menuItem}>Contato</Link>

            </nav>
        </header>
    }
}

export default Header;