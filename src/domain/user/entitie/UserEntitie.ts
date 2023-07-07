export interface UserEntitie {
  name: string;
  email: string;
  password: string;
}

export interface LoginEtitie {
  email: string;
  password: string;
}

export interface UserAuth {
  _id: string;
  name: string;
  email: string;
}

export interface User {
  id: string;
  email: string;
}