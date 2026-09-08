"use client";

import { FC } from "react";
import RacketsCatalog from "./RacketsCatalog";
import useSWR from "swr";
import { notFound, useSearchParams } from "next/navigation";
import { RACKETS_PAGE_LIMIT } from "@/constants/pagination";
import { Response } from "@/types/response";
import { Racket } from "@/types/racket";
import { BASE_API_URL } from "@/constants/api";
import RacketsCatalogSkeleton from "@/skeletons/racketsCatalog/RacketsCatalogSkeleton";
import { HttpError } from "@/errors/HttpError";
import { Brand } from "@/types/brand";
import BrandFilter from "../brandFilter/BrandFilter";
import PaginationControls from "../paginationControls/PaginationControls";

const fetcher = async (key: string): Response<Racket[]> => {
  const response = await fetch(`${BASE_API_URL}/${key}`, {
    credentials: "include",
  });

  if (!response.ok)
    return {
      isError: true,
      status: response.status,
      statusText: response.statusText,
    };

  const rackets = await response.json();

  return {
    isError: false,
    status: response.status,
    statusText: response.statusText,
    data: rackets,
  };
};

const RacketsCatalogContainer: FC<{ brands?: Brand[] }> = ({ brands }) => {
  const searchParams = useSearchParams();

  let pageNumber = parseInt(searchParams.get("page") ?? "") || 1;

  if (pageNumber < 0) pageNumber = 1;

  const brandName = searchParams.get("brand");

  const { isLoading, error, data } = useSWR<Awaited<Response<Racket[]>>>(
    `products?page=${pageNumber}&limit=${RACKETS_PAGE_LIMIT}` +
      (brandName ? `&brand=${brandName}` : ""),
    fetcher,
    { revalidateIfStale: false, revalidateOnFocus: false },
  );

  if (isLoading) return <RacketsCatalogSkeleton />;

  if (error) throw error;

  if (!data) return null;

  const { isError, status, statusText, data: rackets } = data;

  if (isError && status === 404) notFound();

  if (isError) throw new HttpError({ status, statusText });

  if (!rackets?.length) return null;

  return (
    <>
      <BrandFilter brands={brands} />
      <RacketsCatalog rackets={rackets} />
      <PaginationControls
        currentPage={pageNumber}
        prevDisabled={pageNumber === 1}
        nextDisabled={rackets.length !== RACKETS_PAGE_LIMIT}
      />
    </>
  );
};

export default RacketsCatalogContainer;
