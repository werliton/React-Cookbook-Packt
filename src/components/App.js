import React, { Component } from 'react';
import './App.css';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer'; 
import Header from '../shared/component/layout/Header'
import Numbers from './Numbers/Numbers'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Header title="Entendendo Pure Components" />
          <Content>
            <Numbers />
          </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
