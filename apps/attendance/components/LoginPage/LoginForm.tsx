import { useLoginMuttion } from '@weekly/api';
import { Button, styled, TextField } from '@weekly/ui';
import {
  useValidateState,
  validateEmail,
  validatePassword,
} from '@weekly/utils';
import { useRouter } from 'next/router';
import type { ChangeEvent, MouseEventHandler } from 'react';
import { useCallback } from 'react';

function LoginForm() {
  const router = useRouter();
  const emailState = useValidateState<string>('', [validateEmail]);
  const passwordState = useValidateState<string>('', [validatePassword]);
  const { mutateAsync } = useLoginMuttion();
  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    emailState.onChange(value);
  }, []);
  const onChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      passwordState.onChange(value);
    },
    [],
  );
  const onClickButton: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.stopPropagation();
    if (emailState.error || passwordState.error) {
      return;
    }
    await mutateAsync(
      {
        email: emailState.value,
        password: passwordState.value,
      },
      {
        // TODO: Toast 생성 후 연결
        onError: (error) => console.log(error),
        onSuccess: () => router.push('/attendance'),
      },
    );
  };
  return (
    <Container>
      <EmailTextField
        autoComplete='off'
        placeholder='이메일'
        name='email'
        type='email'
        value={emailState.value}
        error={emailState.error}
        onChange={onChangeEmail}
      />
      <PasswordTextField
        autoComplete='off'
        placeholder='비밀번호'
        name='password'
        type='password'
        value={passwordState.value}
        error={passwordState.error}
        onChange={onChangePassword}
      />
      <Button fullWidth type='button' onClick={onClickButton}>
        로그인
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const EmailTextField = styled(TextField)`
  margin-bottom: ${({ theme }) => theme.rem(16)};
`;

const PasswordTextField = styled(TextField)`
  margin-bottom: ${({ theme }) => theme.rem(40)};
`;

export { LoginForm };
