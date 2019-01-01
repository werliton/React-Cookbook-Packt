import React from 'react';
import './App.css';
import Content from './Home/Content';
import Footer from '../shared/component/layout/Footer'; 
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const App = ({children}) =>(
<div className="App">
      <Helmet 
        title="Routing"
        />
      <Content>
          {children}
      </Content>
    <Footer />
  </div>
) 
App.propTypes = {
  children: PropTypes.element
}
export default App;
