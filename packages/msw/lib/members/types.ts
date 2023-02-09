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

type MeResponseBody = {
  name: string;
  generation: number;
  position: string;
};

type MembersResponseBody = {
  data: Member[];
};

export type { Member, MembersResponseBody, MeResponseBody };
