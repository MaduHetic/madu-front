import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExampleComponents from '../pages/Example-components';
import Dashboard from '../pages/Dashboard';

const App = () => {
  return (
    <div>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={ExampleComponents} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
