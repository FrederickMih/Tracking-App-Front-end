import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigator from '../components/container/Navigator';
import HomePage from '../components/presentation/HomePage';
import MorePage from '../components/container/MorePage';
import AddMeasure from '../components/presentation/AddMeasure';
import Measurements from '../components/container/Measurements';
import Progress from '../components/container/Progress';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/measurement" component={HomePage} />
      <Route exact path="/add" component={AddMeasure} />
      <Route exact path="/more" component={MorePage} />
      <Route exact path="/tracker" component={Measurements} />
      <Route path="/progress/:measurementId" component={Progress} />
    </Switch>
    <Navigator />
  </BrowserRouter>
);

export default Router;
