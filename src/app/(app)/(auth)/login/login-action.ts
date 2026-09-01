"use server";

import { BASE_API_URL } from "@/constants/api";
import { HttpError } from "@/errors/HttpError";
import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { cookies } from "next/headers";

export interface LoginActionState {
  error?: HttpError;
  redirectTo?: string;
}

export const loginAction = async (
  _prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> => {
  const login = formData.get("login")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const response = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok)
    return {
      error: new HttpError({
        status: response.status,
        statusText: response.statusText,
      }),
    };

  const cookieStore = await cookies();
  const setCookieHeader = response.headers.getSetCookie();

  if (setCookieHeader.length) {
    const parsedSetCookieHeader = parseSetCookie(setCookieHeader);

    for (const parsedCookie of parsedSetCookieHeader) {
      cookieStore.set(
        parsedCookie.name,
        parsedCookie.value,
        parsedCookie.options,
      );
    }
  }

  return { redirectTo: "/" };
};
