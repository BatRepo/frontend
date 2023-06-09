import { ILogoutUserUseCase } from "domain/user/UseCases/logout/ILogoutUserUseCase";
import LogoutUserUseCase from "domain/user/UseCases/logout/LogoutUserUseCase";
import AuthUsersProvider from "providers/auth/AuthUserProvider";

export const LogoutUserFactory = (): ILogoutUserUseCase => {
  return new LogoutUserUseCase(new AuthUsersProvider());
};