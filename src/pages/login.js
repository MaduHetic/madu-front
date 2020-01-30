import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";

import { User } from '../core/user';

const SInput = styled(TextField)`
  margin: 1rem 0 !important;
`

const Sform = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 10%;
`

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Sbanner = styled.div`
  background: #FFC107;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 30%;
  color: #FFF;
  font-size: 8rem;
`

const STitle = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
`

const SButton = styled(Button)`
  background-color: #FFC107 !important;
  border-radius: 2rem !important;
`;

const Login = ({ history }) => {
  const signIn = User.signIn();
  const loggedIn = User.loggedIn();

  useEffect(() => {
    if (loggedIn) { history.push('/') }
  }, [loggedIn, history])
  return (
    <SContainer>
      <Sbanner>
        Madou
      </Sbanner>
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
          <Sform onSubmit={handleSubmit}>
            <STitle>Connexion</STitle>
            <SInput
              type="email"
              name="email"
              variant="outlined"
              label="Entrer votre e-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="login-input"
            />
            <SInput
              type="password"
              name="password"
              variant="outlined"
              label="Entrer votre mot de passe"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <Link to="/">Mot de passe oublié ?</Link>
            <SButton className="login-submit" type="submit" disabled={false} color="#FFC107">CONNEXION</SButton>
          </Sform>
        )}
      </Formik>
    </SContainer>
  );
}

export default Login;
