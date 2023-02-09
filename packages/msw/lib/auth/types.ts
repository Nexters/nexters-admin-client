type RequestBody = {
  email: string;
  password: string;
};

type AuthResponse = {
  data: string; // JWT Token
};

export type { AuthResponse, RequestBody };
