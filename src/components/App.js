import React, { Component } from 'react';
import './App.css';
import Header from '../shared/component/layout/Header';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer';
import Todo from './Todo/Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Codejobs" url=""/>
        <Content>
            <Todo />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
