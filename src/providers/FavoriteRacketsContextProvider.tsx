"use client";

import { Racket } from "@/types/racket";
import React, { createContext, FC, useCallback, useState } from "react";

type FavoriteRackets = Record<Racket["id"], boolean>;

interface SetFavoriteRacketParams {
  racketId: Racket["id"];
  isFavorite: boolean;
}

export interface FavoriteRacketsContextValue {
  favoriteRackets: FavoriteRackets;
  setFavoriteRacket: (params: SetFavoriteRacketParams) => void;
}

export const FavoriteRacketsContext =
  createContext<FavoriteRacketsContextValue>({
    favoriteRackets: {},
    setFavoriteRacket: () => {},
  });

const FavoriteRacketsContextProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favoriteRackets, setFavoriteRackets] = useState<FavoriteRackets>({});

  const setFavoriteRacket = useCallback(
    ({ racketId, isFavorite }: SetFavoriteRacketParams): void => {
      setFavoriteRackets(
        (prevFavoriteRackets: FavoriteRackets): FavoriteRackets => {
          if (prevFavoriteRackets[racketId] === isFavorite)
            return prevFavoriteRackets;

          return { ...prevFavoriteRackets, [racketId]: isFavorite };
        },
      );
    },
    [],
  );

  return (
    <FavoriteRacketsContext.Provider
      value={{ favoriteRackets, setFavoriteRacket }}
    >
      {children}
    </FavoriteRacketsContext.Provider>
  );
};

export default FavoriteRacketsContextProvider;
