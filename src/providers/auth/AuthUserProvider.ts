import { IUserProvider } from "domain/user/IUserProvider";
import AuthBaseApi from "./AuthBaseApi";
import { ILoginUserUseCase } from "domain/user/UseCases/login/ILoginUser";
import cookies from "utils/cookies";
import { ICreateUserUseCase } from "domain/user/UseCases/createUser/ICreateUser";
import axios from "axios";
import { useUser } from "hooks/user";
import { IgetUserUseCase } from "domain/user/UseCases/getUser/IGetUserUseCase";
import { ILogoutUserUseCase } from "domain/user/UseCases/logout/ILogoutUserUseCase";
export default class AuthUserProvider
  extends AuthBaseApi
  implements IUserProvider
{
  public authUser = cookies.get('authBatToken');
  
  private _verifyToken(token?: string): void {
    if (token) {
      this.authUser = token;
    }
    this.authUser = cookies.get('authBatToken');
  }

  public async loginUser(
    req: ILoginUserUseCase.LoginUserParams,
  ): Promise<ILoginUserUseCase.LoginUserResponse> {
    try {
      const { user } = req;
      const { email, password } = user;
       const response = (await axios.post(`${this.baseUrl}/login`, { email, password }));
        if (response) {
          const { setUserId } = useUser();
          const { user } = response.data;
          const {token, userId } = user;
          if (token) {
            cookies.set('authBatToken', token);
            this.authUser = token;
            return token.toString();
          } if (userId) {
            setUserId(userId);
          }
        }
      } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
      }
  }

  public async createUser(
    req: ICreateUserUseCase.CreateUserParams
    ): Promise<ICreateUserUseCase.CreateUserResponse> {
      try {
        const { user } = req;
        const { name, email, password } = user;
        const response = await axios.post(`${this.baseUrl}/register`, { name, email, password }, {
          headers: {
          'Authorization': 'Bearer ' + this.authUser
          }
        });
        if (response) {
          const { token } = response.data;
          if (token) {
             return `User ${ name } ${ email } Created`;
          }
        }
      } catch {
        console.log('request post error');
      }
  }

  public async getUser(
    req: IgetUserUseCase.getUserParams
    ): Promise<IgetUserUseCase.getUserResponse> {
      try {
        const { userEmail, userId } = req;
        this._verifyToken();
        if (userEmail) {
          const response = await axios.get(`${this.baseUrl}/getUser`, {
            params: {
              userEmail: userEmail
            },
            headers: {
              'Authorization': 'Bearer ' + this.authUser
            }
          });
        
          if (response.data) {
            const { _id, name, email } = response.data;
            return { _id, name, email };
          }
        } else if (userId) {
            const response = await axios.get(`${this.baseUrl}/getUser`, {
              params: {
                userEmail: userEmail
              },
              headers: {
                'Authorization': 'Bearer ' + this.authUser
              }
            });
          
            if (response.data) {
              const { _id, name, email } = response.data;
              return { _id, name, email };
          }
        }
      } catch {
        console.log('request get error');
      }
  }

  public async logoutUser(
    req: ILogoutUserUseCase.LogoutUserParams
    ): Promise<ILogoutUserUseCase.LogoutUserResponse> {
      try {
        const { userEmail, userId } = req;
        const response = await axios.post(`${this.baseUrl}/logout`, { email: userEmail, _id: userId }, {
          headers: {
          'Authorization': 'Bearer ' + this.authUser
          }
        });
        if (response.status === 200) {
          cookies.remove('authBatToken');
          this.authUser = '';
        }
      } catch {
        console.log('request post error');
      }
  }
}
