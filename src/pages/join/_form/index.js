import React from 'react';
import { useStore } from 'effector-react';

import s from './index.module.css';
import {
  registerFetching,
  formSubmitted,
  $usernameField,
  usernameFieldChange,
  $passwordField,
  passwordFieldChange,
  $emailField,
  emailFieldChange
} from '../store';
import { Error } from 'components/error';
import { Button } from 'components/button';
import { InputText } from 'components/form';

function JoinForm() {
  let isFormLoading = useStore(registerFetching.isLoading);
  let ListErrorsForm = useStore(registerFetching.error);

  let handleSubmit = (event) => {
    event.preventDefault();
    formSubmitted();
  };

  return (
    <form onSubmit={handleSubmit} className={s.root}>
      {ListErrorsForm && <Error>{ListErrorsForm}</Error>}

      <Email />

      <Username />

      <Password />

      <Button disabled={isFormLoading} className={s.button}>
        Sign up
      </Button>
    </form>
  );
}

function Email() {
  let emailField = useStore($emailField);
  let isFormLoading = useStore(registerFetching.isLoading);

  return (
    <InputText
      value={emailField}
      onChange={emailFieldChange}
      containerClass={s.group}
      disabled={isFormLoading}
      id="email"
      label="Email"
      type="email"
      name="email"
      placeholder="example@example.com"
      required
    />
  );
}
function Username() {
  let usernameField = useStore($usernameField);
  let isFormLoading = useStore(registerFetching.isLoading);

  return (
    <InputText
      value={usernameField}
      onChange={usernameFieldChange}
      containerClass={s.group}
      disabled={isFormLoading}
      id="username"
      label="Username"
      type="text"
      name="username"
      placeholder="Example"
      autoComplete="username"
      autoCapitalize="off"
      spellCheck="false"
      minLength="3"
      maxLength="32"
      required
    />
  );
}
function Password() {
  let passwordField = useStore($passwordField);
  let isFormLoading = useStore(registerFetching.isLoading);

  return (
    <InputText
      value={passwordField}
      onChange={passwordFieldChange}
      containerClass={s.group}
      disabled={isFormLoading}
      id="password"
      label="Password"
      type="password"
      name="password"
      placeholder="Password"
      autoComplete="new-password"
      minLength="6"
      maxLength="64"
      required
    />
  );
}

export { JoinForm };