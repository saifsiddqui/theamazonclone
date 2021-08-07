import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Checkout from './Checkout';

const App = () =>{
  return (
    <>
    <Switch>
      <Route exact path="/" >
        <Header />
        <Banner /> 
      </Route>
      <Route path="/checkout" >
        <Header />
        <Checkout />
      </Route>
      <Route path="/login" >
        <h1>WORKING</h1>
      </Route>
    </Switch>
    </>
  )
}

export default App;

