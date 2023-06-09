import CreateUserUseCase from "domain/user/UseCases/createUser/CreateUserUseCase";
import { ICreateUserUseCase } from "domain/user/UseCases/createUser/ICreateUser";
import AuthUserProvider from "providers/auth/AuthUserProvider";

export const CreateUserFactory = (): ICreateUserUseCase => {
  return new CreateUserUseCase(new AuthUserProvider());
};
