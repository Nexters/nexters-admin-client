import { styled } from '@weekly/ui';
import Image from 'next/image';

import Week1Image from '~/images/home/week1.png';
import Week2Image from '~/images/home/week2.png';
import Week3Image from '~/images/home/week3.png';
import Week4Image from '~/images/home/week4.png';
import Week5Image from '~/images/home/week5.png';
import Week6Image from '~/images/home/week6.png';
import Week7Image from '~/images/home/week7.png';
import Week8Image from '~/images/home/week8.png';

type Props = {
  week: number;
}

const images = [
  Week1Image,
  Week2Image,
  Week3Image,
  Week4Image,
  Week5Image,
  Week6Image,
  Week7Image,
  Week8Image,
] as const;

function ChulChul(props: Props) {
  const { week } = props;
  const src = images[week - 1] ?? images[images.length - 1];
  return (
    <Container>
      <Image
        fill
        alt=''
        src={src}
        placeholder='blur'
      />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.rem(335)};
  height: ${({ theme }) => theme.rem(180)};
`;

export { ChulChul };
