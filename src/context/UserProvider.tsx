import { useState, type ReactNode } from "react";
import { type User, UserContext, type UserContextType } from "./UserContext";

interface Props {
  children: ReactNode;
}

export function UserProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function login(user: User) {
    setCurrentUser(user);
  }

  function logout() {
    setCurrentUser(null);
  }

  const value: UserContextType = {
    currentUser,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}