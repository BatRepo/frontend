import { ILoginUserUseCase } from "domain/user/UseCases/login/ILoginUser";
import LoginUserUseCase from "domain/user/UseCases/login/LoginUserUseCase";
import AuthProvider from "providers/auth/AuthProvider";

export const LoginUserFactory = (): ILoginUserUseCase => {
  return new LoginUserUseCase(new AuthProvider());
};
