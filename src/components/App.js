import React, { Component } from 'react';
import './App.css';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer';
import Timer from './Pomodoro/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Content>
              <Timer />
          </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
