import { FC, Suspense } from "react";
import styles from "./page.module.css";
import PaginatedRacketsCarouselContainer from "@/components/racketsCarousel/PaginatedRacketsCarouselContainer";
import TopRacketsCarouselContainer from "@/components/racketsCarousel/TopRacketsCarouselContainer";
import { Metadata } from "next";
import ResponsiveRacketsCarouselSkeleton from "@/skeletons/racketsCarousel/ResponsiveRacketsCarouselSkeleton";

export const metadata: Metadata = {
  title: "Tennis Store",
  description:
    "Магазин теннисных ракеток. Проверенные модели для точного контроля, мощной подачи и безупречного стиля на корте. Подберите идеальную ракетку для своей игры.",
};

const HomePage: FC<PageProps<"/">> = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ваш идеальный удар начинается здесь</h2>
      <p className={styles.text}>
        Мы знаем, что ракетка — это не просто инвентарь, а продолжение вашей
        руки. В нашем магазине — только проверенные модели для точного контроля,
        мощной подачи и безупречного стиля на корте. Найдите ту самую ракетку, с
        которой каждая победа будет ощущаться иначе.
      </p>
      <Suspense fallback={<ResponsiveRacketsCarouselSkeleton />}>
        <PaginatedRacketsCarouselContainer page={1} limit={10} />
      </Suspense>
      <Suspense fallback={<ResponsiveRacketsCarouselSkeleton />}>
        <TopRacketsCarouselContainer />
      </Suspense>
    </section>
  );
};

export default HomePage;
