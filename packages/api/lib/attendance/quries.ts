import { useMutation, useQuery } from '@tanstack/react-query';

import { useAxios } from '../AxiosProvider';
import type { QueryParams } from '../common/types';
import type { MeAttendanceResponseBody, MemberAttendanceBody } from './types';
import { API_URL } from './urls';

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

function useMeAttendanceQuery(params?: QueryParams<MeAttendanceResponseBody>) {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get<MeAttendanceResponseBody>(API_URL.ME);
    return data;
  };
  return useQuery({ queryKey: ['attendance', 'me'], queryFn, ...params });
}

function useQRCodeQuey(params?: QueryParams<unknown>) {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get(API_URL.QR_CODE);
    return data;
  };
  return useQuery({ queryKey: ['attendance', 'qr'], queryFn, ...params });
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
  useMeAttendanceQuery,
  useMemberAttendanceMutation,
  useQRCodeQuey,
};
