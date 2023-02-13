import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('../components/GenerateQrcode'), {
  ssr: false,
});

interface Props {
  callbackUrl: string;
}

function Home(props: Props) {
  const { callbackUrl } = props;
  return (
    <div
      style={{
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}
    >
      <DynamicHeader callbackUrl={callbackUrl} />
    </div>
  );
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const callbackUrl = `${req.headers.host}/api/qr/callback`;

  return {
    props: {
      callbackUrl,
    },
  };
}

export default Home;
