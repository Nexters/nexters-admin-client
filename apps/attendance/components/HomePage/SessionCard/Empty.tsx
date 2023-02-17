import { styled } from '@weekly/ui';
import Image from 'next/image';
import { Fragment } from 'react';

import empty from '~/images/home/empty.png';

function Empty() {
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

const Container = Fragment;

const Text = styled.h2`
  ${({ theme }) => theme.typo.h2Bold}
  margin-bottom: ${({ theme }) => theme.rem(36)};
  color: ${({ theme }) => theme.palette.grayScale.g10};
`;

export { Empty };
