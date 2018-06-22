import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotosList from './PhotosList';
import Photo from './Photo';
import { Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Photo app</h1>
        </header>


        <Switch>

        <Route path="/photo" component={PhotosList} />
        <Route path="/photo/:id" component={Photo} />

        </Switch>
        </div>

    );
  }
}

export default App;
