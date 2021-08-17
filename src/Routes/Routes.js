import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Drinks from '../components/Drinks/Drinks';
import Home from "../components/Home/Home"
import Sobre from "../components/Sobre/Sobre"

export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/sobre">
                <Sobre />
            </Route>

            <Route exact path="/drinks">
                <Drinks />
            </Route>
        </Switch>
    )
}