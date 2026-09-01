"use client";

import { FC, useOptimistic, useTransition } from "react";
import Button from "../button/Button";
import { Racket } from "@/types/racket";
import { toggleFavoriteAction } from "./toggleFavoriteAction";

interface FavoriteRacketToggleProps {
  racketId: Racket["id"];
  initialIsFavorite: boolean;
}

const FavoriteRacketToggle: FC<FavoriteRacketToggleProps> = ({
  racketId,
  initialIsFavorite,
}) => {
  const [isFavorite, toggleIsFavorite] = useOptimistic<boolean, void>(
    initialIsFavorite,
    (currentIsFavorite: boolean): boolean => !currentIsFavorite,
  );

  const [isPending, startTransition] = useTransition();

  const onClick = (): void => {
    startTransition(async (): Promise<void> => {
      toggleIsFavorite();

      await toggleFavoriteAction({ racketId, isFavorite });
    });
  };

  return (
    <Button disabled={isPending} onClick={onClick}>
      {isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
    </Button>
  );
};

export default FavoriteRacketToggle;
