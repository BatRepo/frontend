import getUserUseCase from "domain/user/UseCases/getUser/GetUserUseCase";
import { IgetUserUseCase } from "domain/user/UseCases/getUser/IGetUserUseCase";
import AuthUserProvider from "providers/auth/AuthUserProvider";

export const getUserFactory = (): IgetUserUseCase => {
  return new getUserUseCase(new AuthUserProvider());
};