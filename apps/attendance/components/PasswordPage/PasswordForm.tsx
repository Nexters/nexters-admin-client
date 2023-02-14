import { useUpdatePasswordMutation } from '@weekly/api';
import { Button, openErrorSnackBar, styled, TextField } from '@weekly/ui';
import {
  useValidateState,
  validatePassword,
  validatePasswordCheck,
} from '@weekly/utils';
import { useRouter } from 'next/router';
import {
  ChangeEvent,
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
} from 'react';

function PasswordForm() {
  const router = useRouter();
  const passwordCheckInputRef = useRef<HTMLInputElement>(null);
  const { mutate } = useUpdatePasswordMutation();
  const passwordState = useValidateState<string>('', [validatePassword]);
  const passwordCheckState = useValidateState<string>('', [
    validatePassword,
    validatePasswordCheck(passwordState.value),
  ]);
  const onChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      passwordState.onChange(value);
    },
    [],
  );
  const onChangePasswordCheck = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      passwordCheckState.onChange(value);
    },
    [],
  );
  const submitPasswordForm = () => {
    if (passwordState.error || passwordCheckState.error) {
      openErrorSnackBar('비밀번호 형식이 맞지 않습니다.');
      return;
    }
    if (passwordState.value !== passwordCheckState.value) {
      openErrorSnackBar('동일한 비밀번호를 입력해 주세요.');
      return;
    }
    mutate(
      { password: passwordState.value },
      {
        // TODO: 에러처리 깔끔하게 하기
        onError() {
          openErrorSnackBar('알 수 없는 오류가 발생했습니다.');
        },
        onSuccess() {
          router.push('/attendance');
        },
      },
    );
  };
  const onEnterPasswordInput: KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    if (event.key === 'Enter') {
      passwordCheckInputRef.current?.focus();
    }
  };
  const onEnterPasswordCheckInput: KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    if (event.key === 'Enter') {
      submitPasswordForm();
    }
  };
  const onClickCompleteButton: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    event.preventDefault();
    submitPasswordForm();
  };
  useEffect(() => {
    passwordCheckState.validate(passwordCheckState.value);
  }, [passwordState]);
  return (
    <Container>
      <PasswordTextField
        autoComplete='off'
        placeholder='비밀번호(8자 ~20자)'
        id='password'
        name='password'
        type='password'
        inputMode='text'
        enterKeyHint='next'
        value={passwordState.value}
        error={passwordState.error}
        onChange={onChangePassword}
        onKeyUp={onEnterPasswordInput}
      />
      <PasswordCheckTextField
        ref={passwordCheckInputRef}
        autoComplete='off'
        placeholder='비밀번호 재확인'
        id='passwordCheck'
        name='passwordCheck'
        type='password'
        inputMode='text'
        enterKeyHint='go'
        value={passwordCheckState.value}
        error={passwordCheckState.error}
        onChange={onChangePasswordCheck}
        onKeyUp={onEnterPasswordCheckInput}
      />
      <Button
        fullWidth
        type='button'
        onClick={onClickCompleteButton}
        disabled={
          passwordState.isInital ||
          passwordCheckState.isInital ||
          passwordState.error ||
          passwordCheckState.error
        }
      >
        완료
      </Button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
`;

const PasswordTextField = styled(TextField)`
  margin-bottom: ${({ theme }) => theme.rem(16)};
`;

const PasswordCheckTextField = styled(TextField)`
  margin-bottom: ${({ theme }) => theme.rem(40)};
`;

export { PasswordForm };
