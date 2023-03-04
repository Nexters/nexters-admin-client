import { styled } from '@weekly/ui';
import QRCodeStyling from 'qr-code-styling';
import { useEffect, useRef } from 'react';

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: '/logo.svg',
  imageOptions: {
    crossOrigin: 'anonymous',
  },
});

interface Props {
  url: string;
}

export default function GenerateQrcode(props: Props) {
  const { url } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, []);

  useEffect(() => {
    qrCode.update({ data: url });
  }, [url]);

  return (
    <Container>
      <QRContainer ref={ref} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.rem(335)};
  height: ${({ theme }) => theme.rem(335)};
  border-radius: ${({ theme }) => theme.rem(20)};
  background-color: ${({ theme }) => theme.palette.grayScale.white};
`;

const QRContainer = styled.div`
  width: ${({ theme }) => theme.rem(300)};
  height: ${({ theme }) => theme.rem(300)};
`;
