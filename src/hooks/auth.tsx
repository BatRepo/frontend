import Router from 'next/router';
import React, { createContext, useContext, useState } from 'react';
import cookies from 'utils/cookies';

interface IAuthContextData {
  token?: string;
  setToken?(token: string): void;
  getLogged(): boolean;
  loggued?: boolean;
  setLoggued?(loggued: boolean): void;
  loginSuccess?(): void;
  logguedSet?(logado: boolean): void;
}

type Props = React.PropsWithChildren<object>

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(cookies.get(`${process.env.NEXT_AUTH_COOKIE_NAME}`));
  const [loggued, setLoggued] = useState<boolean>(!!cookies.get(`${process.env.NEXT_AUTH_COOKIE_NAME}`) || false);

  const logguedSet = (logado: boolean): void => {
    if (logado) {
      setLoggued(logado);
    }
    if (cookies.get(`${process.env.NEXT_AUTH_COOKIE_NAME}`) !== undefined) {
      setLoggued(true);
    }
  }

  const loginSuccess = (): void => {
      Router.back();
  }

  const getLogged = (): boolean => {
    const cookiesToken = cookies.get(`${process.env.NEXT_AUTH_COOKIE_NAME}`);
    if (cookiesToken !== undefined && token !== undefined) {
      if (cookiesToken === token) {
        return true;
      }
      return false;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        getLogged,
        loggued,
        setLoggued,
        loginSuccess,
        logguedSet,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };