import { Button, styled, TextField } from '@weekly/ui';
import type { ChangeEvent } from 'react';
import { useCallback, useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);
  const onChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );
  return (
    <Container>
      <EmailTextField
        placeholder="이메일"
        name="email"
        value={email}
        onChange={onChangeEmail}
      />
      <PasswordTextField
        placeholder="비밀번호"
        name="password"
        value={password}
        onChange={onChangePassword}
      />
      <Button fullWidth>로그인</Button>
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
