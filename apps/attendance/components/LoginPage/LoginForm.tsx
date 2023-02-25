import { handleLoginError, useLoginMuttion } from '@weekly/api';
import { Button, openErrorSnackBar, styled, TextField } from '@weekly/ui';
import {
  useAuthToken,
  useValidateState,
  validateEmail,
  validatePassword,
} from '@weekly/utils';
import { useRouter } from 'next/router';
import type {
  ChangeEvent,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
import { useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { PAGE_URLS } from '~/constants/urls';

function LoginForm() {
  const router = useRouter();
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const emailState = useValidateState<string>('', [validateEmail]);
  const passwordState = useValidateState<string>('', [validatePassword]);
  const { setToken } = useAuthToken();
  const { mutate } = useLoginMuttion();
  const submitLoginForm = useDebouncedCallback(() => {
    mutate(
      {
        email: emailState.value,
        password: passwordState.value,
      },
      {
        onError(error) {
          openErrorSnackBar(handleLoginError(error));
        },
        onSuccess(response) {
          const { token, needPasswordReset } = response;
          setToken(token);
          router.push(needPasswordReset ? PAGE_URLS.PASSWORD : PAGE_URLS.MAIN);
        },
      },
    );
  }, 1000);
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    emailState.onChange(value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    passwordState.onChange(value);
  };
  const onEnterEmailInput: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      passwordInputRef.current?.focus();
    }
  };
  const onEnterPasswordInput: KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    if (event.key === 'Enter') {
      submitLoginForm();
    }
  };
  const onClickLoginButton: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    submitLoginForm();
  };
  return (
    <Container>
      <EmailTextField
        autoComplete='off'
        placeholder='이메일'
        id='email'
        name='email'
        type='email'
        inputMode='email'
        enterKeyHint='next'
        value={emailState.value}
        error={emailState.error}
        onChange={onChangeEmail}
        onKeyUp={onEnterEmailInput}
      />
      <PasswordTextField
        ref={passwordInputRef}
        autoComplete='off'
        placeholder='비밀번호'
        id='password'
        name='password'
        type='password'
        inputMode='text'
        enterKeyHint='go'
        value={passwordState.value}
        error={passwordState.error}
        onChange={onChangePassword}
        onKeyUp={onEnterPasswordInput}
      />
      <Button
        fullWidth
        type='button'
        onClick={onClickLoginButton}
        disabled={
          emailState.isInital ||
          passwordState.isInital ||
          emailState.error ||
          passwordState.error
        }
      >
        로그인
      </Button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
`;

const EmailTextField = styled(TextField)`
  margin-bottom: ${({ theme }) => theme.rem(16)};
`;

const PasswordTextField = styled(TextField)`
  margin-bottom: ${({ theme }) => theme.rem(40)};
`;

export { LoginForm };
