"use client";

import { HttpError } from "@/errors/HttpError";
import { getTopRackets } from "@/services/getTopRackets";
import { Racket } from "@/types/racket";
import { notFound } from "next/navigation";
import { FC, JSX, use } from "react";
import RacketCard from "../racketCard/RacketCard";
import styles from "./TopRacketsCatalog.module.css";

interface TopRacketsCatalogProps {
  getTopRacketsPromise: ReturnType<typeof getTopRackets>;
}

const TopRacketsCatalog: FC<TopRacketsCatalogProps> = ({
  getTopRacketsPromise,
}) => {
  const {
    isError,
    status,
    statusText,
    data: rackets,
  } = use(getTopRacketsPromise);

  if (isError && status === 404) notFound();

  if (isError) throw new HttpError({ status, statusText });

  if (!rackets?.length) return null;

  return (
    <div className={styles.container}>
      {rackets.map((racket: Racket): JSX.Element => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </div>
  );
};

export default TopRacketsCatalog;
