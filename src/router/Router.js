import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigator from '../components/container/Navigator';
import HomePage from '../components/presentation/HomePage';
import MorePage from '../components/container/MorePage';
import AddMeasure from '../components/presentation/AddMeasure';
import Measurements from '../components/container/Measurements';
import Progress from '../components/container/Progress';
import LogInUser from '../components/presentation/LogInForm';
import SignUpForm from '../components/presentation/SignUpForm';

const Router = () => (
  <>
    <Switch>
      <Route exact path="/measurement" component={HomePage} />
      <Route exact path="/add" component={AddMeasure} />
      <Route exact path="/more" component={MorePage} />
      <Route exact path="/track" component={Measurements} />
      <Route exact path="/login" component={LogInUser} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/progress/:measurementId" component={Progress} />
    </Switch>
    <Navigator />
  </>
);

export default Router;
