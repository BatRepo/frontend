import { ICreateUserUseCase } from "./UseCases/createUser/ICreateUser";
import { ILoginUserUseCase } from "./UseCases/login/ILoginUser";
import { UserEtitie } from "./entitie/UserEntitie";
import { HeaderTokenEntite } from "./entitie/UserTokenEntitie";

export interface IUserProvider {
  createUser(
    params: ICreateUserUseCase.CreateUserParams,
  ): Promise<ICreateUserUseCase.CreateUserResponse>;

  loginUser(
    params: ILoginUserUseCase.LoginUserParams,
  ): Promise<ILoginUserUseCase.LoginUserResponse>;

}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IUserProvider {
  export type CreateUserParams = ICreateUserUseCase.CreateUserParams;
  export type CreateUserResponse = UserEtitie;

  export type LoginUserParams = ILoginUserUseCase.LoginUserParams;
  export type LoginToolboxResponse = HeaderTokenEntite;
}
