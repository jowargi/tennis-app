import { FC, Suspense } from "react";
import styles from "./page.module.css";
import PaginatedRacketsCarouselContainer from "@/components/racketsCarousel/PaginatedRacketsCarouselContainer";
import TopRacketsCarouselContainer from "@/components/racketsCarousel/TopRacketsCarouselContainer";
import RacketsCarouselSkeleton from "@/skeletons/racketsCarousel/RacketsCarouselSkeleton";

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
      <Suspense fallback={<RacketsCarouselSkeleton />}>
        <PaginatedRacketsCarouselContainer page={1} limit={10} />
      </Suspense>
      <Suspense fallback={<RacketsCarouselSkeleton />}>
        <TopRacketsCarouselContainer />
      </Suspense>
    </section>
  );
};

export default HomePage;
