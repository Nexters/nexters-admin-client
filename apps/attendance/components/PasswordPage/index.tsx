import { Icon, styled } from '@weekly/ui';
import { useSearchParams } from '@weekly/utils';
import { useRouter } from 'next/router';

import { PAGE_URLS } from '~/constants/urls';

import { AuthGuard } from '../AuthGuard';
import { PasswordForm } from './PasswordForm';

function PasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isFromMain = searchParams.get('entry') === 'main';
  const onClickBackButton = () => router.push(PAGE_URLS.MAIN);
  return (
    <AuthGuard>
      <Container>
        {isFromMain && (
          <BackButton onClick={onClickBackButton}>
            <Icon name='chevronLeft' />
          </BackButton>
        )}
        <Description>
          {`비밀번호를
        다시 설정해 주세요!`}
        </Description>
        <PasswordForm />
      </Container>
    </AuthGuard>
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
