import React, { Component } from 'react';
import './App.css';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer'; 
import Xss from './Xss/Xss';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Content>
            <Xss />
          </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
