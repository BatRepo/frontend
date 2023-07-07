import { User } from 'domain/user/entitie/UserEntitie';
import { createContext, useContext, useEffect, useState } from 'react';
import cookies from 'utils/cookies';

interface IUserContenxtData {
  user?: User;
  setUser?(email: string, id: string): void;
  userId?: string;
  setUserId?(userId: string): void;
  setId?(id: string): void;
}

type Props = React.PropsWithChildren<object>

export const UserContext = createContext<IUserContenxtData>(
  {} as IUserContenxtData,
);

// eslint-disable-next-line react/prop-types
const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setuser] = useState<User>();
  const [userId, setUserId] = useState<string>(cookies.get(`${process.env.USER_COOKIE_REF}`));

  const setUser = (email: string, id: string) => {
    setuser({email, id});
    cookies.set(`${process.env.USER_COOKIE_REF}`, id);
  };

  useEffect(() => {
    console.log('user hook', user);
  }, [user]);

  const setId = (id: string) => {
    setUserId(id);
    const userAux = { id, email: user.email}
    setuser(userAux);
    cookies.set(`${process.env.USER_COOKIE_REF}`, id);
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
