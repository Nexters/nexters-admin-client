import { useMutation } from '@tanstack/react-query';
import { API_URL } from '@weekly/msw';

import { useAxios } from './AxiosProvider';

type MemberAttendanceBody = {
  nonce: string;
};

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

export { useMemberAttendanceMutation };
