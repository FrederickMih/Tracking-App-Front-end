import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigator from '../components/container/Navigator';
import HomePage from '../components/presentation/HomePage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/measurement" component={HomePage} />
    </Switch>
    <Navigator />
  </BrowserRouter>
);

export default Router;
