import { useMutation, useQuery } from '@tanstack/react-query';

import { useAxios } from '../AxiosProvider';
import type { QueryParams } from '../common/types';
import type {
  CreateMemberBulkBody,
  MemberPositionBody,
  MemberRequestBody,
  MembersResponseBody,
  MemberStatusBody,
  MeResponseBody,
  UpdatePasswordBody,
} from './types';
import { API_URL } from './urls';

function useUpdatePasswordMutation() {
  const axios = useAxios();
  const mutationFn = async (body: UpdatePasswordBody) => {
    const { data } = await axios.put(API_URL.PASSWORD, {
      password: body.password,
    });
    return data;
  };
  return useMutation({ mutationFn });
}

function useMeQuery(params?: QueryParams<MeResponseBody>) {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get<MeResponseBody>(API_URL.ME);
    return data;
  };
  return useQuery({ queryKey: ['members', 'me'], queryFn, ...params });
}

function useMembersQuery(params?: QueryParams<MembersResponseBody>) {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get<MembersResponseBody>(API_URL.MEMBERS);
    return data;
  };
  return useQuery({ queryKey: ['members'], queryFn, ...params });
}

function useCreateMemberMutation() {
  const axios = useAxios();
  const mutationFn = async (body: MemberRequestBody) => {
    const { data } = await axios.post(API_URL.MEMBERS, {
      name: body.name,
      gender: body.gender,
      email: body.email,
      phoneNumber: body.phoneNumber,
      generations: body.generations,
      position: body.position,
      subPosition: body.subPosition,
      status: body.status,
      isManager: body.isManager,
    });
    return data;
  };
  return useMutation({ mutationFn });
}

function useCreateMembersBulkMutation() {
  const axios = useAxios();
  const mutationFn = async (body: CreateMemberBulkBody) => {
    const { data } = await axios.post(API_URL.MEMBERS_BULK, {
      data: body.data,
    });
    return data;
  };
  return useMutation({ mutationFn });
}

function useUpdateMemberMutation() {
  const axios = useAxios();
  const mutationFn = async (body: MemberRequestBody) => {
    const { data } = await axios.put(API_URL.MEMBER, {
      name: body.name,
      gender: body.gender,
      email: body.email,
      phoneNumber: body.phoneNumber,
      generations: body.generations,
      position: body.position,
      subPosition: body.subPosition,
      status: body.status,
      isManager: body.isManager,
    });
    return data;
  };
  return useMutation({ mutationFn });
}

function useDeleteMemberMutation() {
  const axios = useAxios();
  const mutationFn = async () => {
    const { data } = await axios.delete(API_URL.MEMBER);
    return data;
  };
  return useMutation({ mutationFn });
}

function useUpdateMemberStatusMutation() {
  const axios = useAxios();
  const mutationFn = async (body: MemberStatusBody) => {
    const { data } = await axios.put(API_URL.MEMBER_STATUS, {
      status: body.status,
    });
    return data;
  };
  return useMutation({ mutationFn });
}

function useUpdateMemberPositionMutation() {
  const axios = useAxios();
  const mutationFn = async (body: MemberPositionBody) => {
    const { data } = await axios.put(API_URL.MEMBER_POSITION, {
      position: body.position,
      subPosition: body.subPosition,
    });
    return data;
  };
  return useMutation({ mutationFn });
}

export {
  useCreateMemberMutation,
  useCreateMembersBulkMutation,
  useDeleteMemberMutation,
  useMembersQuery,
  useMeQuery,
  useUpdateMemberMutation,
  useUpdateMemberPositionMutation,
  useUpdateMemberStatusMutation,
  useUpdatePasswordMutation,
};
