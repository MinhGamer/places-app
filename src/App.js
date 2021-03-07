import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import User from './user/pages/User';
import NewPlace from './place/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Switch>
          <NewPlace path='/places/new' exact component={User} />
          <Route path='/' exact component={User} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
