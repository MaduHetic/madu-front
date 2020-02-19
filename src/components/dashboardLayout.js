import React, { useLayoutEffect, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import SearchBar from "../components/SearchBar/index";
import { User } from '../core/user';
import { Poi } from '../core/poi';
import { Company } from '../core/company';

const DashboardLayout = ({
  history,
  component: Component,
  ...rest
}) => {
  const loggedIn = User.loggedIn();
  const getPoi = Poi.getAllPoi();
  const getCompany = Company.getAllCompanies();

  useLayoutEffect(() => {
    const user = localStorage.getItem('user');
    if (!loggedIn && !user) { history.push('/'); }
    getPoi();
    getCompany();
  }, [history, loggedIn]);

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