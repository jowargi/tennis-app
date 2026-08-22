import TopRacketsCatalog from "@/components/topRacketsCatalog/TopRacketsCatalog";
import { getTopRackets } from "@/services/getTopRackets";
import TopRacketsCatalogSkeleton from "@/skeletons/topRacketsCatalog/TopRacketsCatalogSkeleton";
import { FC, Suspense } from "react";

const TopRacketsPage: FC<PageProps<"/rackets/top">> = () => {
  const getTopRacketsPromise = getTopRackets();

  return (
    <Suspense fallback={<TopRacketsCatalogSkeleton />}>
      <TopRacketsCatalog getTopRacketsPromise={getTopRacketsPromise} />
    </Suspense>
  );
};

export default TopRacketsPage;
