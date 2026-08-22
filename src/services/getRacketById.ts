import { BASE_API_URL } from "@/constants/api";
import { Racket } from "@/types/racket";
import { Response } from "@/types/response";

export const getRacketById = async (
  racketId: Racket["id"],
): Response<Racket> => {
  const response = await fetch(`${BASE_API_URL}/product/${racketId}`);

  if (!response.ok)
    return {
      isError: true,
      status: response.status,
      statusText: response.statusText,
    };

  const racket = (await response.json())?.product;

  return {
    isError: false,
    status: response.status,
    statusText: response.statusText,
    data: racket,
  };
};
