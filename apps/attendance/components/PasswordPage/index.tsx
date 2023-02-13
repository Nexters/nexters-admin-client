import { styled } from '@weekly/ui';
import { Fragment } from 'react';

import { PasswordForm } from './PasswordForm';

function PasswordPage() {
  return (
    <Fragment>
      <Description>
        {`비밀번호를
        다시 설정해 주세요!`}
      </Description>
      <PasswordForm />
    </Fragment>
  );
}

const Description = styled.h2`
  white-space: pre-line;
  align-self: flex-start;
  ${({ theme }) => theme.typo.h2Bold};
  margin-bottom: ${({ theme }) => theme.rem(32)};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

export { PasswordPage };
