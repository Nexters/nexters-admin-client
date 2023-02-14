import { useLoginMuttion } from '@weekly/api';
import { Button, openErrorSnackBar, styled, TextField } from '@weekly/ui';
import {
  useValidateState,
  validateEmail,
  validatePassword,
} from '@weekly/utils';
import type { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import type {
  ChangeEvent,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
import { useRef } from 'react';

function LoginForm() {
  const router = useRouter();
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const emailState = useValidateState<string>('', [validateEmail]);
  const passwordState = useValidateState<string>('', [validatePassword]);
  const { mutate } = useLoginMuttion();
  const submitLoginForm = () => {
    mutate(
      {
        email: emailState.value,
        password: passwordState.value,
      },
      {
        // TODO: 에러처리 깔끔하게 하기
        onError(error) {
          const { response } = error as AxiosError;
          if (response?.status === 401) {
            openErrorSnackBar('유저 정보와 일치하지 않습니다.');
            return;
          }
          openErrorSnackBar('알 수 없는 오류가 발생했습니다.');
        },
        onSuccess(response) {
          if (response.isInitalLogin) {
            router.push('/authentication/password');
            return;
          }
          router.push('/attendance');
        },
      },
    );
  };
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
