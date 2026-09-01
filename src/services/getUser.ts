import { BASE_API_URL } from "@/constants/api";
import { Response } from "@/types/response";
import { User } from "@/types/user";
import { cookies } from "next/headers";

export const getUser = async (): Response<User> => {
  const cookieStore = await cookies();

  const response = await fetch(`${BASE_API_URL}/auth/user`, {
    headers: { Cookie: cookieStore.toString() },
  });

  if (!response.ok)
    return {
      isError: true,
      status: response.status,
      statusText: response.statusText,
    };

  const user = (await response.json())?.user;

  return {
    isError: false,
    status: response.status,
    statusText: response.statusText,
    data: user,
  };
};
