import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigator from '../components/container/Navigator';
import HomePage from '../components/presentation/HomePage';
import MorePage from '../components/container/MorePage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/measurement" component={HomePage} />
      <Route exact path="/more" component={MorePage} />
    </Switch>
    <Navigator />
  </BrowserRouter>
);

export default Router;
