import { UserAuth } from "domain/user/entitie/UserEntitie";

export interface IgetUserUseCase {
  execute(
    params: IgetUserUseCase.getUserParams,
  ): Promise<IgetUserUseCase.getUserResponse>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace IgetUserUseCase {
  export type getUserParams = {
    userEmail?: string;
    userId?: string;
  };
  export type getUserResponse = UserAuth;
}