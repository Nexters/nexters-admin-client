import { Icon, styled } from '@weekly/ui';
import { useSearchParams } from '@weekly/utils';
import { useRouter } from 'next/router';

import { PAGE_URLS } from '~/constants/urls';

import { PasswordForm } from './PasswordForm';

function PasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickBackButton = () => {
    router.push(
      searchParams.get('entry') === 'main'
        ? PAGE_URLS.MAIN
        : PAGE_URLS.LOGIN,
    );
  };
  return (
    <Container>
      <BackButton onClick={onClickBackButton}>
        <Icon name='chevronLeft' />
      </BackButton>
      <Description>
        {`비밀번호를
        다시 설정해 주세요!`}
      </Description>
      <PasswordForm />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BackButton = styled.button`
  position: absolute;
  left: 0;
  top: ${({ theme }) => theme.rem(40)};
  width: ${({ theme }) => theme.rem(24)};
  height: ${({ theme }) => theme.rem(24)};
`;

const Description = styled.h2`
  white-space: pre-line;
  align-self: flex-start;
  ${({ theme }) => theme.typo.h2Bold};
  margin-bottom: ${({ theme }) => theme.rem(32)};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

export { PasswordPage };
