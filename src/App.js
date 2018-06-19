import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotosList from './PhotosList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Photo app</h1>
        </header>

        <PhotosList />
      </div>
    );
  }
}

export default App;
