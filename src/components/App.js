import React, { Component } from 'react';
import './App.css';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer'; 
import Notes from './Notes/Notes';
import { notes1, notes2 } from '../components/Notes/data'

class App extends Component {

  constructor(){
    super()
    this.state = {
      notes: notes1
    }
  }
  // Depois de 10 segundos (10000 milisegundos) no concatenamos os dados na nota1 com os da nota2
  componentDidMount(){
    setTimeout(() => {console.log('this is timeOut');
    
      this.setState({
        notes: [...this.state.notes, ...notes2]
      })
    }, 1000);
  }
  

  render() {
    return (
      <div className="App">
          <Content>
              <Notes notes={this.state.notes}/>
          </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
