import { FC } from "react";
import styles from "./page.module.css";
import RacketView from "@/components/racketView/RacketView";
import { getRacketById } from "@/services/getRacketById";
import { notFound } from "next/navigation";
import { HttpError } from "@/errors/HttpError";
import { Metadata } from "next";
import { getRacketMetadataById } from "@/services/getRacketMetadataById";
import FavoriteToggle from "@/components/favoriteToggle/FavoriteToggle";

export const generateMetadata = async ({
  params,
}: PageProps<"/racket/[racketId]">): Promise<Metadata> => {
  const { racketId } = await params;

  const { isError, data: racketMetadata } =
    await getRacketMetadataById(+racketId);

  if (isError || !racketMetadata)
    return {
      title: "Ракетка не найдена",
      description: "Запрошенная модель ракетки недоступна или была удалена.",
    };

  return {
    title: racketMetadata.name,
    description: racketMetadata.description,
  };
};

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
      {racket.userData && (
        <FavoriteToggle
          racketId={racket.id}
          initialIsFavorite={racket.userData.isFavorite}
          addLabel="Добавить в избранное"
          removeLabel="Удалить из избранного"
        />
      )}
    </section>
  );
};

export default RacketPage;
