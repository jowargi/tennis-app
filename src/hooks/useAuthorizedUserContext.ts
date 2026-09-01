"use client";

import {
  AuthorizedUserContext,
  AuthorizedUserContextValue,
} from "@/providers/AuthorizedUserContextProvider";
import { useContext } from "react";

export const useAuthorizedUserContext = (): AuthorizedUserContextValue =>
  useContext(AuthorizedUserContext);
