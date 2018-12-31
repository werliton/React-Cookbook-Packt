import React, { Component } from 'react';
import './App.css';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer'; 
import Animation from './Animation/Animation'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Content>
            <Animation />
          </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
