import React, { Component } from 'react';
import './App.css';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer'; 
import Numbers from './Numbers/Numbers'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Content>
            <Numbers />
          </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
