import RacketsCatalogContainer from "@/components/racketsCatalog/RacketsCatalogContainer";
import RacketsCatalogSkeleton from "@/skeletons/racketsCatalog/RacketsCatalogSkeleton";
import { Metadata } from "next";
import { FC, Suspense } from "react";

export const metadata: Metadata = {
  title: "Каталог теннисных ракеток",
  description:
    "Широкий выбор теннисных ракеток ведущих брендов. Подберите идеальную ракетку для своего стиля игры.",
};

const RacketsPage: FC<PageProps<"/rackets">> = () => {
  return (
    <Suspense fallback={<RacketsCatalogSkeleton />}>
      <RacketsCatalogContainer />
    </Suspense>
  );
};

export default RacketsPage;
