import { UserEtitie } from "domain/user/entitie/UserEntitie";
import { HeaderTokenEntite } from "domain/user/entitie/UserTokenEntitie";

export interface ICreateUserUseCase {
  execute(
    params: ICreateUserUseCase.CreateUserParams,
  ): Promise<ICreateUserUseCase.CreateUserResponse>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ICreateUserUseCase {
  export type CreateUserParams = {
    token: HeaderTokenEntite;
  };
  export type CreateUserResponse = UserEtitie;
}