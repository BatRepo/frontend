import { User } from 'domain/user/entitie/UserEntitie';
import { createContext, useContext, useState } from 'react';

interface IUserContenxtData {
  user?: User;
  setUser?(user: User): void;
  userId?: string;
  setUserId?(userId: string): void;
  setId?(id: string): void;
}

interface Props {
  children?: React.ReactNode;
}

export const UserContext = createContext<IUserContenxtData>(
  {} as IUserContenxtData,
);

// eslint-disable-next-line react/prop-types
const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [userId, setUserId] = useState<string>();

  const setId = (id: string) => {
    setUserId(id);
    const userAux = { _id: id, email: user.email}
    setUser(userAux);
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <UserContext.Provider
      value={{
        user,
        setUser,
        userId,
        setId,
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
