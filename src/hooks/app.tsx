import React from 'react';
import { AuthProvider } from "./auth";
import { UserProvider } from "./user";


type Props = React.PropsWithChildren<object>

const AppProvider: React.FC<Props> = ({ children }) => (
  <UserProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </UserProvider>
);

export default AppProvider;