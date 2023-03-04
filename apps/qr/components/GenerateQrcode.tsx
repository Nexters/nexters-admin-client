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
  callbackUrl: string;
}

export default function GenerateQrcode(props: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, []);

  useEffect(() => {
    qrCode.update({ data: props.callbackUrl });
  }, []);

  return <div ref={ref} />;
}
