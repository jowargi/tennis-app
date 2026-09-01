"use client";

import { getUser } from "@/services/getUser";
import { User } from "@/types/user";
import React, { createContext, FC, use } from "react";

export type AuthorizedUserContextValue = User | undefined;

interface AuthorizedUserContextProviderProps {
  children: React.ReactNode;
  getUserPromise: ReturnType<typeof getUser>;
}

export const AuthorizedUserContext =
  createContext<AuthorizedUserContextValue>(undefined);

const AuthorizedUserContextProvider: FC<AuthorizedUserContextProviderProps> = ({
  children,
  getUserPromise,
}) => {
  const { data: authorizedUser } = use(getUserPromise);

  return (
    <AuthorizedUserContext.Provider value={authorizedUser}>
      {children}
    </AuthorizedUserContext.Provider>
  );
};

export default AuthorizedUserContextProvider;
