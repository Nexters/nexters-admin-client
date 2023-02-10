type UpdatePasswordBody = {
  password: string;
};

type MeResponseBody = {
  name: string;
  generation: number;
  position: string;
};

type Member = {
  id: number;
  name: string;
  gender: string;
  email: string;
  phoneNumber: string;
  generations: number[];
  position: string;
  subPosition: string;
  status: string;
  isManager: boolean;
};

type MemberRequestBody = Omit<Member, 'id'>;

type MembersResponseBody = {
  data: Member[];
};

// TODO: data 형식 (csv 포맷)으로 보낼지 확인하기
type CreateMemberBulkBody = {
  data: string;
};

type MemberStatusBody = Pick<Member, 'status'>;

type MemberPositionBody = Pick<Member, 'position' | 'subPosition'>;

export type {
  CreateMemberBulkBody,
  Member,
  MemberPositionBody,
  MemberRequestBody,
  MembersResponseBody,
  MemberStatusBody,
  MeResponseBody,
  UpdatePasswordBody,
};
