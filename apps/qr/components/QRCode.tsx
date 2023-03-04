import QRCodeStyling from 'qr-code-styling';
import { useEffect, useRef } from 'react';

const qrCode = new QRCodeStyling({
  width: 320,
  height: 320,
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

  return <div ref={ref} />;
}
