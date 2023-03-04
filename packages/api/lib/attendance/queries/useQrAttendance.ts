import { useMutation } from '@tanstack/react-query';

import { ValidateQrCodeRequest } from '../../types/attendance';
import { api } from '../api';

export default function useQrAttendance() {
  const { mutate } = useMutation({
    mutationFn: (data: ValidateQrCodeRequest) => api.attendance.qrAttendance(data),
  });

  return { mutate };
}
