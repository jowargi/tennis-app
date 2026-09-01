import { HttpError } from "@/errors/HttpError";
import { getUser } from "@/services/getUser";
import { User } from "@/types/user";
import { FC } from "react";

export interface AuthorizedComponentProps {
  authorizedUser: User;
}

export const withAuthorized = <P extends object>({
  AuthorizedComponent,
  UnauthorizedComponent,
}: {
  AuthorizedComponent?: FC<P & AuthorizedComponentProps>;
  UnauthorizedComponent?: FC<P>;
}): FC<P> => {
  return async function WithAuthorized(props: P) {
    const { isError, status, statusText, data: user } = await getUser();

    if (isError && status === 401)
      return UnauthorizedComponent ? (
        <UnauthorizedComponent {...props} />
      ) : null;

    if (isError) throw new HttpError({ status, statusText });

    if (!user) return null;

    return AuthorizedComponent ? (
      <AuthorizedComponent {...props} authorizedUser={user} />
    ) : null;
  };
};
