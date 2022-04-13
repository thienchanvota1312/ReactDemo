import React from 'react';
import Products from './components/Products';
import Customer from './components/Customer';
import Rentals from './components/Rentals';
import LoginForm from './components/LoginForm';
import { Route, Redirect, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';

function App() {
  return (
    <React.Fragment>
    <NavBar/> 
    <div className="App"> 
    <Switch>
    <Route path="/products" component={Products} />
    <Route path="/customer" component={Customer} />
    <Route path="/rentals" component={Rentals} />
    <Route path="/loginform" component={LoginForm} />
    <Redirect from='/' to="/products" />
    </Switch>
    </div>
    </React.Fragment>
  );
}

export default App;
