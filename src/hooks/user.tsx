import { UserEntitie } from 'domain/user/entitie/UserEntitie';
import { createContext, useContext, useState } from 'react';

interface IUserContenxtData {
  user?: UserEntitie;
  setUser?(user: UserEntitie): void;
  userId?: string;
  setUserId?(userId: string): void;
}

interface Props {
  children?: React.ReactNode;
}

export const UserContext = createContext<IUserContenxtData>(
  {} as IUserContenxtData,
);

// eslint-disable-next-line react/prop-types
const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserEntitie>();
  const [userId, setUserId] = useState<string>();

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <UserContext.Provider
      value={{
        user,
        setUser,
        userId,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser(): IUserContenxtData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Rating must be used within a RatingProvider');
  }

  return context;
}

export { useUser, UserProvider };
