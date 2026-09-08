import RacketsCatalogContainer from "@/components/racketsCatalog/RacketsCatalogContainer";
import { RACKETS_PAGE_LIMIT } from "@/constants/pagination";
import { getBrands } from "@/services/getBrands";
import { getRackets } from "@/services/getRackets";
import { Metadata } from "next";
import { FC } from "react";
import { SWRConfig } from "swr";

export const metadata: Metadata = {
  title: "Каталог теннисных ракеток",
  description:
    "Широкий выбор теннисных ракеток ведущих брендов. Подберите идеальную ракетку для своего стиля игры.",
};

const RacketsPage: FC<PageProps<"/rackets">> = async ({ searchParams }) => {
  const { page, brand } = await searchParams;

  let pageNumber = typeof page === "string" ? parseInt(page) || 1 : 1;

  if (pageNumber < 0) pageNumber = 1;

  const brandName = typeof brand === "string" ? brand : undefined;

  const racketsResponse = await getRackets({
    page: pageNumber,
    limit: RACKETS_PAGE_LIMIT,
    brand: brandName,
  });

  const { data: brands } = await getBrands();

  return (
    <SWRConfig
      value={{
        fallback: {
          [`products?page=${pageNumber}&limit=${RACKETS_PAGE_LIMIT}` +
          (brandName ? `&brand=${brandName}` : "")]: racketsResponse,
        },
        revalidateIfStale: false,
        revalidateOnFocus: false,
      }}
    >
      <RacketsCatalogContainer brands={brands} />
    </SWRConfig>
  );
};

export default RacketsPage;
