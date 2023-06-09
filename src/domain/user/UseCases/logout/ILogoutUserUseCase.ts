export interface ILogoutUserUseCase {
  execute(
    params: ILogoutUserUseCase.LogoutUserParams,
  ): Promise<ILogoutUserUseCase.LogoutUserResponse>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ILogoutUserUseCase {
  export type LogoutUserParams = {
    userEmail?: string;
    userId?: string;
  };
  export type LogoutUserResponse = void;
}