import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import BrandPage from './pages/Brand';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Register';

import './i18n';
import './index.css';
import ProductDetail from './pages/Product/ProductDetail';
const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/login' component={LoginPage} />
      <Route path='/brand' component={BrandPage} />
      <Route path='/register' component={SignupPage} />
      <Route path='/product' component={ProductDetail} />
    </Switch>
  </Router>
);
export default App;
