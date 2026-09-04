"use client";

import { Racket } from "@/types/racket";
import { useFavoriteRacketsContext } from "./useFavoriteRacketsContext";

interface UseIsRacketFavoriteByIdParams {
  racketId: Racket["id"];
  initialIsFavorite?: boolean;
}

export const useIsRacketFavoriteById = ({
  racketId,
  initialIsFavorite,
}: UseIsRacketFavoriteByIdParams): boolean => {
  const { favoriteRackets } = useFavoriteRacketsContext();

  const isFavorite = favoriteRackets[racketId] ?? initialIsFavorite;

  return Boolean(isFavorite);
};
