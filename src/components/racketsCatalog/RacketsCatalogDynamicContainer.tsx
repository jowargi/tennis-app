import RacketsCatalogSkeleton from "@/skeletons/racketsCatalog/RacketsCatalogSkeleton";
import dynamic from "next/dynamic";
import { JSX } from "react/jsx-runtime";

const RacketsCatalogDynamicContainer = dynamic(
  () => import("./RacketsCatalogContainer"),
  { ssr: false, loading: (): JSX.Element => <RacketsCatalogSkeleton /> },
);

export default RacketsCatalogDynamicContainer;
