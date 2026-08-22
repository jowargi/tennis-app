import { BASE_API_URL } from "@/constants/api";
import { Racket } from "@/types/racket";
import { Response } from "@/types/response";

export const getTopRackets = async (): Response<Racket[]> => {
  const response = await fetch(`${BASE_API_URL}/top-10`);

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
