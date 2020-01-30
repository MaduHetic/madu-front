import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExampleComponents from '../pages/Example-components';
import { createBrowserHistory } from 'history';
import Login from '../pages/login';

import { User } from '../core/user';

const history = createBrowserHistory();

const App = () => {
  const getCurrentUser = User.getCurrentUser();

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser]);

  return (
    <div>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={ExampleComponents} />
            <Route path="/login" component={Login} history={history} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
