import { useMutation } from '@tanstack/react-query';
import { setCookie } from '@weekly/utils';

import { api, initAuthorization } from '../api';

export default function useAdminLogin() {
  const { mutate } = useMutation(api.attendance.memberLogin, {
    onSuccess({ token }) {
      setCookie('accessToken', token);
      initAuthorization();
    },
  });

  return { mutate };
}
