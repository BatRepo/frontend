import { ICreateUserUseCase } from "domain/user/UseCases/createUser/ICreateUser";
import { IgetUserUseCase } from "domain/user/UseCases/getUser/IGetUserUseCase";
import { ILoginUserUseCase } from "domain/user/UseCases/login/ILoginUser";
import { ILogoutUserUseCase } from "domain/user/UseCases/logout/ILogoutUserUseCase";
import { CreateUserFactory } from "infra/factories/use-cases/user/CreateUserFactory";
import { getUserFactory } from "infra/factories/use-cases/user/GetUserFactory";
import { LoginUserFactory } from "infra/factories/use-cases/user/LoginUserFactory";
import { LogoutUserFactory } from "infra/factories/use-cases/user/LogoutUserFactory";

export class userController {

  async loginUser(
    params: ILoginUserUseCase.LoginUserParams,
  ): Promise<ILoginUserUseCase.LoginUserResponse> {
    const token = LoginUserFactory();
    return token.execute(params);
  }

  async createUser(
    params: ICreateUserUseCase.CreateUserParams,
  ): Promise<ICreateUserUseCase.CreateUserResponse> {
    const postResult = CreateUserFactory();
    return postResult.execute(params);
  }

  async getUser(
    params: IgetUserUseCase.getUserParams,
  ): Promise<IgetUserUseCase.getUserResponse> {
    const userResult = getUserFactory();
    return userResult.execute(params);
  }

  async logoutUser(
    params: ILogoutUserUseCase.LogoutUserParams,
  ): Promise<ILogoutUserUseCase.LogoutUserResponse> {
    const userResult = LogoutUserFactory();
    return userResult.execute(params);
  }

}