import { onUnAuthorizedError } from '@weekly/api';
import Router from 'next/router';

import { PAGE_URLS } from '~/constants/urls';

const onInvalidTokenError = onUnAuthorizedError(() =>
  Router.push(PAGE_URLS.LOGOUT),
);

export { onInvalidTokenError };
