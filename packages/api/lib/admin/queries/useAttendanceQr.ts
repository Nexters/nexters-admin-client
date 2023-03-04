import { useQuery } from '@tanstack/react-query';

import { api } from '../api';

export default function useAttendanceQr() {
  return useQuery({
    queryFn: api.admin.getAttendanceQr,
    queryKey: ['attendance', 'qr'],
  });
}
