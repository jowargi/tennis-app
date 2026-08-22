import { getRackets } from "@/services/getRackets";
import { FC } from "react";
import RacketsCarousel from "./RacketsCarousel";

interface PaginatedRacketsCarouselContainerProps {
  page: number;
  limit: number;
}

const PaginatedRacketsCarouselContainer: FC<
  PaginatedRacketsCarouselContainerProps
> = async ({ page, limit }) => {
  const { isError, data: rackets } = await getRackets({
    page,
    limit,
  });

  if (isError) return null;

  if (!rackets?.length) return null;

  return <RacketsCarousel rackets={rackets} />;
};

export default PaginatedRacketsCarouselContainer;
