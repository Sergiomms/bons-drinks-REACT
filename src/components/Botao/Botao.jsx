import React, { Component } from "react";
import styles from "./botao.module.css"

class Botao extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
        this.state = { disable: false }
        console.log("Fui inicializado")
    }
    // mudaEstado = () => {
    //     this.setState({ disable: true })
    //     setTimeout(() => {
    //         this.setState({ disable: false })
    //     }, 3000)
    // }
    onClick = (e) => {
        e.preventDefault()
        console.log("Fui clicado")
        this.setState({disable:true})
        setTimeout(() =>{
            this.setState({disable:false})
        }, 3000)
    }
    componentDidMount = () => {
        console.log("Fui Montado")
    }
    componentDidUpdate = () => {
        console.log("Fui atualizado")
    }
    render() {

        return (
            <div>
                {console.log("Fui renderizado")}
                <button className={styles.estiloBotao}
                    onClick={this.onClick} /*onClick={this.mudaEstado}*/>{this.text}</button>
            </div>
        )
    }
}

export default Botao