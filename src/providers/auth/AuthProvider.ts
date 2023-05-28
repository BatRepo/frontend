import { IUserProvider } from "domain/user/IUserProvider";
import AuthBaseApi from "./AuthBaseApi";
import { ILoginUserUseCase } from "domain/user/UseCases/login/ILoginUser";
import cookies from "utils/cookies";
import axios from "axios";
import { UserEtitie } from "domain/user/entitie/UserEntitie";
import { ICreateUserUseCase } from "domain/user/UseCases/createUser/ICreateUser";

export default class AuthProvider
  extends AuthBaseApi
  implements IUserProvider
{
  public authUser = cookies.get('authBatToken');
  public config = {
    headers: {
      'x-auth-token': this.authUser,
      'Content-Type': 'application/json',
    },
  };

  public async loginUser(
    req: ILoginUserUseCase.LoginUserParams,
  ): Promise<ILoginUserUseCase.LoginUserResponse> {
    try {
      const { user } = req;
      const { email, password } = user;
      const { data } = await axios.post(`${this.baseUrl}/login`, { email, password });
      console.log('response', data);
      if (data) return data;
    } catch {
      throw new Error('Request login failed');
    }
  }

  createUser(params: ICreateUserUseCase.CreateUserParams): Promise<UserEtitie> {
    throw new Error("Method not implemented.");
  }
}