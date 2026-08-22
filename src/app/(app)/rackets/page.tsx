import RacketsCatalogContainer from "@/components/racketsCatalog/RacketsCatalogContainer";
import RacketsCatalogSkeleton from "@/skeletons/racketsCatalog/RacketsCatalogSkeleton";
import { FC, Suspense } from "react";

const RacketsPage: FC<PageProps<"/rackets">> = () => {
  return (
    <Suspense fallback={<RacketsCatalogSkeleton />}>
      <RacketsCatalogContainer />
    </Suspense>
  );
};

export default RacketsPage;
