import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigator from '../components/container/Navigator';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route />
      </Switch>
      <Navigator />
    </BrowserRouter>
  );
};

export default Router;
