import { FC } from "react";
import styles from "./page.module.css";
import RacketView from "@/components/racketView/RacketView";
import { getRacketById } from "@/services/getRacketById";
import { notFound } from "next/navigation";
import { HttpError } from "@/errors/HttpError";

const RacketPage: FC<PageProps<"/racket/[racketId]">> = async ({ params }) => {
  const { racketId } = await params;

  const {
    isError,
    status,
    statusText,
    data: racket,
  } = await getRacketById(+racketId);

  if (isError && status === 404) notFound();

  if (isError) throw new HttpError({ status, statusText });

  if (!racket) return null;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Ракетка</h2>
      <RacketView racket={racket} />
    </section>
  );
};

export default RacketPage;
