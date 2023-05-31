export interface UserEntitie {
  name: string;
  email: string;
  password: string;
}

export interface LoginEtitie {
  email: string;
  password: string;
}

export interface UserToken {
  token: string;
}