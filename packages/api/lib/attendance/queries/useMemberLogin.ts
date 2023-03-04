import { useMutation } from '@tanstack/react-query';
import { setCookie } from '@weekly/utils';

import { api, initAuthorization } from '../api';

export default function useMemberLogin() {
  const { mutate } = useMutation({
    mutationFn: api.attendance.memberLogin,
    onSuccess({ token }) {
      setCookie('@weekly/token', token);
      initAuthorization();
    },
  });

  return { mutate };
}
