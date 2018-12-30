import React, { Component } from 'react';
import './App.css';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer'; 
import Coins from './CryptoCoin/Coins';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Content>
              <Coins />
          </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
