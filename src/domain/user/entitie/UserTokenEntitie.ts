export interface UserTokenEntite {
  userId: string;
  token: string;
}

export interface HeaderTokenEntite {
  data: unknown,
  headers: {
    "x-auth-token": string;
  };
}