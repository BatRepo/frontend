import { UserEntitie } from "domain/user/entitie/UserEntitie";

export interface ICreateUserUseCase {
  execute(
    params: ICreateUserUseCase.CreateUserParams,
  ): Promise<ICreateUserUseCase.CreateUserResponse>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ICreateUserUseCase {
  export type CreateUserParams = {
    user: UserEntitie;
  };
  export type CreateUserResponse = string;
}