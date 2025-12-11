import { createContext } from "react";

export interface User {
  name: string;
  role: string;
}

export interface UserContextType {
  currentUser: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);
