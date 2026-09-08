import { BASE_API_URL } from "@/constants/api";
import { Brand } from "@/types/brand";
import { Response } from "@/types/response";

export const getBrands = async (): Response<Brand[]> => {
  const response = await fetch(`${BASE_API_URL}/brands`, {
    next: { tags: ["getBrands"] },
  });

  if (!response.ok)
    return {
      isError: true,
      status: response.status,
      statusText: response.statusText,
    };

  const brands = await response.json();

  return {
    isError: false,
    status: response.status,
    statusText: response.statusText,
    data: brands,
  };
};
