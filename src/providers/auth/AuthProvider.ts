import { IUserProvider } from "domain/user/IUserProvider";
import AuthBaseApi from "./AuthBaseApi";
import { ILoginUserUseCase } from "domain/user/UseCases/login/ILoginUser";
import cookies from "utils/cookies";
import axios from "axios";
import { ICreateUserUseCase } from "domain/user/UseCases/createUser/ICreateUser";
import cors from 'cors';

export default class AuthProvider
  extends AuthBaseApi
  implements IUserProvider
{
  public authUser = cookies.get('authBatToken');
  public config = {
    headers: {
      'x-auth-token': this._verifyToken(this.authUser),
      'Content-Type': 'application/json',
    },
  };

  private _api() {
    this.api.defaults.baseURL = this.baseUrl;
    this.api.interceptors.request.use(cors());
    
  }

  private _verifyToken(token: string) {
    if (token) {
      this.authUser = token;
    }
    this.authUser = '';
  }

  public async loginUser(
    req: ILoginUserUseCase.LoginUserParams,
  ): Promise<ILoginUserUseCase.LoginUserResponse> {
    try {
      const { user } = req;
      const { email, password } = user;
      const response = await this.api.post(`${this.baseUrl}/login`, { email, password });
      if (response) {
        const { token } = response.data;
        if (token) {
          cookies.set('authBatToken', token);
          return token.toString();
        }
      }
    } catch {
      throw new Error('Request login failed');
    }
  }

  public async createUser(
    req: ICreateUserUseCase.CreateUserParams
    ): Promise<ICreateUserUseCase.CreateUserResponse> {
      const { token, user } = req;
      this._verifyToken(token);
      const { name, email, password } = user;
      const response = await this.api.post(`${this.baseUrl}/register`, { name, email, password });
      if (response) {
        const { token } = response.data;
        if (token) {
          cookies.set('authBatToken', token);
        }
      }
    throw new Error("Method not implemented.");
  }
}