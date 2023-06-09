import { IUserProvider } from "domain/user/IUserProvider";
import { IgetUserUseCase } from "./IGetUserUseCase";

export default class getUserUseCase implements IgetUserUseCase {
  constructor(private userProvider: IUserProvider) {}

  async execute(
    params: IgetUserUseCase.getUserParams,
  ): Promise<IgetUserUseCase.getUserResponse> {
    const user = await this.userProvider.getUser(params);

    return user;
  }
}
