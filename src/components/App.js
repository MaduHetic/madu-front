import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExampleComponents from '../pages/Example-components';

const App = () => {
  return (
    <div>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={ExampleComponents} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
