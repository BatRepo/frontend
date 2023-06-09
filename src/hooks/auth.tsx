import React, { createContext, useContext, useState } from 'react';
import cookies from 'utils/cookies';

interface IAuthContextData {
  token?: string;
  setToken?(token: string): void;
  getLogged(): boolean;
}

type Props = React.PropsWithChildren<object>

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>();

  const getLogged = (): boolean => {
    if (cookies.get('authToken')) {
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        getLogged,
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