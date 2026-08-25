import TopRacketsCatalog from "@/components/topRacketsCatalog/TopRacketsCatalog";
import { getTopRackets } from "@/services/getTopRackets";
import TopRacketsCatalogSkeleton from "@/skeletons/topRacketsCatalog/TopRacketsCatalogSkeleton";
import { Metadata } from "next";
import { FC, Suspense } from "react";

export const metadata: Metadata = {
  title: "Топ теннисных ракеток",
  description:
    "Самые популярные и лучшие теннисные ракетки по версии наших клиентов. Топ-модели для профессиональной и любительской игры.",
};

const TopRacketsPage: FC<PageProps<"/rackets/top">> = () => {
  const getTopRacketsPromise = getTopRackets();

  return (
    <Suspense fallback={<TopRacketsCatalogSkeleton />}>
      <TopRacketsCatalog getTopRacketsPromise={getTopRacketsPromise} />
    </Suspense>
  );
};

export default TopRacketsPage;
