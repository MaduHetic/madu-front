import React, { useLayoutEffect, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { User } from '../core/user';

const DashboardLayout = ({
  history,
  component: Component,
  ...rest
}) => {
  const loggedIn = User.loggedIn();

  useLayoutEffect(() => {
    const user = localStorage.getItem('user');
    if (!loggedIn && !user) { history.push('/'); }
  }, [history, loggedIn]);

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Fragment>
          {loggedIn && <Component {...matchProps} {...rest} />}
        </Fragment>
      )}
    />
  );
}

export default withRouter(DashboardLayout);