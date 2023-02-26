import { handleLoginError, useAdminLoginMutation } from '@weekly/api';
import { Button, openErrorSnackBar, styled, TextField } from '@weekly/ui';
import {
  useValidateState,
  validatePassword,
  validateUsername,
} from '@weekly/utils';
import { useRouter } from 'next/router';
import type {
  ChangeEvent,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
import { useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

function LoginForm() {
  const router = useRouter();
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const usernameState = useValidateState<string>('', [validateUsername]);
  const passwordState = useValidateState<string>('', [validatePassword]);
  const { mutate } = useAdminLoginMutation();
  const submitLoginForm = useDebouncedCallback(() => {
    mutate(
      {
        username: usernameState.value,
        password: passwordState.value,
      },
      {
        onError(error) {
          openErrorSnackBar(handleLoginError(error));
        },
        onSuccess(response) {
          const { data } = response;
          localStorage.setItem('@weekly/token', data);
          router.push('/attendance');
        },
      },
    );
  }, 1000);
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    usernameState.onChange(value);
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
        placeholder='아이디'
        id='username'
        name='username'
        type='username'
        inputMode='text'
        enterKeyHint='next'
        value={usernameState.value}
        error={usernameState.error}
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
          usernameState.isInital ||
          passwordState.isInital ||
          usernameState.error ||
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
