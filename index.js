import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './app/components/Home';
import Recursion from './app/components/Recursion';
import UserForm from './app/components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='recursion' component={Recursion} />
    <Route path='user_form' component={UserForm} />
  </Router>,
  document.getElementById('container')
);
