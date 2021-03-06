import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import User from './user/pages/User';
import NewPlace from './place/pages/NewPlace';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <NewPlace path='/places/new' component={User} />
        <Route path='/' exact component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
