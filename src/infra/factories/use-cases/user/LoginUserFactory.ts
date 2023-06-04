import { ILoginUserUseCase } from "domain/user/UseCases/login/ILoginUser";
import LoginUserUseCase from "domain/user/UseCases/login/LoginUserUseCase";
import AuthUsersProvider from "providers/auth/AuthUserProvider";

export const LoginUserFactory = (): ILoginUserUseCase => {
  return new LoginUserUseCase(new AuthUsersProvider());
};
