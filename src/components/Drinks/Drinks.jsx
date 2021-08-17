import React, { Component } from 'react';

class Drinks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        const api = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
        fetch(api)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then((res) => {
                this.setState({ data: res.drinks })
            })
    }
    render() {
        return (
            <div>
                <h1>DRINKS</h1>
                <ul>
                    {this.state.data && this.state.data.map((item, i) => {
                        return <li key={i}>{item.strDrink}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Drinks
