import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomePage name={'Narcos'}/>
        </header>
      </div>
    );
  }
}

export default App;
