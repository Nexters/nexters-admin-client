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
  isInitalLogin: boolean;
};

export type { AdminLoginRequestBody, LoginRequestBody, LoginResponse };
