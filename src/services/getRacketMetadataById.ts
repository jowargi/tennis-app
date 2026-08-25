import { BASE_API_URL } from "@/constants/api";
import { Racket } from "@/types/racket";
import { RacketMetadata } from "@/types/racketMetadata";
import { Response } from "@/types/response";

export const getRacketMetadataById = async (
  racketId: Racket["id"],
): Response<RacketMetadata> => {
  const response = await fetch(`${BASE_API_URL}/meta/product/${racketId}`);

  if (!response.ok)
    return {
      isError: true,
      status: response.status,
      statusText: response.statusText,
    };

  const racketMetadata = (await response.json())?.product;

  return {
    isError: false,
    status: response.status,
    statusText: response.statusText,
    data: racketMetadata,
  };
};
