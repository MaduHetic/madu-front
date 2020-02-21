import React, { useLayoutEffect, useEffect, Fragment } from 'react';
import { Route, withRouter, useLocation } from 'react-router-dom';
import SearchBar from "../components/searchBar/index";
import { User } from '../core/user';
import { Company } from "../core/company";
import { Poi } from "../core/poi";
import { Stats } from "../core/statsDashboard";

const DashboardLayout = ({
  history,
  component: Component,
  ...rest
}) => {
  const loggedIn = User.loggedIn();
  const getCompanies = Company.getAllCompanies();
  const getPoi = Poi.getAllPoi();
  const getStats = Stats.getStats();
  const { pathname } = useLocation();
  
  useLayoutEffect(() => {
    const user = localStorage.getItem('user');
    if (!loggedIn && !user) { history.push('/'); }
    getCompanies();
    getPoi();
    getStats();
  }, [getCompanies, getPoi, getStats, history, loggedIn]);

  useEffect(() => {
    const pageContent = document.getElementById('pageContent');
    pageContent.scrollTo(0, 0);
  }, [pathname])

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Fragment>
          {loggedIn && (
            <Fragment>
              <SearchBar />
              <Component {...matchProps} {...rest} />
            </Fragment>
          )}
        </Fragment>
      )}
    />
  );
}

export default withRouter(DashboardLayout);