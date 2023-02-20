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

export type { AdminLoginRequestBody, LoginRequestBody, MemberLoginResponse };
