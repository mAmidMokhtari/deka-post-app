import { createContext } from 'react';

export interface IUserContext {
  username: string | null;
  handleChangeUsername: (username: string) => void
}

export default createContext<IUserContext>({
  username: null,
  handleChangeUsername: () => null
});
