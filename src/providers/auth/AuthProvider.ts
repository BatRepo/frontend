import { LoginEtitie } from "domain/user/entitie/UserEntitie";
import api from "./api";



export const login = async (
  User: LoginEtitie,
): Promise<any> => {
    const token = await api.post('/login', { "email": User.email, "password": User.password });
    console.log('token provider', token);
    if (token) return token;
    throw new Error('Credential error');
};