import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigator from './Navigator';
import Registration from '../presentation/auth/Registration';
import Login from '../presentation/auth/Login';
import MorePage from './MorePage';
import AddMeasure from '../presentation/AddMeasure';
import Track from './Track/Track';
import Progress from './Progress';
import TrackDetails from './Track/TrackDetail';
import HomePage from '../presentation/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/more" component={MorePage} />
          <Route exact path="/add" component={AddMeasure} />
          <Route exact path="/track" component={Track} />
          <Route exact path="/track_details" component={TrackDetails} />
          <Route exact path="/progress" component={Progress} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
        <Navigator />
      </BrowserRouter>
    </>
  );
}

export default App;
