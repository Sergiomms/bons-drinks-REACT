import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import Formulario from './components/Form/Formulario';
import Botao from './components/Botao/Botao'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';

class App extends Component {

  render() {

    return (

      <div className="grid">
        <BrowserRouter>
          <Header />

          <Routes />
          {/* <Route path="/sobre"><Sobre /></Route> */}
          {/* <Formulario/> */}
          {/* <Botao text="teste" /> */}

          <Footer />
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
