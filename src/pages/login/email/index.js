import React from 'react';
import Head from 'next/head';
import { useStore } from 'effector-react';

import { MainLayout } from 'components/layouts';
import { StandardInput } from 'components/input';
import { Button } from 'components/button';
import { SingleError } from 'components/error';
import {
  $emailField,
  $passwordField,
  formSubmitted,
  emailFieldChange,
  passwordFieldChange,
  loginFetching
} from 'models/page/login/email';
import styles from './index.module.css';

export default () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <MainLayout>
        <Form />
      </MainLayout>
    </>
  );
};

export let Form = () => {
  let isFormLoading = useStore(loginFetching.isLoading);
  let formError = useStore(loginFetching.error);

  let handleSubmit = event => {
    event.preventDefault();
    formSubmitted();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {formError && <SingleError>{formError}</SingleError>}

      <Email />
      <Password />
      <Button disabled={isFormLoading} className={styles['form_button']}>
        Log in
      </Button>
    </form>
  );
};

export let Email = () => {
  let emailField = useStore($emailField);
  let isFormLoading = useStore(loginFetching.isLoading);

  return (
    <StandardInput
      value={emailField}
      onChange={emailFieldChange}
      containerClass={styles['form_group']}
      disabled={isFormLoading}
      id="email"
      label="Email"
      type="email"
      placeholder="example@example.com"
      required
    />
  );
};

export let Password = () => {
  let passwordField = useStore($passwordField);
  let isFormLoading = useStore(loginFetching.isLoading);

  return (
    <StandardInput
      value={passwordField}
      onChange={passwordFieldChange}
      containerClass={styles['form_group']}
      disabled={isFormLoading}
      id="password"
      label="Password"
      type="password"
      placeholder="Password"
      minLength="6"
      maxLength="64"
      required
    />
  );
};