"use server";

import { BASE_API_URL } from "@/constants/api";
import { HttpError } from "@/errors/HttpError";
import { Racket } from "@/types/racket";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface ToggleFavoriteActionParams {
  racketId: Racket["id"];
  isFavorite: boolean;
}

export const toggleFavoriteAction = async ({
  racketId,
  isFavorite,
}: ToggleFavoriteActionParams): Promise<void> => {
  const cookieStore = await cookies();

  const response = await fetch(`${BASE_API_URL}/product/${racketId}/favorite`, {
    method: isFavorite ? "DELETE" : "POST",
    headers: { Cookie: cookieStore.toString() },
  });

  if (!response.ok)
    throw new HttpError({
      status: response.status,
      statusText: response.statusText,
    });

  revalidatePath(`/racket/${racketId}`);
};
