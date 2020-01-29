import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExampleComponents from '../pages/Example-components';
import Test from './test';

const App = () => {
  return (
    <div>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={ExampleComponents} />
            <Route path="/test" component={Test} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
