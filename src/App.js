import React from 'react';
import { Formik } from 'formik';

import { User } from './core/user';

function App() {
  const signIn = User.signIn();
  return (
    <div className="App">
      <Formik
      initialValues={{ email: 'admin@admin.com', password: 'admin' }}
      onSubmit={values => {signIn(values)}}
      >
      {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="login-input"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <button className="login-submit" type="submit" disabled={isSubmitting}>CONNEXION</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
