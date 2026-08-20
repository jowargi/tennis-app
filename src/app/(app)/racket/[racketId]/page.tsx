import { FC } from "react";
import { rackets } from "@/constants/mock";
import { Racket } from "@/types/racket";
import styles from "./page.module.css";
import RacketView from "@/components/racketView/RacketView";

export const generateStaticParams = (): Record<"racketId", string>[] => {
  return rackets
    .slice(0, 3)
    .map((racket: Racket): Record<"racketId", string> => ({
      racketId: racket.id.toString(),
    }));
};

const RacketPage: FC<PageProps<"/racket/[racketId]">> = async ({ params }) => {
  const { racketId } = await params;

  const racket = rackets.find(
    (racket: Racket): boolean => racket.id === +racketId,
  );

  if (!racket) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ракетка</h2>
      <RacketView racket={racket} />
    </section>
  );
};

export default RacketPage;
