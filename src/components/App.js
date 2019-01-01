import React, { Component } from 'react';
import './App.css';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer'; 
import Helmet from 'react-helmet'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Content>
            <Helmet 
              title="Título usando Helmet"
              meta={[
                { name:'title', content:'Título usando Helmet'},
                { name:'description', content:'Esta receita é sobre atualizar titulo usando esse pacote Helmet'},
              ]}
              />
          </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
