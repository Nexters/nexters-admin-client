import { useMutation } from '@tanstack/react-query';

import { InitializeQrCodesRequest } from '../../types/admin';
import { api } from '../api';

export default function useCreateAttendanceQr(body: InitializeQrCodesRequest) {
  // TODO: URL 교체
  const QrUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3002'
      : 'https://chulchul.site/qr';
  const { mutate } = useMutation({
    mutationFn: () => api.admin.createAttendanceQr(body),
    onSuccess: () => {
      window.open(QrUrl, '_blank');
    },
  });

  return { mutate };
}
