import { IUserProvider } from "domain/user/IUserProvider";
import { ICreateUserUseCase } from "./ICreateUser";

export default class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private userProvider: IUserProvider) {}

  async execute(
    params: ICreateUserUseCase.CreateUserParams,
  ): Promise<ICreateUserUseCase.CreateUserResponse> {
    const user = await this.userProvider.createUser(params);

    return user;
  }
}
