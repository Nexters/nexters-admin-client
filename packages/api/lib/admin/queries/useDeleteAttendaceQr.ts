import { useMutation } from '@tanstack/react-query';

import { api } from '../api';

export default function useDeleteAttendanceQr() {
  // TODO: URL 교체
  const adminUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'https://chulchul.site/admin';
  const { mutate } = useMutation({
    mutationFn: () => api.admin.deleteAttendanceQr(),
    onSuccess: () => {
      window.open(adminUrl, '_blank');
    },
  });

  return { mutate };
}
