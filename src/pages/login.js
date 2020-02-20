import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Color, Font, Breakpoint } from '../styles/variables';
import LogoMobile from '../images/Logo-white.svg';
import CustomButton from '../components/button/button';

import background from '../images/background.jpg'
import Logo from '../images/maduLogo.png'

import { User } from '../core/user';

const LogoContainer = styled.div`
  width: 23rem;
  height: auto;
  & img {
    width: 100%;
    height: auto;
  }
`

const SContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
  & > div {
    padding: 30px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .login-banner {
    max-width: 494px;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    @media screen and (max-width: ${Breakpoint.m}) {
      display: none;
    }
  }
  .login-content {
    & > div {
      width: 100%;
      max-width: 364px;
    }
    .logo-mobile {
      margin: 0px auto 40px;
      width: 60px;
      @media screen and (min-width: ${Breakpoint.m}) {
        display: none;
      }
      img {
        width: 100%;
      }
    }
    h2 {
      margin-bottom: 30px;
      font-size: ${Font.size.xl};
      font-weight: ${Font.weight.xBold};
      color: ${Color.black};
    }
  }
`

const SForm = styled.form`
  .MuiTextField-root {
    width: 100%;
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }
  a {
    display: block;
    margin-top: 20px;
    text-decoration: underline;
  }
  .form-group-btn {
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
`;

const SInput = styled(TextField)`
  input {
    padding: 19.7px 16px;
    font-size: ${Font.size.m};
  }
  label {
    font-size: ${Font.size.m};
  }
  legend {
    font-size: 1.08rem;
  }
`;

const Login = ({ history }) => {
  const signIn = User.signIn();
  const loggedIn = User.loggedIn();
  const user = localStorage.getItem('user');

  useEffect(() => {
    if (loggedIn) { history.push('/dashboard') }
  }, [loggedIn, history]);

  if (loggedIn || user) return null;
  return (
    <SContainer>
      <div className="login-banner">
        <LogoContainer>
          <img src={Logo} alt="Logo Madu"/>
        </LogoContainer>
      </div>
      <div className="login-content">
        <div>
          <div className="logo-mobile">
            <img src={LogoMobile} alt="Logo Madu"/>
          </div>
          <h2>Connexion</h2>
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
              <SForm onSubmit={handleSubmit}>
                <SInput
                  label="Entrer votre e-mail" 
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  variant="outlined"
                />
                <SInput
                  label="Entrer votre mot de passe" 
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  variant="outlined"
                />
                <Link to="/">Mot de passe oublié ?</Link>
                <div className="form-group-btn">
                  <CustomButton text='Connexion' color={Color.main} size="large" type="submit" disabled={false} />
                </div>
              </SForm>
            )}
          </Formik>
        </div>
      </div>
    </SContainer>
  );
}

export default Login;
