import { useMutation } from '@tanstack/react-query';
import { API_URL } from '@weekly/msw';

import { api } from './common';

type LoginRequestBody = {
  email: string;
  password: string;
};

type AdminLoginRequestBody = {
  username: string;
  password: string;
};

type LoginResponse = {
  data: string; // JWT Token
};

const login = {
  member: async (body: LoginRequestBody) => {
    const { data } = await api.post<LoginResponse>(API_URL.MEMBER_LOGIN, {
      email: body.email,
      password: body.password,
    });
    return data;
  },
  admin: async (body: AdminLoginRequestBody) => {
    const { data } = await api.post<LoginResponse>(API_URL.ADMIN_LOGIN, {
      username: body.username,
      password: body.password,
    });
    return data;
  },
};

function useLoginMuttion() {
  const mutation = useMutation({
    mutationFn: login.member,
  });
  return mutation;
}

function useAdminLoginMutation() {
  const mutation = useMutation({
    mutationFn: login.admin,
  });
  return mutation;
}

export { useAdminLoginMutation, useLoginMuttion };
export type { LoginResponse };
