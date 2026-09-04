import { BASE_API_URL } from "@/constants/api";
import { Racket } from "@/types/racket";
import { Response } from "@/types/response";
import { cookies } from "next/headers";

export const getTopRackets = async (): Response<Racket[]> => {
  const cookieStore = await cookies();

  const response = await fetch(`${BASE_API_URL}/top-10`, {
    // next: { tags: ["getTopRackets"] },
    headers: { Cookie: cookieStore.toString() },
  });

  if (!response.ok)
    return {
      isError: true,
      status: response.status,
      statusText: response.statusText,
    };

  const rackets = await response.json();

  return {
    isError: false,
    status: response.status,
    statusText: response.statusText,
    data: rackets,
  };
};
