import { getTopRackets } from "@/services/getTopRackets";
import { FC } from "react";
import RacketsCarousel from "./RacketsCarousel";

const TopRacketsCarouselContainer: FC = async () => {
  const { isError, data: rackets } = await getTopRackets();

  if (isError) return null;

  if (!rackets?.length) return null;

  return (
    <RacketsCarousel
      rackets={rackets}
      racketsCarouselTitle="Топ-10 ракеток"
      linkHref="/rackets/top"
      linkText="Топ-10 ↗"
    />
  );
};

export default TopRacketsCarouselContainer;
