import { FC } from "react";
import RacketsCatalog from "./RacketsCatalog";
import { getRackets } from "@/services/getRackets";
import { notFound } from "next/navigation";
import { HttpError } from "@/errors/HttpError";
import { RACKETS_PAGE_LIMIT } from "@/constants/pagination";

const RacketsCatalogContainer: FC = async () => {
  const {
    isError,
    status,
    statusText,
    data: rackets,
  } = await getRackets({
    page: 1,
    limit: RACKETS_PAGE_LIMIT,
  });

  if (isError && status === 404) notFound();

  if (isError) throw new HttpError({ status, statusText });

  if (!rackets?.length) return null;

  return <RacketsCatalog rackets={rackets} />;
};

export default RacketsCatalogContainer;
