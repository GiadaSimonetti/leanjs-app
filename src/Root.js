import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = () => (
  <Router>
      <Route path='/' component={App} />
  </Router>
);

export default Root;
