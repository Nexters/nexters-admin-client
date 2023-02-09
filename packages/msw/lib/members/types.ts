type PasswordRequestBody = {
  password: string;
};

type MeResponseBody = {
  name: string;
  generation: number;
  position: string;
};

export type { MeResponseBody, PasswordRequestBody };
