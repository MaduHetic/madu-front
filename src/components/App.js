import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashboardLayout from '../components/dashboardLayout'
import SidebarMenu from './sidebarMenu';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import ClientsList from '../pages/clients';
import ClientView from '../pages/clients/view';
import CompanyUpdate from '../pages/clients/clientsUpdate';
import PoiList from '../pages/poi';
import PoiView from '../pages/poi/view';
import PoiUpdate from '../pages/poi/poiUpdate';
import MapTest from '../pages/map';
import styled from 'styled-components';
import { Color } from '../styles/variables';
import { User } from '../core/user';
import ClientCreate from '../pages/clients/clientsCreation';
import PoiCreate from '../pages/poi/poiCreation';
import CreateEntity from '../pages/create/index';
import QuizzList from '../pages/quizz/index';
import QuizzCreation from '../pages/quizz/quizzCreation';

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
    overflow-y: auto;
`;

const App = () => {
  const getCurrentUser = User.getCurrentUser();
  const loggedIn = User.loggedIn();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      getCurrentUser()
    }
  }, [getCurrentUser]);

  return (
    <MainContent>
      <Router>
        {loggedIn && (<SidebarMenu />)}
        <PageContent loggedIn={loggedIn} id="pageContent">
          <Switch>
            <DashboardLayout exact path="/map" component={MapTest}  />
            <Route exact path="/" component={Login} />
            <DashboardLayout exact path="/dashboard" component={Dashboard}  />
            <DashboardLayout exact path="/clients" component={ClientsList}  />
            <DashboardLayout exact path="/clients/fiche/:id" component={ClientView}  />
            <DashboardLayout exact path="/point-d-interet" component={PoiList}  />
            <DashboardLayout exact path="/poi-create/:id" component={PoiCreate}  />
            <DashboardLayout exact path="/client-create/:id" component={ClientCreate}  />
            <DashboardLayout exact path="/client/fiche-edit/:id" component={CompanyUpdate}  />
            <DashboardLayout exact path="/create" component={CreateEntity}  />
            <DashboardLayout exact path="/point-d-interet/fiche/:id" component={PoiView}  />
            <DashboardLayout exact path="/point-d-interet/fiche-edit/:id" component={PoiUpdate}  />
            <DashboardLayout exact path="/quizz" component={QuizzList}  />
            <DashboardLayout exact path="/quizz/new" component={QuizzCreation}  />
          </Switch>
        </PageContent>
      </Router>
    </MainContent>
  );
}

export default App;
