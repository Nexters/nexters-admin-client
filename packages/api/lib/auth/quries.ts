import { useMutation } from '@tanstack/react-query';

import { useAxios } from '../AxiosProvider';
import type {
  AdminLoginRequestBody,
  LoginRequestBody,
  MemberLoginResponse,
} from './types';
import { API_URL } from './urls';

function useLoginMuttion() {
  const axios = useAxios();
  const mutationFn = async (body: LoginRequestBody) => {
    const { data } = await axios.post<MemberLoginResponse>(
      API_URL.MEMBER_LOGIN,
      {
        email: body.email,
        password: body.password,
      },
    );
    return data;
  };
  return useMutation({ mutationFn });
}

function useAdminLoginMutation() {
  const axios = useAxios();
  const mutationFn = async (body: AdminLoginRequestBody) => {
    const { data } = await axios.post<MemberLoginResponse>(
      API_URL.ADMIN_LOGIN,
      {
        username: body.username,
        password: body.password,
      },
    );
    return data;
  };
  return useMutation({ mutationFn });
}

export { useAdminLoginMutation, useLoginMuttion };
