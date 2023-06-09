import { IUserProvider } from "domain/user/IUserProvider";
import { ILogoutUserUseCase } from "./ILogoutUserUseCase";

export default class LogoutUserUseCase implements ILogoutUserUseCase {
  constructor(private userProvider: IUserProvider) {}

  async execute(
    params: ILogoutUserUseCase.LogoutUserParams,
  ): Promise<ILogoutUserUseCase.LogoutUserResponse> {
    const user = await this.userProvider.logoutUser(params);

    return user;
  }
}
