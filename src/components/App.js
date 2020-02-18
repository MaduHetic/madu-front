import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardLayout from '../components/dashboardLayout'
import Login from '../pages/login';
import Dashboard from '../pages/Dashboard';
import CompanyList from '../pages/Company';
import SidebarMenu from './SidebarMenu';
import MapTest from '../pages/Map/index';
import styled from 'styled-components';
import { Color } from '../styles/variables';
import { User } from '../core/user';
import poiCreate from '../pages/poi';

const history = createBrowserHistory();

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
    width: ${props => props.loggedIn ? 'calc(100% - 220px)' : '100%'};
    background: ${Color.lightgrey};
`;

const App = () => {
  const getCurrentUser = User.getCurrentUser();
  const loggedIn = User.loggedIn();

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser]);

  return (
    <MainContent>
      <Router>
        {loggedIn && (<SidebarMenu />)}
        <PageContent loggedIn={loggedIn}>
          <Switch>
            <DashboardLayout exact path="/map" component={MapTest}  />
            <Route exact path="/" component={Login} />
            <DashboardLayout exact path="/dashboard" component={Dashboard}  />
            <DashboardLayout exact path="/clients" component={CompanyList}  />
            <DashboardLayout exact path="/point-d-interet" component={poiCreate}  />
          </Switch>
        </PageContent>
      </Router>
    </MainContent>
  );
}

export default App;
