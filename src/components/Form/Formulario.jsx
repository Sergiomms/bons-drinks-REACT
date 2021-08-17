import React, { Component } from "react";
import styles from "./form.module.css"
import Botao from "../Botao/Botao";

class Formulario extends Component {
    render() {
        return <form className={styles.formStyle}>
            <fieldset>
                <legend>Fruit juice size</legend>
                <p>
                    <input type="text" name="size" id="size_1" />
                    <label for="size_1">Small</label>
                </p>
                <p>
                    <input type="text" name="size" id="size_2" />
                    <label for="size_2">Medium</label>
                </p>
                <p>
                    <input type="text" name="size" id="size_3" />
                    <label for="size_3">Large</label>
                </p>
                <Botao text="teste2"/>
            </fieldset>
        </form>
    }
}

export default Formulario