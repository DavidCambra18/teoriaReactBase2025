import { useContext } from "react";
import { UserContext, type UserContextType } from "../context/UserContext";

export function useUser(): UserContextType {
  const ctx = useContext(UserContext);

  if (!ctx) {
    throw new Error("useUser debe usarse dentro de un <UserProvider>");
  }

  return ctx;
}
