import { IUserProvider } from "domain/user/IUserProvider";
import { ILoginUserUseCase } from "./ILoginUser";

export default class LoginUserUseCase implements ILoginUserUseCase {
  constructor(private userProvider: IUserProvider) {}

  async execute(
    params: ILoginUserUseCase.LoginUserParams,
  ): Promise<ILoginUserUseCase.LoginUserResponse> {
    const token = await this.userProvider.loginUser(params);

    return token;
  }
}
