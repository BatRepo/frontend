import { IUserProvider } from "domain/user/IUserProvider";
import AuthBaseApi from "./AuthBaseApi";
import { ILoginUserUseCase } from "domain/user/UseCases/login/ILoginUser";
import cookies from "utils/cookies";
import { ICreateUserUseCase } from "domain/user/UseCases/createUser/ICreateUser";
import axios from "axios";
export default class AuthUserProvider
  extends AuthBaseApi
  implements IUserProvider
{
  public authUser = cookies.get('authBatToken');
  // public config = {
  //   headers: {
  //     'Content-Length': '...',
  //     'User-Agent': '...',
  //     'Content-Encoding': '...',
  //   }
  // }
  
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
        // let response = await axios(this.config);
       const response = (await axios.post(`${this.baseUrl}/login`, { email, password }));
        if (response) {
          const { token } = response.data;
          if (token) {
            cookies.set('authBatToken', token);
            this.authUser = token;
            return token.toString();
          }
        }
      } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
      }
  }

  public async createUser(
    req: ICreateUserUseCase.CreateUserParams
    ): Promise<ICreateUserUseCase.CreateUserResponse> {
      const { token, user } = req;
      this._verifyToken(token);
      const { name, email, password } = user;
      const response = await axios.post(`${this.baseUrl}/register`, { name, email, password });
      if (response) {
        const { token } = response.data;
        if (token) {
          cookies.set('authBatToken', token);
        }
      }
    throw new Error("Method not implemented.");
  }
}
