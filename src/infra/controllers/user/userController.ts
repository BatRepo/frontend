import { ICreateUserUseCase } from "domain/user/UseCases/createUser/ICreateUser";
import { ILoginUserUseCase } from "domain/user/UseCases/login/ILoginUser";
import { CreateUserFactory } from "infra/factories/use-cases/user/CreateUserFactory";
import { LoginUserFactory } from "infra/factories/use-cases/user/LoginUserFactory";

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

}