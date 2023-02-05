import type { GetStaticProps } from 'next';

function NotFound() {
  return null;
}

const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: '/attendance',
      permanent: true,
    },
  };
};

export { getStaticProps };
export default NotFound;
