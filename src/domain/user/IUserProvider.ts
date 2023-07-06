import { ICreateUserUseCase } from "./UseCases/createUser/ICreateUser";
import { IgetUserUseCase } from "./UseCases/getUser/IGetUserUseCase";
import { ILoginUserUseCase } from "./UseCases/login/ILoginUser";
import { ILogoutUserUseCase } from "./UseCases/logout/ILogoutUserUseCase";
import { UserAuth } from "./entitie/UserEntitie";
import { HeaderTokenEntite } from "./entitie/UserTokenEntitie";

export interface IUserProvider {
  createUser(
    params: ICreateUserUseCase.CreateUserParams,
  ): Promise<ICreateUserUseCase.CreateUserResponse>;

  loginUser(
    params: ILoginUserUseCase.LoginUserParams,
  ): Promise<ILoginUserUseCase.LoginUserResponse>;

  getUser(
    params: IgetUserUseCase.getUserParams,
  ): Promise<IgetUserUseCase.getUserResponse>;

  logoutUser(
    params: ILogoutUserUseCase.LogoutUserParams,
  ): Promise<ILogoutUserUseCase.LogoutUserResponse>;

}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IUserProvider {
  export type CreateUserParams = ICreateUserUseCase.CreateUserParams;
  export type CreateUserResponse = string;

  export type LogoutUserParams = ILogoutUserUseCase.LogoutUserParams;
  export type LogoutUserResponse = void;

  export type LoginUserParams = ILoginUserUseCase.LoginUserParams;
  export type LoginToolboxResponse = HeaderTokenEntite;

  export type getUserParams = IgetUserUseCase.getUserParams;
  export type getUserResponse = UserAuth;
}
