"use client";

import { useAuthorizedUserContext } from "@/hooks/useAuthorizedUserContext";
import { User } from "@/types/user";
import { FC } from "react";

export interface AuthorizedComponentProps {
  authorizedUser: User;
}

export const withAuth = <P extends object>({
  AuthorizedComponent,
  UnauthorizedComponent,
}: {
  AuthorizedComponent?: FC<P & AuthorizedComponentProps>;
  UnauthorizedComponent?: FC<P>;
}): FC<P> => {
  return function WithAuth(props: P) {
    const user = useAuthorizedUserContext();

    if (!user)
      return UnauthorizedComponent ? (
        <UnauthorizedComponent {...props} />
      ) : null;

    return AuthorizedComponent ? (
      <AuthorizedComponent {...props} authorizedUser={user} />
    ) : null;
  };
};
