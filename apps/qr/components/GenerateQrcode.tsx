import QRCodeStyling from 'qr-code-styling';
import React, { useEffect, useRef } from 'react';

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: '/logo.svg',
  dotsOptions: {
    color: '#AFF856',
    type: 'rounded',
  },
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
    if (ref.current) qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: props.callbackUrl,
    });
  }, []);

  return (
    <div className='App'>
      <div ref={ref} />
    </div>
  );
}
