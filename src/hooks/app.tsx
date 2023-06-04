import { AuthProvider } from "./auth";
import { UserProvider } from "./user";


const AppProvider: React.FC = ({ children }) => (
  <UserProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </UserProvider>
);

export default AppProvider;