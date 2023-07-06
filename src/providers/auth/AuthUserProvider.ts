import { IUserProvider } from "domain/user/IUserProvider";
import AuthBaseApi from "./AuthBaseApi";
import { ILoginUserUseCase } from "domain/user/UseCases/login/ILoginUser";
import cookies from "utils/cookies";
import { ICreateUserUseCase } from "domain/user/UseCases/createUser/ICreateUser";
import axios from "axios";
import { useUser } from "hooks/user";
import { IgetUserUseCase } from "domain/user/UseCases/getUser/IGetUserUseCase";
import { ILogoutUserUseCase } from "domain/user/UseCases/logout/ILogoutUserUseCase";
import { useAuth } from "hooks/auth";
export default class AuthUserProvider
  extends AuthBaseApi
  implements IUserProvider
{
  public authUser = cookies.get('authBatToken');
  private userHook = useUser();
  private authHook = useAuth();
  
  private _verifyToken(): boolean {
    const cookiesToken = cookies.get('authBatToken');
    if (cookiesToken != undefined) {
      this.authUser = cookiesToken;
      return true;
    }
    if (this.authHook.token) {
      this.authUser = this.authHook.token;
      return true;
    }
    if (this.authUser === undefined) {
      return false;
    }
    return false;

  }

  public async loginUser(
    req: ILoginUserUseCase.LoginUserParams,
  ): Promise<ILoginUserUseCase.LoginUserResponse> {
    try {
      const { user } = req;
      const { email, password } = user;
       const response = (await axios.post(`${this.baseUrl}/login`, { email, password }));
        if (response) {
          const { user } = response.data;
          const {token, userId } = user;
          if (token && userId) {
            this.authHook.setToken(token);
            this.authHook.logguedSet(true);
            this.userHook.setUser({ _id: userId, email });
            cookies.set('authBatToken', token);
            this.authHook.loginSuccess();
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
        const tokenAlreadyExists = this._verifyToken();
        if (tokenAlreadyExists) {
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
        if (userEmail) {
          const tokenAlreadyExists = this._verifyToken();
          if (tokenAlreadyExists) {
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
        const tokenAlreadyExists = this._verifyToken();
        if (tokenAlreadyExists) {
          const response = await axios.post(`${this.baseUrl}/logout`, { email: userEmail, _id: userId }, {
            headers: {
            'Authorization': 'Bearer ' + this.authUser
            }
          });
          if (response.status === 200) {
            cookies.remove('authBatToken');
            this.authUser = undefined;
          }
        }
      } catch {
        console.log('request post error');
      }
  }
}
