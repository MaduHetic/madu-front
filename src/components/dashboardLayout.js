import React, { useLayoutEffect, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import SearchBar from "../components/searchBar/index";
import { User } from '../core/user';
import { Company } from "../core/company";
import { Poi } from "../core/poi";

const DashboardLayout = ({
  history,
  component: Component,
  ...rest
}) => {
  const loggedIn = User.loggedIn();
  const getCompanies = Company.getAllCompanies()
  const getPoi = Poi.getAllPoi()

  useLayoutEffect(() => {
    const user = localStorage.getItem('user');
    if (!loggedIn && !user) { history.push('/'); }
    getCompanies();
    getPoi();
  }, [getCompanies, getPoi, history, loggedIn]);

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