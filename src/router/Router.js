import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigator from '../components/container/Navigator';
import HomePage from '../components/presentation/HomePage';
import MorePage from '../components/container/MorePage';
import AddMeasure from '../components/presentation/AddMeasure';
import Measurements from '../components/container/Measurements';
import Progress from '../components/container/Progress';
import LogInUser from '../components/presentation/LogInForm';
import SignUpForm from '../components/presentation/SignUpForm';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/measurement" component={HomePage} />
      <Route path="/add" component={AddMeasure} />
      <Route path="/more" component={MorePage} />
      <Route path="/track" component={Measurements} />
      <Route path="/login" component={LogInUser} />
      <Route path="/signup" component={SignUpForm} />
      <Route path="/progress/:measurementId" component={Progress} />
    </Switch>
    <Navigator />
  </BrowserRouter>
);

export default Router;
