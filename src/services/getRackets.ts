import { BASE_API_URL } from "@/constants/api";
import { Racket } from "@/types/racket";
import { Response } from "@/types/response";

interface GetRacketsParams {
  page: number;
  limit: number;
}

export const getRackets = async ({
  page,
  limit,
}: GetRacketsParams): Response<Racket[]> => {
  const response = await fetch(
    `${BASE_API_URL}/products?page=${page}&limit=${limit}`,
  );

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
