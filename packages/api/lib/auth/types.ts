type LoginRequestBody = {
  email: string;
  password: string;
};

type AdminLoginRequestBody = {
  username: string;
  password: string;
};

type MemberLoginResponse = {
  token: string;
  needPasswordReset: boolean;
};

type AdminLoginResponse = {
  data: string;
};

export type {
  AdminLoginRequestBody,
  AdminLoginResponse,
  LoginRequestBody,
  MemberLoginResponse,
};
