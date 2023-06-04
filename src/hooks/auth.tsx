import React, { createContext, useContext, useState } from 'react';

interface IAuthContenxtData {
  token?: string;
  setToken?(token: string): void;
}

interface Props {
  children?: React.ReactNode;
}

export const AuthContext = createContext<IAuthContenxtData>(
  {} as IAuthContenxtData,
);

// eslint-disable-next-line react/prop-types
const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = useState<string>();

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContenxtData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Rating must be used within a RatingProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
