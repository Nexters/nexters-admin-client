import { getCookie } from '@weekly/utils';
import { useRouter } from 'next/router';
import React from 'react';

const LOGIN_PATH = '/authentication/login';

function AuthGuard(props: React.PropsWithChildren<unknown>) {
  const { children } = props;
  const router = useRouter();
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    const accessToken = getCookie('accessToken');
    if (!router.isReady) {
      return;
    }

    if (!accessToken) {
      router
        .push({
          pathname: LOGIN_PATH,
          query: { returnUrl: router.asPath },
        })
        .catch(console.error);
    } else {
      setChecked(true);
    }
  }, [router.isReady]);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}

export { AuthGuard };
