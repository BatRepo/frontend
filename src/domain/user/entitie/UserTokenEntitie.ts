export interface UserTokenEntite {
  userId: string;
  token: string;
}

export interface HeaderTokenEntite {
  data: unknown,
  header: {
    "x-auth-token": string;
  };
}