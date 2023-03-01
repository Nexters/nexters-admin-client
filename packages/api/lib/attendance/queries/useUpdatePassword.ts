import { useMutation } from '@tanstack/react-query';

import { api } from '../api';

export default function useUpdatePassword() {
  const { mutate } = useMutation({
    mutationFn: api.attendance.updatePassword,
  });
  return { mutate };
}
