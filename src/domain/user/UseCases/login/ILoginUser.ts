import { LoginEtitie } from "domain/user/entitie/UserEntitie";

export interface ILoginUserUseCase {
  execute(
    params: ILoginUserUseCase.LoginUserParams,
  ): Promise<ILoginUserUseCase.LoginUserResponse>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ILoginUserUseCase {
  export type LoginUserParams = {
    user: LoginEtitie;
  };
  export type LoginUserResponse = string;
}