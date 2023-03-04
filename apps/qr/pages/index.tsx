import { Button, styled } from '@weekly/ui';
import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';

import { Timer } from '~/components/Timer';

const QRCode = dynamic(() => import('../components/QRCode'), {
  ssr: false,
});

interface Props {
  callbackUrl: string;
}

function Home(props: Props) {
  const { callbackUrl } = props;
  return (
    <Container>
      <DateText>
        7월 1일
      </DateText>
      <SessionTitle>
        1주차 세션
      </SessionTitle>
      <QRCodeContainer>
        <QRCode url={callbackUrl} />
      </QRCodeContainer>
      <ButtonContainer>
        <Button fullWidth>
          출석 종료
        </Button>
      </ButtonContainer>
      <Timer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: ${({ theme }) => theme.rem(320)};
  max-width: ${({ theme }) => theme.rem(743)};
  padding: 0 ${({ theme }) => theme.rem(20)};
`;

const DateText = styled.span`
  ${({ theme }) => theme.typo.h3Medium};
  color: ${({ theme }) => theme.palette.grayScale.g30};
  margin-bottom: ${({ theme }) => theme.rem(4)};
`;

const SessionTitle = styled.h1`
  ${({ theme }) => theme.typo.h1Bold};
  color: ${({ theme }) => theme.palette.grayScale.white};
  margin-bottom: ${({ theme }) => theme.rem(24)};
`;

const QRCodeContainer = styled.div`
  padding: ${({ theme }) => theme.rem(10)};
  border-radius: ${({ theme }) => theme.rem(20)};
  background-color: ${({ theme }) => theme.palette.grayScale.white};
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.rem(16)};
  width: ${({ theme }) => theme.rem(335)};
`;

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const callbackUrl = `${req.headers.host}/api/qr/callback`;

  return {
    props: {
      callbackUrl,
    },
  };
}

export default Home;
