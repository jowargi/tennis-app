import { BASE_API_URL } from "@/constants/api";
import { Brand } from "@/types/brand";
import { Racket } from "@/types/racket";
import { Response } from "@/types/response";
import { cookies } from "next/headers";

interface GetRacketsParams {
  page: number;
  limit: number;
  brand?: Brand["name"];
}

export const getRackets = async ({
  page,
  limit,
  brand,
}: GetRacketsParams): Response<Racket[]> => {
  const cookieStore = await cookies();

  const response = await fetch(
    `${BASE_API_URL}/products?page=${page}&limit=${limit}` +
      (brand ? `&brand=${brand}` : ""),
    { headers: { Cookie: cookieStore.toString() } },
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
