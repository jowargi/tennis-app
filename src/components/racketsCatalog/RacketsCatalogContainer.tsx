import { FC } from "react";
import { rackets } from "@/constants/mock";
import RacketsCatalog from "./RacketsCatalog";

const RacketsCatalogContainer: FC = () => {
  if (!rackets.length) return null;

  return <RacketsCatalog rackets={rackets} />;
};

export default RacketsCatalogContainer;
