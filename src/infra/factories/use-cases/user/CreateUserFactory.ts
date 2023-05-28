import CreateUserUseCase from "domain/user/UseCases/createUser/CreateUserUseCase";
import { ICreateUserUseCase } from "domain/user/UseCases/createUser/ICreateUser";
import AuthProvider from "providers/auth/AuthProvider";

export const CreateUserFactory = (): ICreateUserUseCase => {
  return new CreateUserUseCase(new AuthProvider());
};
