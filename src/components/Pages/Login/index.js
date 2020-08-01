import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import styles from './Login.module.scss';
import LoginForm from './LoginForm';

const Login = () => {
  const [cookie] = useCookies(['token']);
  if (cookie.token) {
    return <Redirect to="/" />;
  }
  return (
    <div
      className={`login-back d-flex w-100 align-items-center justify-content-center ${styles.login}`}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
