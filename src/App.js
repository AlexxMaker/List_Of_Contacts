import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader/AppHeader.js'
import LeftSide from './AppBody/LeftSide/LeftSide.js'
import RightSide from './AppBody/RightSide/RightSide.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header-wrapper'>
          <div className="container">
            <AppHeader /> 
          </div>
        </div>
        <div className="container">
          <LeftSide />
          <RightSide />
        </div> 
      </div>
    );
  }
}

export default App;
