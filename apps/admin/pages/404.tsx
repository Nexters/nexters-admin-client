import type { GetStaticProps } from 'next';

function NotFound() {
  return null;
}

const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
};

export { getStaticProps };
export default NotFound;
