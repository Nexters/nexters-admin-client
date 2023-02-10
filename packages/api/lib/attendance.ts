// TODO: 반환 타입 없는 것들 확인하기
import { useMutation, useQuery } from '@tanstack/react-query';
import type { MemberAttendanceBody } from '@weekly/msw';
import { API_URL } from '@weekly/msw';

import { useAxios } from './AxiosProvider';

function useMemberAttendanceMutation() {
  const axios = useAxios();
  const mutationFn = async (body: MemberAttendanceBody) => {
    const { data } = await axios.post(API_URL.MEMBER_ATTENDANCE, {
      nonce: body.nonce,
    });
    return data;
  };
  return useMutation({ mutationFn });
}

function useQRCodeQuey() {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get(API_URL.QR_CODE);
    return data;
  };
  return useQuery({ queryKey: ['attendance', 'qr'], queryFn });
}

function useCreateQRCodeMutation() {
  const axios = useAxios();
  const mutationFn = async () => {
    const { data } = await axios.post(API_URL.QR_CODE);
    return data;
  };
  return useMutation({ mutationFn });
}

function useDeleteQRCodeMutation() {
  const axios = useAxios();
  const mutationFn = async () => {
    const { data } = await axios.delete(API_URL.QR_CODE);
    return data;
  };
  return useMutation({ mutationFn });
}

export {
  useCreateQRCodeMutation,
  useDeleteQRCodeMutation,
  useMemberAttendanceMutation,
  useQRCodeQuey,
};
