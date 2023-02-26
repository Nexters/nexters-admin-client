import { styled } from '@weekly/ui';
import Image from 'next/image';

import empty from '~/images/home/empty.png';

function EmptyCard() {
  return (
    <Container>
      <Text>활동 시작을 기다려 볼까요?</Text>
      <Image
        src={empty}
        width={168}
        height={196}
        placeholder='blur'
        alt='활동 시작을 기다려 볼까요?'
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${({ theme }) => theme.rem(335)};
  height: ${({ theme }) => theme.rem(360)};
  border-radius: ${({ theme }) => theme.rem(24)};
  padding: ${({ theme }) => theme.rem(22)};
  background-color: ${({ theme }) => theme.palette.grayScale.g90};
`;

const Text = styled.h2`
  ${({ theme }) => theme.typo.h2Bold}
  margin-bottom: ${({ theme }) => theme.rem(36)};
  color: ${({ theme }) => theme.palette.grayScale.g10};
`;

export { EmptyCard };
