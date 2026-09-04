"use client";

import { useFavoriteRacketsContext } from "@/hooks/useFavoriteRacketsContext";
import { useFavoriteRacketsContextHydration } from "@/hooks/useFavoriteRacketsContextHydration";
import { useIsRacketFavoriteById } from "@/hooks/useIsRacketFavoriteById";
import { Racket } from "@/types/racket";
import { FC, useOptimistic, useTransition } from "react";
import Button from "../button/Button";
import { BASE_API_URL } from "@/constants/api";
import { HttpError } from "@/errors/HttpError";

interface ToggleFavoriteParams {
  racketId: Racket["id"];
  isFavorite: boolean;
}

interface FavoriteToggleProps {
  racketId: Racket["id"];
  initialIsFavorite: boolean;
  addLabel: string;
  removeLabel: string;
  borderRadius?: "square" | "rounded";
  fontSize?: "xs" | "s" | "m" | "l" | "xl";
}

const toggleFavorite = async ({
  racketId,
  isFavorite,
}: ToggleFavoriteParams): Promise<void> => {
  const response = await fetch(`${BASE_API_URL}/product/${racketId}/favorite`, {
    method: isFavorite ? "DELETE" : "POST",
    credentials: "include",
  });

  if (!response.ok)
    throw new HttpError({
      status: response.status,
      statusText: response.statusText,
    });
};

const FavoriteToggle: FC<FavoriteToggleProps> = ({
  racketId,
  initialIsFavorite,
  addLabel,
  removeLabel,
  borderRadius = "square",
  fontSize = "m",
}) => {
  useFavoriteRacketsContextHydration({ racketId, initialIsFavorite });

  const isFavorite = useIsRacketFavoriteById({ racketId, initialIsFavorite });

  const { setFavoriteRacket } = useFavoriteRacketsContext();

  const [optimisticIsFavorite, toggleOptimisticIsFavorite] = useOptimistic<
    boolean,
    void
  >(isFavorite, (currentIsFavorite: boolean): boolean => !currentIsFavorite);

  const [isPending, startTransition] = useTransition();

  const onClick = (): void => {
    startTransition(async (): Promise<void> => {
      toggleOptimisticIsFavorite();

      await toggleFavorite({ racketId, isFavorite });

      setFavoriteRacket({ racketId, isFavorite: !isFavorite });
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={onClick}
      borderRadius={borderRadius}
      fontSize={fontSize}
    >
      {optimisticIsFavorite ? removeLabel : addLabel}
    </Button>
  );
};

export default FavoriteToggle;
