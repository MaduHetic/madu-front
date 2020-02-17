import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from '../pages/login';
import SidebarMenu from './SidebarMenu';
import Dashboard from '../pages/Dashboard/index';
import MapTest from '../pages/Map/index';
import styled from 'styled-components';
import { Color } from '../styles/variables';
import { User } from '../core/user';
import CompanyList from '../pages/company';
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

  // useEffect(() => {
  //   const user = localStorage.getItem('user');
  //   if (!loggedIn || !user) { history.push('/login'); }
  // }, [loggedIn]);

  return (
    <MainContent>
      <Router>
        {loggedIn && (<SidebarMenu />)}
        <PageContent loggedIn={loggedIn}>
          <Switch>
            <Route exact path="/map" component={MapTest} />
            <Route exact path="/login" component={Login} history={history} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/clients" component={CompanyList} />
            <Route exact path="/point-d-interet" component={poiCreate} />
          </Switch>
        </PageContent>
      </Router>
    </MainContent>
  );
}

export default App;
