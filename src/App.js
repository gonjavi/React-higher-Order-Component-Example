import React, { Component } from 'react';
import ClickCounter from './components/ClickCounter';
import './App.css';
import HoverCounter from './components/HoverCounter';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <ClickCounter name="Karol" />
        <HoverCounter name="Andres" />
      </div>
    )
  }
}

export default App;
