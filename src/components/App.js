import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Header from '../shared/component/layout/Header';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Codejobs" url=""/>
        <Content>
            <Home />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
