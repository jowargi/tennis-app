"use client";

import {
  FavoriteRacketsContext,
  FavoriteRacketsContextValue,
} from "@/providers/FavoriteRacketsContextProvider";
import { useContext } from "react";

export const useFavoriteRacketsContext = (): FavoriteRacketsContextValue =>
  useContext(FavoriteRacketsContext);
