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

export type { AdminLoginRequestBody, LoginRequestBody, LoginResponse };
