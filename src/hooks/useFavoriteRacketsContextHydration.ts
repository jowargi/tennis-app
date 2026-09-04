"use client";

import { Racket } from "@/types/racket";
import { useFavoriteRacketsContext } from "./useFavoriteRacketsContext";
import { useEffect } from "react";

interface UseFavoriteRacketsContextHydrationParams {
  racketId: Racket["id"];
  initialIsFavorite?: boolean;
}

export const useFavoriteRacketsContextHydration = ({
  racketId,
  initialIsFavorite,
}: UseFavoriteRacketsContextHydrationParams): void => {
  const { setFavoriteRacket } = useFavoriteRacketsContext();

  useEffect((): void => {
    if (typeof initialIsFavorite === "boolean") {
      setFavoriteRacket({ racketId, isFavorite: initialIsFavorite });
    }
  }, [racketId, initialIsFavorite, setFavoriteRacket]);
};
