import { styled } from '@weekly/ui';

function Empty() {
  return (
    <Container>
      <Title>아직 출석 정보가 없어요.</Title>
      <Description>활동이 시작되길 기다려 볼까요?</Description>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  align-self: center;
  margin-top: ${({ theme }) => theme.rem(240)};
`;

const Title = styled.h2`
  ${({ theme }) => theme.typo.h2Bold};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

const Description = styled.p`
  ${({ theme }) => theme.typo.body1Bold};
  color: ${({ theme }) => theme.palette.main.green50};
  margin-top: ${({ theme }) => theme.rem(4)};
`;

export { Empty };
