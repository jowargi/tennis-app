"use server";

import { BASE_API_URL } from "@/constants/api";
import { HttpError } from "@/errors/HttpError";
import { ServerActionError } from "@/errors/ServerActionError";
import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { cookies } from "next/headers";

export interface RegisterActionState {
  error?: Error;
  redirectTo?: string;
}

export const registerAction = async (
  _prevState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> => {
  const login = formData.get("login")?.toString().trim();
  const password = formData.get("password")?.toString().trim();

  if (!login) return { error: new ServerActionError("Invalid login") };

  if (!password) return { error: new ServerActionError("Invalid password") };

  const response = await fetch(`${BASE_API_URL}/auth/signup`, {
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
