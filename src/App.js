import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


import { Provider } from 'react-redux';
import store from './store';

//components
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar title='Hacker News API' icon='fas fa-search'/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
