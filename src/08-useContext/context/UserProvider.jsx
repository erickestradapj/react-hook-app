import { UserContext } from './UserContext';

const user = {
  id: 123,
  name: 'John Doe',
  email: 'john.doe@email.com',
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hello: 'World', user: user }}>
      {children}
    </UserContext.Provider>
  );
};
