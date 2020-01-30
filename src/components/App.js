import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import Dashboard from '../pages/Dashboard/index';
import Clients from '../pages/Clients/index';
import styled from 'styled-components';
import { Color } from '../styles/variables';

const MainContent = styled.main`
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PageContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: calc(100% - 220px);
    background: ${Color.lightgrey};
`;

const App = () => {
  return (
    <MainContent>
      <Router>
        <SidebarMenu />
        <PageContent>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/clients" component={Clients} />
          </Switch>
        </PageContent>
      </Router>
    </MainContent>
  );
}

export default App;
