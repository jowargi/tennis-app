"use client";

import { BASE_API_URL } from "@/constants/api";
import { FC, useCallback, useTransition } from "react";
import Button from "../button/Button";

const handleLogout = async (): Promise<void> => {
  await fetch(`${BASE_API_URL}/auth/logout`, {
    method: "DELETE",
    credentials: "include",
  });

  // eslint-disable-next-line @next/next/no-location-assign-relative-destination
  window.location.assign("/");
};

const LogoutButton: FC = () => {
  const [isPending, startTransition] = useTransition();

  const onClick = useCallback((): void => startTransition(handleLogout), []);

  return (
    <Button disabled={isPending} onClick={onClick}>
      Выход
    </Button>
  );
};

export default LogoutButton;
